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
    },
    clean: {
      dist: {
        files: [{
          dot: true,
          src: ['dist']
        }]
      }
    },
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: 'src',
          dest: 'dist',
          src: [
              'signup.html',
              'style.css',
              'images/**',
              'js/**',
          ]
        }]
      }
    },
    replace: {
      dist: {
        options: {
          patterns: [
            {
              match: /<!-- remove -->([\s\S]*)<!-- endremove -->/g,
              replacement: ''
            },
            {
              match: /\{\{\{(\w+)\}\}\}/g,
              replacement: '{{$1}}',
              expression: true
            },
            {
              match: /\{\{static_url\}\}/g,
              replacement: 'http://static.lxls.se/dist',
              expression: true
            }
          ]
        },
        files: [
          {
            src: ['src/theme.mustache'],
            dest: 'dist/theme.mustache'
          }
        ],
        force: true
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-replace');

  grunt.registerTask('default', ['compass']);
  grunt.registerTask('build', [
    'clean:dist',
    'copy',
    'replace'
  ]);

};