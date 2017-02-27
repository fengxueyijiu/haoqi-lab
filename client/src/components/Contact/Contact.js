import React from 'react';
import cors from 'cors';
import axios from 'axios';
import {Link} from 'react-router';
class Contact extends React.Component {

  render () {

    return(

        <div className="contact-wrap">
          <div className="page-head">
            <h1>联系我们</h1>
            <p>有兴趣与我们合作，加入我们的团队，或只是想了解更多关于我们？我们很想听到你的声音。</p>
          </div>
          <nav className="subnav cf">
            <ul>
              <li className="active"><Link to="/contact">雇佣我们</Link></li>
              <li><Link to="/job">加入我们</Link></li>
            </ul>
          </nav>
          <div className="contact">
            <img src="https://haoqicat.com/images/weixin.jpeg" alt=""/>
            <div className="phone">
              <p>如果你想立即于我们交谈</p>
              <p> Peter 的电话：15010523895</p>
            </div>
          </div>

        </div>
    )
  }
}

export default Contact;
