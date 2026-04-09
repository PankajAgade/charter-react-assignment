import React from 'react';
import PropTypes from 'prop-types';
import cssClasses from './CustomerCard.module.css';
import { getAvtarLetters } from '../../utils/commonUi';

const CustomerCard = ({ name, customerId }) => {
    return (
        <div className={cssClasses.card}>
            <h2 className={cssClasses.title}>Customer Profile</h2>
            <div className={cssClasses.content}>
                {name ? (
                    <div className={cssClasses.profileHeader}>
                        <div className={cssClasses.avatar}>
                            {getAvtarLetters(name)}
                        </div>
                        <div className={cssClasses.customerInfo}>
                            <div className={cssClasses.detailItem}>
                                <span className={cssClasses.detailLabel}>Name:</span>
                                <span className={cssClasses.nameText}>{name}</span>
                            </div>
                            <div className={cssClasses.detailItem}>
                                <span className={cssClasses.detailLabel}>Customer ID:</span>
                                <span>#{customerId}</span>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className={cssClasses.noCustomer}>No customer data available.</div>
                )}
            </div>
        </div>
    );
};

CustomerCard.propTypes = {
    name: PropTypes.string,
    customerId: PropTypes.number,
};

export default CustomerCard;
