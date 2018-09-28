<template>
    <div>
        <Toasted href='toasted' />
        <div class='m-5'>
            <div class='card'>
                <div class='card-header'>Add a new case study</div>
                <div class='card-body'>
                    <Study v-bind:study='newStudy'></Study>
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
    import server from '@/js/server'
    import fs from '@/js/studies.js'

    let toastrOpts = {
        duration: 3000,
        fullWidth: true,
        position: 'top-center'
    }

    export default {
        name: 'addproject',
        data() {
            return {
                newStudy: {},
                message: 'hahaha',
                hasError: false
            }
        },
        components: {
            Study
        },
        methods: {
            createProject: function () {
                server.createCaseStudy(this.newStudy).then(resp => {
                    console.log(resp)
                    if (resp.status === 200) {
                        this.$toasted.show('New case study created successfully')
                    } else {
                        this.$toasted.show('Creating new case study failed.')
                    }
                }).catch(err => {
                    this.$toasted.show(err.message, toastrOpts)
                })
            }
        },
        mounted() {
            this.newStudy = fs.getNewStudy()
        }
    }
</script>

<style scoped>

</style>