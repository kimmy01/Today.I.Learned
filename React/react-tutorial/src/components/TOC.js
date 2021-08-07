import { Component } from 'react';

class TOC extends Component {
    render(){
      var lists = [];
      var data = this.props.data;
      var i = 0;
      while(i < data.length){
        lists.push(<li key={data[i].id}><a href={"/content/"+data[i].id}>{data[i].title}</a></li>);
        i = i + 1;
      }
      return(
        <nav>
              <ul>
                {lists}
              </ul>
        </nav>
      );
    }
  }

  export default TOC; //다른 js파일에서 컴포넌트로 사용하기 위해