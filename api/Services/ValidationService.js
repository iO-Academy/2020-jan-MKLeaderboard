const Validator = require('validator');
const CohortService = require('./CohortService');
const DbService = require('../Services/DbService');


/** Validates user from input and checks length is between 2 and 255
 *
 * @param data
 * @returns {{success: boolean, message: string}}
 */
function validateUser(data) {

    if(!checkLength(data, 2, 20)) {
        return {
            success: false,
            message:'Name length must be between 2 and 20 characters.'
        }
    }

    return {
        success: true,
        message:''
    }

}

/** Validate favourite character to make sure it is on the list. Checks if value is between 1 and 25
 *
 * @param data
 * @returns {{success: boolean, message: string}}
 */
function validateFavChar(data) {
    if(data.length < 1 || parseInt(data) < 1 || parseInt(data) > 25 ) {
        return {
            success: false,
            message:'Character must be an integer between 1 & 25.'
        }
    }

    return {
        success: true,
        message:''
    }
}

function validateTrack(data) {
    if(data.length < 1 || parseInt(data) < 1 || parseInt(data) > 32 ) {
        return {
            success: false,
            message:'Track must be between 1 & 32'
        }
    }

    return {
        success: true,
        message:''
    }
}

function validateCohort(data, callback) {

    DbService.getDbConn((db) => {
        CohortService.getAllCohorts(db, (allCohorts) => {
            let result = allCohorts.find(cohort => cohort._id == data)
            if (result) {
                callback({
                    success: true,
                    message:''
                })
            } else {
                callback({
                    success: false,
                    message:'Cohort does not exist in the database.'
                })
            }
        })
    })
}

/** Checks length of data using a min and max
 *
 * @param data
 * @param min
 * @param max
 * @returns {boolean}
 */
function checkLength(data,min, max) {
    if(data.length > min && data.length < max) {
        return true
    } else {
        return false
    }
}

/** Sanitizes data, trims data to remove whitespace and escapes special characters and replaces them to html entities
 *
 * @param data
 * @returns sanitized Data
 */
function sanitizeData(data) {
    data = data.trim();
    data = Validator.escape(data);
    return data;
}

module.exports.validateUser = validateUser;
module.exports.sanitizeData = sanitizeData;
module.exports.validateFavChar = validateFavChar;
module.exports.validateTrack = validateTrack;
module.exports.validateCohort = validateCohort;

