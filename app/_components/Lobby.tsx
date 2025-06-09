'use client'

import mysql from 'mysql2/promise';

const connectionParams = {
  host: 'localhost',
  port: 3306,
  user: 'basen',
  password: '123',
  database: 'basen'
};

export default async function Lobby({userName, lobbyRole, onPlay}) {

  const connection = await mysql.CreateConnection(connectionParams);
  const query = `CREATE TABLE '${userName}_game' (
  player_id INT AUTO_INCREMENT KEY,
  time_added TIMESTAMP,
  user_name VARCHAR(50) UNIQUE,
  score INT
  );`

  const [results] = await connection.execute()
  
  return (
    <section>
      <p>Welcome, {userName}</p>
      {(lobbyRole === 'creator') && (<button onClick={onPlay}>Start</button>)}
    </section>
  )
}
