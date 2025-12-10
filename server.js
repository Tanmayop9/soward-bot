const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the current directory
app.use(express.static(__dirname, {
    extensions: ['html'],
    index: 'index.html'
}));

// Handle all routes by serving index.html for client-side routing
app.get('*', (req, res) => {
    const indexPath = path.join(__dirname, 'index.html');
    
    // Check if index.html exists
    if (fs.existsSync(indexPath)) {
        res.sendFile(indexPath);
    } else {
        res.status(404).send('Page not found');
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Soward Bot website is running on port ${PORT}`);
    console.log(`🌐 Visit: http://localhost:${PORT}`);
});
