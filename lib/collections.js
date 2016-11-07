Recipes = new Mongo.Collection('recipes');
Reviews = new Mongo.Collection('reviews');
RecipesImages = new FS.Collection("recipesImages", {
    stores: [new FS.Store.GridFS("recipesImages")]
});



///easy search ** add calories
RecipesIndex = new EasySearch.Index({
  collection: Recipes,
  fields: ['name', 'time','ingredients.$.name','description','calories'],
  engine: new EasySearch.Minimongo({
  	sort: function () {
      return { voters: -1, likes:-1 };
    }
  })
});