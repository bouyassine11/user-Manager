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
        
    }




    return(
        <>
        
        </>
    )
}