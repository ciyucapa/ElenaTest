# ELENAS Reto Técnico FrontEnd React
Reto técnico CRUD para clientes.

## Pre-requisitos

### Dependencias
```
"dependencies": {
    "@apollo/client": "^3.4.10",
    "@testing-library/jest-dom": "^5.11.4",
    "@testing-library/react": "^11.1.0",
    "@testing-library/user-event": "^12.1.10",
    "graphql": "^15.5.2",
    "prop-types": "^15.7.2",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-router-dom": "^5.2.1",
    "react-scripts": "4.0.3",
    "styled-components": "^5.3.1",
    "web-vitals": "^1.0.1"
  },
```

### Instalación
npm i

### Ejecución de pruebas (tests)
npm test

## Organización de los archivos
Cuenta con diferentes modulos, los cuales son:

* components
* config
* contexts
* graphql
* hooks
* navigation
* scenes
* utils

#### components
componentes presentaciones y reutilizables en el proyecto para la construccion de diferentes escenas.

#### config
configuracion del cliente apollo.

#### contexts
contexto para persistir la informacion del usuario.

#### graphql
se constituye bajo las queries, mutaciones y fragmentos con el fin de consultar la Api.

#### hooks
lógica implementada basada en custom hooks para el correcto manejo de los componentes funcionales.

#### navigation
sistema de navegación del proyecto.

#### scenes
componente funcionales que permiten la construcción de escenas como inicio de sesion, crear cliente y editar cliente.

#### utils
funciones de utilidades como escritura en cache.

## Documentación
Cada uno de los componentes cuentan con una documentación generada con react-docgen por medio de archivos JSON. 
(button.json).

