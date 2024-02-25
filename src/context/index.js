// import { createContext, useReducer } from "react"


// const initailValue = {
//     data: [],
//     term: "",
//     filter: "all"
// }

// export const Context = createContext()

// const reducer = (state = initailValue, action) => {
//     const {type, payload} = action;
//     switch (type) {
//         case "GET_DATE":
//         return {...state, data: payload}

//         default : 
//         return {state}
//     }
// }

// const ProviderR = ({ children }) => {
//     const [state, dispatch] = useReducer(reducer, initailValue)
//     return <Context.Provider value={{state, dispatch}}>{children}</Context.Provider>
// }

// export default ProviderR