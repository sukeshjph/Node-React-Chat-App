import expect from 'expect';
import thunk from 'redux-thunk';
import * as actions from './service';


describe('Testing service actions', () => {
  describe('loadAllChatsSuccess', () => {
    it('should create a Chat_Load_Success action', () => {
     
      const messages = [
           {
            id: "b03569ae-ccbf-4975-8040-4daba638b407",
            userId: "16373df5-da0a-4074-8295-f916b94269f4",
            message: "Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.",
            timestamp: "2016-11-09T05:04:58Z"
           }
         ]
      const chatActionExpected = {
        type: 'Chat_Load_Success',
        messages
      };

    
      const chatAction = actions.loadAllChatsSuccess(messages);    
      expect(chatAction).toEqual(chatActionExpected);
    });
  });
   describe('loadAllMembersSuccess', () => {
    it('should create a Member_Load_Success action', () => {
     
     const members=[{
    id: "cae5d3af-9ac7-471e-9061-e2e9d75f00e4",
    firstName: "Helen",
    lastName: "Hawkins",
    email: "hhawkins1@posterous.com",
    avatar: "http://dummyimage.com/100x100.jpg/dddddd/000000",
    ip: "179.239.189.173"
  }]
      const memberActionExpected = {
        type: 'Member_Load_Success',
        members
      };

    
      const memberAction = actions.loadAllMembersSuccess(members);    
      expect(memberAction).toEqual(memberActionExpected);
    });
  });
});

