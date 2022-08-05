import React, { Component } from "react";
import axios from "axios";
import "antd/dist/antd.css";
import { Input, Button ,message} from "antd";
import "./index.scss";

export default class index extends Component {
  state = {
    name: "",
    age: "",
    needTxt: "",
    needAge: "",
  };

  getMes = () => {
    axios.get("http://localhost:80/api/get").then((res) => {
      this.setState({
        name: res.data.data[0].name,
        age: res.data.data[0].age,
      });
    });
  };

  changeName = (e) => {
    const needText = e.currentTarget.value;
    this.setState({
      needTxt: needText,
    });
  };

  changeAge = (e) => {
    const needText = e.currentTarget.value;
    this.setState({
      needAge: needText,
    });
  };

  postMsg = () => {
    const n = this.state.needTxt;
    const a = this.state.needAge;
    axios
      .post("http://localhost:80/api/post", { username: n, password: a })
      .then((res) => {
        debugger
        if(res.data.status === 0){

          this.props.history.push(`/news`)
        }
        else {
          message.error(res.data.msg)
        }
      });
  };

  login = () => {
    // this.props.history.push(`/news`)
  };

  render() {
    return (
      <div>
        <div className="boxes">
          <div className="container1">
            <div className="header">💴</div>
            <div className="header">我的钱去哪了</div>
            <div className="littleHeader">完成冤种金钱交付记录框架</div>
            <div className="title"></div>
          </div>
          <div className="container2">
            <div className="login">欢迎登录</div>
            {/* </> */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "12%",
                marginLeft: "20%",
              }}
            >
              <div>
                用户名：
                <Input
                  style={{ width: "50%" }}
                  onChange={(e) => this.changeName(e)}
                />
              </div>
              <div style={{ marginTop: "5%", marginLeft: "3%" }}>
                密码：
                <Input
                  style={{ width: "52%" }}
                  onChange={(e) => this.changeAge(e)}
                />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: "12%",
                marginLeft: "23%",
              }}
            >
              <div>
                <Button className="btn" onClick={this.postMsg}>
                  登录
                </Button>
              </div>
              <div style={{ marginLeft: "27%" }}>
                <Button style={{ width: "140%" }}>注册</Button>
              </div>
            </div>
            <div className="title"></div>
          </div>
        </div>
      </div>
    );
  }
}
