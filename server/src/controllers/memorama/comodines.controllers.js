import { comodines } from '../../models/memorama/comodines.js'


export const getComodines = async (req, res) => {
    
    try {
        const arrComodines = await comodines.findAll();
        res.json(arrComodines);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}


