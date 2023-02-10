# 0x01. ES6 Promises

This project is to get our feet on the ground on JavaScript basics and ECMAScript 6 and how it has evolved over time. The newly added features in ES6.

# Learning Objectives:
- What ES6 is
- New features introduced in ES6
- The difference between a constant and a variable
- Block-scoped variables
- Arrow functions and function parameters default to them
- Rest and spread function parameters
- String templating in ES6
- Object creation and their properties in ES6
- Iterators and for-of/in loops

# Setup
## Install NodeJS 12.11.x

From your home directory:
```bash
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```

Check to see it has been installed

```bash
$ nodejs -v
v12.11.1
$ npm -v
6.11.3
```

## Install Jest, Babel and ESLint

From your project directory:

Install Jest using:
```bash
npm install --save-dev jest
```

Install Babel using:
```bash
npm install --save-dev babel-jest @babel/core @babel/preset-env
```

Install ESLint using:
```bash
npm install --save-dev eslint
```

# Configuration files

`
package.json
`
click to show/hide file contents

`
babel.config.js
`
click to show/hide file contents

`
.eslintrc.js
`
Click to show/hide file contents

### From the terminal, run;
```bash
npm install
```

# Response Data
*uploadPhoto returns a response with the format*

`
{
  status: 200,
  body: 'photo-profile-1',
}
`

*createUser returns a response with the format*

`
{
  firstName: 'Guillaume',
  lastName: 'Salva',
}
`

# Tasks

#### 
0. Keep every promise you make and only make promises you can keep

Return a Promise using this prototype function `getResponseFromAPI()`

```javascript
bob@dylan:~$ cat 0-main.js
import getResponseFromAPI from "./0-promise.js";

const response = getResponseFromAPI();
console.log(response instanceof Promise);

bob@dylan:~$ 
bob@dylan:~$ npm run dev 0-main.js 
true
bob@dylan:~$ 
```

##### @@File: 0-promise.js


#### 1. Don't make a promise...if you know you can't keep it
Using the prototype below, return a promise. The parameter is a boolean.

```javascript
getFullResponseFromAPI(success)
```

When the argument is:

- `true`
  - resolve the promise by passing an object with 2 attributes:
    - `status: 200`
    - `body: 'Success'`
- `false`
  - reject the promise with an error object with the message `The fake API is not working currently`
Try testing it out for yourself

```javascript
bob@dylan:~$ cat 1-main.js
import getFullResponseFromAPI from './1-promise';

console.log(getFullResponseFromAPI(true));
console.log(getFullResponseFromAPI(false));

bob@dylan:~$ 
bob@dylan:~$ npm run dev 1-main.js 
Promise { { status: 200, body: 'Success' } }
Promise {
  <rejected> Error: The fake API is not working currently
    ...
    ...
bob@dylan:~$ 
```

##### @@File: 1-promise.js


#### 3. Handle multiple successful promises
In this file, import `uploadPhoto` and `createUser` from `utils.js`

Knowing that the functions in `utils.js` return promises, use the prototype below to collectively resolve all promises and log body `firstName` `lastName` to the console.

```javascript
function handleProfileSignup()
```

In the event of an error, log `Signup system offline` to the console

```javascript
bob@dylan:~$ cat 3-main.js
import handleProfileSignup from "./3-all";

handleProfileSignup();

bob@dylan:~$ 
bob@dylan:~$ npm run dev 3-main.js 
photo-profile-1 Guillaume Salva
bob@dylan:~$ 
```

##### @@File: 3-all.js


#### 4. Simple promise
Using the following prototype

```javascript
function signUpUser(firstName, lastName) {
}
```

That returns a resolved promise with this object:

```javascript
{
  firstName: value,
  lastName: value,
}
```

```javascript
bob@dylan:~$ cat 4-main.js
import signUpUser from "./4-user-promise";

console.log(signUpUser("Bob", "Dylan"));

bob@dylan:~$ 
bob@dylan:~$ npm run dev 4-main.js 
Promise { { firstName: 'Bob', lastName: 'Dylan' } }
bob@dylan:~$ 
```

##### @@File: 4-user-promise.js


#### 5. Reject the promises
Write and export a function named `uploadPhoto`. It should accept one argument `fileName` (string).

The function should return a Promise rejecting with an Error and the string `$fileName cannot be processed`

```javascript
export default function uploadPhoto(filename) {

}
```

```javascript
bob@dylan:~$ cat 5-main.js
import uploadPhoto from './5-photo-reject';

console.log(uploadPhoto('guillaume.jpg'));

bob@dylan:~$ 
bob@dylan:~$ npm run dev 5-main.js 
Promise {
  <rejected> Error: guillaume.jpg cannot be processed
  ..
    ..
bob@dylan:~$
```

##### @@File: 5-photo-reject.js


#### 6. Handle multiple promises
Import `signUpUser` from `4-user-promise.js` and `uploadPhoto` from `5-photo-reject.js`.

Write and export a function named `handleProfileSignup`. It should accept three arguments `firstName` (string), `lastName` (string), and `fileName` (string). The function should call the two other functions. When the promises are all settled it should return an array with the following structure:

```javascript
[
    {
      status: status_of_the_promise,
      value: value or error returned by the Promise
    },
    ...
  ]
```

```javascript
bob@dylan:~$ cat 6-main.js
import handleProfileSignup from './6-final-user';

console.log(handleProfileSignup("Bob", "Dylan", "bob_dylan.jpg"));

bob@dylan:~$ 
bob@dylan:~$ npm run dev 6-main.js 
Promise { <pending> }
bob@dylan:~$ 
```

##### @@File: 6-final-user.js


#### 7. Load balancer
Write and export a function named `loadBalancer`. It should accept two arguments `chinaDownload` (Promise) and `USDownload` (Promise).

The function should return the value returned by the promise that resolved the first.

```javascript
export default function loadBalancer(chinaDownload, USDownload) {

}
```

```javascript
bob@dylan:~$ cat 7-main.js
import loadBalancer from "./7-load_balancer";

const ukSuccess = 'Downloading from UK is faster';
const frSuccess = 'Downloading from FR is faster';

const promiseUK = new Promise(function(resolve, reject) {
    setTimeout(resolve, 100, ukSuccess);
});

const promiseUKSlow = new Promise(function(resolve, reject) {
    setTimeout(resolve, 400, ukSuccess);
});

const promiseFR = new Promise(function(resolve, reject) {
    setTimeout(resolve, 200, frSuccess);
});

const test = async () => {
    console.log(await loadBalancer(promiseUK, promiseFR));
    console.log(await loadBalancer(promiseUKSlow, promiseFR));
}

test();

bob@dylan:~$ 
bob@dylan:~$ npm run dev 7-main.js 
Downloading from UK is faster
Downloading from FR is faster
bob@dylan:~$ 
```

##### @@File: 7-load_balancer.js


#### 8. Throw error / try catch
Write a function named `divideFunction` that will accept two arguments: `numerator` (Number) and `denominator` (Number).

When the `denominator` argument is equal to 0, the function should throw a new error with the message `cannot divide by 0`. Otherwise, it should return the numerator divided by the denominator.

```javascript
export default function divideFunction(numerator, denominator) {

}
```

```javascript
bob@dylan:~$ cat 8-main.js
import divideFunction from './8-try';

console.log(divideFunction(10, 2));
console.log(divideFunction(10, 0));

bob@dylan:~$ 
bob@dylan:~$ npm run dev 8-main.js 
5
..../8-try.js:15
  throw Error('cannot divide by 0');
  ^
.....

bob@dylan:~$ 
```

##### @@File: 8-try.js


#### 9. Throw an error
Write a function named `guardrail` that will accept one argument `mathFunction` (Function).

This function should create and return an array named `queue`.

When the `mathFunction` function is executed, the value returned by the function should be appended to the queue. If this function throws an error, the error message should be appended to the queue. In every case, the message `Guardrail` was processed should be added to the queue.

Example:

```javascript
[
  1000,
  'Guardrail was processed',
]
```

```javascript
bob@dylan:~$ cat 9-main.js
import guardrail from './9-try';
import divideFunction from './8-try';

console.log(guardrail(() => { return divideFunction(10, 2)}));
console.log(guardrail(() => { return divideFunction(10, 0)}));

bob@dylan:~$ 
bob@dylan:~$ npm run dev 9-main.js 
[ 5, 'Guardrail was processed' ]
[ 'Error: cannot divide by 0', 'Guardrail was processed' ]
bob@dylan:~$ 
```

##### @@File: 9-try.js


#### 9. Throw an error
Import `uploadPhoto` and `createUser` from `utils.js`

Write an async function named `asyncUploadUser` that will call these two functions and return an object with the following format:

```javascript
{
  photo: response_from_uploadPhoto_function,
  user: response_from_createUser_function,
}
```

If one of the async function fails, return an empty object. Example:

```javascript
{
  photo: null,
  user: null,
}
```

```javascript
bob@dylan:~$ cat 9-main.js
import guardrail from './9-try';
import divideFunction from './8-try';

console.log(guardrail(() => { return divideFunction(10, 2)}));
console.log(guardrail(() => { return divideFunction(10, 0)}));

bob@dylan:~$ 
bob@dylan:~$ npm run dev 9-main.js 
[ 5, 'Guardrail was processed' ]
[ 'Error: cannot divide by 0', 'Guardrail was processed' ]
bob@dylan:~$ 
```

##### @@File: 100-await.js