/* eslint-disable no-redeclare */
import fetch from 'node-fetch';
import { compareTwoStrings } from 'string-similarity';

export function Source(query: string): Promise<(Document & { diff: number })>;
export function Source(query: string, array?: boolean): Promise<(Document & { diff: number })[]>;
export async function Source(query: string, array?: boolean): Promise<MaybeArray<(Document & { diff: number })>> {
	query = query
		.replace(' ', '+')
		.replace(/#/g, '.prototype.');
	const res = fetch(`https://developer.mozilla.org/api/v1/search/en-US?q=${encodeURIComponent(query)}&highlight=false`)
		.then(res => res.json() as Promise<Result>);
	const best = (await res).documents
		.map(doc => Object.assign(doc, {
			diff: compareTwoStrings(query.toLowerCase(), doc.title.toLowerCase())
		}))
		.sort((a, b) => b.diff - a.diff);
	return array ? best : best[0];
}

export type MaybeArray<T> = T | T[];

export interface Result {
	count: number;
	next: string | null;
	previous: string | null;
	query: string;
	page: number;
	pages: number;
	start: number;
	end: number;
	documents: Array<Document>;
}

export interface Document {
	title: string;
	slug: string;
	locale: string;
	excerpt: string;
}

