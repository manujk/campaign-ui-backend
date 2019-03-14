const express = require('express');
const router = express.Router();
const producer = require('../core/kafka/producer')


router.post('/producer', function (req, res) {

    res.setHeader('Access-Control-Allow-Origin', '*');

    let data = req.body.data;
    console.log("Got: " + data)
    let payloads = [
        {topic: req.body.topic, messages: data, partition: 0}
    ];
    producer.send(payloads, function (err, data) {
        if (err) res.status(400).json({result: "Fail"});
        if (data) res.status(200).json({result: "Success"})
    });
});

module.exports = router;

