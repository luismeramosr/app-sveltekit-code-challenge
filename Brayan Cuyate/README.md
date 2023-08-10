## Proyecto: Sistema de Gestión de Usuarios

Este proyecto consiste en un Sistema de Gestión de Usuarios implementado en Svelte, una herramienta de desarrollo web moderna basada en componentes. El sistema permite agregar, editar y eliminar usuarios, así como visualizar una lista de usuarios con sus respectivos detalles.

## Características destacadas

- **Interfaz de Usuario Atractiva:** El diseño está diseñado con atención al detalle y utiliza gradientes de color para lograr un aspecto moderno y agradable.

- **Funcionalidad Completa:** El sistema permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) en la lista de usuarios. Puedes agregar nuevos usuarios, editar detalles existentes y cambiar su estado de activo a inactivo y viceversa.

- **Validación de Datos:** Antes de agregar o actualizar un usuario, el sistema verifica que los campos de nombre de usuario y contraseña no estén vacíos. También evita que se agreguen usuarios con nombres de usuario duplicados.

## Cómo Ejecutar el Proyecto

Sigue estos pasos para ejecutar el proyecto en tu entorno local:

1. **Clona el Repositorio:** Cambia al directorio del proyecto que acabas de clonar:

   ```bash
   git clone https://github.com/TuUsuario/NombreDelRepositorio.git
2. **Navega al Directorio del Proyecto:** Abre tu terminal y ejecuta el siguiente comando para clonar el repositorio:

   ```bash
   cd NombreDelRepositorio
3. **Instala las Dependencias:** Asegúrate de tener Node.js y npm instalados. Luego, instala las dependencias del proyecto con el siguiente comando:
   ```bash
   npm install
4. **Inicia el Servidor de Desarrollo:** Una vez que las dependencias se hayan instalado correctamente, inicia el servidor de desarrollo con:

   ```bash
   npm run dev
5. **Abre en el Navegador:** Abre tu navegador web y visita http://localhost:5173/ para ver el sistema en funcionamiento.
## Errores por mejorar
Se encontró un error de tipo:
   ```bash
   Parameter 'e' implicitly has an 'any' type.ts(7006)
   ```
   pero se solucionó dando **// @ts-ignore**, lo cual ignora este error, dado que el error no afectaba al código, pero se comenta para futuros problemas que pueda tener el código
