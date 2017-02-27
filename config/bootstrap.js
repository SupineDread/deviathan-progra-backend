/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap = function(cb) {

  User.findOrCreate({username: 'admin'}, {
    username: 'admin',
    password: '123',
    roles: ['ROLE_ADMIN'],
    email: 'neri@epsick.com',
    boleta: '2014090248',
    firstName: 'Administrador',
    lastName: 'Test IPN',
  }).then(function(data) {
    console.log('Admin encontrado o creado.');
  }).catch(function(err) {
    console.log(err);
  });

  cb();
};
