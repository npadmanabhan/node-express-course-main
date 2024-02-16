const express = require('express')
const app = express()
const { products } = require('../data')

/**************************************************************
<<<<<<<<<<<<<<<Run app and check these URLs>>>>>>>>>>>>>>>>>>>>
---------------------------------------------------------------
http://localhost:5000
http://localhost:5000/api/v1/products
http://localhost:5000/api/v1/products/1
http://localhost:5000/api/v1/products/25
http://localhost:5000/api/v1/products/abc
http://localhost:5000/api/v1/products/1/reviews/2
http://localhost:5000/api/v1/find?search=a&limit=2
http://localhost:5000/api/v1/find?search=e&limit=2
http://localhost:5000/api/v1/find?search=z&limit=2
http://localhost:5000/api/v1/find?
http://localhost:5000/api/v1/find
http://localhost:5000/api/v1/find?search=a
http://localhost:5000/api/v1/find?limit=3
****************************************************************/

app.get('/', (req, res) => {
  res.send('<h1> Home Page</h1><a href="/api/v1/products">products</a>')
})

// app.get('/api/v1/products', (req, res) => {    
//     res.json(products)
//   })

app.get('/api/v1/products', (req, res) => {
    const newProducts = products.map((product) => {
      const { id, name, image } = product;
      return { id, name, image }
    })
    res.json(newProducts)
  })

app.get('/api/v1/products/1', (req, res)=> {
    const singleProduct = products.find((product) => product.id == 1)
    res.json(singleProduct)
  })

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<Route parameters>>>>>>>>>>>>>>>>>>>>>>>>>>
app.get('/api/v1/products/:productID', (req, res) => {
    //console.log(req)
    //console.log(req.params)
    const { productID } = req.params
  
    const singleProduct = products.find(
      (product) => product.id === Number(productID)
    )

    console.log(singleProduct)
    if (!singleProduct) {
      return res.status(404).send('The product you are looking for does not exist!')
    }
    return res.json(singleProduct)
})

//<<<<<<<<<<<<<<<<<<<More complex route parameters>>>>>>>>>>>>>>>>>>>>>>>>>>>>
app.get('/api/v1/products/:productID/reviews/:reviewID', (req, res) => {
  //console.log(req.params)
  res.send('This is an awesome product. You should stock up on it!')
})

//<<<<<<<<<<<<<<<<<<<<<<<<Query string parameters>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
app.get('/api/v1/find', (req, res) => {
  const { search, limit } = req.query
  let sortedProducts = [...products]  

  if (search) {    
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search)
    })
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit))
  }
  if (sortedProducts.length < 1) {
    return res.status(200).send('no products matched your search');
    //return res.status(200).json({ sucess: true, data: [] })
  }
  res.status(200).json(sortedProducts)
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
