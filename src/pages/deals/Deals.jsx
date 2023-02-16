import React, { useContext } from 'react'
import { exampleContext } from '../../context';
import cl from './Deals.module.scss';

const Deals = () => {
    const contex = useContext(exampleContext);
    
    return (
        <div className={cl.deals_page}>
            {contex.count}
        </div>
    );
};

export default Deals;