function basketballEq(input) {

    let priceOfTraining = Number(input[0]);

    let shoes = (priceOfTraining * 0.60);
    let dress = (shoes * 0.80);
    let ball = (dress * (1 / 4));
    let accessories = (ball * (1 / 5));

    let totalCost = (priceOfTraining + shoes + dress + ball + accessories);

    console.log(totalCost);
}