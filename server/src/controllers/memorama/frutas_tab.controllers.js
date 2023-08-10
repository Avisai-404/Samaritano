import { frutas_tab } from '../../models/memorama/frutas_tab.js'


export const getFrutas_tab = async (req, res) => {
    
    try {
        const arrFrutas_tab = await frutas_tab.findAll();
        res.json(arrFrutas_tab);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}


