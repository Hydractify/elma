module.exports =
{
	env:
	{
		node: true,
	},
	extends:
	[
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions:
	{
		ecmaFeatures:
		{
			jsx: false,
		},
		ecmaVersion: 2019,
		project: `${__dirname}/tsconfig.json`,
		sourceType: 'module',
	},
	plugins:
	[
		'@typescript-eslint',
	],
	root: true,
	rules:
	{
		/*
		 * ESLint rules
		 */
		'brace-styles':
		[
			'error',
			'allman',
		],
		'curly':
		[
			'error',
			'ignore-same-line',
		],
		'quotes':
		[
			'error',
			'single',
		],
		'quote-props':
		[
			'error',
			'as-needed',
		],
		'no-underscore-dangle': 'error',
		'radix': false,
		/*
		 * TSLint rules
		 */
		'@typescript-eslint/array-type':
		[
			true,
			'array',
		],
		'@typescript-eslint/indent':
		[
			true,
			'tabs',
			4,
		],
		'@typescript-eslint/interface-name-prefix':
		[
			true,
			'always-prefix',
		],
		'@typescript-eslint/no-var-requires': false,
	}
};
