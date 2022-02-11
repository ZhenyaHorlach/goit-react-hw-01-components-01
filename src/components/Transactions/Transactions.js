import PropTypes from 'prop-types';

export default function Transactions({ type, amount, currency }) {
    return (
        <tr class="tr">
            <td class="td">{type}</td>
            <td class="td">{amount}</td>
            <td class="td">{currency}</td>
        </tr>
    );
}

Transactions.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

