<?php

use Illuminate\Support\Facades\Route;

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

Route::get('/', function () {
    return view('welcome');
});

Route::get('login', function () {
    return view('login');
});

Route::get('student/{vue_capture?}', function () {
    return view('admin');
})->where('vue_capture', '[\/\w\.-]*');

Route::get('teacher/{vue_capture?}', function () {
    return view('teacher');
})->where('vue_capture', '[\/\w\.-]*');

Route::get('admin/{vue_capture?}', function () {
    return view('admin');
})->where('vue_capture', '[\/\w\.-]*');
