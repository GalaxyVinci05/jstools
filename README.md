# JSTools
###### Some very useful JavaScript tools that will help you when developing

### Features
This package essentially includes:
> - Tools to manage arrays
> - Tools to manage strings
> - Tools to get random results out of any type or a random boolean
> - A tool to compare objects and arrays
> - An ID generator

### Getting started
In order to use these tools in your project, just put the `jstools` folder (that you get when extracting the compressed file) wherever you like in your project, or you can also directly take the `jstools.js` file and put it in your project as it is.

#### Basic usage
_Also note that it's not a good idea to put `null` in most of these methods_
##### Setup
```js
const JSTools = require('path/to/jstools/jstools.js');
const jstools = new JSTools();
```

##### Methods Examples
###### remove
```js
function sample() {
    const arr = ['this', 'is', 'an', 'array', 0, 7, 2, 7];
    const newArr = jstools.remove('is', arr);

    // output: ['this', 'an', 'array', 0, 7, 2, 7]
}
```
###### replace
```js
function sample() {
    const arr = ['this', 'is', 'an', 'array', 0, 7, 2, 7];
    const newArr = jstools.replace(['array', '7'], arr, 'replaced');

    // output: ['this', 'is', 'an', 'replaced', 0, 'replaced', 2, 'replaced']
}
```
###### replaceStr
```js
function sample() {
    const str = 'some secret codes: 0000, 1111, 2222';
    const codes = ['0000', '1111', '2222'];

    const newStr = jstools.replaceStr(codes, str, 'secret');

    // output: 'some secret codes: secret, secret, secret'
}
```
###### random
```js
function sample() {
    const randomNum = jstools.random(10);
    // output: random number between 0 and 10

    const arr = ['this', 'is', 'an', 'array', 0, 7, 2, 7];
    const randomElement = jstools.random(arr);
    // output: random element from arr
}
```
###### randomBool
```js
function sample() {
    const isTrue = jstools.randomBool(0.25);

    // outputs: random boolean (25% chances of getting true)
}
```
###### objEquals
```js
function sample() {
    const obj1 = {
        cool: true
    };

    const obj2 = {
        cool: true
    };

    const isEqual = jstools.objEquals(obj1, obj2);
    
    // outputs: true, false if obj2 has different keys or values
}
```
###### generateID
```js
function sample() {
    const numsId = jstools.generateID(12, {
        numsOnly: true
    });

    // outputs: a random ID of only numbers like 741920148344

    const charsId = jstools.generateID(16, {
        charsOnly: true
    });

    // outputs: a random ID of only characters like fqcKdcMatKNHOFEL

    const id = jstools.generateID(24);
    
    // outputs: a random ID like 45k15y1Yt9TO7vL61S4BlF0s
}
```