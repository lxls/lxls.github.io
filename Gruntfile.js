module.exports = function(grunt) {

  grunt.initConfig({
    compass: {
      src: {
        options: {
          basePath: 'src',
          sassDir: 'sass',
          cssDir: '.',
          watch: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-compass');

  grunt.registerTask('default', ['compass']);

};