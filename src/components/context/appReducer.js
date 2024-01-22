const reducer = {
  DELETE_TRANSACTION: (state, action) => ({
    ...state,
    transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
  }),
  ADD_TRANSACTION: (state, action) => ({
    ...state,
    transactions: [action.payload, ...state.transactions]
  }),
  DEFAULT: state => state
};

export default (state, action) => (reducer[action.type] || reducer.DEFAULT)(state, action);
