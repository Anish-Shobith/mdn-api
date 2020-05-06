const fetch = require('node-fetch');
const Turndown = require('turndown');
const { unescape } = require('html-escaper');

const parse = new Turndown();

module.exports = class Source {

	constructor() {
		this.baseURL = 'https://api.duckduckgo.com/?q=mdn';
	}

	async search(query) {
		const res = await fetch(`${this.baseURL}+${query}&format=json`);

		const result = await res.json();

		const text = result.AbstractText.slice(33, -10);
		
		const description = /<p>(.+)<\/p>/g.exec(text)[0].replace(/<\/?p>/g, '');
		const raw = unescape(text.replace(/<\/?p>/g, '').slice(description.length).replace(/<\/?(pre|code)>/g, '')).match(/(.*)/gm);

		return {
			heading: result.Heading,
			description: description,
			raw: {
				html: result.AbstractText,
				parsed: parse.turndown(unescape(result.AbstractText))
			},
			syntax: {
				raw: raw,
				markdown: `\`\`\`js\n${raw.join('\n')}\n\`\`\``
			},
			source: {
				site: result.AbstractSource,
				url: result.AbstractURL
			}
		};
	}

};
