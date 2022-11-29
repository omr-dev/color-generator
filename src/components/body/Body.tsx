import styles from './body.module.css';
import {useEffect, useState} from 'react';
import Values from 'values.js';
import rgbToHex from '../../utils';
import ColorBox from '../colorBox/ColorBox';
type PropsBody={
    currColor:string
}
const Body = ({currColor}:PropsBody) => {
    const createColorsList = (_color:string) => {

        const color = new Values(_color);
        return color.all(10).map((subColor) => {
            return rgbToHex(subColor.rgb[0], subColor.rgb[1], subColor.rgb[2]);
        });



    };


    const [colors, setColors] = useState(createColorsList(currColor));
    useEffect(() => {

        setColors(createColorsList(currColor));
    }, [currColor]);
    return (
        <div className={styles.container}>
            {colors.map((color, index) => <ColorBox color={color} index={index} key={index}/>
            )}

        </div>
    );
};

export default Body;
