import React, { useState, useEffect } from 'react';
import styles from './CustomerList.module.css';
import { getCustomerData } from '../../services/customers';
import { getAvtarLetters } from '../../utils/commonUi';
import { useNavigate } from 'react-router';

export default function CustomerListPage() {
    const [customers, setCustomers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchCustomers = async () => {
            try {
                const data = await getCustomerData();
                setCustomers(data);
            } catch (err) {
                setError(err.message || err || 'Failed to fetch customers');
            } finally {
                setIsLoading(false);
            }
        };

        fetchCustomers();
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.tableContainer}>
                {isLoading ? (
                    <div style={{ padding: '40px', textAlign: 'center', color: '#6b7280' }}>
                        Loading customers...
                    </div>
                ) : error ? (
                    <div style={{ padding: '40px', textAlign: 'center', color: '#ef4444' }}>
                        {error}
                    </div>
                ) : customers.length === 0 ? (
                    <div style={{ padding: '40px', textAlign: 'center', color: '#6b7280' }}>
                        No customers found.
                    </div>
                ) : (
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th className={styles.avatarColumn}></th>
                                <th>Customer Name</th>
                                <th className={styles.actionColumn}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {customers.map((customer) => (
                                <tr key={customer.customerId} className={styles.tableRow}>
                                    <td className={styles.avatarColumn}>
                                        <div
                                            className={styles.avatar}
                                        >
                                            {getAvtarLetters(customer.name)}
                                        </div>
                                    </td>
                                    <td>
                                        <span className={styles.customerName}>{customer.name}</span>
                                    </td>
                                    <td className={styles.actionColumn}>
                                        <button className={styles.viewButton} onClick={() => navigate(`/customer/${customer.customerId}`)}>
                                            View Details
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}