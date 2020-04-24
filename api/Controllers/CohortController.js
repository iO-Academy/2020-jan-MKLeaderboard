const DbService = require('../Services/DbService');
const CohortService = require('../Services/CohortService');

/** Controller to handle GET /characters route. Returns serverResponse payload.
 *
 * @param req
 * @param res
 */
function getAllCohorts(req, res) {

    let serverResponse = {
        status: 500,
        message: 'Request failed',
        data: []
    };

    try
    {
        DbService.getDbConn((db) => {
            CohortService.getAllCohorts(db, (allCohorts) => {
                    serverResponse.data = allCohorts;
                    serverResponse.status = 200;
                    serverResponse.message = 'Success';
                    res
                        .status(serverResponse.status)
                        .json(serverResponse);
                })
            })
        }

    catch(error)
    {
        serverResponse.message = error.message;
        res
            .status(serverResponse.status)
            .json(serverResponse);
    }

}

module.exports.getAllCohorts = getAllCohorts;
