const express = require('express')
const productsRouter = express.Router()

const {
  getProducts,
  getProductById
} = require('./15-router-controller')

productsRouter.get('/', getProducts)
productsRouter.get('/:productId', getProductById)

module.exports = productsRouter