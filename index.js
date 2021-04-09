// console.log(`Hello, world.`,`This is another line`)
let count = 1

function testFunc(){
    while( count<10 ) {
    debugger
    count += 1;        
    console.log(`This is our while loop. The value of count is ${count}.`)
    debugger
    }
    }

testFunc()