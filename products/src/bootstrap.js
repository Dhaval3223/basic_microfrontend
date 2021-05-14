import faker from 'faker';

const mount = (el) => {
  let products = '';

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  el.innerHTML = products;
};

// Context/Situation #1
// we are running file in devlopement in isolation 
// we are using local index.html
// in which we definataly have an id of 'dev-product'
// we want to imedeatlly render our app into that element 

if(process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-products');

  // Assuming the container component doesnt have an element 
  // with id "dev-products"
  if(el) {
    mount(el);
  }
};

// Context/Situation #2
// we are running this file in dev or production
// throuth the container
// No guarantee that an element with an id of'dev-products
// we dont want to immediately render the app
export { mount };