import React from 'react';
import { User } from './Users';

export const UserDetail = (props: {user: User}) => {

    const {user} = props;

    return <div>
        Some of {user.firstName}'s hobbies include {user.hobbies}.
    </div>

}