import { c as createComponent, a as createAstro, m as maybeRenderHead, r as renderComponent, d as addAttribute, u as unescapeHTML, b as renderTemplate } from '../chunks/astro/server_DPHUjbDm.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CB8ykua8.mjs';
import { $ as $$ImgPb, A as AllInvite } from '../chunks/ImgPb_CAcco1oo.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$CardInvite = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CardInvite;
  const { ...invite } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="group col-span-4 grid grid-cols-1 grid-rows-[auto_1fr] lg:grid-cols-[4fr_11fr] lg:grid-rows-1"> ${renderComponent($$result, "ImgPb", $$ImgPb, { "record": invite, "field": "image", "alt": `${invite.prenom} ${invite.nom}`, "classPicture": "col-start-1 row-start-1 w-full h-60 lg:h-60 lg:w-full object-cover", "classImg": "object-cover w-full h-full" })} <div class="z-[2] col-span-1 col-start-1 row-start-2 space-y-4 bg-white p-6"> <h3 class="z-[1] col-start-1 row-start-1 my-6 mr-4 self-end font-mono text-3xl text-black"> <a${addAttribute(`/invites/${invite.id}`, "href")}>${invite.prenom} ${invite.nom}</a> </h3> <p>${unescapeHTML(invite.description)}</p> <a${addAttribute(`/invites/${invite.id}`, "href")} class="inline-block border-b-2 border-black uppercase">Plus d'info</a> </div> </article>`;
}, "C:/Users/ugoli/Documents/GitHub/sae-203-2025-Lippi-Ugo/src/components/CardInvite.astro", void 0);

const $$Carousel = createComponent(async ($$result, $$props, $$slots) => {
  const invites = await AllInvite();
  return renderTemplate`${maybeRenderHead()}<div class="carousel-container overflow-x-auto whitespace-nowrap space-x-4"> ${invites.length > 0 ? invites.map((invite) => renderTemplate`<div class="inline-block w-full h-auto lg:w-96 lg:h-96 flex-shrink-0"> ${renderComponent($$result, "CardInvite", $$CardInvite, { ...invite })} </div>`) : renderTemplate`<p>Aucun invité prévu.</p>`} </div>`;
}, "C:/Users/ugoli/Documents/GitHub/sae-203-2025-Lippi-Ugo/src/components/Carousel.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  await AllInvite();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Invit\xE9s" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div> <div class="container py-20 space-y-8"> <h1>Les Invités</h1> ${renderComponent($$result2, "Carousel", $$Carousel, {})} </div> </div> ` })}`;
}, "C:/Users/ugoli/Documents/GitHub/sae-203-2025-Lippi-Ugo/src/pages/invites/index.astro", void 0);

const $$file = "C:/Users/ugoli/Documents/GitHub/sae-203-2025-Lippi-Ugo/src/pages/invites/index.astro";
const $$url = "/invites";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
