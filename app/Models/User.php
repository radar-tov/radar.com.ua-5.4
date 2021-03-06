<?php

namespace App\Models;

use App\ProductRate;
use Illuminate\Auth\Authenticatable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Auth\Passwords\CanResetPassword;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Contracts\Auth\CanResetPassword as CanResetPasswordContract;
use Laravelrus\LocalizedCarbon\Traits\LocalizedEloquentTrait;
use Illuminate\Notifications\Notifiable;
use App\Http\Controllers\Auth\MyResetPassword;

class User extends Eloquent implements AuthenticatableContract, CanResetPasswordContract
{
    use Authenticatable, CanResetPassword, LocalizedEloquentTrait, Notifiable;

	const ADMIN_ID = 1; // for more security set -50 , for example
	const CUSTOMER_ID = 2;
	const GUEST_ID = 3;
    const MONTAJ_ID = 4;

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'users';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'thumbnail',
        'address',
        'phone',
        'phone_1',
        'phone_2',
        'phone_3',
        'active',
        'permissions',
        'country',
        'city',
        'organization',
        'phone_all',
        'comments',
        'role_id',
        'status'
    ];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = ['password', 'remember_token'];

    protected function setPasswordAttribute($password)
    {
        if(empty($password)) {
            unset($this->attributes['password']);
        } else {
            $this->attributes['password'] = bcrypt($password);
        }
    }


	public function customerGroups()
	{
		return $this->belongsToMany('App\Models\CustomerGroup');
	}

	public function isAdmin()
	{
		if($this->role_id == self::ADMIN_ID || $this->permissions == -5) {
			return true;
		}

		return false;
	}

	public function isCustomer()
	{
		if($this->role_id == self::CUSTOMER_ID) {
			return true;
		}

		return false;
	}

    public function isMONTAJ()
    {
        if($this->role_id == self::MONTAJ_ID) {
            return true;
        }

        return false;
    }


	public function orders()
	{
		return $this->hasMany(Order::class)->orderBy('id','desc');
	}


	public function rates()
	{
		return $this->belongsToMany(ProductRate::class, 'product_rate_product');
	}

	public function getFullName()
	{
		return $this->attributes['name'];
	}


	public function reviews()
	{
		return $this->hasMany(Review::class);
	}

    /**
     * Send the password reset notification.
     *
     * @param  string  $token
     * @return void
     */
    public function sendPasswordResetNotification($token)
    {
        $this->notify(new MyResetPassword($token));
    }

}
