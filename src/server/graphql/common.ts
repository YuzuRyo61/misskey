import {GraphQLScalarType} from 'graphql';

export const ScalarDateTime = new GraphQLScalarType({
	name: 'DateTime',
	description: 'The type to which the date and time are assigned'
});
