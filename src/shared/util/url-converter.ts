export function convertPropertiesToUrlParameters(object) {
    return encodeURI(Object
            .keys(object)
            .filter((property) => object[property] !== null)
            .map((property) => object[property] === null ? '' : `${property}=${object[property]}`)
            .join('&'));
}
