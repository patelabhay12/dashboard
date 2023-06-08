import React from 'react';
import './sidebbar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import StoreIcon from '@mui/icons-material/Store';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AssessmentIcon from '@mui/icons-material/Assessment';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import EditLocationAltIcon from '@mui/icons-material/EditLocationAlt';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="top">
                <span className='logo'>PatelAdmin</span>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <DashboardIcon className='icons'/>
                        <span>DashBoard</span>
                    </li>
                    <p className="title">Lists</p>
                    <li>
                        <PermIdentityIcon className='icons'/>
                        <span>Users</span>
                    </li>
                    <li>
                        <StoreIcon className='icons'/>
                        <span>Products</span>
                    </li>
                    <li>
                        <CreditCardIcon className='icons'/>
                        <span>Orders</span>
                    </li>
                    <li>
                        <LocalShippingIcon className='icons'/>
                        <span>Delivery</span>
                    </li>
                    <p className="title">USEFULL</p>
                    <li>
                        <AssessmentIcon className='icons'/>
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsNoneIcon className='icons'/>
                        <span>Notifications</span>
                    </li>
                    <p className="title">SERVICE</p>
                    <li>
                        <SettingsSystemDaydreamIcon className='icons'/>
                        <span>System Health</span>
                    </li>
                    <li>
                        <EditLocationAltIcon className='icons'/>
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsApplicationsIcon className='icons'/>
                        <span>Settings</span>
                    </li>
                    <p className="title">USER</p>
                    <li>
                        <PersonPinIcon className='icons'/>
                        <span>Profile</span>
                    </li>
                    <li>
                        <LogoutIcon className='icons'/>
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption"></div>
                <div className="colorOption"></div>
            </div>
        </div>
    )
}

export default Sidebar;