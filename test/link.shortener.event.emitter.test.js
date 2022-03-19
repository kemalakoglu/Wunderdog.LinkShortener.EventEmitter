const assert = require('assert');

describe('Create Event Consume', function () {
    describe('If Request Model is valid', function () {
        it('should sent create event to application command', function () {
            assert.ok(true);
        });
    });

    describe('If Request Model is not valid', function () {
        it('should return not valid model message', function () {
            assert.ok('model is not valid');
        });
    });
});

describe('Update Event Consume', function () {
    describe('If Request Model is valid', function () {
        it('should sent update event to application command', function () {
            assert.ok(true);
        });
    });

    describe('If Request Model is not valid', function () {
        it('should return not valid model message', function () {
            assert.ok('model is not valid');
        });
    });
});

describe('Delete Event Consume', function () {
    describe('If Requested Id is exist', function () {
        it('should sent delete event to application command', function () {
            assert.ok(true);
        });
    });
});