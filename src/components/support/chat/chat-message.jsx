import React from 'react';

const ChatMessage = ({ message }) => {
  const isUser = message.sender === 'user';

  return (
    <div className={`flex items-end gap-3 ${isUser ? 'justify-end' : 'justify-start'}`}>
      {!isUser && (
        <div className="w-8 h-8 rounded-full bg-gray-500 flex items-center justify-center font-bold text-white flex-shrink-0">
          AS
        </div>
      )}
      <div
        className={`max-w-xs md:max-w-md p-3 rounded-xl ${
          isUser
            ? 'bg-cyan-600 text-white rounded-br-none'
            : 'bg-slate-700 text-gray-200 rounded-bl-none'
        }`}
      >
        <p className="text-sm">{message.text}</p>
      </div>
      <span className="text-xs text-gray-500">{message.time}</span>
      {isUser && (
        <div className="w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center font-bold text-white flex-shrink-0">
          TU
        </div>
      )}
    </div>
  );
};

export default ChatMessage;