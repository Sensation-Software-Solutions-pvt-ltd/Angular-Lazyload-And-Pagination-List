import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyLaodDataComponent } from './lazy-laod-data.component';

describe('LazyLaodDataComponent', () => {
  let component: LazyLaodDataComponent;
  let fixture: ComponentFixture<LazyLaodDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyLaodDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyLaodDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
