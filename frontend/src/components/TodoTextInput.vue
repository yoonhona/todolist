<template>
    <input
        type="text"
        autoFocus="true"
        v-model="todoText"
        v-on:submit="handleSubmit"
        v-on:blur="handleBlur"
        v-on:change="handleChange"
        :class="{edit: editing, 'new-todo': newTodo}"
    />
</template>

<script>
    export default {
        name: 'TodoTextInput',
        props: {
            onSave: Function,
            text: String,
            placeholder: String,
            editing: Boolean,
            newTodo: Boolean
        },
        data() {
            return {
                todoText:  this.text || '',
            }
        },
        methods: {
            handleSubmit (e) {
                if (e.which === 13) {
                    this.onSave(this.todoText)
                }
            },
            handleChange (e) {
                this.onSave(this.todoText)
            },
            handleBlur (e) {
                if (!this.newTodo) {
                    this.onSave(this.todoText)
                }
            },
        }
    };
</script>

<style scoped>

</style>
