
# ES6 ke kuch imp concepts

## arrow functions
- _purani js me 2 type ke functions the :_
    - functions statements
    - functions expression 
    - anonymous function
- _nayi JS me 3 type ke function hai jiske 3 type hai :_
    - basic fat arrow function
        ```js
        let abcd = ()=>{}
        abcd();
        ```
    - fat arrow function with one parameter
        ```js
        // let dcba = (param)=>{} 
        // dcba ko hm aise bhi likh skte hai
        let dcba = param => {}
        dcba(12)
        ```
    - fat arrow function with implicit return
        ```js
        // let g = () => {122}
        // g ko hm aise bhi likh skte hai 
        let g = () => 122
        console.log(g())
        ```
## template literals
- ye to simple hai haha
## default parameters
- isme hum function ke parameter ko default value set kr dete hai example: 
    ```js
    function abcd(a=0,b=0,c=0,d=0){
        console.log()
    }
    abcd(1,2,3,4)
    abcd(1345,232,323,40)
    abcd(3,4) // ab is case me `c` aur `d` parameter me default value jaegi jo ki `0` hai 
    ```
## rest and spread
_**Spread Operator** aur **Rest Operator** dono JavaScript mein array aur object manipulation ke liye use hote hain._

- **Spread Operator (`...`)**:
    - Spread operator (`...`) ek array ya object ke elements ko ek naye array ya object mein spread (bikher) dene ke liye istemal hota hai.
    - Isse hum ek array ko alag-alag elements ke sath combine kar sakte hain ya ek object ko dusre object ke sath merge kar sakte hain.

    - Example (Spread Operator) - Array:
        ```javascript
        const numbers = [1, 2, 3];
        const newNumbers = [...numbers, 4, 5, 6];
        console.log(newNumbers); // Output: [1, 2, 3, 4, 5, 6]
        ```

    - Example (Spread Operator) - Object:
        ```javascript
        const person = { name: 'John', age: 30 };
        const newPerson = { ...person, city: 'New York' };
        console.log(newPerson); // Output: { name: 'John', age: 30, city: 'New York' }
        ```

- **Rest Parameter (`...`)**:
    - Rest parameter bhi spread operator ke jaisa dikhta hai, lekin iska istemal **function** parameters ke liye hota hai.
    - Rest parameter ek function ke parameters ke sath use kiya jata hai, jisse hum ek variable mein baaki sab parameters ko collect karte hain.

    - Example (Rest Parameter):
        ```javascript
        function addNumbers(...numbers) {
            let sum = 0;
            for (let num of numbers) {
                sum += num;
            }
            return sum;
        }

        console.log(addNumbers(1, 2, 3, 4, 5)); // Output: 15
        ```

        Isme `...numbers` rest parameter hai jo function ke sab parameters ko ek array mein collect karta hai.


## destructuring
_**Destructuring** JavaScript mein ek powerful feature hai jo `arrays` aur `objects` ko extract karne aur unke values ko variables mein assign karne ke liye use hota hai. *Destructuring* ka main kaam data ko aasani se access aur use karne mein madad karna hai._

Destructuring ka istemal dono arrays aur objects ke sath kiya ja sakta hai.

**Destructuring Arrays**:
- Destructuring arrays me, hum ek array ke elements ko unke order ke hisab se variables mein assign kar sakte hain.

- Example (Destructuring Array):
    ```javascript
    const colors = ['red', 'green', 'blue'];
    const [color1, color2, color3] = colors;

    console.log(color1); // Output: 'red'
    console.log(color2); // Output: 'green'
    console.log(color3); // Output: 'blue'
    ```

**Destructuring Objects**:
- Destructuring objects me, hum ek object ke properties ko unke names ke hisab se variables mein assign kar sakte hain.

- Example (Destructuring Object):
    ```javascript
    const person = { name: 'Alice', age: 25, city: 'New York' };
    const { name, age } = person;

    console.log(name); // Output: 'Alice'
    console.log(age); // Output: 25
    ```

**_Hum destructuring se nested objects aur default values ko bhi extract kar sakte hain:_**

- Example (Nested Objects aur Default Values):
    ```javascript
    const user = {
        name: 'Bob',
        details: {
            age: 30,
            city: 'London'
        }
    };

    const { name, details: { age, city } } = user;
    const { email = 'N/A' } = user;

    console.log(name); // Output: 'Bob'
    console.log(age); // Output: 30
    console.log(city); // Output: 'London'
    console.log(email); // Output: 'N/A' (default value)
    ```

Destructuring JavaScript me code ko concise aur readable banane me help karta hai aur data ko aasani se access karne me help krta hai


## Classes
_**Classes** JavaScript mein ek blueprint ya template ki tarah hote hain jo objects create karne ke liye use hote hain. Yeh ek structured tarike se objects ko define karte hain aur usmein functions (methods) aur properties ko rakh sakte hain._

- Example:

    ```javascript
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        greet() {
            console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        }
    }

    const person1 = new Person('Alice', 25);
    const person2 = new Person('Bob', 30);

    person1.greet(); // Output: Hello, my name is Alice and I am 25 years old.
    person2.greet(); // Output: Hello, my name is Bob and I am 30 years old.
    ```

Isme, `Person` ek class hai jo `name` aur `age` properties ke sath banayi gayi hai. `constructor` method ek object ki initialization ke liye use hota hai. `greet` ek instance method hai jo `Person` class ke objects ke sath istemal kiya ja sakta hai.

Hum `Person` class ke blueprint se multiple objects create kar sakte hain jaise `person1` aur `person2`, aur fir hum un objects par `greet` method ko call kar sakte hain.

- **Classes JavaScript me code ko organize karne aur code reusability ko badhane ke liye use kiye jate hain.**
