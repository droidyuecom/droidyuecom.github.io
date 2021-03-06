//notation: js file can only use this kind of comments
//since comments will cause error when use in webview.loadurl,
//comments will be remove by java use regexp
(function() {
    if (window.WebViewJavascriptBridge) {
        return;
    }

    var messagingIframe;
    var bizMessagingIframe;
    var sendMessageQueue = [];
    var receiveMessageQueue = [];
    var messageHandlers = {};

    var CUSTOM_PROTOCOL_SCHEME = 'yy';
    var QUEUE_HAS_MESSAGE = '__QUEUE_MESSAGE__/';

    var responseCallbacks = {};
    var uniqueId = 1;

    // 创建消息index队列iframe
    function _createQueueReadyIframe(doc) {
        messagingIframe = doc.createElement('iframe');
        messagingIframe.style.display = 'block';
	messagingIframe.style.background = "red"
        doc.documentElement.appendChild(messagingIframe);
	console.info("createQueueReadyIFrame")
    }
    //创建消息体队列iframe
    function _createQueueReadyIframe4biz(doc) {
        bizMessagingIframe = doc.createElement('iframe');
        bizMessagingIframe.style.display = 'block';
	bizMessagingIframe.style.background = "green"
        doc.documentElement.appendChild(bizMessagingIframe);
	console.info("createQueueReadyIFrame4Biz")

    }
    //set default messageHandler  初始化默认的消息线程
    function init(messageHandler) {
        if (WebViewJavascriptBridge._messageHandler) {
            throw new Error('WebViewJavascriptBridge.init called twice');
        }
        WebViewJavascriptBridge._messageHandler = messageHandler;
        var receivedMessages = receiveMessageQueue;
        receiveMessageQueue = null;
	console.log("init receivedMessages.length" + (receivedMessages.length))
        for (var i = 0; i < receivedMessages.length; i++) {
            _dispatchMessageFromNative(receivedMessages[i]);
        }
    }

    // 发送
    function send(data, responseCallback) {
        _doSend({
            data: data
        }, responseCallback);
    }

    // 注册线程 往数组里面添加值
    function registerHandler(handlerName, handler) {
        messageHandlers[handlerName] = handler;
    }
    // 调用线程
    function callHandler(handlerName, data, responseCallback) {
        console.info("callHandler handleName=" + handlerName + ";data=" + JSON.stringify(data));
        _doSend({
            handlerName: handlerName,
            data: data
        }, responseCallback);
    }

    function _runBridgeHandler(handlerName) {
        var handler = messageHandlers[handlerName];
        if (handler) {
            handler();
        }
    }
	
    function _runBridgeHandlerWithOneParameter(handlerName, parameter) {
    	var handler = messageHandlers[handlerName];
        if (handler) {
            handler(parameter);
        }
    }
	

    //sendMessage add message, 触发native处理 sendMessage
    function _doSend(message, responseCallback) {
        if (responseCallback) {
            var callbackId = 'cb_' + (uniqueId++) + '_' + new Date().getTime();
            responseCallbacks[callbackId] = responseCallback;
            message.callbackId = callbackId;
        }
	console.info("_doSend message=" + JSON.stringify(message) + ";callbackId=" + message.callbackId);
        sendMessageQueue.push(message);
        messagingIframe.src = CUSTOM_PROTOCOL_SCHEME + '://' + QUEUE_HAS_MESSAGE;
	console.info("_doSend set messagingUrl=" + (messagingIframe.src))    
    }

    // 提供给native调用,该函数作用:获取sendMessageQueue返回给native,由于android不能直接获取返回的内容,所以使用url shouldOverrideUrlLoading 的方式返回内容
    function _fetchQueue() {
	console.log("_fetchQueue start")    
        if(sendMessageQueue.length == 0) return;
        var messageQueueString = JSON.stringify(sendMessageQueue);
        sendMessageQueue = [];
	console.log("_fetchQueue messageQueued=" + messageQueueString);    
        //android can't read directly the return data, so we can reload iframe src to communicate with java
        bizMessagingIframe.src = CUSTOM_PROTOCOL_SCHEME + '://return/_fetchQueue/' + encodeURIComponent(messageQueueString);
    	console.log("_fetchQueue set bizMessagingIframe")
    }

    //提供给native使用,
    function _dispatchMessageFromNative(messageJSON) {
	console.log("_dispatchMessageFromNative json=" + JSON.stringify(messageJSON))
        setTimeout(function() {
            var message = JSON.parse(messageJSON);
            var responseCallback;
            //java call finished, now need to call js callback function
            if (message.responseId) {
		console.info("_dispatchMessageFromNative the java side has finished the work");
                responseCallback = responseCallbacks[message.responseId];
                console.info("_dispatchMessageFromNative responseCallback=" + responseCallback);
                if (!responseCallback) {
                    return;
                }
                var responseData = message.responseData;
                if(typeof responseData == 'string') {
                    responseData = JSON.parse(responseData);
                }
                responseCallback(responseData);
                console.info("responseCallback=" + responseCallback + ";data=" + responseData);

                delete responseCallbacks[message.responseId];
            } else {
                //直接发送
                if (message.callbackId) {
                    var callbackResponseId = message.callbackId;
                    responseCallback = function(responseData) {
                        _doSend({
                            responseId: callbackResponseId,
                            responseData: responseData
                        });
                    };
                }

                var handler = WebViewJavascriptBridge._messageHandler;
                if (message.handlerName) {
                    handler = messageHandlers[message.handlerName];
                }
                //查找指定handler
                try {
                    handler(message.data, responseCallback);
                } catch (exception) {
                    if (typeof console != 'undefined') {
                        console.log("WebViewJavascriptBridge: WARNING: javascript handler threw.", message, exception);
                    }
                }
            }
        });
    }

    //提供给native调用,receiveMessageQueue 在会在页面加载完后赋值为null,所以
    function _handleMessageFromNative(messageJSON) {
        console.log('_handleMessageFromNative:' + JSON.stringify(messageJSON));
        if (receiveMessageQueue) {
            receiveMessageQueue.push(messageJSON);
	    console.log('_handleMessageFromNative pushed into receiveMessageQueue');
        }
        _dispatchMessageFromNative(messageJSON);
    }

    var WebViewJavascriptBridge = window.WebViewJavascriptBridge = {
        init: init,
        send: send,
        registerHandler: registerHandler,
        callHandler: callHandler,
        _fetchQueue: _fetchQueue,
        _handleMessageFromNative: _handleMessageFromNative,
        _runBridgeHandler: _runBridgeHandler,
	_runBridgeHandlerWithOneParameter:_runBridgeHandlerWithOneParameter
    };

    var doc = document;
    _createQueueReadyIframe(doc);
    _createQueueReadyIframe4biz(doc);
    var readyEvent = doc.createEvent('Events');
    readyEvent.initEvent('WebViewJavascriptBridgeReady');
    readyEvent.bridge = WebViewJavascriptBridge;
    doc.dispatchEvent(readyEvent);
})();
