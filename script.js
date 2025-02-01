
const commands = [
    { name: 'ping', description: 'Responde con Pong!' },
    { name: 'say', description: 'Repite un mensaje escrito' },
    { name: 'avatar', description: 'Muestra tu avatar de Discord' },
    { name: 'serverinfo', description: 'Muestra información del servidor' },
    { name: 'random', description: 'Genera un número aleatorio entre 1 y 100' }
];

const commandList = document.getElementById('command-list');
commands.forEach(command => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${command.name}</strong>: ${command.description}`;
    commandList.appendChild(li);
});
