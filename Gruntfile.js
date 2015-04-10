/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jsFiles : {
      gruntfile: 'Gruntfile.js',
      src: 'src/**/*.js',
      lib: 'lib/**/*.js',
      spec: 'spec/**/*.js'
    },

    // Task configuration.
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        eqnull: true,
        globals: {
          jQuery: true,
          describe: true,
          it: true,
          expect: true,
          berlinClock: true
        }
      },
      gruntfile: {
        src: '<%= jsFiles.gruntfile %>'
      },
      lib_test: {
        src: ['lib/**/*.js', 'spec/**/*.js']
      }
    },
    jasmine: {
        src: '<%= jsFiles.src %>',
        options:{
          specs: '<%= jsFiles.spec %>',
          vendor: '<%= jsFiles.lib %>'
        }
    },
    watch: {
      gruntfile: {
        files: '<%= jsFiles.gruntfile %>',
        tasks: ['jshint:gruntfile']
      },
      lib_test: {
        files: ['<%= jsFiles.src %>', '<%= jsFiles.spec %>'],
        tasks: ['jshint:lib_test', 'jasmine']
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
  grunt.registerTask('default', ['jshint', 'jasmine']);

};
