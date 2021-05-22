import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearcherPage } from './searcher.page';

describe('SearcherPage', () => {
  let component: SearcherPage;
  let fixture: ComponentFixture<SearcherPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearcherPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearcherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
