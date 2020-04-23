const Validator = require('validator');
// const Sanitize = require('validator').sanitize

function validateUser(data) {

    if(!checkLength(data, 2, 255)) {
        return {
            success: false,
            message:'Name must be at least 2 characters and no more the 255 characters'
        }
    }

    return {
        success: true,
        message:''
    }

}

function validateFavChar(data) {
    if(parseInt(data) < 1 || parseInt(data) > 25 ) {
        return {
            success: false,
            message:'Character must be between 1 & 25'
        }
    }

    return {
        success: true,
        message:''
    }
}

function checkLength(data,min, max) {
    if(data.length > min && data.length < max) {
        return true
    } else {
        return false
    }
}

function sanitizeData(data) {
    data = data.trim();
    data = Validator.escape(data);
    return data;
}

module.exports.validateUser = validateUser;
module.exports.sanitizeData = sanitizeData;
module.exports.validateFavChar = validateFavChar;

