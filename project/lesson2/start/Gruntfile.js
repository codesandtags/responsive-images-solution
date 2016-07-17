/*
 After you have changed the settings at "Your code goes here",
 run this with one of these options:
 "grunt" alone creates a new, completed images directory
 "grunt clean" removes the images directory
 "grunt responsive_images" re-processes images without removing the old ones
 */

module.exports = function (grunt) {

    var IMAGES_SRC = 'images_src/',
        IMAGES_OUTPUT = 'images/';

    grunt.initConfig({

        responsive_images: {
            dev: {
                options: {
                    engine: 'gm',
                    sizes: [{
                        name: 'small',
                        width: 320,
                        quality: 70
                    }, {
                        name: 'medium',
                        width: 640,
                        quality: 70
                    }, {
                        name: "large",
                        width: 1000,
                        suffix: "_x1",
                        quality: 60
                    }, {
                        name: "large",
                        width: 2000,
                        suffix: "_x2",
                        quality: 60
                    }]
                },
                /*
                 You don't need to change this part if you don't change
                 the directory structure.
                 */
                files: [{
                    expand: true,
                    src: ['**/*.{gif,jpg,png}'],
                    cwd: IMAGES_SRC,
                    dest: IMAGES_OUTPUT
                }]
            }
        },

        imagemin: {
            png: {
                options: {
                    progressive: true,
                    optimizationLevel: 7
                },
                files: [
                    {
                        // Set to true to enable the following options…
                        expand: true,
                        // cwd is 'current working directory'
                        cwd: IMAGES_SRC,
                        src: ['**/*.png'],
                        // Could also match cwd line above. i.e. project-directory/img/
                        dest: IMAGES_OUTPUT,
                        ext: '.png'
                    }
                ]
            },
            jpg: {
                options: {
                    progressive: true,
                    optimizationLevel: 2
                },
                files: [
                    {
                        // Set to true to enable the following options…
                        expand: true,
                        // cwd is 'current working directory'
                        cwd: IMAGES_SRC,
                        src: ['**/*.jpg'],
                        // Could also match cwd. i.e. project-directory/img/
                        dest: IMAGES_OUTPUT,
                        ext: '.jpg'
                    }
                ]
            },
            dynamic: {                         // Another target
                options: {
                    progressive: false,
                    optimizationLevel: 1
                },
                files: [{
                    expand: true,                  // Enable dynamic expansion
                    cwd: IMAGES_SRC,                   // Src matches are relative to this path
                    src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
                    dest: IMAGES_OUTPUT                  // Destination path prefix
                }]
            }
        },

        /* Clear out the images directory if it exists */
        clean: {
            dev: {
                src: ['images'],
            },
        },

        /* Generate the images directory if it is missing */
        mkdir: {
            dev: {
                options: {
                    create: ['images']
                },
            },
        },

        /* Copy the "fixed" images that don't go through processing into the images/directory */
        copy: {
            dev: {
                files: [{
                    expand: true,
                    src: 'images_src/fixed/*.{gif,jpg,png}',
                    dest: 'images/'
                }]
            },
        },
    });

    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-mkdir');
    grunt.registerTask('default', ['clean', 'mkdir', 'copy', 'responsive_images']);

};
