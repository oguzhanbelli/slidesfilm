import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalMovieComponent } from './modal-movie.component';

describe('ModalMovieComponent', () => {
  let component: ModalMovieComponent;
  let fixture: ComponentFixture<ModalMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalMovieComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
