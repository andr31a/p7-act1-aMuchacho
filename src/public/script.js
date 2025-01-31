document.addEventListener("DOMContentLoaded", function () {
  const gallery = document.getElementById("image-gallery");
  const images = [
    "./img/1.png",
    "./img/2.png",
    "./img/3.png",
    "./img/4.png",
    "./img/5.png",
    "./img/7.png",
    "./img/8.png",
    "./img/9.png",
  ];

  images.forEach((src) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = "Imagen de la galería";
    img.classList.add("gallery-item");
    gallery.appendChild(img);
  });

  const teoria = document.getElementById("teoria");
  teoria.innerHTML = ` <h2>1. ¿Qué es una API REST?</h2>
    <p>Una <strong>API REST</strong> (Representational State Transfer) es un conjunto de convenciones para construir servicios web que permite la comunicación entre sistemas a través de peticiones HTTP. Se basa en el uso de recursos identificados mediante URLs y operaciones estándar de HTTP como GET, POST, PUT y DELETE. Las APIs REST son ligeras, fáciles de implementar y escalables, y generalmente devuelven datos en formato JSON o XML.</p>

    <h2>2. ¿Cómo implementar un manejo de errores robusto en una API REST construida con Node.js y MySQL?</h2>
    <ul>
        <li><strong>Uso de middleware de manejo de errores:</strong> Crear un middleware de error en Node.js para centralizar la gestión de errores. Esto permite capturar cualquier error y enviar una respuesta adecuada al cliente.</li>
        <li><strong>Validación de entradas:</strong> Validar los datos de entrada utilizando bibliotecas como <em>Joi</em> o <em>express-validator</em>. Esto ayuda a evitar que se inserten datos incorrectos en la base de datos, y puede prevenir errores antes de que lleguen a la lógica de la API.</li>
        <li><strong>Manejo de errores de la base de datos:</strong> Al interactuar con MySQL, capturar errores específicos, como violaciones de restricciones o problemas de conexión, y devolver mensajes de error informativos al cliente.</li>
        <li><strong>Logs de errores:</strong> Utilizar herramientas como <em>winston</em> o <em>morgan</em> para registrar los errores y tener un historial completo de los problemas que ocurren en la API. Esto facilita el diagnóstico y solución de problemas en producción.</li>
        <li><strong>Respuestas estandarizadas:</strong> Para mantener consistencia, devolver respuestas de error en un formato estándar, como <code>{ "error": "Mensaje de error", "code": "código de error" }</code>.</li>
    </ul>

    <h2>3. ¿Cuáles son las mejores prácticas para devolver respuestas HTTP adecuadas (códigos de estado, mensajes de error) en diferentes escenarios, como errores de base de datos, validación de datos o errores internos del servidor?</h2>
    <ul>
        <li><strong>Códigos de estado HTTP:</strong>
            <ul>
                <li><strong>200 OK:</strong> Para respuestas exitosas, como obtener datos con un GET o completar una operación con un POST o PUT.</li>
                <li><strong>201 Created:</strong> Cuando se crea un nuevo recurso (generalmente con POST).</li>
                <li><strong>400 Bad Request:</strong> Para solicitudes mal formadas, como entradas de datos incorrectos o falta de parámetros.</li>
                <li><strong>401 Unauthorized:</strong> Cuando el usuario no está autenticado o autorizado para acceder al recurso.</li>
                <li><strong>403 Forbidden:</strong> Cuando el usuario está autenticado, pero no tiene permisos para acceder al recurso solicitado.</li>
                <li><strong>404 Not Found:</strong> Cuando el recurso solicitado no se encuentra en la base de datos o en el servidor.</li>
                <li><strong>500 Internal Server Error:</strong> Para errores internos del servidor, como problemas de conexión con la base de datos o errores de código.</li>
            </ul>
        </li>
        <li><strong>Mensajes de error:</strong>
            <ul>
                <li>Errores de validación: <code>{ "error": "El campo 'email' es obligatorio." }</code></li>
                <li>Errores de base de datos: <code>{ "error": "No se pudo conectar a la base de datos." }</code></li>
                <li>Errores internos del servidor: <code>{ "error": "Algo salió mal en el servidor. Intente de nuevo más tarde." }</code></li>
            </ul>
        </li>
        <li><strong>Consistencia en las respuestas:</strong> Utilizar un formato de respuesta común (por ejemplo, <code>{ "status": "error", "message": "..." }</code>) y un código de estado HTTP apropiado para cada tipo de error. Esto facilita la comprensión y manejo de errores para los clientes de la API.</li>
    </ul> `;
});
