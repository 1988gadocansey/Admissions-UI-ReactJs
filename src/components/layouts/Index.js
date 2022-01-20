import React, {useState} from "react";
import { Layout, Menu, Breadcrumb } from 'antd';
import Copyright from "./Copyright";
import NavBar from "./NavBar";
import 'antd/dist/antd.css';
import './layout.css';
import { Col, Row, Typography, Button } from 'antd';
import PoweroffOutlined from '@ant-design/icons/lib/icons/PoweroffOutlined'
import AppLogo from "./AppLogo";
import Breadcrumbs from "./Breadcrumbs";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const { Text } = Typography
const handleLogout = () => {
 return alert("logout....")
}
export class Index  extends React.Component {
    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    render() {
        const { collapsed } = this.state;
        return (


            <Layout style={{ minHeight: '100vh' }}>

                 <NavBar/>
                <Layout className="site-layout" >

                    <Header className="site-layout-background" style={{ padding: 0 }} >
                        <Row justify="space-around" align="middle">
                            <Col className={'mobileHidden'} span={17} xs={10} sm={18}>
                                {/* <Text level={5} style={{ textTransform: 'uppercase' }}>Voting</Text> */}
                            </Col>
                            <Col span={6} xs={24} sm={6}>
                                <div align={'right'} >
                                    <Button   title={'Logout'} onClick={() => handleLogout()} icon={<PoweroffOutlined size={'small'}/>} type={'default'}/>
                                </div>
                            </Col>
                        </Row>
                    </Header>
                    <Content  className="site-layout" style={{ marginTop: 64 }}>
                         <Breadcrumbs/>
                        <div className="site-layout-background"  style={{ padding: 24, minHeight: 360 }}>
                            {this.props.children}
                        </div>

                    </Content>
                     <Copyright/>
                </Layout>
            </Layout>
        );
    }
}


export default Index
