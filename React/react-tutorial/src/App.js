import './App.css';
import { Component } from 'react';
import TOC from "./components/TOC"
import ReadContent from "./components/ReadContent"
import Subject from "./components/Subject"
import Control from "./components/Control"
import CreateContent from "./components/CreateContent"

class App extends Component {
  constructor(props){
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode: "create",
      selected_content_id: 2,
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
    var _title, _desc, _article = null;
    if(this.state.mode === "welcome"){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    } else if(this.state.mode === "read"){
      var i = 0;
      while(i < this.state.contents.length){
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id){
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i = i + 1;
      }
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    } else if(this.state.mode === "create"){
      _article = <CreateContent onSubmit={function(_title, _desc){
        //add content to this.state.contents
        console.log(_title, _desc);
        this.max_content_id = this.max_content_id+1;
        // this.state.contents.push({ //이 방법은 오리지널 배열을 변경해버림
        //   id: this.max_content_id,
        //   title: _title,
        //   desc: _desc
        // }); //이것만 해주면 리액트가 모르니까
        var _contents = this.state.contents.concat({
          id: this.max_content_id,
          title: _title,
          desc: _desc
        });
        this.setState({
          // contents: this.state.contents
          contents: _contents
        }); //이렇게 리액트에게 알려주기!
      }.bind(this)}></CreateContent>
    }
    return (
      <div className="App">
        <Subject 
          title = {this.state.subject.title} 
          sub = {this.state.subject.sub}
          onChangePage = {function(){
            this.setState({mode:'welcome'});
          }.bind(this)}  
        >
        </Subject>
        <TOC onChangePage = {function(id){
          this.setState({
            mode:"read",
            selected_content_id: Number(id)
          });
        }.bind(this)}
          data = {this.state.contents}></TOC>
        <Control onChangeMode={function(_mode){
          this.setState({
            mode: _mode
          })
        }.bind(this)}/>
        {_article}
      </div>
    );
  }
}

export default App;
