const controladoresWeb = {
    root: (req, res) => {
        res.redirect('/inicio');
    },
    inicio: (req, res) => {
        res.sendFile('index.html', { root: './public' });
    }
}

module.exports = { controladoresWeb }