import { Component, OnInit, Input } from "@angular/core";
import {Observable} from 'rxjs/Observable';
import { Validators, FormGroup, FormArray, FormBuilder, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: "list-view-edit",
    templateUrl: 'list-view-edit.component.html'
})
export class ListViewEditComponent implements OnInit {
    @Input() title: string;

    private _listValues : string[] = [];
    @Input()
    set listValues(listValues: string[]) {
        if (listValues && listValues.length) {
            this._listValues = listValues;
            this.recreateListFormArray();
        }
    }
    get listValues(): string[] { return this._listValues; }

    formGroup: FormGroup;

    constructor(private formBuilder: FormBuilder) {
    }

    ngOnInit() { 
        let list = this.formBuilder.array([this.stringToFormControl()]);
        this.formGroup = this.formBuilder.group({
            list: list
        });
    }

    addListElement() {
        let control = <FormArray> this.formGroup.controls['list'];
        control.push(this.stringToFormControl());
    }

    getCurrentListValues() : string[] {
        return this.formGroup.controls['list'].value;
    }

    private recreateListFormArray() {
        if (!this.listValues) return;
        let list = this.formBuilder.array([]);

        for (let value of this.listValues) {
            list.push(this.stringToFormControl(value));
        }
        this.formGroup.controls['list'] = list;
    }

    private stringToFormControl(value: String = '') : FormControl {
        let control = new FormControl(value);
        control.valueChanges.subscribe(data => { 
                console.log(data); 
            }
        );
        return control;
    }
}