const intialState = {
    ui: {
        homePageSelectedNode: '', 
    },
   };
   
   const appReducer = (state = intialState, { type, payload }) => {
     switch (type) {
       case 'setSelectedNode':
         return { ...state, homePageSelectedNode: payload };
       default:
         return state;
     }
   };
     
 
 
 export default appReducer