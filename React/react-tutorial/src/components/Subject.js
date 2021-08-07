import { Component } from 'react';

class Subject extends Component {
    render(){
      console.log('Subject render');
      return(
        <header>
              <h1><a href="/">{this.props.title}</a></h1>
              {this.props.sub}
        </header>
      );
    }
  }

  export default Subject; //다른 js파일에서 컴포넌트로 사용하기 위해