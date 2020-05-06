import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGroupsComponent } from './card-groups.component';

describe('CardGroupsComponent', () => {
  let component: CardGroupsComponent;
  let fixture: ComponentFixture<CardGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
