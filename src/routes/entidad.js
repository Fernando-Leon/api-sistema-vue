// routes/entidad.js
const express = require('express');
const entidadSchema = require('../models/entidad');

const router = express.Router();

// Create entidades

router.post("/entidades", (req, res) => {
    const entidad = new entidadSchema(req.body);
    entidad 
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json( {message: error} ));
});

// Get all entidades

router.get("/entidades", (req, res) => {
    entidadSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json( {message: error} ));
});

// Get a entidad

router.get("/entidades/:id", (req, res) => {
    const { id } = req.params;
    entidadSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json( {message: error} ));
});

// Update a entidad

router.put("/entidades/:id", (req, res) => {
    const { id } = req.params;
    const { nombre, municipios } = req.body;

    entidadSchema
        .updateOne( { _id: id }, { $set: { nombre, municipios } })
        .then((data) => res.json(data))
        .catch((error) => res.json( {message: error} ));
});

// Delete a entidad

router.delete("/entidades/:id", (req, res) => {
    const { id } = req.params;
    entidadSchema
        .deleteOne( { _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json( {message: error} ));
});

module.exports = router;