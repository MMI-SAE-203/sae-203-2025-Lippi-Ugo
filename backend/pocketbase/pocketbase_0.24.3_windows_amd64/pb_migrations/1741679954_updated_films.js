/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_95057082")

  // update field
  collection.fields.addAt(9, new Field({
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
      "Animation",
      "PolicierRomance"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_95057082")

  // update field
  collection.fields.addAt(9, new Field({
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
      "Animation",
      "Romance"
    ]
  }))

  return app.save(collection)
})
