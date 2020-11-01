import express from 'express';
import parser from 'body-parser';
import { Source } from './Source';

const app = express();

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

app.get('/search', async (req, res) => {

	try {
		if (!req.query.q && !req.query.query) {
			return res.send({ error: 'You need to provied a query' });
		}
		const [query, array] = [req.query.q || req.query.query, req.query.array];
		const data = await Source(query as string, array as unknown as boolean).catch(err => res.send({ error: err.message, success: false }));
		if (data) {
			res.send(data);
		} else {
			res.send({ error: 'Query not found', success: false });
		}
	} catch (err) {
		res.send(err.success = false);
	}
});

app.use((req, res) => {
	res.status(404).send({ url: `${req.originalUrl} not found!` });
});

app.listen(3000, (() => console.log(`API is listining on port: ${3000}`)));


