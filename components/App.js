const App = {
    template: `
        <div class="container">
            <div class="row mb-4">
                <div class="col-12">
                    <h2>Job Explorer</h2>
                    <div class="row">
                        <div class="col-4">
                            <JobList />
                        </div>
                        <div class="col-8">
                            <router-view />
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="row mb-4">
                <div class="col-12">
                    <h2>Application Form</h2>
                    <ApplicationForm />
                </div>
            </div>
            
            <div class="row">
                <div class="col-12">
                    <h2>To-Do List</h2>
                    <ToDoList />
                </div>
            </div>
        </div>
    `
}