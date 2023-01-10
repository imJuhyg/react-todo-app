// import React, {Component} from "react"; // "react"라이브러리에서 React와 Component 클래스를 가져온다.
import React, { useState } from 'react';
import "./App.css";
import List from './components/List';

export default function App() {
  // state = {
  //   todoData : [],
  //   value : ""
  // };
  const [todoData, setTodoData] = useState([
    {
      id: "1",
      title: "공부하기",
      completed: true
    },
    {
      id: "2",
      title: "청소하기",
      completed: false
    }
  ]); // todoData state 정의
  const [value, setValue] = useState(""); // value state 정의

  const handleChange = (e) => {
    // this.setState({ value : e.target.value });
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // 원래 submit은 페이지가 리로드된다. 이 것을 막아준다.

    // 새로운 할 일 데이터
    let newTodo = {
      id: Date.now(),
      // title: this.state.value,
      title: value,
      completed: false
    };

    // todoData에 새로운 할 일 추가하기
    // this.setState({ todoData: [...todoData, newTodo] });
    setTodoData(prev => [...prev, newTodo]); // setter에서 이전 state를 가져오기 위해서는 인수에 함수를 이용해서 가져올 수 있다.
    // input에 있던 value 삭제
    // this.setState({ value : ""} );
    setValue("");
  };

  // functional component는 render()가 필요없음
  // 함수를 정의할 때 const를 붙여주고 사용하는 부분에서 this. 을 더이상 붙일 필요 없음
  return (
    <div className="container">
      <div className="todoBlock">
        <div class="title">
          <h1>할 일 목록</h1>
        </div>

        <List todoData={ todoData } setTodoData={ setTodoData }/>

        <form style={{ display: 'flex' }} onSubmit={handleSubmit}>
          <input
            type="text"
            name="value"
            style={{ flex: '10', padding: '5px' }}
            placeholder="해야할 일 을 입력하세요."
            value={value}
            onChange={handleChange}
          />

          <input
            type="submit"
            value="입력"
            className="btn"
            style={{ flex: '1' }}
          />
        </form>

      </div>
    </div>
  );
}