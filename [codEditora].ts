import { NextApiRequest, NextApiResponse } from 'next';
import { ControleEditora } from '../livros-next/controle/ControleEditora.ts'; 

export default (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method === 'GET') {
            const { codEditora } = req.query;
            const nomeEditora = controleEditora.getNomeEditora(Number(codEditora));
            res.status(200).json({ nomeEditora });
        } else {
            res.status(405).end();
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
