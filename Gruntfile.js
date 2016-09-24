
module.exports = function (grunt) {

    var tsconfig = grunt.file.readJSON("tsconfig.json").compilerOptions;
    var tslint = grunt.file.readJSON("tslint.json");

    grunt.initConfig({

        typescript: {
            base: {
                src: tsconfig.rootDir,
                dest: tsconfig.outFile,
                options: tsconfig
            }
        },

        tslint: {
            options: {
                configuration: tslint
            },
            all: {
                src: [tsconfig.rootDir]
            }
        },

        watch: {
            scripts: {
                files: [tsconfig.rootDir],
                tasks: ['ts'],
                options: {
                    spawn: false,
                },
            },
        },
    });

    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks("grunt-tslint");

    grunt.registerTask('ts', ['tslint', 'typescript']);
    grunt.registerTask('default', 'ts');
};
