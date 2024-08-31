import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../services/project-service.service';
import { ResultA4Component } from '../result-a4/result-a4.component';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
})
export class EditorComponent implements OnInit {
  imageurl: string | ArrayBuffer = '';
  fullname = '';
  role = '';
  phone = '';
  email = '';
  website = '';
  linked = '';
  address = '';
  educationFields: { date: string; diplome: string; university: string }[] = [];
  languageFields: { name: string; percent: number }[] = [];
  profile = '';
  experienceFields: {
    date: string;
    company: string;
    position: string;
    description: string;
  }[] = [];
  hardSkillFields: { name: string; percent: number }[] = [];
  interestFields: { name: string }[] = [];

  @ViewChild('resultA4') resultA4!: ResultA4Component;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projectService: ProjectService
  ) {}

  ngOnInit() {
    const templateId = +(this.route.snapshot.paramMap.get('id') ?? '0');
    this.projectService.getProjectById(templateId).subscribe((project) => {
      if (project) {
        this.imageurl = project.imageurl;
        this.fullname = project.fullname;
        this.role = project.role;
        this.phone = project.phone;
        this.email = project.email;
        this.website = project.website;
        this.linked = project.linked;
        this.address = project.address;
        this.educationFields = project.educationFields || [];
        this.languageFields = project.languageFields || [];
        this.profile = project.profile;
        this.experienceFields = project.experienceFields;
        this.hardSkillFields = project.hardSkillFields;
        this.interestFields = project.interestFieds ;
      }
    });
  }

  onImageurlChange(imageurl: string | ArrayBuffer) {
    this.imageurl = imageurl;
  }

  onFullnameChange(fullname: string) {
    this.fullname = fullname;
  }

  onRoleChange(role: string) {
    this.role = role;
  }

  onPhoneChange(phone: string) {
    this.phone = phone;
  }

  onEmailChange(email: string) {
    this.email = email;
  }

  onWebsiteChange(website: string) {
    this.website = website;
  }

  onLinkedInChange(linked: string) {
    this.linked = linked;
  }

  onAddressChange(address: string) {
    this.address = address;
  }

  onEducationFieldsChange(
    fields: { date: string; diplome: string; university: string }[]
  ) {
    this.educationFields = fields;
  }

  onLanguageFieldsChange(fields: { name: string; percent: number }[]) {
    this.languageFields = fields;
  }

  onProfileChange(profile: string) {
    this.profile = profile;
  }

  onExperienceFieldsChange(
    field: {
      date: string;
      company: string;
      position: string;
      description: string;
    }[]
  ) {
    this.experienceFields = field;
  }

  onHardSkillFieldsChange(field: { name: string; percent: number }[]) {
    this.hardSkillFields = field;
  }

  onInterestFieldsChange(field: { name: string }[]) {
    this.interestFields = field;
  }

  saveCv() {
    if (this.resultA4) {
      this.resultA4.captureCv().then((image) => {
        const templateId = +(this.route.snapshot.paramMap.get('id') ?? '0');
        const updatedProject = {
          id: templateId,
          imageurl: this.imageurl,
          fullname: this.fullname,
          role: this.role,
          phone: this.phone,
          email: this.email,
          website: this.website,
          linked: this.linked,
          address: this.address,
          educationFields: this.educationFields,
          languageFields: this.languageFields,
          profile: this.profile,
          experienceFields: this.experienceFields,
          hardSkillFields: this.hardSkillFields,
          interestFields: this.interestFields,
          imageUrl: image,
        };
        this.projectService.updateProject(updatedProject);
        this.router.navigate(['/']);
      });
    }
  }
}
