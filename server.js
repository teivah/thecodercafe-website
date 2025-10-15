const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Redirections for Substack newsletter migration
// Redirect all newsletter content to read.thecoder.cafe subdomain

// Redirect posts: /p/POSTNAME -> https://read.thecoder.cafe/p/POSTNAME
app.get('/p/:postname', (req, res) => {
    res.redirect(301, `https://read.thecoder.cafe/p/${req.params.postname}`);
});

// Redirect sections: /s/SECTION -> https://read.thecoder.cafe/s/SECTION
app.get('/s/:section', (req, res) => {
    res.redirect(301, `https://read.thecoder.cafe/s/${req.params.section}`);
});

// Redirect tags: /t/TAG -> https://read.thecoder.cafe/t/TAG
app.get('/t/:tag', (req, res) => {
    res.redirect(301, `https://read.thecoder.cafe/t/${req.params.tag}`);
});

// Redirect feed: /feed -> https://read.thecoder.cafe/feed
app.get('/feed', (req, res) => {
    res.redirect(301, 'https://read.thecoder.cafe/feed');
});

// Redirect archive: /archive -> https://read.thecoder.cafe/archive
app.get('/archive', (req, res) => {
    res.redirect(301, 'https://read.thecoder.cafe/archive');
});

// Serve static files from the current directory
app.use(express.static('.'));

// Route for the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`🚀 The Coder Cafe website is running at http://localhost:${PORT}`);
    console.log(`📧 The iframe should now work properly!`);
});
