interface User {
  id: number;
  name: string;
}

interface Product {
  id: number;
  name: string;
  price: number;
}

const users: User[] = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'Bob' },
];

const products: Product[] = [
  { id: 1, name: 'iPhone', price: 999 },
  { id: 2, name: 'Samsung Galaxy', price: 899 },
  { id: 3, name: 'Google Pixel', price: 799 },
];

const user = users.find(function (element: User) {
  if (element.id === 2) {
    return true;
  }
  return false;
}) as User;
console.log(user);

const expensiveProduct = products.find(
  (element: Product) => element.price > 900
) as Product;
console.log(expensiveProduct);
