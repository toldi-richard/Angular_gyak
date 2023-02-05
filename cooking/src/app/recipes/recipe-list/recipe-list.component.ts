import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is a simply test.', 'https://learnenglishteens.britishcouncil.org/sites/teens/files/a2_writing_a_recipe.jpg')
  ];

  constructor() { }
  ngOnInit(): void { }
}
