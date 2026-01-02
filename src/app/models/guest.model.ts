export interface Guest {
  id: string; // Identifiant unique pour la route (ex: "nono", "marie", "jean&sophie")
  type: 'couple' | 'single';
  gender?: 'male' | 'female'; // Uniquement pour les singles
  firstName: string;
  lastName?: string; // Optionnel
  partnerFirstName?: string; // Pour les couples
  partnerLastName?: string; // Pour les couples
  table: string;
  dressCode: string;
}

export class GuestFormatter {
  /**
   * Formate le nom complet de l'invité selon son type
   */
  static formatGuestName(guest: Guest): string {
    if (guest.type === 'couple') {
      const maleFullName = guest.lastName
        ? `${guest.firstName} ${guest.lastName}`
        : guest.firstName;

      const femaleFullName = guest.partnerLastName
        ? `${guest.partnerFirstName} ${guest.partnerLastName}`
        : guest.partnerFirstName;

      return `Mr ${maleFullName} & Madame ${femaleFullName}`;
    } else {
      // Single
      const fullName = guest.lastName
        ? `${guest.firstName} ${guest.lastName}`
        : guest.firstName;

      const title = guest.gender === 'male' ? 'Monsieur' : 'Madame';
      return `${title} ${fullName}`;
    }
  }
}
