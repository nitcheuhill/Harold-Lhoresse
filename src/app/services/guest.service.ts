import { Injectable } from '@angular/core';
import { Guest } from '../models/guest.model';

@Injectable({
  providedIn: 'root',
})
export class GuestService {
  // Base de données des invités
  private guests: Guest[] = [
    // Exemples de couples avec NOM DE FAMILLE COMMUN
    {
      id: 'dupont',
      type: 'couple',
      firstName: 'Jean',
      lastName: 'Dupont', // Nom de famille commun
      partnerFirstName: 'Sophie',
      // Pas de partnerLastName = même nom
      table: 'Amour',
      dressCode: 'Blanc or',
    },
    // Affiche: "Monsieur & Madame Dupont"

    {
      id: 'bernard',
      type: 'couple',
      firstName: 'Paul',
      lastName: 'Bernard',
      partnerFirstName: 'Marie',
      table: 'Bonheur',
      dressCode: 'Chic',
    },
    // Affiche: "Monsieur & Madame Bernard"

    // Exemples de couples avec NOMS DE FAMILLE DIFFÉRENTS
    {
      id: 'Kuekam',
      type: 'couple',
      firstName: 'Jean',
      lastName: 'Kuekam',
      partnerFirstName: 'Sophie',
      partnerLastName: 'Martin', // Nom différent
      table: 'Charme',
      dressCode: 'Blanc or',
    },
    {
      id: 'Tchako',
      type: 'couple',
      firstName: 'Jean',
      lastName: 'Tchako',
      partnerFirstName: 'Sophie',
      partnerLastName: 'Martin', // Nom différent
      table: 'Charme',
      dressCode: 'Blanc or',
    },
    {
      id: 'Happi',
      type: 'couple',
      firstName: 'Jean',
      lastName: 'Happi',
      partnerFirstName: 'Sophie',
      partnerLastName: 'Martin', // Nom différent
      table: 'Charme',
      dressCode: 'Blanc or',
    },
    {
      id: 'Keuni',
      type: 'couple',
      firstName: 'Jean',
      lastName: 'Keuni',
      partnerFirstName: 'Sophie',
      partnerLastName: 'Martin', // Nom différent
      table: 'Charme',
      dressCode: 'Blanc or',
    },
    {
      id: 'MBAH SOO',
      type: 'couple',
      firstName: 'Jean',
      lastName: 'MBAH SOO',
      partnerFirstName: 'Sophie',
      partnerLastName: 'Martin', // Nom différent
      table: 'Charme',
      dressCode: 'Blanc or',
    },
    {
      id: 'NJIKITCHEU',
      type: 'couple',
      firstName: 'Jean',
      lastName: 'NJIKITCHEU',
      partnerFirstName: 'Sophie',
      partnerLastName: 'Martin', // Nom différent
      table: 'Charme',
      dressCode: 'Blanc or',
    },
    // Affiche: "Mr Jean Dupont & Madame Sophie Martin"

    // Exemple de couple SANS NOM DE FAMILLE
    {
      id: 'nono',
      type: 'couple',
      firstName: 'Nono',
      partnerFirstName: 'Marie',
      table: 'Amour',
      dressCode: 'Blanc or',
    },
    // Affiche: "Mr Nono & Madame Marie"

    // Exemples de singles hommes
    {
      id: 'pierre',
      type: 'single',
      gender: 'male',
      firstName: 'Pierre',
      lastName: 'Durand',
      table: 'Amitié',
      dressCode: 'Formel',
    },
    // Affiche: "Monsieur Pierre Durand"

    {
      id: 'thomas',
      type: 'single',
      gender: 'male',
      firstName: 'Thomas',
      lastName: 'Petit',
      table: 'Joie',
      dressCode: 'Blanc or',
    },
    // Affiche: "Monsieur Thomas Petit"

    // Exemples de singles femmes
    {
      id: 'claire',
      type: 'single',
      gender: 'female',
      firstName: 'Claire',
      lastName: 'Moreau',
      table: 'Tendresse',
      dressCode: 'Élégant',
    },
    // Affiche: "Madame Claire Moreau"

    {
      id: 'isabelle',
      type: 'single',
      gender: 'female',
      firstName: 'Isabelle',
      lastName: 'Laurent',
      table: 'Douceur',
      dressCode: 'Blanc or',
    },
    // Affiche: "Madame Isabelle Laurent"
  ];

  /**
   * Récupère un invité par son ID (depuis l'URL)
   */
  getGuestById(id: string): Guest | null {
    const normalizedId = id.toLowerCase().trim();
    return (
      this.guests.find((guest) => guest.id.toLowerCase() === normalizedId) ||
      null
    );
  }

  /**
   * Récupère tous les invités (pour admin/debug)
   */
  getAllGuests(): Guest[] {
    return [...this.guests];
  }

  /**
   * Ajoute un nouvel invité (optionnel, pour extension future)
   */
  addGuest(guest: Guest): void {
    this.guests.push(guest);
  }

  /**
   * Vérifie si un ID invité existe
   */
  guestExists(id: string): boolean {
    return this.getGuestById(id) !== null;
  }
}
