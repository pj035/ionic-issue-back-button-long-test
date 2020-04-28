import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PageWithLongNamePage } from './page-with-long-name.page';

describe('PageWithLongNamePage', () => {
  let component: PageWithLongNamePage;
  let fixture: ComponentFixture<PageWithLongNamePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageWithLongNamePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PageWithLongNamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
