const router = require("express").Router();
const phonesJson = require ('../data/phones.json');

router.get('/', (res, req, next) => {
    res.json(phonesJson)
})