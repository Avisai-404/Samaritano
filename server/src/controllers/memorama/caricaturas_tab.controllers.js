import { caricaturas_tab } from '../../models/memorama/caricaturas_tab.js'


export const getCaricaturas_tab = async (req, res) => {
    
    try {
        const arrCaricaturas_tab = await caricaturas_tab.findAll();
        res.json(arrCaricaturas_tab);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}


