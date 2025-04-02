import React, { useState } from 'react';

export default function LoginPage() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    const res = await fetch('https://backend-login-j77u.onrender.com/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, password })
    });
    const data = await res.json();
    setMessage(data.message || data.error);
  };

  return (
    <div style={{ maxWidth: 400, margin: '100px auto', textAlign: 'center' }}>
      <h2>เข้าสู่ระบบ</h2>
      <input
        placeholder="ID 6 หลัก"
        value={userId}
        onChange={e => setUserId(e.target.value)}
      /><br /><br />
      <input
        type="password"
        placeholder="รหัสผ่าน"
        value={password}
        onChange={e => setPassword(e.target.value)}
      /><br /><br />
      <button onClick={handleLogin}>เข้าสู่ระบบ</button>
      <p>{message}</p>
    </div>
  );
}
