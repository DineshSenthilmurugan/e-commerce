import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerItemHistoryComponent } from './seller-item-history.component';

describe('SellerItemHistoryComponent', () => {
  let component: SellerItemHistoryComponent;
  let fixture: ComponentFixture<SellerItemHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerItemHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerItemHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
