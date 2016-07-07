var chai = require('chai');

exports.checkTemplate = function(template) {
    chai.expect(template.metadata).to.eql({
        test: { messages: ["hello there!"] }
    });
};