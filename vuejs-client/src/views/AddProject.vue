<template>
    <div>
        <Toasted href='toasted'/>
        <div class='m-5'>
            <div class='card'>
                <div class='card-header'>Add a new case study</div>
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
                            <b-button class='btn-success' @click.prevent='createProject'>Submit</b-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Study from '@/components/Study.vue'

    let toastrOpts = {
        duration: 3000,
        fullWidth: true,
        position: 'top-center'
    }

    export default {
        name: 'addproject',
        data() {
            return {
                study: {},
                message: 'hahaha',
                hasError: false
            }
        },
        components: {
            Study
        },
        methods: {
            createProject: function () {
                this.message = 'update failed'
                this.hasError = true
                var msg = `Create Project - ${this.study.Client}`
                this.$toasted.show(msg, toastrOpts)
            }
        }
    }
</script>

<style scoped>

</style>