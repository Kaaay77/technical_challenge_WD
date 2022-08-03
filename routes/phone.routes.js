const router = require("express").Router();
const phonesJson = require ('../data/phones.json');

router.get('/', (req, res, next) => {
    res.json(phonesJson)
});

router.get('/phone/:id', (req, res, next) => {
    const {id} = req.params

    phonesJson.findById(id)
    .then((phone) =>{
        res.json({phone})
    })
    .catch((err) => res.json(err))
})

module.exports = router;