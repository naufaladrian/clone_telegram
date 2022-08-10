import "./App.css";
import React, { Component } from "react";

class App extends Component {
  constructor(param) {
    super(param);
    this.state = {
      active: null,
      selectContact: {
        username: "",
        lastactive: "",
      },
      chat: [
        {
          message: "Pagi mas naufal",
          time: "10:00",
          type: 1,
        },
        {
          message: "Ok",
          time: "10:01",
          type: 0,
        },
      ],
      datauser: [
        {
          username: "bebas",
          lastmassage: "Lorem ipsum dolor sit qwerewewweweeeeeeeeeeeeeeeeee",
          lastactive: " 30 minutes ago",
        },
        {
          username: "bebas 2",
          lastmassage: "Lorem ipsum dolor sit",
          lastactive: " 30 minutes ago",
        },
      ],
    };
  }
  onSelect(idx, username, lastactive) {
    this.setState({
      ...this.state,
      selectContact: { username, lastactive },
      active: idx,
    });
  }
  sendMessage = (e) => {
    if (e.code !== "Enter") return;
    if (!e.target.value) return;

    this.setState({
      ...this.state,
      chat: this.state.chat.concat({
        message: e.target.value,
        time: `${new Date().getHours()}:${new Date().getMinutes()}`,
        type: 0,
      }),
    });
  };
  render() {
    return (
      <div className="container">
        <div className="side-bar">
          <div className="menu side-content">
            <div className="first-side">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-list"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
              <input type="search" placeholder="Search" />
              <h3>Telegram</h3>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </div>
          {this.state.datauser.map((e, i) => (
            <div
              className="contact side-content"
              style={
                this.state.active === i
                  ? { backgroundColor: "#4da6ff", color: "white" }
                  : {}
              }
              key={i}
              onClick={() => this.onSelect(i, e.username, e.lastactive)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-person-circle"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path
                  fillRule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                />
              </svg>
              <div className="contact-text">
                <h4 className="contact-name">{e.username}</h4>
                <p className="last-message">{e.lastmassage}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="main">
          {this.state.active === null ? (
            ""
          ) : (
            <>
              <div className="top-bar">
                <div className="contact-info">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="bi bi-person-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path
                      fillRule="evenodd"
                      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                    />
                  </svg>
                  <div className="contact-info-text">
                    <h4 className="contact-name">
                      {this.state.selectContact.username}
                    </h4>
                    <p>last seen {this.state.selectContact.lastactive}</p>
                  </div>
                </div>
                <div className="chat-feature">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-search"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-three-dots-vertical"
                    viewBox="0 0 16 16"
                  >
                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                  </svg>
                </div>
              </div>
              <div className="chat">
                <div className="chat-result">
                  <div className="chat-result-ct">
                    {this.state.chat.map((e, i) => (
                      <div
                        className={e.type === 1 ? "chat-in" : "chat-out"}
                        key={i}
                      >
                        <p>{e.message}</p>
                        <p className="time">{e.time}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="chat-input">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="bi bi-emoji-smile"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Type here"
                    onKeyDown={this.sendMessage}
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    fill="currentColor"
                    className="bi bi-paperclip"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z" />
                  </svg>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    );
  }
}
export default App;
