import Values from 'values.js';
const componentToHex= (component:number)=>{
    let hex=component.toString(16);
    return hex.length===1?0+hex:hex;
}
const rgbToHex=(r:number,g:number,b:number)=> '#'+componentToHex(r)+componentToHex(g)+componentToHex(b);

export default rgbToHex;

/**
 * Checks if the String is a valid hex or rgb color model using
 * the helper methods provided by Values.js
 * @property isValidColorModel <private> [Function]
 * @argument color <required> [String]
 * @return true|false [Boolean]
 */
export const isValidColorModel = (color:string) => {
    try {
        new Values(color);
        return true;
    }
    catch(e) {
        return false;
    }
};