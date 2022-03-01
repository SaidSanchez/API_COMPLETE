const express=require('express');
const controller=require('../controllers/directors');
const router =express.Router();

router.get('/',controller.list);

router.get('/:id',controller.index);

router.post('/:id',controller.create);

router.patch('/:id',controller.replace);

router.put('/:id',controller.edit);

router.delete('/:id',controller.destroy);

module.exports= router;
