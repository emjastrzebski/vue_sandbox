<template>
        <div :class="taskStatus">
            <span class="avatar">
                <img class="smallAvatar" :src="avatarImage"/>
            </span>
            <div class="thisShouldHavePointyCursor" v-if="modeEditTaskOwner">
                <select v-model="task.new_owner_id" name="ownerSetter" >
                    <option  v-for="owner, key in this.$store.getters.owners" :value="owner.id">{{ owner.name }}</option>
                </select>
                <button class="btn btn-default" @click.prevent="updateOwner()">update</button>
            </div>
            <h4 class="thisShouldHavePointyCursor" @click.prevent="toggleEditOwner()" v-else>
                {{ task.owner.name }}
            </h4>

            <div class="thisShouldHavePointyCursor" v-if="modeEditTitle">
                <input type="text" v-model="task.title" name="titleSetter"/>
                <button class="btn btn-default" @click.prevent="updateTitle()">update</button>
            </div>
            <h4 class="thisShouldHavePointyCursor" @click.prevent="toggleEditTitle()" v-else>{{ task.title }}</h4>
            <h6>{{ formattedDate }}</h6>
            <button class="btn btn-default" @click.prevent="show()">Show</button>
            <button class="btn btn-default" @click.prevent="toggleEditTask()">Edit</button>
            <button class="btn btn-default" @click.prevent="deleteTask()">Delete</button>
        </div>
</template>

<script>

    export default {
        name: "SmallTask",
        props: ["task"],
        data: function() {
            return {
                'modeEditTitle': false,
                'modeEditTaskOwner': false,
                'modeEditTask': false,
                'currentlySelectedOwnerId': this.task.owner.id
            }
        },
        computed: {
            formattedDate: function() {
                return this.task.date.toDateString();
            },
            taskStatus: function() {
                return "task " + this.task.statusString
            },
            avatarImage: function() {
                return this.task.owner.avatarSmall;
            }
        },
        methods: {
            show: function() {

                var payload = {
                    'id': this.task.id,
                    'taskListId': this.task.statusString
                };

                this.$store.commit('doShowTask', payload);
            },
            toggleEditTask: function() {
                this.modeEditTask = !this.modeEditTask;
            },
            toggleEditTitle: function() {
                this.modeEditTitle = !this.modeEditTitle;
            },
            toggleEditOwner: function() {
                this.modeEditTaskOwner = !this.modeEditTaskOwner;
            },
            updateTitle: function() {
                var payload = {
                    'id': this.task.id,
                    'title': this.task.title,
                    'taskListId': this.task.statusString
                }

                this.$store.commit('doUpdateTaskTitle', payload);

                this.toggleEditTitle();
            },
            updateOwner: function() {

                var payload = {
                    'id': this.task.id,
                    'ownerId': this.task.new_owner_id,
                    'taskListId': this.task.statusString
                }

                this.$store.commit('doUpdateTaskOwner', payload);

                this.toggleEditOwner();
            },
            deleteTask: function() {

                var payload = {
                    'targetList': this.task.statusString,
                    'id': this.task.id
                };

                this.$store.commit('doDeleteTask', payload);

            }
        }
    }
</script>

<style scoped>
    h4 {
        display: block;
    }
    .thisShouldHavePointyCursor {
        cursor: pointer;
    }
    img.smallAvatar {
        display: block;
        width: 60px;
        height: 60px;
        padding: 2px;
        margin: 2px;
        border: 1px solid black;
    }
</style>