import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DPHUjbDm.mjs';
import 'kleur/colors';
import { $ as $$LayoutWithHero } from '../chunks/LayoutWithHero_BXtw0Lc3.mjs';
export { renderers } from '../renderers.mjs';

const Contacts = new Proxy({"src":"/_astro/contact.yORl3gFt.webp","width":786,"height":1353,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/ugoli/Documents/GitHub/sae-203-2025-Lippi-Ugo/src/assets/img/contact.webp";
							}
							
							return target[name];
						}
					});

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "LayoutWithHero", $$LayoutWithHero, { "title": "Contact", "src": Contacts, "alt": "Contactez-nous", "duotoneClass": "duotone-rouge" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="container py-20 space-y-8"> <p class="font-bold">Nous serions ravis de vous entendre! Pour toute question, suggestion ou information complémentaire, n’hésitez pas à nous contacter.</p> <article> <p class="mb-5">Téléphone : <a href="tel:0612345678">+33 06 12 34 56 78</a><br></p> <p class="mb-5">Email : <a href="mailto:contact@vissportfestival.com">contact@vissportfestival.com</a></p> <p class="mb-1">Réseaux sociaux : Suivez- nous sur nos réseaux sociaux pour ne rien manquer des dernières actualités et des coulisses du festival.</p> <ul class="mb-5 list-disc pl-10"> <li>Facebook : @VisSportFestival</li> <li>Twitter : @VisSportFestival</li> <li>Instagram : @VisSportFestival</li> </ul> <p>Horaire de contact :</p> <ul class="mb-5 list-disc pl-10"> <li>
Lundi à Vendredi : 9h00 - 18h00
</li> <li>
Samedi : 10h00 - 16h00
</li> </ul> <p class="mb-5">Nous répondrons à vos demande dans les plus brefs délais.</p> <p>Merci de votre intérêt pour le Festival Vis'Sport à Montbéliard</p> </article> <div class="md:col-span-2"> <div class="bg-white rounded-lg shadow-md p-8"> <h2 class="text-3xl font-bold mb-8">Envoyez-nous un message</h2> <form id="contactForm" class="space-y-6"> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <div> <label for="name" class="block text-lg font-medium text-gray-700 mb-2">Nom</label> <input type="text" id="name" name="name" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#B91C1C] focus:border-[#B91C1C]" required> </div> <div> <label for="firstname" class="block text-lg font-medium text-gray-700 mb-2">Prénom</label> <input type="text" id="firstname" name="firstname" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#B91C1C] focus:border-[#B91C1C]" required> </div> </div> <div> <label for="email" class="block text-lg font-medium text-gray-700 mb-2">Email</label> <input type="email" id="email" name="email" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#B91C1C] focus:border-[#B91C1C]" required> </div> <div> <label for="message" class="block text-lg font-medium text-gray-700 mb-2">Message</label> <textarea id="message" name="message" rows="6" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#B91C1C] focus:border-[#B91C1C]" required></textarea> </div> <div class="text-center"> <button type="submit" class="inline-block px-8 py-3 bg-blue-800 text-white rounded-xl hover:bg-blue-900 transition-colors">
Envoyer le message
</button> </div> </form> </div> </div></section> ` })}`;
}, "C:/Users/ugoli/Documents/GitHub/sae-203-2025-Lippi-Ugo/src/pages/contact.astro", void 0);

const $$file = "C:/Users/ugoli/Documents/GitHub/sae-203-2025-Lippi-Ugo/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Contact,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
