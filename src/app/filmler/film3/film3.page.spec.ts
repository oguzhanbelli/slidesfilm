import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Film3Page } from './film3.page';

describe('Film3Page', () => {
  let component: Film3Page;
  let fixture: ComponentFixture<Film3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Film3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Film3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
