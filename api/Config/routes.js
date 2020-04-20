const UserController = require('../Controllers/UserController');

function routes(app) {
    app.get('/', (req, res) => res.send('Success'));
    app.get('/users', UserController.getAllUsers);
}

module.exports = routes;