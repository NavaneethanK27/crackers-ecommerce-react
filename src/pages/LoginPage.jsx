import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../LoginPage.css';

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [role, setRole] = useState('user'); // 'user' or 'admin'
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create temporary user object
    const userData = {
      email,
      name: !isLogin && role === 'user' && name ? name : email.split('@')[0],
      role
    };
    
    // Store in temporary storage
    sessionStorage.setItem("currentUser", JSON.stringify(userData));
    
    // Notify other components (like Header) that user logged in
    window.dispatchEvent(new Event("login-event"));
    
    // Redirect to home page
    navigate("/");
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">{isLogin ? 'Welcome to NP crackers' : 'Create Account'}</h2>
        
        <div className="role-selector">
          <button 
            className={`role-btn ${role === 'user' ? 'active' : ''}`}
            onClick={() => setRole('user')}
            type="button"
          >
            User
          </button>
          <button 
            className={`role-btn ${role === 'admin' ? 'active' : ''}`}
            onClick={() => setRole('admin')}
            type="button"
          >
            Admin
          </button>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          {!isLogin && role === 'user' && (
            <div className="input-group">
              <label>Full Name</label>
              <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required 
              />
            </div>
          )}
          
          <div className="input-group">
            <label>Email Address</label>
            <input 
              type="email" 
              placeholder="you@example.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>
          
          <div className="input-group">
            <label>Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>

          <button type="submit" className="submit-btn">
            {isLogin ? 'Login' : 'Register'}
          </button>
        </form>

        <div className="toggle-mode">
          {isLogin ? (
            <p>
              Don't have an account?{' '}
              {role === 'admin' ? (
                <span className="disabled-text">Admins are not allowed to register</span>
              ) : (
                <span className="toggle-link" onClick={() => setIsLogin(false)}>
                  Sign Up
                </span>
              )}
            </p>
          ) : (
            <p>
              Already have an account?{' '}
              <span className="toggle-link" onClick={() => setIsLogin(true)}>
                Login
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
