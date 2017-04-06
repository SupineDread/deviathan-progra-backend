/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
const sha256 = require('crypto-js/sha256');

module.exports = {

  attributes: {

    username: {
      type: 'string',
      required: true,
      unique: true
    },

    password: {
      type: 'string',
      required: true
    },

    email: {
      type: 'string',
      required: true
    },

    boleta: {
      type: 'string'
    },

    firstName: {
      type: 'string',
      required: true
    },

    lastName: {
      type: 'string',
      required: true
    },

    roles: {
      type: 'array',
      defaultsTo: ['ROLE_ALUMNO']
      // ROLE_ALUMNO  ROLE_PROFESOR ROLE_ADMIN
    },

    grupo: {
      model: 'grupo'
    },

    clases: {
      collection: 'ClaseHorario',
      via: 'profesores'
    },

    toJSON: function () {
      let user = this.toObject();
      delete user.password;
      return user;
    }

  },

  beforeCreate: function (user, cb) {
    let hash = sha256(user.password).toString();
    user.password = hash;
    cb();
  }

};
