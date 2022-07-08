function fishTank(input) {

    let length = (input[0]);
    let wight = (input[1]);
    let high = (input[2]);
    let percent = (input[3]);

    let totalInCM2 = length * wight * high;
    let totalInLiters = totalInCM2 / 1000;

    let space = percent / 100;

    let totalWaterNeed = totalInLiters * (1 - space);

    console.log(totalWaterNeed);
}