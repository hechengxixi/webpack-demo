/*
 * @Author: 程羽 chengyu@iri.cn
 * @Date: 2022-07-19 16:30:16
 * @LastEditors: 程羽
 * @LastEditTime: 2022-07-20 15:01:02
 * @Description: 
 */
module.exports = {
    // "react":"^18.2.0",

    "extends": [
        "react-app",
        "plugin:@typescript-eslint/recommended",
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true,
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    settings: {
        react: {
          version: 'detect',
        },
      },
    
      overrides: [
        {
          files: ['*.ts', '*.tsx', '*.mts', '*.cts'],
          rules: {
            'no-undef': 'error', // ts(2304)
            '@typescript-eslint/no-var-requires': 'off'
          },
        },
      ],
    "rules": {
    }
}
