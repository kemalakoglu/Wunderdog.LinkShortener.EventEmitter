const assert = require('assert');

describe('Create Repository', function () {
    describe('If Request Model is valid', function () {
        it('should persist data to database', function () {
            assert.ok(true);
        });
    });

    describe('If Request Model is not valid', function () {
        it('should return not valid model message', function () {
            assert.ok('model is not valid');
        });
    });
});

describe('Update Repository', function () {
    describe('If Request Model is valid', function () {
        it('should persist data to database', function () {
            assert.ok(true);
        });
    });

    describe('If Request Model is not valid', function () {
        it('should return not valid model message', function () {
            assert.ok('model is not valid');
        });
    });
});

describe('Delete Repository', function () {
    describe('If Requested Id is exist', function () {
        it('should persist data to database', function () {
            assert.ok(true);
        });
    });
});