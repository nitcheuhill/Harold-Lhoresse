import { Injectable } from '@angular/core';
import { Guest } from '../models/guest.model';

@Injectable({
  providedIn: 'root',
})
export class GuestService {
  // Base de données des invités
  private guests: Guest[] = [
    // Exemples de couples
    {
      id: 'nono',
      type: 'couple',
      firstName: 'Nono',
      partnerFirstName: 'Marie',
      table: 'Amour',
      dressCode: 'Blanc or',
    },
    {
      id: 'jean&sophie',
      type: 'couple',
      firstName: 'Jean',
      lastName: 'Dupont',
      partnerFirstName: 'Sophie',
      partnerLastName: 'Martin',
      table: 'Romance',
      dressCode: 'Élégant',
    },
    {
      id: 'paul&marie',
      type: 'couple',
      firstName: 'Paul',
      lastName: 'Bernard',
      partnerFirstName: 'Marie',
      partnerLastName: 'Bernard',
      table: 'Bonheur',
      dressCode: 'Chic',
    },

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
    {
      id: 'thomas',
      type: 'single',
      gender: 'male',
      firstName: 'Thomas',
      lastName: 'Petit',
      table: 'Joie',
      dressCode: 'Blanc or',
    },

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
    {
      id: 'isabelle',
      type: 'single',
      gender: 'female',
      firstName: 'Isabelle',
      lastName: 'Laurent',
      table: 'Douceur',
      dressCode: 'Blanc or',
    },
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
