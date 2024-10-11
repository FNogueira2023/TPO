const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware para procesar JSON
app.use(express.json());

// Rutas
app.get('/', (req, res) => {
    res.send('Bienvenido al Marketplace de Videojuegos');
});


// Escuchar en el puerto
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
