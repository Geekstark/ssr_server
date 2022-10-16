module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true,
        "commonjs": true,  // ADD， 支持对 commonjs 全局变量的识别
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "ecmaFeatures": {
            jsx: true,
        }
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "react/jsx-uses-react": "off",
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/no-var-requires": "off"
    }
}


//TODO
/**
 * - react/jsx-uses-react: 必须增加对 import React from "react": 的引入，在 React 17之后，jsx的页面已经不需要再引入 React 了
 * - react/react-in-jsx-scope: 同上
 * - @typescript-eslint/no-var-requires: 禁止使用 require 来定义，node 很多相关的以来没有对 es module 的定义
 */