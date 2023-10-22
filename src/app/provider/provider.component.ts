import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import form-related modules


export interface JobDetails {
  id: number;
  title: string;
  description: string;
  location: string;
  salary: number;
  gender: string;
  requirements: string[];
  company: string;
  publishedDate: string;
  deadlineDate: string;
  contactEmail: string;
  numOfReq:number;
  image: string,
}
@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.scss']
})
export class ProviderComponent {

  jobDetailsArray: JobDetails[] = [
    {
      id: 1,
      title: "Software Engineer",
      description: "Develop and maintain software applications.",
      location: "New York, NY",
      salary: 80000,
      requirements: ["Bachelor's degree in Computer Science", "JavaScript proficiency", "3+ years of experience"],
      company: "Tech Co.",
      publishedDate: "2023-10-18",
      deadlineDate: "2023-11-18",
      contactEmail: "hr@techco.com",
      gender: "both",
      numOfReq:2,
      image: 'https://marketplace.canva.com/EAE0rNNM2Fg/1/0/1600w/canva-letter-c-trade-marketing-logo-design-template-r9VFYrbB35Y.jpg',
    },
    {
      id: 2,
      title: "Marketing Specialist",
      description: "Plan and execute marketing campaigns.",
      location: "Los Angeles, CA",
      salary: 60000,
      requirements: ["Bachelor's degree in Marketing", "Digital marketing skills", "2+ years of experience"],
      company: "Marketing Inc.",
      publishedDate: "2023-10-19",
      deadlineDate: "2023-11-19",
      contactEmail: "hr@marketinginc.com",
      gender: "female",
      numOfReq:3,
      image: 'https://static.vecteezy.com/system/resources/previews/008/214/517/non_2x/abstract-geometric-logo-or-infinity-line-logo-for-your-company-free-vector.jpg',
    },
    {
      id: 3,
      title: "Data Analyst",
      description: "Analyze and interpret data to support business decisions.",
      location: "Chicago, IL",
      salary: 70000,
      requirements: ["Bachelor's degree in Data Science", "SQL proficiency", "2+ years of experience"],
      company: "Data Co.",
      publishedDate: "2023-10-20",
      deadlineDate: "2023-11-20",
      contactEmail: "hr@dataco.com",
      gender: "both",
      numOfReq:3,
      image: 'https://img.freepik.com/free-vector/abstract-company-logo_53876-120501.jpg',
    },
    {
      id: 4,
      title: "Graphic Designer",
      description: "Create visually appealing designs for marketing materials.",
      location: "San Francisco, CA",
      salary: 55000,
      requirements: ["Bachelor's degree in Graphic Design", "Adobe Creative Suite proficiency", "2+ years of experience"],
      company: "Design Studio",
      publishedDate: "2023-10-21",
      deadlineDate: "2023-11-21",
      contactEmail: "hr@designstudio.com",
      gender: "female",
      numOfReq:4,
      image: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/business-logo-design-template-78655edda18bc1196ab28760f1535baa_screen.jpg?ts=1617645324',
    },
    {
      id: 5,
      title: "Customer Support Representative",
      description: "Provide excellent customer service and resolve inquiries.",
      location: "Houston, TX",
      salary: 45000,
      requirements: ["High school diploma or equivalent", "Strong communication skills", "1+ years of customer service experience"],
      company: "Support Solutions",
      publishedDate: "2023-10-22",
      deadlineDate: "2023-11-22",
      contactEmail: "hr@supportsolutions.com",
      gender: "male",
      numOfReq: 1,
      image: 'https://marketplace.canva.com/EAFI7a1C0Yo/1/0/800w/canva-orange-round-typography-real-estate-monogram-business-logo-IBpS3-vRlmQ.jpg',

    },
    {
      id: 6,
      title: "Financial Analyst",
      description: "Analyze financial data and prepare reports for decision-making.",
      location: "Boston, MA",
      salary: 75000,
      requirements: ["Bachelor's degree in Finance", "Excel proficiency", "3+ years of financial analysis experience"],
      company: "Finance Corp.",
      publishedDate: "2023-10-23",
      deadlineDate: "2023-11-23",
      contactEmail: "hr@financecorp.com",
      gender: "male",
      numOfReq: 1,
      image: 'https://www.logodesign.net/logo/line-art-house-roof-and-buildings-4485ld.png?size=2',
    }
  ];
  editMode: boolean = false;



  selectedJob: JobDetails = {
    id: 0,
    title: '',
    gender: '',
    description: '',
    location: '',
    salary: 0,
    requirements: [],
    company: '',
    publishedDate: '',
    deadlineDate: '',
    contactEmail: '',
    numOfReq: 0,
    image: '',
  };
  showDialog: boolean = false;

  editJob(job: JobDetails) {
    this.editMode = true;
    this.selectedJob = { ...job };
    this.showDialog = true;
  }

  createNewJob() {
    this.editMode = false;
    this.selectedJob = {
      id: 0,
      title: '',
      gender: '',
      description: '',
      location: '',
      salary: 0,
      requirements: [],
      company: '',
      publishedDate: '',
      deadlineDate: '',
      contactEmail: '',
      numOfReq: 0,
      image:'',

    };
    this.showDialog = true;
  }

  closeDialog() {
    this.editMode = false;
    this.selectedJob = {
      id: 0,
      gender: '',
      title: '',
      description: '',
      location: '',
      salary: 0,
      requirements: [],
      company: '',
      publishedDate: '',
      deadlineDate: '',
      contactEmail: '',
      numOfReq: 0,
      image: '',
    };

    this.showDialog = false;

  }
  jobForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.jobForm = this.fb.group({
      title: ['', Validators.required],
      location: ['', Validators.required],
      gender: ['', Validators.required],
      description: ['', Validators.required],
      company: ['', Validators.required],
      numOfReq: ['', Validators.required],
      salary: ['', Validators.required],
      publishedDate: ['', Validators.required],
      image: [''],
      requirements:[''],
      deadlineDate: [''],
      contactEmail: [''],

    });
  }
  showValidationMessage: boolean = false;
  saveEmployee() {
    if (this.jobForm.valid) {
      if (this.editMode) {
        const index = this.jobDetailsArray.findIndex((e) => e.id === this.selectedJob.id);
        if (index !== -1) {
          this.jobDetailsArray[index] = { ...this.selectedJob };
        }
      } else {
        this.selectedJob.id = this.getNextJobsId();
        this.jobDetailsArray.push({ ...this.selectedJob });
      }

      
      const fileInputElement = document.getElementById('img') as HTMLInputElement;
      if (fileInputElement) {
        fileInputElement.value = '';
      }

      this.closeDialog();
    } else {
      this.showValidationMessage = true;
    }
  }


  getNextJobsId(): number {

    const maxId = Math.max(...this.jobDetailsArray.map((e) => e.id), 0);
    return maxId + 1;
  }
  filterText: string = '';
  sortDirection: 'asc' | 'desc' = 'asc';

  toggleSortDirection() {
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
  }
  get filteredAndSortedJobs(): JobDetails[] {
    let filteredJobs = this.jobDetailsArray.filter((job) =>
      job.title.toLowerCase().includes(this.filterText.toLowerCase())
    );

    if (this.sortDirection === 'asc') {
      filteredJobs = filteredJobs.sort((a, b) => a.title.localeCompare(b.title));
    } else {
      filteredJobs = filteredJobs.sort((a, b) => b.title.localeCompare(a.title));
    }

    return filteredJobs;
  }
  calculateDaysSincePublished(publishedDate: string): number {
    const today = new Date();
    const published = new Date(publishedDate);
    const timeDiff = Math.abs(today.getTime() - published.getTime());
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return daysDiff;
  }
  currentPage = 1;


  itemsPerPage = 4;



  pageArray(): number[] {
    return Array.from({ length: this.totalPages() }, (_, i) => i + 1);
  }

  totalPages(): number {
    return Math.ceil(this.filteredAndSortedJobs.length / this.itemsPerPage);
  }

  // Create an array of page numbers
  get pagesArray(): number[] {
    return Array.from({ length: this.totalPages() }, (_, i) => i + 1);
  }

  // Get the data for the current page
  get pagedEmployees(): JobDetails[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.filteredAndSortedJobs.slice(startIndex, endIndex);
  }

  // Change the current page
  changePage(pageNumber: number) {
    if (pageNumber >= 1 && pageNumber <= this.totalPages()) {
      this.currentPage = pageNumber;
    }
  }


  onSelect(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const files = inputElement.files;

    if (files && files.length > 0) {
      const selectedFile = files[0];
      let fileType = selectedFile.type;

      if (fileType.match(/image\/*/)) {
        let reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onload = (event: any) => {
          this.selectedJob.image = event.target.result;

        };
      } else {
        window.alert('Please select a correct image format');
      }
    }
  }
}
