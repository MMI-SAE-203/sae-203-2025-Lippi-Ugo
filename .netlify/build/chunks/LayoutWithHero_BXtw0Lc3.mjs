import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead, e as renderSlot } from './astro/server_DPHUjbDm.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './Layout_CB8ykua8.mjs';
import { $ as $$Picture } from './_astro_assets_fjUFF-vJ.mjs';

const $$Astro = createAstro();
const $$LayoutWithHero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LayoutWithHero;
  const { title, src, alt, duotoneClass } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="relative"> ${renderComponent($$result2, "Picture", $$Picture, { "pictureAttributes": { class: `w-full h-auto object-cover ${duotoneClass}` }, "class": "w-full", "formats": ["avif", "webp"], "widths": [540, 1024, src.width], "sizes": `(max-width: 540px) 540px, (max-width: 1024px) 1024px, ${src.width}px`, "src": src, "alt": alt, "loading": "lazy" })} <h1 class="absolute bottom-16 lg:bottom-64 left-1/2 transform -translate-x-1/2 text-white text-6xl lg:text-8xl font-bold">${title}</h1> </div> <main> ${renderSlot($$result2, $$slots["default"])} </main> ` })}`;
}, "C:/Users/ugoli/Documents/GitHub/sae-203-2025-Lippi-Ugo/src/layouts/LayoutWithHero.astro", void 0);

export { $$LayoutWithHero as $ };
