const faker = require('faker');



exports.getAllProducts = (req,res,next) => {
    const commerce = faker.commerce;
    
    const products = [
        {
        id: faker.random.uuid(),
        productName:commerce.productName(),
        price:commerce.price(),
        descp:commerce.productAdjective(),
        img:faker.image.business()
    },
        {
        id: faker.random.uuid(),
        productName:commerce.productName(),
        price:commerce.price(),
        descp:commerce.productAdjective(),
        img:faker.image.business()
    },
        {
        id: faker.random.uuid(),
        productName:commerce.productName(),
        price:commerce.price(),
        descp:commerce.productAdjective(),
        img:faker.image.business()
    },
        {
        id: faker.random.uuid(),
        productName:commerce.productName(),
        price:commerce.price(),
        descp:commerce.productAdjective(),
        img:faker.image.business()
    },
        {
        id: faker.random.uuid(),
        productName:commerce.productName(),
        price:commerce.price(),
        descp:commerce.productAdjective(),
        img:faker.image.business()
    }
]

    return res.json({products});

} 