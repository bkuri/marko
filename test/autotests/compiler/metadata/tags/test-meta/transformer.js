module.exports = function(elNode, context) {
    var metadata = context.metadata;
    metadata.test = metadata.test || { messages:[] };
    metadata.test.messages.push('hello there!');
    elNode.detach();
};