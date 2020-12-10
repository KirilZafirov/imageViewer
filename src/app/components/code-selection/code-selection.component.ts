import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounce, debounceTime, distinctUntilChanged, takeUntil, tap } from 'rxjs/operators';
import { RequestParams } from 'src/app/models/request.model';

@Component({
  selector: 'app-code-selection',
  templateUrl: './code-selection.component.html',
  styleUrls: ['./code-selection.component.css']
})
export class CodeSelectionComponent implements OnInit {


  styles = ['style-1' , 'style-2'];
  complexity = ['low' , 'medium' , 'high'];
  size = ['small' , 'medium' , 'large'];

  form: FormGroup = new FormGroup({
    style: new FormControl('style-1'),
    complexity: new FormControl('low'),
    size: new FormControl('small'),
  });

  destroy$ = new Subject();

  @Output() requestParams: EventEmitter<RequestParams> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.form.valueChanges.pipe(
      debounceTime(250),
      distinctUntilChanged(),
      tap((params) => this.requestParams.emit(params)),
      takeUntil(this.destroy$)
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
}
}
