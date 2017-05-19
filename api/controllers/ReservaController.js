/**
 * ReservaController
 *
 * @description :: Server-side logic for managing Reservas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  getMyReservas: (req, res) => {
    let id = req.param('id');
    Reserva.find({user: id}).populateAll().then(function(data) {
      return res.json(data);
    }).catch(function(err) {
      return res.json(500, {err: err});
    });
  }

};
