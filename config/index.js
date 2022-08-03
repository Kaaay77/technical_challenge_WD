const espress = require ('express');

const logger = require ('morgan');

const cors = require ('cors');
const express = require('express');

module.exports = (app) => {

    app.set( "trust proxi" , 1 );

    app.use(
        cors({
            credentials: true,
            origin: process.env.ORIGIN || "http://localhost:3000"
        })
    );

    app.use(logger('dev'));

    app.use(express.json());

    app.use(espress.urlencoded({extended: false}));
}