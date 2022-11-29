import styles from './body.module.css';
import {useState} from 'react';

const Body = () => {
    const [colors, setColors] = useState(['#ffffff', '#feeee9', '#fcdcd3', '#fbcbbe', '#f9b9a8', '#f8a892', '#f7967c', '#f58566', '#f47351', '#f2623b', '#f15025', '#d94821', '#c1401e', '#a9381a', '#913016', '#792813', '#60200f', '#48180b', '#301007', '#180804', '#000000']);
    return (
        <div className={styles.container}>
            {colors.map((color) => {
                return (<div className={styles.colorBox} style={{backgroundColor: color}}>
                    <p className={styles.colorDetails}>30%</p>
                    <p className={styles.colorDetails}>{color}</p>
                </div>);
            })}

        </div>
    );
};

export default Body;
