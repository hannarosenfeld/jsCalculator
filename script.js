$(document).ready(function() {
    let workingOperation = ''
    $('button').click(
        function(){
            display.innerHTML = $(this).text()

            if ($(this).text()  === 'AC') {
                return clear()
            } else if ($(this).text() === '=') {
                console.log(workingOperation)
                let result = (eval(workingOperation))
                display.innerHTML = result
                //console.log(result)
            } else if ($(this).hasClass('number')) {
                console.log('number')
                workingOperation += $(this).text()
            } else if ($(this).hasClass('operand')) {
                let lastChar = workingOperation.slice(-1);
                if (lastChar === '+' || lastChar === '*' || lastChar === '/') {
                    workingOperation += ''
                } else {
                    workingOperation += $(this).text()
                }
            }
            secondaryDisplay.innerHTML = workingOperation
        }
    )

    function clear() {
        display.innerHTML = 0
        workingOperation = ''
        secondaryDisplay.innerHTML = workingOperation

    }

})
