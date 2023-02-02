import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment, translations } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackbar: MatSnackBar) { }

  //custom message
  openSnackbar(message: string) {
    this.snackbar.open(message)
  }

  //general create message
  onCreate() {
    this.snackbar.open(environment.currentLanguage == "it" ? translations.it.CreateSuccessful : translations.en.CreateSuccessful);
  }

  //general update message
  onUpdate() {
    this.snackbar.open(environment.currentLanguage == "it" ? translations.it.UpdateSuccessful : translations.en.UpdateSuccessful);
  }

  //general delete message
  onDelete() {
    this.snackbar.open(environment.currentLanguage == "it" ? translations.it.DeleteSuccessful : translations.en.DeleteSuccessful);
  }

  //general validation message
  onValidate() {
    this.snackbar.open(environment.currentLanguage == "it" ? translations.it.ValidateSuccessful : translations.en.ValidateSuccessful)
  }
}
