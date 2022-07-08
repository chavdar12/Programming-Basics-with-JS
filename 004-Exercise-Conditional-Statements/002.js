function movie(input) {
    let budget = Number(input[0]), stat = Number(input[1]), priceForDressOfOneStat = Number(input[2]),
        priceOfDecor = budget * 0.10, totalPriceForStat = stat * priceForDressOfOneStat, totalPriceOfTheMovie;

    if (stat > 150) {
        totalPriceForStat = totalPriceForStat * 0.9;
    }

    totalPriceOfTheMovie = totalPriceForStat + priceOfDecor;
    let difference = Math.abs(totalPriceOfTheMovie - budget);

    if (totalPriceOfTheMovie <= budget) {
        console.log("Action!");
        console.log(`Wingard starts filming with ${difference.toFixed(2)} leva left.`);
    } else {
        console.log("Not enough money!");
        console.log(`Wingard needs ${difference.toFixed(2)} leva more.`);
    }
}