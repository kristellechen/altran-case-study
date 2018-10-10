<template>
    <div>
        <Toasted href='toasted' />
        <div class='myContainer'>
            <div class='card'>
                <div class='card-header'>Add a new case study</div>
                <div class='card-body'>
                    <Study v-bind:studyProp='newStudy' @onCanSubmit='doCanSubmit'></Study>
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
                            <b-button class='btn-success' :disabled='!canSubmit' @click.prevent='createProject'>Submit</b-button>
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
                newStudy: fs.getNewStudy(),
                message: 'hahaha',
                hasError: false,
                canSubmit: true
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
                        this.$toasted.show('New case study created successfully', toastrOpts)
                    } else {
                        this.$toasted.show('Creating new case study failed.', toastrOpts)
                    }
                }).catch(err => {
                    this.$toasted.show(err.message, toastrOpts)
                })
            },
            doCanSubmit: function (payload) {
                this.canSubmit = payload
            }
        }
    }
</script>

<style scoped>
    .myContainer {
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 130px;
        padding-bottom: 60px;
    }

    .card-header, .card-footer {
        color: white;
        background-color: #BC3123
    }

    .card-body {
        color: #8E8E8A;
        background-color: #EAE7DC
    }
</style>