import React from 'react';

class Cases extends React.Component {
  render () {
    return(
        <div className="cases-wrap">
          <div className="case">
            <a className="cards1" href="http://www.h5eia.org"></a>
            <div className="content">
              <h2>企业级HTML5联盟</h2>
              <p>中国企业级HTML5联盟由中国最大的HTML5企业移动应用平台云适配联合多家业内企业发起,旨在推动HTML5相关技术在企业级市场的创新应用和跨越发展，促进HTML5相关技术和商业的有机结合。</p>
            </div>
          </div>
          <div className="case">
            <a className="cards2" href="https://maodou.io/"></a>
            <div className="content">
              <h2>毛豆网</h2>
              <p>毛豆网SaaS服务迅速生成应用。可为自媒体、在线教育、网红等内容创业者提供一站式云服务，涵盖技术开发、营销推广、平台运营和托管等领域。</p>
            </div>
          </div>
          <div className="case">
            <a className="cards3" href="http://gomeifang.com"></a>
            <div className="content">
              <h2>奥兰多房地产网站</h2>
              <p>作为佛罗里达州奥兰多市最大的华人房地产网站，我们放弃了原有的WordPress构架，由毛豆网负责启用了最新的全栈技术重新实现，最终的网站效果令人满意。感谢毛豆网！</p>
            </div>
          </div>
          <div className="case">
            <a className="cards4" href="http://www.oneapm.com/"></a>
            <div className="content">
              <h2>OneAPM</h2>
              <p>oneapm提供本地化部署模式和 SaaS 模式,轻松实现缓慢的程序代码和SQL 语句实时抓取.oneapm首家可以同时从系统服务层,应用层,用户体验层,业务交易层提供性能管理产品</p>
            </div>
          </div>
        </div>
    )
  }
}

export default Cases;
