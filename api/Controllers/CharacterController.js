const CharacterService = require('../Services/CharacterService');

/**
 * Controller to handle GET /characters route. Returns serverResponse payload.
 * @param req
 * @param res
 */
let getAllCharacters = (req, res) => {

    let serverResponse = {
        status: 500,
        message: 'Operation failed',
        data: []
    };

    let characters = CharacterService.getAllCharacters();

    if (characters) {
        serverResponse = {
            status: 200,
            message: 'Operation successful',
            data: characters
        }
    }
    res
        .status(serverResponse.status)
        .json(serverResponse);
};

module.exports.getAllCharacters = getAllCharacters;
