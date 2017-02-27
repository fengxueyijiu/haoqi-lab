import React from 'react';
import img1 from '../../images/html.jpg';
import img2 from '../../images/weixin.jpg';
import img3 from '../../images/appcan.jpg';
class App extends React.Component {
  render () {
    return(
        <div className="main">
          <div className="main-box">
            <img src={ img1}alt="" />
            <div className="main-box-content">
              <h3>Web 应用开发</h3>
              <p>
                我们喜欢做网站，喜欢 Web 的开放和自由。一款强大的 Web App ，可以让您跟客户在电脑浏览器，手机浏览器或者微信浏览器内自由连接。时至今日，URL 依然是最为强大的传播手段。
              </p>
            </div>
          </div>
          <div className="main-box">
            <img src={ img2}alt="" />
            <div className="main-box-content">
              <h3>Web 应用开发</h3>
              <p>
                我们喜欢做网站，喜欢 Web 的开放和自由。一款强大的 Web App ，可以让您跟客户在电脑浏览器，手机浏览器或者微信浏览器内自由连接。时至今日，URL 依然是最为强大的传播手段。
              </p>
            </div>
          </div>
          <div className="main-box">
            <img src={ img3}alt="" />
            <div className="main-box-content">
              <h3>Web 应用开发</h3>
              <p>
                我们喜欢做网站，喜欢 Web 的开放和自由。一款强大的 Web App ，可以让您跟客户在电脑浏览器，手机浏览器或者微信浏览器内自由连接。时至今日，URL 依然是最为强大的传播手段。
              </p>
            </div>
          </div>

        </div>
    )
  }
}

export default App;
