import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes:Recipe[] = [
    new Recipe('A Test Recipe','This is simply a test',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxB5a-TRNTZJ_snSbtFg3v2FacQPCgP3g88A&usqp=CAU'),
    new Recipe('Another Test Recipe','This is simply a test',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxB5a-TRNTZJ_snSbtFg3v2FacQPCgP3g88A&usqp=CAU')
  ];

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
