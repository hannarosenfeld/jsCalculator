$(document).ready(function() {
    let result = ''
    let workingOperation = ''
    
    $('button').click(
        function(){
            if ($(this).text()  === 'AC') {
                return clear()
            } else if ($(this).text() === '=') {
                let result = (eval(workingOperation))
                workingOperation = result
                //console.log(result)
            } else if ($(this).hasClass('number')) {
                if ($(this).text() !== '0') {
                    workingOperation += $(this).text()
                }
                else if (workingOperation.slice(-1) === '0'){
                    workingOperation += ''
                } else {
                    workingOperation += '0'
                }
            } else if ($(this).hasClass('decimal')) {
                let lastChar = workingOperation.slice(-1)
                let workingArray = workingOperation.split(' ')
                let lastWord = workingArray[workingArray.length -1]
                if (lastChar === '.' || lastWord.indexOf('.') !== -1) {
                    workingOperation += ''
                } else {
                    workingOperation += $(this).text()
                }
            }
            else if ($(this).hasClass('operand')) {
                let twoLastChars = workingOperation.toString().slice(-2)
                let lastFour = workingOperation.toString().slice(-5)
                if (lastFour === '*  - ') {
                    workingOperation = workingOperation.slice(0, -5)
                    workingOperation += $(this).text()
                }
                else if ($(this).text() !== '-') {
                    if (twoLastChars === '+ ' || twoLastChars === '* ' || twoLastChars === '/ ' || twoLastChars === '- ') {
                        workingOperation += ''
                    } else {
                        workingOperation += ' ' + $(this).text() + ' '
                    }
                } 
                else {
                    workingOperation += ' ' + '-' + ' '
                }
            } 
            display.innerHTML = workingOperation

        }
    )

    function clear() {
        display.innerHTML = 0
        workingOperation = ''
        secondaryDisplay.innerHTML = workingOperation

    }

})
