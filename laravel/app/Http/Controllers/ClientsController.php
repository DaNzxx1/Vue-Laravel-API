<?php

namespace App\Http\Controllers;

use App\Models\Clients;
use Illuminate\Http\Request;

class ClientsController extends Controller
{
    public function all(Request $response)
    {
        $clients = Clients::all();

        return response()->json($clients);
    }

    public function serchID(Clients $client, Request $response)
    {
        return response()->json($client);
    }

    public function update(Clients $client, Request $response)
    {
        $client->name = $response->name;
        $client->email = $response->email;
        $client->date_birth = $response->date_birth;
        $client->cpf = $response->cpf;
        $client->phone = $response->phone;
        $client->stats = $response->stats;
        $client->address = $response->address;
        $client->city = $response->city;
        $client->sex = $response->sex;
        $client->save();

        return response()->json('success');
    }
    
}
