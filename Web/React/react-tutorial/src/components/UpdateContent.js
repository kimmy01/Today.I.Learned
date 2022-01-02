import { Component } from 'react';

class UpdateContent extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: this.props.data.id,
            title: this.props.data.title,
            desc: this.props.data.desc
        }
        this.inputFormHandler = this.inputFormHandler.bind(this);
    }
    inputFormHandler(e){
        this.setState({[e.target.name]:e.target.value})
    }
    render(){
      console.log('UpdateContent render');
      console.log(this.props.data);
      return(
        <article>
              <h2>Update</h2>
              <form action="/create_process" method="post"
                onSubmit={function(e){
                  e.preventDefault();
                  this.props.onSubmit(
                    this.state.id,
                    this.state.title, //폼에서 작성한 값 가져오기
                    this.state.desc
                  );
                }.bind(this)}>
                <input type="hidden" name="id" value={this.state.id}></input>
                <p>
                    <input 
                        type="text" 
                        name="title" 
                        placeholder="title"
                        value={this.state.title}
                        onChange={this.inputFormHandler} // 값 바꿔주기
                    ></input>
                  </p>
                <p><textarea 
                        name="desc" 
                        placeholder="description" 
                        value={this.state.desc}
                        onChange={this.inputFormHandler}
                    >
                    </textarea></p>
                <p><input type="submit"></input></p>
              </form>
        </article>
      );
    }
  }

  export default UpdateContent; //다른 js파일에서 컴포넌트로 사용하기 위해