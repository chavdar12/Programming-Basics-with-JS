function vacationBookList(input) {
    let pageCount = Number(input[0]);
    let pageForOneHour = Number(input[1]);
    let day = Number(input[2]);
    let totalTime = (pageCount / pageForOneHour);
    let hoursPerDay = (totalTime / day);

    console.log(hoursPerDay);
}