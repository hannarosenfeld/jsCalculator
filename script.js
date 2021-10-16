$(document).ready(function() {
    let workingOperation = ''
    $('button').click(
        function(){
            display.innerHTML = $(this).text()
            workingOperation += $(this).text()
            if ($(this).text()  === 'AC') {
                return clear()
            } else if ($(this).text() === '-') {
                display.innerHTML = $(this).text()
            } else if ($(this).text() === '=') {
                workingOperation = workingOperation.substring(0, workingOperation.length - 1)
                let result = (eval(workingOperation))
                display.innerHTML = result
                console.log(result)
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
