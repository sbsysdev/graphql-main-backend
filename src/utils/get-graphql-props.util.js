const getGraphqlProps = info => {
	const props = [];

	if (!Array.isArray(info.fieldNodes)) return props;

	info.fieldNodes.forEach(fieldNode => {
		fieldNode.selectionSet?.selections?.forEach(selection => {
			props.push(selection.name?.value);
		});
	});

	return props;
};

module.exports = getGraphqlProps;
