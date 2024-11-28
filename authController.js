const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, '../data/users.json');

// Leer datos
const getData = () => {
    const data = fs.readFileSync(dataFilePath);
    return JSON.parse(data);
};

exports.login = (req, res) => {
    const users = getData();
    const { username, password } = req.body;
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        res.json({ message: 'Login successful', user });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
};

exports.logout = (req, res) => {
    // Cerrar sesion 
    res.json({ message: 'Logout successful' });
};


