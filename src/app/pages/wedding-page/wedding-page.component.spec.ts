import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingPageComponent } from './wedding-page.component';

describe('WeddingPageComponent', () => {
  let component: WeddingPageComponent;
  let fixture: ComponentFixture<WeddingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeddingPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeddingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
