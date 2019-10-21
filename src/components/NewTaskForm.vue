<template>
    <div>

        <form>
            <label for="taskOwnerName">Task owner name</label>
            <input v-model="task.owner.name" name="taskOwnerName"/>
            <label for="taskOwnerAvatarSmall">Task owner avatar</label>
            <input v-model="task.owner.avatarSmall" name="taskOwnerAvatarSmall"/>
            <label for="taskTitle">Task title</label>
            <input v-model="task.title" name="taskTitle">
            <label for="taskStatusString">Task status</label>
            <select v-model="task.statusString" name="taskStatusString">
                <option value="new">New</option>
                <option value="inProgress">In progress</option>
                <option value="inReview">In review</option>
                <option value="done">Done</option>
                <option value="closed">Closed</option>
            </select>
            <label for="taskDate">Task date</label>
            <input v-model="task.date" name="taskDate"/>

            <button @click.prevent="doAddTask()">Do add task</button>
        </form>

    </div>

</template>

<script>
    export default {
        name: "NewTaskForm",
        data: function() {
            return {
                task: {
                    id: 0,
                    title: "Task 1",
                    date: new Date("2019-01-01"),
                    statusString: "new",
                    owner: {
                        avatarSmall: "./images/avatar.jpg",
                        name: "Task 1 owner name"
                    }
                }
            }
        },
        methods: {
            doAddTask: function() {

                var payload = {
                    'targetList': this.task.statusString,
                    'task': this.task
                };

                this.$store.commit('doAddTask', payload);

            }
        }
    }
</script>

<style scoped>

</style>