import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private projectsSubject = new BehaviorSubject<any[]>([
    {
      id: 1,
      title: 'CV Template 1',
      description: 'Default description for Template 1',
      imageUrl: '',
    },
    {
      id: 2,
      title: 'CV Template 2',
      description: 'Default description for Template 2',
      imageUrl: '',
    },
    {
      id: 3,
      title: 'CV Template 3',
      description: 'Default description for Template 3',
      imageUrl: '',
    },
  ]);

  projects$ = this.projectsSubject.asObservable();

  constructor() {}

  getProjects() {
    return this.projects$;
  }

  getProjectById(id: number) {
    return this.projects$.pipe(
      map((projects) => projects.find((p) => p.id === id))
    );
  }

  updateProject(updatedProject: any) {
    const projects = this.projectsSubject.getValue();
    const index = projects.findIndex((p) => p.id === updatedProject.id);
    if (index !== -1) {
      projects[index] = updatedProject;
      this.projectsSubject.next(projects);
    }
  }
}
