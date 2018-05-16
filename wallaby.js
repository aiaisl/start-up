module.exports = function () {
    return {
        files: [
            'src/**/*.ts',
            'src/**/*.tsx',
            '!src/**/*test.ts',
            '!src/**/*test.tsx'
        ],

        env: {
            runner: 'node',
            type: 'node'
        },
        setup: wallaby => {
            const path = require('path');

            const jestConfig = require('./package.json').jest;
            jestConfig.modulePaths = jestConfig.modulePaths.map(p => p.replace('<rootDir>', wallaby.projectCacheDir));

            wallaby.testFramework.configure(jestConfig);
        },
        testFramework: 'jest',
        tests: [
            'src/**/*test.ts',
            'src/**/*test.tsx'
        ]
    };
};