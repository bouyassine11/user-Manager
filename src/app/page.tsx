'use client';

import React,{ useState } from "react";
import { User, UsersTypes } from "@/types";
import { UserForm } from "@/components/UserForm";
import { useLocalStorage } from "@/hooks/useLocalStorage";



export default function Home() {

  const [users , setUsers] = useLocalStorage<User[]>('users', [])
  const addUser = (userData: Omit<User, 'id'>)=>{
    const newUser: User = {
      id: Date.now().toString(),
      ...userData
    };
    setUsers(prev => [...prev,newUser])
  };

  return (
    <div>
     <UserForm onAdd={addUser} />
    </div>
  );
}
