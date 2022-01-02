import { Component } from 'react';

class CreateContent extends Component {
    render(){
      console.log('CreateContent render');
      return(
        <article>
              <h2>Create</h2>
              <form action="/create_process" method="post"
                onSubmit={function(e){
                  e.preventDefault();
                  this.props.onSubmit(
                    e.target.title.value, //폼에서 작성한 값 가져오기
                    e.target.desc.value
                  );
                }.bind(this)}>
                <p><input type="text" name="title" 
                  placeholder="title"></input></p>
                <p><textarea name="desc" placeholder="description"></textarea></p>
                <p><input type="submit"></input></p>
              </form>
        </article>
      );
    }
  }

  export default CreateContent; //다른 js파일에서 컴포넌트로 사용하기 위해