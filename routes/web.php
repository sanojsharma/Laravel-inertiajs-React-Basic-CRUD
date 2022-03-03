<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SecreteController;
use Inertia\Inertia;

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

Route::inertia('/', 'Welcome');
#Route::inertia('/secrete', 'Secrete');
Route::inertia('/secrete/add', 'Secrete/add');
Route::inertia('/contact', 'Contact');
Route::inertia('/setting', 'Setting');

Route::resource('secrete', SecreteController::class);


