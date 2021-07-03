const formatDateNumberToDayMonthYear = (dateNumber: number) => {
    const date = new Date(dateNumber)
    let d: number | string = date.getDay()
    let m: number | string = date.getMonth()
    let y = date.getFullYear()
    if (d <= 1 || d <= 9) d = `0${d}`
    if (m <= 1 || m <= 9) m = `0${m}`

    return `${d}/${m}/${y}`
}

const formatDateNumberToHourMinute = (dateNumber: number) => {
    const date = new Date(dateNumber)
    let h: number | string = date.getHours()
    let m: number | string = date.getMinutes()

    if (h <= 1 || h <= 9) h = `0${h}`
    if (m <= 1 || m <= 9) m = `0${m}`

    return `${h}:${m}`
}

export { formatDateNumberToDayMonthYear, formatDateNumberToHourMinute }
