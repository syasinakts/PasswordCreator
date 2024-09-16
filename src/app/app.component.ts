import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PasswordCreator';

  password:any = null;
  length:number = 0;
  includeLetters:boolean = false;
  includeNumbers:boolean = false;
  includeSymbols:boolean = false;

  modifyLength(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const value = inputElement.value;
    const parsedValue = parseInt(value, 10);
  
    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }


  modifyLetters()
  {
    this.includeLetters = !this.includeLetters;
  }

  modifyNumbers()
  {
    this.includeNumbers = !this.includeNumbers;
  }

  modifySymbols()
  {
    this.includeSymbols = !this.includeSymbols;
  }

  createClick() {
   const numbers='1234567890';
   const letters='abcdefghijklmnopqrstuvwyz';
   const symbols='!@#$%^&*()';

   let validChars='';

   if(this.includeLetters)
   {
     validChars += letters;
   }
   if(this.includeNumbers)
   {
     validChars += numbers;
   }
   if(this.includeSymbols)
   {
     validChars += symbols;
   }

   let generatedPassword = '';
   for(let i=0; i<this.length;i++)
   {
     const index=Math.floor(Math.random()*validChars.length);
     generatedPassword +=validChars[index];
   }

   this.password=generatedPassword;

  }

  cleanClick(){
    this.password = null;
  }
}
