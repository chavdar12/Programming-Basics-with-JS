function travelling(input) {
    let i = 0;
    while (input[i] !== 'End') {
        if (!+input[i]) {
            console.log(`Going to ${input[i]}!`)
        }
        i++;
    }
}