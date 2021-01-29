import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Film1Page } from './film1.page';

describe('Film1Page', () => {
  let component: Film1Page;
  let fixture: ComponentFixture<Film1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Film1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Film1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
