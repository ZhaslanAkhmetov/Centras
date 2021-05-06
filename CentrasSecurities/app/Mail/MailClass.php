<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class MailClass extends Mailable
{
    use Queueable, SerializesModels;

    protected $name;
    protected $surname;
    protected $phone;
    protected $email;


    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($name, $surname, $phone, $email)
    {
        $this->name = $name;
        $this->surname = $surname;
        $this->phone = $phone;
        $this->email = $email;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->from('kupipolis@cic.kz')
                    ->view('email.contact-mail')
            ->with([
                'name' => $this->name,
                'surname' => $this->surname,
                'phone' => $this->phone,
                'email' => $this->email,
            ])
            ->subject('Новая заявка на звонок');
    }
}
