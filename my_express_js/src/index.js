// // const express = require('express');
// // const app = express();

// // app.get('/', (req, res) => {
// //   res.send('Hey i am express!');
// // });

// // app.get('/products/2', (req, res) => {
// //   res.send('<h2>Product 2</h2>');
// // });

// /// Dynamic route



// //  // query 1 key h request 1 object. hai 
// // const express = require('express');
// // const app = express();

// // function logger(req, res, next) {
// //   const timeStamp = new Date().toISOString();
// //   console.log('Logger ::', timeStamp, req.url, req.method);
// //   next(); // Passes control to the next middleware
  
// // }
// // app.use(logger) // logger register karne ka kaam kr rha h , and middleware called application level middleware
// // app.get('/', (req, res) => { 
// //   console.log(req.params);
// //   res.send(`<h2>Hey welcome!!!</h2>`);
// // });

// // const productDetails = ['Hey cool', 'cool hai guys', 'coool foooll', 'hgsdjgsd'];

// // app.get('/productd/:productId', (req, res) => {
// //   console.log(req.params);
// //   res.send(`<h2>${productDetails[req.params.productId]}</h2>`);
// // });

// // app.listen(3000, () => {
// //   console.log(`Server is running`);
// // });


// // create a page for authorized and anuthorized



// // function checkAuth(req, res, next) {
// //   if (req.headers['authorization'] === 'Bearer mysecrettoken') {
// //     next();
// //   } else {
// //     res.status(401).json({ error: 'Unauthorized access' });
// //   }
// // }

// // app.get('/authorized', checkAuth, (req, res) => {
// //   res.status(200).json({ message: 'Welcome, authorized user!' });
// // });

// // app.get('/unauthorized', (req, res) => {
// //   res.status(200).json({ message: 'This endpoint is accessible without authorization.' });
// // });

// // app.listen(3000, () => {
// //   console.log('Server running on port 3000');
// // });

// const express = require('express');
// const app = express();

// function logger(req, res, next) {
//   console.log('Query::', req.query);
//   const timeStamp = new Date().toISOString();
//   console.log('Logger::', timeStamp, req.url, req.method);
//   console.log(req.query.password);

//   if (req.query?.password?.includes('abc')) {
//     next();
//   } else {
//     res.send('<h2>You are not authorized</h2>');
//   }
// }

// app.use(logger);

// app.get('/', (req, res) => {
//   res.send('<h1>Welcome</h1>');
// });

// const port = 3000;
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });



const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello world');
});


const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});