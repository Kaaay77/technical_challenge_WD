
const router = require("express").Router();

router.get('/', (res, req, next) => {
    res.json("hooolaaaaaa");
});


const phoneRoutes = require('./phone.routes')
router.use("/phones", phoneRoutes)

module.exports = router;