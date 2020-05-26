const express = require ('express');
const burger = require ('../models/burger.js');
const router = express.Router();

router.get('/', (req, res) => {
    burger.selectAll('burgers', (data) => {
        const burgerDataObj = {
              burgers: data
        };
    });
});

router.post('/api/burgers', (req, res) => {
    burger.insertOne ('burger_name', [req.body.burger], (err, result) => {
        if (err) {
            console.log(err)
        }
        console.log ('Post Route...')
        res.redirect('/');
    });
});

router.put('/api/burgers/:id', (req, res) => {
    const condition = 'id = ' + req.params.id;
    console.log('condition', condition);
    console.log(req.params.id);
    burger.updateOne({devoured: req.body.devoured}, condition, (result) => {
        if (result.changedRows == 0) {
            return res.status (404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;