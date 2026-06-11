const { body } = require('express-validator');

const crearSedeValidator = [
    body('nombre')
    .notEmpty()
    .withMessage('El nombre es obligatorio'),
    
    body('nit')
    .isLength({min: 5})
    .withMessage('NIT minimo 6 caracteres'),
    
    body('correo')
    .isEmail()
    .withMessage('Correo invalido'),

    body('direccion')
    .notEmpty()
    .withMessage('Direccion obligatoria'),

    body('telefono')
    .isLength({min: 7})
    .withMessage('Telefono minimo 7 caracteres')

];

module.exports = { crearSedeValidator };