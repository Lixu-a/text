
//构建组件
// import home from "../view/home.js"
// import index from "../view/index.html"

var route1 = Vue.extend({
    template: '<div>home</div>'
});

var route2 = Vue.extend({
    template: '<div>index</div>'
});

//定义路由
var router = new VueRouter({
    routes: [
        {
            path: '/route1',
            name: 'route1',
            component: route1,
            meta:{title: '路由一'},
            // beforeRouteEnter
            // beforeRouteUpdate
            // beforeRouteLeave
            beforeEnter: function(to,from,next){
                console.log(to)
                console.log(from)
                next()
            }
        },
        {
            path: '/route2',
            name: 'route2',
            component: route2,
            meta:{title: '路由二'}
        }
    ]
});


// router.beforeEach((to,from,next) => {
//     console.log(to)
//     console.log(from)
//     next()
// })


router.beforeEach(function(to,from,next){
    console.log(to)
    console.log(from)
    if(to.meta.title){
        document.title = to.meta.title
    }else{
        document.title = '路由'
    }
    
    next()
})


//定义vue实例,注入路由
var app = new Vue({
    el: '#app',
    router
})