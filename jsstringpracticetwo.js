//String declration as literal
var a = 'Ram'

//String declarion as object
var b = new String('Ram')

console.log(a)
console.log(b)

console.log(a == b)

//Reverse String
function reverse(input){
        var result = ''
        var inputLength = input.length
        while(inputLength > 0){
            result = result + input[inputLength-1]
            inputLength--
        }
        return result
    }
    
    console.log(reverse('gouri'))

