var cName = 'Kashish'

console.log('Character at  2nd index is -> '+cName.charAt(2))

console.log('Index of character h is '+cName.indexOf('h') )

var cLastName = 'Rajwaniya'

//String concatation
var cFullName = cName + ' ' + cLastName
console.log(cName.concat(cLastName))
console.log(cFullName)

//Print Sub Sting
console.log(cFullName.slice(0,7)) //This will print the String and it will include the starting index and exclude the ending index

//Convert String in Uppercase
console.log(cFullName.toUpperCase())

//Convert String in Lowercase
console.log(cFullName.toLowerCase())

//Trim String
var a = ' gouri      '
console.log(a.length)
console.log(a.trim())
console.log(a.trim().length)