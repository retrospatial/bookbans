export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","assets/.DS_Store","assets/data/1_uniquetitles.csv","assets/data/2_risegroups.csv","assets/data/3_timedifferences.csv","assets/data/4_m4lmap.csv","assets/data/5_banmap.csv","assets/data/ban count.csv","assets/data/copy.json","assets/data/google-doc.txt","assets/data/variables.json","assets/images/.DS_Store","assets/images/book_1.png","assets/images/book_10.png","assets/images/book_11.png","assets/images/book_12.png","assets/images/book_13.png","assets/images/book_14.png","assets/images/book_15.png","assets/images/book_16.png","assets/images/book_17.png","assets/images/book_18.png","assets/images/book_19.png","assets/images/book_2.png","assets/images/book_20.png","assets/images/book_21.png","assets/images/book_22.png","assets/images/book_23.png","assets/images/book_24.png","assets/images/book_25.png","assets/images/book_3.png","assets/images/book_4.png","assets/images/book_5.png","assets/images/book_6.png","assets/images/book_7.png","assets/images/book_8.png","assets/images/book_9.png","assets/images/paper.png","assets/images/paper2.png","assets/images/paper3.jpeg","assets/images/paper3.png","assets/svgs/.DS_Store","assets/svgs/book1.svg","assets/svgs/book2.svg","assets/svgs/stack1.svg","assets/svgs/stack2.svg","favicon.ico","styles/app.css","styles/font.css","styles/normalize.css","styles/pudding-reset.css","styles/variables.css"]),
	mimeTypes: {".csv":"text/csv",".json":"application/json",".txt":"text/plain",".png":"image/png",".jpeg":"image/jpeg",".svg":"image/svg+xml",".css":"text/css"},
	_: {
		client: {"start":"_app/immutable/entry/start.DC9-2t2V.js","app":"_app/immutable/entry/app.BCT7DPbg.js","imports":["_app/immutable/entry/start.DC9-2t2V.js","_app/immutable/chunks/entry._3iofbOu.js","_app/immutable/chunks/scheduler.CMAS8K-i.js","_app/immutable/chunks/index.Cqqbkixi.js","_app/immutable/chunks/paths.DeluAlAT.js","_app/immutable/entry/app.BCT7DPbg.js","_app/immutable/chunks/scheduler.CMAS8K-i.js","_app/immutable/chunks/index.CYcreMh9.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
