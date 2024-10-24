import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
const sticker = `<svg width="154" height="16" viewBox="0 0 154 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.4785 16C5.92406 16 4.58959 15.668 3.47527 15.0035C2.36077 14.3393 1.503 13.4122 0.901873 12.2221C0.30047 11.0322 0 9.65622 0 8.09367C0 6.53111 0.30047 5.1518 0.901873 3.95444C1.503 2.75735 2.36077 1.82283 3.47527 1.15107C4.58959 0.47967 5.92406 0.143602 7.4785 0.143602C9.32607 0.143602 10.84 0.600137 12.0206 1.51247C13.0333 2.29555 13.7195 3.34988 14.0794 4.67557C14.1725 5.01895 13.9071 5.35603 13.5499 5.35603H11.5439C11.3113 5.35603 11.1008 5.21042 11.0282 4.99028C10.8108 4.33008 10.4377 3.79865 9.90909 3.39593C9.28559 2.92164 8.46078 2.68413 7.43458 2.68413C6.01209 2.68413 4.89749 3.16599 4.09116 4.12964C3.28455 5.09328 2.88148 6.41481 2.88148 8.09367C2.88148 9.77253 3.28455 11.0907 4.09116 12.0469C4.89749 13.0033 6.01209 13.4814 7.43458 13.4814C8.46078 13.4814 9.28559 13.2589 9.90909 12.8134C10.4347 12.4378 10.8066 11.9398 11.0245 11.3197C11.1002 11.1044 11.3077 10.9628 11.5369 10.9628H13.5419C13.9016 10.9628 14.1689 11.3044 14.0693 11.6485C13.7069 12.9017 13.024 13.907 12.0206 14.664C10.84 15.5547 9.32607 16 7.4785 16Z" fill="#2E3335"/>
<path d="M15.8367 15.1929V0.950134C15.8367 0.649754 16.0813 0.406139 16.3831 0.406139H18.106C18.4076 0.406139 18.6522 0.649754 18.6522 0.950134V15.1929C18.6522 15.4934 18.4076 15.7369 18.106 15.7369H16.3831C16.0813 15.7369 15.8367 15.4933 15.8367 15.1929Z" fill="#2E3335"/>
<path d="M24.3489 15.1929V3.2059C24.3489 2.90552 24.1043 2.662 23.8025 2.662H20.4081C20.1064 2.662 19.8618 2.41839 19.8618 2.11801V0.950134C19.8618 0.649753 20.1064 0.406139 20.4081 0.406139H31.1272C31.4288 0.406139 31.6734 0.649753 31.6734 0.950134V2.11801C31.6734 2.41839 31.4288 2.662 31.1272 2.662H27.7107C27.409 2.662 27.1643 2.90552 27.1643 3.2059V15.1929C27.1643 15.4934 26.9198 15.7369 26.6181 15.7369H24.8952C24.5934 15.7369 24.3489 15.4934 24.3489 15.1929Z" fill="#2E3335"/>
<path d="M32.8829 15.1929V0.950134C32.8829 0.649754 33.1275 0.406139 33.4292 0.406139H35.152C35.4538 0.406139 35.6983 0.649754 35.6983 0.950134V15.1929C35.6983 15.4934 35.4538 15.7369 35.152 15.7369H33.4292C33.1275 15.7369 32.8829 15.4933 32.8829 15.1929Z" fill="#2E3335"/>
<path d="M37.3479 15.1929V13.752C37.3479 13.6467 37.3786 13.5437 37.4363 13.4554L43.8813 3.59014C44.1177 3.22828 43.8568 2.74955 43.4233 2.74955H37.9602C37.6584 2.74955 37.4138 2.50603 37.4138 2.20556V0.950134C37.4138 0.649753 37.6584 0.406139 37.9602 0.406139H47.1394C47.4412 0.406139 47.6858 0.649753 47.6858 0.950134V2.39028C47.6858 2.49614 47.6548 2.59959 47.5966 2.68816L41.1127 12.5516C40.8748 12.9134 41.1355 13.3935 41.5698 13.3935H47.1835C47.4852 13.3935 47.7298 13.637 47.7298 13.9374V15.1929C47.7298 15.4934 47.4852 15.7369 47.1835 15.7369H37.8942C37.5925 15.7369 37.3479 15.4934 37.3479 15.1929Z" fill="#2E3335"/>
<path d="M49.3794 15.1929V0.950134C49.3794 0.649754 49.6239 0.406139 49.9257 0.406139H58.8851C59.1868 0.406139 59.4313 0.649754 59.4313 0.950134V2.11801C59.4313 2.41839 59.1868 2.662 58.8851 2.662H52.7412C52.4395 2.662 52.1948 2.90552 52.1948 3.2059V6.32297C52.1948 6.62344 52.4395 6.86696 52.7412 6.86696H58.2251C58.5269 6.86696 58.7714 7.11049 58.7714 7.41096V8.5131C58.7714 8.81357 58.5269 9.05709 58.2251 9.05709H52.7412C52.4395 9.05709 52.1948 9.30061 52.1948 9.60109V12.9372C52.1948 13.2376 52.4395 13.4811 52.7412 13.4811H58.8851C59.1868 13.4811 59.4313 13.7247 59.4313 14.0251V15.1929C59.4313 15.4934 59.1868 15.7369 58.8851 15.7369H49.9257C49.6239 15.7369 49.3794 15.4933 49.3794 15.1929Z" fill="#2E3335"/>
<path d="M61.2127 15.1929V0.950134C61.2127 0.649754 61.4573 0.406139 61.7591 0.406139H63.736C63.9185 0.406139 64.0891 0.497021 64.1904 0.648182L70.264 9.71027C70.564 10.1578 71.2647 9.9464 71.2647 9.40832V0.950134C71.2647 0.649754 71.5093 0.406139 71.8111 0.406139H73.5338C73.8355 0.406139 74.0801 0.649754 74.0801 0.950134V15.1929C74.0801 15.4934 73.8355 15.7369 73.5338 15.7369H71.5566C71.3743 15.7369 71.2039 15.6463 71.1025 15.4954L65.0287 6.45129C64.7284 6.00419 64.0282 6.21582 64.0282 6.75362V15.1929C64.0282 15.4934 63.7836 15.7369 63.4818 15.7369H61.7591C61.4573 15.7369 61.2127 15.4933 61.2127 15.1929Z" fill="#2E3335"/>
<path d="M87.3985 15.8564C85.844 15.8564 84.5096 15.5244 83.3952 14.8599C82.2807 14.1957 81.423 13.2686 80.8218 12.0785C80.2204 10.8886 79.92 9.51262 79.92 7.95006C79.92 6.38751 80.2204 5.0082 80.8218 3.81083C81.423 2.61375 82.2807 1.67923 83.3952 1.00746C84.5096 0.336068 85.844 0 87.3985 0C89.246 0 90.76 0.456534 91.9406 1.36877C92.9533 2.15194 93.6394 3.20628 93.9993 4.53197C94.0925 4.87534 93.8271 5.21243 93.4699 5.21243H91.4639C91.2313 5.21243 91.0207 5.06681 90.9482 4.84668C90.7307 4.18647 90.3577 3.65505 89.8291 3.25232C89.2056 2.77804 88.3807 2.54053 87.3545 2.54053C85.9321 2.54053 84.8175 3.02239 84.0111 3.98603C83.2045 4.94968 82.8014 6.2712 82.8014 7.95006C82.8014 9.62893 83.2045 10.9471 84.0111 11.9033C84.8175 12.8597 85.9321 13.3378 87.3545 13.3378C88.3807 13.3378 89.2056 13.1153 89.8291 12.6698C90.3547 12.2942 90.7266 11.7962 90.9445 11.1761C91.0202 10.9608 91.2277 10.8192 91.4568 10.8192H93.4619C93.8215 10.8192 94.0888 11.1608 93.9893 11.5049C93.6269 12.7581 92.944 13.7634 91.9406 14.5204C90.76 15.4111 89.246 15.8564 87.3985 15.8564Z" fill="#2E3335"/>
<path d="M112.816 15.0493V0.806532C112.816 0.506059 113.06 0.262537 113.362 0.262537H119.753C121.557 0.262537 123.042 0.580114 124.207 1.21518C125.373 1.85033 126.238 2.74112 126.803 3.88717C127.367 5.03359 127.65 6.38045 127.65 7.92794C127.65 9.47542 127.367 10.8227 126.803 11.9687C126.238 13.115 125.373 14.0055 124.207 14.6406C123.042 15.2757 121.557 15.5932 119.753 15.5932H113.362C113.06 15.5932 112.816 15.3497 112.816 15.0493ZM115.631 12.6402C115.631 12.9406 115.876 13.1842 116.177 13.1842H119.621C120.912 13.1842 121.931 12.9761 122.679 12.56C123.427 12.1439 123.962 11.5454 124.284 10.7641C124.607 9.98317 124.768 9.03765 124.768 7.92794C124.768 6.83283 124.607 5.8911 124.284 5.10265C123.962 4.31421 123.427 3.70855 122.679 3.28493C121.931 2.86158 120.912 2.64977 119.621 2.64977H116.177C115.876 2.64977 115.631 2.8933 115.631 3.19368V12.6402Z" fill="#2E3335"/>
<path d="M129.299 15.0493V0.806532C129.299 0.506059 129.544 0.262537 129.846 0.262537H138.805C139.107 0.262537 139.351 0.506059 139.351 0.806532V1.9744C139.351 2.27478 139.107 2.5184 138.805 2.5184H132.661C132.359 2.5184 132.115 2.76192 132.115 3.0623V6.17937C132.115 6.47984 132.359 6.72336 132.661 6.72336H138.145C138.447 6.72336 138.691 6.96688 138.691 7.26736V8.36949C138.691 8.66997 138.447 8.91349 138.145 8.91349H132.661C132.359 8.91349 132.115 9.15701 132.115 9.45748V12.7936C132.115 13.094 132.359 13.3375 132.661 13.3375H138.805C139.107 13.3375 139.351 13.581 139.351 13.8815V15.0493C139.351 15.3497 139.107 15.5933 138.805 15.5933H129.846C129.544 15.5933 129.299 15.3497 129.299 15.0493Z" fill="#2E3335"/>
<path d="M141.269 14.7631L145.605 8.1317C145.722 7.95364 145.72 7.72805 145.6 7.55184L141.225 1.10016C140.979 0.738209 141.254 0.262537 141.709 0.262537H143.746C143.942 0.262537 144.124 0.356561 144.229 0.51216L147.19 4.86431C147.421 5.20482 147.951 5.1952 148.169 4.84647L150.862 0.530003C150.965 0.364234 151.153 0.262537 151.357 0.262537H153.327C153.778 0.262537 154.054 0.73146 153.816 1.09378L149.484 7.67933C149.367 7.85786 149.369 8.08437 149.489 8.26114L153.908 14.7549C154.154 15.1168 153.879 15.5932 153.424 15.5932H151.388C151.193 15.5932 151.011 15.4992 150.905 15.3437L147.901 10.9299C147.669 10.5884 147.137 10.5995 146.921 10.9503L144.226 15.3233C144.123 15.4904 143.934 15.5932 143.729 15.5932H141.758C141.307 15.5932 141.032 15.1255 141.269 14.7631Z" fill="#2E3335"/>
<path d="M106.439 3.50528C106.439 4.3956 107.164 5.11729 108.058 5.11729C108.952 5.11729 109.677 4.3956 109.677 3.50528C109.677 2.61495 108.952 1.89326 108.058 1.89326C107.164 1.89326 106.439 2.61495 106.439 3.50528Z" fill="#2E3335"/>
<path d="M103.414 15.9464C103.272 15.9464 103.127 15.9426 102.985 15.935C101.052 15.8325 99.2255 15.0181 97.8432 13.6416C96.4609 12.2652 95.6428 10.447 95.5399 8.52213C95.4285 6.44073 96.1323 4.43801 97.5212 2.88276C98.8984 1.34082 100.788 0.410647 102.843 0.263554C102.853 0.262907 102.863 0.262537 102.873 0.262537C103.097 0.262537 103.279 0.444392 103.279 0.667944V2.50481C103.279 2.71394 103.119 2.88692 102.908 2.90716C101.552 3.03715 100.316 3.68118 99.4277 4.72054C98.5283 5.77229 98.0905 7.11268 98.1948 8.49486C98.3865 11.0386 100.458 13.1008 103.012 13.2916C103.146 13.3016 103.281 13.3067 103.414 13.3067C104.722 13.3067 105.975 12.822 106.942 11.942C107.902 11.0677 108.5 9.88037 108.624 8.59841C108.644 8.38808 108.818 8.22933 109.028 8.22933H110.873C110.987 8.22933 111.093 8.27528 111.171 8.35868C111.249 8.44198 111.287 8.55024 111.279 8.6635C110.984 12.7474 107.529 15.9464 103.414 15.9464Z" fill="#2E3335"/>
<path d="M103.958 11.5342C103.732 11.5342 103.549 11.3527 103.549 11.1295V9.2239C103.549 9.06978 103.642 8.92805 103.791 8.85408C104.083 8.70949 104.269 8.4068 104.264 8.08284C104.257 7.62973 103.881 7.25575 103.426 7.24937H103.414C103.089 7.24928 102.797 7.42957 102.652 7.71987C102.578 7.86863 102.435 7.96108 102.281 7.96108H100.367C100.247 7.96108 100.134 7.90847 100.056 7.81676C99.978 7.72357 99.9454 7.60097 99.9672 7.4806C100.266 5.8169 101.715 4.60937 103.414 4.60937C103.497 4.60937 103.581 4.61233 103.664 4.61815C105.392 4.73834 106.786 6.12616 106.906 7.84634C107.031 9.63106 105.796 11.2138 104.032 11.5277C104.007 11.532 103.982 11.5342 103.958 11.5342Z" fill="#2E3335"/>
</svg>
`;
const css = {
  code: "header.svelte-xqzoii{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;padding-top:32px}.sticker.svelte-xqzoii{max-width:16em}",
  map: '{"version":3,"file":"Header.svelte","sources":["Header.svelte"],"sourcesContent":["<script>\\n\\timport sticker from \\"$svg/cclogo_black.svg\\";\\n<\/script>\\n\\n<header>\\n\\t<div class=\\"sticker\\">\\n\\t\\t<a href=\\"https://citizencodex.com\\" aria-label=\\"Citizen Codex\\" target=\\"_self\\">\\n\\t\\t\\t{@html sticker}\\n\\t\\t</a>\\n\\t</div>\\n</header>\\n\\n<style>\\n\\theader {\\n\\t\\tdisplay: -webkit-box;\\n\\t\\tdisplay: flex;\\n\\t\\t-webkit-box-pack: center;\\n\\t\\t        justify-content: center; \\n\\t\\tpadding-top: 32px;\\n\\t}\\n\\n\\t.sticker {\\n\\t\\tmax-width: 16em;\\n\\t}</style>\\n"],"names":[],"mappings":"AAaC,oBAAO,CACN,OAAO,CAAE,WAAW,CACpB,OAAO,CAAE,IAAI,CACb,gBAAgB,CAAE,MAAM,CAChB,eAAe,CAAE,MAAM,CAC/B,WAAW,CAAE,IACd,CAEA,sBAAS,CACR,SAAS,CAAE,IACZ"}'
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<header class="svelte-xqzoii"><div class="sticker svelte-xqzoii"><a href="https://citizencodex.com" aria-label="Citizen Codex" target="_self"><!-- HTML_TAG_START -->${sticker}<!-- HTML_TAG_END --></a></div> </header>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <main id="content">${slots.default ? slots.default({}) : ``}</main>`;
});
export {
  Layout as default
};
