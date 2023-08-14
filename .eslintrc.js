module.exports = {
  root: true,
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/eslint-config-prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    // js
    'no-console': 'error',
    'no-debugger': 'error',
    'sort-imports': [
      'error',
      {
        ignoreDeclarationSort: true,
      },
    ],

    // Vue
    // Essential
    'vue/no-dupe-keys': 'off',

    // Strongly recommended
    'vue/component-definition-name-casing': ['error', 'PascalCase'],
    'vue/first-attribute-linebreak': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/require-default-prop': 'off',
    'vue/require-explicit-emits': 'error',

    // Recommended
    'vue/component-tags-order': [
      'error',
      {
        order: ['script', 'template', 'style'],
      },
    ],
    'vue/no-v-html': 'off',

    // Uncategorized
    'vue/block-tag-newline': [
      'error',
      {
        singleline: 'always',
        multiline: 'always',
      },
    ],
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'vue/component-options-name-casing': ['error', 'PascalCase'],
    'vue/custom-event-name-casing': ['error', 'camelCase'],
    'vue/define-macros-order': [
      'error',
      {
        order: ['defineOptions', 'defineProps', 'defineEmits', 'defineSlots'],
      },
    ],

    'vue/html-comment-content-spacing': [
      'error',
      'always',
      {
        exceptions: ['-'],
      },
    ],
    'vue/no-duplicate-attr-inheritance': 'error',
    'vue/no-empty-component-block': 'error',
    'vue/no-multiple-objects-in-class': 'error',
    'vue/no-ref-object-destructure': 'error',
    'vue/no-restricted-v-bind': ['error', '/^v-/'],
    'vue/no-this-in-before-route-enter': 'error',
    'vue/no-useless-mustaches': 'error',
    'vue/no-useless-v-bind': 'error',
    'vue/padding-line-between-blocks': ['error', 'always'],
    'vue/prefer-separate-static-class': 'error',
    'vue/prefer-true-attribute-shorthand': 'error',

    // Extension
    'vue/array-bracket-spacing': ['error', 'never'],
    'vue/arrow-spacing': ['error', { before: true, after: true }],
    'vue/block-spacing': ['error', 'always'],
    'vue/comma-dangle': ['error', 'always-multiline'],
    'vue/comma-spacing': ['error', { before: false, after: true }],
    'vue/comma-style': ['error', 'last'],
    'vue/dot-location': ['error', 'property'],
    'vue/dot-notation': ['error', { allowKeywords: true }],
    'vue/eqeqeq': ['error', 'smart'],
    'vue/key-spacing': ['error', { beforeColon: false, afterColon: true }],
    'vue/keyword-spacing': ['error', { before: true, after: true }],
    'vue/no-constant-condition': 'error',
    'vue/no-empty-pattern': 'error',
    'vue/no-extra-parens': ['error', 'functions'],
    'vue/no-irregular-whitespace': 'error',
    'vue/no-loss-of-precision': 'error',
    'vue/no-restricted-syntax': [
      'error',
      'DebuggerStatement',
      'LabeledStatement',
      'WithStatement',
    ],
    'vue/no-sparse-arrays': 'error',
    'vue/no-unused-refs': 'error',
    'vue/no-useless-concat': 'error',
    'vue/object-curly-newline': [
      'error',
      { multiline: true, consistent: true },
    ],
    'vue/object-curly-spacing': ['error', 'always'],
    'vue/object-property-newline': [
      'error',
      { allowMultiplePropertiesPerLine: true },
    ],
    'vue/object-shorthand': [
      'error',
      'always',
      {
        ignoreConstructors: false,
        avoidQuotes: true,
      },
    ],
    'vue/prefer-template': 'error',
    'vue/quote-props': ['error', 'consistent-as-needed'],
    'vue/space-in-parens': ['error', 'never'],
    'vue/space-infix-ops': 'error',
    'vue/space-unary-ops': ['error', { words: true, nonwords: false }],
    'vue/template-curly-spacing': 'error',
  },
};