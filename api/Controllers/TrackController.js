const TrackService = require('../Services/TrackService');

/**
 * Controller to handle GET /tracks route. Returns serverResponse payload.
 * @param req
 * @param res
 */
let getAllTracks = (req, res) => {

    let serverResponse = {
        status: 500,
        message: 'Operation failed',
        data: []
    };

    let tracks = TrackService.getAllTracks();

    if (tracks) {
        serverResponse = {
            status: 200,
            message: 'Operation successful',
            data: tracks
        }
    }
    res.json(serverResponse);
};

module.exports.getAllTracks = getAllTracks;