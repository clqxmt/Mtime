import React,{Fragment} from "react"
import {Route} from "react-router-dom"


export default (routes)=>{

    function isLogin(route){
        if(route.path!=="/login" && route.meta.requireAuth){
            if(Cookies.get("token")){
                if(route.meta.flag){
                    return (
                        <Layout>
                            <route.component/>
                        </Layout>
                    )
                }else{
                    return <route.component/>
                }
            }else{
                return <Redirect to={{pathname:"/login",params:{from:route.path}}} />
            }
        }else{
            if(route.meta.flag){
                return (
                    <Layout>
                        <route.component/>
                    </Layout>
                )
            }else{
                return <route.component/>
            }
        }
    }

    function childrenMap(childNodes){
        return <Route path={childNodes.path} render={()=>{
            return (
                <Fragment>
                    <Route component={childNodes.component} />
                    <Switch>
                        {
                            childNodes.children.map((child,index)=>{
                                if(child.children){
                                    return childrenMap(child);
                                }else{
                                    return <Route path={child.path} render={()=>{
                                        return isLogin(child);
                                    }} />
                                }
                            })
                        }
                    </Switch>
                </Fragment>
            )
        }} />
    }

    return routes.map((item)=>{
        if(item.children){
            return childrenMap(item);
        }else{
            return <Route path={item.path}  key={item.path} render={()=>{
                return isLogin(item);
            }} />
        }
    })
}