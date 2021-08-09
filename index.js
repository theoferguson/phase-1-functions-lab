function distanceFromHqInBlocks(distance) {
    return Math.abs(distance - 42);
}

function distanceFromHqInFeet(distance) {
    return distanceFromHqInBlocks(distance) * 264;
}

function distanceTravelledInFeet(fromHere, toHere) {
    return Math.abs((fromHere - toHere) * 264);
}

function calculatesFarePrice(fromHere, toHere) {
    const distanceCalc = distanceTravelledInFeet(fromHere, toHere);
    if (distanceCalc <= 400) {
        return 0
    } else if (distanceCalc > 400 && distanceCalc < 2000) {
        return (distanceCalc - 400) * .02;
    } else if (distanceCalc >= 2000 && distanceCalc < 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}