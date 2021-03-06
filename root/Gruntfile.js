module.exports = function(grunt) {

  grunt.initConfig({

    dirTmp: '.tmp/',
    dirRelease: 'build/release/',
    dirDebug: 'build/debug/',

    uglify: {
      prod: {
        files: {
          '<%= dirRelease %>app.js': '<%= dirTmp %>app.js'
        }
      }
    },

    browserify: {
      dev: {
        files: {
          '<%= dirDebug %>app.js': 'src/index.js'
        },
        options: {
          debug: true
        }
      },
      prod: {
        files: {
          '<%= dirTmp %>app.js': 'src/index.js'
        },
        options: {}
      }
    },



    watch: {
      dev: {
        files: [
          './lib/**/*.js',
          './src/**/*.js'
        ],
        tasks: [
          'browserify:dev'
        ],
        options: {
          livereload: true,
          spawn: false,
          atBegin: true
        }
      }
    },




    connect: {
      dev: {
        options: {
          port: 3000,
          base: '.'
        }
      }
    }
  });



  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('debug', [
    'browserify:dev'
  ]);

  grunt.registerTask('server', [
    'connect:dev',
    'watch:dev'
  ]);

  grunt.registerTask('release', [
    'browserify:prod',
    'uglify:prod'
  ]);

  grunt.registerTask('default', [
    'debug'
  ]);
};
