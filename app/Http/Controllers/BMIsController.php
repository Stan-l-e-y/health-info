<?php

namespace App\Http\Controllers;

use App\Models\bmi;
use Illuminate\Http\Request;

class BMIsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return bmi::all();
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
        $attributes = request()->validate([
            'weight' => 'numeric|required',
            'height' => 'numeric|required',
            'bmi_number' => 'nullable',
            'measurement' => 'required',
            'user_id' => 'required'
        ]);

        $bmi = bmi::create($attributes);

        return $bmi;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return bmi::find($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $attributes = request()->validate([
            'weight' => 'numeric|required',
            'height' => 'numeric|required',
            'measurement' => 'required',
            'bmi_number' => 'nullable'
        ]);

        $bmi = bmi::find($id);
        $bmi->update($attributes);
        return $bmi;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        return bmi::destroy($id);
    }
}
