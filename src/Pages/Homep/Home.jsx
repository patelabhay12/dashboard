// import { Table } from '@mui/material';
import React from 'react';
import Chat from '../../component/Chat/Chat';
import Featured from '../../component/featured/Featured';
import Navbar from '../../component/Navbar/Navbar';
import Sidebar from '../../component/SideBar/Sidebar';
// import Tables from '../../component/Table/Tables';
import Widget from '../../component/Widget/Widget';
import './home.scss';

const Home = () => {
    return (
        <>
            <div className="home">
                <Sidebar />
                <div className="homeContainer">
                    <Navbar />
                    <div className="widgets">
                        <Widget type="user" />
                        <Widget type="order" />
                        <Widget type="earning" />
                        <Widget type="balance" />
                    </div>
                    <div className="charts">
                        <Featured />
                        <Chat />
                    </div>

                    <div className="listContainer">
                        <div className="listTitle">
                            Latest Transactions
                        </div>
                        {/* <Tables/> */}
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home;