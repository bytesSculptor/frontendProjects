# ADVANCE JS NOTE

## Higher Order Function
- wo function jo accept kre function as a parameter ya fir return kre ek function apne andar se
- example `forEach()` Method hamesha ek function as a parameter leta hai, to isliye forEach ek higher order function hai

## Constructor Function
- Ek normal function jiske ander `this` keyword ka use hota hai, aur call krte waqt `new` keyword ka use hota hai, bas use kahte hai constructor function
- jab hme ek jaise properties wale bahut saare elements banane hai uss time hm constructor function ka use krte hai
- Example:
    ```js
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    // Creating an instance of the Car object
    var myCar = new Car("Toyota", "Camry", 2020);

    // Accessing properties of the instance
    console.log(myCar.make); // Output: Toyota
    console.log(myCar.model); // Output: Camry
    console.log(myCar.year); // Output: 2020

## First Class Functions
- Jab ham normal functions ko as a variable use krte hai to use hm first class function kahte hai
- hm functions ko dusre functions ke as argument me bhi pass kr skte hai 
- Example:
    ```js
    1.  var abcd = function(){console.log('abcd')}
    2.  setTimeout(function(){},1000)
    3.  function abcd(a){
            a();
        }
        abcd(function(){console.log('abcd')})
        O/P: abcd
    ```
## New Keyword
- `new` ek keyword hai jo JavaScript mein istemal hota hai.
- Isse hum kisi constructor function se ek naya object bana sakte hain.
- Jab hum `new` use karte hain, to ek khali object `{}` create hota hai aur constructor function ke dwaara define kiye gaye properties aur methods usmein set hote hain.
- Naya object banakar, usse return kiya jata hai aur fir usse apne program mein istemal kar sakte hain. Isse hum ek blueprint se naye objects bana sakte hain.

## IIFE
- ### _iife hai function ko turant chalane ki kala, is tareke se ki hum log private variables bana paaye_
- Immediately Invoked Function Expression
- IIFE ek JavaScript design pattern hai jisme hum ek function define karte hain.
- Fir turant us function ko execute kar dete hain, jisse uska code chal jata hai.
- Isse hum variables ko alag scope me rakhte hain, taaki vo global scope ko affect na karein aur dusre scripts ke saath naam conflicts na ho.
- Example:
    ```js
    1.  (function() {
            var x = 10;
            console.log("IIFE example: " + x);
        })();
    2.  var ans = (function(){
            var privateVal = 12;

            return {
                getter: function(){
                    console.log(privateVal)
                },
                setter: function(val){
                    privateVal = val;
                }
            }
        })()
        ans.setter(23) // o/p:- undefined
        ans.getter() // o/p:- 23

    ```

## Prototype
- Jab bhi hum JavaScript me kisi object ko banate hain, to us object ke saath ek `prototype` apne aap JS add kr deta hai.
- Aur is prototype me predefined set of properties aur methods hote hai, jo us object ko inherit karta hai.
- Example : Jab hum ek array banate hai, usme hm `.length` property use kr lete hai, but `.length` property hmne nhi banai, to ye aayi kaha se, **YE** JS ke creators ne pahle se bna kr prototype ke ander rakh di hoti hai

## Prototypal Inheritance
- **_Prototypal Inheritance Kya Hai_** : Prototypal inhertance ek JavaScript concept hai jahan ek object doosre object se properties aur methods inherit krta hai.
- **_Prototype Object Ka Role_** : Har object ek prototype object ko point karta hai. Agar kisi object ke pass koi property ya method nahi hoti, to vo prototype object mein dekhta hai. Agar vo property ya method prototype object mein mil jaata hai, to usse use karta hai.
- **_Code Reusability Aur Sharing_** : Prototypal inheritance se, hum ek saath kai objects ke beech common properties aur methods ko share kar sakte hain, jo code ko simple aur memory efficient banata hai.
- Example :
    ```js
    // Prototype object define karo
    var smartphone = {
        makeCall: function(number) {
            console.log("Calling " + number);
        },
        sendText: function(number, message) {
            console.log("Sending text to " + number + ": " + message);
        }
    };

    // New smartphone create karo jo 'smartphone' object ko inherit karta hai
    var myPhone = Object.create(smartphone);

    // Ab 'myPhone' object 'makeCall' aur 'sendText' methods ko inherit karta hai
    myPhone.makeCall("123-456-7890");  // Output: Calling 123-456-7890
    myPhone.sendText("123-456-7890", "Hello!");  // Output: Sending text to 123-456-7890: Hello!
    ```

## This, Call, Apply, Bind
**`NOTE`** : Ek function jo object ke ander ho, use hm method bolte hai 
- ### this
    - this ek special type ka keyword hota hai JS me, jo apni value different context me change krta hai
    - Example : 
        - In global scope `this` ki value `window` hoti hai
            ```js
            console.log(this); // window
            ```
        - In function scope `this` ki value `window` hoti hai
            ```js
            function abcd(){
                console.log(this); // window
            }
            ```
        - In method scope `this` ki value `obj`  hoti hai
            ```js
            var obj = {
                name: "aquib",
                firstMethod: function(){
                    console.log(this) // object obj
                }
            }
            ```
        - EventListeners me `this` ki value jo bhi `addEventListener` se pahle likha hota hai wo hoti hai
            ```js
            var button = document.querySelector('button')
            button.addEventListener('click', function(){
                console.log(this)   // ye pura button element de dega
            })
            ```

- ### call
    - `call` ek JavaScript method hai jo har function ke saath aata hai. Iska basic use yeh hota hai ki hum ek function ko call karte waqt specify kar sakte hain ki vo kis object ke context mein chalana chahiye. Isse, hum ek function ko kisi specific object ke saath use kar sakte hain.
    - **Yeh kaise kaam karta hai:**
        - Hum ek function ke sath `call` method use karte hain, aur `call` ke andar hum ek object pass karte hain.
        - Is object ko hum "context" ke roop mein kehte hain. Function, is context ke andar chalata hai.
        - Function ke andar `this` keyword us context ke object ko refer karega.
    - Example:
        ```js
        // 1.
        function abcd(){
            console.log(this);
        }
        var obj = {
            name: "Jane Smith";
        }
        abcd.call(obj)
        -----------------------------------------------------
        // 2.
        var person = {
            firstName: "John",
            lastName: "Doe",
            fullName: function() {
                return this.firstName + " " + this.lastName;
            }
        };

        var anotherPerson = {
            firstName: "Jane",
            lastName: "Smith"
        };

        // Ab `fullName` function ko `call` se `anotherPerson` object ke context mein call karenge.
        var name = person.fullName.call(anotherPerson);
        console.log(name); // Output: Jane Smith
        ```

- ### Apply
    - apply bhi same cheez krta hai jo call krta hai, but agr fnc parameter lega, tb apply function arguments ek array me le lega
    - isme hum parameters ko ek array mein pass karte hain.
    - Example : 
        ```js
        function abcd(a, b, c, d){
            console.log(this);
        }
        var obj = {
            name: "Jane";
        }
        abcd.apply(obj, [1, 2, 3, 4])
        ```

- ### Bind
    - bind bhi bilkul same `call` ki tarah hota hai, ha bs ye function jo straightaway call nhi krta, balki ye function ko return krta hai 
    - Isse ek naya function return hota hai jo hum baad mein execute kar sakte hain.
    - Example : 
        ```js
        function abcd(a, b, c, d){
            console.log(this);
        }
        var obj = {
            name: "Jane";
        }
        var newFunction = abcd.bind(obj); 
        // now ab ye newFunction ek function contain krta hai jisko hm baad me use kr skte hai
        ```
## Pure and Impure Function
- **_Pure Function wo hote hai jisme ye 2 cheeze hoti hai_**
    - It should return same o/p for same i/P
    - It will never update/change the value of a global variable.
    - Example : 
        ```js
        function(val){
            return val + 1;
        }
        // ye function hamesha same answer return karega agr hm har `val` argument ke liye same value pass karenge to isliye ye pure function hua 
        ```
- **_Impure Function_**
    - jo pure nhi hote; haha 
    - Example : 
        ```js
        let someval = 0;
        function calc(x){
            someval++;
        }
        // ye calc function global variable someval ki value change kr raha hai isliye ye impure function hai
        ```
