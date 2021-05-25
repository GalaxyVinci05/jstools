class JSTools {
    /**
     * Removes one or more specific elements from an array.
     * 
     * (To remove even a single array, you must include it in another array or else it won't work)
     * @param {any} elements The elements to remove
     * @param {array} array The array where to remove elements
     * @param {object} [options] Options to pass in
     * @param {boolean} [options.firstOnly] Whether to only remove the first matching element in the array
     * @returns array
     */

    remove(elements, array, options) {
        if (options?.firstOnly) {
            if (Array.isArray(elements)) {
                elements.forEach(element => {
                    for (let i = 0; i < array.length; i++) {
                        if (array[i] == element) {
                            array.splice(i, 1);
                            break;
                        } else if (typeof array[i] == 'object' && this.objEquals(array[i])) {
                            array.splice(i, 1);
                            break;
                        }
                    }
                });
            } else {
                for (let i = 0; i < array.length; i++) {
                    if (array[i] == elements) {
                        array.splice(i, 1);
                        break;
                    } else if (typeof array[i] == 'object' && this.objEquals(array[i], elements)) {
                        array.splice(i, 1);
                        break;
                    }
                }
            }
        } else {
            if (Array.isArray(elements)) {
                elements.forEach(element => {
                    for (let i = 0; i < array.length; i++) {
                        if (array[i] == element) {
                            array.splice(i, 1);
                        } else if (typeof array[i] == 'object' && this.objEquals(array[i], element)) {
                            array.splice(i, 1);
                        }
                    }
                });
            } else {
                for (let i = 0; i < array.length; i++) {
                    if (array[i] == elements) {
                        array.splice(i, 1);
                    } else if (typeof array[i] == 'object' && this.objEquals(array[i], elements)) {
                        array.splice(i, 1);
                    }
                }
            }
        }

        return array;
    }

    /**
     * Returns a random result from any type (for objects, returns a random object entry)
     * @param {any} element The element where to get a random value e.g. number, array element or string character
     * @returns any
     */

    random(element) {
        let result;

        if (typeof element == 'object' && !Array.isArray(element)) {
            result = Object.entries(element)[Math.floor(Math.random() * Object.entries(element).length)];
        } else {
            result = Array.isArray(element) ? element[Math.floor(Math.random() * element.length)] : Math.floor(Math.random() * element);
        }

        return result;
    }

    /**
     * Randomly returns true or false basing on the specified odds
     * @param {number} [odds] The odds from 0 to 1 to return true (if none, defaults to 0.5)
     * @returns boolean
     */

    randomBool(odds) {
        if (odds && typeof odds !== 'number') {
            throw new TypeError('Odds must be a number');
        } else if (odds < 0 || odds > 1) {
            throw new TypeError('Odds must be a number between 0 and 1');
        }

        const result = Boolean(Math.random() < (odds || 0.5));

        return result;
    }

    /**
     * Replaces one or more specific elements in an array with a replace element. Essentially works the same as JSTools.remove()
     * 
     * (To replace even a single array, you must include it in another array or else it won't work)
     * @param {any} elements The elements to replace
     * @param {any[]} array The array where to replace elements
     * @param {any} replaceElement The replace element
     * @param {object} [options] Options to pass in
     * @param {boolean} [options.firstOnly] Whether to only replace the first matching element in the array
     * @returns array
     */

    replace(elements, array, replaceElement, options) {
        if (options?.firstOnly) {
            if (Array.isArray(elements)) {
                elements.forEach(element => {
                    for (let i = 0; i < array.length; i++) {
                        if (array[i] == element) {
                            array[i] = replaceElement;
                            break;
                        } else if (typeof array[i] == 'object' && this.objEquals(array[i])) {
                            array[i] = replaceElement;
                            break;
                        }
                    }
                });
            } else {
                for (let i = 0; i < array.length; i++) {
                    if (array[i] == elements) {
                        array[i] = replaceElement;
                        break;
                    } else if (typeof array[i] == 'object' && this.objEquals(array[i], elements)) {
                        array[i] = replaceElement;
                        break;
                    }
                }
            }
        } else {
            if (Array.isArray(elements)) {
                elements.forEach(element => {
                    for (let i = 0; i < array.length; i++) {
                        if (array[i] == element) {
                            array[i] = replaceElement;
                        } else if (typeof array[i] == 'object' && this.objEquals(array[i], element)) {
                            array[i] = replaceElement;
                        }
                    }
                });
            } else {
                for (let i = 0; i < array.length; i++) {
                    if (array[i] == elements) {
                        array[i] = replaceElement;
                    } else if (typeof array[i] == 'object' && this.objEquals(array[i], elements)) {
                        array[i] = replaceElement;
                    }
                }
            }
        }

        return array;
    }

    /**
     * Works just as String.replace(), but replaces an array of strings in a string instead of a single string. Useful for hiding stuff you don't want people to see with a replace string
     * @param {string[]} array Array of strings to replace
     * @param {string} string The string where to replace strings
     * @param {string} replaceString The replace string
     * @returns string
     */

     replaceStr(array, string, replaceString) {
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
     * Compares two objects, checks if they have the same keys and values (also works for arrays)
     * @param {object} obj1 Initial object
     * @param {object} obj2 Object to compare
     * @param {object} [options] Options to pass in
     * @param {boolean} [options.ignoreSize] Whether to ignore the object's sizes and only compare until the initial object's size
     * @returns boolean
     */

    objEquals(obj1, obj2, options) {
        if (!(Array.isArray(obj1) && Array.isArray(obj2))) {
            if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
                return false;
            }
        }

        const objArr1 = Object.entries(obj1);
        const objArr2 = Object.entries(obj2);

        let found = true;

        if ((objArr1.length !== objArr2.length) && (options?.ignoreSize)) {
            found = false;
        } else {
            for (let i = 0; i < objArr1.length; i++) {
                if ((objArr1[i][0] == objArr2[i][0]) && (objArr1[i][1] == objArr2[i][1])) {
                    continue;
                } else {
                    found = false;
                    break;
                }
            }
        }

        if (found) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * Generates a random ID
     * @param {number} size The ID size
     * @param {object} [options] Options to provide for the generator
     * @param {boolean} [options.numsOnly] Whether to generate an ID with only numbers
     * @param {boolean} [options.charsOnly] Whether to generate an ID with only characters
     * @param {boolean} [options.upperOnly] Whether to only generate upper case characters in the ID
     * @param {boolean} [options.lowerOnly] Whether to only generate lower case characters in the ID
     * @returns string
     */

    generateID(size, options) {
        if (typeof size !== 'number') {
            throw new TypeError('Size must be a number');
        } else if (size > 1024) {
            throw new TypeError('ID size cannot be greater than 1024');
        }

        const rawChars = 'abcdefghijklmnopqrstuvwxyz';
        const chars = rawChars.split('');

        let id = new String();

        if (options?.numsOnly && options?.charsOnly) {
            throw new TypeError('Cannot enable both numsOnly and charsOnly');
        } else if (options?.numsOnly) {
            for (let i = 0; i < size; i++) {
                let n = this.random(10);
    
                id += n.toString();
            }
    
            return id;
        } else if (options?.charsOnly) {
            for (let i = 0; i < size; i++) {
                let n = this.random(chars.length);

                if (options?.upperOnly && options?.lowerOnly) {
                    throw new TypeError('Cannot enable both upperOnly and lowerOnly cases');
                } else if (options?.upperOnly) {
                    id += chars[n].toUpperCase();
                } else if (options?.lowerOnly) {
                    id += chars[n];
                } else {
                    let upper = this.randomBool();
    
                    id += upper ? chars[n].toUpperCase() : chars[n];
                }
            }

            return id;
        } else {
            for (let i = 0; i < size; i++) {
                let n = this.random(chars.length);
                let char = this.randomBool();

                if (char) {
                    if (options?.upperOnly && options?.lowerOnly) {
                        throw new TypeError('Cannot enable both upperOnly and lowerOnly cases');
                    } else if (options?.upperOnly) {
                        id += chars[n].toUpperCase();
                    } else if (options?.lowerOnly) {
                        id += chars[n];
                    } else {
                        let upper = this.randomBool();
        
                        id += upper ? chars[n].toUpperCase() : chars[n];
                    }
                } else {
                    let n = this.random(10);
    
                    id += n.toString();
                }
            }

            return id;
        }
    }
}

module.exports = JSTools;