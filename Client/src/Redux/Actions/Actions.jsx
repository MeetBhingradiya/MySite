// Authenticator Action For ALL Locked Routes
export const Authenticator = (UserData)=>{
    return (dispatch)=>{
        type: 'Render'
        payload: UserData
    }
}