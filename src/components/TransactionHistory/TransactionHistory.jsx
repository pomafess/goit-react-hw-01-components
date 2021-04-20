import React from 'react';
import PropTypes from 'prop-types';
import styles from "./TransactionHistory.module.css"

const TransactionHistory = ({ items }) => {
  const markup = items.map(({ id, type, amount, currency }) => (
    <tr key={id}
      className={styles.row}>
      <td className={styles.column}>{type}</td>
      <td className={styles.column}>{amount}</td>
      <td className={styles.column}>{currency}</td>
    </tr>
  ));
  return (
    <table className={styles.transactionHistory}>
      <thead >
        <tr className={styles.row}>
          <th className={styles.head}>Type</th>
          <th className={styles.head}>Amount</th>
          <th className={styles.head}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {markup}
      </tbody>
    </table>
  )
}
  

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};

export default TransactionHistory;