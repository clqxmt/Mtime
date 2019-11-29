import styled from "styled-components"

export const FooterStyled=styled.div`
    background: #f6f6f6;
    border-top: 1px solid #f6f6f6;
    .link{
        background:#fff;
    }
    .table_v_c{
        height:100%;
        width: 100%;
        display:flex;
        li{
            display:flex;
            flex:1;
            justify-content:center;
        }
    }
    li{
        a{
            text-align:center;
            padding:0.14rem 0 0.135rem;
            span{
                font-size:0.14rem;
            }
        } 
    }
    a span{
        color:#0074c5;
        font-size:0.15rem;
    }

    .footlink{
        border-top:0;
        
        li.line span{
            display: inline-block;
            vertical-align: middle;
            width: 1px;
            background: #d8d8d8;
            overflow: hidden;
            height: 0.12rem;
        
        }
        a span{
            font-size: 0.12em;
            color:#333;
            /* padding: 0.165rem 0.15rem 0.16rem; */
            /* padding-top:0; */
            padding: 0.165rem 0.15rem 0.16rem;
            display: block;
            overflow: hidden;
        }
    }
    .table_vh_c{
        display:flex;
        width:100%;
        /* justify-content:space-between; */
        li{
            
            display:flex;
            justify-content:center;
            align-items:center;
        }
    }
    .copy{
        padding:0 0 0.2rem 0;
        p{
            color: #cdcdcd;
            text-align: center;
            padding-bottom: 0.05rem;
            span{
                font-size:0.11rem;
            }
            &:first-child span{
                font-size: 0;
                text-indent: -3943434px;
                background: url(//static1.mtime.cn/html5/20191122140130/images/2014/fot_logo.png) no-repeat center center;
                background-size: auto 0.2rem;
                width: 0.6rem;
                height: 0.2rem;
                display: inline-block;
                vertical-align: middle;
            }
        }
        .honest{
            font-size: 0;
            width: 0.65rem;
            height: 0.24rem;
            display: inline-block;
            vertical-align: middle;
            margin-left: 0.04rem;
            background: url(//static1.mtime.cn/html5/20191122140130/images/h_mark.jpg) no-repeat;
            background-size: cover;
        }
    }
`