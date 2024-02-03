# ADVANCE JS NOTES

## JS Ke 2 Version Hai
- ES5: isme sirf `var` tha
    - _`var`_ function scoped hota hai
    - _`var`_ apne parent fnc me kahi bhi use ho skta hai
    - _`var`_ apne aap ko window pr attach kr leta hai
- ES6: isme `var`, `let`, aur `const` teeno Hai
    - _`let`_ braces `{}` scoped hota hai

## Browser Context API
- Ye hamko 3 cheeze deta hai: window, stack, heap
- `stack`
- `heap`
    - heap memory me intermediate data store hota hai, ex: jo calculation ke time ka data, etc.

## Execution Context and Lexical Environment
- ### _Execution Context_
    - Execution Context ek container hota hai, jaha pr fnc ka code execute hota hai, aur jb bhi koi fnc run ya execute hota hai, tab execution context create hota hai
    - iske andar 3 cheeze hoti hai : variables, functions, and lexical environment

- ### _Lexical Environment_
    - Ye tarika hai batane ka ki ek particular fnc kin values/cheezo ko access kr skta hai aur kin cheezo ko nahi, matlab ki it holds it's scope and scope chain

## How to copy reference values
- spread operator se reference value copy hoti hai, isko hum `...` se likhte hai, ex : `[...a]` , `{...obj}` 
- Example :
    ```js
    let arr1 = [1,2,3,4,5,6]
    let arr2 = [...arr]
    ``` 
    now ab arr2 me arr1 ki ek copy save ho jaegi, aur jo kuch bhi hm arr2 me karenge uska koi bhi effect arr1 me nhi hoga, arr2 ek new array ban chuka hai ab

## Truthy and Falsy
- Falsy values : 
    ```js
    0, false, undefined, NaN, document.all
    ```
- Truthy values : falsy ke alawa hr value Truthy hoti hai 

## ForEach Loop
- forEach loop arrays me use hota hai
- forEach loop kabhi bhi original array me changes nhi krta, wo original array ki ek temporary copy banata hai aur usme changes krke deta hai, aur jo original array hota hai wo hamesha same rahta hai
- Example : 
    ```js
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    arr.forEach(function(val){
        console.log(val+2);
    })
    O/P: 3, 4, 5, 6, 7, 8, 9, 10, 11
    ```

## For-In loop
- object pr loop lagane ke liye for-in loop use hota hai
- Example : 
    ```js
    var obj = {
        name: 'byte',
        age: 99,
        city: 'abc'
    }

    for(let key in obj){
        console.log(key, obj[key])
    }
    ```

## CallBack function
- callback fnc ek normal fnc ki tarah hi hota hai
- aisa fnc jo kuch time baad ya fir kuch event khatam hone ke baad chle use hum callback fnc kahte hai
- jaisa ki agr hum kuch code ko baad me chalana chahte hai to use hm ek fnc me daal dete hai, aur iss fnc ko bolte hai jb baaki ka code chl jaega to fir iss fnc ko chla dena
- Callback function ek aisa function hai jo kisi aur function mein pass kiya jaata hai aur jab woh function complete ho jaata hai, toh callback function execute hota hai. Iska use asynchronous programming mein hota hai, jisme ek task ko shuru karke dusre task ko continue kiya ja sakta hai bina wait kiye.

Example:

```javascript
//Function to add two numbers
function addNumbers(a, b, callback) {
  const result = a + b;

  // Yahan callback function ko invoke kiya ja raha hai
  callback(result);
}

// Ek callback function
function displayResult(sum) {
  console.log("Sum is: " + sum);
}

// Original function ko call kiya, aur callback function ko pass kiya
addNumbers(5, 10, displayResult);

// Output: Sum is: 15
```

Is example mein, `addNumbers` ek function hai jo 2 numbers ko add karta hai. Lekin isme ek aur parameter `callback` bhi hai, jisme hum ek function pass kar rahe hain (`displayResult`). Jab `addNumbers` execute hota hai, toh woh result ko calculate karta hai aur uss result ko `callback` function ke through display karne ke liye use karta hai.

Jab hum `addNumbers(5, 10, displayResult)` likhte hain, toh `displayResult` function ek callback function ke roop mein kaam karta hai. Iska output console par "Sum is: 15" hoga.

Is tareeke se, hum callback functions ka istemal karke asynchronous code likh sakte hain, jisse hum ek task ke complete hone ke baad dusre task ko shuru kar sakein.

## First Class Function
- JS me concept hota hai ki hm funcitons ko as a value use kr skte hai
- Example : 
    ```js
    1.  var abcd = function(){console.log('abcd')}
    2.  function abcd(a){
            a();
        }
        abcd(function(){console.log('abcd')})
        O/P: abcd
    ```
## ARRAYS
- ### _How arrays are made behind_
    - Array ek object hota hai aur wo behind as a `object` `(key: value)` pair me hi save hota hai
    - Example :
        ```js
        var arr = [1,2,3,4,6,6]
        // this is how array got saved behind
        arr = {
            0: 1,
            1: 2,
            2: 3,
            3: 4,
            4: 6,
            5: 6
        }
        ```
- ### _To check if it is an array or not_
    ```js
    Array.isArray([])
        -> O/P : true
    Array.isArray({})
        -> O/P : false
    ```
- ### _How to make negative indexes in arrays_
    ```js
    var arr = [90, 78, 55, 'abcd', 'name']
    arr[-1] = 66;
    console.log(arr);
    -> O/P : (5) [90, 78, 55, 'abcd', 'name', -1: 66]
    ```
## How to delete Object prop
```js
let info = {
    name: 'Byte Coder',
    age: 99,
    developer: 'JS Developer'
}
delete info.age;
```
