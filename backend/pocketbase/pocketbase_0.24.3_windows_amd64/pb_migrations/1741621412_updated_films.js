/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_95057082")

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text4286007220",
    "max": 0,
    "min": 0,
    "name": "titre",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "file3828436749",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "affiche",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "convertURLs": false,
    "hidden": false,
    "id": "editor1462424745",
    "maxSize": 0,
    "name": "synopsis",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "editor"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "exceptDomains": null,
    "hidden": false,
    "id": "url4182342110",
    "name": "bande_annonce",
    "onlyDomains": null,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "url"
  }))

  // add field
  collection.fields.addAt(5, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text2220277813",
    "max": 0,
    "min": 0,
    "name": "duree",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "select2471982478",
    "maxSelect": 1,
    "name": "langue",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Anglais",
      "Français"
    ]
  }))

  // add field
  collection.fields.addAt(7, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text3555570144",
    "max": 0,
    "min": 0,
    "name": "production",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(8, new Field({
    "hidden": false,
    "id": "select2203071480",
    "maxSelect": 5,
    "name": "genre",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Comédie",
      "Drame",
      "Action",
      "Sport",
      "Animation"
    ]
  }))

  // add field
  collection.fields.addAt(9, new Field({
    "hidden": false,
    "id": "number2278357108",
    "max": null,
    "min": null,
    "name": "annee_de_sortie",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(10, new Field({
    "hidden": false,
    "id": "date1278724480",
    "max": "",
    "min": "",
    "name": "date_projection",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_95057082")

  // remove field
  collection.fields.removeById("text4286007220")

  // remove field
  collection.fields.removeById("file3828436749")

  // remove field
  collection.fields.removeById("editor1462424745")

  // remove field
  collection.fields.removeById("url4182342110")

  // remove field
  collection.fields.removeById("text2220277813")

  // remove field
  collection.fields.removeById("select2471982478")

  // remove field
  collection.fields.removeById("text3555570144")

  // remove field
  collection.fields.removeById("select2203071480")

  // remove field
  collection.fields.removeById("number2278357108")

  // remove field
  collection.fields.removeById("date1278724480")

  return app.save(collection)
})
