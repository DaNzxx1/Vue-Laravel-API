<template>
    <DashboardComponent>
        <div slot="slot-pages" class="content-pages">
            <b-card class="card p-3">
                <b-card-title>Clientes Cadastrados</b-card-title>
                <div class="top text-end">
                    <router-link :to="{name:'ClientsNew'}">
                        <b-button variant="outline-success"><i class="fa fa-user-plus"></i></b-button>
                    </router-link>
                </div>
                <div class="table">
                    <table class="table table-striped myTable">
                        <thead>
                            <tr>
                                <th>{{columnsName[0]}}</th>
                                <th>{{columnsName[1]}}</th>
                                <th>{{columnsName[2]}}</th>
                                <th>{{columnsName[3]}}</th>
                                <th>{{columnsName[4]}}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="client in clients" :key="client.id">
                                <th scope="row">{{client.id}}</th>
                                <td>{{client.name}}</td>
                                <td>{{client.cpf}}</td>
                                <td>{{client.email}}</td>
                                <td>
                                    <router-link :to="{name:'ClientsEdit', params:{client:client.id}}">
                                        <b-button class="me-2" variant="outline-primary"><i class="fa fa-edit"></i></b-button>
                                    </router-link>
                                    <b-button variant="outline-danger"><i class="fa fa-trash-alt"></i></b-button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </b-card>
        </div>
    </DashboardComponent>
</template>

<script>
/* eslint-disable */
    import DashboardComponent from '../Dashboard/DashboardComponent.vue';

    export default {
        name: 'HomeComponent',

        data() {
            return {
                clients: [],
                columnsName: ['#', 'Nome', 'CPF', 'Email', 'Ações']
            }
        },
        mounted () {
            this.getData();
        },
        methods: {
            async getData() {
                try {
                    this.$http.get('/clients/list').then((response) =>{
                        this.clients = response.data
                    });
                } catch (error) {
                    console.error("Ocorreu um erro: "+ error.response.status);
                }
            },
        },

        components: {
            DashboardComponent,
        }
    }
</script>

<style src="./input.css" scoped/>