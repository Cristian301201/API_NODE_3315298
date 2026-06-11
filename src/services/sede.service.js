const sedeRepository = require('../repositories/sede.repository.js');

const crearSede = async (data) => {
  return await sedeRepository.crear(data);
};

const listarSedes = async () => {
  return await sedeRepository.listar();
};

const actualizarSede = async (id, data) => {
  return await sedeRepository.actualizar(id, data);
};

const buscarSede = async (id) => {
  return await sedeRepository.buscarPorId(id);
};

module.exports = {
  crearSede,
  listarSedes,
  actualizarSede,
  buscarSede
};