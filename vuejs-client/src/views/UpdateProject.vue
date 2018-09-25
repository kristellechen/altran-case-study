<template>
    <div>
        <div class='m-5'>
            <div class='card'>
                <div class='card-header'>Update Case Study</div>
                <div class='card-body'>
                    <Study v-bind:study='study'></Study>
                </div>
                <div class='card-footer'>
                    <div class='d-flex justify-content-between'>
                        <div v-if='hasError'>
                            <div class='text-danger'>{{message}}</div>
                        </div>
                        <div v-else>
                            <div class='text-success'>{{message}}</div>
                        </div>
                        <div>
                            <b-button class='btn-success' @click.prevent='updateProject'>Submit</b-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Study from '@/components/Study.vue'

    export default {
        name: 'updateproject',
        data() {
            return {
                message: 'hahaha',
                hasError: false
            }
        },
        props: ['study'],
        components: {
            Study
        },
        methods: {
            updateProject: function () {
                this.message = 'update failed'
                this.hasError = true
                alert(`update Project - ${this.study.Client}`)
            }
        }
    }
</script>

<style scoped>

</style>