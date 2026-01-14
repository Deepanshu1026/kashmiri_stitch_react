import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../components/css/auth.css';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            const response = await fetch('http://localhost:5000/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                // Save user to localStorage
                localStorage.setItem('kashmiri_user', JSON.stringify(data));
                navigate('/'); // Redirect to home
            } else {
                setError(data.message || 'Signup failed');
            }
        } catch (err) {
            console.error('Signup Error:', err);
            setError(`Something went wrong: ${err.message}`);
        }
    };

    return (
        <div className="auth-wrapper">
            <div className="auth-form-container">
                <h2 className="auth-title">Sign Up</h2>
                {error && <div className="alert alert-danger mb-3 p-2" style={{ fontSize: '14px' }}>{error}</div>}
                <form className="auth-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Username</label>
                        <input
                            type="text"
                            required
                            placeholder="Choose a username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email Address</label>
                        <input
                            type="email"
                            required
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            required
                            placeholder="Create a password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="auth-btn">Sign Up</button>
                </form>
                <div className="auth-footer">
                    Already have an account? <Link to="/login">Log In</Link>
                </div>
            </div>
        </div>
    );
};

export default Signup;
