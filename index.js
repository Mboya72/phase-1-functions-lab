// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
    const hq = '42';
    if (distance > hq) { return distance - hq }
    else { return hq - distance }
}
function distanceFromHqInFeet(distance) {
    const hq = '42';
    if (distance > hq) {
        return (distance - hq) * 264;
    } else {
        return (hq - distance) * 264;
    }
}
function distanceTravelledInFeet(start, destination) {
    const hq = '42';
    if (destination > start) {
        return (destination - start) * 264;
    } else { return (start - destination) * 264; }
}
function calculatesFarePrice( start,destination) {
    let distance = distanceTravelledInFeet(destination,start)
    if (distance > 2000 && distance < 2500) {
        return 25;
    }
    else if(distance <= 400) {
        return 0;
    }
    else if (distance > 400 && distance < 2000) {
        return (distance - 400) * 0.02;
    }

    else if(distance > 2500){
        return 'cannot travel that far';
    }
}
