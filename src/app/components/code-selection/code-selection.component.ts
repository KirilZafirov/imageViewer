import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil, tap } from 'rxjs/operators';
import { RequestParams } from 'src/app/models/request.model';
import { COMPLEXITY, SIZE, STYLES } from 'src/app/models/select-option.model';

@Component({
  selector: 'app-code-selection',
  templateUrl: './code-selection.component.html',
  styleUrls: ['./code-selection.component.css']
})
export class CodeSelectionComponent implements OnInit {

  styles = STYLES;
  complexity = COMPLEXITY;
  size = SIZE;

  form: FormGroup = new FormGroup({
    style: new FormControl('style-2'),
    complexity: new FormControl('high'),
    size: new FormControl('medium'),
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
