const router = require('express').Router()
router.get('/login',(req, res) => res.render('login', { root: './views/'}))
router.get('/signup',(req, res) => res.render('signup', { root: './views/'}))
router.get('/',(req, res) => res.render('index', { root: './views/'}))
router.get('/createResume',(req, res) => res.render('create', { root: './views/'}))

router.get('/aiResume',(req, res) => res.render('aiResume', { root: './views/'}))
router.get('/mlResume',(req, res) => res.render('mlResume', { root: './views/'}))
router.get('/fsdResume',(req, res) => res.render('fsdResume', { root: './views/'}))
router.get('/gdResume',(req, res) => res.render('gdResume', { root: './views/'}))
router.get('/mdResume',(req, res) => res.render('mdResume', { root: './views/'}))
router.get('/sdResume',(req, res) => res.render('sdResume', { root: './views/'}))


module.exports = router