import type { NextApiRequest, NextApiResponse } from 'next';
const index = (req: NextApiRequest, res: NextApiResponse) => {
	debugger;
	return res.json('hola');
};
export default index;
