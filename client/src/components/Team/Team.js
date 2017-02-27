import React from 'react';

import billie from "../../images/billie.png";
import strom from "../../images/strom.jpg";
import daze from "../../images/daze.png";
class Team extends React.Component {
  render () {
    return(
        <div className="team">
          <div className="team-box">
            <div className="team-img-color">
              <img src="https://avatars1.githubusercontent.com/u/72467?v=3&s=460" alt=""/>
              <div>
                <h3>happypeter</h3>
                <a href="https://happypeter.github.io/"><p className="team-github">happypeter.github.io</p></a>
              </div>
            </div>
            <p className="team-content">
              工作室 CTO ，十年开发经验，负责项目架构
            </p>
          </div>
          <div className="team-box">
            <div className="team-img-color">
              <img src={billie} alt=""/>
              <div>
                <h3>billie</h3>
                <a href="https://billie66.github.io/"><p className="team-github">billie66.github.io</p></a>
              </div>
            </div>
            <p className="team-content">
              JS 全栈开发者，8年开发经验，负责功能实现。
            </p>
          </div>
          <div className="team-box">
            <div className="team-img-color">
              <img src={strom} alt=""/>
              <div>
                <h3>strom</h3>
                <a href="https://fengxueyijiu.github.io/"><p className="team-github">fengxueyijiu.github.io</p></a>
              </div>
            </div>
            <p className="team-content">
              后端开发者，负责 API 实现，数据库管理，项目部署，项目运维。
            </p>
          </div>
          <div className="team-box">
            <div className="team-img-color">
              <img src="https://avatars1.githubusercontent.com/u/72467?v=3&s=460" alt=""/>
              <div>
                <h3>jugg</h3>
                <a href="https://jugghardlife.github.io/"><p className="team-github">jugghardlife.github.io</p></a>
              </div>
            </div>
            <p className="team-content">
               JS 全栈开发者，负责代码开发，功能实现。
            </p>
          </div>
          <div className="team-box">
            <div className="team-img-color">
              <img src="https://avatars1.githubusercontent.com/u/72467?v=3&s=460" alt=""/>
              <div>
                <h3>youngjingwen</h3>
                <a href="https://youngjingwen.github.io"><p className="team-github">youngjingwen.github.io</p></a>
              </div>
            </div>
            <p className="team-content">
               JS 全栈开发者，负责代码开发，功能实现。
            </p>
          </div>
          <div className="team-box">
            <div className="team-img-color">
              <img src={daze} alt=""/>
              <div>
                <h3>happyze</h3>
                <a href="https://happyze.github.io/"><p className="team-github">youngjingwen.github.io</p></a>
              </div>
            </div>
            <p className="team-content">
               前端开发者，设计师，负责产品颜值。
            </p>
          </div>
        </div>
    )
  }
}

export default Team;
