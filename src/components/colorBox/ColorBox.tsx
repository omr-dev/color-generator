import styles from './colorBox.module.css';
import {useState} from 'react';

const ColorBox = ({color, index}) => {
    const [isCopied, setIsCopied] = useState(false);
    const handleCopy = () => {
        setIsCopied(true);
        navigator.clipboard.writeText(color);
        setTimeout(() => {
            setIsCopied(false);
        }, 2000);
    };
    return (
        <div className={styles.colorBox} style={{backgroundColor: color}} onClick={handleCopy}>
            <p className={styles.colorDetails + " " + ((index > 10) && styles.whiteText)}>{Math.abs(index - 10) * 10}%<br/>{color}
                <br/>{isCopied && "COPIED TO CLIPBOARD!"}
            </p>
        </div>
    );
};

export default ColorBox;
