const { Kafka } = require("kafkajs")
const _ = require('lodash')
const deleteEvent = require('../../01-Infrastructure/events/deleteEvent');
const applicationCommands = require('../../03-Application/wunderdog.application.commands');
const application = new applicationCommands();

const clientId = "Shortener.EventEmitter.DeleteLink"
const brokers = ["localhost:29092"]
const kafka = new Kafka({
    clientId: clientId,
    brokers: brokers
});

const consumer = kafka.consumer({ groupId: clientId })


const deleteLinkConsumer = async () => {

    await consumer.connect()
    await consumer.subscribe({ topic: 'delete-link' })
    await consumer.run({

        eachMessage: ({ message }) => {
            console.log(`received message: ${message.value}`);
            const value = JSON.parse(new Buffer.from(message.value).toString());
            const event = new deleteEvent(value);
            application.deleteAsync(event);
        },
    })
}
module.exports = deleteLinkConsumer;