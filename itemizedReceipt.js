// create function logReceipt that accepts menu items (1 or many) as objects
// with these properties: {descr, price}
// i.e. {descr: 'Coke', price: 1.99}
// function should log each item to the console and log a total price

const logReceipt = (...items)=>{
// Initialize subtotal and tax variables
  let subtotal = 0; //Declare Subtotal here
  let total = 0; // Declare total here
  let tax = 0; // Declare tax here
  const taxRate = 0.08; // 8% tax rate (you can adjust this)

  items.forEach((items) =>{
    subtotal+= items.price;
    console.log(items.descr,'- $'+ items.price);
  })

//Calculate the tax amount
  tax = subtotal * taxRate;

// Calculate the total including tax
  total = subtotal + tax;

// Log subtotal, tax, and total
  console.log('Subtotal- $' + subtotal.toFixed(2));
  console.log('Tax (8%)- $' + tax.toFixed(2));
  console.log('Total- $' + total.toFixed(2));
  }

  const Burrito = {descr:'Burrito',price:5.99};
  const Chips = {descr:'Chips & Salsa',price:2.99};
  const Sprite = {descr:'Sprite',price:1.99};

// Check 
  logReceipt(
    { descr: 'Burrito', price: 5.99 },
    { descr: 'Chips & Salsa', price: 2.99 },
    { descr: 'Sprite', price: 1.99 }
  );

// Should log something like:
// Burrito - $5.99
// Chips & Salsa - $2.99
// Sprite - $1.99
// Subtotal - $10.97
// Tax- $0.88
// Total- $11.85



