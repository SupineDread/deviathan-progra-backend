/**
 * ClaseHorarioController
 *
 * @description :: Server-side logic for managing Clasehorarios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

const moment = require('moment');

module.exports = {

  getMyHorario: (req, res) => {
    let id = req.param('id');
    let dia = moment().weekday();
    ClaseHorario.find({dia: dia, grupo: id}).populateAll().then(function(data) {
      return res.json(data);
    }).catch(function(err) {
      console.log(err);
      return res.json(500, {msg: err});
    });
  }

};
