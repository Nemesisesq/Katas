module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
    options: {
      curly: true,
      eqeqeq: true,
      eqnull: true,
      browser: true,
      latedef: true,

      globals: {
        jQuery: true,
        test: true,
      },
    },
      uses_defaults: ['spec/**/*.js', 'src/**/*.js'],
    },
    jasmine : {
      src: ['src/**/*.js'],
      options: {
        specs : ['spec/**/*.js'],
        vendor : ['lib/**/*.js']
      }
    },

    watch : {
      scripts: {
        files: ['Gruntfile.js','spec/**/*.js','src/**/*.js'],
        tasks: ['jshint:uses_defaults', 'jasmine'],
        options : {
          spawn: false,
        }
      }
    }

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  //grunt.registerTask('default', ['uglify']);
  grunt.registerTask('default',['jshint', 'jasmine']);

};
