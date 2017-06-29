import { getMessages,getMembers } from './data';

export function loadAllChatsSuccess(messages) {
   return {type: "Chat_Load_Success", messages};
}

export function loadAllChats() {
  return dispatch => {
    return getMessages().then(messages => {
      dispatch(loadAllChatsSuccess(messages));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadAllMembersSuccess(members) {
   return {type: "Member_Load_Success", members};
}

export function loadAllMembers() {
  return dispatch => {
    return getMembers().then(members => {
      dispatch(loadAllMembersSuccess(members));
    }).catch(error => {
      throw(error);
    });
  };
}