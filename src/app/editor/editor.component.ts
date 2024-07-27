import { Component, ElementRef, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../services/project-service.service';
import html2canvas from 'html2canvas';
import { ResultA4Component } from '../result-a4/result-a4.component';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
})
export class EditorComponent implements OnInit {
  cvContent = '';
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
        this.cvContent = project.description;
      }
    });
  }

  onContentChange(content: string) {
    this.cvContent = content;
  }

  saveCv() {
    if (this.resultA4) {
      this.resultA4.captureCv().then(image => {
        const templateId = +(this.route.snapshot.paramMap.get('id') ?? '0');
        const updatedProject = {
          id: templateId,
          description: this.cvContent,
          imageUrl: image,
        };
        this.projectService.updateProject(updatedProject);
        this.router.navigate(['/']);
      });
    }
  }
}
