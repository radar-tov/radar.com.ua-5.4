<?php

namespace App\Http\Controllers\Auth;

use App\Events\UserHasLoggedIn;
use App\Http\Requests\RegistrationRequest;
use App\Models\User;
use Gloudemans\Shoppingcart\Facades\Cart;
//use GuzzleHttp\Psr7\Request;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\URL;
use Validator;
use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\ThrottlesLogins;
use Illuminate\Foundation\Auth\AuthenticatesAndRegistersUsers;

class AuthController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Registration & Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users, as well as the
    | authentication of existing users. By default, this controller uses
    | a simple trait to add these behaviors. Why don't you explore it?
    |
    */

    use AuthenticatesAndRegistersUsers, ThrottlesLogins;

    protected $redirectPath = '/dashboard/index';
    protected $username = 'phone';

    /**
     * Create a new authentication controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest', ['except' => 'getLogout']);
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'phone' => 'required|max:255|unique:users,phone',
            'name' => 'required|max:255',
            'password' => 'required|confirmed|min:6',
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return User
     */
    protected function create(array $data)
    {
        return User::create([
            'name' => $data['name'],
            'phone' => $data['phone'],
            'password' => $data['password'],
        ]);
    }

	public function postLogin(Request $request)
	{
	    if($request->email == ''){
	        $this->username = 'phone';
        }else{
            $this->username = 'email';
        }

		$this->validate($request, [
			$this->loginUsername() => 'required', 'password' => 'required',
		]);

		// If the class is using the ThrottlesLogins trait, we can automatically throttle
		// the login attempts for this application. We'll key this by the username and
		// the IP address of the client making these requests into this application.
		$throttles = $this->isUsingThrottlesLoginsTrait();

		if ($throttles && $this->hasTooManyLoginAttempts($request)) {
			return $this->sendLockoutResponse($request);
		}

		$credentials = $this->getCredentials($request);

		if (Auth::attempt($credentials, $request->has('remember'))) {
			event(UserHasLoggedIn::class);
			if(URL::previous() == url('auth/login')){
				return $this->handleUserWasAuthenticated($request, $throttles);
			} else {
				return redirect()->back();
			}


		}

		// If the login attempt was unsuccessful we will increment the number of attempts
		// to login and redirect the user back to the login form. Of course, when this
		// user surpasses their maximum number of attempts they will get locked out.
		if ($throttles) {
			$this->incrementLoginAttempts($request);
		}



		return redirect()->back()
			->withInput($request->only($this->loginUsername(), 'remember'))
			->withErrors([
				$this->loginUsername() => $this->getFailedLoginMessage(),
			]);
	}

	public function getLogout()
	{
		Auth::logout();
		event(UserHasLoggedIn::class);
		return redirect()->back();
	}


	public function postRegister(RegistrationRequest $request)
	{
		$validator = $this->validator($request->all());
		if ($validator->fails()) {
			$this->throwValidationException(
				$request, $validator
			);
		}


		Auth::login(User::create($request->all()));

		//return redirect($this->redirectPath());
        return redirect()->back();
	}

}
