import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private projectsSubject = new BehaviorSubject<any[]>([
    {
      id: 1,
      title: 'Model 01',
      imageurl: environment.imagePath,
      imageUrl: environment.imagePathCvModel,
      fullname: 'Joelson Emile ANDRIAMIHAJA',
      role: 'Web Developer',
      phone: '123-456-7890',
      email: 'joelson@gmail.com',
      website: 'www.julsify.com',
      linked: 'wwww.linked.com',
      address: 'TILILA BARAKAY 3322 ',
      educationFields: [
        {
          date: '2020 - 2024',
          diplome: 'Master Degree in Computer Science',
          university: 'Example University',
        },
        {
          date: '2007 - 2010',
          diplome: 'Bachelor Degree in Computer Science',
          university: 'Example University',
        },
        {
          date: '1997 - 2007',
          diplome: 'Matriculation',
          university: 'Example University',
        },
      ],
      languageFields: [
        {
          name: 'English',
          percent: 78,
        },
        {
          name: 'Français',
          percent: 60,
        },
        {
          name: 'Malagasy',
          percent: 100,
        },
      ],
      profile:
        'Passionate about innovation and software development, I have a strong background in computer engineering. My hands-on experience has strengthened my problem-solving skills and teamwork abilities. I am ready to put my skills to work for your company. ',
      experienceFields: [
        {
          date: '2019 - Present',
          company: 'Company Name',
          position: 'Web developer',
          description:
            'Lorem ipsum dolor ist amet, consecteur adipisicing elit , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  ',
        },
        {
          date: '2016 - 2019',
          company: 'Company Name',
          position: 'UX/UI Designer',
          description:
            'Lorem ipsum dolor ist amet, consecteur adipisicing elit , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  ',
        },
        {
          date: '2014 - 2016',
          company: 'Company Name',
          position: 'UX/UI Designer',
          description:
            'Lorem ipsum dolor ist amet, consecteur adipisicing elit , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  ',
        },
      ],
      hardSkillFields: [
        {
          name: 'Html',
          percent: 80,
        },
        {
          name: 'Css',
          percent: 70,
        },
        {
          name: 'Javascript',
          percent: 90,
        },
        {
          name: 'Photoshop',
          percent: 50,
        },
        {
          name: 'Adobe XD',
          percent: 85,
        },
      ],
      
      interestFieds: [
        {
          name: 'Games',
        },
        {
          name: 'Football',
        },
      ],
    },
    {
      id: 2,
      title: 'Model 02',
      imageurl: environment.imagePath,
      imageUrl: environment.imagePathCvModel,
      fullname: 'Jane Doe',
      role: 'Designer',
      phone: '098-765-4321',
      email: 'jane@example.com',
      website: 'www.site.com',
      linked: 'wwww.linked.com',
      address: 'TILILA BARAKAY 3322 ',
      educationFields: [
        {
          date: '2014 - 2020',
          diplome: 'Master of Arts',
          university: 'Another University',
        },
      ],
      languageFields: [
        {
          name: 'Français',
          percent: 78,
        },
      ],
      profile:
        "Passionné par l'innovation et le développement logiciel, je possède une solide formation en ingénierie informatique. Mon expérience pratique a renforcé mes compétences en résolution de problèmes et en collaboration en équipe. Je suis prêt à mettre mes compétences au service de votre entreprise.",
      experienceFields: [
        {
          date: '2020 - 2024',
          company: 'Fitifash',
          position: 'Web developer',
          description: 'Description of web dveloper ',
        },
      ],
      hardSkillFields: [
        {
          name: 'Html',
          percent: 80,
        },
      ],
      interestFieds: [
        {
          name: 'Games',
        },
        {
          name: 'Football',
        },
      ],
    },

    {
      id: 3,
      title: 'Model 03',
      imageurl: environment.imagePath,
      imageUrl: environment.imagePathCvModel,
      fullname: 'Sam Smith',
      role: 'Manager',
      phone: '555-555-5555',
      email: 'sam@example.com',
      website: 'www.site.com',
      linked: 'wwww.linked.com',
      address: 'TILILA BARAKAY 3322 ',
      educationFields: [
        {
          date: '2020 - 2024',
          diplome: 'PhD in Management',
          university: 'Different University',
        },
      ],
      languageFields: [
        {
          name: 'Français',
          percent: 78,
        },
      ],
      profile:
        "Passionné par l'innovation et le développement logiciel, je possède une solide formation en ingénierie informatique. Mon expérience pratique a renforcé mes compétences en résolution de problèmes et en collaboration en équipe. Je suis prêt à mettre mes compétences au service de votre entreprise.",
      experienceFields: [
        {
          date: '2020 - 2024',
          company: 'Fitifash',
          position: 'Web developer',
          description: 'Description of web dveloper ',
        },
      ],
      hardSkillFields: [
        {
          name: 'Html',
          percent: 80,
        },
      ],
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
