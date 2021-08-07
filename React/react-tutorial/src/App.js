import './App.css';
import { Component } from 'react';
import TOC from "./components/TOC"
import Content from "./components/Content"
import Subject from "./components/Subject"

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      subject:{title: "WEB", sub: "world wide web!"},
      content:{title: "HTML", desc: "HTML is HyperText Markup Language"}
    }
  } //어떤 컴포넌트가 실행될 때, render보다 먼저 실행되면서 컴포넌트를 초기화 시켜줌
  render(){
    return (
      <div className="App">
        <Subject 
          title = {this.state.subject.title} 
          sub = {this.state.subject.sub}>
        </Subject>
        <TOC/>
        <Content 
          title = {this.state.content.title} 
          desc = {this.state.content.desc}>
        </Content>
      </div>
    );
  }
}

export default App;
