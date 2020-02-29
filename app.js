const app = require('./config/server');

require('./env/enviroment')
const port = process.env.PORT

const server = app.listen(80, function () {
    console.log('Servidor Online')
});


