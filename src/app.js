const express = require('express');
const app = express();

app.get('/',(req,res)=> {
    res.send('🆗 API Funcionando Correctamente')
}
);

const PORT = 3000;
app.listen(PORT,()=>{
    console.log("Servidor activo")
});