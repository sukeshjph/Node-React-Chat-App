import React from 'react';
import Moment from 'react-moment';

const MessageListRow = ({msg,member}) => {
  let {avatar,email,firstName} = member

  return (
      <li className="list-group-item">
         <table width="100%">
           <tbody>
              <tr>
             <td>
                <img src={avatar} alt={firstName}/>
             </td>
             <td>
               <p title={email}>{msg.message}</p>
             </td>
           </tr>
           <tr>
             <td colSpan="2">
               <span>{<Moment date={msg.timestamp} parse="YYYY-MM-DD HH:mm"/>}</span>   
             </td>
           </tr>
           </tbody>
         </table>
      </li>    
  );
};  

export default MessageListRow;