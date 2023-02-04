const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// The `/api/products` endpoint

// get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.findAll({include: [Category, Tag]})
    res.json(products)
  } catch (err) {
    res.status(500).json(err)
  }
});

// get one product
router.get('/:id', async (req, res) => {
  try {
    const oneProduct = await Product.findOne({
      where: {
        id: req.params.id
      },
      include: [Category, Tag]
    })
    res.json(oneProduct)
  } catch (err) {
    res.status(500).json(err)
  }
});

// create new product
router.post('/', async (req, res) => {
  try {
    const newProduct = await Product.create(req.body)
    res.json(newProduct)
  } catch (err) {
    res.status(500).json(err)
  }
});

// update product
router.put('/:id', async (req, res) => {
    try {
      const updateProduct = await Product.update(req.body, {
        where: {
          id: req.params.id
        }
      })
      res.json(updateProduct)
    } catch (err) {
      res.status(500).json(err)
    }
});

router.delete('/:id', async (req, res) => {
  try {
    const deleteProduct = await Product.destroy({
      where: {
        id: req.params.id
      }
    })
    res.json(deleteProduct)
  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;
