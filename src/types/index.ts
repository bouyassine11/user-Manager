export interface User{
    id : string;
    name : string;
    email : string;
    password : string;
    type : 'admin' | 'user'|'editor';
}

export type UsersTypes = 'Normal Users' | 'Admins' | 'Editors';

