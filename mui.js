import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const isDisabled = !username || !password;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        width: 300,
        margin: '40px auto',
        padding: 3,
        boxShadow: 3,
        borderRadius: 2,
        background: '#fff',
      }}
    >
      <TextField
        label="Username"
        variant="outlined"
        value={username}
        onChange={e => setUsername(e.target.value)}
        fullWidth
      />
      <TextField
        label="Password"
        variant="outlined"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        fullWidth
      />
      <Button
        variant="contained"
        color="primary"
        disabled={isDisabled}
        fullWidth
      >
        Login
      </Button>
    </Box>
  );
}

// Install Material-UI and Emotion packages
// npm install @mui/material @emotion/react @emotion/styled
// Create a new React app
// npx create-react-app my-website-repo