<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes();

//AUTHENTICATED ZONE ROUTES PROTECTED BY AUTHENTICATION
Route::middleware('auth')
->namespace('Authenticated')
->name('authenticated')
->prefix('authenticated')
->group(function(){
    Route::get('/', 'DashboardController@index')->name('home');
});

//FRONT-OFFICE ROUTE
Route::get('{any?}', function () {
    return view('guests.home');
})->where('any','.*');

