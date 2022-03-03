<?php

namespace App\Http\Controllers;

use App\Models\Secrete;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;


class SecreteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data['passwords'] = Secrete::orderBy('id','desc')->paginate(5);
        return Inertia::render('Secrete/index', $data);

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required',
            'password' => 'required',
            'username' => 'required',
        ]);

        $secrete =  Secrete::create($request->all());
        
        return Redirect::route('secrete.index')->with('success', 'New Secrete has been created.');


    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Secrete  $secrete
     * @return \Illuminate\Http\Response
     */
    public function show(Secrete $secrete)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Secrete  $secrete
     * @return \Illuminate\Http\Response
     */
    public function edit(Secrete $secrete)
    {
        $data['passwords'] =  $secrete;
        return Inertia::render('Secrete/edit', $data);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Secrete  $secrete
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Secrete $secrete)
    {
        $validated = $request->validate([
            'name' => 'required',
            'password' => 'required',
            'username' => 'required',
        ]);

        $secrete->update($request->all());       
        return Redirect::route('secrete.index')->with('success', 'Secrete has been Updated');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Secrete  $secrete
     * @return \Illuminate\Http\Response
     */
    public function destroy(Secrete $secrete)
    {
        $secrete->delete();
        return Redirect::route('secrete.index')->with('success', 'Secrete deleted.');
    }
}
