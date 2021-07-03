enum Status {
    working = 'working',
    available = 'available',
    unavailable = 'unavailable',
}

const getColorBasedOnStatus = (status: Status) => {
    switch (status) {
        case Status.working:
            return 'yellow'
        case Status.available:
            return 'green'
        case Status.unavailable:
            return 'red'
        default:
            throw new Error(`Status has not value ${status}, please add it if needed.`)
    }
}

export { Status, getColorBasedOnStatus }
