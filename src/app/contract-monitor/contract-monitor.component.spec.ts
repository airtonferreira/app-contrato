import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractMonitorComponent } from './contract-monitor.component';

describe('ContractMonitorComponent', () => {
  let component: ContractMonitorComponent;
  let fixture: ComponentFixture<ContractMonitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractMonitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
