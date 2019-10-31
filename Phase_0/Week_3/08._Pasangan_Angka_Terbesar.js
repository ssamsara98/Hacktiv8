function pasanganTerbesar(num) {
    // you can only write your code here!
    let maxCouple = 0;
    while (num != 0) {
        ((num % 100) > maxCouple) ? maxCouple = num % 100 : num = num;
        num = Math.trunc(num / 10);
    }
    return maxCouple;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99