import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTodos } from '../../redux/actions/todosAction';
import './Employees.css';

const Employees = () => {
    const dispatch = useDispatch();

    const { users } = useSelector((state) => state.todos);

    useEffect(() => {
        dispatch(getAllTodos());
    }, [dispatch]);

    return (
        <div className='employees' style={{ padding: '100px' }}>
            <h1>Cотрудники</h1>
            {/* отображаем данные - users, полученные со store (redux) */}
            <ol>
                {users?.map((item) => (
                    <li key={item.id}>{item?.name}</li>
                ))}
            </ol>
        </div>
    );
};

export default Employees;