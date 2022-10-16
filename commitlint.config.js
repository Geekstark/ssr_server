module.exports = {
    extends: ["@commitlint/config-conventional"],
    rules: {
        "type-enum": [2, "always", ["feat", "fix", "revert"]],
        "subject-max-length": [1, "always", 30],
    }
}

//TODO
/**
 *  type-enum 是指 commit 正文的前缀，通常我们会用到这三种
 *   - Feat: 一个新功能
 *   - Fix: 一次修复，之前已有问题的修复
 *   - Revert: 一次回滚，书写异常代码后的撤销
 */