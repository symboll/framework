import { Component } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  public form = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    experience: this.fb.array([])
  });

  get experience () {
    return this.form.get('experience') as FormArray
  }

  constructor(private fb: FormBuilder) { }


  public addExperience () {
    this.experience.push(this.fb.group({
      time: [''],
      type: [''],
      things: ['']
    }))
  }

  public onSubmit () {
    console.log(this.form.value)
  }
}
