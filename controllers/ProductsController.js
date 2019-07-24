const faker = require("faker");

const initFakeData = () => {
  const commerce = faker.commerce;
  const products = [];
  for (i = 0; i < 100; i++) {
    products.push({
      id: faker.random.uuid(),
      productName: commerce.productName(),
      price: commerce.price(),
      descp: commerce.productAdjective(),
      img: faker.image.business()
    });
  }
  return products;
};

exports.getAllProducts = (req, res, next) => {
  const startIndex = req.params.page - 1;
  const endIndex = startIndex + 9;
  const products = initFakeData();

  const productsByPage = products.slice(startIndex, endIndex);
  const numberOfPages = Math.ceil(products.length / 9);

  return res.json({ products: productsByPage, numberOfPages });
};
