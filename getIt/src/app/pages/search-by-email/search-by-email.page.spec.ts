import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchByEmailPage } from './search-by-email.page';

describe('SearchByEmailPage', () => {
  let component: SearchByEmailPage;
  let fixture: ComponentFixture<SearchByEmailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchByEmailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchByEmailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
