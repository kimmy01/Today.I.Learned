import { Component } from 'react';

class Content extends Component {
    render(){
      console.log('Content render');
      return(
        <article>
              <h2>{this.props.title}</h2>
              {this.props.desc}
        </article>
      );
    }
  }

  export default Content; //다른 js파일에서 컴포넌트로 사용하기 위해