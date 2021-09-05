/**
 * Returns a new array with the specified element filtered out
 * 
 * @param element Element to remove
 * @param array Array to filter
 * @param options Options to pass in
 * @param options.strict Whether to also compare types (defaults to false)
 * @returns array
 */
export function remove(element: any, array: any[], options?: { strict?: boolean }) {
    return typeof element == ('string' || 'number') ?
        (options?.strict ? array.filter(n => n !== element) : array.filter(n => n != element)) :
        array.filter(n => !objEquals(element, n, { strict: options?.strict }));
}

/**
 * Returns a random result from any type (for objects, returns a random object entry)
 * @param element Element where to get a random value
 * @returns any
 */
export function random(element: any) {
    return typeof element == 'object' && !Array.isArray(element) ?
        Object.entries(element)[Math.floor(Math.random() * Object.entries(element).length)] :
        (Array.isArray(element) ? element[Math.floor(Math.random() * element.length)] : Math.floor(Math.random() * element));
}

/**
 * Returns a random boolean basing on the specified odds
 * @param odds Odds from 0 to 1 to return true (defaults to 0.5)
 * @returns boolean
 */
export function randomBool(odds?: number) {
    if (odds && (typeof odds !== 'number' || (odds < 0 || odds > 1))) {
        throw new TypeError('Odds must be a number between 0 and 1');
    }

    return Boolean(Math.random() < (odds || 0.5));;
}

/**
 * Returns a new array with the specified element replaced with the replace element
 * 
 * @param element Element to replace
 * @param array Array to filter
 * @param replaceElement Replace element
 * @param options Options to pass in
 * @param options.strict Whether to also compare types (defaults to false)
 * @returns array
 */
export function replace(element: any, array: any[], replaceElement: any, options?: { strict?: boolean }) {
    for (let i = 0; i < array.length; i++) {
        if ((options?.strict ? array[i] === element : array[i] == element) ||
            (typeof array[i] == 'object' && objEquals(array[i], element, { strict: options?.strict }))) {
            array[i] = replaceElement;
        }
    }

    return array;
}

/**
 * Similar to replace() but takes an array of strings to replace with a replace string and is specifically made for strings
 * @param array Array of strings to replace
 * @param string The string where to replace strings
 * @param replaceString The replace string
 * @returns string
 */
export function replaceStr(array: string[], string: string, replaceString: string) {
    if (!Array.isArray(array)) {
        throw new TypeError('First parameter must be an array');
    } else if (typeof string !== 'string' || typeof string !== 'string') {
        throw new TypeError('Second and third parameters must be strings');
    }

    for (let i = 0; i < array.length; i++) {
        string = string.replace(array[i], replaceString);
    }

    return string;
}

/**
 * Compares two objects, checks if they have the same properties (also works for arrays)
 * @param obj1 Initial object
 * @param obj2 Object to compare
 * @param options Options to pass in
 * @param options.strict Whether to also compare types (defaults to false)
 * @returns boolean
 */
export function objEquals(obj1: any, obj2: any, options?: { strict?: boolean }) {
    if ((!(Array.isArray(obj1) && Array.isArray(obj2))) &&
        (typeof obj1 !== 'object' || typeof obj2 !== 'object')) return false;

    const objKeys = Object.keys(obj1);
    if (objKeys.length !== Object.keys(obj2).length) return false;

    for (let i = 0; i < objKeys.length; i++) {
        if (typeof obj1[objKeys[i]] == 'object' &&
            objEquals(obj1[objKeys[i]], obj2[objKeys[i]], { strict: options?.strict })) continue;

        if ((options?.strict ?
            (obj1[objKeys[i]] !== obj2[objKeys[i]]) :
            (obj1[objKeys[i]] != obj2[objKeys[i]]))) return false;
    }

    return true;
}

/**
 * Returns a string of randomly generated characters
 * @param length String length
 * @param options Options to pass in
 * @param options.numsOnly Whether to generate a string with only numbers
 * @param options.charsOnly Whether to generate a string with only characters
 * @param options.upperOnly Whether to only generate upper case characters in the string
 * @param options.lowerOnly Whether to only generate lower case characters in the string
 * @returns string
 */
export function generateCode(length: number, options?: {
    numsOnly?: boolean,
    charsOnly?: boolean,
    upperOnly?: boolean,
    lowerOnly?: boolean
}) {
    if (typeof length !== 'number') {
        throw new TypeError('Length must be a number');
    } else if (length > 1024) {
        throw new TypeError('String length cannot be greater than 1024');
    }

    const chars = 'abcdefghijklmnopqrstuvwxyz';

    let code = '';

    if (options?.numsOnly && options?.charsOnly) {
        throw new TypeError('Cannot enable both numsOnly and charsOnly');
    } else if (options?.numsOnly) {
        for (let i = 0; i < length; i++) {
            code += random(10).toString();
        }
    } else if (options?.charsOnly) {
        for (let i = 0; i < length; i++) {
            if (options?.upperOnly && options?.lowerOnly) {
                throw new TypeError('Cannot enable both upperOnly and lowerOnly cases');
            } else if (options?.upperOnly) {
                code += chars[random(chars.length)].toUpperCase();
            } else if (options?.lowerOnly) {
                code += chars[random(chars.length)];
            } else {
                code += randomBool() ? chars[random(chars.length)].toUpperCase() : chars[random(chars.length)];
            }
        }
    } else {
        for (let i = 0; i < length; i++) {
            if (randomBool()) {
                if (options?.upperOnly && options?.lowerOnly) {
                    throw new TypeError('Cannot enable both upperOnly and lowerOnly cases');
                } else if (options?.upperOnly) {
                    code += chars[random(chars.length)].toUpperCase();
                } else if (options?.lowerOnly) {
                    code += chars[random(chars.length)];
                } else {
                    code += randomBool() ? chars[random(chars.length)].toUpperCase() : chars[random(chars.length)];
                }
            } else {
                code += random(10).toString();
            }
        }
    }

    return code;
}