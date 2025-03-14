import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_DPHUjbDm.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_CB8ykua8.mjs';
import { o as oneIDActivite, $ as $$ImgPb } from '../../chunks/ImgPb_CAcco1oo.mjs';
import { f as formatDate } from '../../chunks/helpers_CYuQHAyX.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const event = await oneIDActivite(id);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="pt-12 grille relative *:px-4"> <a href="/activites" class="inline-block mb-4 mx-4 py-2 bg-indigo-800 text-white rounded hover:bg-indigo-900">Retour à la liste des activites</a> ${renderComponent($$result2, "ImgPb", $$ImgPb, { "record": event, "field": "affiche", "alt": event.titre, "classPicture": "col-start-1 row-start-1 col-span-2 row-span-2 group-hover:before:bg-black", "classImg": "object-cover w-80 h-100 px-4" })} <header class="my-12 space-y-3 px-6 lg:mx-5 lg:col-start-7 lg:col-span-6"> <h1 class="my-12">${event.titre}</h1> <ul class="divide-y *:grid *:grid-cols-4 *:items-center *:py-4 *:px-4"> <li> <span class="col-span-2 uppercase font-bold text-sm">Lieux</span> <span class="col-span-2">${event.lieux}</span> </li> <li> <span class="col-span-2 uppercase font-bold text-sm">Date début</span> <span class="col-span-2">${formatDate(event.date_debut_activite)}</span> </li> <li> <span class="col-span-2 uppercase font-bold text-sm">Date fin</span> <span class="col-span-2">${formatDate(event.date_fin_activite)}</span> </li> <li> <span class="col-span-2 uppercase font-bold text-sm">Invité à l'animation</span> <a${addAttribute(`/invites/${event.expand?.invite_activite.id}`, "href")}><span class="col-span-2">${event.expand?.invite_activite.prenom} ${event.expand?.invite_activite.nom}</span></a> </li> </ul> </header> </div> ` })}`;
}, "C:/Users/ugoli/Documents/GitHub/sae-203-2025-Lippi-Ugo/src/pages/activites/[id].astro", void 0);

const $$file = "C:/Users/ugoli/Documents/GitHub/sae-203-2025-Lippi-Ugo/src/pages/activites/[id].astro";
const $$url = "/activites/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
