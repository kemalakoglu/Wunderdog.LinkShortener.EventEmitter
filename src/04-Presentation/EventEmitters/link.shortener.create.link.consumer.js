const { Kafka } = require("kafkajs")
const _ = require('lodash')
const createEvent = require('../../01-Infrastructure/events/createEvent');
const applicationCommands = require('../../03-Application/wunderdog.application.commands');
const application = new applicationCommands();

const clientId = "Shortener.EventEmitter.CreateLink"
const brokers = ["localhost:29092"]
const kafka = new Kafka({
    clientId: clientId,
    brokers: brokers
});

const consumer = kafka.consumer({ groupId: clientId })

const createLinkConsumer = async () => {

    await consumer.connect()
    await consumer.subscribe({ topic: 'create-link' })
    await consumer.run({

        eachMessage: ({ message }) => {
            console.log(`received message: ${message.value}`);
            const value = JSON.parse(new Buffer.from(message.value).toString());
            const event = new createEvent(_.get(value, 'link', null), _.get(value, 'tranId', null));
            application.createAsync(event);
        },
    })
}


module.exports = createLinkConsumer;
