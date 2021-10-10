import React from 'react';
import useFireBase from '../../hooks/useFireBase';

const Home = () => {
    const {user} = useFireBase();
    return (
        <div>
            <h2>This is home</h2>
            <h5>User: {user.displayName}</h5>
        </div>
    );
};

export default Home;