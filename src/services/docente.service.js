const docenteRepository = require('../repositories/docente.repository.js');

const crearDocente = async (data) => {
  return await docenteRepository.crear(data);
};

const listarDocentes = async () => {
  return await docenteRepository.listar();
};

const actualizarDocente = async (id, data) => {
  return await docenteRepository.actualizar(id, data);
};

const buscarDocente = async (id) => {
  return await docenteRepository.buscarPorId(id);
};

module.exports = {
  crearDocente,
  listarDocentes,
  actualizarDocente,
  buscarDocente
};