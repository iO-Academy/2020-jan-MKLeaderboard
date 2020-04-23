const UserController = require('../Controllers/UserController');
const TrackController = require('../Controllers/TrackController');

function routes(app) {
    app.get('/', (req, res) => res.send('Success'));
    app.get('/users', UserController.getAllUsers);
    app.post('/users', UserController.createUser);
    app.get('/tracks', TrackController.getAllTracks);
}

module.exports = routes;
