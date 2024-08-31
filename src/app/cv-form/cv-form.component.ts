import {
  Component,
  Output,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  output,
  input,
} from '@angular/core';

@Component({
  selector: 'app-cv-form',
  templateUrl: './cv-form.component.html',
  styleUrls: ['./cv-form.component.css'],
})
export class CvFormComponent implements OnChanges {
  @Input() imageurl!: string | ArrayBuffer;
  @Input() fullname = '';
  @Input() role = '';
  @Input() phone = '';
  @Input() email = '';
  @Input() website = '';
  @Input() linked = '';
  @Input() address = '';
  @Input() educationFields: {
    date: string;
    diplome: string;
    university: string;
  }[] = [];
  @Input() languageFields: { name: string; percent: number }[] = [];
  @Input() profile: string = '';
  @Input() experienceFields: {
    date: string;
    company: string;
    position: string;
    description: string;
  }[] = [];
  @Input() hardSkillFields: { name: string; percent: number }[] = [];
  @Input() interestFields: { name: string }[] = [];

  @Output() imageurlChange = new EventEmitter<string | ArrayBuffer>();
  @Output() fullnameChange = new EventEmitter<string>();
  @Output() roleChange = new EventEmitter<string>();
  @Output() phoneChange = new EventEmitter<string>();
  @Output() emailChange = new EventEmitter<string>();
  @Output() websiteChange = new EventEmitter<string>();
  @Output() linkedChange = new EventEmitter<string>();
  @Output() addressChange = new EventEmitter<string>();
  @Output() educationFieldsChange = new EventEmitter<
    { date: string; diplome: string; university: string }[]
  >();
  @Output() languageFieldsChange = new EventEmitter<
    { name: string; percent: number }[]
  >();
  @Output() profileChange = new EventEmitter<string>();
  @Output() experienceFieldsChange = new EventEmitter<
    {
      date: string;
      company: string;
      position: string;
      description: string;
    }[]
  >();
  @Output() hardSkillFieldsChange = new EventEmitter<
    { name: string; percent: number }[]
  >();
  @Output() interestFieldsChange = new EventEmitter<{ name: string }[]>();

  ngOnChanges() {
    this.onFullnameChange();
    this.onRoleChange();
    this.onPhoneChange();
    this.onEmailChange();
    this.onWebsiteChange();
    this.onLinkedInChange();
    this.onAddressChange();
    this.onImageurlChange();
    this.onEducationFieldsChange();
    this.onLanguageFieldsChange();
    this.onProfileChange();
    this.onExperienceFieldsChange();
    this.onHardSkillFieldsChange();
    this.onInterestFieldsChange();
  }

  constructor() {}

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input && input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result) {
          this.imageurl = reader.result;
        }
      };
      reader.readAsDataURL(file);
    }
  }

  onImageurlChange() {
    this.imageurlChange.emit(this.imageurl);
  }

  onFullnameChange() {
    this.fullnameChange.emit(this.fullname);
  }

  onRoleChange() {
    this.roleChange.emit(this.role);
  }

  onPhoneChange() {
    this.phoneChange.emit(this.phone);
  }

  onEmailChange() {
    this.emailChange.emit(this.email);
  }
  onWebsiteChange() {
    this.websiteChange.emit(this.website);
  }

  onLinkedInChange() {
    this.linkedChange.emit(this.linked);
  }
  onAddressChange() {
    this.addressChange.emit(this.address);
  }
  onEducationFieldsChange() {
    this.educationFieldsChange.emit(this.educationFields);
  }

  onLanguageFieldsChange() {
    this.languageFieldsChange.emit(this.languageFields);
  }

  onProfileChange() {
    this.profileChange.emit(this.profile);
  }

  onExperienceFieldsChange() {
    this.experienceFieldsChange.emit(this.experienceFields);
  }

  onHardSkillFieldsChange() {
    this.hardSkillFieldsChange.emit(this.hardSkillFields);
  }
  onInterestFieldsChange() {
    this.interestFieldsChange.emit(this.interestFields);
  }
}
