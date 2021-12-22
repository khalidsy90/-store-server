'use strict';

const express = require('express');

const router = express.Router();
//require() the collection class
const {productCollection}=require('../models/index');

// RESTful routes
router.get('/product',getproduct);
router.get('/product/:id', getOneproduct);
router.post('/product',createproduct);
router.put('/product/:id', updateproduct);
router.delete('/product/:id',  deleteproduct);


// RESTful route handlers

 async function getproduct(req, res) {
  let product= await productCollection.read();
  res.status(200).json(product);
  }
  
  async function getOneproduct(request, response) {
    let id = (request.params.id);
    let product = await productCollection.read(id);
    response.status(200).json(product);
  }
  
  async function createproduct(req, res) {
    let newproduct = req.body;
    let product = await productCollection.create(newproduct);
    res.status(201).send(product);
}
  


async function updateproduct(req, res) {
    let id=req.params.id
    let content = req.body;
    let updated = await productCollection.update(id, content);
    res.status(200).json(updated );
  }
  
  async function deleteproduct(req, res) {
    let id = req.params.id;
    let deleted = await productCollection.delete(id);
    res.status(204).json(deleted);
  }
  
  module.exports = router;