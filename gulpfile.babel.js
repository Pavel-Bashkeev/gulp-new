import { series, parallel } from 'gulp';
import clean from './gulp/tasks/clean';
import config from './gulp/config';
import server from './gulp/tasks/server';
import { scriptsBuild, scriptsWatch } from './gulp/tasks/scripts';
import { pugBuild, pugWatch } from './gulp/tasks/pug';
import { stylesBuild, stylesWatch } from './gulp/tasks/styles';
import { assetsBuild, assetsWatch } from './gulp/tasks/assets';
import { fontsBuild, fontsWatch } from './gulp/tasks/fonts';
import { imagesBuild, imagesWatch } from './gulp/tasks/images';
import { iconsBuild, iconsWatch } from './gulp/tasks/imageIcons';

config.setEnv();

export const build = series(
	// clean,
	parallel(
		scriptsBuild,
		pugBuild,
		stylesBuild,
		assetsBuild,
		fontsBuild,
		imagesBuild,
		iconsBuild,
	),
);

export const watch = parallel(
	build,
	server,
	parallel(
		scriptsWatch,
		pugWatch,
		stylesWatch,
		assetsWatch,
		fontsWatch,
		imagesWatch,
		iconsWatch,
	),
);