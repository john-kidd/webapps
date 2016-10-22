/* tslint:disable:no-unused-variable */
import { AppComponent } from './app.component';

import { TestBed }      from '@angular/core/testing';

import { By }           from '@angular/platform-browser';

import { RouterTestingModule } from '@angular/router/testing';

////////  SPECS  /////////////

describe('AppComponent with TCB', function () {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [ RouterTestingModule ]
    });
  });

  it('application starts', () => {
    let fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance instanceof AppComponent).toBe(true, 'should create AppComponent');
  });
});
