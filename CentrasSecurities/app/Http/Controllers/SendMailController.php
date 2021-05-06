<?php

namespace App\Http\Controllers;

use App\Mail\MailClass;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

//use Illuminate\Support\Facades\Mail;

class SendMailController extends Controller
{


    public function send_form(Request $request){
        $name = $request->name;
        $surname = $request->surname;
        $phone = $request->phone;
        $email = $request->email;

        Mail::to('zakhmetov@cic.kz')->send(new MailClass($name, $surname, $phone, $email));

        return [
            'message' => 'Заявка отправлена'
        ];
    }
}

