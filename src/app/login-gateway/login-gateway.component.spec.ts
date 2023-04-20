import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginGatewayComponent } from './login-gateway.component';

describe('LoginGatewayComponent', () => {
  let component: LoginGatewayComponent;
  let fixture: ComponentFixture<LoginGatewayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginGatewayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginGatewayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
