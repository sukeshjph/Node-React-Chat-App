import initialState from './initialState';

export default function (state=initialState.members, action) {
  switch(action.type)
    {
     case "Member_Load_Success":
      return action.members;

      default:
      return state;
    }
}