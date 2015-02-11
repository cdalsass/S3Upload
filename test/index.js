var should = require('chai').should(),
  amazon = require('../index');

describe('check content types', function() {
  it('verifies content types', function() {
    amazon.getContentTypeByFile('test.jpg').should.equal('image/jpg');
  });
});

// how the heck do i test this without valid amazon credentials?
describe('can upload a file', function() {
  it('should save without error', function(done) {
    amazon.UploadTemporaryFile({
      amazon: {
        accessKeyId: 'xxx'
      }
    }, '/tmp/out.png', 'uploadedfile.png', 'amazon-bucketname').then(function() {
      done();
    });
  })
});