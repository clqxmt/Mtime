import styled from "styled-components"
export const AppLinkStyled = styled.div`
    width:100%;
    height:0.5rem;
    background-color:#1e2837;
    display: -webkit-box;
    -webkit-box-align: center;
    position: relative;
    padding: 0;
    /* // background: #f6f6f6; */
    .mclose{
        position: absolute;
        top: 0;
        left: 0;
        a{
            width: 0.25rem;
            height: 0.5rem;
            display: -webkit-box;
            -webkit-box-align: center;
            -webkit-box-pack: center;
            background: url(//static1.mtime.cn/html5/20191122140130/images/2014/i_close_control.png) no-repeat center center;
            background-size: 1.6em auto;
            
            display: block;
            text-indent: -9919px;
            z-index: 5;
            
        }
        em{
            color: #999;
            font-size: 1.6em;
        }
    }
    .header{
        flex:1;
        display:flex;
        /* height:100%; */
        width:100%;
        position:absolute;
        border-bottom:1px solid #999;
        a{
            display: -webkit-box;
            -webkit-box-align: center;
            padding-left: 0.3rem;
            -webkit-box-pack: center;
            width: 100%;
            .mlogo{
                background: url(//static1.mtime.cn/html5/20191122140130/images/2014/share07.png) no-repeat center center;
                background-size: 0.35rem auto;
                width: 0.4rem;
                height: 0.5rem;
                margin-top: 0;
                border-radius: 0.1em;
                margin-right: 0.07rem;
                overflow: hidden;
            }
            .header-dl{
                /* // width: 0.18rem; */
                width:2.35rem;
                position: relative;
                flex:1;
                flex-direction: column;
                display:flex;
                
                .dlt-logo{
                    em{
                        color: #008ce3;
                        font-size: 0.15rem;
                        line-height: 0.15rem;
                    }
                }
                .dlt-detail{
                    em{
                        line-height: 0.15rem;
                    font-size: 0.11rem;
                    color: #a9dcff;
                    }
                    span{
                        background-color: #0087dc;
                        width: 0.65rem;
                        height: 0.25rem;
                        color: #fff;
                        border: 1px solid #0075c4;
                        right: 0.1rem; 
                        font-size: 0.11rem;
                        border-radius: 0.15rem;
                        /* display: inline-block; */
                        text-align: center;
                        line-height: 0.25rem;
                        float: right;
                        position: absolute;
                        top: 50%;
                        font-weight: bold;
                        transform: translatey(-50%);
                        z-index:10;
                    }
                    
                }
            }
        }
    }
    
`

// export const Footer=styled.div`
//     background: #f6f6f6;
//     border-top: 1px solid #f6f6f6;
//     .link{
//         background:#fff;
//     }
//     .table_v_c{
//         height:100%;
//         width: 100%;
//         display:flex;
//         li{
//             display:flex;
//             flex:1;
//             justify-content:center;
//         }
//     }
//     li{
//         a{
//             text-align:center;
//             padding:0.14rem 0 0.135rem;
//             span{
//                 font-size:0.14rem;
//             }
//         } 
//     }
//     a span{
//         color:#0074c5;
//         font-size:0.15rem;
//     }

//     .footlink{
//         border-top:0;
        
//         li.line span{
//             display: inline-block;
//             vertical-align: middle;
//             width: 1px;
//             background: #d8d8d8;
//             overflow: hidden;
//             height: 0.12rem;
        
//         }
//         a span{
//             font-size: 0.12em;
//             color:#333;
           
//             padding: 0.165rem 0.15rem 0.16rem;
//             display: block;
//             overflow: hidden;
//         }
//     }
//     .table_vh_c{
//         display:flex;
//         width:100%;
        
//         li{
            
//             display:flex;
//             justify-content:center;
//             align-items:center;
//         }
//     }
//     .copy{
//         padding:0 0 0.2rem 0;
//         p{
//             color: #cdcdcd;
//             text-align: center;
//             padding-bottom: 0.05rem;
//             span{
//                 font-size:0.11rem;
//             }
//             &:first-child span{
//                 font-size: 0;
//                 text-indent: -3943434px;
//                 background: url(//static1.mtime.cn/html5/20191122140130/images/2014/fot_logo.png) no-repeat center center;
//                 background-size: auto 0.2rem;
//                 width: 0.6rem;
//                 height: 0.2rem;
//                 display: inline-block;
//                 vertical-align: middle;
//             }
//         }
//         .honest{
//             font-size: 0;
//             width: 0.65rem;
//             height: 0.24rem;
//             display: inline-block;
//             vertical-align: middle;
//             margin-left: 0.04rem;
//             background: url(//static1.mtime.cn/html5/20191122140130/images/h_mark.jpg) no-repeat;
//             background-size: cover;
//         }
//     }
// `