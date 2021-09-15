const intialState = {
    workers: [],
   };
   
   const workersReducer = (state = intialState, { type, payload }) => {
     switch (type) {
       case 'ww':
         return { ...state, products: payload };
       default:
         return state;
     }
   };
     
 
 
 export default workersReducer