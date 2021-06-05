module.exports = function(collection) {
	let tagSet = new Set();
	const includeTag = ['java', 'python', 'cpp'];
	collection.getAll().forEach((item) => {
		if ('tags' in item.data) {
			let tags = item.data.tags;

			tags = tags.filter((item) => {
				return includeTag.includes(item);
			});

			for (const tag of tags) {
				tagSet.add(tag);
			}
		}
	});

	return [...tagSet];
}
