import React, { useState, useEffect } from 'react';
import './Mensagens.css';

function Mensagem() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    const user = localStorage.getItem('user');
    const token = JSON.parse(user).Token;

    try {
      await fetch('http://localhost:4003/history', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token })
      }).then(response => {
        if (!response.ok) {
          throw new Error('There was an error');
        }
        return response.json();
      }).then(responsedata => {
        setHistory(responsedata);
      })
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="container">
      <h1 className="title">Messaging - asynchronous exchange of messages</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Type</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {history.map((item, index) => (
            <tr key={index}>
              <td>{item.type}</td>
              <td>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Mensagem;
