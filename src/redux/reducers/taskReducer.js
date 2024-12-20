const initialState = {
    tasks: [],
  };
  
  const taskReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        return {
          ...state,
          tasks: [...state.tasks, action.payload],
        };
      case 'UPDATE_TASK_RANK':
        return {
          ...state,
          tasks: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default taskReducer;
  