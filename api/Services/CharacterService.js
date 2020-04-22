const characterData = require('../Data/characters.json');

/** Gets all character data from the static json file
 *
 * @return array - an array of objects with character data
 */

function getAllCharacters() {
    return characterData.characters;
}

module.exports.getAllCharacters = getAllCharacters;