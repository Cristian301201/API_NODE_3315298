const { body } = require('express-validator');

const crearInstitucionValidator = [
  body('nombre')
    .notEmpty()
    .withMessage('El nombre es obligatorio'),

  body('nit')
    .notEmpty()
    .withMessage('El nit es obligatorio'),

  body('correo')
    .isEmail()
    .withMessage('Correo inválido'),
];

module.exports = { crearInstitucionValidator };