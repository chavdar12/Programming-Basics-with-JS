function supplyForSchool(input) {
    let pens = Number(input[0]);
    let markers = Number(input[1]);
    let detergent = Number(input[2]);
    let percentage = Number(input[3]);

    let sum = (pens * 5.80 + markers * 7.20 + detergent * 1.2);
    let discount = (sum * percentage / 100);
    let totalSum = (sum - discount);

    console.log(totalSum);
}