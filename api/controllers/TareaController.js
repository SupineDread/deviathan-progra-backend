/**
 * TareaController
 *
 * @description :: Server-side logic for managing Tareas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	getAllTareasProfesor: (req, res) => {
		let id = req.param('id');
		Tarea.find({profesor: id}).populateAll().then(function(data) {
		  return res.json(data);
		}).catch(function(err) {
		  return res.json(500, {err: err});
		});
	},

	getAllTareasAlumno: (req, res) => {
		let id = req.param('id');
		User.findOne(id).then(function(user) {
		  if(!user.grupo) return res.json(500, {err: 'El usuario no tiene un grupo asignado.'});
			Tarea.find({grupo: user.grupo}).populateAll().then(function(data) {
			  return res.json(data);
			}).catch(function(err) {
			  console.log(err);
			  return res.json(500, {msg: err});
			});
		}).catch(function(err) {
		  console.log(err);
		  return res.json(500, {msg: err});
		});
	}

};
