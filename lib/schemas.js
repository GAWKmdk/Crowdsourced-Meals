//easy searchby name, allergies, ingredients, time

Recipes.attachSchema(new SimpleSchema({
    ownerId: {
        type: String
    },
    ownerName: {
        type: String,
        optional: true
    },
    voters:{
        type:Array,
        optional:true
    },
    'voters.$':{
        type:String
    },
    name: {
        type: String,
        label: "Recipe Name",
        max: 100
    },
    allergies: {
        type: String,
        label: "Allergy Warning - may contain ",
    },
    ingredients: {
        type: [Object],
        minCount: 1
    },

    "ingredients.$.name":{
        type: String,
        autoform:{
            placeholder: 'Ingredient name e.g ( Olive oil )'
        }
    },
    "ingredients.$.amount": {
        type: String,
        autoform:{
            placeholder: 'Ingredient amount e.g ( 1 cup, 2tbs )'
        }
    },
    description: {
        type: String,
        label: "How to prepare ",
    },
    time: {
        type: Number,
        label: "Time (Minutes)",
        min:0
    },
    calories: {
        type: String,
        label: "Total calorie amount e.g ( 764 kJ )",
        min:0
    },
    likes:{
        type:Number,
        optional:true
    },
    image: {
        type: String,
        autoform: {
            afFieldInput: {
                type: "cfs-file",
                collection: 'recipesImages',
                label: 'Recipe Picture'
            }
        }
    }
}));
