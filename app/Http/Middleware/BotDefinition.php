<?php

namespace App\Http\Middleware;

use Closure;

class BotDefinition
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $bots = array(
            'rambler','googlebot','aport','yahoo','msnbot','turtle','mail.ru','omsktele',
            'yetibot','picsearch','sape.bot','sape_context','gigabot','snapbot','alexa.com',
            'megadownload.net','askpeter.info','igde.ru','ask.com','qwartabot','yanga.co.uk',
            'scoutjet','similarpages','oozbot','shrinktheweb.com','aboutusbot','followsite.com',
            'dataparksearch','google-sitemaps','appEngine-google','feedfetcher-google',
            'liveinternet.ru','xml-sitemaps.com','agama','metadatalabs.com','h1.hrn.ru',
            'googlealert.com','seo-rus.com','yaDirectBot','yandeG','yandex',
            'yandexSomething','Copyscape.com','AdsBot-Google','domaintools.com',
            'Nigma.ru','bing.com','dotnetdotcom','bot', 'Yandex\/1.01.001', 'YandexMetrika',
            'YandexMarket', 'spider', 'crawler', 'Mediapartners-Google', 'WordPress', 'Xap',
            'LWP', 'TNX', 'META',  'SISTRIX', 'Yandex\/2.01.000', 'Deepnet Explorer', 'XMPP',
            'Yahoo! Slurp', '\/search?', 'Mail.Ru\/1.0', 'InfoPath', 'feedfetcher', 'Feedfetcher',
            'Yandex.Commerce.Pinger'
        );

        if(!$request->session()->has('bot')){
            foreach($bots as $bot){
                if(stripos($_SERVER['HTTP_USER_AGENT'], $bot) !== false){
                    $_ENV['BOT'] = true;
                    break;
                }else{
                    $_ENV['BOT'] = false;
                }
            }
            $request->session()->put('bot', $_ENV['BOT']);
        }


        return $next($request);
    }
}
