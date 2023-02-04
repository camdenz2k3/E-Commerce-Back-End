const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try{ 
    const categories = await Category.findAll({ include: [Product]});
    res.json(categories)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
});

router.get('/:id', async (req, res) => {
	try {
		const oneCategory = await Category.findOne({
      where: {
        id: req.params.id,
      },
      include: [Product]
    })
		res.json(oneCategory)
	} catch(err) {
		console.log(err);
		res.status(500).json(err);
	}
});

router.post('/', async (req, res) => {
  try {
    const newCategory = await Category.create(req.body)
    res.json(newCategory)
  } catch (err) {
    res.status(500).json(err)
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updateCategory = await Category.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    res.json(updateCategory)
  } catch (err) {
    res.status(500).json(err)
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deleteCategory = await Category.destroy({
      where: {
        id: req.params.id
      }
    })
    res.json(deleteCategory)
  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;
