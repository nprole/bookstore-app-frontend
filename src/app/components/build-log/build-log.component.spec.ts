import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BuildLogComponent } from './build-log.component';

describe('BuildLogComponent', () => {
  let component: BuildLogComponent;
  let fixture: ComponentFixture<BuildLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuildLogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BuildLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
