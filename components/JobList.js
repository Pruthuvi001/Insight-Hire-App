const JobList = {
    data() {
        return {
            jobs: [] 
        }
    },
    mounted() {
        this.jobs = jobsData;
    },
    template: `
        <div class="list-group">
            <router-link to="/" class="list-group-item list-group-item-action">Overview</router-link>
            <router-link 
                v-for="job in jobs" 
                :key="job.job_id" 
                :to="'/job/' + job.job_id"
                class="list-group-item list-group-item-action">
                {{ job.job_id }}
            </router-link>
        </div>
    `
}