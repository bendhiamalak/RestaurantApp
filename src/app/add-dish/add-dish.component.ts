import { Component } from '@angular/core';


interface Ingredient {
  icon: string;
  name: string;
  price: number;
}
@Component({
  selector: 'app-add-dish',
  templateUrl: './add-dish.component.html',
  styleUrls: ['./add-dish.component.css']
})
export class AddDishComponent {
  
  ingredientsStatic: Ingredient[] = [
    {
      icon: "bakery_dining",
      name: "Pomme",
      price: 2.5,
    },
    {
      icon: "egg_alt",
      name: "Pain",
      price: 1.5,
    },
    {
      icon: "takeout_dining",
      name: "Oeuf",
      price: 0.8,
    },
    {
      icon: "bakery_dining",
      name: "Pomme",
      price: 2.5,
    },
    {
      icon: "egg_alt",
      name: "Pain",
      price: 1.5,
    },
    {
      icon: "takeout_dining",
      name: "Oeuf",
      price: 0.8,
    },
    {
      icon: "bakery_dining",
      name: "Pomme",
      price: 2.5,
    },
    {
      icon: "egg_alt",
      name: "Pain",
      price: 1.5,
    },
    {
      icon: "takeout_dining",
      name: "Oeuf",
      price: 0.8,
    },
    {
      icon: "bakery_dining",
      name: "Pomme",
      price: 2.5,
    },
    {
      icon: "egg_alt",
      name: "Pain",
      price: 1.5,
    },
    {
      icon: "takeout_dining",
      name: "Oeuf",
      price: 0.8,
    }, {
      icon: "bakery_dining",
      name: "Pomme",
      price: 2.5,
    },
    {
      icon: "egg_alt",
      name: "Pain",
      price: 1.5,
    },
    {
      icon: "takeout_dining",
      name: "Oeuf",
      price: 0.8,
    },
  ];

  dish: any = {
    name: '',
    priceLit: 0,
    priceMed: 0,
    priceHig: 0,
    description: '',
    nbOfPoints: 0,
    image: '',
    ingredients: []
  };

  
  
  addIngredient(ingredient: Ingredient) {
    // Ajoute l'ingrédient à la liste des ingrédients de la dish
    this.dish.ingredients.push(ingredient);
  }
}
