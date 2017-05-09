let moment = require('moment')

console.log(moment().format())
console.log('..................')

/* 
January 1st 1970 @ 00:00 === 0
Unix time staps start from this date and time
January 1st 1970 @ 00:01 === 60 or 60 seconds from the top date
*/

let now = moment()
console.log('Current timestamp: ', now.unix())
console.log('..................')

let timestamp = 1494323667
let currentMoment = moment.unix(timestamp)
console.log(currentMoment.format('MMMM Do, YYYY @ h:mm A'))
console.log('..................')