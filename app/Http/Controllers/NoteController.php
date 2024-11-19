<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Note;
use App\Models\TickerProfile;
use Illuminate\Support\Facades\Redirect;

class NoteController extends Controller
{
    public function show(string $ticker)
    {
        // $notes = Note::find($ticker);
        $profile = TickerProfile::find($ticker);

        return inertia('Show', ['profile' => $profile]);
    }

    public function store(Request $request)
    {
        sleep(2);

        $fields = $request->validate([
            'note_ticker' => ['required'],
            'notes',
        ]);

        Note::create($fields);
        // $note = new Note();

        // $note->note_ticker = $request->note_ticker;
        // $note->note = $request->note;

        // $note->save();

        return redirect('/ticker-profiles');
    }


    public function edit(Note $note)
    {
        return inertia("Edit", ['note' => $note]);
    }


    /**
     * Update the specified resource in storage. 
     * Summary of update
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\Note $note
     * @return mixed|\Illuminate\Http\RedirectResponse
     */
    public function update(Request $request, Note $note)
    {

        sleep(1);
        dd($note);

        $fields = $request->validate([
            'ticker' => ['required'],
            'note' => ['required'],
        ]);

        $note->update($fields);
        // $note->update($request->validated());
        $note->update(['notes' => $request->notes->store('notes')]);

        return redirect('/profiles')->with('success', 'Profile updated.');
    }


    /**
     * Remove the specified resource from storage
     */
    public function destroy(Note $note)
    {
        $note->delete();

        return redirect('/ticker-profiles')->with('message', 'The note was deleted!');
    }
}
