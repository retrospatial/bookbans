import * as server from '../entries/pages/_page.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/2.BcYAoMBn.js","_app/immutable/chunks/scheduler.CMAS8K-i.js","_app/immutable/chunks/index.CYcreMh9.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/transform.BlsIJhB7.js","_app/immutable/chunks/index.Cqqbkixi.js"];
export const stylesheets = ["_app/immutable/assets/2.DvNj_dy_.css"];
export const fonts = [];
