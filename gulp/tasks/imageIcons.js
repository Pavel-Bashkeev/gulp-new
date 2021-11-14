import { dest, src, watch } from 'gulp';
import config from '../config';

export const iconsBuild = () => (
	src(`${config.src.imgIcons}`)
	.pipe(dest(`${config.dest.imgIcons}`))
);

export const iconsWatch = () => watch(`${config.src.imgIcons}`, iconsBuild);