/**
 * ClaseHorario.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    materia: {
      model: 'materia'
    },

    grupo: {
      model: 'grupo'
    },

    inicio: {
      type: 'string',
      required: true
    },

    fin: {
      type: 'string',
      required: true
    },

    dia: {
      type: 'integer',
      enum: [1, 2, 3, 4, 5, 6],
      required: true
    },

    profesores: {
      collection: 'user',
      via: 'clases',
      dominant: true
    }

  }
};
