import React from 'react';
import { Flex, Layout } from 'antd';

import LoginForm from '../../components/LoginForm';

const { Header, Footer, Sider, Content } = Layout;
const headerStyle = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 48,
    lineHeight: '64px',
};
const contentStyle = {
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
};

const footerStyle = {
    textAlign: 'center',
    color: '#fff',
};
const layoutStyle = {
    borderRadius: 8,
    overflow: 'hidden',
    width: 'calc(100% - 8px)',
    maxWidth: 'calc(100% - 8px)',
    height:'100vh',
};


const LoginPage = ({ }) => {
    return (
        <Layout style={layoutStyle}>
            <Header style={headerStyle}></Header>
            <Content style={contentStyle}>
                <div>
                    <img src={require('../../Logo.png')}  style={{height:50, width:250, marginBottom:'1.5vh', marginLeft:'10vw'}}/>
                </div>
                <LoginForm/>
            </Content>
            <Footer style={footerStyle}></Footer>
        </Layout>
    )
}

export default LoginPage;