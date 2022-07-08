function toyShop(input) {
    let priceOfHoliday = Number(input[0]);
    let puzzles = Number(input[1]);
    let dolls = Number(input[2]);
    let teddyBears = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);

    let totalCountOfToys = puzzles + dolls + teddyBears + minions + trucks;
    let totalCostOfToys = puzzles * 2.60 + dolls * 3 + teddyBears * 4.10 + minions * 8.20 + trucks * 2.00;

    if (totalCountOfToys >= 50) {
        totalCostOfToys = totalCostOfToys * 0.75;
    }

    totalCostOfToys = totalCostOfToys * 0.9;
    let difference = Math.abs(totalCostOfToys - priceOfHoliday);

    if (totalCostOfToys >= priceOfHoliday) {
        console.log(`Yes! ${difference.toFixed(2)} lv left.`);

    } else {
        console.log(`Not enough money! ${difference.toFixed(2)} lv needed.`)
    }
}