import React from 'react';
import styles from './styles.module.scss';

function SSIBrowser() {
    const handleOnClick = () => {
        window.open("https://ssibrowser.com")
    };

    return (
        <>
            <button className={styles.button} onClick={handleOnClick}>
                SSI Browser
            </button>
        </>
    );
}
export default SSIBrowser;