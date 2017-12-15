const getStartOfDay = (date) => {
    const newDate = new Date(date)
    newDate.setHours(0,0,0,0);

    return newDate
}

export default getStartOfDay