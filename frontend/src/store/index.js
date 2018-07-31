import Vue from 'vue';
import Vuex from 'vuex';
import {
    ADD_TODO,
    CLEAR_COMPLETED,
    COMPLETE_ALL_TODOS,
    COMPLETE_TODO,
    DELETE_TODO,
    EDIT_TODO,
} from './ActionTypes';

Vue.use(Vuex);

const initialState = {
    text: 'Use Vuex',
    completed: false,
    index: 0,
};

export default new Vuex.Store({
    state: {
        todoList: [initialState],
    },
    mutations: {
        add(state, todpItem) {
            state.todoList.push(todpItem);
        },
        delete(state, id) {
            state.todoList.splice(
                state.todoList.findIndex(todo => todo.id === id),
                1,
            );
        },
        edit(state, {id, text}) {
            state.todoList.map(todo =>
                todo.id === id ? {...todo, text: text}
                    : todo,
            );
        },
        complete(state, {id, status}) {
            state.todoList.map(todo =>
                todo.id === id
                    ? {...todo, completed: status}
                    : todo,
            );
        },
        allComplete(state) {
            const areAllMarked = state.todoList.every(todo => todo.completed);
            state.todoList.map(todo => ({
                ...todo,
                completed: !areAllMarked,
            }));
        },
    },
    actions: {
        [ADD_TODO]: ({commit, state}, todoItem) => {
            commit('add', {
                text: todoItem,
                completed: true,
                index: state.todoList.reduce(
                    (maxIndex, todo) => Math.max(todo.index, maxIndex), -1) + 1,
            });
        },
        [DELETE_TODO]: (context, id) => {
            context.commit('delete', id);
        },
        [EDIT_TODO]: (context, {id, text}) => {
            context.commit('edit', {id, text});
        },
        [COMPLETE_TODO]: (context, id) => {
            context.commit('complete', {id, status: true});
        },
        [COMPLETE_ALL_TODOS]: (context) => {
            context.commit('allComplete');
        },
        [CLEAR_COMPLETED]: (context, {id, status}) => {
            context.commit('complete', {id, status});
        },
    },
});
