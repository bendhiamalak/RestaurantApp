import { Component } from '@angular/core';

// Définition de l'interface Ingredient en dehors de la classe du composant
interface Ingredient {
  icon: string;
  name: string;
  price: number;
}

@Component({
  selector: 'app-add-plat',
  templateUrl: './add-plat.component.html',
  styleUrls: ['./add-plat.component.css']
})
export class AddPlatComponent {
  
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

  keywords: string[] = []; // Ajout des mots-clés

  formControl: any; // Ajout du formulaire de contrôle

  constructor() { }

  removeKeyword(keyword: string) {
    // Implémentez ici la logique pour supprimer le mot-clé
  }

  add(event: any) {
    // Implémentez ici la logique pour ajouter un nouveau mot-clé
  }

  


  addDish() {
    // Implémentez ici la logique pour ajouter le plat
    // Par exemple, envoyez-le au serveur

    // Pour l'instant, nous affichons simplement les détails du plat dans la console
    console.log('Plat ajouté :', this.dish);

    // Réinitialiser le formulaire après l'ajout du plat
    this.resetForm();
  }

  addIngredient(ingredient: Ingredient) {
    // Ajoute l'ingrédient à la liste des ingrédients de la dish
    this.dish.ingredients.push(ingredient);
  }

  removeIngredient(ingredient: Ingredient){}
  

  resetForm() {
    // Réinitialiser les valeurs du formulaire à leur état initial
    this.dish = {
      name: '',
      priceLit: 0,
      priceMed: 0,
      priceHig: 0,
      description: '',
      nbOfPoints: 0,
      image: '',
      ingredients: []
    };
  }
  }

  

  

