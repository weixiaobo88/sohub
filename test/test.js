var assert = require("assert");
var message = require('../api/models/Message.js');

describe('Sohub', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal(-1, [1, 2, 3].indexOf(5));
            assert.equal('hello sohub', 'hello' + ' sohub');
        });

        it('should update normal message to notice message', function () {
//            Message.create({
//                content: 'Test',
//                messageType: 'text'
//            }).done(function(err, msg){
//                    var temp = message.changeToNotice(msg._id);
//                    assert.equal(temp.messageType,'notice');
//            });
        });
    });

    describe('test javascript replace', function () {
        it('should be replaced', function () {
            var str = '+你好测试中文';
            var newStr = str.replace('+', '')
            assert.equal(newStr, '你好测试中文');
        });
    });

    describe('test message', function () {
        var msg = {
            Content: null
        };

        it('should be true for normal message', function () {
            msg.Content = '-这是一条普通消息';
            assert.equal(message.isValidMessage(msg), true);
        });

        it('should be false for un-normal message', function () {
            msg.Content = '+-这不是一条普通消息';
            assert.equal(message.isValidMessage(msg), false);
        });

        it('should return true to correct notice message', function () {
            msg.Content = '+你好';

            assert.equal(message.isValidNoticeMessage(msg), true);
        });
    });

})