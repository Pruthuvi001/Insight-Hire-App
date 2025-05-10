const JobDetail = {
    data() {
        return {
            job: null
        }
    },
    computed: {
        jobId() {
            return this.$route.params.id;
        }
    },
    mounted() {
        this.fetchJobDetails();
    },
    methods: {
        fetchJobDetails() {
            this.job = jobsData.find(job => job.job_id === this.jobId);
        }
    },
    watch: {
        '$route.params.id': 'fetchJobDetails'
    },
    template: `
        <div v-if="job" class="card">
            <div class="card-header">
                <h3>{{ job.job_title }}</h3>
            </div>
            <div class="card-body">
                <p><strong>Job ID:</strong> {{ job.job_id }}</p>
                <p><strong>Category:</strong> {{ job.category }}</p>
                <p><strong>Location:</strong> {{ job.location }}</p>
                <p><strong>Employment Type:</strong> {{ job.employment_type }}</p>
                <p><strong>Salary Range:</strong> {{ job.salary_range }}</p>
                <p><strong>Job Level:</strong> {{ job.job_level }}</p>
                
                <h4>Required Skills:</h4>
                <ul>
                    <li v-for="skill in job.required_skills" :key="skill">{{ skill }}</li>
                </ul>
                
                <h4>Preferred Qualifications:</h4>
                <ul>
                    <li v-for="qual in job.preferred_qualifications" :key="qual">{{ qual }}</li>
                </ul>
                
                <h4>Job Description:</h4>
                <p>{{ job.job_description }}</p>
                
                <p><strong>Application Deadline:</strong> {{ job.application_deadline }}</p>
                <p><strong>Posted Date:</strong> {{ job.posted_date }}</p>
                <p><strong>Company:</strong> {{ job.company }}</p>
                <p><strong>Supervisor:</strong> {{ job.supervisor }}</p>
                <p><strong>Positions Available:</strong> {{ job.positions_available }}</p>
                <p><strong>Start Date:</strong> {{ job.start_date }}</p>
                
                <h4>Tags:</h4>
                <div class="d-flex gap-1">
                    <span v-for="tag in job.tags" :key="tag" class="badge bg-primary me-1">{{ tag }}</span>
                </div>
            </div>
        </div>
        <div v-else class="alert alert-warning">
            Job not found
        </div>
    `
}