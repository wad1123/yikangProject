~function(){
	var
		gulp = require( 'gulp' ),
		spritesmith = require('gulp.spritesmith');
	gulp.task( 'sprite',function(){
		var spriteData = gulp.src( 'src/img/iconPic/*.png' )
			.pipe( spritesmith( {
				imgName:'sprite.png',
				cssName:'sprite.css'
			} ) );
		return spriteData.pipe( gulp.dest( 'dist/img/' ) );
	} );
}();