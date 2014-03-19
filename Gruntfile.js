module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),


        sass: {
            dist: {
                options: {
                    style: 'nested'
                },
                files: {
                    'www/css/main.min.css': 'css/main.scss'
                }
            }
        },


        autoprefixer: {
            options: {
                browsers: ['last 2 version', 'ie 8', 'ie 9']
            },
            css: {
                src: 'www/css/main.min.css'
            }
        },

        cssmin: {
            options: {
                report: 'min'
            },
            combine: {
                files: {
                    'www/css/main.min.css': 'www/css/main.min.css'
                }
            }
        },


        concat: {
            jsPlugin: {
                src: ['js/plugin/**/*.js'],
                dest: 'www/js/plugin.min.js'
            },
            jsMain: {
                files: {
                    'www/js/main.min.js': ['js/main/main.js']
                }
            }
        },


        uglify: {
            options: {
                report: 'min'
            },
            jsPlugin: {
                files: {
                    'www/js/plugin.min.js': 'www/js/plugin.min.js'
                }
            },
            jsMain: {
                files: {
                    'www/js/main.min.js': 'www/js/main.min.js'
                }
            }
        },


        watch: {
            options: {
                livereload: true
            },
            jsPlugin: {
                files: ['js/plugin/**/*.js'],
                tasks: ['concat:jsPlugin'],
                options: {
                    spawn: false
                }
            },
            jsMain: {
                files: ['js/main/**/*.js'],
                tasks: ['concat:jsMain'],
                options: {
                    spawn: false
                }
            },
            css: {
                files: ['css/**/*.scss'],
                tasks: ['sass', 'autoprefixer'],
                options: {
                    spawn: false
                }
            },
            html: {
                files: ['www/**/*.html', 'www/**/*.php'],
                tasks: [],
                options: {
                    spawn: false
                }
            }
        }

    });

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('www', ['sass', 'autoprefixer', 'cssmin', 'concat', 'uglify']);
    grunt.registerTask('default', ['watch']);

};