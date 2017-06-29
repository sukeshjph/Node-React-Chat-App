import React from 'react';
import expect from 'expect';
import {shallow} from 'enzyme';
import MessageListRow from './messageListRow';

describe ('MessageList row', () => {
  it('should render basic html', () => {
    let msg={
              id: "b03569ae-ccbf-4975-8040-4daba638b407",
              userId: "16373df5-da0a-4074-8295-f916b94269f4",
              message: "Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.",
              timestamp: "2016-11-09T05:04:58Z"
            }
    
    let member={
    id: "cae5d3af-9ac7-471e-9061-e2e9d75f00e4",
    firstName: "Helen",
    lastName: "Hawkins",
    email: "hhawkins1@posterous.com",
    avatar: "http://dummyimage.com/100x100.jpg/dddddd/000000",
    ip: "179.239.189.173"
  } 
    
    const props = {
        msg,
        member    
    };

    const wrapper = shallow(<MessageListRow {...props}/>);
    const listTable = wrapper.find('li table');
    expect(listTable).toExist()
    
  });
});