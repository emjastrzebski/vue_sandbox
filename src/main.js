import Vue from 'vue'
import App from './App.vue'


import Vuex from 'vuex'

Vue.config.productionTip = false;

Vue.use(Vuex);

let store = new Vuex.Store({
 state: {
  config: {},
  tasks: {}
 },
 getters: {
   tasksNew: state => {
     return state.tasks.new;
   },
   tasksInProgress: state => {
       return state.tasks.inProgress;
   },
   tasksInReview: state => {
       return state.tasks.inReview;
   },
   tasksDone: state => {
       return state.tasks.done;
   },
   tasksClosed: state => {
       return state.tasks.closed;
   },
   getConfig: state => {
      return state.config
   }
 },
 mutations: {
       setTasks(state, tasksList )  {
            this.state.tasks = tasksList;
       },
      setConfig( state, configData )  {
            this.state.config = configData;
      },
     doAddTask( state, payload ) {

         var taskToAdd = payload.task;

         var min = Math.ceil(1);
         var max = Math.floor(5000);
         taskToAdd.id = Math.floor(Math.random() * (max - min + 1)) + min

         switch(payload.targetList) {
             case 'new':
                 state.tasks.new.push(taskToAdd); break;
             case 'inProgress':
                 state.tasks.inProgress.push(taskToAdd); break;
             case 'inReview':
                 state.tasks.inReview.push(taskToAdd); break;
             case 'done':
                 state.tasks.done.push(taskToAdd); break;
             case 'closed':
                 state.tasks.closed.push(taskToAdd); break;
             default:
                 alert('BAD TARGET LIST'); break;
         }
     },
     doDeleteTask( state, payload) {
           alert('store.doDeleteTask fired'); console.dir(payload);

         var index = _.findIndex(this.users, ["id", id]);
         this.users.splice(index, 1);
     }
 }
});

let vueApp = new Vue({
 render: h => h(App),
 store,

});

vueApp.$mount('#app');