// Step to create HTTP Server using Hapi
// 1. Install Hapi module (npm install @hapi/hapi)
// 2. Using the module (npm install @hapi/hapi)

const Hapi = require('@hapi/hapi');

const init = async () => {
    const server = Hapi.server({
        port: 5000,
        host: 'localhost',
    });

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
}

init();