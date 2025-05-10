const routes = [
    { path: '/', component: JobOverview },
    { path: '/job/:id', component: JobDetail }
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes
})