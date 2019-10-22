import Vue from 'vue'
import App from './App.vue'


import Vuex from 'vuex'

Vue.config.productionTip = false;

Vue.use(Vuex);

var _ = require('lodash');

let store = new Vuex.Store({
 state: {
  config: {},
  tasks: {},
  owners: [],
  selectedTask: {},
  doShowTask: false
 },
 getters: {
     doShowTask: state => {
         return state.doShowTask;
     },
     getSelectedTask: state => {
         return state.selectedTask;
     },
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
      return state.config;
   },
   owners: state => {
       return state.owners;
   }
 },
 mutations: {
       setTasks(state, tasksList )  {
            this.state.tasks = tasksList;
       },
      setConfig( state, configData )  {
            this.state.config = configData;
      },
     setOwners( state, ownersData) {
         this.state.owners = ownersData;
     },
     doAddTask( state, payload ) {

         var newTask = {}
         var taskToAdd = Object.assign(newTask, payload.task);

         var min = Math.ceil(1);
         var max = Math.floor(5000);
         taskToAdd.id = Math.floor(Math.random() * (max - min + 1)) + min

         state.tasks["" + payload.targetList].push(taskToAdd);

     },
     doShowTask( state, payload ) {
         var taskToShowIndex = _.findIndex(state.tasks[""+payload.taskListId], ['id', payload.id]);

         state.selectedTask = state.tasks[""+payload.taskListId][taskToShowIndex];
         state.doShowTask = true;
     },
     doCloseResetTask ( state, payload ) {
           state.selectedTask = false;
           state.doShowTask = false;
     },
     doUpdateTaskTitle( state, payload) {

         var taskIndex = _.findIndex(state.tasks[""+payload.taskListId], ['id', payload.id]);

         state.tasks[""+payload.taskListId][taskIndex].title = payload.title;
     },
     doUpdateTaskOwner( state, payload ) {
         var newOwner = state.owners[_.findIndex(state.owners, ["id", payload.ownerId]) ];
         var taskIndex = _.findIndex(state.tasks[""+payload.taskListId], ['id', payload.id]);

         state.tasks[""+payload.taskListId][taskIndex].owner = newOwner;
     },
     doDeleteTask( state, payload) {
           var listToDeleteFrom = state.tasks["" + payload.targetList];
           var index = _.findIndex(listToDeleteFrom, ["id",payload.id]);
           listToDeleteFrom.splice(index,1);
     }
 }
});

let vueApp = new Vue({
 render: h => h(App),
 store,

});

vueApp.$mount('#app');