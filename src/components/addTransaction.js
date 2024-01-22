import React, {useState, useContext} from 'react'
import {GlobalContext} from './context/globalState'


const AddTransaction = ()=>{

	const [text, setText]= useState('')
	const [amount, setAmount]= useState()

	const {addTransaction} = useContext(GlobalContext)

	const onSubmit = (e) =>{
		e.preventDefault()

		setAmount(0)
		setText('')

		const newTransaction = {
			id: Math.floor(Math.random()*100000000),
			text,
			amount: +amount
		}

		addTransaction(newTransaction)

	}


	return(
	       <div>
	       		<h3>Add new transaction</h3>
	       		<form onSubmit={onSubmit}>
	       			<div className='form-control'>
	       				<label htmlFor='amount'></label>
	       				<input type='text' value={text} placeholder='Enter text...' onChange={(e)=>setText(e.target.value)}/>
	       			</div>
	       			<div className='form-control'>
	       				<label htmlFor="amount">
	       				Amount <br/> (negative-expense, postive-income)</label>
	       				<input type='number' value={amount} placeholder='enter amount...' onChange={(e)=>setAmount(e.target.value)}/>
	       			</div>
	       			<button className='btn'>Add transaction</button>	
	       		</form>
	       </div>	
	       )
}

export default AddTransaction