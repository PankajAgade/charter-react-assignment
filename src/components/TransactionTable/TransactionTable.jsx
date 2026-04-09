import React, { useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import cssClasses from './TransactionTable.module.css';
import { getLastThreeMonths, getMonthName } from '../../utils/dateTime';
import { calculateRewardPoints } from '../../utils/rewardPoints';

const TransactionTable = ({ transactions, selectedMonth, selectedYear }) => {

    const rewardList = useMemo(() => {
        if (!transactions || transactions.length === 0) return null;

        const rewardMonthsList = getLastThreeMonths(selectedMonth, selectedYear);

        const monthlyPoints = {};
        let totalPoints = 0;

        rewardMonthsList.forEach(({ month, year }) => {
            monthlyPoints[`${month}-${year}`] = 0;
        });

        transactions.forEach((t) => {
            const date = new Date(t.date);
            const txtMonth = date.getMonth() + 1;
            const txtYear = date.getFullYear();
            const points = calculateRewardPoints(t.amount);

            const key = `${txtMonth}-${txtYear}`;
            // console.log({ monthlyPoints, key });
            // console.log("monthlyPoints?.hasOwnProperty(key) -> ", monthlyPoints?.hasOwnProperty(key));

            if (monthlyPoints?.hasOwnProperty(key)) {
                monthlyPoints[key] += points;
                totalPoints += points;
            }
        });

        return {
            rewardMonthsList,
            monthlyPoints,
            totalPoints
        };
    }, [transactions, selectedMonth, selectedYear]);

    const filteredTableTransactions = useMemo(() => {
        return transactions.filter(t => {
            // console.log({m: date.getMonth() + 1, y: date.getFullYear()})
            const date = new Date(t.date);
            return (date.getMonth() + 1).toString() === selectedMonth &&
                date.getFullYear().toString() === selectedYear;
        });
    }, [transactions, selectedMonth, selectedYear]);

    // useEffect(() => {
    //     console.log(rewardList);

    // }, [rewardList])

    return (
        <div className={cssClasses.card}>
            <h2 className={cssClasses.title}>Reward Points Summary</h2>

            {rewardList && (
                <div className={cssClasses.rewardSummary}>
                    {rewardList.rewardMonthsList.map(({ month, year }) => (
                        <div key={`${month}-${year}`} className={cssClasses.summaryItem}>
                            <span className={cssClasses.summaryLabel}>{getMonthName(month)} {year}</span>
                            <span className={cssClasses.summaryValue}>
                                {rewardList.monthlyPoints[`${month}-${year}`]}
                            </span>
                        </div>
                    ))}
                    <div className={cssClasses.summaryItem}>
                        <span className={cssClasses.summaryLabel}>Total (3 Months)</span>
                        <span className={cssClasses.summaryValue}>
                            <b>{rewardList.totalPoints}</b>
                        </span>
                    </div>
                </div>
            )}

            <h2 className={cssClasses.title}>History</h2>
            <div className={cssClasses.tableContainer}>
                {filteredTableTransactions.length === 0 ? (
                    <div className={cssClasses.noData}>No transactions found.</div>
                ) : (
                    <table className={cssClasses.table}>
                        <thead>
                            <tr>
                                <th>Transaction ID</th>
                                <th>Date</th>
                                <th>Amount</th>
                                <th>Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredTableTransactions.map((t) => (
                                <tr key={t.transactionId}>
                                    <td>{t.transactionId}</td>
                                    <td>{new Date(t.date).toLocaleDateString()}</td>
                                    <td className={cssClasses.amount}>{t.amount}</td>
                                    <td>
                                        <span className={cssClasses.pointsContainer}>
                                            {calculateRewardPoints(t.amount)}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

TransactionTable.propTypes = {
    transactions: PropTypes.arrayOf(
        PropTypes.shape({
            transactionId: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
            amount: PropTypes.number.isRequired,
        })
    ).isRequired,
    selectedMonth: PropTypes.string.isRequired,
    selectedYear: PropTypes.string.isRequired,
};

export default TransactionTable;
