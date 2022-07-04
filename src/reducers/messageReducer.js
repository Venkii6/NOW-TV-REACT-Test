const initialState = {
    messagesList : [],
    membersList : [],
    messagesWithMembersList:[]
  };

function messageReducer(state = initialState, action) {
     
    switch (action.type) {
        case 'GET_MESSAGES':
            return { ...state, messagesList: action.payload}
        case 'GET_MEMBERS':
          return { ...state, membersList: action.payload}
        case 'SET_MEMBERSANDMESSAGES':
            return { ...state, messagesWithMembersList: action.payload}
        default:          
        return state;
    }
  };
  export default messageReducer;