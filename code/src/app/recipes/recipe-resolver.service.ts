import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { dbStorageService } from "../shared/db-storage";
import { Recipe } from "./recipe.model";
import { RecipeService } from "./recipe.service";

@Injectable({providedIn:'root'})
export class RecipesResolverService implements Resolve<Recipe[]>{
    constructor(private dbStorageService:dbStorageService ,private recipeService:RecipeService){}
    resolve(route:ActivatedRouteSnapshot, state:RouterStateSnapshot){
        const recipes = this.recipeService.getRecipes();
        if(recipes.length===0){
            return this.dbStorageService.fetchBugs();
        }else{
            return recipes;
        }
        
    }
}
