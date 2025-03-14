import { c as createComponent, a as createAstro, m as maybeRenderHead, r as renderComponent, d as addAttribute, u as unescapeHTML, b as renderTemplate } from '../chunks/astro/server_DPHUjbDm.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CB8ykua8.mjs';
import { f as formatDate } from '../chunks/helpers_CYuQHAyX.mjs';
import { $ as $$ImgPb, c as allFilmsSorted } from '../chunks/ImgPb_CAcco1oo.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$CardFilm = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CardFilm;
  const { ...film } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="group col-span-4 grid grid-cols-1 grid-rows-[auto_1fr] lg:grid-cols-[4fr_11fr] lg:grid-rows-1"> ${renderComponent($$result, "ImgPb", $$ImgPb, { "record": film, "field": "affiche", "alt": film.titre, "classPicture": "col-start-1 row-start-1 w-full h-auto object-cover", "classImg": "object-cover w-full h-full" })} <div class="z-[2] col-span-1 col-start-1 lg:col-start-2 row-start-2 lg:row-start-1 space-y-4 bg-white p-6"> <h3 class="z-[1] col-start-1 row-start-1 my-6 mr-4 self-end font-mono text-3xl text-white"> <a${addAttribute(`/films/${film.id}`, "href")}>${film.titre}</a> </h3> <p class="uppercase">${formatDate(film.date_projection)}</p> <p>${unescapeHTML(film.description)}</p> <a${addAttribute(`/films/${film.id}`, "href")} class="inline-block border-b-2 border-black uppercase">Plus d'info</a> </div> </article>`;
}, "C:/Users/ugoli/Documents/GitHub/sae-203-2025-Lippi-Ugo/src/components/CardFilm.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const films = await allFilmsSorted();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Films" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container py-20 space-y-8"> <h1>Programme des films</h1> <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-8"> ${films.length > 0 ? films.map((film) => renderTemplate`${renderComponent($$result2, "CardFilm", $$CardFilm, { ...film })}`) : renderTemplate`<p>Aucun film n'a été trouvé.</p>`} </div> </div> ` })}`;
}, "C:/Users/ugoli/Documents/GitHub/sae-203-2025-Lippi-Ugo/src/pages/films/index.astro", void 0);

const $$file = "C:/Users/ugoli/Documents/GitHub/sae-203-2025-Lippi-Ugo/src/pages/films/index.astro";
const $$url = "/films";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
