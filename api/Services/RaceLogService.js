/**Inserts new a racelog into the database
 *
 * @param db
 *
 * @param race
 *
 * @param callback
 */
function createRaceLog(db, race, callback) {
    let collection = db.collection('racelogs');
    try {
        collection.insertOne(race, (err, docs) => {
            console.log(docs)
            callback(docs)
        });
    } catch (err) {
        console.log ('Racelog not saved to DB')
    }
}

module.exports.createRaceLog = createRaceLog;
