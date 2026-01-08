// ============================================
// FICHIER: src/app/models/guest.model.ts
// ============================================

/**
 * Interface définissant la structure d'un invité
 */
export interface Guest {
  id: string;
  type: 'couple' | 'single';
  gender?: 'male' | 'female';
  firstName: string;
  lastName?: string;
  partnerFirstName?: string;
  partnerLastName?: string;
  table: string;
  dressCode: string;
}

/**
 * Classe utilitaire pour formater les noms des invités
 */
export class GuestFormatter {
  /**
   * Formate le nom complet de l'invité selon son type
   * @param guest L'objet invité à formater
   * @returns Le nom formaté
   *
   * Exemples:
   * - Couple avec lastName: "Monsieur & Madame Dupont"
   * - Couple sans lastName: "Mr Nono & Madame Marie"
   * - Single homme: "Monsieur Pierre Durand"
   * - Single femme: "Madame Claire Moreau"
   */
  static formatGuestName(guest: Guest): string {
    if (guest.type === 'couple') {
      // Si le couple a un nom de famille commun
      if (guest.lastName) {
        return `Monsieur & Madame ${guest.lastName}`;
      }

      // Si le couple a des noms de famille différents
      if (
        guest.lastName &&
        guest.partnerLastName &&
        guest.lastName !== guest.partnerLastName
      ) {
        return `Mr ${guest.firstName} ${guest.lastName} & Madame ${guest.partnerFirstName} ${guest.partnerLastName}`;
      }

      // Si seul le partenaire a un nom de famille
      if (!guest.lastName && guest.partnerLastName) {
        return `Mr ${guest.firstName} & Madame ${guest.partnerFirstName} ${guest.partnerLastName}`;
      }

      // Couple sans nom de famille (juste prénoms)
      return `Mr ${guest.firstName} & Madame ${guest.partnerFirstName}`;
    } else {
      // Invité seul
      const fullName = guest.lastName
        ? `${guest.firstName} ${guest.lastName}`
        : guest.firstName;

      const title = guest.gender === 'male' ? 'Monsieur' : 'Madame';
      return `${title} ${fullName}`;
    }
  }

  /**
   * Formate uniquement le prénom et nom (sans titre)
   */
  static formatFullNameOnly(guest: Guest): string {
    return guest.lastName
      ? `${guest.firstName} ${guest.lastName}`
      : guest.firstName;
  }

  /**
   * Obtient le titre approprié (Mr/Madame/Monsieur)
   */
  static getTitle(guest: Guest): string {
    if (guest.type === 'couple') {
      return 'Monsieur & Madame';
    }
    return guest.gender === 'male' ? 'Monsieur' : 'Madame';
  }
}

// ============================================
// EXEMPLES D'UTILISATION
// ============================================

/*
// Exemple 1: Couple avec nom de famille commun
const couple1: Guest = {
  id: 'dupont',
  type: 'couple',
  firstName: 'Jean',
  lastName: 'Dupont',
  partnerFirstName: 'Sophie',
  table: 'Amour',
  dressCode: 'Blanc or'
};
// Résultat: "Monsieur & Madame Dupont"

// Exemple 2: Couple avec noms de famille différents
const couple2: Guest = {
  id: 'jean&sophie',
  type: 'couple',
  firstName: 'Jean',
  lastName: 'Dupont',
  partnerFirstName: 'Sophie',
  partnerLastName: 'Martin',
  table: 'Romance',
  dressCode: 'Élégant'
};
// Résultat: "Mr Jean Dupont & Madame Sophie Martin"

// Exemple 3: Couple sans nom de famille
const couple3: Guest = {
  id: 'nono',
  type: 'couple',
  firstName: 'Nono',
  partnerFirstName: 'Marie',
  table: 'Amour',
  dressCode: 'Blanc or'
};
// Résultat: "Mr Nono & Madame Marie"

// Exemple 4: Homme seul
const single1: Guest = {
  id: 'pierre',
  type: 'single',
  gender: 'male',
  firstName: 'Pierre',
  lastName: 'Durand',
  table: 'Amitié',
  dressCode: 'Formel'
};
// Résultat: "Monsieur Pierre Durand"

// Exemple 5: Femme seule
const single2: Guest = {
  id: 'claire',
  type: 'single',
  gender: 'female',
  firstName: 'Claire',
  lastName: 'Moreau',
  table: 'Tendresse',
  dressCode: 'Élégant'
};
// Résultat: "Madame Claire Moreau"
*/
