const getEndOfDay = (date) => {
    const newDate = new Date(date)
    newDate.setHours(23,59,59,999)
    
    return newDate
}

export default getEndOfDay