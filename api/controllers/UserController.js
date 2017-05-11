/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
const sha256 = require('crypto-js/sha256');
const jwt = require('jsonwebtoken');

module.exports = {

	login: function (req, res) {
		let username = req.param('username');
		let password = req.param('password');
		let hash = sha256(password).toString();
		User.findOne({username: username}).populateAll().then(function(data) {
		  if (!data) return res.json({err: 'Usuario no encontrado'});
			if (data.password != hash) return res.json({err: 'Contraseña incorrecta'});
			let token = jwt.sign(data, 'LaTecnicaAlServicioDeLaPatria');
			return res.json({user: data, token: token});
		})
	},

	getAllTeachers: function (req, res) {
		User.find({roles: ['ROLE_PROFESOR']}).then(function(data) {
		  return res.json(data);
		}).catch(function(err) {
		  return res.json(500, []);
		});
	}

};
