import React from 'react'
import defaultDataset from "./dataset"
import './assets/styles/style.css'
import {AnswersList, Answer} from "./components/index"

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      answer: [],
      chats: [],
      currentId: "init",
      detaset: {},
      open: false
    }
  }
  render() {
    return (
      <section className="c-section">
        <div className="c-box">
          {/* <Chats /> */}
          <AnswersList />

        </div>
      </section>
    );
  }
}
