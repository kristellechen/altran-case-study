<template>
    <div>
        <div>
            <div class='card'>
                <div class='card-header'>Update Case Study</div>
                <div class='card-body'>
                    <Study v-bind:studyProp='study' @onCanSubmit='doCanSubmit'></Study>
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
                            <b-button class='btn-success' :disabled='!canSubmit' @click.prevent='updateCaseStudy'>Submit</b-button>
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

    export default {
        name: 'updateCaseStudy',
        data() {
            return {
                message: 'hahaha',
                hasError: false,
                canSubmit: true,
            }
        },
        props: ['study'],
        components: {
            Study
        },
        methods: {
            updateCaseStudy: function () {
                this.$store.dispatch('updateStudy', this.study).then(resp => {
                    this.$toasted.show('Case study updated successfully')
                    this.$store.commit('refreshStudiesList')
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
    .card-header, .card-footer {
        color: white;
        background-color: #BC3123
    }

    .card-body {
        color: #8E8E8A;
        background-color: #EAE7DC
    }
</style>