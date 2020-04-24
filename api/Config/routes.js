const UserController = require('../Controllers/UserController');
const TrackController = require('../Controllers/TrackController');
const CharacterController = require('../Controllers/CharacterController');
const CohortController = require('../Controllers/CohortController');
const RaceLogController = require('../Controllers/RaceLogController');

function routes(app) {
    app.get('/', (req, res) => res.send('Success'));
    app.get('/users', UserController.getAllUsers);
    app.post('/users', UserController.createUser);
    app.get('/tracks', TrackController.getAllTracks);
    app.get('/characters', CharacterController.getAllCharacters);
    app.get('/cohorts', CohortController.getAllCohorts);
    app.post('/racelogs', RaceLogController.createRaceLog);
}

module.exports = routes;
