const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Ruta principal que muestra la documentación en HTML
app.get('/', (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html lang="es">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Documentación para Comandos de Discord</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        margin: 20px;
        background-color: #f9f9f9;
      }
      h1, h2 {
        color: #7289DA;
      }
      .command {
        background: #fff;
        padding: 15px;
        margin-bottom: 20px;
        border-radius: 5px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      }
      code {
        background: #eee;
        padding: 2px 4px;
        border-radius: 3px;
      }
      pre {
        background: #eee;
        padding: 10px;
        border-radius: 5px;
        overflow-x: auto;
      }
      footer {
        margin-top: 40px;
        text-align: center;
        color: #777;
      }
    </style>
  </head>
  <body>
    <h1>Documentación para Comandos de Discord</h1>
    <p>Bienvenido a la documentación de comandos de nuestro bot de Discord.</p>
    
    <div class="command">
      <h2>!ayuda</h2>
      <p>Muestra la lista de comandos disponibles y su descripción.</p>
      <pre><code>!ayuda</code></pre>
    </div>
    
    <div class="command">
      <h2>!info</h2>
      <p>Muestra información sobre el bot y el servidor.</p>
      <pre><code>!info</code></pre>
    </div>
    
    <div class="command">
      <h2>!ban [usuario]</h2>
      <p>Banea a un usuario del servidor. <strong>Requiere permisos de moderación.</strong></p>
      <pre><code>!ban @usuario</code></pre>
    </div>
    
    <div class="command">
      <h2>!kick [usuario]</h2>
      <p>Expulsa a un usuario del servidor. <strong>Requiere permisos de moderación.</strong></p>
      <pre><code>!kick @usuario</code></pre>
    </div>
    
    <div class="command">
      <h2>!mute [usuario]</h2>
      <p>Silencia a un usuario en el servidor.</p>
      <pre><code>!mute @usuario</code></pre>
    </div>
    
    <footer>
      <p>© 2025 Tu Bot de Discord</p>
    </footer>
  </body>
  </html>
  `);
});

// Levanta el servidor en el puerto especificado
app.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
