import React from 'react';
import MessageListRow from './messageListRow';

const MessageList = ({messages,members}) => {
  
  const listItems = messages.map(msg=>{
   const member = members.filter(member=>member.id===msg.userId)[0]
      return(<MessageListRow key={msg.id} msg={msg} member={member}/>)
  })
  
  
  return (
    <div className="col-md-8 col-md-offset-1">
      <h2>Chat Messages</h2>
      <ul className="list-group">
        {listItems}
      </ul>
    </div>
  );
};

export default MessageList;