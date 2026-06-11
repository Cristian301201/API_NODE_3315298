const institucionRepository = require('../repositories/institucion.repository.js');

const crearInstitucion = async (data) => {
  return await institucionRepository.crear(data);
};

const listarInstitucion = async () => {
  return await institucionRepository.listar();
};

const actualizarInstitucion = async (id, data) => {
  return await institucionRepository.actualizar(id, data);
};

const buscarInstitucion = async (id) => {
  return await institucionRepository.buscarPorId(id);
};

module.exports = {
  crearInstitucion,
  listarInstitucion,
  actualizarInstitucion,
  buscarInstitucion
};