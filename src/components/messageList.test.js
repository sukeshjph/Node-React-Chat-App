import React from 'react';
import expect from 'expect';
import {shallow,mount} from 'enzyme';
import MessageList from './messageList';

describe ('MessageList render', () => {
  it('should render MessageList', () => {
    let messages=[{
              id: "b03569ae-ccbf-4975-8040-4daba638b407",
              userId: "16373df5-da0a-4074-8295-f916b94269f4",
              message: "Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.",
              timestamp: "2016-11-09T05:04:58Z"
            }]
    
    let members=[{
    id: "cae5d3af-9ac7-471e-9061-e2e9d75f00e4",
    firstName: "Helen",
    lastName: "Hawkins",
    email: "hhawkins1@posterous.com",
    avatar: "http://dummyimage.com/100x100.jpg/dddddd/000000",
    ip: "179.239.189.173"
  }] 
    
    const props = {
        messages,
        members    
    };

    const wrapper = shallow(<MessageList {...props}/>);
    expect(wrapper).toExist();
    expect(wrapper.find('ul').length).toBeGreaterThan(0);
    expect(wrapper.find('div').hasClass('col-md-8')).toBeTruthy();
  });
});