import React, {Component, Dispatch} from "react";
import {Badge, Button, Col, Row, Space, Tag} from "antd";
import {ClockCircleOutlined} from "@ant-design/icons";
import {ExamState, IsAnswer, SProInfo} from "../../Redux/Reducer/exam";
import {ExamAction} from "../../Redux/Action/exam";
import {connect} from "react-redux";
import {ChoiceContent} from "../../Type/IProblem";
import {withTranslation} from "react-i18next";


class ProTag extends Component<any, any> {

    render() {
        let TagState = []
        if (this.props.TagState !== undefined) {
            TagState = this.props.TagState
        } else if (this.props.ProInfo !== undefined) {
            const NowPro = (this.props.ProInfo as SProInfo[])[this.props.ProIndex - 1]
            if (NowPro.content === undefined) {
                TagState.push("d")
            } else {
                if (IsAnswer(NowPro.content as ChoiceContent)) TagState.push("f")
                else TagState.push("d")
            }
            if (NowPro.flag) TagState.push("c")
        }

        return (
            <div>
                <Space>
                    <a className={"ProTag"}
                       onClick={this.props.ProIndex !== 0 ? (() => this.props.JumpToPro(this.props.ProIndex)) : undefined}
                    >
                        <Badge dot={TagState.indexOf("c") !== -1}>

                            <Tag
                                color={this.props.ProIndex == this.props.TopProblemIndex ? (TagState.indexOf("f") !== -1 ? "#87d068" : "#2db7f5") : (TagState.indexOf("f") !== -1 ? "green" : undefined)}>
                                {
                                    [''].map(() => {
                                        if (this.props.ProIndex !== 0) {
                                            return this.props.ProIndex
                                        } else return (<>&nbsp;&nbsp;</>)
                                    })
                                }
                            </Tag>

                        </Badge>
                    </a>
                    {
                        [''].map(() => {
                            if (this.props.ProIndex === 0) {
                                return <span style={{color: "black", marginLeft: "-10px"}}>{this.props.exp}</span>
                            }
                        })
                    }
                </Space>
            </div>
        )
    }
}


const mapStateToProps = (state: any) => {
    const State: ExamState = state.ExamReducer
    return {
        ProInfo: State.proInfo,
        TopProblemIndex: State.TopProblemIndex
    }
}

const mapDispatchToProps = (dispatch: Dispatch<ExamAction>) => ({
    JumpToPro: (ProIndex: number) => dispatch({
        type: "updateTop",
        topIndex: ProIndex
    }),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withTranslation()(ProTag))