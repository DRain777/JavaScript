class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
}
class Order {
  constructor(id) {
    this.id = id;
    this.products = [];
  }
  addProduct(product) {
    this.products.push(product);
  }
  getTotalPrice() {
    return this.products.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  }
}
const order = new Order(12345);
const product1 = new Product("Phone", 500, 2);
order.addProduct(product1);
const product2 = new Product("Headphones", 100, 1);
order.addProduct(product2);
console.log(order.getTotalPrice()); // Вывод: 1100



console.log(product1.price);
