import { c as createComponent, a as createAstro, m as maybeRenderHead, r as renderComponent, d as addAttribute, u as unescapeHTML, b as renderTemplate } from '../chunks/astro/server_DPHUjbDm.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CB8ykua8.mjs';
import { f as formatDate } from '../chunks/helpers_CYuQHAyX.mjs';
import { $ as $$ImgPb, a as allActivitiesSorted } from '../chunks/ImgPb_CAcco1oo.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$CardActivite = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CardActivite;
  const { ...activite } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="group col-span-4 grid grid-cols-1 grid-rows-[auto_1fr] lg:grid-cols-[4fr_11fr] lg:grid-rows-1"> ${renderComponent($$result, "ImgPb", $$ImgPb, { "record": activite, "field": "", "alt": activite.titre, "classPicture": "col-start-1 row-start-1 w-full h-auto object-cover", "classImg": "object-cover w-full h-full" })} <div class="z-[2] col-span-1 col-start-1 lg:col-start-2 row-start-2 lg:row-start-1 space-y-4 bg-white p-6"> <h3 class="z-[1] col-start-1 row-start-1 my-6 mr-4 self-end font-mono text-3xl text-white"> <a${addAttribute(`/activites/${activite.id}`, "href")}>${activite.titre}</a> </h3> <p class="uppercase">${formatDate(activite.date_debut_activite)}</p> <p>${unescapeHTML(activite.description)}</p> <a${addAttribute(`/activites/${activite.id}`, "href")} class="inline-block border-b-2 border-black uppercase">Plus d'info</a> </div> </article>`;
}, "C:/Users/ugoli/Documents/GitHub/sae-203-2025-Lippi-Ugo/src/components/CardActivite.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const activites = await allActivitiesSorted();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Activit\xE9s" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container py-20 space-y-8"> <h1>Programme des activités</h1> <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-8"> ${activites.length > 0 ? activites.map((activite) => renderTemplate`${renderComponent($$result2, "CardActivite", $$CardActivite, { ...activite })}`) : renderTemplate`<p>Aucune activité n'a été trouvée.</p>`} </div> </div> ` })}`;
}, "C:/Users/ugoli/Documents/GitHub/sae-203-2025-Lippi-Ugo/src/pages/activites/index.astro", void 0);

const $$file = "C:/Users/ugoli/Documents/GitHub/sae-203-2025-Lippi-Ugo/src/pages/activites/index.astro";
const $$url = "/activites";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
