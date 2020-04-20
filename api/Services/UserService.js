
/** Gets all records from the users collection and calls a callback with the array of objects returned.
 *
 * @param db
 * @param callback
 */
function getAllUsers(db, callback) {
    let collection = db.collection('users');
    collection.find().toArray((err, docs) => {
        callback(docs);
    })
}

/** Takes an array of users and swaps out favChar and cohort ids for readable info from their respective
 * data sources. Inserts an object into [favChar] and a string into [cohort].
 *
 * @param users - an array of users
 *
 * @return array - an array of users with updated data fields, or an empty array if the action fails
 */
function hydrateUsers(users) {
    try
    {
        CohortService.getAllCohorts(db, (allCohorts) => {
            let allCharacters = CharacterService.getAllCharacters();
            return allUsers.map((user) => {
                let favCharId = user.favChar;
                user.favChar = allCharacters.find(character => character.id === favCharId);

                let cohortId = user.cohort;
                user.cohort = allCohorts.find(cohort => cohort.id === cohortId).name;
            });
        });
    }
    catch(error)
    {
        return [];
    }
}

module.exports.getAllUsers = getAllUsers;
module.exports.hydrateUsers = hydrateUsers;