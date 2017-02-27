import React from 'react';
import {Link} from 'react-router';
class App extends React.Component {
  render () {
    return(
      <div className='appF'>
        <div className="appFooter">
          <Link to="/">首　页</Link>
          <Link to="/cases">案　例</Link>
          <Link to="/team">团　队</Link>
          <Link to="/contact">联　系</Link>
        </div>
        <div className="footer">
          <div className="footerInner">
            <p>联系电话：15010523895</p>
            <p>微信：happypeter1983</p>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
