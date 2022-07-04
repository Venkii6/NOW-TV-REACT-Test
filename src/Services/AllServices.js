
import { getMessages, getMembers } from '../data/index';

export const MessageServices = {
    loadData(dispatch) {
        getMessages().then(messages =>{
            dispatch({
            type: 'GET_MESSAGES',
            payload: messages || []
        })
        })
    }
}

export const MemberServices = {
    loadData(dispatch) {
        getMembers().then(members =>{
            dispatch({
            type: 'GET_MEMBERS',
            payload: members || []
        })
        })
    }
}





