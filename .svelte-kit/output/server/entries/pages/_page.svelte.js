import { c as create_ssr_component, e as escape, b as add_attribute, d as each, n as null_to_empty, v as validate_component, a as subscribe, f as set_store_value, s as setContext, h as add_styles, g as getContext } from "../../chunks/ssr.js";
import * as d3 from "d3";
import { line, curveLinear } from "d3";
import { w as writable, d as derived } from "../../chunks/index.js";
import { InternSet, ascending } from "d3-array";
import { scaleLinear, scaleSqrt, scaleSequential } from "d3-scale";
import { rgb } from "d3-color";
import "topojson-client";
import { geoAlbersUsa, geoPath } from "d3-geo";
import { interpolateBlues, interpolateReds } from "d3-scale-chromatic";
const Meta = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "Book Bans" } = $$props;
  let { description = "Description TK" } = $$props;
  let { url = "https://pudding.cool" } = $$props;
  let { keywords = "" } = $$props;
  let { preloadFont = [] } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0) $$bindings.description(description);
  if ($$props.url === void 0 && $$bindings.url && url !== void 0) $$bindings.url(url);
  if ($$props.keywords === void 0 && $$bindings.keywords && keywords !== void 0) $$bindings.keywords(keywords);
  if ($$props.preloadFont === void 0 && $$bindings.preloadFont && preloadFont !== void 0) $$bindings.preloadFont(preloadFont);
  return `${$$result.head += `<!-- HEAD_svelte-1atvgxk_START -->${$$result.title = `<title>${escape(title)}</title>`, ""}<meta name="description"${add_attribute("content", description, 0)}><meta name="author" content="Citizen Codex"><meta name="news_keywords"${add_attribute("content", keywords, 0)}><meta property="og:title"${add_attribute("content", title, 0)}><meta property="og:site_name" content="Citizen Codex"><meta property="og:url"${add_attribute("content", url, 0)}><meta property="og:description"${add_attribute("content", description, 0)}><meta property="og:type" content="article"><meta property="og:locale" content="en_US"><meta property="og:image" content="${escape(url, true) + "/assets/social-facebook.jpg"}"><meta property="og:image:type" content="image/jpeg"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="628"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:site" content="https://pudding.cool"><meta name="twitter:creator" content="@puddingviz"><meta name="twitter:title"${add_attribute("content", title, 0)}><meta name="twitter:description"${add_attribute("content", description, 0)}><meta name="twitter:image:src" content="${escape(url, true) + "/assets/social-twitter.jpg"}"><meta name="robots" content="max-image-preview:large"><link rel="canonical" href="${escape(url, true) + "/"}">${each(preloadFont, (href) => {
    return `<link rel="preload"${add_attribute("href", href, 0)} as="font" type="font/woff2" crossorigin>`;
  })}<!-- HEAD_svelte-1atvgxk_END -->`, ""}`;
});
const css$h = {
  code: "#intro.svelte-mvouyo{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;max-width:40rem;min-height:100vh;margin:0 auto;text-align:center;margin-top:-60px}#title.svelte-mvouyo{margin:0}#books.svelte-mvouyo{position:relative;height:auto;max-height:100px;margin-bottom:80px}#book1.svelte-mvouyo{position:relative;z-index:1;top:-120px;left:40px}#book2.svelte-mvouyo{position:relative;z-index:0;top:-140px}#headline.svelte-mvouyo{position:relative;z-index:2;margin:0;top:80px}#book-text.svelte-mvouyo{position:relative;z-index:3;top:20px;text-transform:uppercase;font-size:1.5em;left:-20px}#bans-text.svelte-mvouyo{position:relative;z-index:3;left:80px;top:30px;text-transform:uppercase;font-size:1.5em}#subtitle.svelte-mvouyo{margin:0}.subtitle-text.svelte-mvouyo{font-size:18px;padding:0 12px;margin-bottom:50px}#byline.svelte-mvouyo{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;-webkit-box-align:center;align-items:center;width:100%;max-width:40rem;margin-top:16px;border-top:1px dashed #000;border-bottom:1px dashed #000;padding:18px 0}.byline-text.svelte-mvouyo,.byline-date.svelte-mvouyo{font-size:14px;font-weight:500;margin:0;text-transform:uppercase;font-family:'Roboto Mono', monospace}",
  map: `{"version":3,"file":"Title.svelte","sources":["Title.svelte"],"sourcesContent":["<section id=\\"intro\\">\\n\\t<div id=\\"title\\">\\n\\n\\t\\t<h1 id=\\"headline\\">Who's Behind the<br>\\n\\t\\t\\t<span id=\\"book-text\\">Book</span><br>\\n\\t\\t\\t<span id=\\"bans-text\\">Bans?</span></h1>\\n\\n\\t\\t<div id=\\"books\\">\\n\\t\\t\\t<img id=\\"book1\\" src=\\"assets/svgs/book1.svg\\" alt=\\"book1\\" />\\n\\t\\t\\t<img id=\\"book2\\" src=\\"assets/svgs/book2.svg\\" alt=\\"book2\\"/>\\n    \\t</div>\\n\\n\\t</div>\\n\\n\\t<div id=\\"subtitle\\">\\n\\t\\t<p class=\\"subtitle-text\\">We analyze the recent surge in 'parental rights' groups and their growing role in driving local and nationwide book bans.</p>\\n\\n\\t\\t<div id=\\"byline\\">\\n\\t\\t\\t<p class=\\"byline-text\\">By Florina Sutanto</p>\\n\\t\\t\\t<p class=\\"byline-date\\">November 2024</p>\\n\\t\\t</div>\\n\\t</div>\\n\\t\\n</section>\\n\\n<style>\\n    #intro {\\n        display: -webkit-box;\\n        display: flex;\\n        -webkit-box-orient: vertical;\\n        -webkit-box-direction: normal;\\n                flex-direction: column;\\n        -webkit-box-pack: center;\\n                justify-content: center;\\n        -webkit-box-align: center;\\n                align-items: center;\\n        max-width: 40rem;\\n        min-height: 100vh;\\n        margin: 0 auto;\\n        text-align: center;\\n\\t\\tmargin-top: -60px; \\n\\t}\\n    \\t\\n\\t#title {\\n\\t\\tmargin: 0;\\n\\t}\\n\\n\\t#books {\\n\\t\\tposition: relative;\\n\\t\\theight: auto; \\n\\t\\tmax-height: 100px; \\n\\t\\tmargin-bottom: 80px;\\n\\t}\\n\\n    #book1 {\\n        position: relative;\\n        z-index: 1;\\n\\t\\ttop: -120px;\\n        left: 40px;  \\n    }\\n\\n    #book2 {\\n        position: relative;\\n        z-index: 0;\\n\\t\\ttop: -140px;\\n    }\\n\\n    #headline {\\n        position: relative;\\n        z-index: 2;\\n        margin: 0;\\n\\t\\ttop: 80px;\\n    }\\n\\t\\n    #book-text {\\n        position: relative;\\n        z-index: 3;\\n\\t\\ttop: 20px;\\n\\t\\ttext-transform: uppercase;\\n\\t\\tfont-size: 1.5em;\\n\\t\\tleft: -20px;\\n\\t}\\n\\t\\n    #bans-text {\\n        position: relative;\\n        z-index: 3;\\n\\t\\tleft: 80px;\\n\\t\\ttop: 30px;\\n\\t\\ttext-transform: uppercase;\\n\\t\\tfont-size: 1.5em;\\n    } \\n\\n\\t#subtitle {\\n\\t\\tmargin: 0;\\n\\t}\\n\\n\\t.subtitle-text\\n\\t{\\n\\t\\tfont-size: 18px;\\n\\t\\tpadding: 0 12px;\\n\\t\\tmargin-bottom: 50px;\\n\\t}\\n\\n    #byline {\\n        display: -webkit-box;\\n        display: flex;\\n        -webkit-box-pack: justify;\\n                justify-content: space-between;\\n        -webkit-box-align: center;\\n                align-items: center;\\n        width: 100%;\\n        max-width: 40rem;\\n        margin-top: 16px;\\n        border-top: 1px dashed #000;\\n        border-bottom: 1px dashed #000;\\n        padding: 18px 0;\\n    }\\n\\n    .byline-text,\\n    .byline-date {\\n\\t\\tfont-size: 14px;\\n\\t\\tfont-weight: 500;\\n        margin: 0;\\n        text-transform: uppercase;\\n\\t\\tfont-family: 'Roboto Mono', monospace;\\n    }\\n\\n\\t/* @media (max-width: 600px) { \\n        .chart-container {\\n            padding: 1rem;\\n            height: 300px;\\n        }\\n    } */</style>\\n"],"names":[],"mappings":"AA0BI,oBAAO,CACH,OAAO,CAAE,WAAW,CACpB,OAAO,CAAE,IAAI,CACb,kBAAkB,CAAE,QAAQ,CAC5B,qBAAqB,CAAE,MAAM,CACrB,cAAc,CAAE,MAAM,CAC9B,gBAAgB,CAAE,MAAM,CAChB,eAAe,CAAE,MAAM,CAC/B,iBAAiB,CAAE,MAAM,CACjB,WAAW,CAAE,MAAM,CAC3B,SAAS,CAAE,KAAK,CAChB,UAAU,CAAE,KAAK,CACjB,MAAM,CAAE,CAAC,CAAC,IAAI,CACd,UAAU,CAAE,MAAM,CACxB,UAAU,CAAE,KACb,CAEA,oBAAO,CACN,MAAM,CAAE,CACT,CAEA,oBAAO,CACN,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,KAAK,CACjB,aAAa,CAAE,IAChB,CAEG,oBAAO,CACH,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,CAAC,CAChB,GAAG,CAAE,MAAM,CACL,IAAI,CAAE,IACV,CAEA,oBAAO,CACH,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,CAAC,CAChB,GAAG,CAAE,MACH,CAEA,uBAAU,CACN,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,CAAC,CACV,MAAM,CAAE,CAAC,CACf,GAAG,CAAE,IACH,CAEA,wBAAW,CACP,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,CAAC,CAChB,GAAG,CAAE,IAAI,CACT,cAAc,CAAE,SAAS,CACzB,SAAS,CAAE,KAAK,CAChB,IAAI,CAAE,KACP,CAEG,wBAAW,CACP,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,CAAC,CAChB,IAAI,CAAE,IAAI,CACV,GAAG,CAAE,IAAI,CACT,cAAc,CAAE,SAAS,CACzB,SAAS,CAAE,KACT,CAEH,uBAAU,CACT,MAAM,CAAE,CACT,CAEA,4BACA,CACC,SAAS,CAAE,IAAI,CACf,OAAO,CAAE,CAAC,CAAC,IAAI,CACf,aAAa,CAAE,IAChB,CAEG,qBAAQ,CACJ,OAAO,CAAE,WAAW,CACpB,OAAO,CAAE,IAAI,CACb,gBAAgB,CAAE,OAAO,CACjB,eAAe,CAAE,aAAa,CACtC,iBAAiB,CAAE,MAAM,CACjB,WAAW,CAAE,MAAM,CAC3B,KAAK,CAAE,IAAI,CACX,SAAS,CAAE,KAAK,CAChB,UAAU,CAAE,IAAI,CAChB,UAAU,CAAE,GAAG,CAAC,MAAM,CAAC,IAAI,CAC3B,aAAa,CAAE,GAAG,CAAC,MAAM,CAAC,IAAI,CAC9B,OAAO,CAAE,IAAI,CAAC,CAClB,CAEA,0BAAY,CACZ,0BAAa,CACf,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,GAAG,CACV,MAAM,CAAE,CAAC,CACT,cAAc,CAAE,SAAS,CAC/B,WAAW,CAAE,aAAa,CAAC,CAAC,SAC1B"}`
};
const Title = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$h);
  return `<section id="intro" class="svelte-mvouyo" data-svelte-h="svelte-1a24c40"><div id="title" class="svelte-mvouyo"><h1 id="headline" class="svelte-mvouyo">Who&#39;s Behind the<br> <span id="book-text" class="svelte-mvouyo">Book</span><br> <span id="bans-text" class="svelte-mvouyo">Bans?</span></h1> <div id="books" class="svelte-mvouyo"><img id="book1" src="assets/svgs/book1.svg" alt="book1" class="svelte-mvouyo"> <img id="book2" src="assets/svgs/book2.svg" alt="book2" class="svelte-mvouyo"></div></div> <div id="subtitle" class="svelte-mvouyo"><p class="subtitle-text svelte-mvouyo">We analyze the recent surge in &#39;parental rights&#39; groups and their growing role in driving local and nationwide book bans.</p> <div id="byline" class="svelte-mvouyo"><p class="byline-text svelte-mvouyo">By Florina Sutanto</p> <p class="byline-date svelte-mvouyo">November 2024</p></div></div> </section>`;
});
const Scrolly = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { root = null } = $$props;
  let { top = 0 } = $$props;
  let { bottom = 0 } = $$props;
  let { increments = 100 } = $$props;
  let { value = void 0 } = $$props;
  const steps = [];
  const threshold = [];
  let nodes = [];
  let intersectionObservers = [];
  let container;
  const update = () => {
    if (!nodes.length) return;
    nodes.forEach(createObserver);
  };
  const mostInView = () => {
    let maxRatio = 0;
    let maxIndex = 0;
    for (let i = 0; i < steps.length; i++) {
      if (steps[i] > maxRatio) {
        maxRatio = steps[i];
        maxIndex = i;
      }
    }
    if (maxRatio > 0) value = maxIndex;
    else value = void 0;
  };
  const createObserver = (node, index) => {
    const handleIntersect = (e) => {
      e[0].isIntersecting;
      const ratio = e[0].intersectionRatio;
      steps[index] = ratio;
      mostInView();
    };
    const marginTop = top ? top * -1 : 0;
    const marginBottom = bottom ? bottom * -1 : 0;
    const rootMargin = `${marginTop}px 0px ${marginBottom}px 0px`;
    const options = { root, rootMargin, threshold };
    if (intersectionObservers[index]) intersectionObservers[index].disconnect();
    const io = new IntersectionObserver(handleIntersect, options);
    io.observe(node);
    intersectionObservers[index] = io;
  };
  if ($$props.root === void 0 && $$bindings.root && root !== void 0) $$bindings.root(root);
  if ($$props.top === void 0 && $$bindings.top && top !== void 0) $$bindings.top(top);
  if ($$props.bottom === void 0 && $$bindings.bottom && bottom !== void 0) $$bindings.bottom(bottom);
  if ($$props.increments === void 0 && $$bindings.increments && increments !== void 0) $$bindings.increments(increments);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  {
    update();
  }
  return `<div${add_attribute("this", container, 0)}>${slots.default ? slots.default({}) : ``}</div>`;
});
const css$g = {
  code: "#books-array.svelte-1e7k98b{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;width:100%;position:relative;-webkit-box-align:center;align-items:center;max-height:100vh;margin:32px auto;padding-top:32px}.books-container.svelte-1e7k98b,.fade-container.svelte-1e7k98b{display:grid;grid-template-columns:repeat(5, 1fr);gap:1rem;width:100%;padding-bottom:1rem;justify-items:center;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}.book-image.svelte-1e7k98b,.book-image-fade.svelte-1e7k98b{height:15vh;width:auto;border-radius:5px;-o-object-fit:cover;object-fit:cover;opacity:0;-webkit-transform:translateY(20px);transform:translateY(20px);-webkit-transition:opacity 0.5s ease-out, -webkit-transform 0.5s ease-out;transition:opacity 0.5s ease-out, -webkit-transform 0.5s ease-out;transition:opacity 0.5s ease-out, transform 0.5s ease-out;transition:opacity 0.5s ease-out, transform 0.5s ease-out, -webkit-transform 0.5s ease-out;padding:0;margin:0}@-webkit-keyframes svelte-1e7k98b-fadeInUp{from{opacity:0;-webkit-transform:translateY(20px);transform:translateY(20px)}to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes svelte-1e7k98b-fadeInUp{from{opacity:0;-webkit-transform:translateY(20px);transform:translateY(20px)}to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}.fade-in.svelte-1e7k98b{opacity:1;-webkit-transform:translateY(0);transform:translateY(0);-webkit-transition:opacity 0.5s ease-out, -webkit-transform 0.5s ease-out;transition:opacity 0.5s ease-out, -webkit-transform 0.5s ease-out;transition:opacity 0.5s ease-out, transform 0.5s ease-out;transition:opacity 0.5s ease-out, transform 0.5s ease-out, -webkit-transform 0.5s ease-out}.book-image-fade.svelte-1e7k98b{-webkit-animation:svelte-1e7k98b-fadeInUp 0.5s ease-out forwards;animation:svelte-1e7k98b-fadeInUp 0.5s ease-out forwards}.fade-container.svelte-1e7k98b{flex-wrap:wrap;-webkit-box-pack:justify;justify-content:space-between;width:100%}",
  map: '{"version":3,"file":"Books.svelte","sources":["Books.svelte"],"sourcesContent":["<script>\\n    import { onMount } from \'svelte\';\\n\\n    export let scrollIndex;\\n\\n    // Generate book images for the first five books\\n    const bookImages = Array.from({ length: 5 }, (_, i) => `book_${i + 1}.png`);\\n\\n    // Generate book images for books 6 to 25\\n    const bookImagesFade = Array.from({ length: 20 }, (_, i) => `book_${i + 6}.png`); \\n\\n    let imagesLoaded = false;\\n\\n    // Function to preload images\\n    function preloadImages(imageArray) {\\n        return Promise.all(\\n            imageArray.map(image => {\\n                return new Promise((resolve) => {\\n                    const img = new Image();\\n                    img.src = `/assets/images/${image}`;\\n                    img.onload = () => resolve();\\n                    img.onerror = () => resolve(); // Resolve even on error to avoid blocking\\n                });\\n            })\\n        );\\n    }\\n\\n    onMount(async () => {\\n        const allImages = [...bookImages, ...bookImagesFade];\\n        await preloadImages(allImages);\\n        imagesLoaded = true;\\n    });\\n<\/script>\\n\\n<section id=\\"books-array\\" class:imagesLoaded={imagesLoaded}>\\n    <div class=\\"books-container\\">\\n        {#each bookImages as image, index}\\n            <img \\n                src={`/assets/images/${image}`} \\n                alt={`Book ${index + 1}`} \\n                class={`book-image ${scrollIndex >= index ? \'fade-in\' : \'\'}`} \\n            />\\n        {/each}\\n    </div>\\n\\n    <div class=\\"fade-container\\">\\n        {#if scrollIndex >= 5}\\n            {#each bookImagesFade as image, index}\\n                <img \\n                    src={`/assets/images/${image}`}\\n                    alt={`Book ${index + 6}`}\\n                    class=\\"book-image book-image-fade\\"\\n                    style=\\"animation-delay: {index * 0.1}s;\\"\\n                />    \\n            {/each}\\n        {/if}\\n    </div>\\n</section>\\n\\n<style>\\n    #books-array {\\n        display: -webkit-box;\\n        display: flex;\\n        -webkit-box-orient: vertical;\\n        -webkit-box-direction: normal;\\n                flex-direction: column;\\n        width: 100%;\\n        position: relative;\\n        -webkit-box-align: center;\\n                align-items: center;\\n        max-height: 100vh;\\n        margin: 32px auto;  \\n\\t\\tpadding-top: 32px;  \\n    }\\n\\n    .imagesLoaded #books-array {\\n        visibility: visible; \\n        \\n    }\\n\\n    .books-container, .fade-container {\\n        display: grid;\\n        grid-template-columns: repeat(5, 1fr);\\n        gap: 1rem;\\n        width: 100%;\\n        padding-bottom: 1rem;\\n        justify-items: center;\\n        -webkit-box-pack: center;\\n                justify-content: center;\\n        -webkit-box-align: center;\\n                align-items: center;\\n    }\\n\\n    .book-image, .book-image-fade {\\n        height: 15vh; \\n        width: auto; \\n        border-radius: 5px;\\n        -o-object-fit: cover;\\n           object-fit: cover; \\n        opacity: 0;\\n        -webkit-transform: translateY(20px);\\n                transform: translateY(20px);\\n        -webkit-transition: opacity 0.5s ease-out, -webkit-transform 0.5s ease-out;\\n        transition: opacity 0.5s ease-out, -webkit-transform 0.5s ease-out;\\n        transition: opacity 0.5s ease-out, transform 0.5s ease-out;\\n        transition: opacity 0.5s ease-out, transform 0.5s ease-out, -webkit-transform 0.5s ease-out;\\n        padding: 0;\\n        margin: 0;\\n    }\\n\\n    @-webkit-keyframes fadeInUp {\\n        from {\\n            opacity: 0;\\n            -webkit-transform: translateY(20px);\\n                    transform: translateY(20px);\\n        }\\n        to {\\n            opacity: 1;\\n            -webkit-transform: translateY(0);\\n                    transform: translateY(0);\\n        }\\n    }\\n\\n    @keyframes fadeInUp {\\n        from {\\n            opacity: 0;\\n            -webkit-transform: translateY(20px);\\n                    transform: translateY(20px);\\n        }\\n        to {\\n            opacity: 1;\\n            -webkit-transform: translateY(0);\\n                    transform: translateY(0);\\n        }\\n    }\\n\\n    .fade-in {\\n        opacity: 1;\\n        -webkit-transform: translateY(0);\\n                transform: translateY(0);\\n        -webkit-transition: opacity 0.5s ease-out, -webkit-transform 0.5s ease-out;\\n        transition: opacity 0.5s ease-out, -webkit-transform 0.5s ease-out;\\n        transition: opacity 0.5s ease-out, transform 0.5s ease-out;\\n        transition: opacity 0.5s ease-out, transform 0.5s ease-out, -webkit-transform 0.5s ease-out;\\n    }\\n\\n    .book-image-fade {\\n        -webkit-animation: fadeInUp 0.5s ease-out forwards;\\n                animation: fadeInUp 0.5s ease-out forwards;\\n    }\\n\\n    .fade-container {\\n        flex-wrap: wrap;\\n        -webkit-box-pack: justify;\\n                justify-content: space-between;\\n        width: 100%;\\n    }\\n\\n    /* @media (max-width: 600px) {\\n        .books-container, .fade-container {\\n            grid-template-columns: repeat(2, 1fr); \\n        }\\n\\n        .book-image, .book-image-fade {\\n            height: 22vh;\\n        }\\n    } */</style>\\n"],"names":[],"mappings":"AA4DI,2BAAa,CACT,OAAO,CAAE,WAAW,CACpB,OAAO,CAAE,IAAI,CACb,kBAAkB,CAAE,QAAQ,CAC5B,qBAAqB,CAAE,MAAM,CACrB,cAAc,CAAE,MAAM,CAC9B,KAAK,CAAE,IAAI,CACX,QAAQ,CAAE,QAAQ,CAClB,iBAAiB,CAAE,MAAM,CACjB,WAAW,CAAE,MAAM,CAC3B,UAAU,CAAE,KAAK,CACjB,MAAM,CAAE,IAAI,CAAC,IAAI,CACvB,WAAW,CAAE,IACX,CAOA,+BAAgB,CAAE,8BAAgB,CAC9B,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,OAAO,CAAC,CAAC,CAAC,GAAG,CAAC,CACrC,GAAG,CAAE,IAAI,CACT,KAAK,CAAE,IAAI,CACX,cAAc,CAAE,IAAI,CACpB,aAAa,CAAE,MAAM,CACrB,gBAAgB,CAAE,MAAM,CAChB,eAAe,CAAE,MAAM,CAC/B,iBAAiB,CAAE,MAAM,CACjB,WAAW,CAAE,MACzB,CAEA,0BAAW,CAAE,+BAAiB,CAC1B,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,CACX,aAAa,CAAE,GAAG,CAClB,aAAa,CAAE,KAAK,CACjB,UAAU,CAAE,KAAK,CACpB,OAAO,CAAE,CAAC,CACV,iBAAiB,CAAE,WAAW,IAAI,CAAC,CAC3B,SAAS,CAAE,WAAW,IAAI,CAAC,CACnC,kBAAkB,CAAE,OAAO,CAAC,IAAI,CAAC,QAAQ,CAAC,CAAC,iBAAiB,CAAC,IAAI,CAAC,QAAQ,CAC1E,UAAU,CAAE,OAAO,CAAC,IAAI,CAAC,QAAQ,CAAC,CAAC,iBAAiB,CAAC,IAAI,CAAC,QAAQ,CAClE,UAAU,CAAE,OAAO,CAAC,IAAI,CAAC,QAAQ,CAAC,CAAC,SAAS,CAAC,IAAI,CAAC,QAAQ,CAC1D,UAAU,CAAE,OAAO,CAAC,IAAI,CAAC,QAAQ,CAAC,CAAC,SAAS,CAAC,IAAI,CAAC,QAAQ,CAAC,CAAC,iBAAiB,CAAC,IAAI,CAAC,QAAQ,CAC3F,OAAO,CAAE,CAAC,CACV,MAAM,CAAE,CACZ,CAEA,mBAAmB,uBAAS,CACxB,IAAK,CACD,OAAO,CAAE,CAAC,CACV,iBAAiB,CAAE,WAAW,IAAI,CAAC,CAC3B,SAAS,CAAE,WAAW,IAAI,CACtC,CACA,EAAG,CACC,OAAO,CAAE,CAAC,CACV,iBAAiB,CAAE,WAAW,CAAC,CAAC,CACxB,SAAS,CAAE,WAAW,CAAC,CACnC,CACJ,CAEA,WAAW,uBAAS,CAChB,IAAK,CACD,OAAO,CAAE,CAAC,CACV,iBAAiB,CAAE,WAAW,IAAI,CAAC,CAC3B,SAAS,CAAE,WAAW,IAAI,CACtC,CACA,EAAG,CACC,OAAO,CAAE,CAAC,CACV,iBAAiB,CAAE,WAAW,CAAC,CAAC,CACxB,SAAS,CAAE,WAAW,CAAC,CACnC,CACJ,CAEA,uBAAS,CACL,OAAO,CAAE,CAAC,CACV,iBAAiB,CAAE,WAAW,CAAC,CAAC,CACxB,SAAS,CAAE,WAAW,CAAC,CAAC,CAChC,kBAAkB,CAAE,OAAO,CAAC,IAAI,CAAC,QAAQ,CAAC,CAAC,iBAAiB,CAAC,IAAI,CAAC,QAAQ,CAC1E,UAAU,CAAE,OAAO,CAAC,IAAI,CAAC,QAAQ,CAAC,CAAC,iBAAiB,CAAC,IAAI,CAAC,QAAQ,CAClE,UAAU,CAAE,OAAO,CAAC,IAAI,CAAC,QAAQ,CAAC,CAAC,SAAS,CAAC,IAAI,CAAC,QAAQ,CAC1D,UAAU,CAAE,OAAO,CAAC,IAAI,CAAC,QAAQ,CAAC,CAAC,SAAS,CAAC,IAAI,CAAC,QAAQ,CAAC,CAAC,iBAAiB,CAAC,IAAI,CAAC,QACvF,CAEA,+BAAiB,CACb,iBAAiB,CAAE,uBAAQ,CAAC,IAAI,CAAC,QAAQ,CAAC,QAAQ,CAC1C,SAAS,CAAE,uBAAQ,CAAC,IAAI,CAAC,QAAQ,CAAC,QAC9C,CAEA,8BAAgB,CACZ,SAAS,CAAE,IAAI,CACf,gBAAgB,CAAE,OAAO,CACjB,eAAe,CAAE,aAAa,CACtC,KAAK,CAAE,IACX"}'
};
const Books = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { scrollIndex } = $$props;
  const bookImages = Array.from({ length: 5 }, (_, i) => `book_${i + 1}.png`);
  const bookImagesFade = Array.from({ length: 20 }, (_, i) => `book_${i + 6}.png`);
  if ($$props.scrollIndex === void 0 && $$bindings.scrollIndex && scrollIndex !== void 0) $$bindings.scrollIndex(scrollIndex);
  $$result.css.add(css$g);
  return `<section id="books-array" class="${["svelte-1e7k98b", ""].join(" ").trim()}"><div class="books-container svelte-1e7k98b">${each(bookImages, (image, index) => {
    return `<img${add_attribute("src", `/assets/images/${image}`, 0)}${add_attribute("alt", `Book ${index + 1}`, 0)} class="${escape(null_to_empty(`book-image ${scrollIndex >= index ? "fade-in" : ""}`), true) + " svelte-1e7k98b"}">`;
  })}</div> <div class="fade-container svelte-1e7k98b">${scrollIndex >= 5 ? `${each(bookImagesFade, (image, index) => {
    return `<img${add_attribute("src", `/assets/images/${image}`, 0)}${add_attribute("alt", `Book ${index + 6}`, 0)} class="book-image book-image-fade svelte-1e7k98b" style="${"animation-delay: " + escape(index * 0.1, true) + "s;"}">`;
  })}` : ``}</div> </section>`;
});
const css$f = {
  code: "#scrolly.svelte-1aowjwd{position:relative;z-index:1000}.sticky.svelte-1aowjwd{position:sticky;top:0;-webkit-transition:all 1s;transition:all 1s;min-height:100vh;max-width:40rem;width:100%;margin:0 auto;z-index:1;overflow-x:hidden;pointer-events:none;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center}.spacer.svelte-1aowjwd{height:75vh}.step.svelte-1aowjwd{height:100vh;text-align:center;z-index:1000;max-width:30rem;margin:0 auto;pointer-events:none;position:relative}.step-inner.svelte-1aowjwd{padding:1rem;background-color:white;border:1px solid black}.step .strong{color:black}.step{color:black;font-family:var(--sans);font-weight:700;padding:0.25rem}@media(max-width: 600px){}",
  map: `{"version":3,"file":"IntroScrolly.svelte","sources":["IntroScrolly.svelte"],"sourcesContent":["<script>\\n\\timport { getContext } from \\"svelte\\";\\n\\timport Scrolly from \\"$components/helpers/Scrolly.svelte\\";\\n\\timport Books from \\"$components/bookbans/Books.svelte\\";\\n\\n\\tconst copy = [\\n\\t\\t{ value: \\"Ever read a Judy Blume book? Or seen snapshots of Rupi Kaur’s short poems and minimalist art off her viral poetry collection Milk and Honey?\\" },\\n\\t\\t{ value: \\"If you’re a student in Utah, you might be out of luck. The state recently banned 13 books, including those by the two authors, from all public school libraries and classrooms under a new law mandating the removal of books containing 'pornographic or indecent' material.\\" },\\n\\t\\t{ value: \\"Utah follows Florida and Texas in implementing state laws that accelerate book bans, an issue that has recently surged in unprecedented rates.\\" },\\n\\t\\t{ value: \\"Not neat, isn't it?\\" },\\n\\t\\t{ value: \\"Sooooo many books.\\" },\\n\\t\\t{ value: \\"Here's all of the rest.\\" },\\n\\t];\\n\\n\\tlet scrollIndex;\\n\\tlet steps = [0, 1, 2, 3, 4, 5];\\n<\/script>\\n\\n<section id=\\"scrolly\\">\\n\\t<div class=\\"sticky\\">\\n\\t\\t<Books scrollIndex={scrollIndex} />\\n\\t</div>\\n\\t<Scrolly bind:value={scrollIndex}>\\n\\t\\t{#if copy.length > 0}\\n\\t\\t\\t{#each copy as text, i}\\n\\t\\t\\t\\t<div class=\\"step\\">\\n\\t\\t\\t\\t\\t<div class=\\"step-inner\\">\\n\\t\\t\\t\\t\\t\\t<p>{@html text.value}</p>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t{/each}\\n\\t\\t{/if}\\n\\t</Scrolly>\\n\\t<div class=\\"spacer\\" />\\n</section>\\n\\n<style>\\n\\t#scrolly {\\n\\t\\tposition: relative;\\n\\t\\tz-index: 1000;\\n\\t}\\n\\t.sticky {\\n\\t\\tposition: sticky;\\n\\t\\ttop: 0;\\n\\t\\t-webkit-transition: all 1s;\\n\\t\\ttransition: all 1s;\\n\\t\\tmin-height: 100vh;\\n\\t\\tmax-width: 40rem;\\n\\t\\twidth: 100%;\\n\\t\\tmargin: 0 auto;  \\n\\t\\tz-index: 1;\\n\\t\\toverflow-x: hidden;\\n\\t\\tpointer-events: none;\\n\\t\\tdisplay: -webkit-box;\\n\\t\\tdisplay: flex;\\n\\t\\t-webkit-box-pack: center;\\n\\t\\t        justify-content: center;\\n\\t}\\n\\t.spacer {\\n\\t\\theight: 75vh;\\n\\t}\\n\\t.step {\\n\\t\\theight: 100vh;\\n\\t\\ttext-align: center;\\n\\t\\tz-index: 1000;\\n\\t\\tmax-width: 30rem;\\n\\t\\tmargin: 0 auto;\\n\\t\\tpointer-events: none;\\n\\t\\tposition: relative;\\n\\t}\\n\\n\\t.step-inner {\\n\\t\\tpadding: 1rem;\\n\\t\\tbackground-color: white;\\n\\t\\tborder: 1px solid black;\\n\\t}\\n\\n\\t:global(.step .strong) {\\n\\t\\tcolor: black;\\n\\t}\\n\\n\\t:global(.step) {\\n\\t\\tcolor: black;\\n\\t\\tfont-family: var(--sans);\\n\\t\\tfont-weight: 700;\\n\\t\\tpadding: 0.25rem;\\n\\t}\\n\\n\\t@media (max-width: 600px) {\\n\\t\\t/* Add responsive styles here if needed */\\n\\t}</style>"],"names":[],"mappings":"AAqCC,uBAAS,CACR,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,IACV,CACA,sBAAQ,CACP,QAAQ,CAAE,MAAM,CAChB,GAAG,CAAE,CAAC,CACN,kBAAkB,CAAE,GAAG,CAAC,EAAE,CAC1B,UAAU,CAAE,GAAG,CAAC,EAAE,CAClB,UAAU,CAAE,KAAK,CACjB,SAAS,CAAE,KAAK,CAChB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,CAAC,CAAC,IAAI,CACd,OAAO,CAAE,CAAC,CACV,UAAU,CAAE,MAAM,CAClB,cAAc,CAAE,IAAI,CACpB,OAAO,CAAE,WAAW,CACpB,OAAO,CAAE,IAAI,CACb,gBAAgB,CAAE,MAAM,CAChB,eAAe,CAAE,MAC1B,CACA,sBAAQ,CACP,MAAM,CAAE,IACT,CACA,oBAAM,CACL,MAAM,CAAE,KAAK,CACb,UAAU,CAAE,MAAM,CAClB,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,KAAK,CAChB,MAAM,CAAE,CAAC,CAAC,IAAI,CACd,cAAc,CAAE,IAAI,CACpB,QAAQ,CAAE,QACX,CAEA,0BAAY,CACX,OAAO,CAAE,IAAI,CACb,gBAAgB,CAAE,KAAK,CACvB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,KACnB,CAEQ,aAAe,CACtB,KAAK,CAAE,KACR,CAEQ,KAAO,CACd,KAAK,CAAE,KAAK,CACZ,WAAW,CAAE,IAAI,MAAM,CAAC,CACxB,WAAW,CAAE,GAAG,CAChB,OAAO,CAAE,OACV,CAEA,MAAO,YAAY,KAAK,CAAE,CAE1B"}`
};
const IntroScrolly = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const copy2 = [
    {
      value: "Ever read a Judy Blume book? Or seen snapshots of Rupi Kaur’s short poems and minimalist art off her viral poetry collection Milk and Honey?"
    },
    {
      value: "If you’re a student in Utah, you might be out of luck. The state recently banned 13 books, including those by the two authors, from all public school libraries and classrooms under a new law mandating the removal of books containing 'pornographic or indecent' material."
    },
    {
      value: "Utah follows Florida and Texas in implementing state laws that accelerate book bans, an issue that has recently surged in unprecedented rates."
    },
    { value: "Not neat, isn't it?" },
    { value: "Sooooo many books." },
    { value: "Here's all of the rest." }
  ];
  let scrollIndex;
  $$result.css.add(css$f);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<section id="scrolly" class="svelte-1aowjwd"><div class="sticky svelte-1aowjwd">${validate_component(Books, "Books").$$render($$result, { scrollIndex }, {}, {})}</div> ${validate_component(Scrolly, "Scrolly").$$render(
      $$result,
      { value: scrollIndex },
      {
        value: ($$value) => {
          scrollIndex = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${copy2.length > 0 ? `${each(copy2, (text, i) => {
            return `<div class="step svelte-1aowjwd"><div class="step-inner svelte-1aowjwd"><p><!-- HTML_TAG_START -->${text.value}<!-- HTML_TAG_END --></p></div> </div>`;
          })}` : ``}`;
        }
      }
    )} <div class="spacer svelte-1aowjwd"></div> </section>`;
  } while (!$$settled);
  return $$rendered;
});
const css$e = {
  code: "#section1.svelte-1jnc8w{background-image:url('/assets/images/paper3.png');background-size:100%;background-repeat:repeat;background-position:center;padding:0;margin:0 auto}",
  map: `{"version":3,"file":"Section1.svelte","sources":["Section1.svelte"],"sourcesContent":["<script>\\n\\timport Title from \\"$components/bookbans/Title.svelte\\";\\n\\timport IntroScrolly from \\"$components/bookbans/IntroScrolly.svelte\\";\\n<\/script>\\n\\n<div id=\\"section1\\">\\n\\t<Title />\\n\\t<IntroScrolly />\\n</div>\\n\\n<style>\\n\\t#section1 {\\n\\t\\tbackground-image: url('/assets/images/paper3.png');\\n\\t\\tbackground-size: 100%; \\n\\t\\tbackground-repeat: repeat; \\n\\t\\tbackground-position: center; \\n\\t\\tpadding: 0;      \\n\\t\\tmargin: 0 auto; \\n\\t}</style>\\n"],"names":[],"mappings":"AAWC,uBAAU,CACT,gBAAgB,CAAE,gCAAgC,CAClD,eAAe,CAAE,IAAI,CACrB,iBAAiB,CAAE,MAAM,CACzB,mBAAmB,CAAE,MAAM,CAC3B,OAAO,CAAE,CAAC,CACV,MAAM,CAAE,CAAC,CAAC,IACX"}`
};
const Section1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$e);
  return `<div id="section1" class="svelte-1jnc8w">${validate_component(Title, "Title").$$render($$result, {}, {}, {})} ${validate_component(IntroScrolly, "IntroScrolly").$$render($$result, {}, {}, {})} </div>`;
});
function canBeZero(val) {
  if (val === 0) {
    return true;
  }
  return val;
}
function makeAccessor(acc) {
  if (!canBeZero(acc)) return null;
  if (Array.isArray(acc)) {
    return (d) => acc.map((k) => {
      return typeof k !== "function" ? d[k] : k(d);
    });
  } else if (typeof acc !== "function") {
    return (d) => d[acc];
  }
  return acc;
}
function filterObject(obj, comparisonObj = {}) {
  return Object.fromEntries(
    Object.entries(obj).filter(([key, value]) => {
      return value !== void 0 && comparisonObj[key] === void 0;
    })
  );
}
function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}
function calcUniques(data, fields, sortOptions = {}) {
  if (!Array.isArray(data)) {
    throw new TypeError(
      `The first argument of calcUniques() must be an array. You passed in a ${typeof data}. If you got this error using the <LayerCake> component, consider passing a flat array to the \`flatData\` prop. More info: https://layercake.graphics/guide/#flatdata`
    );
  }
  if (Array.isArray(fields) || fields === void 0 || fields === null) {
    throw new TypeError(
      "The second argument of calcUniques() must be an object with field names as keys as accessor functions as values."
    );
  }
  const uniques = {};
  const keys = Object.keys(fields);
  const kl = keys.length;
  let i;
  let j;
  let k;
  let s;
  let acc;
  let val;
  let set;
  const dl = data.length;
  for (i = 0; i < kl; i += 1) {
    set = new InternSet();
    s = keys[i];
    acc = fields[s];
    for (j = 0; j < dl; j += 1) {
      val = acc(data[j]);
      if (Array.isArray(val)) {
        const vl = val.length;
        for (k = 0; k < vl; k += 1) {
          set.add(val[k]);
        }
      } else {
        set.add(val);
      }
    }
    const results = Array.from(set);
    if (sortOptions.sort === true || sortOptions[s] === true) {
      results.sort(ascending);
    }
    uniques[s] = results;
  }
  return uniques;
}
function calcExtents(data, fields) {
  if (!Array.isArray(data)) {
    throw new TypeError(
      `The first argument of calcExtents() must be an array. You passed in a ${typeof data}. If you got this error using the <LayerCake> component, consider passing a flat array to the \`flatData\` prop. More info: https://layercake.graphics/guide/#flatdata`
    );
  }
  if (Array.isArray(fields) || fields === void 0 || fields === null) {
    throw new TypeError(
      "The second argument of calcExtents() must be an object with field names as keys as accessor functions as values."
    );
  }
  const extents = {};
  const keys = Object.keys(fields);
  const kl = keys.length;
  let i;
  let j;
  let k;
  let s;
  let min;
  let max;
  let acc;
  let val;
  const dl = data.length;
  for (i = 0; i < kl; i += 1) {
    s = keys[i];
    acc = fields[s];
    min = null;
    max = null;
    for (j = 0; j < dl; j += 1) {
      val = acc(data[j], j);
      if (Array.isArray(val)) {
        const vl = val.length;
        for (k = 0; k < vl; k += 1) {
          if (val[k] !== false && val[k] !== void 0 && val[k] !== null && Number.isNaN(val[k]) === false) {
            if (min === null || val[k] < min) {
              min = val[k];
            }
            if (max === null || val[k] > max) {
              max = val[k];
            }
          }
        }
      } else if (val !== false && val !== void 0 && val !== null && Number.isNaN(val) === false) {
        if (min === null || val < min) {
          min = val;
        }
        if (max === null || val > max) {
          max = val;
        }
      }
    }
    extents[s] = [min, max];
  }
  return extents;
}
function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  return arr1.every((k) => {
    return arr2.includes(k);
  });
}
function isOrdinalDomain(scale) {
  if (typeof scale.bandwidth === "function") {
    return true;
  }
  if (arraysEqual(Object.keys(scale), ["domain", "range", "unknown", "copy"])) {
    return true;
  }
  return false;
}
function calcScaleExtents(flatData, getters, activeScales) {
  const scaleGroups = Object.entries(activeScales).reduce(
    (groups, [k, scaleInfo]) => {
      const domainType = isOrdinalDomain(scaleInfo.scale) === true ? "ordinal" : "other";
      if (!groups[domainType]) groups[domainType] = {};
      groups[domainType][k] = getters[k];
      return groups;
    },
    { ordinal: false, other: false }
  );
  let extents = {};
  if (scaleGroups.ordinal) {
    const sortOptions = Object.fromEntries(
      Object.entries(activeScales).map(([k, scaleInfo]) => {
        return [k, scaleInfo.sort];
      })
    );
    extents = calcUniques(flatData, scaleGroups.ordinal, sortOptions);
  }
  if (scaleGroups.other) {
    extents = { ...extents, ...calcExtents(flatData, scaleGroups.other) };
  }
  return extents;
}
function partialDomain(domain = [], directive) {
  if (Array.isArray(directive) === true) {
    return directive.map((d, i) => {
      if (d === null) {
        return domain[i];
      }
      return d;
    });
  }
  return domain;
}
function calcDomain(s) {
  return function domainCalc([$extents, $domain]) {
    if (typeof $domain === "function") {
      $domain = $domain($extents[s]);
    }
    return $extents ? partialDomain($extents[s], $domain) : $domain;
  };
}
const defaultScales = {
  x: scaleLinear,
  y: scaleLinear,
  z: scaleLinear,
  r: scaleSqrt
};
function findScaleType(scale) {
  if (scale.constant) {
    return "symlog";
  }
  if (scale.base) {
    return "log";
  }
  if (scale.exponent) {
    if (scale.exponent() === 0.5) {
      return "sqrt";
    }
    return "pow";
  }
  return "other";
}
function identity(d) {
  return d;
}
function log(sign) {
  return (x) => Math.log(sign * x);
}
function exp(sign) {
  return (x) => sign * Math.exp(x);
}
function symlog(c) {
  return (x) => Math.sign(x) * Math.log1p(Math.abs(x / c));
}
function symexp(c) {
  return (x) => Math.sign(x) * Math.expm1(Math.abs(x)) * c;
}
function pow(exponent) {
  return function powFn(x) {
    return x < 0 ? -Math.pow(-x, exponent) : Math.pow(x, exponent);
  };
}
function getPadFunctions(scale) {
  const scaleType = findScaleType(scale);
  if (scaleType === "log") {
    const sign = Math.sign(scale.domain()[0]);
    return { lift: log(sign), ground: exp(sign), scaleType };
  }
  if (scaleType === "pow") {
    const exponent = 1;
    return { lift: pow(exponent), ground: pow(1 / exponent), scaleType };
  }
  if (scaleType === "sqrt") {
    const exponent = 0.5;
    return { lift: pow(exponent), ground: pow(1 / exponent), scaleType };
  }
  if (scaleType === "symlog") {
    const constant = 1;
    return { lift: symlog(constant), ground: symexp(constant), scaleType };
  }
  return { lift: identity, ground: identity, scaleType };
}
function toTitleCase(str) {
  return str.replace(/^\w/, (d) => d.toUpperCase());
}
function f(name, modifier = "") {
  return `scale${toTitleCase(modifier)}${toTitleCase(name)}`;
}
function findScaleName(scale) {
  if (typeof scale.bandwidth === "function") {
    if (typeof scale.paddingInner === "function") {
      return f("band");
    }
    return f("point");
  }
  if (arraysEqual(Object.keys(scale), ["domain", "range", "unknown", "copy"])) {
    return f("ordinal");
  }
  let modifier = "";
  if (scale.interpolator) {
    if (scale.domain().length === 3) {
      modifier = "diverging";
    } else {
      modifier = "sequential";
    }
  }
  if (scale.quantiles) {
    return f("quantile", modifier);
  }
  if (scale.thresholds) {
    return f("quantize", modifier);
  }
  if (scale.constant) {
    return f("symlog", modifier);
  }
  if (scale.base) {
    return f("log", modifier);
  }
  if (scale.exponent) {
    if (scale.exponent() === 0.5) {
      return f("sqrt", modifier);
    }
    return f("pow", modifier);
  }
  if (arraysEqual(Object.keys(scale), ["domain", "range", "invertExtent", "unknown", "copy"])) {
    return f("threshold");
  }
  if (arraysEqual(Object.keys(scale), [
    "invert",
    "range",
    "domain",
    "unknown",
    "copy",
    "ticks",
    "tickFormat",
    "nice"
  ])) {
    return f("identity");
  }
  if (arraysEqual(Object.keys(scale), [
    "invert",
    "domain",
    "range",
    "rangeRound",
    "round",
    "clamp",
    "unknown",
    "copy",
    "ticks",
    "tickFormat",
    "nice"
  ])) {
    return f("radial");
  }
  if (modifier) {
    return f(modifier);
  }
  if (scale.domain()[0] instanceof Date) {
    const d = /* @__PURE__ */ new Date();
    let s;
    d.getDay = () => s = "time";
    d.getUTCDay = () => s = "utc";
    scale.tickFormat(0, "%a")(d);
    return f(s);
  }
  return f("linear");
}
const unpaddable = ["scaleThreshold", "scaleQuantile", "scaleQuantize", "scaleSequentialQuantile"];
function padScale(scale, padding) {
  if (typeof scale.range !== "function") {
    throw new Error("Scale method `range` must be a function");
  }
  if (typeof scale.domain !== "function") {
    throw new Error("Scale method `domain` must be a function");
  }
  if (!Array.isArray(padding) || unpaddable.includes(findScaleName(scale))) {
    return scale.domain();
  }
  if (isOrdinalDomain(scale) === true) {
    return scale.domain();
  }
  const { lift, ground } = getPadFunctions(scale);
  const d0 = scale.domain()[0];
  const isTime = Object.prototype.toString.call(d0) === "[object Date]";
  const [d1, d2] = scale.domain().map((d) => {
    return isTime ? lift(d.getTime()) : lift(d);
  });
  const [r1, r2] = scale.range();
  const paddingLeft = padding[0] || 0;
  const paddingRight = padding[1] || 0;
  const step = (d2 - d1) / (Math.abs(r2 - r1) - paddingLeft - paddingRight);
  return [d1 - paddingLeft * step, paddingRight * step + d2].map((d) => {
    return isTime ? ground(new Date(d)) : ground(d);
  });
}
function calcBaseRange(s, width, height, reverse, percentRange) {
  let min;
  let max;
  if (percentRange === true) {
    min = 0;
    max = 100;
  } else {
    min = s === "r" ? 1 : 0;
    max = s === "y" ? height : s === "r" ? 25 : width;
  }
  return reverse === true ? [max, min] : [min, max];
}
function getDefaultRange(s, width, height, reverse, range, percentRange) {
  return !range ? calcBaseRange(s, width, height, reverse, percentRange) : typeof range === "function" ? range({ width, height }) : range;
}
function createScale(s) {
  return function scaleCreator([
    $scale,
    $extents,
    $domain,
    $padding,
    $nice,
    $reverse,
    $width,
    $height,
    $range,
    $percentScale
  ]) {
    if ($extents === null) {
      return null;
    }
    const defaultRange = getDefaultRange(s, $width, $height, $reverse, $range, $percentScale);
    const scale = $scale === defaultScales[s] ? $scale() : $scale.copy();
    scale.domain($domain);
    if (!scale.interpolator || typeof scale.interpolator === "function" && scale.interpolator().name.startsWith("identity")) {
      scale.range(defaultRange);
    }
    if ($padding) {
      scale.domain(padScale(scale, $padding));
    }
    if ($nice === true || typeof $nice === "number") {
      if (typeof scale.nice === "function") {
        scale.nice(typeof $nice === "number" ? $nice : void 0);
      } else {
        console.error(
          `[Layer Cake] You set \`${s}Nice: true\` but the ${s}Scale does not have a \`.nice\` method. Ignoring...`
        );
      }
    }
    return scale;
  };
}
function createGetter([$acc, $scale]) {
  return (d, i) => {
    const val = $acc(d, i);
    if (Array.isArray(val)) {
      return val.map((v) => $scale(v));
    }
    return $scale(val);
  };
}
function getRange([$scale]) {
  if (typeof $scale === "function") {
    if (typeof $scale.range === "function") {
      return $scale.range();
    }
    console.error("[LayerCake] Your scale doesn't have a `.range` method?");
  }
  return null;
}
const indent = "    ";
function getRgb(clr) {
  const { r, g, b, opacity: o } = rgb(clr);
  if (![r, g, b].every((c) => c >= 0 && c <= 255)) {
    return false;
  }
  return { r, g, b, o };
}
function contrast({ r, g, b }) {
  const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
  return luminance > 0.6 ? "black" : "white";
}
function printDebug(obj) {
  console.log("/********* LayerCake Debug ************/");
  console.log("Bounding box:");
  printObject(obj.boundingBox);
  console.log("Data:");
  console.log(indent, obj.data);
  if (obj.flatData) {
    console.log("flatData:");
    console.log(indent, obj.flatData);
  }
  console.log("Scales:");
  Object.keys(obj.activeGetters).forEach((g) => {
    printScale(g, obj[`${g}Scale`], obj[g]);
  });
  console.log("/************ End LayerCake Debug ***************/\n");
}
function printObject(obj) {
  Object.entries(obj).forEach(([key, value]) => {
    console.log(`${indent}${key}:`, value);
  });
}
function printScale(s, scale, acc) {
  const scaleName = findScaleName(scale);
  console.log(`${indent}${s}:`);
  console.log(`${indent}${indent}Accessor: "${acc.toString()}"`);
  console.log(`${indent}${indent}Type: ${scaleName}`);
  printValues(scale, "domain");
  printValues(scale, "range", " ");
}
function printValues(scale, method, extraSpace = "") {
  const values = scale[method]();
  const colorValues = colorizeArray(values);
  if (colorValues) {
    printColorArray(colorValues, method, values);
  } else {
    console.log(`${indent}${indent}${toTitleCase(method)}:${extraSpace}`, values);
  }
}
function printColorArray(colorValues, method, values) {
  console.log(
    `${indent}${indent}${toTitleCase(method)}:    %cArray%c(${values.length}) ` + colorValues[0] + "%c ]",
    "color: #1377e4",
    "color: #737373",
    "color: #1478e4",
    ...colorValues[1],
    "color: #1478e4"
  );
}
function colorizeArray(arr) {
  const colors = [];
  const a = arr.map((d, i) => {
    const rgbo = getRgb(d);
    if (rgbo !== false) {
      colors.push(rgbo);
      const space = i === arr.length - 1 ? " " : "";
      return `%c ${d}${space}`;
    }
    return d;
  });
  if (colors.length) {
    return [
      `%c[ ${a.join(", ")}`,
      colors.map(
        (d) => `background-color: rgba(${d.r}, ${d.g}, ${d.b}, ${d.o}); color:${contrast(d)};`
      )
    ];
  }
  return null;
}
const css$d = {
  code: ".layercake-container.svelte-w5m4wa,.layercake-container.svelte-w5m4wa *{-webkit-box-sizing:border-box;box-sizing:border-box}.layercake-container.svelte-w5m4wa{width:100%;height:100%}",
  map: "{\"version\":3,\"file\":\"LayerCake.svelte\",\"sources\":[\"LayerCake.svelte\"],\"sourcesContent\":[\"<!--\\n\\t@component\\n\\tLayer Cake component\\n -->\\n<script>\\n\\timport { setContext, onMount } from 'svelte';\\n\\timport { writable, derived } from 'svelte/store';\\n\\n\\timport makeAccessor from './utils/makeAccessor.js';\\n\\timport filterObject from './utils/filterObject.js';\\n\\timport debounce from './utils/debounce.js';\\n\\n\\timport calcScaleExtents from './helpers/calcScaleExtents.js';\\n\\timport calcDomain from './helpers/calcDomain.js';\\n\\timport createScale from './helpers/createScale.js';\\n\\timport createGetter from './helpers/createGetter.js';\\n\\timport getRange from './helpers/getRange.js';\\n\\timport printDebug from './helpers/printDebug.js';\\n\\n\\timport defaultScales from './settings/defaultScales.js';\\n\\n\\tconst printDebug_debounced = debounce(printDebug, 200);\\n\\n\\t/** @type {boolean} [ssr=false] Whether this chart should be rendered server side. */\\n\\texport let ssr = false;\\n\\t/** @type {boolean} [pointerEvents=true] Whether to allow pointer events via CSS. Set this to `false` to set `pointer-events: none;` on all components, disabling all mouse interaction. */\\n\\texport let pointerEvents = true;\\n\\t/** @type {String} [position='relative'] Determine the positioning of the wrapper div. Set this to `'absolute'` when you want to stack cakes. */\\n\\texport let position = 'relative';\\n\\t/** @type {boolean} [percentRange=false] If `true`, set all scale ranges to `[0, 100]`. Ranges reversed via `xReverse`, `yReverse`, `zReverse` or `rReverse` props will continue to be reversed as usual. */\\n\\texport let percentRange = false;\\n\\n\\t/** @type {Number} [width=containerWidth] Override the automated width. */\\n\\texport let width = undefined;\\n\\t/** @type {Number} [height=containerHeight] Override the automated height. */\\n\\texport let height = undefined;\\n\\n\\t/** @type {Number} [containerWidth=100] The bound container width. */\\n\\texport let containerWidth = width || 100;\\n\\t/** @type {Number} [containerHeight=100] The bound container height. */\\n\\texport let containerHeight = height || 100;\\n\\n\\t/**\\t@type {Element|undefined} [element] The .layercake-container `<div>` tag. Useful for bindings. */\\n\\texport let element = undefined;\\n\\n\\t/* --------------------------------------------\\n\\t * Parameters\\n\\t * Values that computed properties are based on and that\\n\\t * can be easily extended from config values\\n\\t *\\n\\t */\\n\\n\\t/** @type {String|Function|Number|Array<String|Function|Number>|undefined} x The x accessor. The key in each row of data that corresponds to the x-field. This can be a string, an accessor function, a number or an array of any combination of those types. This property gets converted to a function when you access it through the context. */\\n\\texport let x = undefined;\\n\\t/** @type {String|Function|Number|Array<String|Function|Number>|undefined} y The y accessor. The key in each row of data that corresponds to the y-field. This can be a string, an accessor function, a number or an array of any combination of those types. This property gets converted to a function when you access it through the context. */\\n\\texport let y = undefined;\\n\\t/** @type {String|Function|Number|Array<String|Function|Number>|undefined} z The z accessor. The key in each row of data that corresponds to the z-field. This can be a string, an accessor function, a number or an array of any combination of those types. This property gets converted to a function when you access it through the context. */\\n\\texport let z = undefined;\\n\\t/** @type {String|Function|Number|Array<String|Function|Number>|undefined} r The r accessor. The key in each row of data that corresponds to the r-field. This can be a string, an accessor function, a number or an array of any combination of those types. This property gets converted to a function when you access it through the context. */\\n\\texport let r = undefined;\\n\\n\\t/** @type {Array<Object>|Object} [data=[]] If `data` is not a flat array of objects and you want to use any of the scales, set a flat version of the data via the `flatData` prop. */\\n\\texport let data = [];\\n\\n\\t/** @type {[min: Number|null, max: Number|null]|Array<String|Number>|Function|undefined} [xDomain] Set a min or max. For linear scales, if you want to inherit the value from the data's extent, set that value to `null`. This value can also be an array because sometimes your scales are [piecewise](https://github.com/d3/d3-scale#continuous_domain) or are a list of discrete values such as in [ordinal scales](https://github.com/d3/d3-scale#ordinal-scales), useful for color series. Set it to a function that receives the computed domain and lets you return a modified domain, useful for sorting values. */\\n\\texport let xDomain = undefined;\\n\\t/** @type {[min: Number|null, max: Number|null]|Array<String|Number>|Function|undefined} [yDomain] Set a min or max. For linear scales, if you want to inherit the value from the data's extent, set that value to `null`.  Set it to a function that receives the computed domain and lets you return a modified domain, useful for sorting values. */\\n\\texport let yDomain = undefined;\\n\\t/** @type {[min: Number|null, max: Number|null]|Array<String|Number>|Function|undefined} [zDomain] Set a min or max. For linear scales, if you want to inherit the value from the data's extent, set that value to `null`. This value can also be an array because sometimes your scales are [piecewise](https://github.com/d3/d3-scale#continuous_domain) or are a list of discrete values such as in [ordinal scales](https://github.com/d3/d3-scale#ordinal-scales), useful for color series. Set it to a function that receives the computed domain and lets you return a modified domain, useful for sorting values. */\\n\\texport let zDomain = undefined;\\n\\t/** @type {[min: Number|null, max: Number|null]|Array<String|Number>|Function|undefined} [rDomain] Set a min or max. For linear scales, if you want to inherit the value from the data's extent, set that value to `null`. This value can also be an array because sometimes your scales are [piecewise](https://github.com/d3/d3-scale#continuous_domain) or are a list of discrete values such as in [ordinal scales](https://github.com/d3/d3-scale#ordinal-scales), useful for color series. Set it to a function that receives the computed domain and lets you return a modified domain, useful for sorting values. */\\n\\texport let rDomain = undefined;\\n\\t/** @type {boolean|Number} [xNice=false] Applies D3's [scale.nice()](https://github.com/d3/d3-scale#continuous_nice) to the x domain. */\\n\\texport let xNice = false;\\n\\t/** @type {boolean|Number} [yNice=false] Applies D3's [scale.nice()](https://github.com/d3/d3-scale#continuous_nice) to the y domain. */\\n\\texport let yNice = false;\\n\\t/** @type {boolean|Number} [zNice=false] Applies D3's [scale.nice()](https://github.com/d3/d3-scale#continuous_nice) to the z domain. */\\n\\texport let zNice = false;\\n\\t/** @type {boolean} [rNice=false] Applies D3's [scale.nice()](https://github.com/d3/d3-scale#continuous_nice) to the r domain. */\\n\\texport let rNice = false;\\n\\t/** @type {[leftPixels: Number, rightPixels: Number]|undefined} [xPadding] Assign a pixel value to add to the min or max of the scale. This will increase the scales domain by the scale unit equivalent of the provided pixels. */\\n\\texport let xPadding = undefined;\\n\\t/** @type {[leftPixels: Number, rightPixels: Number]|undefined} [yPadding] Assign a pixel value to add to the min or max of the scale. This will increase the scales domain by the scale unit equivalent of the provided pixels. */\\n\\texport let yPadding = undefined;\\n\\t/** @type {[leftPixels: Number, rightPixels: Number]|undefined} [zPadding] Assign a pixel value to add to the min or max of the scale. This will increase the scales domain by the scale unit equivalent of the provided pixels. */\\n\\texport let zPadding = undefined;\\n\\t/** @type {[leftPixels: Number, rightPixels: Number]|undefined} [rPadding] Assign a pixel value to add to the min or max of the scale. This will increase the scales domain by the scale unit equivalent of the provided pixels. */\\n\\texport let rPadding = undefined;\\n\\t/** @type {Function} [xScale=d3.scaleLinear] The D3 scale that should be used for the x-dimension. Pass in an instantiated D3 scale if you want to override the default or you want to extra options. */\\n\\texport let xScale = defaultScales.x;\\n\\t/** @type {Function} [yScale=d3.scaleLinear] The D3 scale that should be used for the x-dimension. Pass in an instantiated D3 scale if you want to override the default or you want to extra options. */\\n\\texport let yScale = defaultScales.y;\\n\\t/** @type {Function} [zScale=d3.scaleLinear] The D3 scale that should be used for the x-dimension. Pass in an instantiated D3 scale if you want to override the default or you want to extra options. */\\n\\texport let zScale = defaultScales.z;\\n\\t/** @type {Function} [rScale=d3.scaleSqrt] The D3 scale that should be used for the x-dimension. Pass in an instantiated D3 scale if you want to override the default or you want to extra options. */\\n\\texport let rScale = defaultScales.r;\\n\\t/** @type {[min: Number, max: Number]|Function|Array<String|Number>|undefined} [xRange] Override the default x range of `[0, width]` by setting an array or function with argument `({ width, height})` that returns an array. Setting this prop overrides `xReverse`. This can also be a list of numbers or strings for scales with discrete ranges like [scaleThreshhold](https://github.com/d3/d3-scale#threshold-scales) or [scaleQuantize](https://github.com/d3/d3-scale#quantize-scales). */\\n\\texport let xRange = undefined;\\n\\t/** @type {[min: Number, max: Number]|Function|Array<String|Number>|undefined} [xRange] Override the default y range of `[0, height]` by setting an array or function with argument `({ width, height})` that returns an array. Setting this prop overrides `yReverse`. This can also be a list of numbers or strings for scales with discrete ranges like [scaleThreshhold](https://github.com/d3/d3-scale#threshold-scales) or [scaleQuantize](https://github.com/d3/d3-scale#quantize-scales). */\\n\\texport let yRange = undefined;\\n\\t/** @type {[min: Number, max: Number]|Function|Array<String|Number>|undefined} [zRange] Override the default z range of `[0, width]` by setting an array or function with argument `({ width, height})` that returns an array. Setting this prop overrides `zReverse`. This can also be a list of numbers or strings for scales with discrete ranges like [scaleThreshhold](https://github.com/d3/d3-scale#threshold-scales) or [scaleQuantize](https://github.com/d3/d3-scale#quantize-scales). */\\n\\texport let zRange = undefined;\\n\\t/** @type {[min: Number, max: Number]|Function|Array<String|Number>|undefined} [rRange] Override the default r range of `[1, 25]` by setting an array or function with argument `({ width, height})` that returns an array. Setting this prop overrides `rReverse`. This can also be a list of numbers or strings for scales with discrete ranges like [scaleThreshhold](https://github.com/d3/d3-scale#threshold-scales) or [scaleQuantize](https://github.com/d3/d3-scale#quantize-scales). */\\n\\texport let rRange = undefined;\\n\\t/** @type {boolean} [xReverse=false] Reverse the default x range. By default this is `false` and the range is `[0, width]`. Ignored if you set the xRange prop. */\\n\\texport let xReverse = false;\\n\\t/** @type {boolean|undefined} [yReverse=true] Reverse the default y range. By default this is set dynamically and will be `true` – setting the range to `[height, 0]` – unless the `yScale` has a `.bandwidth` method. Dynamic behavior is overridden if the user sets the prop. Ignored if you set the `yRange` prop. */\\n\\texport let yReverse = undefined;\\n\\t/** @type {boolean} [zReverse=false] Reverse the default z range. By default this is `false` and the range is `[0, width]`. Ignored if you set the zRange prop. */\\n\\texport let zReverse = false;\\n\\t/** @type {boolean} [rReverse=false] Reverse the default r range. By default this is `false` and the range is `[1, 25]`. Ignored if you set the rRange prop. */\\n\\texport let rReverse = false;\\n\\t/** @type {boolean} [xDomainSort=true] Only used when scale is ordinal. Set whether the calculated unique items come back sorted. */\\n\\texport let xDomainSort = true;\\n\\t/** @type {boolean} [yDomainSort=true] Only used when scale is ordinal. Set whether the calculated unique items come back sorted. */\\n\\texport let yDomainSort = true;\\n\\t/** @type {boolean} [zDomainSort=true] Only used when scale is ordinal. Set whether the calculated unique items come back sorted. */\\n\\texport let zDomainSort = true;\\n\\t/** @type {boolean} [rDomainSort=true] Only used when scale is ordinal. Set whether the calculated unique items come back sorted. */\\n\\texport let rDomainSort = true;\\n\\t/** @type {{top?: Number, right?: Number, bottom?: Number, left?: Number}} [padding={}] The amount of padding to put around your chart. It operates like CSS box-sizing: border-box; where values are subtracted from the parent container's width and height, the same as a [D3 margin convention](https://bl.ocks.org/mbostock/3019563). */\\n\\texport let padding = {};\\n\\t/** @type {{ x?: [min: Number, max: Number], y?: [min: Number, max: Number], r?: [min: Number, max: Number], z?: [min: Number, max: Number] }} [extents] Manually set the extents of the x, y or r scale as a two-dimensional array of the min and max you want. Setting values here will skip any dynamic extent calculation of the data for that dimension. */\\n\\texport let extents = {};\\n\\n\\t/** @type {Array<Object|Array<any>>|undefined} [flatData=data] A flat version of data. */\\n\\texport let flatData = undefined;\\n\\n\\t/** @type {Object} custom Any extra configuration values you want available on the LayerCake context. This could be useful for color lookups or additional constants. */\\n\\texport let custom = {};\\n\\n\\t/** @type {boolean} debug Enable debug printing to the console. Useful to inspect your scales and dimensions. */\\n\\texport let debug = false;\\n\\t/** @type {boolean} [verbose=true] Show warnings in the console. */\\n\\texport let verbose = true;\\n\\n\\t/**\\n\\t * Make this reactive\\n\\t */\\n\\t$: yReverseValue =\\n\\t\\ttypeof yReverse === 'undefined'\\n\\t\\t\\t? typeof yScale.bandwidth === 'function'\\n\\t\\t\\t\\t? false\\n\\t\\t\\t\\t: true\\n\\t\\t\\t: yReverse;\\n\\n\\t/* --------------------------------------------\\n\\t * Keep track of whether the component has mounted\\n\\t * This is used to emit warnings once we have measured\\n\\t * the container object and it doesn't have proper dimensions\\n\\t */\\n\\tlet isMounted = false;\\n\\tonMount(() => {\\n\\t\\tisMounted = true;\\n\\t});\\n\\n\\t/* --------------------------------------------\\n\\t * Preserve a copy of our passed in settings before we modify them\\n\\t * Return this to the user's context so they can reference things if need be\\n\\t * Add the active keys since those aren't on our settings object.\\n\\t * This is mostly an escape-hatch\\n\\t */\\n\\tconst config = {};\\n\\t$: if (x) config.x = x;\\n\\t$: if (y) config.y = y;\\n\\t$: if (z) config.z = z;\\n\\t$: if (r) config.r = r;\\n\\t$: if (xDomain) config.xDomain = xDomain;\\n\\t$: if (yDomain) config.yDomain = yDomain;\\n\\t$: if (zDomain) config.zDomain = zDomain;\\n\\t$: if (rDomain) config.rDomain = rDomain;\\n\\t$: if (xRange) config.xRange = xRange;\\n\\t$: if (yRange) config.yRange = yRange;\\n\\t$: if (zRange) config.zRange = zRange;\\n\\t$: if (rRange) config.rRange = rRange;\\n\\n\\t/* --------------------------------------------\\n\\t * Make store versions of each parameter\\n\\t * Prefix these with `_` to keep things organized\\n\\t */\\n\\tconst _percentRange = writable(percentRange);\\n\\tconst _containerWidth = writable(containerWidth);\\n\\tconst _containerHeight = writable(containerHeight);\\n\\tconst _extents = writable(filterObject(extents));\\n\\tconst _data = writable(data);\\n\\tconst _flatData = writable(flatData || data);\\n\\tconst _padding = writable(padding);\\n\\tconst _x = writable(makeAccessor(x));\\n\\tconst _y = writable(makeAccessor(y));\\n\\tconst _z = writable(makeAccessor(z));\\n\\tconst _r = writable(makeAccessor(r));\\n\\tconst _xDomain = writable(xDomain);\\n\\tconst _yDomain = writable(yDomain);\\n\\tconst _zDomain = writable(zDomain);\\n\\tconst _rDomain = writable(rDomain);\\n\\tconst _xNice = writable(xNice);\\n\\tconst _yNice = writable(yNice);\\n\\tconst _zNice = writable(zNice);\\n\\tconst _rNice = writable(rNice);\\n\\tconst _xReverse = writable(xReverse);\\n\\tconst _yReverse = writable(yReverseValue);\\n\\tconst _zReverse = writable(zReverse);\\n\\tconst _rReverse = writable(rReverse);\\n\\tconst _xPadding = writable(xPadding);\\n\\tconst _yPadding = writable(yPadding);\\n\\tconst _zPadding = writable(zPadding);\\n\\tconst _rPadding = writable(rPadding);\\n\\tconst _xRange = writable(xRange);\\n\\tconst _yRange = writable(yRange);\\n\\tconst _zRange = writable(zRange);\\n\\tconst _rRange = writable(rRange);\\n\\tconst _xScale = writable(xScale);\\n\\tconst _yScale = writable(yScale);\\n\\tconst _zScale = writable(zScale);\\n\\tconst _rScale = writable(rScale);\\n\\tconst _xDomainSort = writable(xDomainSort);\\n\\tconst _yDomainSort = writable(yDomainSort);\\n\\tconst _zDomainSort = writable(zDomainSort);\\n\\tconst _rDomainSort = writable(rDomainSort);\\n\\tconst _config = writable(config);\\n\\tconst _custom = writable(custom);\\n\\n\\t$: $_percentRange = percentRange;\\n\\t$: $_containerWidth = containerWidth;\\n\\t$: $_containerHeight = containerHeight;\\n\\t$: $_extents = filterObject(extents);\\n\\t$: $_data = data;\\n\\t$: $_flatData = flatData || data;\\n\\t$: $_padding = padding;\\n\\t$: $_x = makeAccessor(x);\\n\\t$: $_y = makeAccessor(y);\\n\\t$: $_z = makeAccessor(z);\\n\\t$: $_r = makeAccessor(r);\\n\\t$: $_xDomain = xDomain;\\n\\t$: $_yDomain = yDomain;\\n\\t$: $_zDomain = zDomain;\\n\\t$: $_rDomain = rDomain;\\n\\t$: $_xNice = xNice;\\n\\t$: $_yNice = yNice;\\n\\t$: $_zNice = zNice;\\n\\t$: $_rNice = rNice;\\n\\t$: $_xReverse = xReverse;\\n\\t$: $_yReverse = yReverseValue;\\n\\t$: $_zReverse = zReverse;\\n\\t$: $_rReverse = rReverse;\\n\\t$: $_xPadding = xPadding;\\n\\t$: $_yPadding = yPadding;\\n\\t$: $_zPadding = zPadding;\\n\\t$: $_rPadding = rPadding;\\n\\t$: $_xRange = xRange;\\n\\t$: $_yRange = yRange;\\n\\t$: $_zRange = zRange;\\n\\t$: $_rRange = rRange;\\n\\t$: $_xScale = xScale;\\n\\t$: $_yScale = yScale;\\n\\t$: $_zScale = zScale;\\n\\t$: $_rScale = rScale;\\n\\t$: $_custom = custom;\\n\\t$: $_config = config;\\n\\n\\t/* --------------------------------------------\\n\\t * Create derived values\\n\\t * Suffix these with `_d`\\n\\t */\\n\\tconst activeGetters_d = derived([_x, _y, _z, _r], ([$x, $y, $z, $r]) => {\\n\\t\\tconst obj = {};\\n\\t\\tif ($x) {\\n\\t\\t\\tobj.x = $x;\\n\\t\\t}\\n\\t\\tif ($y) {\\n\\t\\t\\tobj.y = $y;\\n\\t\\t}\\n\\t\\tif ($z) {\\n\\t\\t\\tobj.z = $z;\\n\\t\\t}\\n\\t\\tif ($r) {\\n\\t\\t\\tobj.r = $r;\\n\\t\\t}\\n\\t\\treturn obj;\\n\\t});\\n\\n\\tconst padding_d = derived([_padding, _containerWidth, _containerHeight], ([$padding]) => {\\n\\t\\tconst defaultPadding = { top: 0, right: 0, bottom: 0, left: 0 };\\n\\t\\treturn Object.assign(defaultPadding, $padding);\\n\\t});\\n\\n\\tconst box_d = derived(\\n\\t\\t[_containerWidth, _containerHeight, padding_d],\\n\\t\\t([$containerWidth, $containerHeight, $padding]) => {\\n\\t\\t\\tconst b = {};\\n\\t\\t\\tb.top = $padding.top;\\n\\t\\t\\tb.right = $containerWidth - $padding.right;\\n\\t\\t\\tb.bottom = $containerHeight - $padding.bottom;\\n\\t\\t\\tb.left = $padding.left;\\n\\t\\t\\tb.width = b.right - b.left;\\n\\t\\t\\tb.height = b.bottom - b.top;\\n\\t\\t\\tif (verbose === true) {\\n\\t\\t\\t\\tif (b.width <= 0 && isMounted === true) {\\n\\t\\t\\t\\t\\tconsole.warn(\\n\\t\\t\\t\\t\\t\\t'[LayerCake] Target div has zero or negative width. Did you forget to set an explicit width in CSS on the container?'\\n\\t\\t\\t\\t\\t);\\n\\t\\t\\t\\t}\\n\\t\\t\\t\\tif (b.height <= 0 && isMounted === true) {\\n\\t\\t\\t\\t\\tconsole.warn(\\n\\t\\t\\t\\t\\t\\t'[LayerCake] Target div has zero or negative height. Did you forget to set an explicit height in CSS on the container?'\\n\\t\\t\\t\\t\\t);\\n\\t\\t\\t\\t}\\n\\t\\t\\t}\\n\\t\\t\\treturn b;\\n\\t\\t}\\n\\t);\\n\\n\\tconst width_d = derived([box_d], ([$box]) => {\\n\\t\\treturn $box.width;\\n\\t});\\n\\n\\tconst height_d = derived([box_d], ([$box]) => {\\n\\t\\treturn $box.height;\\n\\t});\\n\\n\\t/* --------------------------------------------\\n\\t * Calculate extents by taking the extent of the data\\n\\t * and filling that in with anything set by the user\\n\\t * Note that this is different from an \\\"extent\\\" passed\\n\\t * in as a domain, which can be a partial domain\\n\\t */\\n\\tconst extents_d = derived(\\n\\t\\t[\\n\\t\\t\\t_flatData,\\n\\t\\t\\tactiveGetters_d,\\n\\t\\t\\t_extents,\\n\\t\\t\\t_xScale,\\n\\t\\t\\t_yScale,\\n\\t\\t\\t_rScale,\\n\\t\\t\\t_zScale,\\n\\t\\t\\t_xDomainSort,\\n\\t\\t\\t_yDomainSort,\\n\\t\\t\\t_zDomainSort,\\n\\t\\t\\t_rDomainSort\\n\\t\\t],\\n\\t\\t([\\n\\t\\t\\t$flatData,\\n\\t\\t\\t$activeGetters,\\n\\t\\t\\t$extents,\\n\\t\\t\\t$_xScale,\\n\\t\\t\\t$_yScale,\\n\\t\\t\\t$_rScale,\\n\\t\\t\\t$_zScale,\\n\\t\\t\\t$_xDomainSort,\\n\\t\\t\\t$_yDomainSort,\\n\\t\\t\\t$_zDomainSort,\\n\\t\\t\\t$_rDomainSort\\n\\t\\t]) => {\\n\\t\\t\\tconst scaleLookup = {\\n\\t\\t\\t\\tx: { scale: $_xScale, sort: $_xDomainSort },\\n\\t\\t\\t\\ty: { scale: $_yScale, sort: $_yDomainSort },\\n\\t\\t\\t\\tr: { scale: $_rScale, sort: $_rDomainSort },\\n\\t\\t\\t\\tz: { scale: $_zScale, sort: $_zDomainSort }\\n\\t\\t\\t};\\n\\t\\t\\tconst getters = filterObject($activeGetters, $extents);\\n\\t\\t\\tconst activeScales = Object.fromEntries(Object.keys(getters).map(k => [k, scaleLookup[k]]));\\n\\n\\t\\t\\tif (Object.keys(getters).length > 0) {\\n\\t\\t\\t\\tconst calculatedExtents = calcScaleExtents($flatData, getters, activeScales);\\n\\t\\t\\t\\treturn { ...calculatedExtents, ...$extents };\\n\\t\\t\\t} else {\\n\\t\\t\\t\\treturn {};\\n\\t\\t\\t}\\n\\t\\t}\\n\\t);\\n\\n\\tconst xDomain_d = derived([extents_d, _xDomain], calcDomain('x'));\\n\\tconst yDomain_d = derived([extents_d, _yDomain], calcDomain('y'));\\n\\tconst zDomain_d = derived([extents_d, _zDomain], calcDomain('z'));\\n\\tconst rDomain_d = derived([extents_d, _rDomain], calcDomain('r'));\\n\\n\\tconst xScale_d = derived(\\n\\t\\t[\\n\\t\\t\\t_xScale,\\n\\t\\t\\textents_d,\\n\\t\\t\\txDomain_d,\\n\\t\\t\\t_xPadding,\\n\\t\\t\\t_xNice,\\n\\t\\t\\t_xReverse,\\n\\t\\t\\twidth_d,\\n\\t\\t\\theight_d,\\n\\t\\t\\t_xRange,\\n\\t\\t\\t_percentRange\\n\\t\\t],\\n\\t\\tcreateScale('x')\\n\\t);\\n\\tconst xGet_d = derived([_x, xScale_d], createGetter);\\n\\n\\tconst yScale_d = derived(\\n\\t\\t[\\n\\t\\t\\t_yScale,\\n\\t\\t\\textents_d,\\n\\t\\t\\tyDomain_d,\\n\\t\\t\\t_yPadding,\\n\\t\\t\\t_yNice,\\n\\t\\t\\t_yReverse,\\n\\t\\t\\twidth_d,\\n\\t\\t\\theight_d,\\n\\t\\t\\t_yRange,\\n\\t\\t\\t_percentRange\\n\\t\\t],\\n\\t\\tcreateScale('y')\\n\\t);\\n\\tconst yGet_d = derived([_y, yScale_d], createGetter);\\n\\n\\tconst zScale_d = derived(\\n\\t\\t[\\n\\t\\t\\t_zScale,\\n\\t\\t\\textents_d,\\n\\t\\t\\tzDomain_d,\\n\\t\\t\\t_zPadding,\\n\\t\\t\\t_zNice,\\n\\t\\t\\t_zReverse,\\n\\t\\t\\twidth_d,\\n\\t\\t\\theight_d,\\n\\t\\t\\t_zRange,\\n\\t\\t\\t_percentRange\\n\\t\\t],\\n\\t\\tcreateScale('z')\\n\\t);\\n\\tconst zGet_d = derived([_z, zScale_d], createGetter);\\n\\n\\tconst rScale_d = derived(\\n\\t\\t[\\n\\t\\t\\t_rScale,\\n\\t\\t\\textents_d,\\n\\t\\t\\trDomain_d,\\n\\t\\t\\t_rPadding,\\n\\t\\t\\t_rNice,\\n\\t\\t\\t_rReverse,\\n\\t\\t\\twidth_d,\\n\\t\\t\\theight_d,\\n\\t\\t\\t_rRange,\\n\\t\\t\\t_percentRange\\n\\t\\t],\\n\\t\\tcreateScale('r')\\n\\t);\\n\\tconst rGet_d = derived([_r, rScale_d], createGetter);\\n\\n\\t// Create new _Domains in case we ran `.nice()` over our domain on scale initialization\\n\\tconst xDomain_d_possibly_nice = derived(xScale_d, $xScale_d => $xScale_d.domain());\\n\\tconst yDomain_d_possibly_nice = derived(yScale_d, $yScale_d => $yScale_d.domain());\\n\\tconst zDomain_d_possibly_nice = derived(zScale_d, $zScale_d => $zScale_d.domain());\\n\\tconst rDomain_d_possibly_nice = derived(rScale_d, $rScale_d => $rScale_d.domain());\\n\\n\\tconst xRange_d = derived([xScale_d], getRange);\\n\\tconst yRange_d = derived([yScale_d], getRange);\\n\\tconst zRange_d = derived([zScale_d], getRange);\\n\\tconst rRange_d = derived([rScale_d], getRange);\\n\\n\\tconst aspectRatio_d = derived([width_d, height_d], ([$width, $height]) => {\\n\\t\\treturn $width / $height;\\n\\t});\\n\\n\\t$: context = {\\n\\t\\tactiveGetters: activeGetters_d,\\n\\t\\twidth: width_d,\\n\\t\\theight: height_d,\\n\\t\\tpercentRange: _percentRange,\\n\\t\\taspectRatio: aspectRatio_d,\\n\\t\\tcontainerWidth: _containerWidth,\\n\\t\\tcontainerHeight: _containerHeight,\\n\\t\\tx: _x,\\n\\t\\ty: _y,\\n\\t\\tz: _z,\\n\\t\\tr: _r,\\n\\t\\tcustom: _custom,\\n\\t\\tdata: _data,\\n\\t\\txNice: _xNice,\\n\\t\\tyNice: _yNice,\\n\\t\\tzNice: _zNice,\\n\\t\\trNice: _rNice,\\n\\t\\txDomainSort: _xDomainSort,\\n\\t\\tyDomainSort: _yDomainSort,\\n\\t\\tzDomainSort: _zDomainSort,\\n\\t\\trDomainSort: _rDomainSort,\\n\\t\\txReverse: _xReverse,\\n\\t\\tyReverse: _yReverse,\\n\\t\\tzReverse: _zReverse,\\n\\t\\trReverse: _rReverse,\\n\\t\\txPadding: _xPadding,\\n\\t\\tyPadding: _yPadding,\\n\\t\\tzPadding: _zPadding,\\n\\t\\trPadding: _rPadding,\\n\\t\\tpadding: padding_d,\\n\\t\\tflatData: _flatData,\\n\\t\\textents: extents_d,\\n\\t\\txDomain: xDomain_d_possibly_nice,\\n\\t\\tyDomain: yDomain_d_possibly_nice,\\n\\t\\tzDomain: zDomain_d_possibly_nice,\\n\\t\\trDomain: rDomain_d_possibly_nice,\\n\\t\\txRange: xRange_d,\\n\\t\\tyRange: yRange_d,\\n\\t\\tzRange: zRange_d,\\n\\t\\trRange: rRange_d,\\n\\t\\tconfig: _config,\\n\\t\\txScale: xScale_d,\\n\\t\\txGet: xGet_d,\\n\\t\\tyScale: yScale_d,\\n\\t\\tyGet: yGet_d,\\n\\t\\tzScale: zScale_d,\\n\\t\\tzGet: zGet_d,\\n\\t\\trScale: rScale_d,\\n\\t\\trGet: rGet_d\\n\\t};\\n\\n\\t$: setContext('LayerCake', context);\\n\\n\\t$: if ($box_d && debug === true && (ssr === true || typeof window !== 'undefined')) {\\n\\t\\t// Call this as a debounce so that it doesn't get called multiple times as these vars get filled in\\n\\t\\tprintDebug_debounced({\\n\\t\\t\\tdata: $_data,\\n\\t\\t\\tflatData: typeof flatData !== 'undefined' ? $_flatData : null,\\n\\t\\t\\tboundingBox: $box_d,\\n\\t\\t\\tactiveGetters: $activeGetters_d,\\n\\t\\t\\tx: config.x,\\n\\t\\t\\ty: config.y,\\n\\t\\t\\tz: config.z,\\n\\t\\t\\tr: config.r,\\n\\t\\t\\txScale: $xScale_d,\\n\\t\\t\\tyScale: $yScale_d,\\n\\t\\t\\tzScale: $zScale_d,\\n\\t\\t\\trScale: $rScale_d\\n\\t\\t});\\n\\t}\\n<\/script>\\n\\n{#if ssr === true || typeof window !== 'undefined'}\\n\\t<div\\n\\t\\tbind:this={element}\\n\\t\\tclass=\\\"layercake-container\\\"\\n\\t\\tstyle:position\\n\\t\\tstyle:top={position === 'absolute' ? '0' : null}\\n\\t\\tstyle:right={position === 'absolute' ? '0' : null}\\n\\t\\tstyle:bottom={position === 'absolute' ? '0' : null}\\n\\t\\tstyle:left={position === 'absolute' ? '0' : null}\\n\\t\\tstyle:pointer-events={pointerEvents === false ? 'none' : null}\\n\\t\\tbind:clientWidth={containerWidth}\\n\\t\\tbind:clientHeight={containerHeight}\\n\\t>\\n\\t\\t<slot\\n\\t\\t\\t{element}\\n\\t\\t\\twidth={$width_d}\\n\\t\\t\\theight={$height_d}\\n\\t\\t\\taspectRatio={$aspectRatio_d}\\n\\t\\t\\tcontainerWidth={$_containerWidth}\\n\\t\\t\\tcontainerHeight={$_containerHeight}\\n\\t\\t\\tactiveGetters={$activeGetters_d}\\n\\t\\t\\tpercentRange={$_percentRange}\\n\\t\\t\\tx={$_x}\\n\\t\\t\\ty={$_y}\\n\\t\\t\\tz={$_z}\\n\\t\\t\\tr={$_r}\\n\\t\\t\\tcustom={$_custom}\\n\\t\\t\\tdata={$_data}\\n\\t\\t\\txNice={$_xNice}\\n\\t\\t\\tyNice={$_yNice}\\n\\t\\t\\tzNice={$_zNice}\\n\\t\\t\\trNice={$_rNice}\\n\\t\\t\\txDomainSort={$_xDomainSort}\\n\\t\\t\\tyDomainSort={$_yDomainSort}\\n\\t\\t\\tzDomainSort={$_zDomainSort}\\n\\t\\t\\trDomainSort={$_rDomainSort}\\n\\t\\t\\txReverse={$_xReverse}\\n\\t\\t\\tyReverse={$_yReverse}\\n\\t\\t\\tzReverse={$_zReverse}\\n\\t\\t\\trReverse={$_rReverse}\\n\\t\\t\\txPadding={$_xPadding}\\n\\t\\t\\tyPadding={$_yPadding}\\n\\t\\t\\tzPadding={$_zPadding}\\n\\t\\t\\trPadding={$_rPadding}\\n\\t\\t\\tpadding={$padding_d}\\n\\t\\t\\tflatData={$_flatData}\\n\\t\\t\\textents={$extents_d}\\n\\t\\t\\txDomain={$xDomain_d}\\n\\t\\t\\tyDomain={$yDomain_d}\\n\\t\\t\\tzDomain={$zDomain_d}\\n\\t\\t\\trDomain={$rDomain_d}\\n\\t\\t\\txRange={$xRange_d}\\n\\t\\t\\tyRange={$yRange_d}\\n\\t\\t\\tzRange={$zRange_d}\\n\\t\\t\\trRange={$rRange_d}\\n\\t\\t\\tconfig={$_config}\\n\\t\\t\\txScale={$xScale_d}\\n\\t\\t\\txGet={$xGet_d}\\n\\t\\t\\tyScale={$yScale_d}\\n\\t\\t\\tyGet={$yGet_d}\\n\\t\\t\\tzScale={$zScale_d}\\n\\t\\t\\tzGet={$zGet_d}\\n\\t\\t\\trScale={$rScale_d}\\n\\t\\t\\trGet={$rGet_d}\\n\\t\\t/>\\n\\t</div>\\n{/if}\\n\\n<style>\\n\\t.layercake-container,\\n\\t.layercake-container :global(*) {\\n\\t\\t-webkit-box-sizing: border-box;\\n\\t\\t        box-sizing: border-box;\\n\\t}\\n\\t.layercake-container {\\n\\t\\twidth: 100%;\\n\\t\\theight: 100%;\\n\\t}</style>\\n\"],\"names\":[],\"mappings\":\"AAylBC,kCAAoB,CACpB,kCAAoB,CAAS,CAAG,CAC/B,kBAAkB,CAAE,UAAU,CACtB,UAAU,CAAE,UACrB,CACA,kCAAqB,CACpB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IACT\"}"
};
const LayerCake = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let yReverseValue;
  let context;
  let $rScale_d, $$unsubscribe_rScale_d;
  let $zScale_d, $$unsubscribe_zScale_d;
  let $yScale_d, $$unsubscribe_yScale_d;
  let $xScale_d, $$unsubscribe_xScale_d;
  let $activeGetters_d, $$unsubscribe_activeGetters_d;
  let $box_d, $$unsubscribe_box_d;
  let $_flatData, $$unsubscribe__flatData;
  let $_data, $$unsubscribe__data;
  let $_config, $$unsubscribe__config;
  let $_custom, $$unsubscribe__custom;
  let $_rScale, $$unsubscribe__rScale;
  let $_zScale, $$unsubscribe__zScale;
  let $_yScale, $$unsubscribe__yScale;
  let $_xScale, $$unsubscribe__xScale;
  let $_rRange, $$unsubscribe__rRange;
  let $_zRange, $$unsubscribe__zRange;
  let $_yRange, $$unsubscribe__yRange;
  let $_xRange, $$unsubscribe__xRange;
  let $_rPadding, $$unsubscribe__rPadding;
  let $_zPadding, $$unsubscribe__zPadding;
  let $_yPadding, $$unsubscribe__yPadding;
  let $_xPadding, $$unsubscribe__xPadding;
  let $_rReverse, $$unsubscribe__rReverse;
  let $_zReverse, $$unsubscribe__zReverse;
  let $_yReverse, $$unsubscribe__yReverse;
  let $_xReverse, $$unsubscribe__xReverse;
  let $_rNice, $$unsubscribe__rNice;
  let $_zNice, $$unsubscribe__zNice;
  let $_yNice, $$unsubscribe__yNice;
  let $_xNice, $$unsubscribe__xNice;
  let $_rDomain, $$unsubscribe__rDomain;
  let $_zDomain, $$unsubscribe__zDomain;
  let $_yDomain, $$unsubscribe__yDomain;
  let $_xDomain, $$unsubscribe__xDomain;
  let $_r, $$unsubscribe__r;
  let $_z, $$unsubscribe__z;
  let $_y, $$unsubscribe__y;
  let $_x, $$unsubscribe__x;
  let $_padding, $$unsubscribe__padding;
  let $_extents, $$unsubscribe__extents;
  let $_containerHeight, $$unsubscribe__containerHeight;
  let $_containerWidth, $$unsubscribe__containerWidth;
  let $_percentRange, $$unsubscribe__percentRange;
  let $width_d, $$unsubscribe_width_d;
  let $height_d, $$unsubscribe_height_d;
  let $aspectRatio_d, $$unsubscribe_aspectRatio_d;
  let $_xDomainSort, $$unsubscribe__xDomainSort;
  let $_yDomainSort, $$unsubscribe__yDomainSort;
  let $_zDomainSort, $$unsubscribe__zDomainSort;
  let $_rDomainSort, $$unsubscribe__rDomainSort;
  let $padding_d, $$unsubscribe_padding_d;
  let $extents_d, $$unsubscribe_extents_d;
  let $xDomain_d, $$unsubscribe_xDomain_d;
  let $yDomain_d, $$unsubscribe_yDomain_d;
  let $zDomain_d, $$unsubscribe_zDomain_d;
  let $rDomain_d, $$unsubscribe_rDomain_d;
  let $xRange_d, $$unsubscribe_xRange_d;
  let $yRange_d, $$unsubscribe_yRange_d;
  let $zRange_d, $$unsubscribe_zRange_d;
  let $rRange_d, $$unsubscribe_rRange_d;
  let $xGet_d, $$unsubscribe_xGet_d;
  let $yGet_d, $$unsubscribe_yGet_d;
  let $zGet_d, $$unsubscribe_zGet_d;
  let $rGet_d, $$unsubscribe_rGet_d;
  const printDebug_debounced = debounce(printDebug, 200);
  let { ssr = false } = $$props;
  let { pointerEvents = true } = $$props;
  let { position = "relative" } = $$props;
  let { percentRange = false } = $$props;
  let { width = void 0 } = $$props;
  let { height = void 0 } = $$props;
  let { containerWidth = width || 100 } = $$props;
  let { containerHeight = height || 100 } = $$props;
  let { element = void 0 } = $$props;
  let { x = void 0 } = $$props;
  let { y = void 0 } = $$props;
  let { z = void 0 } = $$props;
  let { r = void 0 } = $$props;
  let { data = [] } = $$props;
  let { xDomain = void 0 } = $$props;
  let { yDomain = void 0 } = $$props;
  let { zDomain = void 0 } = $$props;
  let { rDomain = void 0 } = $$props;
  let { xNice = false } = $$props;
  let { yNice = false } = $$props;
  let { zNice = false } = $$props;
  let { rNice = false } = $$props;
  let { xPadding = void 0 } = $$props;
  let { yPadding = void 0 } = $$props;
  let { zPadding = void 0 } = $$props;
  let { rPadding = void 0 } = $$props;
  let { xScale = defaultScales.x } = $$props;
  let { yScale = defaultScales.y } = $$props;
  let { zScale = defaultScales.z } = $$props;
  let { rScale = defaultScales.r } = $$props;
  let { xRange = void 0 } = $$props;
  let { yRange = void 0 } = $$props;
  let { zRange = void 0 } = $$props;
  let { rRange = void 0 } = $$props;
  let { xReverse = false } = $$props;
  let { yReverse = void 0 } = $$props;
  let { zReverse = false } = $$props;
  let { rReverse = false } = $$props;
  let { xDomainSort = true } = $$props;
  let { yDomainSort = true } = $$props;
  let { zDomainSort = true } = $$props;
  let { rDomainSort = true } = $$props;
  let { padding = {} } = $$props;
  let { extents = {} } = $$props;
  let { flatData = void 0 } = $$props;
  let { custom = {} } = $$props;
  let { debug = false } = $$props;
  let { verbose = true } = $$props;
  let isMounted = false;
  const config = {};
  const _percentRange = writable(percentRange);
  $$unsubscribe__percentRange = subscribe(_percentRange, (value) => $_percentRange = value);
  const _containerWidth = writable(containerWidth);
  $$unsubscribe__containerWidth = subscribe(_containerWidth, (value) => $_containerWidth = value);
  const _containerHeight = writable(containerHeight);
  $$unsubscribe__containerHeight = subscribe(_containerHeight, (value) => $_containerHeight = value);
  const _extents = writable(filterObject(extents));
  $$unsubscribe__extents = subscribe(_extents, (value) => $_extents = value);
  const _data = writable(data);
  $$unsubscribe__data = subscribe(_data, (value) => $_data = value);
  const _flatData = writable(flatData || data);
  $$unsubscribe__flatData = subscribe(_flatData, (value) => $_flatData = value);
  const _padding = writable(padding);
  $$unsubscribe__padding = subscribe(_padding, (value) => $_padding = value);
  const _x = writable(makeAccessor(x));
  $$unsubscribe__x = subscribe(_x, (value) => $_x = value);
  const _y = writable(makeAccessor(y));
  $$unsubscribe__y = subscribe(_y, (value) => $_y = value);
  const _z = writable(makeAccessor(z));
  $$unsubscribe__z = subscribe(_z, (value) => $_z = value);
  const _r = writable(makeAccessor(r));
  $$unsubscribe__r = subscribe(_r, (value) => $_r = value);
  const _xDomain = writable(xDomain);
  $$unsubscribe__xDomain = subscribe(_xDomain, (value) => $_xDomain = value);
  const _yDomain = writable(yDomain);
  $$unsubscribe__yDomain = subscribe(_yDomain, (value) => $_yDomain = value);
  const _zDomain = writable(zDomain);
  $$unsubscribe__zDomain = subscribe(_zDomain, (value) => $_zDomain = value);
  const _rDomain = writable(rDomain);
  $$unsubscribe__rDomain = subscribe(_rDomain, (value) => $_rDomain = value);
  const _xNice = writable(xNice);
  $$unsubscribe__xNice = subscribe(_xNice, (value) => $_xNice = value);
  const _yNice = writable(yNice);
  $$unsubscribe__yNice = subscribe(_yNice, (value) => $_yNice = value);
  const _zNice = writable(zNice);
  $$unsubscribe__zNice = subscribe(_zNice, (value) => $_zNice = value);
  const _rNice = writable(rNice);
  $$unsubscribe__rNice = subscribe(_rNice, (value) => $_rNice = value);
  const _xReverse = writable(xReverse);
  $$unsubscribe__xReverse = subscribe(_xReverse, (value) => $_xReverse = value);
  const _yReverse = writable(yReverseValue);
  $$unsubscribe__yReverse = subscribe(_yReverse, (value) => $_yReverse = value);
  const _zReverse = writable(zReverse);
  $$unsubscribe__zReverse = subscribe(_zReverse, (value) => $_zReverse = value);
  const _rReverse = writable(rReverse);
  $$unsubscribe__rReverse = subscribe(_rReverse, (value) => $_rReverse = value);
  const _xPadding = writable(xPadding);
  $$unsubscribe__xPadding = subscribe(_xPadding, (value) => $_xPadding = value);
  const _yPadding = writable(yPadding);
  $$unsubscribe__yPadding = subscribe(_yPadding, (value) => $_yPadding = value);
  const _zPadding = writable(zPadding);
  $$unsubscribe__zPadding = subscribe(_zPadding, (value) => $_zPadding = value);
  const _rPadding = writable(rPadding);
  $$unsubscribe__rPadding = subscribe(_rPadding, (value) => $_rPadding = value);
  const _xRange = writable(xRange);
  $$unsubscribe__xRange = subscribe(_xRange, (value) => $_xRange = value);
  const _yRange = writable(yRange);
  $$unsubscribe__yRange = subscribe(_yRange, (value) => $_yRange = value);
  const _zRange = writable(zRange);
  $$unsubscribe__zRange = subscribe(_zRange, (value) => $_zRange = value);
  const _rRange = writable(rRange);
  $$unsubscribe__rRange = subscribe(_rRange, (value) => $_rRange = value);
  const _xScale = writable(xScale);
  $$unsubscribe__xScale = subscribe(_xScale, (value) => $_xScale = value);
  const _yScale = writable(yScale);
  $$unsubscribe__yScale = subscribe(_yScale, (value) => $_yScale = value);
  const _zScale = writable(zScale);
  $$unsubscribe__zScale = subscribe(_zScale, (value) => $_zScale = value);
  const _rScale = writable(rScale);
  $$unsubscribe__rScale = subscribe(_rScale, (value) => $_rScale = value);
  const _xDomainSort = writable(xDomainSort);
  $$unsubscribe__xDomainSort = subscribe(_xDomainSort, (value) => $_xDomainSort = value);
  const _yDomainSort = writable(yDomainSort);
  $$unsubscribe__yDomainSort = subscribe(_yDomainSort, (value) => $_yDomainSort = value);
  const _zDomainSort = writable(zDomainSort);
  $$unsubscribe__zDomainSort = subscribe(_zDomainSort, (value) => $_zDomainSort = value);
  const _rDomainSort = writable(rDomainSort);
  $$unsubscribe__rDomainSort = subscribe(_rDomainSort, (value) => $_rDomainSort = value);
  const _config = writable(config);
  $$unsubscribe__config = subscribe(_config, (value) => $_config = value);
  const _custom = writable(custom);
  $$unsubscribe__custom = subscribe(_custom, (value) => $_custom = value);
  const activeGetters_d = derived([_x, _y, _z, _r], ([$x, $y, $z, $r]) => {
    const obj = {};
    if ($x) {
      obj.x = $x;
    }
    if ($y) {
      obj.y = $y;
    }
    if ($z) {
      obj.z = $z;
    }
    if ($r) {
      obj.r = $r;
    }
    return obj;
  });
  $$unsubscribe_activeGetters_d = subscribe(activeGetters_d, (value) => $activeGetters_d = value);
  const padding_d = derived([_padding, _containerWidth, _containerHeight], ([$padding]) => {
    const defaultPadding = { top: 0, right: 0, bottom: 0, left: 0 };
    return Object.assign(defaultPadding, $padding);
  });
  $$unsubscribe_padding_d = subscribe(padding_d, (value) => $padding_d = value);
  const box_d = derived([_containerWidth, _containerHeight, padding_d], ([$containerWidth, $containerHeight, $padding]) => {
    const b = {};
    b.top = $padding.top;
    b.right = $containerWidth - $padding.right;
    b.bottom = $containerHeight - $padding.bottom;
    b.left = $padding.left;
    b.width = b.right - b.left;
    b.height = b.bottom - b.top;
    if (verbose === true) {
      if (b.width <= 0 && isMounted === true) {
        console.warn("[LayerCake] Target div has zero or negative width. Did you forget to set an explicit width in CSS on the container?");
      }
      if (b.height <= 0 && isMounted === true) {
        console.warn("[LayerCake] Target div has zero or negative height. Did you forget to set an explicit height in CSS on the container?");
      }
    }
    return b;
  });
  $$unsubscribe_box_d = subscribe(box_d, (value) => $box_d = value);
  const width_d = derived([box_d], ([$box]) => {
    return $box.width;
  });
  $$unsubscribe_width_d = subscribe(width_d, (value) => $width_d = value);
  const height_d = derived([box_d], ([$box]) => {
    return $box.height;
  });
  $$unsubscribe_height_d = subscribe(height_d, (value) => $height_d = value);
  const extents_d = derived(
    [
      _flatData,
      activeGetters_d,
      _extents,
      _xScale,
      _yScale,
      _rScale,
      _zScale,
      _xDomainSort,
      _yDomainSort,
      _zDomainSort,
      _rDomainSort
    ],
    ([
      $flatData,
      $activeGetters,
      $extents,
      $_xScale2,
      $_yScale2,
      $_rScale2,
      $_zScale2,
      $_xDomainSort2,
      $_yDomainSort2,
      $_zDomainSort2,
      $_rDomainSort2
    ]) => {
      const scaleLookup = {
        x: { scale: $_xScale2, sort: $_xDomainSort2 },
        y: { scale: $_yScale2, sort: $_yDomainSort2 },
        r: { scale: $_rScale2, sort: $_rDomainSort2 },
        z: { scale: $_zScale2, sort: $_zDomainSort2 }
      };
      const getters = filterObject($activeGetters, $extents);
      const activeScales = Object.fromEntries(Object.keys(getters).map((k) => [k, scaleLookup[k]]));
      if (Object.keys(getters).length > 0) {
        const calculatedExtents = calcScaleExtents($flatData, getters, activeScales);
        return { ...calculatedExtents, ...$extents };
      } else {
        return {};
      }
    }
  );
  $$unsubscribe_extents_d = subscribe(extents_d, (value) => $extents_d = value);
  const xDomain_d = derived([extents_d, _xDomain], calcDomain("x"));
  $$unsubscribe_xDomain_d = subscribe(xDomain_d, (value) => $xDomain_d = value);
  const yDomain_d = derived([extents_d, _yDomain], calcDomain("y"));
  $$unsubscribe_yDomain_d = subscribe(yDomain_d, (value) => $yDomain_d = value);
  const zDomain_d = derived([extents_d, _zDomain], calcDomain("z"));
  $$unsubscribe_zDomain_d = subscribe(zDomain_d, (value) => $zDomain_d = value);
  const rDomain_d = derived([extents_d, _rDomain], calcDomain("r"));
  $$unsubscribe_rDomain_d = subscribe(rDomain_d, (value) => $rDomain_d = value);
  const xScale_d = derived(
    [
      _xScale,
      extents_d,
      xDomain_d,
      _xPadding,
      _xNice,
      _xReverse,
      width_d,
      height_d,
      _xRange,
      _percentRange
    ],
    createScale("x")
  );
  $$unsubscribe_xScale_d = subscribe(xScale_d, (value) => $xScale_d = value);
  const xGet_d = derived([_x, xScale_d], createGetter);
  $$unsubscribe_xGet_d = subscribe(xGet_d, (value) => $xGet_d = value);
  const yScale_d = derived(
    [
      _yScale,
      extents_d,
      yDomain_d,
      _yPadding,
      _yNice,
      _yReverse,
      width_d,
      height_d,
      _yRange,
      _percentRange
    ],
    createScale("y")
  );
  $$unsubscribe_yScale_d = subscribe(yScale_d, (value) => $yScale_d = value);
  const yGet_d = derived([_y, yScale_d], createGetter);
  $$unsubscribe_yGet_d = subscribe(yGet_d, (value) => $yGet_d = value);
  const zScale_d = derived(
    [
      _zScale,
      extents_d,
      zDomain_d,
      _zPadding,
      _zNice,
      _zReverse,
      width_d,
      height_d,
      _zRange,
      _percentRange
    ],
    createScale("z")
  );
  $$unsubscribe_zScale_d = subscribe(zScale_d, (value) => $zScale_d = value);
  const zGet_d = derived([_z, zScale_d], createGetter);
  $$unsubscribe_zGet_d = subscribe(zGet_d, (value) => $zGet_d = value);
  const rScale_d = derived(
    [
      _rScale,
      extents_d,
      rDomain_d,
      _rPadding,
      _rNice,
      _rReverse,
      width_d,
      height_d,
      _rRange,
      _percentRange
    ],
    createScale("r")
  );
  $$unsubscribe_rScale_d = subscribe(rScale_d, (value) => $rScale_d = value);
  const rGet_d = derived([_r, rScale_d], createGetter);
  $$unsubscribe_rGet_d = subscribe(rGet_d, (value) => $rGet_d = value);
  const xDomain_d_possibly_nice = derived(xScale_d, ($xScale_d2) => $xScale_d2.domain());
  const yDomain_d_possibly_nice = derived(yScale_d, ($yScale_d2) => $yScale_d2.domain());
  const zDomain_d_possibly_nice = derived(zScale_d, ($zScale_d2) => $zScale_d2.domain());
  const rDomain_d_possibly_nice = derived(rScale_d, ($rScale_d2) => $rScale_d2.domain());
  const xRange_d = derived([xScale_d], getRange);
  $$unsubscribe_xRange_d = subscribe(xRange_d, (value) => $xRange_d = value);
  const yRange_d = derived([yScale_d], getRange);
  $$unsubscribe_yRange_d = subscribe(yRange_d, (value) => $yRange_d = value);
  const zRange_d = derived([zScale_d], getRange);
  $$unsubscribe_zRange_d = subscribe(zRange_d, (value) => $zRange_d = value);
  const rRange_d = derived([rScale_d], getRange);
  $$unsubscribe_rRange_d = subscribe(rRange_d, (value) => $rRange_d = value);
  const aspectRatio_d = derived([width_d, height_d], ([$width, $height]) => {
    return $width / $height;
  });
  $$unsubscribe_aspectRatio_d = subscribe(aspectRatio_d, (value) => $aspectRatio_d = value);
  if ($$props.ssr === void 0 && $$bindings.ssr && ssr !== void 0) $$bindings.ssr(ssr);
  if ($$props.pointerEvents === void 0 && $$bindings.pointerEvents && pointerEvents !== void 0) $$bindings.pointerEvents(pointerEvents);
  if ($$props.position === void 0 && $$bindings.position && position !== void 0) $$bindings.position(position);
  if ($$props.percentRange === void 0 && $$bindings.percentRange && percentRange !== void 0) $$bindings.percentRange(percentRange);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0) $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0) $$bindings.height(height);
  if ($$props.containerWidth === void 0 && $$bindings.containerWidth && containerWidth !== void 0) $$bindings.containerWidth(containerWidth);
  if ($$props.containerHeight === void 0 && $$bindings.containerHeight && containerHeight !== void 0) $$bindings.containerHeight(containerHeight);
  if ($$props.element === void 0 && $$bindings.element && element !== void 0) $$bindings.element(element);
  if ($$props.x === void 0 && $$bindings.x && x !== void 0) $$bindings.x(x);
  if ($$props.y === void 0 && $$bindings.y && y !== void 0) $$bindings.y(y);
  if ($$props.z === void 0 && $$bindings.z && z !== void 0) $$bindings.z(z);
  if ($$props.r === void 0 && $$bindings.r && r !== void 0) $$bindings.r(r);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  if ($$props.xDomain === void 0 && $$bindings.xDomain && xDomain !== void 0) $$bindings.xDomain(xDomain);
  if ($$props.yDomain === void 0 && $$bindings.yDomain && yDomain !== void 0) $$bindings.yDomain(yDomain);
  if ($$props.zDomain === void 0 && $$bindings.zDomain && zDomain !== void 0) $$bindings.zDomain(zDomain);
  if ($$props.rDomain === void 0 && $$bindings.rDomain && rDomain !== void 0) $$bindings.rDomain(rDomain);
  if ($$props.xNice === void 0 && $$bindings.xNice && xNice !== void 0) $$bindings.xNice(xNice);
  if ($$props.yNice === void 0 && $$bindings.yNice && yNice !== void 0) $$bindings.yNice(yNice);
  if ($$props.zNice === void 0 && $$bindings.zNice && zNice !== void 0) $$bindings.zNice(zNice);
  if ($$props.rNice === void 0 && $$bindings.rNice && rNice !== void 0) $$bindings.rNice(rNice);
  if ($$props.xPadding === void 0 && $$bindings.xPadding && xPadding !== void 0) $$bindings.xPadding(xPadding);
  if ($$props.yPadding === void 0 && $$bindings.yPadding && yPadding !== void 0) $$bindings.yPadding(yPadding);
  if ($$props.zPadding === void 0 && $$bindings.zPadding && zPadding !== void 0) $$bindings.zPadding(zPadding);
  if ($$props.rPadding === void 0 && $$bindings.rPadding && rPadding !== void 0) $$bindings.rPadding(rPadding);
  if ($$props.xScale === void 0 && $$bindings.xScale && xScale !== void 0) $$bindings.xScale(xScale);
  if ($$props.yScale === void 0 && $$bindings.yScale && yScale !== void 0) $$bindings.yScale(yScale);
  if ($$props.zScale === void 0 && $$bindings.zScale && zScale !== void 0) $$bindings.zScale(zScale);
  if ($$props.rScale === void 0 && $$bindings.rScale && rScale !== void 0) $$bindings.rScale(rScale);
  if ($$props.xRange === void 0 && $$bindings.xRange && xRange !== void 0) $$bindings.xRange(xRange);
  if ($$props.yRange === void 0 && $$bindings.yRange && yRange !== void 0) $$bindings.yRange(yRange);
  if ($$props.zRange === void 0 && $$bindings.zRange && zRange !== void 0) $$bindings.zRange(zRange);
  if ($$props.rRange === void 0 && $$bindings.rRange && rRange !== void 0) $$bindings.rRange(rRange);
  if ($$props.xReverse === void 0 && $$bindings.xReverse && xReverse !== void 0) $$bindings.xReverse(xReverse);
  if ($$props.yReverse === void 0 && $$bindings.yReverse && yReverse !== void 0) $$bindings.yReverse(yReverse);
  if ($$props.zReverse === void 0 && $$bindings.zReverse && zReverse !== void 0) $$bindings.zReverse(zReverse);
  if ($$props.rReverse === void 0 && $$bindings.rReverse && rReverse !== void 0) $$bindings.rReverse(rReverse);
  if ($$props.xDomainSort === void 0 && $$bindings.xDomainSort && xDomainSort !== void 0) $$bindings.xDomainSort(xDomainSort);
  if ($$props.yDomainSort === void 0 && $$bindings.yDomainSort && yDomainSort !== void 0) $$bindings.yDomainSort(yDomainSort);
  if ($$props.zDomainSort === void 0 && $$bindings.zDomainSort && zDomainSort !== void 0) $$bindings.zDomainSort(zDomainSort);
  if ($$props.rDomainSort === void 0 && $$bindings.rDomainSort && rDomainSort !== void 0) $$bindings.rDomainSort(rDomainSort);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0) $$bindings.padding(padding);
  if ($$props.extents === void 0 && $$bindings.extents && extents !== void 0) $$bindings.extents(extents);
  if ($$props.flatData === void 0 && $$bindings.flatData && flatData !== void 0) $$bindings.flatData(flatData);
  if ($$props.custom === void 0 && $$bindings.custom && custom !== void 0) $$bindings.custom(custom);
  if ($$props.debug === void 0 && $$bindings.debug && debug !== void 0) $$bindings.debug(debug);
  if ($$props.verbose === void 0 && $$bindings.verbose && verbose !== void 0) $$bindings.verbose(verbose);
  $$result.css.add(css$d);
  yReverseValue = typeof yReverse === "undefined" ? typeof yScale.bandwidth === "function" ? false : true : yReverse;
  {
    if (x) config.x = x;
  }
  {
    if (y) config.y = y;
  }
  {
    if (z) config.z = z;
  }
  {
    if (r) config.r = r;
  }
  {
    if (xDomain) config.xDomain = xDomain;
  }
  {
    if (yDomain) config.yDomain = yDomain;
  }
  {
    if (zDomain) config.zDomain = zDomain;
  }
  {
    if (rDomain) config.rDomain = rDomain;
  }
  {
    if (xRange) config.xRange = xRange;
  }
  {
    if (yRange) config.yRange = yRange;
  }
  {
    if (zRange) config.zRange = zRange;
  }
  {
    if (rRange) config.rRange = rRange;
  }
  set_store_value(_percentRange, $_percentRange = percentRange, $_percentRange);
  set_store_value(_containerWidth, $_containerWidth = containerWidth, $_containerWidth);
  set_store_value(_containerHeight, $_containerHeight = containerHeight, $_containerHeight);
  set_store_value(_extents, $_extents = filterObject(extents), $_extents);
  set_store_value(_data, $_data = data, $_data);
  set_store_value(_flatData, $_flatData = flatData || data, $_flatData);
  set_store_value(_padding, $_padding = padding, $_padding);
  set_store_value(_x, $_x = makeAccessor(x), $_x);
  set_store_value(_y, $_y = makeAccessor(y), $_y);
  set_store_value(_z, $_z = makeAccessor(z), $_z);
  set_store_value(_r, $_r = makeAccessor(r), $_r);
  set_store_value(_xDomain, $_xDomain = xDomain, $_xDomain);
  set_store_value(_yDomain, $_yDomain = yDomain, $_yDomain);
  set_store_value(_zDomain, $_zDomain = zDomain, $_zDomain);
  set_store_value(_rDomain, $_rDomain = rDomain, $_rDomain);
  set_store_value(_xNice, $_xNice = xNice, $_xNice);
  set_store_value(_yNice, $_yNice = yNice, $_yNice);
  set_store_value(_zNice, $_zNice = zNice, $_zNice);
  set_store_value(_rNice, $_rNice = rNice, $_rNice);
  set_store_value(_xReverse, $_xReverse = xReverse, $_xReverse);
  set_store_value(_yReverse, $_yReverse = yReverseValue, $_yReverse);
  set_store_value(_zReverse, $_zReverse = zReverse, $_zReverse);
  set_store_value(_rReverse, $_rReverse = rReverse, $_rReverse);
  set_store_value(_xPadding, $_xPadding = xPadding, $_xPadding);
  set_store_value(_yPadding, $_yPadding = yPadding, $_yPadding);
  set_store_value(_zPadding, $_zPadding = zPadding, $_zPadding);
  set_store_value(_rPadding, $_rPadding = rPadding, $_rPadding);
  set_store_value(_xRange, $_xRange = xRange, $_xRange);
  set_store_value(_yRange, $_yRange = yRange, $_yRange);
  set_store_value(_zRange, $_zRange = zRange, $_zRange);
  set_store_value(_rRange, $_rRange = rRange, $_rRange);
  set_store_value(_xScale, $_xScale = xScale, $_xScale);
  set_store_value(_yScale, $_yScale = yScale, $_yScale);
  set_store_value(_zScale, $_zScale = zScale, $_zScale);
  set_store_value(_rScale, $_rScale = rScale, $_rScale);
  set_store_value(_custom, $_custom = custom, $_custom);
  set_store_value(_config, $_config = config, $_config);
  context = {
    activeGetters: activeGetters_d,
    width: width_d,
    height: height_d,
    percentRange: _percentRange,
    aspectRatio: aspectRatio_d,
    containerWidth: _containerWidth,
    containerHeight: _containerHeight,
    x: _x,
    y: _y,
    z: _z,
    r: _r,
    custom: _custom,
    data: _data,
    xNice: _xNice,
    yNice: _yNice,
    zNice: _zNice,
    rNice: _rNice,
    xDomainSort: _xDomainSort,
    yDomainSort: _yDomainSort,
    zDomainSort: _zDomainSort,
    rDomainSort: _rDomainSort,
    xReverse: _xReverse,
    yReverse: _yReverse,
    zReverse: _zReverse,
    rReverse: _rReverse,
    xPadding: _xPadding,
    yPadding: _yPadding,
    zPadding: _zPadding,
    rPadding: _rPadding,
    padding: padding_d,
    flatData: _flatData,
    extents: extents_d,
    xDomain: xDomain_d_possibly_nice,
    yDomain: yDomain_d_possibly_nice,
    zDomain: zDomain_d_possibly_nice,
    rDomain: rDomain_d_possibly_nice,
    xRange: xRange_d,
    yRange: yRange_d,
    zRange: zRange_d,
    rRange: rRange_d,
    config: _config,
    xScale: xScale_d,
    xGet: xGet_d,
    yScale: yScale_d,
    yGet: yGet_d,
    zScale: zScale_d,
    zGet: zGet_d,
    rScale: rScale_d,
    rGet: rGet_d
  };
  {
    setContext("LayerCake", context);
  }
  {
    if ($box_d && debug === true && (ssr === true || typeof window !== "undefined")) {
      printDebug_debounced({
        data: $_data,
        flatData: typeof flatData !== "undefined" ? $_flatData : null,
        boundingBox: $box_d,
        activeGetters: $activeGetters_d,
        x: config.x,
        y: config.y,
        z: config.z,
        r: config.r,
        xScale: $xScale_d,
        yScale: $yScale_d,
        zScale: $zScale_d,
        rScale: $rScale_d
      });
    }
  }
  $$unsubscribe_rScale_d();
  $$unsubscribe_zScale_d();
  $$unsubscribe_yScale_d();
  $$unsubscribe_xScale_d();
  $$unsubscribe_activeGetters_d();
  $$unsubscribe_box_d();
  $$unsubscribe__flatData();
  $$unsubscribe__data();
  $$unsubscribe__config();
  $$unsubscribe__custom();
  $$unsubscribe__rScale();
  $$unsubscribe__zScale();
  $$unsubscribe__yScale();
  $$unsubscribe__xScale();
  $$unsubscribe__rRange();
  $$unsubscribe__zRange();
  $$unsubscribe__yRange();
  $$unsubscribe__xRange();
  $$unsubscribe__rPadding();
  $$unsubscribe__zPadding();
  $$unsubscribe__yPadding();
  $$unsubscribe__xPadding();
  $$unsubscribe__rReverse();
  $$unsubscribe__zReverse();
  $$unsubscribe__yReverse();
  $$unsubscribe__xReverse();
  $$unsubscribe__rNice();
  $$unsubscribe__zNice();
  $$unsubscribe__yNice();
  $$unsubscribe__xNice();
  $$unsubscribe__rDomain();
  $$unsubscribe__zDomain();
  $$unsubscribe__yDomain();
  $$unsubscribe__xDomain();
  $$unsubscribe__r();
  $$unsubscribe__z();
  $$unsubscribe__y();
  $$unsubscribe__x();
  $$unsubscribe__padding();
  $$unsubscribe__extents();
  $$unsubscribe__containerHeight();
  $$unsubscribe__containerWidth();
  $$unsubscribe__percentRange();
  $$unsubscribe_width_d();
  $$unsubscribe_height_d();
  $$unsubscribe_aspectRatio_d();
  $$unsubscribe__xDomainSort();
  $$unsubscribe__yDomainSort();
  $$unsubscribe__zDomainSort();
  $$unsubscribe__rDomainSort();
  $$unsubscribe_padding_d();
  $$unsubscribe_extents_d();
  $$unsubscribe_xDomain_d();
  $$unsubscribe_yDomain_d();
  $$unsubscribe_zDomain_d();
  $$unsubscribe_rDomain_d();
  $$unsubscribe_xRange_d();
  $$unsubscribe_yRange_d();
  $$unsubscribe_zRange_d();
  $$unsubscribe_rRange_d();
  $$unsubscribe_xGet_d();
  $$unsubscribe_yGet_d();
  $$unsubscribe_zGet_d();
  $$unsubscribe_rGet_d();
  return `  ${ssr === true || typeof window !== "undefined" ? `<div class="layercake-container svelte-w5m4wa"${add_styles({
    position,
    "top": position === "absolute" ? "0" : null,
    "right": position === "absolute" ? "0" : null,
    "bottom": position === "absolute" ? "0" : null,
    "left": position === "absolute" ? "0" : null,
    "pointer-events": pointerEvents === false ? "none" : null
  })}${add_attribute("this", element, 0)}>${slots.default ? slots.default({
    element,
    width: $width_d,
    height: $height_d,
    aspectRatio: $aspectRatio_d,
    containerWidth: $_containerWidth,
    containerHeight: $_containerHeight,
    activeGetters: $activeGetters_d,
    percentRange: $_percentRange,
    x: $_x,
    y: $_y,
    z: $_z,
    r: $_r,
    custom: $_custom,
    data: $_data,
    xNice: $_xNice,
    yNice: $_yNice,
    zNice: $_zNice,
    rNice: $_rNice,
    xDomainSort: $_xDomainSort,
    yDomainSort: $_yDomainSort,
    zDomainSort: $_zDomainSort,
    rDomainSort: $_rDomainSort,
    xReverse: $_xReverse,
    yReverse: $_yReverse,
    zReverse: $_zReverse,
    rReverse: $_rReverse,
    xPadding: $_xPadding,
    yPadding: $_yPadding,
    zPadding: $_zPadding,
    rPadding: $_rPadding,
    padding: $padding_d,
    flatData: $_flatData,
    extents: $extents_d,
    xDomain: $xDomain_d,
    yDomain: $yDomain_d,
    zDomain: $zDomain_d,
    rDomain: $rDomain_d,
    xRange: $xRange_d,
    yRange: $yRange_d,
    zRange: $zRange_d,
    rRange: $rRange_d,
    config: $_config,
    xScale: $xScale_d,
    xGet: $xGet_d,
    yScale: $yScale_d,
    yGet: $yGet_d,
    zScale: $zScale_d,
    zGet: $zGet_d,
    rScale: $rScale_d,
    rGet: $rGet_d
  }) : ``}</div>` : ``}`;
});
const css$c = {
  code: "svg.svelte-17l4rdd{position:absolute;top:0;left:0;overflow:visible}",
  map: '{"version":3,"file":"Svg.svelte","sources":["Svg.svelte"],"sourcesContent":["<!--\\n\\t@component\\n\\tSVG layout component\\n -->\\n<script>\\n\\timport { getContext } from \'svelte\';\\n\\n\\t/** @type {Element|undefined} [element] The layer\'s `<svg>` tag. Useful for bindings. */\\n\\texport let element = undefined;\\n\\n\\t/** @type {Element|undefined} [innerElement] The layer\'s `<g>` tag. Useful for bindings. */\\n\\texport let innerElement = undefined;\\n\\n\\t/** @type {Number|undefined} [zIndex] The layer\'s z-index. */\\n\\texport let zIndex = undefined;\\n\\n\\t/** @type {boolean|undefined} [pointerEvents] Set this to `false` to set `pointer-events: none;` on the entire layer. */\\n\\texport let pointerEvents = undefined;\\n\\n\\t/** @type {String|undefined} [viewBox] A string passed to the `viewBox` property on the `<svg>` tag. */\\n\\texport let viewBox = undefined;\\n\\n\\t/** @type {String|undefined} [label] A string passed to the `aria-label` property on the `<svg>` tag. */\\n\\texport let label = undefined;\\n\\n\\t/** @type {String|undefined} [labelledBy] A string passed to the `aria-labelledby property` on the `<svg>` tag. */\\n\\texport let labelledBy = undefined;\\n\\n\\t/** @type {String|undefined} [describedBy] A string passed to the `aria-describedby` property on the `<svg>` tag. */\\n\\texport let describedBy = undefined;\\n\\n\\t/** @type {String|undefined} [title] Shorthand to set the contents of `<title></title>` for accessibility. You can also set arbitrary HTML via the \\"title\\" slot but this is a convenient shorthand. If you use the \\"title\\" slot, this prop is ignored. */\\n\\texport let title = undefined;\\n\\n\\tconst { containerWidth, containerHeight, padding } = getContext(\'LayerCake\');\\n<\/script>\\n\\n<svg\\n\\tbind:this={element}\\n\\tclass=\\"layercake-layout-svg\\"\\n\\t{viewBox}\\n\\twidth={$containerWidth}\\n\\theight={$containerHeight}\\n\\tstyle:z-index={zIndex}\\n\\tstyle:pointer-events={pointerEvents === false ? \'none\' : null}\\n\\taria-label={label}\\n\\taria-labelledby={labelledBy}\\n\\taria-describedby={describedBy}\\n>\\n\\t<slot name=\\"title\\"\\n\\t\\t>{#if title}<title>{title}</title>{/if}</slot\\n\\t>\\n\\n\\t<defs>\\n\\t\\t<slot name=\\"defs\\"></slot>\\n\\t</defs>\\n\\t<g\\n\\t\\tbind:this={innerElement}\\n\\t\\tclass=\\"layercake-layout-svg_g\\"\\n\\t\\ttransform=\\"translate({$padding.left}, {$padding.top})\\"\\n\\t>\\n\\t\\t<slot {element}></slot>\\n\\t</g>\\n</svg>\\n\\n<style>\\n\\tsvg {\\n\\t\\tposition: absolute;\\n\\t\\ttop: 0;\\n\\t\\tleft: 0;\\n\\t\\toverflow: visible;\\n\\t}</style>\\n"],"names":[],"mappings":"AAkEC,kBAAI,CACH,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,CAAC,CACP,QAAQ,CAAE,OACX"}'
};
const Svg = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $containerWidth, $$unsubscribe_containerWidth;
  let $containerHeight, $$unsubscribe_containerHeight;
  let $padding, $$unsubscribe_padding;
  let { element = void 0 } = $$props;
  let { innerElement = void 0 } = $$props;
  let { zIndex = void 0 } = $$props;
  let { pointerEvents = void 0 } = $$props;
  let { viewBox = void 0 } = $$props;
  let { label = void 0 } = $$props;
  let { labelledBy = void 0 } = $$props;
  let { describedBy = void 0 } = $$props;
  let { title = void 0 } = $$props;
  const { containerWidth, containerHeight, padding } = getContext("LayerCake");
  $$unsubscribe_containerWidth = subscribe(containerWidth, (value) => $containerWidth = value);
  $$unsubscribe_containerHeight = subscribe(containerHeight, (value) => $containerHeight = value);
  $$unsubscribe_padding = subscribe(padding, (value) => $padding = value);
  if ($$props.element === void 0 && $$bindings.element && element !== void 0) $$bindings.element(element);
  if ($$props.innerElement === void 0 && $$bindings.innerElement && innerElement !== void 0) $$bindings.innerElement(innerElement);
  if ($$props.zIndex === void 0 && $$bindings.zIndex && zIndex !== void 0) $$bindings.zIndex(zIndex);
  if ($$props.pointerEvents === void 0 && $$bindings.pointerEvents && pointerEvents !== void 0) $$bindings.pointerEvents(pointerEvents);
  if ($$props.viewBox === void 0 && $$bindings.viewBox && viewBox !== void 0) $$bindings.viewBox(viewBox);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0) $$bindings.label(label);
  if ($$props.labelledBy === void 0 && $$bindings.labelledBy && labelledBy !== void 0) $$bindings.labelledBy(labelledBy);
  if ($$props.describedBy === void 0 && $$bindings.describedBy && describedBy !== void 0) $$bindings.describedBy(describedBy);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  $$result.css.add(css$c);
  $$unsubscribe_containerWidth();
  $$unsubscribe_containerHeight();
  $$unsubscribe_padding();
  return `  <svg class="layercake-layout-svg svelte-17l4rdd"${add_attribute("viewBox", viewBox, 0)}${add_attribute("width", $containerWidth, 0)}${add_attribute("height", $containerHeight, 0)}${add_attribute("aria-label", label, 0)}${add_attribute("aria-labelledby", labelledBy, 0)}${add_attribute("aria-describedby", describedBy, 0)}${add_styles({
    "z-index": zIndex,
    "pointer-events": pointerEvents === false ? "none" : null
  })}${add_attribute("this", element, 0)}>${slots.title ? slots.title({}) : `${title ? `<title>${escape(title)}</title>` : ``}`}<defs>${slots.defs ? slots.defs({}) : ``}</defs><g class="layercake-layout-svg_g" transform="${"translate(" + escape($padding.left, true) + ", " + escape($padding.top, true) + ")"}"${add_attribute("this", innerElement, 0)}>${slots.default ? slots.default({ element }) : ``}</g></svg>`;
});
const css$b = {
  code: "path.svelte-87y3wp{fill:none;stroke-linejoin:round;stroke-linecap:round;stroke-width:2;stroke-dasharray:1000;stroke-dashoffset:1000;-webkit-transition:stroke-dashoffset 5s;transition:stroke-dashoffset 5s}.animate.svelte-87y3wp{stroke-dashoffset:0}",
  map: '{"version":3,"file":"Line.svelte","sources":["Line.svelte"],"sourcesContent":["<script>\\n\\timport { getContext } from \\"svelte\\";\\n\\timport { line, curveLinear } from \\"d3\\";\\n\\n\\tconst { data, xGet, yGet } = getContext(\\"LayerCake\\");\\n\\n\\texport let stroke = \\"#ccc\\";\\n\\texport let curve = curveLinear;\\n\\texport let inViewTrigger = false;\\n\\n\\t// d3 line generator\\n\\t$: path = line().x($xGet).y($yGet).curve(curve);\\n\\t$: pathD = path($data);\\n\\n\\t// get last point in the data array to place the circle\\n\\t$: lastPoint = $data.length > 0 ? { x: $xGet($data[$data.length - 1]), y: $yGet($data[$data.length - 1]) }: {x: 0, y: 0};\\n<\/script>\\n\\n// line path\\n<path d={pathD} {stroke} class:animate={inViewTrigger}/>\\n\\n// circle path\\n<!-- <circle \\n    cx={lastPoint.x} \\n    cy={lastPoint.y} \\n    r=\\"3\\" \\n    fill={stroke} \\n    class:showCircle={inViewTrigger} \\n/> -->\\n\\n<style>\\n\\tpath {\\n\\t\\tfill: none;\\n\\t\\tstroke-linejoin: round;\\n\\t\\tstroke-linecap: round;\\n\\t\\tstroke-width: 2;\\n\\t\\tstroke-dasharray: 1000;\\n\\t\\tstroke-dashoffset: 1000;\\n\\t\\t-webkit-transition: stroke-dashoffset 5s;\\n\\t\\ttransition: stroke-dashoffset 5s;\\n\\t}\\n\\n\\t.animate {\\n\\t\\t\\tstroke-dashoffset: 0;\\n\\t}\\n\\n\\tcircle {\\n\\t\\t-webkit-transition: opacity ease-in-out;\\n\\t\\ttransition: opacity ease-in-out;\\n\\t\\t-webkit-transition-delay: 2.8s;\\n\\t\\t        transition-delay: 2.8s;\\n\\t\\topacity: 0;\\n\\t}\\n\\n\\t.showCircle {\\n\\t\\topacity: 1;\\n\\t}</style>\\n"],"names":[],"mappings":"AA+BC,kBAAK,CACJ,IAAI,CAAE,IAAI,CACV,eAAe,CAAE,KAAK,CACtB,cAAc,CAAE,KAAK,CACrB,YAAY,CAAE,CAAC,CACf,gBAAgB,CAAE,IAAI,CACtB,iBAAiB,CAAE,IAAI,CACvB,kBAAkB,CAAE,iBAAiB,CAAC,EAAE,CACxC,UAAU,CAAE,iBAAiB,CAAC,EAC/B,CAEA,sBAAS,CACP,iBAAiB,CAAE,CACrB"}'
};
const Line = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let path;
  let pathD;
  let $data, $$unsubscribe_data;
  let $yGet, $$unsubscribe_yGet;
  let $xGet, $$unsubscribe_xGet;
  const { data, xGet, yGet } = getContext("LayerCake");
  $$unsubscribe_data = subscribe(data, (value) => $data = value);
  $$unsubscribe_xGet = subscribe(xGet, (value) => $xGet = value);
  $$unsubscribe_yGet = subscribe(yGet, (value) => $yGet = value);
  let { stroke = "#ccc" } = $$props;
  let { curve = curveLinear } = $$props;
  let { inViewTrigger = false } = $$props;
  if ($$props.stroke === void 0 && $$bindings.stroke && stroke !== void 0) $$bindings.stroke(stroke);
  if ($$props.curve === void 0 && $$bindings.curve && curve !== void 0) $$bindings.curve(curve);
  if ($$props.inViewTrigger === void 0 && $$bindings.inViewTrigger && inViewTrigger !== void 0) $$bindings.inViewTrigger(inViewTrigger);
  $$result.css.add(css$b);
  path = line().x($xGet).y($yGet).curve(curve);
  pathD = path($data);
  $data.length > 0 ? {
    x: $xGet($data[$data.length - 1]),
    y: $yGet($data[$data.length - 1])
  } : { x: 0, y: 0 };
  $$unsubscribe_data();
  $$unsubscribe_yGet();
  $$unsubscribe_xGet();
  return `// line path
<path${add_attribute("d", pathD, 0)}${add_attribute("stroke", stroke, 0)} class="${["svelte-87y3wp", inViewTrigger ? "animate" : ""].join(" ").trim()}"></path>

// circle path
`;
});
const css$a = {
  code: ".tick.svelte-3t5gzx.svelte-3t5gzx{font-size:0.725em;font-weight:200}line.svelte-3t5gzx.svelte-3t5gzx,.tick.svelte-3t5gzx line.svelte-3t5gzx{stroke:var(--color-gray-300);stroke-dasharray:2}.tick.svelte-3t5gzx text.svelte-3t5gzx{fill:var(--color-gray-600)}.tick.svelte-3t5gzx .tick-mark.svelte-3t5gzx,.baseline.svelte-3t5gzx.svelte-3t5gzx{stroke-dasharray:0}.axis.snapTicks.svelte-3t5gzx .tick:last-child text.svelte-3t5gzx{-webkit-transform:translateX(3px);transform:translateX(3px)}.axis.snapTicks.svelte-3t5gzx .tick.tick-0 text.svelte-3t5gzx{-webkit-transform:translateX(-3px);transform:translateX(-3px)}",
  map: `{"version":3,"file":"AxisX.svg.svelte","sources":["AxisX.svg.svelte"],"sourcesContent":["<script>\\n\\timport { getContext } from \\"svelte\\";\\n\\timport { timeFormat } from \\"d3\\";\\n\\tconst { width, height, xScale, yRange } = getContext(\\"LayerCake\\");\\n\\n\\texport let gridlines = true;\\n\\texport let tickMarks = false;\\n\\texport let baseline = false;\\n\\texport let snapTicks = false;\\n\\texport let yTick = 16;\\n\\texport let formatTick = (d) => d;\\n\\texport let ticks = undefined;\\n\\t/** If this is a number, it passes that along to the [d3Scale.ticks](https://github.com/d3/d3-scale) function. If this is an array, hardcodes the ticks to those values. If it's a function, passes along the default tick values and expects an array of tick values in return. If nothing, it uses the default ticks supplied by the D3 function. */\\n\\n\\t$: tickVals = Array.isArray(ticks)\\n\\t\\t? ticks\\n\\t\\t: typeof ticks === \\"function\\"\\n\\t\\t? ticks($xScale.ticks())\\n\\t\\t: $xScale.ticks(ticks);\\n\\n\\tconst textAnchor = (i) => {\\n\\t\\tif (snapTicks === true) {\\n\\t\\t\\tif (i === 0) {\\n\\t\\t\\t\\treturn \\"start\\";\\n\\t\\t\\t}\\n\\t\\t\\tif (i === tickVals.length - 1) {\\n\\t\\t\\t\\treturn \\"end\\";\\n\\t\\t\\t}\\n\\t\\t}\\n\\t\\treturn \\"middle\\";\\n\\t};\\n<\/script>\\n\\n<g class=\\"axis x-axis\\" class:snapTicks>\\n\\t{#each tickVals as tick, i}\\n\\t\\t<g\\n\\t\\t\\tclass=\\"tick tick-{i}\\"\\n\\t\\t\\ttransform=\\"translate({$xScale(tick)},{$yRange[0]})\\"\\n\\t\\t>\\n\\t\\t\\t{#if gridlines !== false}\\n\\t\\t\\t\\t<line class=\\"gridline\\" y1={$height * -1} y2=\\"0\\" x1=\\"0\\" x2=\\"0\\" />\\n\\t\\t\\t{/if}\\n\\t\\t\\t{#if tickMarks === true}\\n\\t\\t\\t\\t<line class=\\"tick-mark\\" y1={0} y2={6} x1={0} x2={0} />\\n\\t\\t\\t{/if}\\n\\t\\t\\t<text x={0} y={yTick} dx=\\"\\" dy=\\"\\" text-anchor={textAnchor(i)}\\n\\t\\t\\t\\t>{formatTick(tick)}</text\\n\\t\\t\\t>\\n\\t\\t</g>\\n\\t{/each}\\n\\t{#if baseline === true}\\n\\t\\t<line\\n\\t\\t\\tclass=\\"baseline\\"\\n\\t\\t\\ty1={$height + 0.5}\\n\\t\\t\\ty2={$height + 0.5}\\n\\t\\t\\tx1=\\"0\\"\\n\\t\\t\\tx2={$width}\\n\\t\\t/>\\n\\t{/if}\\n</g>\\n\\n<style>\\n\\t.tick {\\n\\t\\tfont-size: 0.725em;\\n\\t\\tfont-weight: 200;\\n\\t}\\n\\n\\tline,\\n\\t.tick line {\\n\\t\\tstroke: var(--color-gray-300);\\n\\t\\tstroke-dasharray: 2;\\n\\t}\\n\\n\\t.tick text {\\n\\t\\tfill: var(--color-gray-600);\\n\\t}\\n\\n\\t.tick .tick-mark,\\n\\t.baseline {\\n\\t\\tstroke-dasharray: 0;\\n\\t}\\n\\n\\t/* This looks slightly better */\\n\\t.axis.snapTicks .tick:last-child text {\\n\\t\\t-webkit-transform: translateX(3px);\\n\\t\\t        transform: translateX(3px);\\n\\t}\\n\\t.axis.snapTicks .tick.tick-0 text {\\n\\t\\t-webkit-transform: translateX(-3px);\\n\\t\\t        transform: translateX(-3px);\\n\\t}</style>\\n"],"names":[],"mappings":"AA8DC,iCAAM,CACL,SAAS,CAAE,OAAO,CAClB,WAAW,CAAE,GACd,CAEA,gCAAI,CACJ,mBAAK,CAAC,kBAAK,CACV,MAAM,CAAE,IAAI,gBAAgB,CAAC,CAC7B,gBAAgB,CAAE,CACnB,CAEA,mBAAK,CAAC,kBAAK,CACV,IAAI,CAAE,IAAI,gBAAgB,CAC3B,CAEA,mBAAK,CAAC,wBAAU,CAChB,qCAAU,CACT,gBAAgB,CAAE,CACnB,CAGA,KAAK,wBAAU,CAAC,KAAK,WAAW,CAAC,kBAAK,CACrC,iBAAiB,CAAE,WAAW,GAAG,CAAC,CAC1B,SAAS,CAAE,WAAW,GAAG,CAClC,CACA,KAAK,wBAAU,CAAC,KAAK,OAAO,CAAC,kBAAK,CACjC,iBAAiB,CAAE,WAAW,IAAI,CAAC,CAC3B,SAAS,CAAE,WAAW,IAAI,CACnC"}`
};
const AxisX_svg = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let tickVals;
  let $xScale, $$unsubscribe_xScale;
  let $yRange, $$unsubscribe_yRange;
  let $height, $$unsubscribe_height;
  let $width, $$unsubscribe_width;
  const { width, height, xScale, yRange } = getContext("LayerCake");
  $$unsubscribe_width = subscribe(width, (value) => $width = value);
  $$unsubscribe_height = subscribe(height, (value) => $height = value);
  $$unsubscribe_xScale = subscribe(xScale, (value) => $xScale = value);
  $$unsubscribe_yRange = subscribe(yRange, (value) => $yRange = value);
  let { gridlines = true } = $$props;
  let { tickMarks = false } = $$props;
  let { baseline = false } = $$props;
  let { snapTicks = false } = $$props;
  let { yTick = 16 } = $$props;
  let { formatTick = (d) => d } = $$props;
  let { ticks = void 0 } = $$props;
  const textAnchor = (i) => {
    if (snapTicks === true) {
      if (i === 0) {
        return "start";
      }
      if (i === tickVals.length - 1) {
        return "end";
      }
    }
    return "middle";
  };
  if ($$props.gridlines === void 0 && $$bindings.gridlines && gridlines !== void 0) $$bindings.gridlines(gridlines);
  if ($$props.tickMarks === void 0 && $$bindings.tickMarks && tickMarks !== void 0) $$bindings.tickMarks(tickMarks);
  if ($$props.baseline === void 0 && $$bindings.baseline && baseline !== void 0) $$bindings.baseline(baseline);
  if ($$props.snapTicks === void 0 && $$bindings.snapTicks && snapTicks !== void 0) $$bindings.snapTicks(snapTicks);
  if ($$props.yTick === void 0 && $$bindings.yTick && yTick !== void 0) $$bindings.yTick(yTick);
  if ($$props.formatTick === void 0 && $$bindings.formatTick && formatTick !== void 0) $$bindings.formatTick(formatTick);
  if ($$props.ticks === void 0 && $$bindings.ticks && ticks !== void 0) $$bindings.ticks(ticks);
  $$result.css.add(css$a);
  tickVals = Array.isArray(ticks) ? ticks : typeof ticks === "function" ? ticks($xScale.ticks()) : $xScale.ticks(ticks);
  $$unsubscribe_xScale();
  $$unsubscribe_yRange();
  $$unsubscribe_height();
  $$unsubscribe_width();
  return `<g class="${["axis x-axis svelte-3t5gzx", snapTicks ? "snapTicks" : ""].join(" ").trim()}">${each(tickVals, (tick, i) => {
    return `<g class="${"tick tick-" + escape(i, true) + " svelte-3t5gzx"}" transform="${"translate(" + escape($xScale(tick), true) + "," + escape($yRange[0], true) + ")"}">${gridlines !== false ? `<line class="gridline svelte-3t5gzx"${add_attribute("y1", $height * -1, 0)} y2="0" x1="0" x2="0"></line>` : ``}${tickMarks === true ? `<line class="tick-mark svelte-3t5gzx"${add_attribute("y1", 0, 0)}${add_attribute("y2", 6, 0)}${add_attribute("x1", 0, 0)}${add_attribute("x2", 0, 0)}></line>` : ``}<text${add_attribute("x", 0, 0)}${add_attribute("y", yTick, 0)} dx="" dy=""${add_attribute("text-anchor", textAnchor(i), 0)} class="svelte-3t5gzx">${escape(formatTick(tick))}</text></g>`;
  })}${baseline === true ? `<line class="baseline svelte-3t5gzx"${add_attribute("y1", $height + 0.5, 0)}${add_attribute("y2", $height + 0.5, 0)} x1="0"${add_attribute("x2", $width, 0)}></line>` : ``}</g>`;
});
const css$9 = {
  code: ".tick.svelte-1yns1hw.svelte-1yns1hw{font-size:0.725em;font-weight:200}.tick.svelte-1yns1hw line.svelte-1yns1hw{stroke:var(--color-gray-300)}.tick.svelte-1yns1hw .gridline.svelte-1yns1hw{stroke-dasharray:4px 4px}.tick.svelte-1yns1hw text.svelte-1yns1hw{fill:var(--color-gray-600)}",
  map: `{"version":3,"file":"AxisY.svg.svelte","sources":["AxisY.svg.svelte"],"sourcesContent":["<script>\\n\\timport { getContext } from \\"svelte\\";\\n\\n\\tconst { padding, xRange, yScale } = getContext(\\"LayerCake\\");\\n\\n\\texport let gridlines = true;\\n\\texport let tickMarks = false;\\n\\texport let xTick = 0;\\n\\texport let yTick = 0;\\n\\texport let dxTick = 0;\\n\\texport let dyTick = -4;\\n\\texport let textAnchor = \\"start\\";\\n\\texport let formatTick = (d) => d;\\n\\texport let ticks = 4;\\n\\t/** If this is a number, it passes that along to the [d3Scale.ticks](https://github.com/d3/d3-scale) function. If this is an array, hardcodes the ticks to those values. If it's a function, passes along the default tick values and expects an array of tick values in return. */\\n\\n\\t$: tickVals = Array.isArray(ticks)\\n\\t\\t? ticks\\n\\t\\t: typeof ticks === \\"function\\"\\n\\t\\t? ticks($yScale.ticks())\\n\\t\\t: $yScale.ticks(ticks);\\n<\/script>\\n\\n<g class=\\"axis y-axis\\" transform=\\"translate({-$padding.left}, 0)\\">\\n\\t{#each tickVals as tick}\\n\\t\\t<g\\n\\t\\t\\tclass=\\"tick tick-{tick}\\"\\n\\t\\t\\ttransform=\\"translate({$xRange[0]}, {$yScale(tick)})\\"\\n\\t\\t>\\n\\t\\t\\t{#if gridlines !== false}\\n\\t\\t\\t\\t<line class=\\"gridline\\" x2=\\"100%\\" y1={yTick} y2={yTick} />\\n\\t\\t\\t{/if}\\n\\t\\t\\t{#if tickMarks === true}\\n\\t\\t\\t\\t<line class=\\"tick-mark\\" x1=\\"0\\" x2={6} y1={yTick} y2={yTick} />\\n\\t\\t\\t{/if}\\n\\t\\t\\t<text\\n\\t\\t\\t\\tx={xTick}\\n\\t\\t\\t\\ty={yTick}\\n\\t\\t\\t\\tdx={dxTick}\\n\\t\\t\\t\\tdy={dyTick}\\n\\t\\t\\t\\tstyle=\\"text-anchor:{textAnchor};\\">{formatTick(tick)}</text\\n\\t\\t\\t>\\n\\t\\t</g>\\n\\t{/each}\\n</g>\\n\\n<style>\\n\\t.tick {\\n\\t\\tfont-size: 0.725em;\\n\\t\\tfont-weight: 200;\\n\\t}\\n\\n\\t.tick line {\\n\\t\\tstroke: var(--color-gray-300);\\n\\t}\\n\\t.tick .gridline {\\n\\t\\tstroke-dasharray: 4px 4px;\\n\\t}\\n\\n\\t.tick text {\\n\\t\\tfill: var(--color-gray-600);\\n\\t}</style>\\n"],"names":[],"mappings":"AA+CC,mCAAM,CACL,SAAS,CAAE,OAAO,CAClB,WAAW,CAAE,GACd,CAEA,oBAAK,CAAC,mBAAK,CACV,MAAM,CAAE,IAAI,gBAAgB,CAC7B,CACA,oBAAK,CAAC,wBAAU,CACf,gBAAgB,CAAE,GAAG,CAAC,GACvB,CAEA,oBAAK,CAAC,mBAAK,CACV,IAAI,CAAE,IAAI,gBAAgB,CAC3B"}`
};
const AxisY_svg = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let tickVals;
  let $yScale, $$unsubscribe_yScale;
  let $padding, $$unsubscribe_padding;
  let $xRange, $$unsubscribe_xRange;
  const { padding, xRange, yScale } = getContext("LayerCake");
  $$unsubscribe_padding = subscribe(padding, (value) => $padding = value);
  $$unsubscribe_xRange = subscribe(xRange, (value) => $xRange = value);
  $$unsubscribe_yScale = subscribe(yScale, (value) => $yScale = value);
  let { gridlines = true } = $$props;
  let { tickMarks = false } = $$props;
  let { xTick = 0 } = $$props;
  let { yTick = 0 } = $$props;
  let { dxTick = 0 } = $$props;
  let { dyTick = -4 } = $$props;
  let { textAnchor = "start" } = $$props;
  let { formatTick = (d) => d } = $$props;
  let { ticks = 4 } = $$props;
  if ($$props.gridlines === void 0 && $$bindings.gridlines && gridlines !== void 0) $$bindings.gridlines(gridlines);
  if ($$props.tickMarks === void 0 && $$bindings.tickMarks && tickMarks !== void 0) $$bindings.tickMarks(tickMarks);
  if ($$props.xTick === void 0 && $$bindings.xTick && xTick !== void 0) $$bindings.xTick(xTick);
  if ($$props.yTick === void 0 && $$bindings.yTick && yTick !== void 0) $$bindings.yTick(yTick);
  if ($$props.dxTick === void 0 && $$bindings.dxTick && dxTick !== void 0) $$bindings.dxTick(dxTick);
  if ($$props.dyTick === void 0 && $$bindings.dyTick && dyTick !== void 0) $$bindings.dyTick(dyTick);
  if ($$props.textAnchor === void 0 && $$bindings.textAnchor && textAnchor !== void 0) $$bindings.textAnchor(textAnchor);
  if ($$props.formatTick === void 0 && $$bindings.formatTick && formatTick !== void 0) $$bindings.formatTick(formatTick);
  if ($$props.ticks === void 0 && $$bindings.ticks && ticks !== void 0) $$bindings.ticks(ticks);
  $$result.css.add(css$9);
  tickVals = Array.isArray(ticks) ? ticks : typeof ticks === "function" ? ticks($yScale.ticks()) : $yScale.ticks(ticks);
  $$unsubscribe_yScale();
  $$unsubscribe_padding();
  $$unsubscribe_xRange();
  return `<g class="axis y-axis" transform="${"translate(" + escape(-$padding.left, true) + ", 0)"}">${each(tickVals, (tick) => {
    return `<g class="${"tick tick-" + escape(tick, true) + " svelte-1yns1hw"}" transform="${"translate(" + escape($xRange[0], true) + ", " + escape($yScale(tick), true) + ")"}">${gridlines !== false ? `<line class="gridline svelte-1yns1hw" x2="100%"${add_attribute("y1", yTick, 0)}${add_attribute("y2", yTick, 0)}></line>` : ``}${tickMarks === true ? `<line class="tick-mark svelte-1yns1hw" x1="0"${add_attribute("x2", 6, 0)}${add_attribute("y1", yTick, 0)}${add_attribute("y2", yTick, 0)}></line>` : ``}<text${add_attribute("x", xTick, 0)}${add_attribute("y", yTick, 0)}${add_attribute("dx", dxTick, 0)}${add_attribute("dy", dyTick, 0)} style="${"text-anchor:" + escape(textAnchor, true) + ";"}" class="svelte-1yns1hw">${escape(formatTick(tick))}</text></g>`;
  })}</g>`;
});
const css$8 = {
  code: ".chart-details.svelte-1ciwxiw{text-align:center}.chart-title.svelte-1ciwxiw{margin-top:4rem;margin-bottom:0.25rem;font-size:24px}.chart-source.svelte-1ciwxiw{font-family:'Roboto Mono', monospace;text-align:left;font-size:14px;font-weight:800;color:var(--color-gray-600);margin-bottom:4rem;text-transform:uppercase}",
  map: `{"version":3,"file":"ChartDetails.svelte","sources":["ChartDetails.svelte"],"sourcesContent":["<script>\\n    export let title = \\"\\";\\n    export let source = \\"\\"\\n<\/script>\\n\\n<div class = \\"chart-details\\">\\n    {#if title}\\n        <h2 class = \\"chart-title\\">{title}</h2>\\n    {/if}\\n    {#if source}\\n        <p class = \\"chart-source\\">{source}</p>\\n    {/if}\\n</div>\\n\\n<style>\\n    .chart-details {\\n        text-align: center;\\n    }\\n\\n    .chart-title {\\n        margin-top: 4rem;\\n        margin-bottom: 0.25rem;\\n        font-size: 24px;\\n    }\\n\\n    .chart-source {\\n        font-family: 'Roboto Mono', monospace;\\n        text-align: left;\\n        font-size: 14px;\\n        font-weight: 800;\\n        color: var(--color-gray-600);\\n        margin-bottom: 4rem;\\n        text-transform: uppercase;\\n    }</style>"],"names":[],"mappings":"AAeI,6BAAe,CACX,UAAU,CAAE,MAChB,CAEA,2BAAa,CACT,UAAU,CAAE,IAAI,CAChB,aAAa,CAAE,OAAO,CACtB,SAAS,CAAE,IACf,CAEA,4BAAc,CACV,WAAW,CAAE,aAAa,CAAC,CAAC,SAAS,CACrC,UAAU,CAAE,IAAI,CAChB,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,GAAG,CAChB,KAAK,CAAE,IAAI,gBAAgB,CAAC,CAC5B,aAAa,CAAE,IAAI,CACnB,cAAc,CAAE,SACpB"}`
};
const ChartDetails = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "" } = $$props;
  let { source = "" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.source === void 0 && $$bindings.source && source !== void 0) $$bindings.source(source);
  $$result.css.add(css$8);
  return `<div class="chart-details svelte-1ciwxiw">${title ? `<h2 class="chart-title svelte-1ciwxiw">${escape(title)}</h2>` : ``} ${source ? `<p class="chart-source svelte-1ciwxiw">${escape(source)}</p>` : ``} </div>`;
});
const css$7 = {
  code: ".chart-container.svelte-1rcuzwz{height:400px;margin:1rem auto 1rem auto;padding:1rem}@media(max-width: 600px){.chart-container.svelte-1rcuzwz{padding:1rem;height:300px}}",
  map: `{"version":3,"file":"UniqueTitles.svelte","sources":["UniqueTitles.svelte"],"sourcesContent":["<script>\\n    import { onMount } from \\"svelte\\";\\n    import * as d3 from \\"d3\\";\\n    import { LayerCake, Svg } from 'layercake';\\n    import Line from \\"$components/layercake/Line.svelte\\";\\n    import AxisX from \\"$components/layercake/AxisX.svg.svelte\\";\\n    import AxisY from \\"$components/layercake/AxisY.svg.svelte\\";\\n    import ChartDetails from \\"$components/bookbans/ChartDetails.svelte\\";\\n    import inView from \\"$actions/inView.js\\";\\n\\n    // Defaults\\n    let data = [];\\n    const xKey = \\"year\\"; \\n    const yKey = \\"bans\\";  \\n    let inViewTrigger = false;\\n    $: innerWidth = 0;\\n    $: ticks = [2000, 2005, 2010, 2015, 2020];\\n\\n    // Load the data when the component is mounted\\n    onMount(async () => {\\n        const dataPath = \\"/assets/data/1_uniquetitles.csv\\"; \\n        data = await d3.csv(dataPath);\\n        \\n        // Ensure the y values are numbers\\n        data.forEach(d => {\\n            d[xKey] = +d[xKey];\\n            d[yKey] = +d[yKey];\\n        });\\n\\n        console.log(data);\\n    });\\n\\n    // Function to trigger drawing when in view\\n    function inViewDraw() { inViewTrigger = true; }\\n    function exitViewDraw() { inViewTrigger = false; }\\n<\/script>\\n\\n<svelte:window bind:innerWidth />\\n\\n<!-- Chart Title -->\\n<ChartDetails title=\\"Unique Book Titles Challenged in the U.S.\\" />\\n\\n<div class=\\"chart-container\\"\\n    use:inView\\n    on:enter={inViewDraw}\\n    on:exit={exitViewDraw}\\n>\\n    <LayerCake\\n        padding={{ top: 16, right: 16, bottom: 32, left: 16 }}\\n        x={xKey}\\n        y={yKey}\\n        yDomain={[0, null]}\\n        data={data}\\n    >\\n        <Svg>\\n            <AxisX gridlines={false} {ticks}/>\\n            <AxisY snapBaselineLabel gridlines={true} />\\n            <Line inViewTrigger={inViewTrigger} stroke=\\"black\\"/>\\n        </Svg>\\n    </LayerCake>\\n</div>\\n\\n<!-- Chart Source -->\\n<ChartDetails source=\\"Source: American Library Association's Office for Intellectual Freedom\\" />\\n\\n<style>\\n    .chart-container {\\n        height: 400px;\\n        margin: 1rem auto 1rem auto;\\n        padding: 1rem;\\n        /* background: #f2f2f2;\\n        border: 2px solid;\\n        border-color: var(--window-inset-stroke); */\\n    }\\n\\n    @media (max-width: 600px) { \\n        .chart-container {\\n            padding: 1rem;\\n            height: 300px;\\n        }\\n    }</style>\\n"],"names":[],"mappings":"AAkEI,+BAAiB,CACb,MAAM,CAAE,KAAK,CACb,MAAM,CAAE,IAAI,CAAC,IAAI,CAAC,IAAI,CAAC,IAAI,CAC3B,OAAO,CAAE,IAIb,CAEA,MAAO,YAAY,KAAK,CAAE,CACtB,+BAAiB,CACb,OAAO,CAAE,IAAI,CACb,MAAM,CAAE,KACZ,CACJ"}`
};
const xKey$1 = "year";
const yKey$1 = "bans";
const UniqueTitles = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let ticks;
  let data = [];
  let inViewTrigger = false;
  $$result.css.add(css$7);
  ticks = [2e3, 2005, 2010, 2015, 2020];
  return `  ${validate_component(ChartDetails, "ChartDetails").$$render(
    $$result,
    {
      title: "Unique Book Titles Challenged in the U.S."
    },
    {},
    {}
  )} <div class="chart-container svelte-1rcuzwz">${validate_component(LayerCake, "LayerCake").$$render(
    $$result,
    {
      padding: { top: 16, right: 16, bottom: 32, left: 16 },
      x: xKey$1,
      y: yKey$1,
      yDomain: [0, null],
      data
    },
    {},
    {
      default: () => {
        return `${validate_component(Svg, "Svg").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(AxisX_svg, "AxisX").$$render($$result, { gridlines: false, ticks }, {}, {})} ${validate_component(AxisY_svg, "AxisY").$$render($$result, { snapBaselineLabel: true, gridlines: true }, {}, {})} ${validate_component(Line, "Line").$$render($$result, { inViewTrigger, stroke: "black" }, {}, {})}`;
          }
        })}`;
      }
    }
  )}</div>  ${validate_component(ChartDetails, "ChartDetails").$$render(
    $$result,
    {
      source: "Source: American Library Association's Office for Intellectual Freedom"
    },
    {},
    {}
  )}`;
});
const css$6 = {
  code: ".chart-container.svelte-13uekc5{width:calc(100% - 2rem);height:400px;margin:1rem auto 1rem auto;background:#f2f2f2;padding:1rem;border:2px solid;border-color:var(--window-inset-stroke)}@media(max-width: 600px){.chart-container.svelte-13uekc5{padding:1rem;height:300px}}",
  map: '{"version":3,"file":"M4LGroups.svelte","sources":["M4LGroups.svelte"],"sourcesContent":["<script>\\n    import { onMount } from \\"svelte\\";\\n    import * as d3 from \\"d3\\";\\n    import { LayerCake, Svg, Html } from \'layercake\';\\n    import Line from \\"$components/layercake/Line.svelte\\";\\n    import AxisX from \\"$components/layercake/AxisX.svg.svelte\\";\\n    import AxisY from \\"$components/layercake/AxisY.svg.svelte\\";\\n    import ChartDetails from \\"$components/bookbans/ChartDetails.svelte\\";\\n    import inView from \\"$actions/inView.js\\";\\n\\n    // Defaults\\n    let data = [];\\n    const xKey = \\"creation_date\\"; \\n    const yKey = \\"cumulative_count\\";  \\n    let inViewTrigger = false;\\n    let innerWidth = 0;\\n\\n    // Generate ticks every 8 months\\n    $: ticks = d3.timeMonths(new Date(2021, 0, 1), new Date(2024, 9, 31), 7); \\n\\n    // Load the data when the component is mounted\\n    onMount(async () => {\\n        const dataPath = \\"/assets/data/2_risegroups.csv\\"; \\n        data = await d3.csv(dataPath);\\n\\n        // Create a date parser for the \'YYYY-MM-DD\' format\\n        const parseDate = d3.timeParse(\\"%Y-%m-%d\\");\\n        \\n        // Ensure the y values are numbers\\n        data.forEach(d => {\\n            d[xKey] = parseDate(d[xKey]);\\n            d[yKey] = +d[yKey];\\n\\n            // console.log(`Parsed date: ${d[xKey]}, Cumulative count: ${d[yKey]}`);\\n\\n            // if (isNaN(d[yKey])) {\\n            //     console.error(\\"Cumulative count is NaN for:\\", d);\\n            // }\\n        });\\n\\n        // Check for valid data\\n        // if (data.length === 0 || data.some(d => !d[xKey] || isNaN(d[yKey]))) {\\n        //     console.error(\\"No valid data to render the line.\\");\\n        // }\\n    });\\n    \\n\\n    // Function to trigger drawing when in view\\n    function inViewDraw() { inViewTrigger = true; }\\n    function exitViewDraw() { inViewTrigger = false; }\\n\\n    // Define the formatTick function\\n    const formatTick = d3.timeFormat(\\"%b %Y\\"); // Format for the ticks\\n\\n<\/script>\\n\\n<svelte:window bind:innerWidth />\\n\\n<!-- Chart Title -->\\n<ChartDetails title=\\"Moms for Liberty Facebook Groups\\" />\\n\\n<div class=\\"chart-container\\"\\n    use:inView\\n    on:enter={inViewDraw}\\n    on:exit={exitViewDraw}\\n>\\n    <LayerCake\\n        padding={{ top: 16, right: 16, bottom: 32, left: 16 }}\\n        x={xKey}\\n        y={yKey}\\n        xDomain={d3.extent(data, d => d[xKey])}\\n        yDomain={[0, d3.max(data, d => d[yKey])]}\\n        data={data}\\n    >\\n        <Svg>\\n            <AxisX \\n                gridlines={false} \\n                ticks={ticks} \\n                formatTick={formatTick}\\n            />\\n            <AxisY snapBaselineLabel gridlines={true} />\\n            <Line inViewTrigger={inViewTrigger} stroke=\\"black\\" stroke-width=\\"2\\" />\\n        </Svg>\\n    </LayerCake>\\n</div>\\n\\n<!-- Chart Source -->\\n<ChartDetails source=\\"Source: Facebook\\" />\\n\\n<style>\\n    .chart-container {\\n        width: calc(100% - 2rem);\\n        height: 400px;\\n        margin: 1rem auto 1rem auto;\\n        background: #f2f2f2;\\n        padding: 1rem;\\n        border: 2px solid;\\n        border-color: var(--window-inset-stroke);\\n    }\\n\\n    @media (max-width: 600px) { \\n        .chart-container {\\n            padding: 1rem;\\n            height: 300px;\\n        }\\n    }</style>\\n"],"names":[],"mappings":"AA0FI,+BAAiB,CACb,KAAK,CAAE,KAAK,IAAI,CAAC,CAAC,CAAC,IAAI,CAAC,CACxB,MAAM,CAAE,KAAK,CACb,MAAM,CAAE,IAAI,CAAC,IAAI,CAAC,IAAI,CAAC,IAAI,CAC3B,UAAU,CAAE,OAAO,CACnB,OAAO,CAAE,IAAI,CACb,MAAM,CAAE,GAAG,CAAC,KAAK,CACjB,YAAY,CAAE,IAAI,qBAAqB,CAC3C,CAEA,MAAO,YAAY,KAAK,CAAE,CACtB,+BAAiB,CACb,OAAO,CAAE,IAAI,CACb,MAAM,CAAE,KACZ,CACJ"}'
};
const xKey = "creation_date";
const yKey = "cumulative_count";
const M4LGroups = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let ticks;
  let data = [];
  let inViewTrigger = false;
  const formatTick = d3.timeFormat("%b %Y");
  $$result.css.add(css$6);
  ticks = d3.timeMonths(new Date(2021, 0, 1), new Date(2024, 9, 31), 7);
  return `  ${validate_component(ChartDetails, "ChartDetails").$$render(
    $$result,
    {
      title: "Moms for Liberty Facebook Groups"
    },
    {},
    {}
  )} <div class="chart-container svelte-13uekc5">${validate_component(LayerCake, "LayerCake").$$render(
    $$result,
    {
      padding: { top: 16, right: 16, bottom: 32, left: 16 },
      x: xKey,
      y: yKey,
      xDomain: d3.extent(data, (d) => d[xKey]),
      yDomain: [0, d3.max(data, (d) => d[yKey])],
      data
    },
    {},
    {
      default: () => {
        return `${validate_component(Svg, "Svg").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(AxisX_svg, "AxisX").$$render($$result, { gridlines: false, ticks, formatTick }, {}, {})} ${validate_component(AxisY_svg, "AxisY").$$render($$result, { snapBaselineLabel: true, gridlines: true }, {}, {})} ${validate_component(Line, "Line").$$render(
              $$result,
              {
                inViewTrigger,
                stroke: "black",
                "stroke-width": "2"
              },
              {},
              {}
            )}`;
          }
        })}`;
      }
    }
  )}</div>  ${validate_component(ChartDetails, "ChartDetails").$$render($$result, { source: "Source: Facebook" }, {}, {})}`;
});
const Column = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let columnWidth;
  let columnHeight;
  let $yGet, $$unsubscribe_yGet;
  let $yRange, $$unsubscribe_yRange;
  let $xGet, $$unsubscribe_xGet;
  let $data, $$unsubscribe_data;
  let $xScale, $$unsubscribe_xScale;
  const { data, xGet, yGet, yRange, xScale } = getContext("LayerCake");
  $$unsubscribe_data = subscribe(data, (value) => $data = value);
  $$unsubscribe_xGet = subscribe(xGet, (value) => $xGet = value);
  $$unsubscribe_yGet = subscribe(yGet, (value) => $yGet = value);
  $$unsubscribe_yRange = subscribe(yRange, (value) => $yRange = value);
  $$unsubscribe_xScale = subscribe(xScale, (value) => $xScale = value);
  let { fill = "#ccc" } = $$props;
  let { stroke = "#000" } = $$props;
  let { strokeWidth = 0 } = $$props;
  if ($$props.fill === void 0 && $$bindings.fill && fill !== void 0) $$bindings.fill(fill);
  if ($$props.stroke === void 0 && $$bindings.stroke && stroke !== void 0) $$bindings.stroke(stroke);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0) $$bindings.strokeWidth(strokeWidth);
  columnWidth = (d) => {
    const vals = $xGet(d);
    return Math.max(0, vals[1] - vals[0]);
  };
  columnHeight = (d) => {
    return Math.max(0, $yRange[0] - $yGet(d));
  };
  $$unsubscribe_yGet();
  $$unsubscribe_yRange();
  $$unsubscribe_xGet();
  $$unsubscribe_data();
  $$unsubscribe_xScale();
  return `<g>${each($data, (d, i) => {
    let x = $xScale.bandwidth ? $xGet(d) : $xGet(d)[0], y = $yGet(d), width = $xScale.bandwidth ? $xScale.bandwidth() : columnWidth(d), height = columnHeight(d);
    return ` // X position
		 // Y position
		 // Column width
		 // Column height
		<rect${add_attribute("data-id", i, 0)}${add_attribute("x", x, 0)}${add_attribute("y", y, 0)}${add_attribute("width", width, 0)}${add_attribute("height", height, 0)}${add_attribute("fill", typeof fill === "function" ? fill(d) : fill, 0)}${add_attribute("stroke", stroke, 0)}${add_attribute("stroke-width", strokeWidth, 0)} style="transform-origin:bottom;"></rect>`;
  })}</g>

// Check if the fill prop is part of a function, otherwise use the default fill value`;
});
const css$5 = {
  code: ".chart-container.svelte-9qpwc5.svelte-9qpwc5{width:calc(100% - 2rem);height:400px;margin:1rem auto;background:#f2f2f2;padding:1rem;border:2px solid;border-color:var(--window-inset-stroke)}@media(max-width: 600px){.chart-container.svelte-9qpwc5.svelte-9qpwc5{padding:1rem;height:300px}}.annotation.svelte-9qpwc5.svelte-9qpwc5{position:absolute;color:black;font-size:1em}.annotation.svelte-9qpwc5 p.svelte-9qpwc5{margin:0;line-height:1.2}",
  map: `{"version":3,"file":"TimeDifferences.svelte","sources":["TimeDifferences.svelte"],"sourcesContent":["<script>\\n    import { onMount } from \\"svelte\\";\\n    import * as d3 from \\"d3\\";\\n    import { LayerCake, Svg } from 'layercake';\\n    import Column from \\"$components/layercake/Column.svelte\\"; \\n    import AxisX from \\"$components/layercake/AxisX.svg.svelte\\";\\n    import AxisY from \\"$components/layercake/AxisY.svg.svelte\\";\\n    import ChartDetails from \\"$components/bookbans/ChartDetails.svelte\\";\\n    import inView from \\"$actions/inView.js\\";\\n\\n    // Defaults\\n    let data = [];\\n    const xKey = \\"time_diff\\"; \\n    const yKey = \\"count\\";  \\n    let inViewTrigger = false;\\n    let innerWidth = 0;\\n    let innerHeight = 0;\\n\\n    // Load the data when the component is mounted\\n    onMount(async () => {\\n        try {\\n            const dataPath = \\"/assets/data/3_timedifferences.csv\\"; \\n            data = await d3.csv(dataPath);\\n\\n            // Ensure the values are numbers\\n            data.forEach(d => {\\n                d[xKey] = +d[xKey];\\n                d[yKey] = +d[yKey];\\n            });\\n\\n            // Create histogram bins\\n            const histogram = d3.histogram()\\n                .value(d => d[xKey])\\n                .domain(d3.extent(data, d => d[xKey]))\\n                .thresholds(25);\\n\\n            // Group data into bins\\n            const bins = histogram(data);\\n\\n            // Prepare data for LayerCake\\n            data = bins.map(b => ({\\n                x0: b.x0,\\n                x1: b.x1,\\n                count: b.length,\\n                color: b.x0 < 0 ? \\"#ccc\\": \\"steelblue\\"\\n            }));\\n\\n            // Log prepared data for debugging\\n            console.log(\\"Data:\\", data);\\n            \\n        } catch (error) {\\n            console.error(\\"Error loading data:\\", error);\\n        }\\n    });\\n\\n    // Function to trigger drawing when in view\\n    function inViewDraw() { inViewTrigger = true; }\\n    function exitViewDraw() { inViewTrigger = false; }\\n<\/script>\\n\\n<svelte:window bind:innerWidth bind:innerHeight />\\n\\n<!-- Chart Title -->\\n<ChartDetails title=\\"Days Between M4L Chapter Creation and First Book Ban\\" />\\n\\n<div class=\\"chart-container\\"\\n    use:inView\\n    on:enter={inViewDraw}\\n    on:exit={exitViewDraw}\\n>\\n    {#if data.length > 0}  <!-- Ensure there is data to plot -->\\n        <LayerCake\\n            padding={{ top: 16, right: 16, bottom: 32, left: 16 }}\\n            x={d => [d.x0, d.x1]} \\n            y={d => d.count} \\n            xDomain={d3.extent(data, d => d.x0)}\\n            yDomain={[0, d3.max(data, d => d.count)]}\\n            data={data}\\n        >\\n            <Svg>\\n                <AxisX gridlines={false} />\\n                <AxisY snapBaselineLabel gridlines={true} />\\n                <Column \\n                    inViewTrigger={inViewTrigger} \\n                    stroke=\\"black\\"\\n                    strokeWidth=\\"1\\"\\n                    fill={d => d.color}\\n                />\\n\\n                <div class=\\"annotation\\" style=\\"left: 0; top: 0;\\">\\n                    <p>Book bans increased</p>\\n                    <p>the change</p>\\n                </div>\\n                \\n            </Svg>\\n        </LayerCake>\\n    {/if}\\n</div>\\n\\n<!-- Chart Source -->\\n<ChartDetails source=\\"Source: Facebook, PEN America\\" />\\n\\n<style>\\n    .chart-container {\\n        width: calc(100% - 2rem);\\n        height: 400px;\\n        margin: 1rem auto;\\n        background: #f2f2f2;\\n        padding: 1rem;\\n        border: 2px solid;\\n        border-color: var(--window-inset-stroke);\\n    }\\n\\n    @media (max-width: 600px) { \\n        .chart-container {\\n            padding: 1rem;\\n            height: 300px;\\n        }\\n    }\\n\\n    .annotation {\\n        position: absolute;\\n        color: black;\\n        font-size: 1em;\\n    }\\n\\n    .annotation p {\\n        margin: 0;\\n        line-height: 1.2;\\n    }</style>\\n"],"names":[],"mappings":"AAuGI,4CAAiB,CACb,KAAK,CAAE,KAAK,IAAI,CAAC,CAAC,CAAC,IAAI,CAAC,CACxB,MAAM,CAAE,KAAK,CACb,MAAM,CAAE,IAAI,CAAC,IAAI,CACjB,UAAU,CAAE,OAAO,CACnB,OAAO,CAAE,IAAI,CACb,MAAM,CAAE,GAAG,CAAC,KAAK,CACjB,YAAY,CAAE,IAAI,qBAAqB,CAC3C,CAEA,MAAO,YAAY,KAAK,CAAE,CACtB,4CAAiB,CACb,OAAO,CAAE,IAAI,CACb,MAAM,CAAE,KACZ,CACJ,CAEA,uCAAY,CACR,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,KAAK,CACZ,SAAS,CAAE,GACf,CAEA,yBAAW,CAAC,eAAE,CACV,MAAM,CAAE,CAAC,CACT,WAAW,CAAE,GACjB"}`
};
const TimeDifferences = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let data = [];
  let inViewTrigger = false;
  $$result.css.add(css$5);
  return `  ${validate_component(ChartDetails, "ChartDetails").$$render(
    $$result,
    {
      title: "Days Between M4L Chapter Creation and First Book Ban"
    },
    {},
    {}
  )} <div class="chart-container svelte-9qpwc5">${data.length > 0 ? ` ${validate_component(LayerCake, "LayerCake").$$render(
    $$result,
    {
      padding: { top: 16, right: 16, bottom: 32, left: 16 },
      x: (d) => [d.x0, d.x1],
      y: (d) => d.count,
      xDomain: d3.extent(data, (d) => d.x0),
      yDomain: [0, d3.max(data, (d) => d.count)],
      data
    },
    {},
    {
      default: () => {
        return `${validate_component(Svg, "Svg").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(AxisX_svg, "AxisX").$$render($$result, { gridlines: false }, {}, {})} ${validate_component(AxisY_svg, "AxisY").$$render($$result, { snapBaselineLabel: true, gridlines: true }, {}, {})} ${validate_component(Column, "Column").$$render(
              $$result,
              {
                inViewTrigger,
                stroke: "black",
                strokeWidth: "1",
                fill: (d) => d.color
              },
              {},
              {}
            )} <div class="annotation svelte-9qpwc5" style="left: 0; top: 0;" data-svelte-h="svelte-1wudcq0"><p class="svelte-9qpwc5">Book bans increased</p> <p class="svelte-9qpwc5">the change</p></div>`;
          }
        })}`;
      }
    }
  )}` : ``}</div>  ${validate_component(ChartDetails, "ChartDetails").$$render($$result, { source: "Source: Facebook, PEN America" }, {}, {})}`;
});
const css$4 = {
  code: ".county.svelte-1vzmv3e:hover{stroke:black;stroke-width:2}.selectedName.svelte-1vzmv3e{text-align:center;margin-top:8px;font-size:1.5rem}",
  map: `{"version":3,"file":"M4LMap.svelte","sources":["M4LMap.svelte"],"sourcesContent":["<!-- source https://svelte.dev/repl/33d086ab38fb42c48c39bd5f191fb890?version=3.46.6 -->\\n\\n<script>\\n\\timport { onMount } from 'svelte';\\n\\timport * as topojson from 'topojson-client';\\n\\timport { geoPath, geoAlbersUsa } from 'd3-geo';\\n\\timport { draw } from 'svelte/transition';\\n  import { csv } from 'd3-fetch';\\n\\timport { scaleSequential } from 'd3-scale';\\n\\timport { interpolateBlues } from 'd3-scale-chromatic';\\n\\t\\n\\tconst projection = geoAlbersUsa().scale(1300).translate([487.5, 305]);\\n\\tconst path = geoPath().projection(null);\\n\\tlet states = [];\\n\\tlet counties = [];\\n\\tlet mesh;\\n\\tlet selected;\\n\\tlet data = [];\\n\\t\\n\\tconst colorScale = scaleSequential(interpolateBlues).domain([0, 500]); // Adjust domain as needed\\n\\t\\n\\tonMount(async () => {\\n\\t\\t// Fetch topojson data\\n\\t\\tconst us = await fetch('https://cdn.jsdelivr.net/npm/us-atlas@3/counties-albers-10m.json')\\n\\t\\t\\t.then(d => d.json());\\n\\t\\t\\n\\t\\t// Load CSV data\\n\\t\\tdata = await csv(\\"/assets/data/4_m4lmap.csv\\");\\n\\t\\t\\n\\t\\t// Parse the topojson features\\n\\t\\tstates = topojson.feature(us, us.objects.states).features;\\n\\t\\tcounties = topojson.feature(us, us.objects.counties).features;\\n\\t\\tmesh = topojson.mesh(us, us.objects.states, (a, b) => a !== b);\\n\\t});\\n\\n  function getColor(id) {\\n\\t\\tconst entry = data.find(d => d.county_fips === id.toString());\\n\\t\\tif (entry) {\\n\\t\\t\\t// console.log(\`County FIPS: \${entry.county_fips}, Accurate Members: \${entry.accurate_members}\`);\\n      return '#007bff'\\n\\n      // COLOR BY FACEBOOK MEMBER COUNT:\\n\\t\\t\\t// return colorScale(+entry.accurate_members);\\n\\t\\t}\\n\\t\\t// console.log(\`No data found for ID: \${id}\`);\\n\\t\\treturn '#fff'; \\n\\t}\\n\\n  function getCountyName(feature) {\\n    const countyName = feature.properties.name;  // Extract county name from TopoJSON properties\\n    const stateName = feature.properties.state;  // Assuming the state name is stored in 'state' property\\n    \\n    if (countyName && stateName) {\\n        return \`\${countyName} County, \${stateName}\`;\\n    }\\n    return feature.properties.name;  // Fallback in case state name is not present\\n}\\n\\n\\n<\/script>\\n\\n<svg viewBox=\\"0 0 975 610\\">\\n\\t<!-- County above -->\\n\\t{#each counties as feature, i}\\n\\t  <path \\n      d={path(feature)} \\n      on:click={() => selected = feature} \\n      on:keydown={(e) => (e.key === 'Enter' || e.key === ' ') && (selected = feature)}\\n\\t\\t\\ttabindex=\\"0\\"\\n\\t\\t\\trole=\\"button\\"\\n\\t\\t\\taria-label=\\"Select county\\"\\n      class=\\"county\\"  \\n      stroke=\\"rgb(0 0 0 / 10%)\\" \\n      fill={getColor(feature.id)} />\\n\\t{/each}\\n\\n\\t<!-- State below -->\\n\\t<g fill=\\"none\\" stroke=\\"black\\">\\n\\t\\t{#each states as feature, i}\\n\\t\\t\\t<path \\n        d={path(feature)} \\n        on:click={() => selected = feature} \\n        on:keydown={(e) => (e.key === 'Enter' || e.key === ' ') && (selected = feature)}\\n\\t\\t\\t\\ttabindex=\\"0\\"\\n\\t\\t\\t\\trole=\\"button\\"\\n\\t\\t\\t\\taria-label=\\"Select state\\"\\n        class=\\"state\\" \\n        in:draw={{ delay: i * 50, duration: 1000 }} />\\n\\t\\t{/each}\\n\\t</g>\\n\\t\\t\\n\\t{#if selected}\\n\\t\\t<path d={path(selected)} fill=\\"hsl(0 0% 50% / 20%)\\" stroke=\\"black\\" stroke-width={2} />\\n\\t{/if}\\n</svg>\\n\\n<div class=\\"selectedName\\">\\n  {#if selected}\\n    {getCountyName(selected)}\\n  {/if}\\n</div>\\t\\n\\n<style>\\n  /* .state:hover {\\n\\t\\tfill: hsl(0 0% 50% / 20%);\\n\\t} */\\n\\n\\t.county:hover {\\n\\t\\t/* fill: hsl(0 0% 50% / 20%); */\\n    stroke: black;\\n    stroke-width: 2;\\n\\t}\\n\\t\\n\\t.selectedName {\\n\\t\\ttext-align: center;\\n\\t\\tmargin-top: 8px;\\n\\t\\tfont-size: 1.5rem;\\n\\t}</style>"],"names":[],"mappings":"AA2GC,sBAAO,MAAO,CAEX,MAAM,CAAE,KAAK,CACb,YAAY,CAAE,CACjB,CAEA,4BAAc,CACb,UAAU,CAAE,MAAM,CAClB,UAAU,CAAE,GAAG,CACf,SAAS,CAAE,MACZ"}`
};
const M4LMap = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  geoAlbersUsa().scale(1300).translate([487.5, 305]);
  const path = geoPath().projection(null);
  let states = [];
  let counties = [];
  let data = [];
  scaleSequential(interpolateBlues).domain([0, 500]);
  function getColor(id) {
    const entry = data.find((d) => d.county_fips === id.toString());
    if (entry) {
      return "#007bff";
    }
    return "#fff";
  }
  $$result.css.add(css$4);
  return `  <svg viewBox="0 0 975 610">${each(counties, (feature, i) => {
    return `<path${add_attribute("d", path(feature), 0)} tabindex="0" role="button" aria-label="Select county" class="county svelte-1vzmv3e" stroke="rgb(0 0 0 / 10%)"${add_attribute("fill", getColor(feature.id), 0)}></path>`;
  })}<g fill="none" stroke="black">${each(states, (feature, i) => {
    return `<path${add_attribute("d", path(feature), 0)} tabindex="0" role="button" aria-label="Select state" class="state"></path>`;
  })}</g>${``}</svg> <div class="selectedName svelte-1vzmv3e">${``} </div>`;
});
const css$3 = {
  code: ".county.svelte-1q3je14.svelte-1q3je14{-webkit-transition:fill 0.5s ease;transition:fill 0.5s ease}.county.svelte-1q3je14.svelte-1q3je14:hover{stroke:black;stroke-width:2}.selectedName.svelte-1q3je14.svelte-1q3je14{text-align:center;margin-top:8px;font-size:1.5rem}.year-buttons.svelte-1q3je14.svelte-1q3je14{text-align:center;margin-bottom:10px}.year-buttons.svelte-1q3je14 button.svelte-1q3je14{margin:5px;padding:8px 16px;font-size:1rem;cursor:pointer;-webkit-transition:background-color 0.3s ease;transition:background-color 0.3s ease}.year-buttons.svelte-1q3je14 button.active.svelte-1q3je14{background-color:darkblue;color:white}",
  map: `{"version":3,"file":"BookBanMap.svelte","sources":["BookBanMap.svelte"],"sourcesContent":["<script>\\n\\timport { onMount } from 'svelte';\\n\\timport * as topojson from 'topojson-client';\\n\\timport { geoPath, geoAlbersUsa } from 'd3-geo';\\n\\timport { csv } from 'd3-fetch';\\n\\timport { scaleSequential } from 'd3-scale';\\n\\timport { interpolateReds } from 'd3-scale-chromatic';\\n\\t\\n\\t\\tconst projection = geoAlbersUsa().scale(1300).translate([487.5, 305]);\\n\\tconst path = geoPath().projection(null);\\n\\n\\tlet states = [];\\n\\tlet counties = [];\\n\\tlet selected;\\n\\tlet data = [];\\n\\tlet selectedYear = null;  \\n\\tlet activeButton = 'total'; \\n\\n\\tconst colorScale = scaleSequential(interpolateReds).domain([0, 30]); // Adjust the domain based on your data\\n\\n\\tonMount(async () => {\\n\\t\\tconst us = await fetch('https://cdn.jsdelivr.net/npm/us-atlas@3/counties-albers-10m.json')\\n\\t\\t\\t.then(d => d.json());\\n\\n\\t\\tdata = await csv(\\"/assets/data/5_banmap.csv\\", d => {\\n\\t\\t\\treturn {\\n\\t\\t\\t\\t...d,\\n\\t\\t\\t\\tyear: +d.year,\\n\\t\\t\\t\\tcount: +d.count\\n\\t\\t\\t};\\n\\t\\t});\\n\\n\\t\\tstates = topojson.feature(us, us.objects.states).features;\\n\\t\\tcounties = topojson.feature(us, us.objects.counties).features;\\n\\t});\\n\\n\\t// Reactive color array for counties based on selectedYear\\n\\t$: countyColors = counties.map(feature => {\\n\\t\\tlet entry;\\n\\t\\tif (selectedYear) {\\n\\t\\t\\tentry = data.find(d => d.county_fips === feature.id.toString() && +d.year === selectedYear);\\n\\t\\t} else {\\n\\t\\t\\tentry = data.find(d => d.county_fips === feature.id.toString());\\n\\t\\t}\\n\\t\\t\\n\\t\\tif (entry) {\\n\\t\\t\\treturn { id: feature.id, color: colorScale(+entry.count) }; \\n\\t\\t}\\n\\t\\t\\n\\t\\treturn { id: feature.id, color: '#fff' }; \\n\\t});\\n\\n\\tfunction getCountyName(feature) {\\n\\t\\tconst countyName = feature.properties.name;\\n\\t\\tconst stateName = feature.properties.state;\\n\\t\\treturn countyName && stateName ? \`\${countyName} County, \${stateName}\` : feature.properties.name;\\n\\t}\\n\\n\\tfunction selectYear(year, buttonId) {\\n\\t\\tselectedYear = year;\\n\\t\\tactiveButton = buttonId; // Set the active button to the clicked one\\n\\t\\tconsole.log(\\"Selected Year:\\", selectedYear);\\n\\t}\\n<\/script>\\n\\n<!-- Add year selection buttons -->\\n<div class=\\"year-buttons\\">\\n\\t<button \\n\\t\\tclass:active={activeButton === 'total'} \\n\\t\\ton:click={() => selectYear(null, 'total')}>\\n\\t\\tTotal\\n\\t</button>\\n\\t<button \\n\\t\\tclass:active={activeButton === '2021'} \\n\\t\\ton:click={() => selectYear(2021, '2021')}>\\n\\t\\t2021\\n\\t</button>\\n\\t<button \\n\\t\\tclass:active={activeButton === '2022'} \\n\\t\\ton:click={() => selectYear(2022, '2022')}>\\n\\t\\t2022\\n\\t</button>\\n\\t<button \\n\\t\\tclass:active={activeButton === '2023'} \\n\\t\\ton:click={() => selectYear(2023, '2023')}>\\n\\t\\t2023\\n\\t</button>\\n</div>\\n\\n<svg viewBox=\\"0 0 975 610\\">\\n\\t<!-- Counties -->\\n\\t{#each counties as feature}\\n\\t  <path \\n\\t\\td={path(feature)} \\n\\t\\ton:click={() => selected = feature} \\n\\t\\ton:keydown={(e) => (e.key === 'Enter' || e.key === ' ') && (selected = feature)}\\n\\t\\ttabindex=\\"0\\"\\n\\t\\trole=\\"button\\"\\n\\t\\taria-label=\\"Select county\\"\\n\\t\\tclass=\\"county\\"  \\n\\t\\tstroke=\\"rgb(0 0 0 / 10%)\\" \\n\\t\\tfill={countyColors.find(c => c.id === feature.id)?.color} />\\n\\t{/each}\\n\\n\\t<!-- State borders -->\\n\\t<g fill=\\"none\\" stroke=\\"black\\">\\n\\t\\t{#each states as feature}\\n\\t\\t\\t<path \\n\\t\\t\\td={path(feature)} \\n\\t\\t\\ton:click={() => selected = feature} \\n\\t\\t\\ton:keydown={(e) => (e.key === 'Enter' || e.key === ' ') && (selected = feature)}\\n\\t\\t\\ttabindex=\\"0\\"\\n\\t\\t\\trole=\\"button\\"\\n\\t\\t\\taria-label=\\"Select state\\"\\n\\t\\t\\tclass=\\"state\\" />\\n\\t\\t{/each}\\n\\t</g>\\n\\t\\t\\n\\t<!-- Highlight selected county -->\\n\\t{#if selected}\\n\\t\\t<path d={path(selected)} fill=\\"hsl(0 0% 50% / 20%)\\" stroke=\\"black\\" stroke-width={2} />\\n\\t{/if}\\n</svg>\\n\\n<div class=\\"selectedName\\">\\n\\t{#if selected}\\n\\t\\t{getCountyName(selected)}\\n\\t{/if}\\n</div>\\t\\n\\n<style>\\n\\t.county {\\n\\t\\t-webkit-transition: fill 0.5s ease;\\n\\t\\ttransition: fill 0.5s ease; \\n\\t}\\n\\t\\n\\t.county:hover {\\n\\t\\tstroke: black;\\n\\t\\tstroke-width: 2;\\n\\t}\\n\\n\\t.selectedName {\\n\\t\\ttext-align: center;\\n\\t\\tmargin-top: 8px;\\n\\t\\tfont-size: 1.5rem;\\n\\t}\\n\\n\\t.year-buttons {\\n\\t\\ttext-align: center;\\n\\t\\tmargin-bottom: 10px;\\n\\t}\\n\\n\\t.year-buttons button {\\n\\t\\tmargin: 5px;\\n\\t\\tpadding: 8px 16px;\\n\\t\\tfont-size: 1rem;\\n\\t\\tcursor: pointer;\\n\\t\\t-webkit-transition: background-color 0.3s ease;\\n\\t\\ttransition: background-color 0.3s ease; /* Transition for background color */\\n\\t}\\n\\n\\t.year-buttons button.active {\\n\\t\\tbackground-color: darkblue; /* Darker color when active */\\n\\t\\tcolor: white; /* Change text color for contrast */\\n\\t}</style>\\n"],"names":[],"mappings":"AAmIC,qCAAQ,CACP,kBAAkB,CAAE,IAAI,CAAC,IAAI,CAAC,IAAI,CAClC,UAAU,CAAE,IAAI,CAAC,IAAI,CAAC,IACvB,CAEA,qCAAO,MAAO,CACb,MAAM,CAAE,KAAK,CACb,YAAY,CAAE,CACf,CAEA,2CAAc,CACb,UAAU,CAAE,MAAM,CAClB,UAAU,CAAE,GAAG,CACf,SAAS,CAAE,MACZ,CAEA,2CAAc,CACb,UAAU,CAAE,MAAM,CAClB,aAAa,CAAE,IAChB,CAEA,4BAAa,CAAC,qBAAO,CACpB,MAAM,CAAE,GAAG,CACX,OAAO,CAAE,GAAG,CAAC,IAAI,CACjB,SAAS,CAAE,IAAI,CACf,MAAM,CAAE,OAAO,CACf,kBAAkB,CAAE,gBAAgB,CAAC,IAAI,CAAC,IAAI,CAC9C,UAAU,CAAE,gBAAgB,CAAC,IAAI,CAAC,IACnC,CAEA,4BAAa,CAAC,MAAM,sBAAQ,CAC3B,gBAAgB,CAAE,QAAQ,CAC1B,KAAK,CAAE,KACR"}`
};
const BookBanMap = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let countyColors;
  geoAlbersUsa().scale(1300).translate([487.5, 305]);
  const path = geoPath().projection(null);
  let states = [];
  let counties = [];
  let data = [];
  const colorScale = scaleSequential(interpolateReds).domain([0, 30]);
  $$result.css.add(css$3);
  countyColors = counties.map((feature) => {
    let entry;
    {
      entry = data.find((d) => d.county_fips === feature.id.toString());
    }
    if (entry) {
      return {
        id: feature.id,
        color: colorScale(+entry.count)
      };
    }
    return { id: feature.id, color: "#fff" };
  });
  return ` <div class="year-buttons svelte-1q3je14"><button class="${["svelte-1q3je14", "active"].join(" ").trim()}" data-svelte-h="svelte-16ue5w8">Total</button> <button class="${["svelte-1q3je14", ""].join(" ").trim()}" data-svelte-h="svelte-1qwb9cx">2021</button> <button class="${["svelte-1q3je14", ""].join(" ").trim()}" data-svelte-h="svelte-dnqfq9">2022</button> <button class="${["svelte-1q3je14", ""].join(" ").trim()}" data-svelte-h="svelte-1edk4ll">2023</button></div> <svg viewBox="0 0 975 610">${each(counties, (feature) => {
    return `<path${add_attribute("d", path(feature), 0)} tabindex="0" role="button" aria-label="Select county" class="county svelte-1q3je14" stroke="rgb(0 0 0 / 10%)"${add_attribute("fill", countyColors.find((c) => c.id === feature.id)?.color, 0)}></path>`;
  })}<g fill="none" stroke="black">${each(states, (feature) => {
    return `<path${add_attribute("d", path(feature), 0)} tabindex="0" role="button" aria-label="Select state" class="state"></path>`;
  })}</g>${``}</svg> <div class="selectedName svelte-1q3je14">${``} </div>`;
});
const css$2 = {
  code: "#stacks.svelte-71cbp.svelte-71cbp{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:end;align-items:flex-end;gap:20px}.stack-container.svelte-71cbp.svelte-71cbp{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center}#stacks.svelte-71cbp img.svelte-71cbp{width:300px}.chart-title.svelte-71cbp.svelte-71cbp{margin-top:4rem;margin-bottom:0.25rem;font-size:24px;width:500px;margin:0 auto;padding:32px 0}.label.svelte-71cbp.svelte-71cbp,.year.svelte-71cbp.svelte-71cbp{text-align:center;margin:5px 0}@media(max-width: 600px){}",
  map: '{"version":3,"file":"RevenueGraphic.svelte","sources":["RevenueGraphic.svelte"],"sourcesContent":["<script>\\n    import ChartDetails from \\"$components/bookbans/ChartDetails.svelte\\";\\n<\/script>\\n\\n<!-- Chart Title -->\\n<h2 class=\\"chart-title\\">Across the three largest book-banning organizations, collective revenue nearly <span style=\\"background-color: #FEC872\\">doubled</span> after just a year of operation.</h2>\\n\\n<div id=\\"stacks\\">\\n    <div class=\\"stack-container\\">\\n        <p class=\\"label\\">$4 million</p>\\n        <img id=\\"stack1\\" src=\\"assets/svgs/stack1.svg\\" alt=\\"stack1\\" />\\n        <p class=\\"year\\">2021</p>\\n    </div>\\n    <div class=\\"stack-container\\">\\n        <p class=\\"label\\">$6.8 million</p>\\n        <img id=\\"stack2\\" src=\\"assets/svgs/stack2.svg\\" alt=\\"stack2\\" />\\n        <p class=\\"year\\">2022</p>\\n    </div>\\n</div>\\n\\n<!-- Chart Source -->\\n<ChartDetails source=\\"Source: Form 990s\\" />\\n\\n<style>\\n    #stacks {\\n        display: -webkit-box;\\n        display: flex;\\n        -webkit-box-pack: center;\\n                justify-content: center;\\n        -webkit-box-align: end;\\n                align-items: flex-end;\\n        gap: 20px; \\n    }\\n\\n    .stack-container {\\n        display: -webkit-box;\\n        display: flex;\\n        -webkit-box-orient: vertical;\\n        -webkit-box-direction: normal;\\n                flex-direction: column;\\n        -webkit-box-align: center;\\n                align-items: center; \\n    }\\n\\n    #stacks img {\\n        width: 300px;\\n    }\\n\\n    .chart-title {\\n        margin-top: 4rem;\\n        margin-bottom: 0.25rem;\\n        font-size: 24px;\\n        width: 500px;\\n        margin: 0 auto;\\n        padding: 32px 0;\\n    }\\n\\n    .label, .year {\\n        text-align: center; \\n        margin: 5px 0; \\n    }\\n\\n    @media (max-width: 600px) { \\n        /* Add responsive styles here if needed */\\n    }</style>\\n"],"names":[],"mappings":"AAwBI,iCAAQ,CACJ,OAAO,CAAE,WAAW,CACpB,OAAO,CAAE,IAAI,CACb,gBAAgB,CAAE,MAAM,CAChB,eAAe,CAAE,MAAM,CAC/B,iBAAiB,CAAE,GAAG,CACd,WAAW,CAAE,QAAQ,CAC7B,GAAG,CAAE,IACT,CAEA,0CAAiB,CACb,OAAO,CAAE,WAAW,CACpB,OAAO,CAAE,IAAI,CACb,kBAAkB,CAAE,QAAQ,CAC5B,qBAAqB,CAAE,MAAM,CACrB,cAAc,CAAE,MAAM,CAC9B,iBAAiB,CAAE,MAAM,CACjB,WAAW,CAAE,MACzB,CAEA,oBAAO,CAAC,gBAAI,CACR,KAAK,CAAE,KACX,CAEA,sCAAa,CACT,UAAU,CAAE,IAAI,CAChB,aAAa,CAAE,OAAO,CACtB,SAAS,CAAE,IAAI,CACf,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,CAAC,CAAC,IAAI,CACd,OAAO,CAAE,IAAI,CAAC,CAClB,CAEA,gCAAM,CAAE,+BAAM,CACV,UAAU,CAAE,MAAM,CAClB,MAAM,CAAE,GAAG,CAAC,CAChB,CAEA,MAAO,YAAY,KAAK,CAAE,CAE1B"}'
};
const RevenueGraphic = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return ` <h2 class="chart-title svelte-71cbp" data-svelte-h="svelte-2pksia">Across the three largest book-banning organizations, collective revenue nearly <span style="background-color: #FEC872">doubled</span> after just a year of operation.</h2> <div id="stacks" class="svelte-71cbp" data-svelte-h="svelte-rwhacb"><div class="stack-container svelte-71cbp"><p class="label svelte-71cbp">$4 million</p> <img id="stack1" src="assets/svgs/stack1.svg" alt="stack1" class="svelte-71cbp"> <p class="year svelte-71cbp">2021</p></div> <div class="stack-container svelte-71cbp"><p class="label svelte-71cbp">$6.8 million</p> <img id="stack2" src="assets/svgs/stack2.svg" alt="stack2" class="svelte-71cbp"> <p class="year svelte-71cbp">2022</p></div></div>  ${validate_component(ChartDetails, "ChartDetails").$$render($$result, { source: "Source: Form 990s" }, {}, {})}`;
});
const css$1 = {
  code: "#page.svelte-u6g4k2{max-width:50rem;padding:0;margin:0 auto}#page section{margin:32px auto;padding-top:32px}#page section > section{margin:0 auto;padding-top:0}#page h2 span{background:var(--color-mark);padding:0 8px}.copy.svelte-u6g4k2{max-width:42rem;margin:32px auto;text-align:left}.section-header.svelte-u6g4k2{max-width:42rem;margin:64px auto;text-align:left}",
  map: `{"version":3,"file":"Page.svelte","sources":["Page.svelte"],"sourcesContent":["<!-- \\nnpm run build\\ngit add .\\ngit commit -m \\"updated styling\\"\\ngit push origin main\\n\\nvercel --prod\\n -->\\n\\n<script>\\n\\timport Title from \\"$components/bookbans/Title.svelte\\";\\n\\timport UniqueTitles from \\"$components/bookbans/UniqueTitles.svelte\\";\\n\\timport M4LGroups from \\"$components/bookbans/M4LGroups.svelte\\";\\n\\timport TimeDifferences from \\"$components/bookbans/TimeDifferences.svelte\\";\\n\\timport IntroScrolly from \\"$components/bookbans/IntroScrolly.svelte\\";\\n\\timport M4LMap from \\"$components/bookbans/M4LMap.svelte\\";\\n\\timport BookBanMap from \\"$components/bookbans/BookBanMap.svelte\\";\\n\\timport MapsScrolly from \\"$components/bookbans/MapsScrolly.svelte\\";\\n\\timport RevenueGraphic from \\"$components/bookbans/RevenueGraphic.svelte\\";\\n<\/script>\\n\\n<div id=\\"page\\">\\n\\t\\n\\t<p class=\\"copy\\">\\n\\t\\tBook bans aren't new. The act of removing books from public circulation has long been used as a tool to suppress free speech and restrict access to ideas and information that have been determined by some party to be dissenting, inappropriate, or dangerous—conditions that have been applied, often arbitrarily, to any book from The Handmaid's Tale to Harry Potter. \\n\\t</p>\\n\\n\\t<UniqueTitles />\\n\\t\\n\\t<p class=\\"copy\\">\\n\\t\\tBut the recent exponential rise in bans across the nation is surprisingly new. The intense polarization of the early 2020s—marked by deep divisions over the Covid-19 pandemic, racial injustice, abortion access, transgender rights, climate policies, and a charged presidential election—have accelerated efforts to restrict certain political and cultural content from school curriculums and public spaces. Described as “educational gag orders” by PEN America, this censorship movement has particularly targeted books containing themes of race, gender, sex, diversity, and LGBTQ+ issues, thereby silencing critical perspectives and limiting access to diverse voices in literature. \\n\\t</p>\\n\\n\\t<h2 class=\\"section-header\\">Who is driving these book bans?</h2>\\n\\n\\t<p class=\\"copy\\">\\n\\t\\tWhile it may be easy to pin them on overly concerned parents or local fringe Facebook groups, our data reveals that the groups behind these bans are far more organized, resourced, and coordinated than previously thought, with links to far-right extremism and major conservative networks. These “parental rights groups”, as they are commonly referred to, have exerted significant influence by endorsing legislation such as Florida’s Don’t Say Gay bill and infiltrating local school boards to block educators from teaching topics like critical race theory and gender identity. In particular, book bans have emerged as a key tactic in efforts to restrict educational content in schools, as various groups increasingly coordinate their evaluation criteria and compile ban lists—some of which have been adopted by school boards as official metrics.\\n\\t</p>\\n\\n\\t<p class=\\"copy\\">\\n\\t\\tWhile some of these groups have been around since as early as the 1980s, PEN America reported that 70% of those currently in operation were formed in or after 2021.  \\n\\t</p>\\n\\n\\t<p class=\\"copy\\">\\n\\t\\tBut it’s not just the numbers; the organizational power of these groups is also growing. Across the three largest book-banning organizations—Moms for Liberty, No Left Turn in Education, and Parents Defending Education, all of which were founded in 2020 or 2021—we found that their collective revenue nearly doubled after just a year of operation, increasing from $4 million in 2021 to $6.8 million in 2022 altogether.  \\n\\t</p>\\n\\t\\n\\t<p class=\\"copy\\">\\n\\t\\tEach group has invested this money in different ways. In 2022, Parents Defending Education, by far the biggest earner among the three, spent one million dollars on employee compensation and benefits and another hefty million on legal fees, which funded lawsuits against various school districts, including one in Massachusetts over the creation of student affinity groups and another in Iowa challenging policies that allowed students to use their preferred names and pronouns. Meanwhile, No Left Turn in Education allocated more than half their 2022 revenue to contract labor.\\n\\t</p>\\n\\n\\t<RevenueGraphic />\\n\\n\\t<h2 class=\\"section-header\\">How Moms for Liberty is gaining ground</h2>\\n\\n\\t<p class=\\"copy\\">\\n\\t\\tLet’s take a closer look at how the group has driven book bans across the nation over the past three years. \\n\\t</p>\\n\\n\\t<M4LGroups />\\n\\t<M4LMap />\\n\\t<BookBanMap />\\n\\n\\t<p class=\\"copy\\">\\n\\t\\tWhile it might not be surprising to see Texas and Florida on the list, it’s York County, PA that takes center stage, where educators have been “locked in a battle” with the local Moms for Liberty chapter for years. Though these mass bans have since been reversed by the Central York school district due to public opposition from community members, the district quietly continued to pull books from school libraries even after the reversal.\\n\\t</p>\\n\\n\\t<p class=\\"copy\\">\\n\\t\\tTiming is also an important factor. Our analysis finds that the rate of book bans in a county tends to spike right after a Moms for Liberty Facebook group for that county is created, suggesting that these chapters play a crucial role in mobilize local efforts to challenge and remove books in schools. And since Moms for Liberty hasn’t stopped expanding, it raises the concern that the number of book bans may continue to rise as these groups gain influence in more communities. \\n\\t</p>\\n\\n\\t<TimeDifferences />\\n\\n\\t<!-- <h1>test</h1>\\n\\t<MapsScrolly /> -->\\n\\t\\n</div>\\n\\n<style>\\n\\t#page {\\n\\t\\tmax-width: 50rem;   \\n\\t\\tpadding: 0;      \\n\\t\\tmargin: 0 auto;    \\n\\t}\\n\\n\\t:global(#page section) {\\n\\t\\tmargin: 32px auto;  \\n\\t\\tpadding-top: 32px;  \\n\\t}\\n\\n\\t:global(#page section > section) {\\n\\t\\tmargin: 0 auto;      \\n\\t\\tpadding-top: 0;     \\n\\t}\\n\\n\\t:global(#page h2 span) {\\n\\t\\tbackground: var(--color-mark); \\n\\t\\tpadding: 0 8px;             \\n\\t}\\n\\n\\t.copy {\\n\\t\\tmax-width: 42rem;  \\n\\t\\tmargin: 32px auto;    \\n\\t\\ttext-align: left;   \\n\\t}\\n\\n\\t.section-header{\\n\\t\\tmax-width: 42rem;   \\n\\t\\tmargin: 64px auto;    \\n\\t\\ttext-align: left;\\n\\t}</style>\\n\\n"],"names":[],"mappings":"AA+EC,mBAAM,CACL,SAAS,CAAE,KAAK,CAChB,OAAO,CAAE,CAAC,CACV,MAAM,CAAE,CAAC,CAAC,IACX,CAEQ,aAAe,CACtB,MAAM,CAAE,IAAI,CAAC,IAAI,CACjB,WAAW,CAAE,IACd,CAEQ,uBAAyB,CAChC,MAAM,CAAE,CAAC,CAAC,IAAI,CACd,WAAW,CAAE,CACd,CAEQ,aAAe,CACtB,UAAU,CAAE,IAAI,YAAY,CAAC,CAC7B,OAAO,CAAE,CAAC,CAAC,GACZ,CAEA,mBAAM,CACL,SAAS,CAAE,KAAK,CAChB,MAAM,CAAE,IAAI,CAAC,IAAI,CACjB,UAAU,CAAE,IACb,CAEA,6BAAe,CACd,SAAS,CAAE,KAAK,CAChB,MAAM,CAAE,IAAI,CAAC,IAAI,CACjB,UAAU,CAAE,IACb"}`
};
const Page$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `  <div id="page" class="svelte-u6g4k2"><p class="copy svelte-u6g4k2" data-svelte-h="svelte-kkog36">Book bans aren&#39;t new. The act of removing books from public circulation has long been used as a tool to suppress free speech and restrict access to ideas and information that have been determined by some party to be dissenting, inappropriate, or dangerous—conditions that have been applied, often arbitrarily, to any book from The Handmaid&#39;s Tale to Harry Potter.</p> ${validate_component(UniqueTitles, "UniqueTitles").$$render($$result, {}, {}, {})} <p class="copy svelte-u6g4k2" data-svelte-h="svelte-1hidiob">But the recent exponential rise in bans across the nation is surprisingly new. The intense polarization of the early 2020s—marked by deep divisions over the Covid-19 pandemic, racial injustice, abortion access, transgender rights, climate policies, and a charged presidential election—have accelerated efforts to restrict certain political and cultural content from school curriculums and public spaces. Described as “educational gag orders” by PEN America, this censorship movement has particularly targeted books containing themes of race, gender, sex, diversity, and LGBTQ+ issues, thereby silencing critical perspectives and limiting access to diverse voices in literature.</p> <h2 class="section-header svelte-u6g4k2" data-svelte-h="svelte-1qe9t8a">Who is driving these book bans?</h2> <p class="copy svelte-u6g4k2" data-svelte-h="svelte-7kbk25">While it may be easy to pin them on overly concerned parents or local fringe Facebook groups, our data reveals that the groups behind these bans are far more organized, resourced, and coordinated than previously thought, with links to far-right extremism and major conservative networks. These “parental rights groups”, as they are commonly referred to, have exerted significant influence by endorsing legislation such as Florida’s Don’t Say Gay bill and infiltrating local school boards to block educators from teaching topics like critical race theory and gender identity. In particular, book bans have emerged as a key tactic in efforts to restrict educational content in schools, as various groups increasingly coordinate their evaluation criteria and compile ban lists—some of which have been adopted by school boards as official metrics.</p> <p class="copy svelte-u6g4k2" data-svelte-h="svelte-1o1fp2i">While some of these groups have been around since as early as the 1980s, PEN America reported that 70% of those currently in operation were formed in or after 2021.  </p> <p class="copy svelte-u6g4k2" data-svelte-h="svelte-101bpm">But it’s not just the numbers; the organizational power of these groups is also growing. Across the three largest book-banning organizations—Moms for Liberty, No Left Turn in Education, and Parents Defending Education, all of which were founded in 2020 or 2021—we found that their collective revenue nearly doubled after just a year of operation, increasing from $4 million in 2021 to $6.8 million in 2022 altogether.  </p> <p class="copy svelte-u6g4k2" data-svelte-h="svelte-1nti9mg">Each group has invested this money in different ways. In 2022, Parents Defending Education, by far the biggest earner among the three, spent one million dollars on employee compensation and benefits and another hefty million on legal fees, which funded lawsuits against various school districts, including one in Massachusetts over the creation of student affinity groups and another in Iowa challenging policies that allowed students to use their preferred names and pronouns. Meanwhile, No Left Turn in Education allocated more than half their 2022 revenue to contract labor.</p> ${validate_component(RevenueGraphic, "RevenueGraphic").$$render($$result, {}, {}, {})} <h2 class="section-header svelte-u6g4k2" data-svelte-h="svelte-cb3z96">How Moms for Liberty is gaining ground</h2> <p class="copy svelte-u6g4k2" data-svelte-h="svelte-qh8hhx">Let’s take a closer look at how the group has driven book bans across the nation over the past three years. </p> ${validate_component(M4LGroups, "M4LGroups").$$render($$result, {}, {}, {})} ${validate_component(M4LMap, "M4LMap").$$render($$result, {}, {}, {})} ${validate_component(BookBanMap, "BookBanMap").$$render($$result, {}, {}, {})} <p class="copy svelte-u6g4k2" data-svelte-h="svelte-cpk415">While it might not be surprising to see Texas and Florida on the list, it’s York County, PA that takes center stage, where educators have been “locked in a battle” with the local Moms for Liberty chapter for years. Though these mass bans have since been reversed by the Central York school district due to public opposition from community members, the district quietly continued to pull books from school libraries even after the reversal.</p> <p class="copy svelte-u6g4k2" data-svelte-h="svelte-1yoqwtd">Timing is also an important factor. Our analysis finds that the rate of book bans in a county tends to spike right after a Moms for Liberty Facebook group for that county is created, suggesting that these chapters play a crucial role in mobilize local efforts to challenge and remove books in schools. And since Moms for Liberty hasn’t stopped expanding, it raises the concern that the number of book bans may continue to rise as these groups gain influence in more communities. </p> ${validate_component(TimeDifferences, "TimeDifferences").$$render($$result, {}, {}, {})}  </div>`;
});
const body = [
  {
    section: "intro",
    content: [
      {
        type: "h4",
        value: "An h4 element with no attributes"
      },
      {
        type: "text",
        value: "Hello! This is a test on book bans"
      },
      {
        type: "img",
        value: {
          src: "assets/demo/test.jpg",
          alt: "A cat"
        }
      },
      {
        type: "text",
        value: "Hello! This is a test on book bans. Check back here for more"
      },
      {
        type: "Test",
        value: {
          label: "hello?",
          value: "50"
        }
      }
    ]
  }
];
const copy = {
  body
};
const css = {
  code: "body{background-image:url('/assets/images/paper.png');background-size:cover;background-repeat:no-repeat;background-position:center}",
  map: `{"version":3,"file":"Index.svelte","sources":["Index.svelte"],"sourcesContent":["<script>\\n\\timport { getContext } from \\"svelte\\";\\n\\timport Section1 from \\"$components/bookbans/Section1.svelte\\";\\n\\timport Title from \\"$components/bookbans/Title.svelte\\";\\n\\timport IntroScrolly from \\"$components/bookbans/IntroScrolly.svelte\\";\\n\\timport Page from \\"$components/bookbans/Page.svelte\\";\\n\\timport copy from \\"$data/copy.json\\";\\n\\t// import Footer from \\"$components/Footer.svelte\\";\\n\\n\\t// const copy = getContext(\\"copy\\");\\n\\t// const data = getContext(\\"data\\");\\n<\/script>\\n\\n<Section1 />\\n<Page />\\n\\n\\n\\n\\n<!-- <Footer /> -->\\n\\n<style>\\n\\t/* Set the background image for the component */\\n\\t:global(body) {\\n\\t\\tbackground-image: url('/assets/images/paper.png');\\n\\t\\tbackground-size: cover; /* Cover the entire background */\\n\\t\\tbackground-repeat: no-repeat; /* Prevent the image from repeating */\\n\\t\\tbackground-position: center; /* Center the image */\\n\\t}\\n\\t\\n\\t/* Optional: Set a min height to ensure the background is visible */\\n\\tmain {\\n\\t\\tmin-height: 100vh; /* Adjust as needed */\\n\\t}</style>"],"names":[],"mappings":"AAuBS,IAAM,CACb,gBAAgB,CAAE,+BAA+B,CACjD,eAAe,CAAE,KAAK,CACtB,iBAAiB,CAAE,SAAS,CAC5B,mBAAmB,CAAE,MACtB"}`
};
const Index = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Section1, "Section1").$$render($$result, {}, {}, {})} ${validate_component(Page$1, "Page").$$render($$result, {}, {}, {})} `;
});
function version() {
  console.log("--- --- --- --- --- ---");
  console.log(`svelte-starter: ${"5.23.0"}`);
  console.log(`build: ${"2024-10-24-16:26"}`);
  console.log("--- --- --- --- --- ---");
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  version();
  const preloadFont = [
    "https://pudding.cool/assets/fonts/tiempos/TiemposTextWeb-Regular.woff2",
    "https://pudding.cool/assets/fonts/tiempos/TiemposTextWeb-Bold.woff2",
    "https://pudding.cool/assets/fonts/atlas/AtlasGrotesk-Regular-Web.woff2",
    "https://pudding.cool/assets/fonts/atlas/AtlasGrotesk-Bold-Web.woff2"
  ];
  const { title, description, url, keywords } = copy;
  setContext("copy", copy);
  setContext("data", data.data);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return `${validate_component(Meta, "Meta").$$render(
    $$result,
    {
      title,
      description,
      url,
      preloadFont,
      keywords
    },
    {},
    {}
  )} ${validate_component(Index, "Index").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
