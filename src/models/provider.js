

const mongoose = require('mongoose');


const providerSchema = new mongoose.Schema({
    rfc: {
        type: String,
        required: true,
    },
    razonSocial: {
        type: String,
        required: true,
    },
    contacto: {
        type: String,
        required: true,
    },
    estado: {
        type: String,
        required: true
    },
    telefono: {
        type: String,
        required: true,
    },
    telmovil: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: true,
    },
    cp: {
        type: String,
        required: true,
    },
    ninterior: {
        type: String,
        required: false,
    },
    nexterior: {
        type: String,
        required: false,
    },
    calle: {
        type: String,
        required: false,
    },
    colonia: {
        type: String,
        required: false,
    },
    entidad: {
        type: String,
        required: true,
    },
    municipio: {
        type: String,
        required: true,
    },
});


module.exports = mongoose.model('Provider', providerSchema);