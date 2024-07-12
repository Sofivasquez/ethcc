'use client'
import styles from "./page.module.css";

export default function Home() {
  const sendToServer = async () => { 
    const input = document.getElementById('user_input').value;
    const response = await fetch('/api/chatbot', {
      method: 'POST',
      body: JSON.stringify({ input }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    console.log(data);
  }

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <label htmlFor="#user_input">User input:</label>
        <input id="user_input" type="text" placeholder="User input" />
        <button id="process" onClick={() => sendToServer()}>Process</button>
      </div>
    </main>
  );
}

