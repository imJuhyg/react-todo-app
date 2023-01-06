import React, {Component} from "react"; // "react"라이브러리에서 React와 Component 클래스를 가져온다.
import "./App.css";

export default class App extends Component {

  state = {
    todoData : [ // JSON 형식처럼
      {
        id : "1",
        title : "공부하기",
        completed : true
      },
      {
        id : "2",
        title : "청소하기",
        completed : false
      }
    ],
    value : ""
  };

  btnStyle = { // 스타일(정적으로 지정하여 사용 가능)
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right"
  }
  
  getStyle = () => { // 스타일 함수(동적으로 사용 가능)
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: "none"
    }
  }

  handleClick = (id) => {
    // 삭제버튼 누른 요소를 제외한 나머지 제외
    let newTodoData = this.state.todoData.filter(data => data.id !== id)

    this.setState({todoData : newTodoData}); // 데이터 변경
  };

  handleChange = (e) => {
    this.setState({ value : e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault(); // 원래 submit은 페이지가 리로드된다. 이 것을 막아준다.

    // 새로운 할 일 데이터
    let newTodo = {
      id: Date.now(),
      title: this.state.value,
      completed: false
    };

    // todoData에 새로운 할 일 추가하기
    this.setState({ todoData: [...this.state.todoData, newTodo] });
    // input에 있던 value 삭제
    this.setState({ value : ""} );
  };

  render() { // render(): Component의 함수
    return(
      <div className="container">
        <div className="todoBlock">
          <div class="title">
            <h1>할 일 목록</h1>
          </div>

          {this.state.todoData.map((data) => (
            <div style={this.getStyle()} key={data.id}>
            <input type="checkbox" defaultChecked={false} />
              {data.title}
            <button style={this.btnStyle} onClick={() => this.handleClick(data.id)}>x</button>
          </div>
          ))}
          
          <form style={{display: 'flex'}} onSubmit={ this.handleSubmit }>
            <input 
              type="text" 
              name="value" 
              style={{ flex : '10', padding : '5px' }} 
              placeholder="해야할 일 을 입력하세요."
              value={ this.state.value }
              onChange={this.handleChange}
            />

            <input
              type="submit"
              value="입력"
              className="btn"
              style={{ flex : '1' }}
            />
          </form>

        </div>
      </div>
    );
  }
}