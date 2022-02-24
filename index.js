// Code your solutions in this file
for(let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`)
}

function writeCards(names, event) {
    const arr = []
    for(let i = 0; i < names.length; i++) {
         arr.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
         console.log(arr[i])
    }
    return arr
}
const list = ['fred','charles']
writeCards(list, 'birthday' )

function countDown(timer) {
   while(timer > -1) {
       console.log(timer--)
   }
}