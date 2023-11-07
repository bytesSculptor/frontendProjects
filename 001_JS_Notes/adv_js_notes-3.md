# Async JS Notes
## Synchronous JS : 
- _sync mtlb ek ke baad dusra hoga, jab tk ek command complete nhi hoti, dusri shuru nhi hogi_
    - Synchronous JavaScript me code ek line ke baad ek line execute hota hai.
    - Agar koi task delay me hota hai, to code aur user interface dono rukte hain.
    - Tasks ek saath execute hote hain.

## Asynchronous JS : 
- _async mtlb saare kaam ek sath shuru krdo, jiska answer pahle aa jae uska jawaab dedo_
    - Asynchronous JavaScript me code aage badh sakta hai bina kisi task ko rokne ke.
    - Code tasks ko "background" me bhejta hai aur dusre tasks ko execute karta hai.
    - User interface ko freeze hone se bachaya ja sakta hai.
    - Tasks ko callbacks, promises, ya async/await ke jariye manage kiya jata hai.

## JS is not Asynchronous : 
- _Event Loop ek tarah ka mechanism hai JavaScript mein jo code execution ko control karta hai. Isme do main components hote hain_

    - **Call Stack** : Call Stack ya fir Main stack ek list hai jahan par functions execute hote hain. Jab ek function start hota hai, woh stack mein jata hai, aur jab woh complete hota hai, woh stack se bahar nikal jata hai.

    - **Message Queue** : Message Queue ya fir side stack ek line hai jahan par asynchronous events wait karte hain, jaise ki mouse clicks ya network requests ka response.

    - Event Loop ka kaam yeh hota hai ki woh continuously Call Stack aur Message Queue ko monitor karta rahe. Agar Call Stack khali hota hai, to woh next event ko Call Stack mein push karke execute karta hai. Isse asynchronous events ko bina rukawat ke handle kiya ja sakta hai.

    - Iska main fayda yeh hai ki JavaScript code asychronous tasks ko execute kar sakti hai bina user interface ko block kiye.

## Promises, then, and catch
- **_Promises_** js me ek concept hota hai jo asychronous code ko manage krne ke liye use hota hai. Promises ek tarah ka contract ya agreement hota hai, ki ek task complete hoga ya nhi.
- **How Promises work** : 
    - hum ek function call krte hai, jise hum `promise constructor` bolte hai. Is function ke ander hum task define krte hai jo future me complete hone hai, ex: data fetch krna.
    - Promise ek object return krta hai, jisme 2 important methods hote hai : `then` and `catch` 
    - Agr task successful hota hai to `.then` chalta hai aur hum koi specific task complete krte hai.
    - Agr task complete nhi hua to hum `.catch` chalate hai, aur ye error handle krta hai. _`catch` method ka istemal error handling ke liye hota hai_
    - **Example :**
        ```js
        const fetchData = () => {
            return new Promise((resolve, reject) => {
                // Task to fetch data
                if (success) {
                    resolve(data); // Task successful
                } else {
                    reject(error); // Task failed
                }
            });
        }

        fetchData()
            .then((data) => {
                console.log("Data fetched successfully: ", data);
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
            });
        ```
    - **Promises, asynchronous code ko organize aur error handling ko improve karne ke liye use hote hai.**

## Async aur await
- Ye dono code likhne aur maintain krne me asan banate hai
- **Async function** -->> jab hum kisi function ke saamne `async` likhte hai to wo function ek asynchronous function ban jaata hai, aur iska matlab hai ki hum ab iss function ke ander `await` ka use kr skte hai 
- **Await Keyword** -->> `await` keyword ko async function ke ander use kiya jaat hai, jisse hum ek asynchronous task ko wait kra sakte hai. Jab hum kisi task ke sath `await` use krte hai to JS code rukta hai, jb tk ye task complete nhi ho jaata
- **Example:** 
    ```js
        async function fetchData(){
            let raw = await fetch(`https://randomuser.me/api/`);
            let ans = await raw.json();
            console.log(ans);
        }
        fetchData();
    ```

## Try and catch
- **_Try and catch JavaScript me error handling ke liye istemal hote hai. Yeh ek tarika hai jisse code ke errors ko handle karte hai_**
- **Try Block:** `try` block ek set of statements hota hai jahan par hum code ko wrap karte hain jise hum check karna chahte hain ki kahi koi error to nahi aaya hai. Agar koi error `try` block ke andar aata hai, to control turant `try` block se bahar **_nahi_** nikalta.

- **Catch Block:** Agar `try` block ke andar koi error aata hai, to control `catch` block me jata hai. `Catch` block me hum error ko capture karte hain aur uske sath kuch actions lete hain, jaise ki error message ko dikhana.

- Example:
    ```js
    try {
        // Koi code jahan par error aane ke chances hai
        let x = 10;
        let y = x.toUpperCase(); // TypeError: x.toUpperCase is not a function
    } catch (error) {
        // Error ko capture karke handle karna
        console.error('Error:', error);
    }
    ```
