const mongoose = require("mongoose");

function newResponse(code, message){
    return {
        code: code,
        message: message
    }
}

module.exports = newResponse;