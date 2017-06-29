import messageReducer from './messageReducer';
import expect from 'expect';

describe('Message Reducer',()=>{
  it('Should return default message state when no action type',()=>{
      const state = [
      {
        id: "cd445e6d-e514-424f-ba8f-16ec842002c6",
        userId: "fe27b760-a915-475c-80bb-7cdf14cc6ef3",
        message: "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
        timestamp: "2017-02-09T04:27:38Z"
      }

    ];
    
     const action = {type:'anything',messages:[]}
     const newState = messageReducer(state, action);

     expect(newState).toExist()
     expect(newState.length).toEqual(1);
     expect(newState[0].id).toEqual("cd445e6d-e514-424f-ba8f-16ec842002c6");
     expect(newState[0]).toInclude({ 
       message: "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
       timestamp: "2017-02-09T04:27:38Z"
      })
         
  })
})