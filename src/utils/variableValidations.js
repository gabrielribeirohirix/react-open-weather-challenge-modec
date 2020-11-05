/**
 * Validate if the object passed by parameter is empty
 */
export function isObjectEmpty(object) {

    if (Object.entries(object).length === 0) {
        return true
    } else {
        return false
    }

}

/**
 * Validate if the value passed by parameter is undefined or null
 */
export function isUndefinedOrNull(value) {

    switch (value) {

        case undefined:
            return true
        case null:
            return true
        default:
            return false

    }

}

