import { Human } from './class';
const human2 = require(`./module`)

const human = new Human
console.log(`The human is ${human.pose}`)
human.stand()
console.log(`The human is ${human.pose}`)

console.log(`The human2 is ${human2.pose}`)
human2.pose = human2.stand(human2.pose)
console.log(`The human2 is ${human2.pose}`)