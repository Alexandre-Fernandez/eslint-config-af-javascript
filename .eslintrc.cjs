module.exports = {
	extends: [
		"airbnb-base",
		"plugin:import/recommended",
		"plugin:github/recommended",
		"plugin:sonarjs/recommended",
		"plugin:unicorn/recommended",
		"prettier",
	],
	plugins: ["import", "github", "sonarjs", "unicorn"],
	ignorePatterns: ["eslintrc.*", ".eslintrc.*"],
	rules: {
		"no-param-reassign": ["error", { props: false }],
		"no-use-before-define": "off",
		"no-console": "warn",
		"no-restricted-syntax": "off",
		"no-continue": "off",
		"no-empty": "off",
		"no-new-func": "warn",
		"class-methods-use-this": "off",
		"eslint-comments/no-use": "warn",
		"filenames/match-regex": "off",
		"i18n-text/no-en": "off",
		"github/no-dynamic-script-tag": "warn",
		"import/no-unresolved": "error",
		"import/no-namespace": "off",
		"import/extensions": "off",
		"import/prefer-default-export": "off",
		"unicorn/no-null": "off",
		"unicorn/prefer-module": "off",
		"unicorn/no-useless-undefined": "off",
		"unicorn/filename-case": "off",
		"unicorn/prevent-abbreviations": "off",
		"unicorn/prefer-optional-catch-binding": "off",
		"unicorn/prefer-top-level-await": "off",
		"unicorn/no-array-reduce": "off",
		"unicorn/no-await-expression-member": "off",
		"sonarjs/cognitive-complexity": ["error", 16],
	},
}
