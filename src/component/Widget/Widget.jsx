import React from 'react';
import './widget.scss';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';

const Widget = ({ type }) => {
    
    let data;


    //temporary
    const amount = 100;
    const diff = 50;

    switch (type) {
        case "user":
            data = {
                title: "User",
                isMoney: false,
                link: "See all users",
                icon: (
                    <PermIdentityOutlinedIcon className="icon" />
                )
                
            }
            break;
        case "order":
            data = {
                title: "ORDERS",
                isMoney: false,
                link: "See all ORDERS",
                icon: (
                    <ShoppingCartOutlinedIcon className="icon" />
                )
                
            }
            break;
        case "earning":
            data = {
                title: "EARNINGS",
                isMoney: true,
                link: "view net earning",
                icon: (
                    <MonetizationOnOutlinedIcon className="icon" />
                )
                
            }
            break;
        case "balance":
            data = {
                title: "BALANCE",
                isMoney: true,
                link: "See details",
                icon: (
                    <AccountBalanceOutlinedIcon className="icon" />
                )
                
            }
            break;
        default:
            break;
    }

    return (
        <div className='widgets'>
            <div className="left">
                <span className='title'>{ data.title}</span>
                <span className='counter'>{data.isMoney && "$"} { amount}</span>
                <span className='link'>{ data.link} </span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <ExpandLessIcon/>
                    20%
                </div>
                {data.icon}
            </div>
        </div>
    )
}

export default Widget;