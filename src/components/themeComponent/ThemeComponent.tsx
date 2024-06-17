import React, {useEffect, useState } from 'react';
import css from '../paginationComponent/Pagination.module.css'

const ThemeComponent = () => {
    const [theme, setTheme] = useState(false);
    const handleclick = () => {
        setTheme(!theme)
    }
    useEffect(() => {
        if (theme == true){
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    });
    return (
        <div>
            <button onClick={handleclick} className={css.button}>{theme?'Light theme' : 'Dark theme'}</button>
        </div>
    );
};

export default ThemeComponent;