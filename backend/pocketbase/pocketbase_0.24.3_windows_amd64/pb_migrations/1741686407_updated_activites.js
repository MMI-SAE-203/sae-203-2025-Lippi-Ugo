/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_306231341")

  // update field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "select2203071480",
    "maxSelect": 1,
    "name": "genre",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Avant-Première",
      "Masterclasse",
      "Exposition",
      "Rencontres",
      "Ateliers",
      "Animation"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_306231341")

  // update field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "select2203071480",
    "maxSelect": 1,
    "name": "genre",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Avant-Première",
      "Masterclasse",
      "Exposition",
      "Rencontres",
      "Ateliers Animation"
    ]
  }))

  return app.save(collection)
})
