let { people } = require('../data')
let { products } = require('../data')

const generateId = () => {
  return Math.max(...people.map(person => person.id), 0) + 1;
}

//Controller to Get People (GET)
const getPeople = (req, res) => {
  res.status(200).json({ success: true, data: people })
}

//Controller to Create Person (POST)
const createPerson = (req, res) => {
  const { name } = req.body
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: 'please provide name value' })
  }

  const newId = generateId()
  const newPerson = { id: newId, name: name}
  people.push(newPerson)  
  res.status(201).send({ success: true, data: people })
}

//Controller to Update PERSON (UPDATE)
const updatePerson = (req, res) => {
  const { id } = req.params
  const { name } = req.body

  const person = people.find((person) => person.id === Number(id))

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${id}` })
  }
  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name
    }
    return person
  })
  res.status(200).json({ success: true, data: newPeople })
}

//Controller to DELETE Person (DELETE)
const deletePerson = (req, res) => {  
  const indexOfPersonToDelete = people.findIndex(person => person.id === Number(req.params.id))
  if (indexOfPersonToDelete != -1) {
    people.splice(indexOfPersonToDelete,1)
  } else {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${req.params.id}` })
  }
  return res.status(200).json({ success: true, data: people })
}

//Controller to Get Products (GET)
const getProducts = (req, res) => {
  res.status(200).json({ success: true, data: products })
}

//Controller to Get Specific Product by Id (GET)
const getProductById = (req, res) => {
  const { productId } = req.params
  
    const singleProduct = products.find(
      (product) => product.id === Number(productId)
    )

    if (!singleProduct) {
      return res.status(404).send('The product you are looking for does not exist!')
    }
    return res.json(singleProduct)
}

module.exports = {
  getPeople,
  createPerson,
  updatePerson,
  deletePerson,
  getProducts,
  getProductById
}
