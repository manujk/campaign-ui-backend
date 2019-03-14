const kafka = require('kafka-node');
const config = require('../../utils/config');
const debug = require('debug');

const Producer = kafka.Producer;
const client = new kafka.KafkaClient({kafkaHost: config.kafka.hosts});
const producer = new Producer(client, {requireAcks: 1});

producer.on('ready', function () {
    debug('Producer is ready');
});

producer.on('error', function (err) {
    debug('[producer] => Producer is in error state with error: ' + err);
});

module.exports = producer;
