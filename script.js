function makeMetaTags() {
	const input = document.getElementById('input')
	const name = document.getElementById('website')
	const title = document.getElementById('title')
	const description = document.getElementById('description')
	const language = document.getElementById('lang')
	const color = document.getElementById('color')
	const image = document.getElementById('image')
	const website = document.getElementById('website')
	const url = document.getElementById('url')
	const twitter = document.getElementById('twitter')
	input.value = null;
	input.value = '<meta charset="UTF-8"/><meta property="og:type" content="website"/><meta property="twitter:card" content="summary_large_image"/><meta name="viewport" content="width=device-width, initial-scale=1"/>'
	if (name.value) {
		input.value = input.value + `<meta property="og:site_name" content="${name.value}"/>`
	}
	if (title.value) {
		input.value = input.value + `<meta property="og:title" content="${title.value}"/>`
		input.value = input.value + `<meta name="title" content="${title.value}"/>`
		input.value = input.value + `<meta property="twitter:title" content="${title.value}"/>`
	}
	if (description.value) {
		input.value = input.value + `<meta property="og:description" content="${description.value}"/>`
		input.value = input.value + `<meta property="twitter:description" content="${description.value}"/>`
		input.value = input.value + `<meta name="description" content="${description.value}"/>`
	}
	if (language.value) {
		input.value = input.value + `<meta name="language" content="${language.value}"/>`
	}
	if (twitter.value) {
		input.value = input.value + `<meta name="twitter:site" content="@${twitter.value}"/>`
	}
	if (url.value) {
		input.value = input.value + `<meta property="og:url" content="${url.value}"/>`
		input.value = input.value + `<meta property="twitter:url" content="${url.value}"/>`
	}
	if (image.value) {
		input.value = input.value + `<meta property="og:image" content="${image.value}"/>`
		input.value = input.value + `<meta property="twitter:image" content="${image.value}"/>`
	}
	if (language.value) {
		input.value = input.value + `<meta property="language" content="${language.value.toUpperCase()}"/>`
	}
	if (color.value) {
		input.value = input.value + `<meta name="theme-color" content="${color.value}"/>`
	}

}

function copy() {
	const code = document.getElementById('input')
	if (!code.value) {
		document.getElementById('copy').innerHTML = 'There\'s nothing to copy!'
	} else {
		code.setAttribute("style", "display: initial;"); code.select(); document.execCommand("copy"); code.setAttribute("style", "display: none;"); document.getElementById('copy').innerHTML = 'Copied!';
	}
	setTimeout(() => { document.getElementById('copy').innerHTML = 'Copy' }, 750)
}
