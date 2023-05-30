import React from 'react';
import './Mensagens.css';

const tabelaDados = [
  { date: 112, message: "sdafsdafsdafasdfsda" },
  { date: 2321321, message: "asfsdafsdasdafsadf" },
  { date: 321321, message: "asdfsdafdfadfds" },
  { date: 213214, message: "asdfafasfasdfsdafs" },
];

const App = () => {
  return (
    <div className="container">
      <h1 className="title">Messaging - asynchronous exchange of messages</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {tabelaDados.map((item) => (
            <tr key={item.id}>
              <td>{item.date}</td>
              <td>{item.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;