const express = require('express');
const connectDB = require('./config/db');

const app = express();


//Connect to Data Base
connectDB();


//Init middleware
app.use(express.json({extended: false}));

app.get('/', (req, res) => res.send('Api Running'));


//Defining Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/propuestas', require('./routes/api/propuestas'));
app.use('/api/postulaciones', require('./routes/api/postulaciones'));
app.use('/api/fotos', require('./routes/api/fotos'));
app.use('/api/empresas', require('./routes/api/empresas'));
app.use('/api/authEmpresa', require('./routes/api/authEmpresa'));
app.use('/api/areas', require('./routes/api/areas'));
app.use('/api/contratos', require('./routes/api/contratos'));


//Start server
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server started on Port: ${PORT}`));