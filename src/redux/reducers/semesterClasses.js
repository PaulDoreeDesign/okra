export default function(state = [], action) {
  switch (action.type) {
    case 'ADD_SEMESTER_CATEGORY':
      return [...state, action.payload];
    default:
      return state;
  };
}
