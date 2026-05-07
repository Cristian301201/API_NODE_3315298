const Usuario = require ('../models/usuario.model');
const bcrypt = require ('bcryptjs');
const {
    encriptarPassword
} = require('../utlis/bcrypt');
const {
    generarJWT
} = require('../utlis/jwt');

const registrar = async (data) => {
    const existeCorreo = 
    await Usuario.findOne({
        where: {correo: data.correo}
    });
    if (existeCorreo){
        throw new Error ('Correo ya registrado.');
    }
    data.password = 
    await encriptarPassword(data.password);
    return await Usuario.create(data);
};

const login = async (
    correo,
    password
) => {
    const usuario = await Usuario.findOne({
        where: {correo}
    });
    if (!usuario) {
        throw new Error ('Usuario no encontrado.');
    }
    const validPassword = await bcrypt.compare(
        password, usuario.password
    );
    if(!validPassword){
        throw new Error ('Contraseña incorrecta.');
    }
    const token = generarJWT(usuario);
    return {usuaio,token};  
};

module.exports = {
    registrar,
    login
};