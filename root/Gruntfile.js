module.exports = function(grunt) {

  grunt.initConfig({




    browserify: {
      dev: {
        files: {
          'build/debug/app.js': 'src/index.js'
        },
        options: {
          debug: true
        }
      },
      prod: {
        files: {
          'build/release/app.js': 'src/index.js'
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
          spawn: false,
          atBegin: true
        }
      }
    }
  });




  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browserify');

  // Default task.
  grunt.registerTask('default', ['browserify:dev']);
  grunt.registerTask('release', ['browserify:prod']);
};