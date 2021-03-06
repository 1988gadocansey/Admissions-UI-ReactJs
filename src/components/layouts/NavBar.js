import React, {useState} from "react";
import {Layout, Menu, Breadcrumb} from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,

} from '@ant-design/icons';
import {isMobile} from 'react-device-detect'
import {Image, Button, Typography} from 'antd'
import Avatar from 'antd/es/avatar/avatar'
import Title from "antd/es/typography/Title";
import PoweroffOutlined from '@ant-design/icons/lib/icons/PoweroffOutlined'
import {Link} from "react-router-dom";

const handleLogout = () => {
    return alert("logout....")
}


const NavBar = () => {
    const {Sider} = Layout;
    const {SubMenu} = Menu;


    const [open, setOpen] = useState(true)

    const toggle = () => {
        setOpen(!open)
    }
    return (

        <Sider className={'sideBar'} collapsible collapsed={open} onCollapse={toggle}
               breakpoint="lg" collapsedWidth={isMobile ? 0 : 80}>
            {/* <Sider className={'sideBar'} collapsible collapsed={open} onCollapse={toggle}
                   breakpoint="lg" collapsedWidth={isMobile ? 0 : 80}
                   style={isMobile ? {height: '100vh', zIndex: 1, position: 'fixed', left: 0} : {
                       height: '100vh',
                       left: 0,
                       position: 'fixed',
                       backgroundColor: '#152b86',
                       color: '#fff'
                   }}
            >*/}

            <div className="logo"/>
            <div align={'center'} style={{marginTop: 20, marginBottom: 10}}>
                <Avatar size={40} style={{backgroundColor: '#2900ff'}}>
                    GO
                </Avatar>

                <div className={`sideProfile ${open === true ? 'hideProfile' : ''}`}>
                    <Title level={5} className={'sideProfileText'}>Gad Ocansey</Title>
                </div>
            </div>

            <Menu className={'sideBarNav'} theme="dark" defaultSelectedKeys={['1']} mode="inline">
                <p></p>


                <Menu.Item key="1" icon={<FileOutlined/>}>
                    <Link to={'/home'}>
                        Home
                    </Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<FileOutlined/>}>
                    <Link to={'/form/fill'}>
                        Form
                    </Link>
                </Menu.Item>

                <Menu.Item key="3" icon={<PoweroffOutlined/>}>
                    <Link to={'/home'}>
                        Logout
                    </Link>
                </Menu.Item>


            </Menu>
        </Sider>
    )


}
export default NavBar
