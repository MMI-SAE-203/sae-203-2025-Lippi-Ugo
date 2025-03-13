/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2452428166")

  // update field
  collection.fields.addAt(5, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_95057082",
    "hidden": false,
    "id": "relation3286544745",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "film_associe",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2452428166")

  // update field
  collection.fields.addAt(5, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_95057082",
    "hidden": false,
    "id": "relation3286544745",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "film_associe",
    "presentable": true,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
})
