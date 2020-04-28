import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PageWithTitlePage } from './page-with-title.page';

describe('PageWithTitlePage', () => {
  let component: PageWithTitlePage;
  let fixture: ComponentFixture<PageWithTitlePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageWithTitlePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PageWithTitlePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
