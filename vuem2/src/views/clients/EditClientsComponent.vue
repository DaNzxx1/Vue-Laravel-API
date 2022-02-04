<template>
    <DashboardComponent>
        <div slot="slot-pages" class="content-pages">
            <b-card class="card shadow mx-4">
                <b-row class="mx-2">
                    <b-col>
                        <h2 class="text-start" v-if="name"><i class="fa fa-user"></i> {{form.name}}</h2>
                        <h2 class="text-start" v-else><i class="fa fa-user"></i> Novo Usuário</h2>
                    </b-col>
                    <b-col v-if="last_update">
                        <p class="text-end"><b>Last Change: {{last_update}}</b></p>
                    </b-col>
                </b-row>
                <hr class="mt-0 pt-0" />
                <b-form @submit="onSubmit" v-if="show">
                    <b-row class="mt-4 px-2">
                        <b-col cols="12" md="4">
                            <b-form-group id="input-group-name" label="Seu Nome" label-for="input-name">
                                <b-form-input id="input-name" v-model="form.name" placeholder="Name" required />
                            </b-form-group>
                        </b-col>
                        <b-col cols="12" md="4">
                            <b-form-group id="input-group-email" label="E-mail" label-for="input-email">
                                <b-form-input id="input-email" v-model="form.email" type="email" placeholder="E-mail" required />
                            </b-form-group>
                        </b-col>
                        <b-col cols="12" md="4">
                            <b-form-group id="input-group-date_birth" label="Data de nascimento" label-for="input-date_birth">
                                <b-form-input id="input-date_birth" v-model="form.date_birth" type="date" required />
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <b-row class="mt-4 px-2">
                        <b-col cols="12" md="4">
                            <b-form-group id="input-group-cpf" label="CPF" label-for="input-cpf">
                                <b-form-input id="input-cpf" v-model="form.cpf" placeholder="CPF" required />
                            </b-form-group>
                        </b-col>
                        <b-col cols="12" md="4">
                            <b-form-group id="input-group-phone" label="Telefone" label-for="input-phone">
                                <b-form-input id="input-phone" v-model="form.phone" placeholder="Phone" required />
                            </b-form-group>
                        </b-col>
                        <b-col cols="12" md="4">
                            <b-form-group id="input-group-stats" label="Status" label-for="input-stats">
                                <b-form-select id="input-stats" :selected="form.stats" v-if="last_update" v-model="form.stats" :options="status" class="form-control" required />
                                <b-form-select id="input-stats" :selected="form.stats" v-else v-model="selected" :options="status" class="form-control" required />
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <b-row class="mt-4 px-2">
                        <b-col cols="12" md="4">
                            <b-form-group id="input-group-address" label="Endereço" label-for="input-address">
                                <b-form-input id="input-address" v-model="form.address" placeholder="Address" required />
                            </b-form-group>
                        </b-col>
                        <b-col cols="12" md="4">
                            <b-form-group id="input-group-city" label="Cidade" label-for="input-city">
                                <b-form-input id="input-city" v-model="form.city" placeholder="City" required />
                            </b-form-group>
                        </b-col>
                        <b-col cols="12" md="4">
                            <b-form-group id="input-group-sex" label="Sexo" label-for="input-sex">
                                <b-form-select id="input-sex" :selected="form.sex" v-if="last_update" v-model="form.sex" :options="sexos" class="form-control" required />
                                <b-form-select id="input-sex" :selected="form.sex" v-else v-model="selected" :options="sexos" class="form-control" required />
                            </b-form-group>
                        </b-col>
                    </b-row>

                    <div class="mt-4 d-flex gap-3 justify-content-center">
                        <b-button @click="onUpdate" v-if="last_update" variant="info">Salvar</b-button>
                        <b-button @click="onSubmit" v-else variant="info">Novo</b-button>
                        <b-button @click="onBack" variant="dark" class="text-light">Voltar</b-button>
                    </div>
                </b-form>
            </b-card>
        </div>
    </DashboardComponent>
</template>

<script>
/* eslint-disable */
    import DashboardComponent from '../Dashboard/DashboardComponent';

    export default {
        name: 'EditClientsComponent.vue',

        data() {
            return {
                form: {
                    name: String,
                    email: '',
                    date_birth: '',
                    cpf: '',
                    phone: '',
                    stats: '',
                    address: '',
                    city: '',
                    sex: '',
                    last_update: '',
                },
                selected: null,
                status: [{ text: 'Escolha...', value: null, disabled: true, }, { text: 'Ativo', value: 1 }, { text: 'Inativo', value: 0 }],
                sexos: [{ text: 'Escolha...', value: null, disabled: true, }, { text: 'Masculino', value: 'm' }, { text: 'Feminino', value: 'f' }, { text: 'Outro', value: 'o' }],
                show: true
            }
        },
        methods: {
            getClient() {
                this.$http.get(`clients/edit/${this.$route.params.client}`).then((response) => {
                    this.form.name = response.data.name
                    this.form.email = response.data.email
                    this.form.date_birth = response.data.date_birth
                    this.form.cpf = response.data.cpf
                    this.form.phone = response.data.phone
                    this.form.stats = response.data.stats
                    this.form.address = response.data.address
                    this.form.city = response.data.city
                    this.form.sex = response.data.sex
                    this.last_update = response.data.updated_at
                    
                })
            },
            onUpdate() {
                var data = { 
                    name: this.name, 
                    email: this.email, 
                    date_birth: this.date_birth, 
                    cpf: this.cpf, 
                    phone: this.phone, 
                    stats: this.stats, 
                    address: this.address, 
                    city: this.city, 
                    sex: this.sex,
                }

                this.$http.put(`/clients/update/${this.$route.params.client}`, data).then((response) => {
                    console.log(response)
                })
            },
            onSubmit(event) {
                event.preventDefault()
                alert(JSON.stringify(this.form))
            },
            onBack() {
                this.$router.push('/clients');
            },
            moment: function(date) {
                return console.log(date);
            },
        },
        created() {
            this.getClient()
        },
        components: {
            DashboardComponent,
        },
    }
</script>

<style src="./input.css" scoped/>