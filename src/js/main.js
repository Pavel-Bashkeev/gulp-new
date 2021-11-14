import documentReady from "./helpers/documentReady";
import lazyImages from './modules/lazyImages';
import linkSmooth from './components/linkSmooth'
documentReady(()=>{
	console.log('ready');
	lazyImages();
	linkSmooth();
})