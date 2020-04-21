
/** Gets all records from the cohort collection and calls a callback with the array of objects returned.
 *
 * @param db
 * @param callback
 */
function getAllCohorts(db, callback) {
    let collection = db.collection('cohorts');
    collection.find({}).toArray((err, docs) => {
        console.log(docs)
        callback(docs);
    })
}

module.exports.getAllCohorts = getAllCohorts;