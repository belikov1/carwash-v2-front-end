import Vue from 'vue'
import App from './components/App.vue'
import VueRouter from 'vue-router'

import AboutComponent from './components/Component_content/AboutComponent.vue'
import HomeComponent from './components/Component_content/HomeComponent.vue'
import PriceComponent from './components/Component_content/PriceComponent.vue'
import ReviewsComponent from './components/Component_content/ReviewsComponent.vue'
import NewReviewComponent from './components/Component_content/NewReviewComponent.vue'
import EnterComponent from './components/Component_content/EnterComponent.vue'
import ProfileComponent from './components/Component_content/ProfileComponent.vue'

Vue.use(VueRouter);

const router = new VueRouter({
	routes: [
		{path: '/', component: HomeComponent},
		{path: '/about', component: AboutComponent},
		{path: '/price', component: PriceComponent},
		{path: '/reviews', component: ReviewsComponent},
		{path: '/newReview', component: NewReviewComponent},
		{path: '/enter', component: EnterComponent},
		{path: '/profile', component: ProfileComponent},

	],
	scrollBehavior(to, from, savedPosition) {
		let elem = document.getElementById('splinter').offsetTop;
		return {x: 0, y: elem}
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
