import React from 'react';
import cl from './Home.module.scss';
import sortIcon from '../../assets/icons/sorting.png';
import square from '../../assets/icons/square.png';
import inline from '../../assets/icons/inline.png';
import Task from '../../components/Task/Task';

const Home = () => {
    return (
        <div className={cl.homePage}>
            <div className={cl.first__blok}>
                <h1>Доска задач</h1>
                <span>6</span>
                <div className={cl.sort_block}>
                    <select name="" id="">
                        <option value="first">От А-Я</option>
                        <option value="old">Старые</option>
                        <option value="new">Новые</option>
                        <option value="default">По умолчанию</option>
                    </select>
                    <img src={sortIcon} alt="sortIcon" />
                </div>


                <div className={cl.view_block}>
                    <div className={cl.view_block_title}>
                        <span>Вид:</span>
                    </div>
                    <div className={cl.square_block}>
                        <img src={square} alt="square" />
                    </div>
                    <div>
                        <img className={cl.inline_block} src={inline} alt="inline" />
                    </div>
                </div>

            </div>



            <div className={cl.second__block}>
                <Task />
            </div>
        </div>
    );
};

export default Home;