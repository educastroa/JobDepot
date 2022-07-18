import React, { Fragment, useEffect, useState } from "react";
import { format } from "date-fns";
import noImage from "./img/no-image.png";
import { useAppContext } from "../hooks";
import { getMessages } from "../api";
import MessagesList from "./MessagesList";

export default function Messages() {
  const [src, setSrc] = useState("");
  const [messages, setMessages] = useState([]);

  const handleError = () => {
    setSrc(noImage);
  };

  const fetchMessages = () => {
    getMessages()
      .then((data) => {
        setMessages(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div className="h-100 overflow-hidden">
      <div className="d-flex flex-column h-100">
        <div className="mx-auto w-25">
          <h2 className="text-center py-4">Find Your Messages Here </h2>
        </div>

        <div
          id="scrollableDiv"
          className="mx-auto w-100 mt-5 mb-2 overflow-auto"
          style={{ flex: 1, maxWidth: "1200px" }}
        >
          {messages.map(
            (message, i) =>
              message != null && (
                <MessagesList key={i} message={message} id={i} />
              )
          )}
        </div>
      </div>
    </div>
  );
}
