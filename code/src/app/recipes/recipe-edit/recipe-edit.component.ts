import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute,Params, Router} from '@angular/router';

import { RecipeService } from '../recipe.service';

@Component({
  selector: "app-recipe-edit",
  templateUrl: "./recipe-edit.component.html",
  styleUrls: ["./recipe-edit.component.css"],
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  BugForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router
  ) {}
  // get controls() {
  //   // a getter!
  //   return (<FormArray>this.BugForm.get("ingredients")).controls;
  // }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"];
      this.editMode = params["id"] != null;
      this.initForm();
    });
  }
  onSubmit() {
    // const newRecipe = new Recipe(
    // this.BugForm.value["name"],
    // this.BugForm.value["description"],
    // this.BugForm.value["imagePath"],
    // this.BugForm.value["priority"],
    // this.BugForm.value["type"],
    // this.BugForm.value["status"],
    // this.BugForm.value["ingredients"]);
    if (this.editMode) {
      this.recipeService.updateBug(this.id, this.BugForm.value);
    } else {
      this.recipeService.addBug(this.BugForm.value);
    }
    this.onCancel();
  }
  onAddIngredient() {
    (<FormArray>this.BugForm.get("ingredients")).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/),
        ]),
      })
    );
  }
  getControls() {
    return (this.BugForm.get("ingredients") as FormArray).controls;
  }
  onDeleteIng(index: number) {
    (<FormArray>this.BugForm.get("ingredients")).removeAt(index);
  }
  onCancel() {
    this.router.navigate(["../"], { relativeTo: this.route });
  }
  private initForm() {
    let bugName = "";
    let bugImagePath = "";
    let bugDescription = "";
    let bugType = "";
    let bugStatus = "";
    let bugPriority = "";
    let BugIngredients = new FormArray([]);

    if (this.editMode) {
      const bug = this.recipeService.getRecipe(this.id);
      bugName = bug.name;
      bugImagePath = bug.imagePath;
      bugDescription = bug.description;
      bugType = bug.type;
      bugStatus = bug.status;
      bugPriority = bug.priority;

      if (bug["ingredients"]) {
        for (let ingredient of bug.ingredients) {
          BugIngredients.push(
            new FormGroup({
              'name': new FormControl(ingredient.name, Validators.required),
              'amount': new FormControl(ingredient.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/),
              ]),
            })
          );
        }
      }
    }
    this.BugForm = new FormGroup({
      'name': new FormControl(bugName, Validators.required),
      'imagePath': new FormControl(bugImagePath, Validators.required),
      'description': new FormControl(bugDescription, Validators.required),
      'type': new FormControl(bugType, Validators.required),
      'status': new FormControl(bugStatus, Validators.required),
      'priority': new FormControl(bugPriority, Validators.required),
      'ingredients': BugIngredients,
    });
  }
}
