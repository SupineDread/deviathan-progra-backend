/**
 * Grupo.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nombre: {
      type: 'string',
      required: true
    },

    semestre: {
      type: 'integer',
      required: true
    },

    horario: {
      collection: 'ClaseHorario',
      via: 'grupo'
    },

    alumnos: {
      collection: 'user',
      via: 'grupo'
    },

    tareas: {
      collection: 'tarea',
      via: 'grupo'
    }

  }
};
