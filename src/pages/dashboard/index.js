import React, { useContext } from 'react';
import { Layout, theme, Tabs } from 'antd';

import { HomeContext } from '../../context';
import PacakgesContainer from '../../components/PackagesContainer';
import DeliveryContainer from '../../components/DeliveryContainer';
import Mapcontainer from '../../components/MapContainer';

const { Header, Content, } = Layout;



const Dashboard = ({ }) => {
    const { token: { colorBgContainer, borderRadiusLG } } = theme.useToken();
    const onChange = (key) => { console.log(key); };
    const items = [
        {
            key: '1',
            label: 'Packages',
            children: <PacakgesContainer />,
        },
        {
            key: '2',
            label: 'Deilvery',
            children: <DeliveryContainer />
        },
        {
            key: '3',
            label: 'Map',
            children:(<>
                <div id='google-map'>This is future map container </div>
                <Mapcontainer/>
            </>) 
        },
    ];

    return (
        <Layout>
            <Header style={{ position: 'sticky', top: 0, zIndex: 1, display: 'flex', alignItems: 'center', }}>
                <img src={require('../../Logo.png')} style={{ height: '50px', width: '250px' }} />
            </Header>
            <Content
                style={{
                    padding: '0px',
                }}
            >
                <div
                    style={{
                        padding: 0,
                        minHeight: 380,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
                </div>
            </Content>
        </Layout>
    );
};
export default Dashboard;