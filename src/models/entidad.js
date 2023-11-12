const mongoose = require('mongoose');

const entidadSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  municipios: [
    {
      type: String,
    }
  ]
  // Otros campos de entidad
});

module.exports = mongoose.model('Entidad', entidadSchema);
