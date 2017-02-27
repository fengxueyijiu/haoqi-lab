import React from 'react';
import cors from 'cors';
import axios from 'axios';
import {Link} from 'react-router';
class Job extends React.Component {

  render () {

    return(
      <div>
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
          <div className="article">
            <h1>成为开发者</h1>
            <p>融入一个充满创意的氛围，无论你是设计师还是开发者，够牛你就来！</p>
          </div>

        </div>
      </div>
    )
  }
}

export default Job;
