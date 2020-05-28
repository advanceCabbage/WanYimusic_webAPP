const chatReducer = (state = '', action = {}) => {
    return {
      chatLog:  Object.assign({}, state, {
        statusMessage: action
      })
    }
  };
  export default chatReducer