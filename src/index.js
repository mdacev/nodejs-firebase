const app = require('./app');
const colors = require('colors/safe');

async function main() {
    await app.listen(3000);
        console.log(colors.yellow('================'));
        console.log(colors.green('Server iniciado'));
        console.log(colors.yellow('================'));
}

main();