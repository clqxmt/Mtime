import React from "react"
import {FooterStyled} from "./styled"
class Footer extends React.Component{
    render(){
        return(
            <FooterStyled>
            <nav className="link">
                <ul className="table_v_c">
                    <li>
                        <a href="#">
                            <span>首页</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span>购票</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span>商城</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span>发现</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span>我的</span>
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="footlink">
                <ul className="table_vh_c">
                    <li>
                       <a href="#">
                           <span>PC版</span>
                           {/* <span>|</span> */}
                        </a> 
                    </li>
                    <li className="line">
                        <span></span>
                    </li>
                    <li>
                       <a href="#">
                           <span>客户端下载</span>
                           {/* <span>|</span> */}
                        </a> 
                    </li>
                    <li className="line">
                        <span></span>
                    </li>
                    <li>
                       <a href="#">
                           <span>意见反馈</span>
                           {/* <span>|</span> */}
                        </a> 
                    </li>
                    <li className="line">
                        <span></span>
                    </li>
                    <li>
                       <a href="#">
                           <span>帮助中心</span>
                        </a> 
                    </li>
                    
                </ul>
            </div>
            <div className="copy">
                <p>
                    <span>北京动艺时光网络科技有限公司</span>
                    <a href="#" className="honest">诚信亮标</a>
                </p>
                <p>
                    <span>Copyright </span>
                    <span className="copytime">2006-2019</span>
                    <span> Mtime.com Inc. All rights reserved.</span>
                </p>
            </div>
        </FooterStyled>
        )
    }
}

export default Footer