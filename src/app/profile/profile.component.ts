import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  visible: boolean = false;
  selectedUser: any = {};
  showDialog() {
    this.visible = true;

    this.selectedUser = { ...this.user }; // Create a copy of the user for editing

  }


  user = {
  id: 1,
  firstName:"Eman",
  lastName:"Al-Mandhari",
  email: "john@example.com",
    job:"Full Stack Developer",
    location:"Bay Area, San Francisco, CA",
    phone:"(097) 234-5678",
    image: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp",
    projectStatus: [
      {
        name: 'Web Design',
        progress: 80,
      },
      {
        name: 'Website Markup',
        progress: 72,
      },
      {
        name: 'One Page',
        progress: 89,
      },
      {
        name: 'Mobile Template',
        progress: 55,
      },
      {
        name: 'Backend API',
        progress: 66,
      },
    ],
    softSkills: [
      {
        name: 'Communication',
        progress: 90,
      },
      {
        name: 'Teamwork',
        progress: 85,
      },
      {
        name: 'Adaptability',
        progress: 75,
      },
      {
        name: 'Problem-Solving',
        progress: 88,
      },
      {
        name: 'Time Management',
        progress: 78,
      },
    ],
    workExperience: [
      {
        jobTitle: 'Software Engineer',
        company: 'Tech Solutions Inc.',
        startDate: '2018-11-19',
        endDate: '2020-02-02',
      },
      {
        jobTitle: 'Web Developer',
        company: 'WebTech Co.',
        startDate: '2016-12-01',
        endDate: '2018-07-03',
      },
      {
        jobTitle: 'Front-End Developer',
        company: 'WebDesign Pro',
        startDate: '2014-05-04',
        endDate: '2015-12-06',
      }
    ],
};
  saveChanges() {

        this.user = { ...this.selectedUser };

      // Clear any file input (if needed)
      const fileInputElement = document.getElementById('img') as HTMLInputElement;
      if (fileInputElement) {
        fileInputElement.value = '';
      }

      this.visible= false;

  }
  addProject() {
    this.user.projectStatus.push({ name: '', progress: 0 });
  }

  deleteProject(index: number) {
    this.user.projectStatus.splice(index, 1);
  }
  addSkill() {
    this.user.softSkills.push({ name: '', progress: 0 });
  }

  deleteSkill(index: number) {
    this.user.softSkills.splice(index, 1);
  }
  addExperience() {
    this.user.workExperience.push({
      jobTitle: '',
      company: '',
      startDate: '',
      endDate: '',
    });
  }

  deleteExperience(index: number) {
    this.user.workExperience.splice(index, 1);
  }

  onSelect(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const files = inputElement.files;

    if (files && files.length > 0) {
      const selectedFile = files[0];
      const fileType = selectedFile.type;

      if (fileType.match(/image\/*/)) {
        const reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onload = (event: any) => {
          this.selectedUser.image = event.target.result;
        };
      } else {
        window.alert('Please select a correct image format');
      }
    }
  }

}
