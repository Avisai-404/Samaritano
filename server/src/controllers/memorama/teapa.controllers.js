import { teapa } from '../../models/memorama/teapa.js'


export const getTeapa = async (req, res) => {
    
    try {
        const arrTeapa = await teapa.findAll();
        res.json(arrTeapa);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}


