import React from 'react';
import cl from './Task.module.scss';

const Task = () => {
    return (
        <div className={cl.task}>
            <span className={cl.timer__block}>
                Прошло:
                <span>1д 19ч 17м 32</span>
            </span>

            <h3>Связаться с организацией</h3>

            <p>Короткое описание задачи</p>
            
            <p>field</p>

            <div className={cl.btns_block}>
                <button className={cl.decline_btn}>отклонить</button>
                <button className={cl.comlete_btn}>Завершить</button>
            </div>
        </div>
    );
};

export default Task;