<template>
    <div>
        <div>
            <div class='card'>
                <div class='card-header'>Add a new case study</div>
                <div class='card-body'>
                    <Study v-bind:studyProp='newStudy' @onCanSubmit='doCanSubmit'></Study>
                </div>
                <div class='card-footer'>
                    <div class='text-right'>
                        <b-button class='btn-success' :disabled='!canSubmit' @click.prevent='createProject'>Submit</b-button>
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

    export default {
        name: 'addproject',
        data() {
            return {
                newStudy: fs.getNewStudy(),
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
                        this.$toasted.show('New case study created successfully')
                        this.$store.commit('refreshStudiesList')
                    } else {
                        this.$toasted.show('Creating new case study failed.')
                    }
                }).catch(err => {
                    this.$toasted.show(err.message)
                })
            },
            doCanSubmit: function (payload) {
                this.canSubmit = payload
            }
        }
    }
</script>

<style scoped>
    .card-header,
    .card-footer {
        color: white;
        background-color: #BC3123
    }

    .card-body {
        color: #8E8E8A;
        background-color: #EAE7DC
    }
</style>