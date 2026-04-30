const express = require('express');

//Ruta de usuario
const usuarioRoutes = require('./routes/usuario.routes');

const app = express();

//Middelware paraJSON
app.use(express.json());

//Indicamos la ruta usuario
app.use('/api/usuarios', usuarioRoutes);

app.get('/',(req,res)=> {
    res.send('🆗 API Funcionando Correctamente')
}
);

const PORT = 3000;
app.listen(PORT,()=>{
    console.log("Servidor activo")
});

module.exports = app;