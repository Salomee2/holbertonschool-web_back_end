export default [
	{
		files: ['**/*.js'],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
		},
		rules: {
			'no-var': 'error',
			'prefer-const': 'error',
			'eol-last': ['error', 'always'],
		},
	}
];
