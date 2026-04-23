# 📁 Estructuras Profesionales de un API en Node.js 
api-node 
    |-src **Aqui vive todo el codigo real del proyecto** 
        |-conig **Configuracion globales** 
        |-controllers **Controla las peticiones HTTP** 
        |-middlewares **Intermediarios de seguridad y validacion** 
        |-models **Representa las tablas de la base de datos** 
        |-routes **Define las URLs de la API** 
        |-services **Logica del negocio** 
        |-utils **Funciones reutilizables** 
        |-app.js **Configuracion de la aplicacion** 
        |-server.js **Punto de arranque** 
    |-.env **Variables de entorno**  

## Inicializar un proyecto en la carpeta api-node 

``npm init -y`` 

instalar express: ``npm install express`` 
probar app.js en el terminal ejecutamos: ``node app.js``  
en el navegador : ``https://localhost:3000`` 
terminar la ejecucion del servidor: ``ctrl + c`` en el terminal 
