import { elementos_tab } from '../../models/memorama/elementos_tab.js'


export const getElementos_tab = async (req, res) => {
    
    try {
        const arrElementos_tab = await elementos_tab.findAll();
        res.json(arrElementos_tab);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}


