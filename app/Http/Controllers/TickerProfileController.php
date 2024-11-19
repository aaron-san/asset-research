<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TickerProfile;
use Inertia\Inertia;

class TickerProfileController extends Controller
{
    /**
     * Dispaly a listing of the resource 
     * @return \Inertia\Response|\Inertia\ResponseFactory
     */
    public function index()
    {
        $ticker_profiles = TickerProfile::all();
        // $ticker_profiles = TickerProfile::latest();
        // $profiles = TickerProfile::latest()->paginate(5);

        return inertia('TickerProfiles/Index', ['ticker_profiles' => $ticker_profiles]);
    }


    /**
     * Show the form for creating a new resource
     * @return \Inertia\Response|\Inertia\ResponseFactory
     */
    public function create()
    {
        return inertia('TickerProfiles/Create');
    }

    /**
     * Store a newly created resource in storage
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function store(Request $request)
    {
        // sleep(2);

        $fields = $request->validate([
            'ticker' => 'required',
            'companyName',
            'description',
        ]);

        // TickerProfile::create($fields);
        $ticker_profile = new TickerProfile();

        $ticker_profile->ticker = $request->ticker;
        $ticker_profile->companyName = $request->companyName;
        $ticker_profile->companyDescription = $request->companyDescription;

        $ticker_profile->save();

        return redirect('/ticker-profiles');
    }

    // $tickerProfile = new TickerProfile;

    // $tickerProfile->ticker = $request->ticker;
    // $tickerProfile->companyName = $request->companyName;
    // $tickerProfile->shortDescription = $request->shortDescription || null;
    // $tickerProfile->longDescription = $request->longDescription || null;
    // $tickerProfile->save();

    // return redirect('/ticker-profiles');

    /**
     * Display the specified resource
     * @param string $ticker
     * @return \Inertia\Response|\Inertia\ResponseFactory
     */
    public function show($id)
    {
        // $notes = Note::find($ticker);
        $ticker_profile = TickerProfile::find($id);

        return inertia('TickerProfiles/Show', ['ticker_profile' => $ticker_profile]);
    }

    /**
     * Show the form for editing the specified resource
     * @param \App\Models\TickerProfile $ticker_profile
     * @return \Inertia\Response|\Inertia\ResponseFactory
     */
    public function edit(TickerProfile $ticker_profile)
    {
        return inertia("TickerProfiles/Edit", ['ticker_profile' => $ticker_profile]);
    }


    /**
     * Update the specified resource in storage
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\TickerProfile $ticker_profile
     * @return void
     */
    public function update($id, Request $request)
    {
        // sleep(1);
        $fields = $request->validate([
            'ticker' => ['required']
        ]);


        TickerProfile::find($id)->update($request->all());



        // $ticker_profile->update($fields);

        return redirect('/ticker-profiles')->with('success', "The profile was updated successfully.");
    }
    public function destroy(TickerProfile $ticker_profile)
    {
        $ticker_profile->delete();

        return redirect('/ticker-profiles')->with('message', "The profile was deleted successfuly!");
    }
}
