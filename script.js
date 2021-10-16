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
                let lastChar = workingOperation.slice(-1);
                if (lastChar === '.' || workingOperation.split(' ').indexOf('.') !== -1) {
                    workingOperation += ''
                } else {
                    workingOperation += $(this).text()
                }
            }
            else if ($(this).hasClass('operand')) {
                let twoLastChars = workingOperation.toString().slice(-2)
                if (twoLastChars === '+ ' || twoLastChars === '* ' || twoLastChars === '/ ') {
                    workingOperation += ''
                } else {
                    workingOperation += ' ' + $(this).text() + ' '
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
