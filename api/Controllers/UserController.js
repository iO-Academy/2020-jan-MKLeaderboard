const DbService = require('../Services/DbService');
const UserService = require('../Services/UserService');
const ValidationService = require('../Services/ValidationService');

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
                UserService.hydrateUsers(db, allUsers, (hydratedUsers) => {
                    serverResponse.data = hydratedUsers;
                    serverResponse.status = 200;
                    serverResponse.message = 'Success';
                    res
                        .status(serverResponse.status)
                        .json(serverResponse);
                })
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

/** Add new user into DB from form input on front end
 * User data is sanitized and validated before being added to database. Error message is return if validation fails
 * @param req
 * @param res
 */
function createUser(req, res) {

    let serverResponse = {
        status: 500,
        message: 'Request failed',
        data: []
    }

    const user = {
        name: ValidationService.sanitizeData(req.body.name),
        favChar: ValidationService.sanitizeData(req.body.favChar),
        cohort: ValidationService.sanitizeData(req.body.cohort)
    }

    const nameValid = ValidationService.validateUser(user.name);
    const favCharValid = ValidationService.validateFavChar(user.favChar);
    const cohortValid = ValidationService.validateCohort(user.cohort, (validationResponse) => {

        if (validationResponse.success && nameValid.success && favCharValid.success) {

            DbService.getDbConn( (db) => {
                UserService.createUser(db, user, (docs) => {
                    if(docs.insertedCount === 1) {
                        serverResponse.status  = 200;
                        serverResponse.message  = 'It bloody worked';
                        res
                            .status(serverResponse.status)
                            .json(serverResponse);

                    } else {
                        serverResponse.message  = 'Database error. Contact administrator';
                        res
                            .status(serverResponse.status)
                            .json(serverResponse);

                    }
                });
            });
        } else {
            serverResponse.message = nameValid.message + ' ' + favCharValid.message + ' ' + validationResponse.message;
            serverResponse.message = serverResponse.message.trim();
            res
                .status(serverResponse.status)
                .json(serverResponse);
        }

    })

    // if (nameValid.success && favCharValid.success) {
    //
    //     DbService.getDbConn( (db) => {
    //         UserService.createUser(db, user, (docs) => {
    //             if(docs.insertedCount === 1) {
    //                 serverResponse.status  = 200;
    //                 serverResponse.message  = 'It bloody worked';
    //                 res
    //                     .status(serverResponse.status)
    //                     .json(serverResponse);
    //
    //             } else {
    //                 serverResponse.message  = 'User was not inserted into DB';
    //                 res
    //                     .status(serverResponse.status)
    //                     .json(serverResponse);
    //
    //             }
    //         });
    //     });
    // } else {
    //     serverResponse.message = nameValid.message + ' ' + favCharValid.message;
    //     res
    //         .status(serverResponse.status)
    //         .json(serverResponse);
    // }

}

module.exports.getAllUsers = getAllUsers;
module.exports.createUser = createUser;
