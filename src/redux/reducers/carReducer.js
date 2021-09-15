const intialState = {
   cars: [],
  };
  
  const carReducer = (state = intialState, { type, payload }) => {
    switch (type) {
      case 'ww':
        return { ...state, products: payload };
      default:
        return state;
    }
  };
    


export default carReducer