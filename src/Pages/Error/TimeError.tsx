import {Button, Result} from "antd";
import {TimeDiff, unix2Time} from "../../Utils/Time";
import {useEffect, useState} from "react";
import {withRouter} from "react-router-dom";
import {UrlPrefix} from "../../Config/constValue";
import cApi from "Utils/API/c-api";
import {homeURL,routerC_M} from "../../Config/router/routerC";

const TimeError = (props: any) => {

    const [sysTime, setSysTime] = useState<number>(Date.now())
    const [serTime, setSerTime] = useState<number>(Date.now())

    const add = () => {
        setSysTime(sysTime + 1000)
        setSerTime(serTime + 1000)
    }

    useEffect(() => {
        let id = setInterval(() => add(), 1000)
        return () => clearInterval(id)
    })

    const update = ()=>{
        setSerTime(parseInt(localStorage.getItem("server-time") ?? "0"))
        setSysTime(Date.now())
    }

    useEffect(() => {
        update()
    }, [])

    return (
        <div className={"page-center"}>
            {
                [''].map(() => {
                    if (Math.abs(sysTime - serTime) < 60000) {
                        return (
                            <Result
                                status="success"
                                title="您的系统时间与服务器时间误差在容许范围之内。"
                                subTitle={
                                    <>
                                        <span>系统时间：{unix2Time(sysTime)}</span> <br/>
                                        <span>服务器时间：{unix2Time(serTime)}</span> <br/>
                                        <span>时间相差：{TimeDiff(Math.min(sysTime, serTime), Math.max(sysTime, serTime))}</span>
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
                        )
                    } else {
                        return (
                            <Result
                                status="warning"
                                title={"您的系统时间有误，这会影响 PKU-OSLAB OJ 系统的工作，请您更正当前系统时间。"/*HRZ:修改名字*/}
                                subTitle={
                                    <>
                                        <span>系统时间：{unix2Time(sysTime)}</span> <br/>
                                        <span>服务器时间：{unix2Time(serTime)}</span> <br/>
                                        <span>时间相差：{TimeDiff(Math.min(sysTime, serTime), Math.max(sysTime, serTime))}</span>
                                    </>
                                }
                                extra={
                                    <Button
                                        type="primary"
                                        key="retry"
                                        onClick={() => {
                                            cApi.getCopyright().then(()=>{
                                                update()
                                            })
                                        }}
                                    >
                                        点击重试
                                    </Button>
                                }
                            />
                        )
                    }
                })
            }
        </div>
    )
}

export default withRouter(TimeError)
