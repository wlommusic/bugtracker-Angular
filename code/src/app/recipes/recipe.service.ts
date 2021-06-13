import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model";
import{ShoppingListService} from '../shopping-list/shopping-list.service'
import { Subject } from "rxjs";


@Injectable()
export class RecipeService {
  recipeChanged = new Subject<Recipe[]>();

  //dummy data
  // private recipes: Recipe[] = [
  //   new Recipe(
  //     "A test bug",
  //     "a sample bug",
  //     "https://img.icons8.com/windows/144/000000/laptop-bug.png",
  //     "bug",
  //     "open",
  //     "high",
  //     [new Ingredient("meat", 1), new Ingredient("lmao", 1)]
  //   ),
  //   new Recipe(
  //     "A test bug",
  //     "a sample bug",
  //     "https://img.icons8.com/wired/144/000000/bug.png",
  //     "bug",
  //     "open",
  //     "high",
  //     [new Ingredient("meat", 1), new Ingredient("lmao", 1)]
  //   ),
  //   new Recipe(
  //     "An actual bug",
  //     "fix this styling",
  //     "https://img.icons8.com/ios/144/000000/bug.png",
  //     "bug",
  //     "closed",
  //     "high",
  //     [new Ingredient("meat", 1), new Ingredient("lmao", 1)]
  //   ),
  //   new Recipe(
  //     "A test exploit",
  //     "a sample exploit",
  //     "https://img.icons8.com/wired/144/000000/bug.png",
  //     "exploit",
  //     "open",
  //     "low",
  //     [new Ingredient("meat", 1), new Ingredient("lmao", 1)]
  //   ),
  // ];
   private recipes: Recipe[] = []

  
  constructor(private slService: ShoppingListService) {}
  setBug(recipes:Recipe[]){
    this.recipes=recipes;
    this.recipeChanged.next(recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(index: number) {
    return this.recipes[index];
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
  addBug(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }
  updateBug(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }
  deleteBug(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }
}

