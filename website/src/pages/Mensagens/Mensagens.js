import React, { useState, useEffect } from 'react';
import './Mensagens.css';

function Mensagem() {
  const [history, setHistory] = useState(null);

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
        if (response.status === 401) {
          localStorage.removeItem('user');
          window.location.pathname = '/';
        }
        else if (!response.ok) {
          throw new Error('There was an error');
        }
        return response.json();
      }).then(responsedata => {
        if (responsedata.length > 0) setHistory(responsedata);
      })
    } catch (error) {
      console.log(error.message);
    }
  };
  if (history == null) return (
    <div className="container">
    <h1 className="title">History of user operations</h1>
    <h3>No activity found!</h3>
  </div>
  );
  else return (
    <div className="container">
      <h1 className="title">History of user operations</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Type</th>
            <th>Date</th>
            <th>User</th>
          </tr>
        </thead>
        <tbody>
          {history.map((item, index) => (
            <tr key={index}>
              <td>{item.type}</td>
              <td>{item.date}</td>
              <td>{item.firstName + " " + item.lastName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Mensagem;
