import membersReducer from './membersReducer';
import expect from 'expect';

describe('Member Reducer',()=>{
  it('Should return default state when no action type',()=>{
    
      const state = [
      {
        id: "e837c9f5-247f-445f-bcc3-7d434348336b",
        firstName: "Martin",
        lastName: "Bradley",
        email: "mbradley0@google.it",
        avatar: "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
        ip: "166.124.172.160"
     }
    ];
    
     const action = {type:'anything',members:[]}
     const newState = membersReducer(state, action);

     expect(newState).toExist()
     expect(newState.length).toEqual(1);
     expect(newState[0].id).toEqual("e837c9f5-247f-445f-bcc3-7d434348336b");
     expect(newState[0]).toInclude({ 
        email: "mbradley0@google.it",
        avatar: "http://dummyimage.com/100x100.png/5fa2dd/ffffff"
      })
         
  })
})