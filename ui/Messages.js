import React from "react";

export default function Messages({ messages }) {
  if (!messages || messages.length < 1) {
    return (
      <div className="card">
        <p>
          you have no secret messages from friends yet, share your link with
          friends to hear what your friends have in mind
        </p>
      </div>
    );
  }

  return (
    <div className="card">
      <ul className="messages">
        {messages.map((message) => {
          const msg = message.message.replace(/\n/g, "<br/>");
          return (
            <li key={message.date}>
              <p
                style={{ fontSize: "0.8rem" }}
                dangerouslySetInnerHTML={{
                  __html: msg,
                }}
              ></p>
              <p
                style={{
                  fontStyle: "italic",
                  fontSize: "0.5rem",
                  color: "black",
                }}
              >
                {` - ${new Date(message.date)}`}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
