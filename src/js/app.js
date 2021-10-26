import CallbackChat from './CallbackChat';

const callbackChat = new CallbackChat();

callbackChat.bindToDOM(document.getElementById('root'));
callbackChat.init();
