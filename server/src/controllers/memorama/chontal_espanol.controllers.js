import { chontal_espanol } from '../../models/memorama/chontal_espanol.js'


export const getChontal_espanol = async (req, res) => {
    
    try {
        const arrChontal_espanol = await chontal_espanol.findAll();
        res.json(arrChontal_espanol);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}


