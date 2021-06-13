import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipe.service";
import { exhaustMap, map, take, tap } from "rxjs/operators";
import { authservice } from "../auth/auth.service";


@Injectable({ providedIn: "root" })

export class dbStorageService {
  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private authservice: authservice
  ) {}

  storeBugs() {
    const recipes = this.recipeService.getRecipes();
    this.http
      .put(
        "https://bugtracker-a602f-default-rtdb.firebaseio.com/bugs.json",
        recipes
      )
      .subscribe((response) => {
        console.log(response);
      });
  }
  fetchBugs() {
  return this.http
    .get<Recipe[]>(
      "https://bugtracker-a602f-default-rtdb.firebaseio.com/bugs.json"
    )
    .pipe(
      map((recipes) => {
        return recipes.map((recipe) => {
          return {
            ...recipe,
            ingredients: recipe.ingredients ? recipe.ingredients : [],
          };
        });
      }),
      tap((recipes) => {
        this.recipeService.setBug(recipes);
      })
    );
  
  }
   
}