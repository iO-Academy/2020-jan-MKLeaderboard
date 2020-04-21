const DbService = require('../Services/DbService');
const UserService = require('../Services/UserService');

/** Gets all Users from the Db and hydrates Character / Cohort ids into information to form
 * a comprehensive data object for each user.
 *
 * @param req
 * @param res
 */
function getAllUsers(req, res) {

    let serverResponse = {
        status: 500,
        message: 'Request failed',
        data: []
    }

    try
    {
        DbService.getDbConn((db) => {
            UserService.getAllUsers(db, (allUsers) => {
                serverResponse.data = UserService.hydrateUsers(allUsers)
                if (count(serverResponse.data) === 0) throw "User hydration failed";
                serverResponse.status = 200;
                serverResponse.message = 'Success';
            })
        })
    }
    catch(error)
    {
        serverResponse.message = error.message;
    }

    res
        .status(serverResponse.status)
        .json(serverResponse);
}

module.exports.getAllUsers = getAllUsers;
