import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';
import { TestService } from '../test.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  standalone: true, // permet de rendre le composant autonome (sans avoir declarer dans le module principal)
  imports: [CommonModule, ReactiveFormsModule], // permet d'importer les modules nécessaires
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {  
  @Input() name : string = '';
  constructor() { }

  //Quand un @Input() change
  // Sert  à Réagir aux changements des entrées
  ngOnChanges(changes: SimpleChanges): void {
    console.log("Changes : ", changes);
  }

  // Sert à initialiser les données
  // S'exécute après le constructeur
  // S'exécute après ngOnChanges
  // Juste après l’affichage du composant
  ngOnInit() {
    console.log("Name : ")
  }

  // Sert à détecter les changements
  // S'exécute après ngOnInit
  // À chaque changement (même petit)
  // Faire une vérification manuelle
  ngDoCheck() {
    console.log("Do Check")
  }

  // Sert à initialiser le contenu : Quand le contenu <ng-content> est chargé
  // S'exécute après ngDoCheck
  // Juste après l’affichage du composant
  ngAfterContentInit() {
    console.log("After Content Init")
  }
  // 	Une seule fois, juste après que la vue (template) du composant est initialisée.
  // Sert à initialiser les vues
  // Juste après l’affichage du composant
  // Sert à accéder au DOM
  ngAfterViewInit() {
    console.log("After View Init")
  }

  // chaque fois qu’Angular détecte un changement dans la vue du composant (ou des composants enfants).
  // Sert à vérifier les vues
  // S'exécute après ngAfterViewInit
  // Après chaque vérification de la vue
  ngAfterViewChecked() {
    console.log("After View Checked")
  }

  // 	Avant que le composant soit détruit
  // Nettoyer : désabonnements, timers, etc.
  ngOnDestroy() {
    console.log("On Destroy")
  }


    

}
