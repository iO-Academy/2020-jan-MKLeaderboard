const DbService = require('../Services/DbService');
const RaceLogService = require('../Services/RaceLogService');
const ValidationService = require('../Services/ValidationService');

/** Add new race into DB from form input on front end. Validation on track value will return
 * error if value not between 1 & 32
 *
 * @param req
 * @param res
 */
function createRaceLog(req, res) {

    let serverResponse = {
        status: 500,
        message: 'Request failed',
        data: []
    }

    const race = {
        track: req.body.track,
        users: req.body.users
    }

    const trackValid = ValidationService.validateTrack(race.track);

    if (trackValid.success) {

        DbService.getDbConn( (db) => {
            RaceLogService.createRaceLog(db, race, (docs) => {
                if(docs.insertedCount === 1) {
                    serverResponse.status  = 200;
                    serverResponse.message  = 'It bloody worked';
                    res
                        .status(serverResponse.status)
                        .json(serverResponse);

                } else {
                    serverResponse.message  = 'Race was not inserted into DB';
                    res
                        .status(serverResponse.status)
                        .json(serverResponse);

                }
            });
        });
    } else {
        serverResponse.message = trackValid.message;
        res
            .status(serverResponse.status)
            .json(serverResponse);
    }

}

module.exports.createRaceLog = createRaceLog;
