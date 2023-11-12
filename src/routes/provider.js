const express = require("express")
const providerSchema = require("../models/provider")

const router = express.Router()

// Create provider

router.post("/providers", (req, res) => {
    const provider = new providerSchema(req.body);
    provider 
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json( {message: error} ));
});

// Get all providers

router.get("/providers", (req, res) => {
    providerSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json( {message: error} ));
});

// Get a provider

router.get("/providers/:id", (req, res) => {
    const { id } = req.params;
    providerSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json( {message: error} ));
});

// Update a provider

router.put("/providers/:id", (req, res) => {
    const { id } = req.params;
    const { rfc, razonSocial, contacto, estado, telefono, telmovil, email, cp, ninterior, nexterior, calle, colonia, entidad, municipio} = req.body;

    providerSchema
        .updateOne( { _id: id }, { $set: {rfc, razonSocial, contacto, estado, telefono, telmovil, email, cp, ninterior, nexterior, calle, colonia, entidad, municipio} })
        .then((data) => res.json(data))
        .catch((error) => res.json( {message: error} ));
});

// Delete a provider

router.delete("/providers/:id", (req, res) => {
    const { id } = req.params;
    providerSchema
        .deleteOne( { _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json( {message: error} ));
});



module.exports = router;
