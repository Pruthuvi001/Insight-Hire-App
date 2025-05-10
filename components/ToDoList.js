const ToDoList = {
    data() {
        return {
            newTask: '',
            tasks: []
        }
    },
    methods: {
        addTask() {
            if (this.newTask.trim()) {
                this.tasks.unshift({
                    id: Date.now(),
                    text: this.newTask,
                    priority: 'low'
                });
                this.newTask = '';
            }
        },
        deleteTask(taskId) {
            this.tasks = this.tasks.filter(task => task.id !== taskId);
        },
        togglePriority(task) {
            if (task.priority === 'low') {
                task.priority = 'high';
            } else {
                task.priority = 'low';
            }
        },
        getPriorityText(task) {
            return task.priority === 'high' ? '(High Priority)' : '(Low Priority)';
        },
        getPriorityButtonText(task) {
            return task.priority === 'high' ? 'Mark as Low Priority' : 'Mark as High Priority';
        },
        getPriorityClass(task) {
            return task.priority === 'high' ? 'high-priority' : 'low-priority';
        }
    },
    template: `
        <div class="card">
            <div class="card-body">
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Add a new task..." 
                        v-model="newTask" @keyup.enter="addTask">
                    <button class="btn btn-primary" @click="addTask">Add</button>
                </div>
                
                <ul class="list-group">
                    <li v-for="task in tasks" :key="task.id" class="list-group-item d-flex justify-content-between align-items-center">
                        <div>
                            <span>{{ task.text }}</span>
                            <span :class="getPriorityClass(task)"> {{ getPriorityText(task) }}</span>
                        </div>
                        <div>
                            <button class="btn btn-sm btn-secondary me-2" @click="togglePriority(task)">
                                {{ getPriorityButtonText(task) }}
                            </button>
                            <button class="btn btn-sm btn-danger" @click="deleteTask(task.id)">Delete</button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    `
}