import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FrPage } from './fr.page';

describe('FrPage', () => {
  let component: FrPage;
  let fixture: ComponentFixture<FrPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
