import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useLoginController = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password, rememberMe });
    // Simulate login
    navigate('/');
  };

  const handleToggleRemember = () => {
    setRememberMe(!rememberMe);
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    rememberMe,
    handleToggleRemember,
    handleSubmit,
  };
};
