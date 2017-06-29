import initialState from './initialState';

export default function (state=initialState.messages, action) {
  
  switch(action.type)
    {
     case "Chat_Load_Success":
       let sortedMessages = action.messages.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp)).reverse();
       return sortedMessages;

      default:
      return state;
    }
}