module.exports = obj => (...props) => {
    var _result = {};
    props.forEach(prop => _result[prop] = obj[prop])
    return _result;
}