import { Component, OnInit } from '@angular/core';
import { forms } from "src/app/current";
import { Form, StringFormGenerator, TypeControl } from "src/app/StringFormGenerator";
// @ts-ignore
import pretty from "pretty";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  stringForm: string = '';

  ngOnInit(): void {

    const formGenerator = new StringFormGenerator();
    this.stringForm = pretty(formGenerator.build(forms), {ocd: true});
    console.log(formGenerator.getFormBuilderJSON(forms));
  }

}
