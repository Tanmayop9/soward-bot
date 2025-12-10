const express = require('express');
const path = require('path');
const fs = require('fs');
const rateLimit = require('express-rate-limit');

const app = express();
const PORT = process.env.PORT || 3000;

// Rate limiting to prevent abuse
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
    standardHeaders: true,
    legacyHeaders: false,
});

app.use(limiter);

// Explicitly deny access to sensitive files (must be before static middleware)
const deniedFiles = [
    '.git',
    '.github',
    'node_modules',
    'package.json',
    'package-lock.json',
    'server.js',
    'render.yaml',
];

app.use((req, res, next) => {
    const requestedPath = req.path.substring(1); // Remove leading slash
    
    // Check if the request matches any denied file/folder
    if (deniedFiles.some(file => requestedPath.startsWith(file))) {
        return res.status(403).send('Access denied');
    }
    
    next();
});

// Serve static files only from specific allowed directories
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Serve specific public files
const allowedFiles = ['index.html', 'soward.png', 'vercel.json'];
app.use((req, res, next) => {
    const requestedFile = req.path.substring(1);
    
    if (allowedFiles.includes(requestedFile)) {
        return express.static(__dirname)(req, res, next);
    }
    
    next();
});

// Handle all other routes by serving index.html for client-side routing
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
