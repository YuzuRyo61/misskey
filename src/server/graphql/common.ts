import {GraphQLScalarType} from 'graphql';

export const ScalarDateTime = new GraphQLScalarType({
	name: 'DateTime',
	description: 'The type to which the date and time are assigned'
});

export const ScalarURL = new GraphQLScalarType({
	name: 'URL',
	description: 'A format that allows you to access the desired link destination. String.'
});

export const ScalarMd5 = new GraphQLScalarType({
	name: 'md5',
	description: 'md5 hash value format. String.'
});