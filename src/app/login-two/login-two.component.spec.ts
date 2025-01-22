import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginTWOComponent } from './login-two.component';

describe('LoginTWOComponent', () => {
  let component: LoginTWOComponent;
  let fixture: ComponentFixture<LoginTWOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginTWOComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginTWOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
