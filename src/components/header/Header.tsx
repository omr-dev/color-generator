import styles from './header.module.css';
import {useState} from 'react';
import {isValidColorModel} from '../../utils';

const Header = ({setCurrColor}) => {
    const [inputColor, setInputColor] = useState("");
    const [isValidColor, setIsValidColor]=useState(true);
    const handleSubmit = (e) => {
        e.preventDefault();
        if(isValidColorModel(inputColor)){
            setCurrColor(inputColor);
            setIsValidColor(true)
        }else{
setIsValidColor(false)

        }

    };


    return (
        <div className={styles.container}>
            <h1 className={styles.mainTitle}>Color Generator</h1>
            <div className={styles.inputBox}>
                <form onSubmit={handleSubmit}>

                    <input className={styles.inputColor+" "+(!isValidColor && styles.redBorder)} placeholder={"#f15025"} value={inputColor} onChange={(e) => setInputColor(e.target.value)}/>
                    <button className={styles.btnSubmit}>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Header;
