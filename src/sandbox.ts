//explicit types, declaring empty variables objects arrays etc but need to declare what type of value when declare it as an empty variable.

//explicit types

        // let character: string;
        // let age: number;
        // let isComing: boolean;

        // character = 'sofia';
        // age = 34;
        // isComing = true;

        // //arrays
        // let ninjas: string[] = [];
        // ninjas.push('jonathan')


//union types. declare more than one type of value
        // let flowers: (string|number)[] = [];
        //     flowers.push('rose');
        //     flowers.push(31);
        //     flowers.push('tulip');
        // console.log(flowers);

        // let uid: string|number;
        //   uid = '123';
        //   uid = 123;

//object
        // let container: {
        //     name: string,
        //     age: number,
        //     isHere: boolean
        // };

        // container = {name: 'sofia', age: 34, isHere: true};


//dynamic types (any). initialize any type of value but that takes away the whole point of typescript so ONLY USE IT IF IT'S ABSOLUTLEY NECESSARY

       //variables
            //    let ninjas: any;
            //    ninjas = true;
            //    ninjas = 'sofia';
            //    ninjas = 34;

       //array
            //    let all: any[] = [];

            //    all.push('hello');
            //    all.push(23);
            //    all.push(false);

       //objects
              //let obj: {name: any, age: any, loggedIn: any};
        
        //Functions in typescript

        //type of function
                // let greet: Function;

                // greet = () => {
                //         console.log('hi');
                // }

        //function type with type of parameters
              //c?: has an empty value  
                        // const add = (a: number, b: number, c: string | number) => {
                        //         console.log(a + b);
                        //         console.log(c);
                        // }

                        // add(10, 11, 'hi');

                        // const plus = (a: number, b: number): number => {
                        //         return a+b;
                        // }
        //result becomes a type of number bc the returned value in plus saves there
                        // let result = plus(12345, 192837);
                        // console.log(result);


// TYPE ALIASES
                //  type StringorNum = string | number;
                //  type obj = {name: string, uid: StringorNum};

                //  const logDetails = (uid: StringorNum, item: string) => {

                //  }

                //  const greet = (user: obj) => {

                //  }

                //  const greetAgain = (user: obj) => {

                //  }

//FUNCTION TYPES

//declaring a type of function
let greet: (a: string, b: string) => void;

//syntax of how to use function greet
greet = (name: string, greeting: string) => {
        console.log(`${name} says ${greeting}`);
}

//type of function that must return a number
let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
        if (action === 'add'){
                return numOne + numTwo;
        } else {
                return numOne - numTwo;
        }
}

//type of function with a parameter of object
let logDetails: (obj: {name: string, age: number}) => void;

logDetails = (ninja: {name: string, age: number}) => {
  console.log(`${ninja.name} is ${ninja.age} years old`);
}