import React, { useState } from 'react';
import cl from './Home.module.scss';
import sortIcon from '../../assets/icons/sorting1.png';
import square from '../../assets/icons/square.png';
import inline from '../../assets/icons/inline.png';
import inline1 from '../../assets/icons/inline1.png';
import square1 from '../../assets/icons/square1.png';
import Task from '../../components/Task/Task';

const Home = () => {
    const [view, setView] = useState('inline');
    return (
        <div className={cl.homePage}>
            <div className={cl.first__blok}>
                <h1>Доска задач</h1>
                <span className={cl.task_count}>6</span>
                
                <div className={cl.sort_block}>
                    <select name="" id="" placeholder='Сортировка' defaultValue={'Сортировка'}>
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
                    <div className={view==="square" ? cl.active : cl.square_block} onClick={()=>setView("square")}>
                        <img src={view==="square" ?inline1: inline} alt="square" />
                    </div>
                    <div className={view==="inline" ? cl.active : cl.square_block} onClick={()=>setView("inline")}>
                        <img  src={view==="square" ? square1 : square} alt="inline" />
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