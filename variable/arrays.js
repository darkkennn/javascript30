const data = ['car', 'truck', 'car', 'truck', 'bus', 'car', 'bus', 'truck', 'bus', 'car', 'bus', 'truck', 'bus', 'car', 'bus'];

const transportation = data.reduce((obj, item) => {
    !obj[item] ? obj[item] : obj[item]++;
})