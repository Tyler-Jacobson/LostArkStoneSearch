
function intToNth(number) {
    if (number === 0) {
        return "Core"
    } else if (number === 1) {
        return "#1"
    } else if (number === 2) {
        return "#2"
    } else if (number === 3) {
        return "#3"
    } else {
        return `#${number}`
    }
}

export default intToNth;