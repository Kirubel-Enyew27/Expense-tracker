import React, {createContext, useReducer} from 'react'
import appReducer from './appReducer'
const intialState = {
	transactions: []
}

export const GlobalContext = createContext(intialState)

const GlobalProvider = ({children}) => {
	const [state, dispach] = useReducer(appReducer, intialState)

	function deleteTransaction(id) {
		dispach({
			type:'DELETE_TRANSACTION',
		    payload:id
		})
	}

	function addTransaction(transaction) {
		dispach({
			type: 'ADD_TRANSACTION',
		    payload: transaction
		})
	}

	return (<GlobalContext.Provider value={{
		transactions: state.transactions,
		deleteTransaction,
		addTransaction
	}}>
		{children}
		</GlobalContext.Provider>)
}

export default GlobalProvider