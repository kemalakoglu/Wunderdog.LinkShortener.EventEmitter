const assert = require('assert');

describe('Create Event Command', function () {
    describe('If Request Model is valid', function () {
        it('should produce create command', function () {
            assert.ok(true);
        });
    });

    describe('If Request Model is not valid', function () {
        it('should return not valid model message', function () {
            assert.ok('model is not valid');
        });
    });
});

describe('Update Event Command', function () {
    describe('If Request Model is valid', function () {
        it('should produce update command', function () {
            assert.ok(true);
        });
    });

    describe('If Request Model is not valid', function () {
        it('should return not valid model message', function () {
            assert.ok('model is not valid');
        });
    });
});

describe('Delete Event Command', function () {
    describe('If Requested Id is exist', function () {
        it('should produce delete command', function () {
            assert.ok(true);
        });
    });
});