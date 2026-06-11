const { body } = require('express-validator');

const crearDocenteValidator = [
    body('especialidad')
    .notEmpty()
    .withMessage('Especialidad obligatoria'),

    body('profesion')
    .notEmpty()
    .withMessage('Profesion obligatoria')
    
];

module.exports = { crearDocenteValidator };