import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuestService } from '../../services/guest.service';
import { Guest, GuestFormatter } from '../../models/guest.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-guest-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './guest-info.component.html',
  styleUrls: ['./guest-info.component.scss'],
})
export class GuestInfoComponent implements OnInit, OnDestroy {
  // Données affichées
  guestName = '';
  tableName = '';
  dressCode = '';
  message = 'Nous espérons vous comptez parmi nous !';
  dates = '09.01.2026 - 10.01.2026';
  backgroundImage = '/images/guest-bg.png';

  // État du composant
  guestFound = false;
  loading = true;

  private destroy$ = new Subject<void>();
  private currentGuest: Guest | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private guestService: GuestService
  ) {}

  ngOnInit(): void {
    // Écoute les changements de route
    this.route.params.pipe(takeUntil(this.destroy$)).subscribe((params) => {
      const guestId = params['guestId'];

      if (guestId) {
        this.loadGuestInfo(guestId);
      } else {
        // Pas d'ID dans l'URL, afficher les données par défaut
        this.loadDefaultInfo();
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  /**
   * Charge les informations d'un invité spécifique
   */
  private loadGuestInfo(guestId: string): void {
    this.loading = true;

    const guest = this.guestService.getGuestById(guestId);

    if (guest) {
      this.currentGuest = guest;
      this.guestFound = true;

      // Formater le nom selon le type
      this.guestName = GuestFormatter.formatGuestName(guest);
      this.tableName = guest.table;
      this.dressCode = guest.dressCode;

      console.log(`✅ Invité trouvé: ${this.guestName}`);
    } else {
      // Invité non trouvé
      this.guestFound = false;
      this.guestName = 'Invité non trouvé';
      this.tableName = '-';
      this.dressCode = '-';

      console.warn(`⚠️ Aucun invité trouvé avec l'ID: ${guestId}`);
    }

    this.loading = false;
  }

  /**
   * Charge les informations par défaut (sans route spécifique)
   */
  private loadDefaultInfo(): void {
    this.guestName = 'Mr et Madame : Nono';
    this.tableName = 'Amour';
    this.dressCode = 'Blanc or';
    this.guestFound = true;
    this.loading = false;
  }

  /**
   * Récupère le type d'invité pour des styles conditionnels
   */
  get guestType(): 'couple' | 'single' | 'unknown' {
    if (!this.currentGuest) return 'unknown';
    return this.currentGuest.type;
  }

  /**
   * Vérifie si l'invité est un couple
   */
  get isCouple(): boolean {
    return this.guestType === 'couple';
  }

  /**
   * Vérifie si l'invité est seul
   */
  get isSingle(): boolean {
    return this.guestType === 'single';
  }
}
