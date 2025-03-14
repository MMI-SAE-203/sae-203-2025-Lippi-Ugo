import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from './astro/server_DPHUjbDm.mjs';
import 'kleur/colors';
import { $ as $$Picture } from './_astro_assets_fjUFF-vJ.mjs';
import PocketBase from 'pocketbase';

const pb = new PocketBase("https://sae-203.ugo-lippi.fr:443") ;

async function allFilmsSorted() {
    const allFilmsSorted = await pb.collection('films').getFullList({ sort : 'date_projection', }) ;
    return  allFilmsSorted ;
}

async function allActivitiesSorted() {
    const allFilmsSorted = await pb.collection('activites').getFullList({ sort : 'date_debut_activite', }) ;
    return  allFilmsSorted ;
}

async function AllInvite() {
    const records = await pb.collection('invites').getFullList({ sort: 'nom' });
    return records;
}

async function oneID(id) {
    const oneRecord = await pb.collection('films').getOne(id, {expand: 'invite_film'});
    return oneRecord;
}

async function oneIDActivite(id) {
    const oneRecord = await pb.collection('activites').getOne(id , {expand: 'invite_activite'});
    return oneRecord;
}

async function oneIDInvite(id) {
    const oneRecord = await pb.collection('invites').getOne(id, {expand: 'film_associe'});
    return oneRecord;
}

const $$Astro = createAstro();
const $$ImgPb = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ImgPb;
  const { record, field = "imgUrl", alt, classPicture, classImg, thumb = "1024x1024" } = Astro2.props;
  const imageUrl = record?.[field] ? pb.files.getURL(record, record[field], { thumb }) : null;
  return renderTemplate`${imageUrl ? renderTemplate`${renderComponent($$result, "Picture", $$Picture, { "pictureAttributes": { class: classPicture }, "class": classImg, "inferSize": true, "formats": ["avif", "webp"], "alt": alt || "Image", "src": imageUrl })}` : renderTemplate`${maybeRenderHead()}<div${addAttribute(classPicture + " w-full h-60 lg:h-96 flex items-center justify-center bg-gray-200", "class")}><span class="text-gray-500">Image non disponible</span></div>`}`;
}, "C:/Users/ugoli/Documents/GitHub/sae-203-2025-Lippi-Ugo/src/components/ImgPb.astro", void 0);

export { $$ImgPb as $, AllInvite as A, allActivitiesSorted as a, oneID as b, allFilmsSorted as c, oneIDInvite as d, oneIDActivite as o };
