/**
 * Salon.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    inventario: {
      collection: 'inventario',
      via: 'salon'
    },

    reservas: {
      collection: 'reserva',
      via: 'salon'
    },

    clases: {
      collection: 'ClaseHorario',
      via: 'salon'
    }

  }
};
