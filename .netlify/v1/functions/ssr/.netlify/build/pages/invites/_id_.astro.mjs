import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute, u as unescapeHTML } from '../../chunks/astro/server_DPHUjbDm.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_CB8ykua8.mjs';
import { d as oneIDInvite, $ as $$ImgPb } from '../../chunks/ImgPb_CAcco1oo.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const invite = await oneIDInvite(Astro2.params.id);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="pt-12 grille relative *:px-4"> <a href="/invites" class="inline-block mb-4 mx-4 py-2 bg-indigo-800 text-white rounded hover:bg-indigo-900">Retour à la liste des invités</a> ${renderComponent($$result2, "ImgPb", $$ImgPb, { "record": invite, "field": "image", "alt": `${invite.prenom} ${invite.nom}`, "classPicture": "col-start-1 row-start-1 col-span-2 row-span-2 group-hover:before:bg-black", "classImg": "object-cover w-full h-auto" })} <header class="lg:col-start-7 lg:col-span-6"> <h1 class="my-12">${invite.titre}</h1> <h2 class="my-12 p-4">${`${invite.prenom} ${invite.nom}`}</h2> <ul class="divide-y *:grid *:grid-cols-4 *:items-center *:py-4 *:px-4"> <li> <span class="col-span-2 uppercase font-bold text-sm">Rôle</span> <span class="col-span-2">${invite.categorie}</span> </li> <li> <span class="col-span-2 uppercase font-bold text-sm">Film associé</span> <a${addAttribute(`/films/${invite.expand?.film_associe.id}`, "href")}><span class="col-span-2">${invite.expand?.film_associe.titre}</span></a> </li> </ul> </header> </div> <h2 class="my-12 px-4">Biographie</h2> <div class="my-12 space-y-3 px-6 lg:mx-5">${unescapeHTML(invite.biographie)}</div> ` })}`;
}, "C:/Users/ugoli/Documents/GitHub/sae-203-2025-Lippi-Ugo/src/pages/invites/[id].astro", void 0);

const $$file = "C:/Users/ugoli/Documents/GitHub/sae-203-2025-Lippi-Ugo/src/pages/invites/[id].astro";
const $$url = "/invites/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
