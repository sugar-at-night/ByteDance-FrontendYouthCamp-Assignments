import logo from './img/logo.svg';
import bgp from './img/bgp.png'
import mobile from './img/mobile.svg'
//import logoChange from './img/logo_graphic_change.svg'
//import cardLogo from './img/home_card_logo.svg'
import './App.css';
import { Input, Menu, Row, Col, Button} from 'antd';
import { UnorderedListOutlined } from '@ant-design/icons';
import {Biglogo} from "./Biglogo.js"
//import { DatePicker } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

const { Search } = Input;
const { SubMenu } = Menu;
const img = Biglogo;

// const suffix = (
//   <AudioOutlined
//     style={{
//       fontSize: 16,
//       color: '#1890ff',
//     }}
//   />
// );
const onSearch = value => console.log(value);



function App() {
  return (
    <div className="App">
        {/* <Divider orientation="left">Horizontal</Divider> */}
        <header id ="header" className="clearfix home-header">
        <Row gutter = {24}>
            <Col className="ant_logo">
              <h1 id="logo"><img src={logo} className="App-logo" alt="logo" /> Ant Design</h1>
            </Col>
            <Col flex="1" class="ant_col">
              <span className="ant-input-prefix">
              <Search placeholder="input search text" onSearch={onSearch} />
              </span>
            </Col>
            <Col className="ant_menu">
              <Menu mode="horizontal">
                <Menu.Item>
                  设计
                </Menu.Item>
                <Menu.Item>
                  文档
                </Menu.Item>
                <Menu.Item>
                  组件
                </Menu.Item>
                <Menu.Item>
                  资源
                </Menu.Item>
                <Menu.Item>
                  国内镜像
                </Menu.Item>
                <SubMenu icon={<UnorderedListOutlined/>}>
                  <Menu.Item>
                    Github
                  </Menu.Item>
                  <Menu.Item>
                    English
                  </Menu.Item>
                  <Menu.Item>
                    RTL
                  </Menu.Item>
                </SubMenu>
              </Menu>
            </Col>
        </Row> 
      </header>
      <div className = "home-banner">
        <div className="home-bgp">
          <img src={bgp} className="App-bgp" alt="bgp" />
        </div>
      </div>
      <Biglogo/>
      {/* <div id = "home-logo">
          <img src={cardLogo} class="App-logo-big" alt="cardLogo" />
          <img src={img} id="logo-change" alt="logoChange"/>
      </div>  */}

      {/* <div class="container">
        <UnorderedListOutlined id="logo-change"/>
      </div> */}
      
        <p>企业级产品设计体系，创造高效愉悦的工作体验</p>
        <div className="banner-qr">
          <a href = "https://antd4.antfin.com/#/">
          <img src={mobile} className="App-mobile" alt="mobile" />
          4.0 正式版发布
          </a>
        </div>
        <div className="homebtn">
          <Button  id="btn" type="primary" shape="round">
            开始使用
          </Button>
          <Button  id="btn" type="secondary" shape="round">
            设计语言
          </Button>
        </div>
        
      </div>
    
    
  );
}

export default App;
