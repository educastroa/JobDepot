import React, { useEffect, useState } from "react";
import { getMessages } from "../api";
import Message from "./Message";

export default function MessageList() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    getMessages()
      .then((data) => setMessages(data.messages))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="h-100 overflow-hidden">
      <div className="d-flex flex-column h-100">
        <div className="mx-auto w-100">
          <h2 className="text-center py-4">Find Your Messages Here </h2>
        </div>

        <div
          id="scrollableDiv"
          className="mx-auto w-100 mt-5 mb-2 overflow-auto"
          style={{ flex: 1, maxWidth: "1200px" }}
        >
          {messages.length > 0 &&
            messages.map((message, i) => (
              <Message key={i} message={message} id={i} />
            ))}
        </div>
      </div>
    </div>
  );
}
