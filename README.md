# JSTools
###### Some very useful JavaScript tools that will spare you many lines of code when developing. Written in TypeScript

### Features
This package essentially includes:
> - Tools to manage arrays
> - Tools to manage strings
> - Tools to get random results out of any type or a random boolean
> - A tool to compare objects and arrays
> - A code generator

### Installation
With **npm**:

`npm i @galaxy05/jstools`

With **yarn**:

`yarn add @galaxy05/jstools`

#### Basic usages
###### remove
```js
function sample() {
    let arr = ['this', 'is', 'an', 'array', 0, 7, 2, 7];
    arr = jstools.remove('is', arr);

    // output: ['this', 'an', 'array', 0, 7, 2, 7]
}
```
###### replace
```js
function sample() {
    const arr = ['this', 'is', 'an', 'array', 0, 7, '7', 2, 7];
    const newArr = jstools.replace(7, arr, 'replaced', { strict: true });

    // output: ['this', 'is', 'an', 'array', 0, 'replaced', '7', 2, 'replaced']
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

    // outputs: random boolean (25% chances of returning true)
}
```
###### objEquals
```js
function sample() {
    const obj1 = {
        cool: 1
    };

    const obj2 = {
        cool: '1'
    };

    const isEqual = jstools.objEquals(obj1, obj2);
    // outputs: true

    const isEqual = jstools.objEquals(obj1, obj2, { strict: true });
    // outputs: false
}
```
###### generateCode
```js
function sample() {
    const numsId = jstools.generateID(12, {
        numsOnly: true
    });

    // outputs: a randomly generated string of only numbers like '741920148344'

    const charsId = jstools.generateID(16, {
        charsOnly: true
    });

    // outputs: a randomly generated string of only characters like 'fqcKdcMatKNHOFEL'

    const id = jstools.generateID(24);
    
    // outputs: a randomly generated string like '45k15y1Yt9TO7vL61S4BlF0s'
}
```