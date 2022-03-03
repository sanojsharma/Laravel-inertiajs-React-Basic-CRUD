<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Secrete extends Model
{
    use HasFactory;

    protected $fillable = ['name','username','category','password','secure_notes'];

}
