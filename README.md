# Code challenge 🚀

Nuestro code challenge consiste en una prueba sencilla para conocerte mejor como ingeniero de software 😀.

**Nota:** No olvidar que la forma correcta de subir tu solución es creando un Fork de este repo y enviando un Pull Request.
Al final hay una breve guía para envíar tu solución.

-   [Problema](#problema)
-   [Tech Stack](#techstack)
-   [Opcional](#opcional)
-   [Envía tu solucion](#solución)

# Problema
Se quiere gestionar a los usuarios de un sistema, tu solución debe permitir
que un administrador pueda **Agregar**, **Listar**, **Editar** y **Eliminar** usuarios.

Para fines de este caso basta con persistir a los usuarios en local storage o en memoria.
La eliminación debe ser lógica, solo se debe modificar un booleano para indicar el estado
del registro (true = Activo, false = Inactivo).

**Mockup**
![Screenshot 2023-07-24 111910](https://github.com/luismeramosr/app-sveltekit-code-challenge/assets/41213455/ac0a0143-e9cb-402f-9d7b-3fce65ad2218)


**Ejemplos de usuarios**: 

```json
{
    "user_id": 1,
    "username": "SunTzu",
    "password": "123456",
    "active": true
}
```

```json
{
    "user_id": 2,
    "username": "Kaizen",
    "password": "123456",
    "active": false
}
```

# TechStack

<ol>
  <li>SvelteKit</li>
  <li>Typescript</li>
</ol>
      ![image](https://github.com/luismeramosr/app-sveltekit-code-challenge/assets/41213455/f7309059-be21-4ef6-b7cf-3f767cf9eb92)



