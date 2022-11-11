module.exports =(app) =>{
  const posts = require('../controllers/post.controllers');
  const router = require('express').Router();

  router.get('/',posts.findAll);
  router.get('/:id',posts.findOne);
  router.post('/',posts.create);
  router.put('/:id',posts.update);
  app.use('/api/post', router);
}