import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Input() title: string;
  @ViewChild('copyrightYear') copyrightYear: ElementRef;

  constructor() { }

  ngOnInit() {
    console.log('Footer init : @ViewChild("copyrightYear") output :');
    console.log(this.copyrightYear);
    console.log('Value #copyrightYear : ' + this.copyrightYear.nativeElement.value);
  }

}
