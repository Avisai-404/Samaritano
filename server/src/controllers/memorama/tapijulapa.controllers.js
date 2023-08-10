import { tapijulapa } from '../../models/memorama/tapijulapa.js'


export const getTapijulapa= async (req, res) => {
    
    try {
        const arrTapijulapa = await tapijulapa.findAll();
        res.json(arrTapijulapa);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}


