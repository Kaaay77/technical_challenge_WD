
const router = require("express").Router();

router.get('/', (req, res, next) => {
    res.json("hooolaaaaaa");
});




module.exports = router;