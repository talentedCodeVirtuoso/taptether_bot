<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Deposit extends Model
{
    use HasFactory;

    // Specify the table name if it's not the plural of the model name
    protected $table = 'deposit';

    // Specify the primary key if it's not the default 'id'
    protected $primaryKey = 'id';

    // Specify the attributes that are mass assignable
    protected $fillable = [
        'token',
        'chat_id',
        'transaction_id',
        'username',
        'amount',
        'currency',
        'status',
        'start_date',
        'end_date'
    ];

    // Specify the attributes that should be cast to native types
    protected $casts = [
        'chat_id' => 'integer',
        'amount' => 'decimal:2',
        'start_date' => 'datetime',
        'end_date' => 'datetime',
        'status' => 'string',
    ];
}
