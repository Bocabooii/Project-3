const db = require('./connection');
const { User, Product } = require('../models');

db.once('open', async () => {
//   await Category.deleteMany();

//   const categories = await Category.insertMany([
//     { name: 'Food' },
//     { name: 'Household Supplies' },
//     { name: 'Electronics' },
//     { name: 'Books' },
//     { name: 'Toys' }
//   ]);

//   console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Meditation',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'meditation.jpg',
    //   category: categories[0]._id,
      price: 15,
      quantity: 76
    },
    {
      name: 'Breathwork',
      description:
        'Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.',
      image: 'breathwork.jpg',
    //   category: categories[0]._id,
      price: 23,
      quantity: 50
    },
    {
      name: 'MP3',
    //   category: categories[1]._id,
      description:
        'Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.',
      image: 'binaural.png',
      price: 7.99,
      quantity: 333
    },
    {
      name: 'Crystals',
    //   category: categories[1]._id,
      description:
        'Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felis, et fringilla sapien turpis vestibulum nisl.',
      image: 'crystal.jpeg',
      price: 100,
      quantity: 12
    },
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pam',
    lastName: 'Wash',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Eli',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
