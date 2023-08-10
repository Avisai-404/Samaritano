import { centla } from '../../models/memorama/centla.js'


export const getCentla = async (req, res) => {
    
    try {
        const arrCentla = await centla.findAll();
        res.json(arrCentla);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}


