'use strict';

const express = require('express');

const router = express.Router();
//require() the collection class
const {cartItemCollection}=require('../models/index');

// RESTful routes
router.get('/cartItem', getcartItem);
router.get('/cartItem/:id', getOnecartItem);
router.post('/cartItem', createcartItem);
router.put('/cartItem/:id',updatecartItem);
router.delete('/cartItem/:id',deletecartItem);


// RESTful route handlers

 async function getcartItem(req, res) {
  let cartItem= await cartItemCollection.read();
  res.status(200).json(cartItem);
  }
  
  async function getOnecartItem(request, response) {
    let id = (request.params.id);
    let cartItem = await cartItemCollection.read(id);
    response.status(200).json(cartItem);
  }
  
  async function createcartItem(req, res) {
    let newcartItem = req.body;
    let cartItem = await cartItemCollection.create(newcartItem);
    res.status(201).json(cartItem);
}
  



async function updatecartItem(req, res) {
    let id=req.params.id
    let content = req.body;
    let updated = await cartItemCollection.update(id, content);
    res.status(200).json(updated );
  }
  
  async function deletecartItem(req, res) {
    let id = req.params.id;
    let deleted = await  cartItemCollection.delete(id);
    res.status(204).json(deleted);
  }
  
  module.exports = router;