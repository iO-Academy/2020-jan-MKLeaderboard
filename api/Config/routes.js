const TrackController = require('../Controllers/TrackController');

function routes(app) {
    app.get('/', (req, res) => {
        res.send('success');
    });

    app.get('/tracks', TrackController.getAllTracks)
}

module.exports = routes;