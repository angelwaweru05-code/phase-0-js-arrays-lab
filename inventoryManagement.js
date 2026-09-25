// Correct initial array
let products = ["Laptop", "Phone", "Headphones"];

// Function to log first product
function logFirstProduct() {
  console.log(products[0]);
}

// Function to add product
function addProduct(product) {
  products.push(product);
}

// Function to update product name
function updateProductName(index, newName) {
  products[index] = newName;
}

// Function to remove last product
function removeLastProduct() {
  products.pop();
}

// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
