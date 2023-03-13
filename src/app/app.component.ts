import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { DynamicFieldsComponent } from './dynamic-fields/dynamic-fields.component';
import { AppService } from './services/app.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public formData: any;
  appSub = new Subscription();

  @ViewChild(DynamicFieldsComponent) appChildComponent: DynamicFieldsComponent;

  constructor(
    readonly appService: AppService, private changeDetectorRef: ChangeDetectorRef
  ) { }
  
  ngAfterViewInit() {
    this.changeDetectorRef.detectChanges();
  }
  
  ngOnInit(): void {
    this.formData = this.appService.getDynamicFormJson();
  }

  formSubmit() {
    !this.appChildComponent?.myForm.invalid &&
      this.appSub.add(this.appService.postUserData(this.appChildComponent?.myForm.value).subscribe());
  }

  reset() {
    this.appChildComponent?.myForm.reset();
  }

  ngOnDestroy() {
    this.appSub && this.appSub.unsubscribe();
  }
}
