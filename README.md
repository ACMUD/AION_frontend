# Proyecto AION: Frontend

![Cabecera AION frontend](/src/assets/img/CabeceraFrontend.svg)

## *El laboratorio de proyectos de ACMUD presenta*

<img align="left" width="80" height="80" src="/src/assets/img/icons/common/IconAnimFndTrnsp_1080x1080.webp" alt="Animacion del proyecto AION">

> **AION (frontend) es una aplicacion web diseñada para consumir el backend de AION, permitiendo a usuarios de diferentes universidades organizar sus horarios de manera manual o automatica a través de algoritmos de ciencia de datos.**

AION (frontend) es un proyecto web que permite al usuario:
- Elegir una universidad a la cual acceder
- Modificar los horarios existentes almacenados para esa universidad (solo administradores y colaboradores)
- Elegir una serie de horarios basado en filtros
- Organizar los horarios basado en filtros
- Solicitar que se organicen automaticamente unos horarios basado en filtros

## Canales de comunicación

### Para ser un colaborador

(sin actualizar)

### Para reportar problemas

(sin actualizar)

### Para proponer ideas

(sin actualizar)

### Para conocer proximas actualizaciones

(sin actualizar)

## Instalación

### Requerimientos previos
- [Node.js (>=8.15)](https://nodejs.org/es/download/): Instale Node.js de manera tal que el [administrdor de paquetes (npm) sea usable en la Consola de Comandos de su sistema operativo](https://www.digitalocean.com/community/tutorials/node-js-environment-setup-node-js-installation)
- [Angular CLI (>=14.1)](https://angular.io/cli): Instale Angular CLI de manera tal que sea usable en la Consola de Comandos de su sistema operativo.

### Instalacion de dependencias
Clone el repositorio de manera local `git pull https://github.com/ACMUD/AION_frontend main`, luego instale de manera local el proyecto ejecutando en la carpeta clonada `npm install node-modules --save`

### Ejecucion
Inicialice un servidor local en la carpeta clonada ejecutando `ng serve`. Deje que el servidor construya y genere el proyecto, luego dirijase en su navegador a la ruta `http://localhost:4200/`

### Vistas

<table width="1000" align="center" >
  <tr>
    <td>
      <img align="center" width="500" src="/guides/AION_uso-Organizador.png" alt="Pantalla de organizador manual"/>
      <br>
      <i>Organiza tus horarios</i>
    </td>
    <td>
      <img align="center" width="500" src="/guides/AION_uso-MultiplesFiltros.png" alt="Zona de filtros"/>
      <br>
      <i>Utiliza diferentes filtros</i>
    </td>
  </tr>
  <tr>
    <td>
      <img align="center" width="500" src="/guides/AION_uso-HorarioAION.png" alt="Pantalla de organizador autonomo"/>
      <br>
      <i>Deja que AION haga el trabajo por ti</i>
    </td>
    <td>
      <img align="center" width="500" src="/guides/AION_uso-PDF.png" alt="Archivo PDF exportado"/>
      <br>
      <i>Exporta tus horarios</i>
    </td>
  </tr>
  <tr>
    <td>
      <img align="center" width="500" src="/guides/AION_uso-CalendarioCruces.png" alt="Escenario de cruce"/>
      <br>
      <i>Recibe notificaciones por cruces...</i>
    </td>
    <td>
      <img align="center" width="500" src="/guides/AION_uso-Cargando.png" alt="Escenario de carga"/>
      <br>
      <i>...Y notificaciones por esperas</i>
    </td>
  </tr>
  <tr>
    <td>
      <img align="center" width="500" src="/guides/AION_uso-InicioSesion.png" alt="Componente de inicio de sesion"/>
      <br>
      <i>Inicia sesion para acceder a más servicios</i>
    </td>
    <td>
      <img align="center" width="500" src="/guides/AION_uso-EstadoGuardado.png" alt="Zona de carga de estado"/>
      <br>
      <i>Guarda y carga los horarios que organizaste antes</i>
    </td>
  </tr>
  <tr>
    <td>
      <img align="center" width="500" src="/guides/AION_uso-SelectorUniversidades.png" alt="Zona de seleccion de universidad"/>
      <br>
      <i>Selecciona entre multiples universidades</i>
    </td>
    <td>
      <img align="center" width="500" src="/guides/AION_trazabilidad-Proyectos.png" alt="Informacion sobre demás proyectos"/>
      <br>
      <i>Y conoce más...</i>
    </td>
  </tr>
</table>

## Politica sobre las ramas

(sin actualizar)

## Licencia

Este proyecto se halla licenciado bajo la **[GNU General Public License v3](/LICENSE)** [^c]

## Colaboradores

| <b>Acerca de</b> | Colaborador |
| :-: | :-- |
| <img align="center" width="200" src="/src/assets/img/about/AcercaACMUDFndTrnspConLtrs.svg" alt="Icono del capitulo estudiantil ACMUD"/> | [ACMUD](https://www.acmud.cf/) <br> El Capitulo Estudiantil de la *Association for Computing Machine ([ACM](https://www.acm.org/))*, de la Universidad Distrital Francisco José de Caldas es una agrupación estudiantil con reconocimiento nacional e internacional que se dedica a la promoción de conocimientos de ingeniería. El grupo cuenta con ejes de interes y un laboratorio de proyectos en los cuales participan diferentes estudiantes. El Proyecto AION empezó su desarrollo dentro del laboratorio de proyectos de ACMUD y recibe colaboración de multiples personas. |
| <img align="center" width="200" src="/src/assets/img/about/AcercaALFndTrnspConLtrs.svg" alt="Icono del capitulo estudiantil ACMUD"/> | Alta Lengua <br> El Grupo Alta Lengua funge como colaborador del Proyecto AION. |

[^c]: AION (frontend) 2022 (c)