<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Comandos del Bot</title>
    <style>
        body { 
            font-family: Arial, sans-serif; 
            text-align: center; 
            background: #f8f8f8; 
            padding: 20px; 
        }
        h1 { 
            color: #0073e6; 
        }
        ul { 
            list-style: none; 
            padding: 0; 
            max-width: 500px;
            margin: 0 auto;
        }
        li { 
            background: white; 
            margin: 10px; 
            padding: 10px; 
            border-radius: 5px; 
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); 
        }
        footer {
            margin-top: 20px;
            font-size: 14px;
            color: gray;
        }
    </style>
</head>
<body>
    <h1>📜 Comandos del Bot</h1>
    <p>Estos son los comandos disponibles para el bot:</p>
    <ul id="commands-list"></ul>
    <footer>
        <p>Bot creado por <strong>TuNombre</strong> | <a href="https://discord.com/oauth2/authorize?client_id=TU_CLIENT_ID&scope=bot&permissions=8" target="_blank">➕ Invitar al Bot</a></p>
    </footer>

    <script>
        // Lista de comandos del bot
        const commands = [
            { name: '/ping', description: 'Responde con Pong!' },
            { name: '/say', description: 'Repite un mensaje' },
            { name: '/avatar', description: 'Muestra tu avatar' },
            { name: '/serverinfo', description: 'Muestra información del servidor' },
            { name: '/random', description: 'Número aleatorio entre 1 y 100' }
        ];

        // Insertar comandos en la página
        const commandsList = document.getElementById('commands-list');
        commands.forEach(cmd => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${cmd.name}</strong>: ${cmd.description}`;
            commandsList.appendChild(li);
        });
    </script>
</body>
</html>
