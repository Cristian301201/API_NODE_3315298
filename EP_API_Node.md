# 📁 Estructuras Profesionales de un API en Node.js 
api-node 
    |-src **Aqui vive todo el codigo real del proyecto** 
        |-conig **Configuracion globales** 
            |-database.js 
        |-controllers **Controla las peticiones HTTP** 
        |-middlewares **Intermediarios de seguridad y validacion** 
        |-models **Representa las tablas de la base de datos** 
        |-routes **Define las URLs de la API** 
        |-services **Logica del negocio** 
        |-utils **Funciones reutilizables** 
        |-app.js **Configuracion de la aplicacion** 
        |-server.js **Punto de arranque** 
    |-.env **Variables de entorno** 
    |-.gitignore 

## Inicializar un proyecto en la carpeta api-node 

``npm init -y`` 

instalar express: ``npm install express`` 
probar app.js en el terminal ejecutamos: ``node app.js``  
en el navegador : ``https://localhost:3000`` 
terminar la ejecucion del servidor: ``ctrl + c`` en el terminal 

Instalar otras dependencias
``npm install dotenv sequelize mysql2 pg pg-hstore``

Cambios en el package.json

``
 "main": "src/server.js",
  "scripts": {
    "start": "node src/server.js"
  },
``
se puede ejecujat el server con ``npm start``

Modelo (Entidad Usuario)
ruta src/models/usuario.model.js

Servicio(Lógin de negocio)
ruta src/services/usuario.service.js

Controlador
ruta src/controllers/usuario.controller.js

Rutas
ruta src/routes/usuario.routes.js