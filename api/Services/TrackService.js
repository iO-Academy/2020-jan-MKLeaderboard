const trackData = require('../Data/tracks.json');

/**
 * Service function to access the trackData JSON file in TrackController.
 * @returns array
 */
function getAllTracks() {
    return trackData.tracks;
}

module.exports.getAllTracks = getAllTracks;
