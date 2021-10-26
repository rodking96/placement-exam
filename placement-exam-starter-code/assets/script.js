// First, tell us your name
let yourName = "Rodrigo Reyes" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Ginger bread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Ginger Bread cookies
document.getElementById('add-gb').addEventListener('click', function () {
    gb += 1;
    document.getElementById('qty-gb').textContent = gb;
    document.getElementById('qty-total').textContent = (gb + cc + sugar);
})

document.getElementById('minus-gb').addEventListener('click', function () {
    if (gb >= 1) {
        gb -= 1;
        document.getElementById('qty-gb').textContent = gb;
        document.getElementById('qty-total').textContent = (gb + cc + sugar);
    }
})

document.getElementById('add-cc').addEventListener('click', function () {
    cc += 1;
    document.getElementById('qty-cc').textContent = cc;
    document.getElementById('qty-total').textContent = (gb + cc + sugar);
})

document.getElementById('minus-cc').addEventListener('click', function () {
    if (cc >= 1) {
        cc -= 1;
        document.getElementById('qty-cc').textContent = cc;
        document.getElementById('qty-total').textContent = (gb + cc + sugar);
    }
})

document.getElementById('add-sugar').addEventListener('click', function () {
    sugar += 1;
    document.getElementById('qty-sugar').textContent = sugar;
    document.getElementById('qty-total').textContent = (gb + cc + sugar);
})

document.getElementById('minus-sugar').addEventListener('click', function () {
    if (sugar >= 1) {
        sugar -= 1;
        document.getElementById('qty-sugar').textContent = sugar;
        document.getElementById('qty-total').textContent = (gb + cc + sugar);
    }
})
