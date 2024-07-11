export function generateRandomNumber(n) {
    let array = new Array(n);
    for (let i = 0; i < n; i++) {
        array[i] = Math.floor(Math.random() * 10);
    }
    return array;
}

export let getSumOfRandomNumber = (array) => array.reduce((sum, current) => sum + current, 0);
