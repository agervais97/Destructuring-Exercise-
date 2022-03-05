// Object Destructuring 1

//1. console.log(numPlanets); 8
//2. console.log(yearNeptuneDiscovered); 1846

//Object Destructuring 2

//1. console.log(discoveryYears); {yearNeptuneDiscovered: 8; yearMarsDiscovered: 1659}

//Obejct Destructuring 3

//1. getUserData({firstName:"Alejandro", favorite:"purple"}); "Your name is Alejandro and you like purple."
//2. getUserData({firstName:"Melissa"}); "Your name is Melisa and you like green."
//3. getUserData({}), "Your name is undefined and you like green."

//Array Destructuring 1

//1. console.log(first); Maya
//2. console.log(second); Marisa
//3. console.log(third); Chi

//Array Destructuring 2

//1. console.log(raindrops); "Raindrops on roses"
//2. console.log(whiskers); "whiskers on kittens"
//3. console.log(aFewOfMyFavoriteThings); ["Bright cooper kettles", "warm woolen mittens", "Brown paper packages tied up with strings"]

//Array Destructuring 3

//1. console.log(numbers); [20, 10, 30]

//ES2015 Object Destructuring

const {numbers:{a, b}} = obj

//ES2015 One-Line Array Swap with Destructuring 

[arr[0], arr[1]] = [arr[1], arr[0]];

const raceResults =  arr =>({ first, second, third, ...rest })