import PropTypes from 'prop-types';
import Transaction from './Transactions';

function TransactionsList({ transactions }) {
    return (
        <table class="transaction-history">
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {transactions.map(transaction => (
                    <Transaction
                        key={transaction.id}
                        type={transaction.type}
                        amount={transaction.amount}
                        currency={transaction.currency}
                    />
                ))}
            </tbody>
        </table>
    );
}

TransactionsList.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};

export default TransactionsList;
