import { Component } from 'react';

class Subject extends Component {
    render(){
      return(
        <header>
              <h1>{this.props.title}</h1>
              {this.props.sub}
        </header>
      );
    }
  }

  export default Subject; //다른 js파일에서 컴포넌트로 사용하기 위해