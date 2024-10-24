

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/demo/elements/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.Z9f-CZ2c.js","_app/immutable/chunks/scheduler.CMAS8K-i.js","_app/immutable/chunks/index.CYcreMh9.js"];
export const stylesheets = ["_app/immutable/assets/3.DwDI_Gvc.css"];
export const fonts = [];
