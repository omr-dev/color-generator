import styles from './header.module.css';

const Header = () => {





    return (
        <div className={styles.container}>
            <h1 className={styles.mainTitle}>Color Generator</h1>
            <div className={styles.inputBox}>
                <form>

                    <input className={styles.inputColor} placeholder={"#f15025"}/>
                    <button className={styles.btnSubmit}>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Header;
