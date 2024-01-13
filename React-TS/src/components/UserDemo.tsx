import React from 'react';

type UserDemoProps = {
    users: {
        id: number,
        name: string,
        email: string,
        age: number,
    }[];
};

const UserDemo = ({ users }: UserDemoProps) => {
    return (
        <div>
            {users.map((user) => {
                const { id, name, email, age } = user;
                return (
                    <div key={id}>
                        <h2>{name}</h2>
                        <p>{email}</p>
                        <p>{age}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default UserDemo;