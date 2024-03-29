import React, {useContext} from 'react'
import {GlobalContext} from './context/globalState'


 const Balance=()=>{
 	const {transactions} = useContext(GlobalContext)
 	const amounts = transactions.map(transaction=>transaction.amount)
 	const total = amounts.reduce((acc, item) =>(acc +=item), 0).toFixed(2)

	return(
	       <div>
		       	<h4>Your Balance</h4>
		       	<h2 id='balance'>{total} birr</h2>
	       </div>
	       )
}

export default Balance