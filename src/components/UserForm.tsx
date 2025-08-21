'use client';

import React, {useState} from "react";

import { User } from "@/types";

interface UserFormProps {
    onAdd : (user : Omit<User, 'id'>)=> void;
}

export const UserForm: React.FC<UserFormProps> = ({onAdd})=>{
    const [name , setName] = useState('');
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [type , setType] = useState<User['type']>('user');

    const handleSubmit = (e: React.FormEvent) =>{
        //text.trim() removes any spaces before/after the text.
        //" hello ".trim() → "hello" ✅ non-empty → passes.
        //" ".trim() → "" ❌ empty → won’t pass.
        e.preventDefault();
        if(name.trim() && email.trim() && password.trim()){
            onAdd({
                name: name.trim(),
                email: email.trim(),
                password: password.trim(),
                type
            });
            //reste the form field
            console.log("dooooooone")
            setName('');
            setEmail('');
            setPassword('');
            setType('user');
        }
    }




    return(
        <form onSubmit={handleSubmit}>
            <div>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Add a user name" required/>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Add an email" required/>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="add a strong password" required/>
                <select value={type} onChange={(e)=>setType(e.target.value as User['type'])}>
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                    <option value="editor">Editor</option>
                </select>
            </div>
            <button type="submit">
                Add User
            </button>
        </form>
    )
}