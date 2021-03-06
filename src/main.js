import Vue from 'vue'
import App from './components/App.vue'
import VueRouter from 'vue-router'

import AboutComponent from './components/ComponentContentRouter/AboutComponent.vue'
import HomeComponent from './components/ComponentContentRouter/HomeComponent.vue'
import PriceComponent from './components/ComponentContentRouter/PriceComponent.vue'
import ReviewsComponent from './components/ComponentContentRouter/ReviewsComponent.vue'
import NewReviewComponent from './components/ComponentContentRouter/NewReviewComponent.vue'
import EnterComponent from './components/ComponentContentRouter/EnterComponent.vue'
import ProfileComponent from './components/ComponentContentRouter/ProfileComponent.vue'
import NotFoundComponent from './components/NotFoundComponent.vue'

Vue.use(VueRouter);
let routes;
if(localStorage.getItem('auth_token' )){
    routes =[
        {path: '/', component: HomeComponent},
        {path: '/about', component: AboutComponent},
        {path: '/price', component: PriceComponent},
        {path: '/reviews', component: ReviewsComponent},
        {path: '/newReview', component: NewReviewComponent},
        {path: '/profile', component: ProfileComponent},
        {path: '*', component: NotFoundComponent},
        {path: '/enter', redirect : '/'}
    ];
}else {
    routes = [
        {path: '/', component: HomeComponent},
        {path: '/about', component: AboutComponent},
        {path: '/price', component: PriceComponent},
        {path: '/reviews', component: ReviewsComponent},
        {path: '/newReview', component: NewReviewComponent},
        {path: '/profile', redirect: '/enter'},
        {path: '*', component: NotFoundComponent},
        {path: '/enter', component: EnterComponent}
    ];
}


const router = new VueRouter({
	routes: routes,
	scrollBehavior(to, from, savedPosition) {
		let elem = document.getElementById('splinter').offsetTop;
        if(document.documentElement.clientWidth < 813){
            return {x:0, y: elem - 50}
        }else{
            return {x: 0, y: elem}
        }

	},
	mode: 'history'
});


new Vue({
	el: '#app',
	router: router,
	render: function (h) {
		return h(App)
	}
});
