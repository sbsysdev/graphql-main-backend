const getSelectionsFromFieldNode = fieldNode =>
	fieldNode.selectionSet?.selections?.reduce(
		(prev, current) =>
			prev.find(value => value === current.name?.value)
				? prev
				: [...prev, current.name?.value],
		[]
	) || [];

const getGraphqlProps = info =>
	info?.fieldNodes?.reduce(
		(prev, current) => [...prev, ...getSelectionsFromFieldNode(current)],
		[]
	) || [];

module.exports = getGraphqlProps;
