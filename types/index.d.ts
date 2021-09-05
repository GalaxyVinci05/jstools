/**
 * Returns a new array with the specified element filtered out
 *
 * @param element Element to remove
 * @param array Array to filter
 * @param options Options to pass in
 * @param options.strict Whether to also compare types (defaults to false)
 * @returns array
 */
export declare function remove(element: any, array: any[], options?: {
    strict?: boolean;
}): any[];
/**
 * Returns a random result from any type (for objects, returns a random object entry)
 * @param element Element where to get a random value
 * @returns any
 */
export declare function random(element: any): any;
/**
 * Returns a random boolean basing on the specified odds
 * @param odds Odds from 0 to 1 to return true (defaults to 0.5)
 * @returns boolean
 */
export declare function randomBool(odds?: number): boolean;
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
export declare function replace(element: any, array: any[], replaceElement: any, options?: {
    strict?: boolean;
}): any[];
/**
 * Similar to replace() but takes an array of strings to replace with a replace string and is specifically made for strings
 * @param array Array of strings to replace
 * @param string The string where to replace strings
 * @param replaceString The replace string
 * @returns string
 */
export declare function replaceStr(array: string[], string: string, replaceString: string): string;
/**
 * Compares two objects, checks if they have the same properties (also works for arrays)
 * @param obj1 Initial object
 * @param obj2 Object to compare
 * @param options Options to pass in
 * @param options.strict Whether to also compare types (defaults to false)
 * @returns boolean
 */
export declare function objEquals(obj1: any, obj2: any, options?: {
    strict?: boolean;
}): boolean;
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
export declare function generateCode(length: number, options?: {
    numsOnly?: boolean;
    charsOnly?: boolean;
    upperOnly?: boolean;
    lowerOnly?: boolean;
}): string;
