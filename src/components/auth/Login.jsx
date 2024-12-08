import React from 'react'
import { useState } from 'react';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("email is", email);
        console.log("password is", password);
    };

    return (
        <div className='flex items-center justify-center'>
            <div className='border-2 rounded-xl border-emerald-600 p-10'>
                <form onSubmit={submitHandler} className="flex flex-col items-center justify-center space-y-4 p-6 rounded-lg shadow-lg">
                    <input 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required 
                        type="email" 
                        placeholder="Email" 
                        className="w-full max-w-xs p-2 border border-gray-600 rounded focus:outline-none focus:border-emerald-400"
                    />
                    <input 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required 
                        type="password" 
                        placeholder="Password" 
                        className="w-full max-w-xs p-2 border border-gray-600 rounded focus:outline-none focus:border-emerald-400"
                    />
                    <button 
                        type="submit" 
                        className="w-full max-w-xs p-2 bg-emerald-600 text-white rounded hover:bg-emerald-700 focus:outline-none focus:bg-emerald-700"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};
