<template>
        <div :class="taskStatus">
            <span class="avatar">
                <img class="smallAvatar" :src="avatarImage"/>
                <span>{{ task.owner.name }}</span>
            </span>
            <h4>{{ task.title }}</h4>
            <h6>{{ formattedDate }}</h6>
            <button class="btn btn-default" @click.prevent="show()">Show</button>
            <button class="btn btn-default" @click.prevent="editTask()">Edit</button>
            <button class="btn btn-default" @click.prevent="deleteTask()">Delete</button>
        </div>
</template>

<script>

    export default {
        name: "SmallTask",
        props: ["task"],
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

            },
            editTask: function() {

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
    img.smallAvatar {
        display: block;
        width: 60px;
        height: 60px;
        padding: 2px;
        margin: 2px;
        border: 1px solid black;
    }
</style>