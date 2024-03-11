function sovle(array, rotationNumber) {

    while (rotationNumber > 0) {
    array.push(array.shift());
    rotationNumber--;
    }
    console.log(array.join(' '));
}
sovle([51, 47, 32, 61, 21], 2);