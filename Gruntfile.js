module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            width: 2000,
            suffix: '_large_2x',
            quality: 50
          },
              {
                  width: 1600,
                  suffix: '_large_1x',
                  quality: 50
              },
              {
                  width: 800,
                  suffix: '_medium_',
                  quality: 50
              },
              {
                  width: 500,
                  suffix: '_small_',
                  quality: 50
              }]
        },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'images_src/',
          dest: 'images/'
        }]
      }
    },
  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.registerTask('default', ['responsive_images']);

};
