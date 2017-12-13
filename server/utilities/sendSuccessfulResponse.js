module.exports = (response, message) => {
    let responseData = {
        hasErrors: false,
        message: message
    }

    response.setHeader('Content-Type', 'application/json');
    response.send(responseData);
    response.end()
}