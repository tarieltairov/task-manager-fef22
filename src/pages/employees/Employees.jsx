import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postPost } from '../../redux-toolkit/actions/action';
import './Employees.css';

const Employees = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const { posts, loading } = useSelector((state) => state.usersToolkit);

    console.log('before', posts)

    const sendPost = () => {
        let post = {
            body: 'dawdawdwd',
            title,
            userId: 1
        };
        dispatch(postPost(post))
    };

    return (
        <div className='employees' style={{ padding: '100px' }}>
            <h1>отправка задачи</h1>
            <input type="text" onChange={(e) => setTitle(e.target.value)} />
            <button onClick={() => sendPost()}>send</button>
            {loading && <span>loading...</span>}
            {posts?.map((item, index) => (
                <p key={index}>{item.title}</p>
            ))}
        </div>
    );
};

export default Employees;