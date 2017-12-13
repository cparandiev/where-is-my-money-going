module.exports = (response, data) => {
    response.setHeader('Content-Type', 'application/json');
    response.send(data);
    response.end()
}