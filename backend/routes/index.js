const router = require('express').Router();

router.get('/', (req, res) => {
  res.json({
    message: 'Routes are working'
  })
})
router.use('/events', require('./events'));
router.use('/news', require('./news'));
router.use('/internships', require('./internships'));
router.use('/users', require('./users'));

module.exports = router;