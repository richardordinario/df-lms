<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::group(['prefix' => 'teacher'],function(){
    Route::post('/register', 'Api\Teacher\AccountController@register');
    Route::post('/login', 'Api\Teacher\AccountController@login');
 });

Route::group( ['prefix' => 'teacher','middleware' => ['auth:teacher-api','scopes:teacher'] ],function(){
    Route::get('/logout', 'Api\Teacher\AccountController@logout');
    Route::get('/user', function (Request $request) { return $request->user(); });

    Route::resource('/account', 'Api\Teacher\AccountController');

});
