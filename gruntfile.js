module.exports = function(grunt) {
  const config = {
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      build: {

        src: 'src/**/*.js',
        dest: 'bin/lib.js',
      }
    },

  };


  // Project configuration.
  grunt.initConfig(config);

  grunt.loadNpmTasks('grunt-contrib-concat');

  // Default task(s).

  grunt.registerTask('default', ['concat:build']);


};