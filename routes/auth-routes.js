const router = require('express').Router();
const passport = require('passport');

// auth login
router.get('/login', (req, res) => {
    res.render('login', { user: req.user });
});

// auth logout
router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

// auth with google+
router.get('/coinbase', passport.authenticate('coinbase', {
    scope: ['profile']
}));

// callback route for google to redirect to
// hand control to passport to use code to grab profile info
router.get('/coinbase/redirect', passport.authenticate('coinbase'), (req, res) => {
    // res.send(req.user);
    res.redirect('/');
});

module.exports = router;