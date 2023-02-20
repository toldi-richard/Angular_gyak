import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is a simply test.', 'https://s7d1.scene7.com/is/image/mcdonalds/2_Pub_Commitment_574x384:2-column-desktop?resmode=sharp2'),
    new Recipe('A test recipe', 'This is a simply test.', 'https://s7d1.scene7.com/is/image/mcdonalds/2_Pub_Commitment_574x384:2-column-desktop?resmode=sharp2')
  ];

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor() { }
  ngOnInit(): void { }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe)
  }
}
