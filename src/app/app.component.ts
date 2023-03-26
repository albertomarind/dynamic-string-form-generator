import { Component, OnInit } from '@angular/core';
import { StringFormGenerator } from "src/app/builder/StringFormGenerator";
import { forms } from "src/app/json-examples/current";
// @ts-ignore
import pretty from "pretty";
// @ts-ignore
import prettyJs from "pretty-js";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  stringForm: string = '';
  showJSON:boolean = false;
  json!:string;

  ngOnInit(): void {
    const formGenerator = new StringFormGenerator();
    this.stringForm = pretty(formGenerator.build(forms), {ocd: true});

    /*This is the JSON that is passed as an argument to the formBuilder.group()*/
    this.json = prettyJs(formGenerator.getFormBuilderJSON(forms));
  }

}
