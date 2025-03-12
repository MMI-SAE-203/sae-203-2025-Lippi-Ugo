import { allFilmsSorted, allActivitiesSorted, AllInvite, oneID, oneIDActivite, oneIDInvite,
    allActiviteByInvite, allActiviteByName, addNewFilm, addNewInvite, addNewActivite, updateFilmById, updateInviteById, updateActiviteById,} from './backend.mjs' ;

/*try { const date = await allFilmsSorted();   
    console.log(date); 
    } catch (e) { 
        console.error(e); 
    }*/

    /*try { const date = await allActivitiesSorted();   
        console.log(date); 
        } catch (e) { 
            console.error(e); 
        }*/
        
        
        /*try {
            const records = await AllInvite();
            console.log(records);
        } catch (e) {
            console.error(e);
        }*/
        
        /*try {
            const Onerecord = await oneID('15b9fsw4phlbh14');
            console.log(Onerecord);
        } catch (e) {
            console.error(e);
        }*/
        
        /*try {
            const Onerecord = await oneIDActivite('9b4oso42cv3q205');
            console.log(Onerecord);
        } catch (e) {
            console.error(e);
        }*/
        
        /*try {
            const Onerecord = await oneIDInvite('04918km48k2ozf7');
            console.log(Onerecord);
        } catch (e) {
            console.error(e);
        }*/
        
        /*try {
            const records = await allActiviteByInvite('f54r0e04104274p');
            console.table(records);
        } catch (e) {
            console.error(e);
            
        }*/
        
        /*try {
            const records = await allActiviteByName('Garcia');
            console.log(records);
        } catch (e) {
            console.error(e);
        
        }*/
        
        
        /*try {
            const newFilm = {
                "annee_de_sortie": "2006",
                "genre": "Animation",
                "realisateur": "John Lasseter",
                "langue": "Français",
                "synopsis": "Flash McQueen, une splendide voiture de course toute neuve promise au succès, découvre que dans la vie, ce n'est pas de franchir la ligne d'arrivée qui compte, mais le parcours que l'on a suivi. Parti pour participer à la prestigieuse Piston Cup, il atterrit suite à une déviation dans la petite ville tranquille de Radiator Springs, sur la Route 66. McQueen va apprendre à connaître Sally (une élégante Porsche 2002), Doc Hudson (une Hudson Hornet 1951 au passé mystérieux), et Mater (une dépanneuse rouillée mais à qui on peut faire confiance). Ils vont l'aider à découvrir qu'il y a des choses plus importantes que les trophées, la gloire et les sponsors...",
                "duree": "1h 36min",
                "bande_annonce": "https://www.youtube.com/watch?v=40AUE3HOlmo",
                "titre": "Cars",
                "date_projection": "2025-09-21 20:00:00",
            };
        
            await addNewFilm(newFilm);
            
        } catch (e) {
            console.error(e);
        }*/
        
        
        /*try {
            const newInvite = {
                "nom": "Lippi",
                "prenom": "Ugo",
                "categorie": "Jurys",
                "biographie": "test",
            };
        
            await addNewInvite(newInvite);
        
        } catch (e) {
            console.error(e);
        }*/
        
        /*try {
            const newActivite = {
                "genre": "Ateliers",
                "lieux": "Hall,Axone, Montbéliard",
                "date_debut_activite": "2025-09-21 15:00:00",
                "titre": "Atelier d'effet spéciaux",
            };
        
            await addNewActivite(newActivite);
        
        } catch (e) {
            console.error(e);
        }*/
        
        /*try {
            const data = {
                "titre": "Cars 2",
                "synopsis": "Dans Cars 2, Flash McQueen, la star des circuits automobiles, et son fidèle compagnon Martin la dépanneuse reprennent la route pour de nouvelles aventures. Les voilà partis pour courir le tout premier Grand Prix Mondial, qui sacrera la voiture la plus rapide du monde ! Mais la route du championnat est pleine d’imprévus, de déviations et de surprises hilarantes, surtout lorsque Martin se retrouve entraîné dans une histoire comme il n’en arrive qu’à lui : une affaire d’espionnage international ! Ecartelé entre son désir d’assister Flash McQueen dans cette course particulièrement difficile et celui de mener à bien une mission d’espionnage top secrète, Martin se lance dans un voyage bourré d’action et une course-poursuite explosive sur les routes du Japon et de l’Europe, suivi par ses amis et regardé par le monde entier. Sur la route, Flash et Martin trouveront de l’action, de l’humour effréné et de tout nouveaux personnages – agents secrets, redoutables méchants et adversaires décidés sur les circuits automobiles…",
                "genre": "Animation",
                "realisateur": "Brad Lewis, John Lasseter",
                "langue": "Anglais",
                "duree": "1h 52min",
                "annee_de_sortie": "2011",
                "bande_annonce": "https://www.youtube.com/watch?v=Z9BYmvDY0cA",
                "date_projection": "2025-09-21 20:00:00",
            };
        
            await updateFilmById('p28l3zb114hle24', data);
        } catch (e) {
            console.error(e);
        }*/
        
        
        /*try {
            const data = {
                "nom": "Makhoul",
                "prenom": "Abdallah",
                "categorie": "Jurys",
                "biographie": "update",
                
            };
        
            await updateInviteById('c72g68ussebudz0', data);
        } catch (e) {
            console.error(e);
        }*/
        
        /*try {
            const data = {
                "titre": "Animation 3D",
                "genre": "Animation",
                "date_fin_activite": "2025-09-21 17:00:00",
            };
        
            await updateActiviteById('x8d577f8yxuexss', data);
        } catch (e) {
            console.error(e);
        }*/