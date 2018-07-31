<template>
    <header className="header">
        <h1>todos</h1>
        <todo-text-input
                :newTodo="newTodo"
                :onSave="ADD_TODO"
                placeholder="What needs to be done?"
        />
    </header>
</template>

<script>
    import {mapActions} from 'vuex'
    import TodoTextInput from './TodoTextInput';

    export default {
        name: 'Header',
        components: {TodoTextInput},
        data() {
            return {
                newTodo: true,
            };
        },
        methods: {
            ...mapActions([
                'ADD_TODO',
            ]),
        },
    };
</script>

<style scoped>

</style>
