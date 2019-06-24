module.exports =
{
	env:
	{
		node: true,
	},
	extends:
	[
		'eslint:recommended',
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
		'@typescript-eslint/tslint',
	],
	root: true,
	rules:
	{
		// tslint
		'@typescript-eslint/tslint/config':
		[1,
		{
			lintFile: `${__dirname}/tslint.json`,
		}
		],
		'no-console': 'off',
		'no-await-in-loop': 'off',
	}
};
