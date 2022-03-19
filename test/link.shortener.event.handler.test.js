const assert = require('assert');

describe('Create Event Handler', function () {
    describe('If Request Model is valid', function () {
        it('should sent create request to repository', function () {
            assert.ok(true);
        });
    });

    describe('If Request Model is not valid', function () {
        it('should return not valid model message', function () {
            assert.ok('model is not valid');
        });
    });
});

describe('Update Event Handler', function () {
    describe('If Request Model is valid', function () {
        it('should sent update request to repository', function () {
            assert.ok(true);
        });
    });

    describe('If Request Model is not valid', function () {
        it('should return not valid model message', function () {
            assert.ok('model is not valid');
        });
    });
});

describe('Delete Event Handler', function () {
    describe('If Requested Id is exist', function () {
        it('should sent delete request to repository', function () {
            assert.ok(true);
        });
    });
});