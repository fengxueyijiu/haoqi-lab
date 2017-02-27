import React from 'react';
import img1 from '../images/log.png';
import {Link} from 'react-router';
class App extends React.Component {
  render () {
    return(
      <div>
        <div className="appHeader">
          <img src={img1} alt=""/>
          <h1>好奇猫工作室</h1>
        </div>
        <div className="header">
          <div className="headerInner">
            <div className="headerLogo">
              <img src={img1} alt=""/>
            </div>
            <div className="headerContent">
              <h1 className="headerTitle">好奇猫工作室</h1>
              <p className="headerInt">好奇猫用 Html5 技术，让您在全平台最高效的连接您的客户</p>
            </div>
          </div>
        </div>
        <div className="headerNavWrap">
          <div className="headerNavInner">
            <div>
              <ul>
                <li><Link to="/">首　页</Link></li>
                <li><Link to="/cases">案　例</Link></li>
                <li><Link to="/team">团　队</Link></li>
                <li><Link to="/contact">联　系</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default App;
