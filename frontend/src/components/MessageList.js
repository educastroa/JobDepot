import React, { Fragment, useEffect, useState } from "react";
import { format } from 'date-fns';
import noImage from './img/no-image.png';
import { useAppContext } from '../hooks';
import { getUsers, getMessages } from "../api";
import Message from "./Message";

export default function MessageList() {
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([])


  useEffect(() => {
    getMessages()
    .then(res =>
      setMessages(res))
    .catch(error => {
      console.error(error);
    })
    getUsers()
    .then(data => {
      setUsers(data.users);
    })

  }, []);

  return (
    <div className="h-100 overflow-hidden">
      <div className="d-flex flex-column h-100">
        <div className="mx-auto w-25">
          <h2 className="text-center py-4">Find Your Messages Here </h2>
        </div>

        <div id="scrollableDiv" className="mx-auto w-100 mt-5 mb-2 overflow-auto" style={{ flex: 1, maxWidth: '1200px' }}>
          {messages.length > 0 && messages.map((message, i) => (
            <Message key={i} message={message} id={i} users={users} />
          ))}
        </div>
      </div>
    </div>
  );
}
