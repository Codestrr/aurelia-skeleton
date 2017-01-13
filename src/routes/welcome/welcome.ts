import {computedFrom} from 'aurelia-framework';
var toastr = require('toastr');

export class Welcome {
  public heading = 'Welcome to the EZLinks Aurelia skeleton!';
  public firstName = 'John';
  public lastName = 'Doe';
  private previousValue = this.fullName;

  // Getters can't be directly observed, so they must be dirty checked.
  // However, if you tell Aurelia the dependencie with computedFrom, it no longer needs to dirty check the property.
  @computedFrom('firstName', 'lastName')
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  public submit() {
    this.previousValue = this.fullName;
    toastr.info(`Welcome, ${this.fullName}!`);
  }

  public canDeactivate() {
    if (this.fullName !== this.previousValue) {
      return confirm('Are you sure you want to leave?');
    }
  }
}

export class UpperValueConverter {
  public toView(value) {
    return value && value.toUpperCase();
  }
}
