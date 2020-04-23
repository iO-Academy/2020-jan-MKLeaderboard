const UserController = require('../Controllers/UserController');
const TrackController = require('../Controllers/TrackController');
const CharacterController = require('../Controllers/CharacterController');
const CohortController = require('../Controllers/CohortController');

function routes(app) {
    app.get('/', (req, res) => res.send('Success'));
    app.get('/users', UserController.getAllUsers);
    app.post('/users', UserController.createUser);
    app.get('/tracks', TrackController.getAllTracks);
    app.get('/characters', CharacterController.getAllCharacters);
    app.get('/cohorts', CohortController.getAllCohorts);
}

module.exports = routes;
