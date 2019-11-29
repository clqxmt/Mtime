import React,{Fargment} from "react"
import AppLink from "@componnets/applink"
import Footer from "@components/footer"
class Layout extends React.Component{
    render(){
        return(
            <Fargment>
                <AppLink></AppLink>
                {this.props.children}
                <Footer></Footer>
            </Fargment>
        )
    }
}

export default Layout