<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::group(['prefix' => 'user'],function(){
    Route::post('/register', 'Api\Teacher\AccountController@register');
    Route::post('/login', 'Api\Teacher\AccountController@login');
 });

Route::group( ['prefix' => 'user','middleware' => ['auth:user-api','scopes:user'] ],function(){
    // Route::get('/user', 'Api\Teacher\AccountController@details');
    Route::get('/user', function (Request $request) { return $request->user(); });
});
