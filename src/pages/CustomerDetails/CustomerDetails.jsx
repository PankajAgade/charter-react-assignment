import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import cssClasses from "./CustomerDetails.module.css";
import { getCustomerDataByID } from '../../services/customers';
import { getTransactionDataByCustomerId } from '../../services/transaction';
import CustomerCard from '../../components/CustomerCard/CustomerCard';
import Select from '../../components/Select/Select';
import TransactionTable from '../../components/TransactionTable/TransactionTable';
import { monthOptionsList, yearOptionsList } from '../../utils/commonUi';

export default function CustomerDetails() {
    const { id } = useParams();
    const customerId = parseInt(id);

    const [customer, setCustomer] = useState(null);
    const [transactions, setTransactions] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const [selectedMonth, setSelectedMonth] = useState((new Date().getMonth() + 1).toString());
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear().toString());

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const [customerData, transactionData] = await Promise.all([
                    getCustomerDataByID(customerId),
                    getTransactionDataByCustomerId(customerId)
                ]);
                setCustomer(customerData);
                setTransactions(transactionData);
            } catch (err) {
                setError(err.message || err || "Failed to load customer details");
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [customerId]);

    if (isLoading) return <div className={cssClasses.loading}>Loading customer data...</div>;
    if (error) return <div className={cssClasses.error}>{error}</div>;

    return (
        <div className={cssClasses.container}>
            <CustomerCard
                name={customer?.name}
                customerId={customer?.customerId}
            />

            <div className={cssClasses.controls}>
                <Select
                    label="Filter by Month"
                    value={selectedMonth}
                    onChange={setSelectedMonth}
                    options={monthOptionsList}
                />
                <Select
                    label="Filter by Year"
                    value={selectedYear}
                    onChange={setSelectedYear}
                    options={yearOptionsList}
                />
            </div>

            <TransactionTable
                transactions={transactions}
                selectedMonth={selectedMonth}
                selectedYear={selectedYear}
            />
        </div>
    );
}