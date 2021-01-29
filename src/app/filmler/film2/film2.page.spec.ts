import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Film2Page } from './film2.page';

describe('Film2Page', () => {
  let component: Film2Page;
  let fixture: ComponentFixture<Film2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Film2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Film2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
