module.exports = (items, date, propertyName) => {
    return items.filter(item =>
        item[propertyName].setHours(0, 0, 0, 0) === date.setHours(0, 0, 0, 0))
}
