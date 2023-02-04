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
  // create a new category
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
