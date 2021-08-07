import './App.css';
import { Component, useDebugValue } from 'react';
import TOC from "./components/TOC"
import Content from "./components/Content"
import Subject from "./components/Subject"

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      mode: "welcome",
      subject:{title: "WEB", sub: "world wide web!"},
      welcome:{title: "Welcome", desc: "Hello, React!"},
      content:{title: "HTML", desc: "HTML is HyperText Markup Language"},
      contents:[
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'},
      ]
    }
  } //어떤 컴포넌트가 실행될 때, render보다 먼저 실행되면서 컴포넌트를 초기화 시켜줌
  render(){
    console.log('App render');
    var _title, _desc = null;
    if(this.state.mode === "welcome"){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if(this.state.mode === "read"){
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    return (
      <div className="App">
        {/* <Subject 
          title = {this.state.subject.title} 
          sub = {this.state.subject.sub}>
        </Subject> */}
        <header>
              <h1><a href="/" onClick={function(e){
                console.log(e);
                e.preventDefault();
                // this.state.mode = "welcome"; 이벤트 내에서는 this에 아무 값도 세팅되어 있지 않음
                // TypeError: Cannot read property 'state' of undefined
                this.setState({
                  mode: "welcome"
                });
              }.bind(this)}>{this.state.subject.title}</a></h1>
              {this.state.subject.sub.sub}
        </header>
        <TOC data = {this.state.contents}></TOC>
        <Content 
          title = {_title} 
          desc = {_desc}>
        </Content>
      </div>
    );
  }
}

export default App;
