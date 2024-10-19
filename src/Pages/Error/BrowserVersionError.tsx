import {Button, Result} from "antd";
import {withRouter} from "react-router-dom";
import {UrlPrefix} from "../../Config/constValue";
import {homeURL, routerC_M} from "../../Config/router/routerC";

const BrowserVersionError = (props: any) => {
    return (
        <div className={"page-center"}>
            <Result
                status="error"
                title="您使用的浏览器版本过低，请点击下方链接安装新版浏览器。"
                subTitle={
                    <>
                        <span><a href={"https://www.microsoft.com/zh-cn/edge"}>Microsoft Edge (85+)</a></span> <br/>
                        <span><a href={"https://www.google.cn/intl/zh-CN/chrome/"}>Google Chrome (85+)</a></span> <br/>
                        <span><a href={"https://www.firefox.com.cn/"}>Mozilla Firefox (79+)</a></span> <br/>
                        <span><a href={"https://www.apple.com.cn/safari/"}>Apple Safari (13.4+)</a></span>
                    </>
                }
                extra={
                    <Button
                        type="primary"
                        key="return"
                        onClick={() => {
                            props.history.replace(homeURL(routerC_M))
                        }}
                    >
                        返回主页
                    </Button>
                }
            />
        </div>
    )
}

export default withRouter(BrowserVersionError)
