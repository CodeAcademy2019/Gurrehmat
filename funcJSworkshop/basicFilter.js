function getShortMessages(messages){
    var result = messages.map(function extractMessage(object){
        return object.message;
    }).filter(function lessThan50(message){
        return message.length < 50;
    });
    return result;
}

module.exports = getShortMessages;