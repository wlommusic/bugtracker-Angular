import { Ingredient } from "../shared/ingredient.model";

export class Recipe {
 public name: string;
    public description: string;
    public imagePath:string;
    public type: string;
    public status: string;
    public priority: string;
    public ingredients: Ingredient[];

    constructor(name:string,desc:string,imagePath:string ,type:string,status:string,priority:string, ingredients: Ingredient[]){
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.type = type;
        this.status = status;
        this.priority = priority;
        this.ingredients = ingredients;
  }
}
