<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Input\InputArgument;
use App\Http\Controllers\Frontend\FrontendController;
use App\Http\Controllers\Frontend\InformationController;

class XMLSitemap extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'xmlsitemap';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Generation Sitemap.xml';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function fire()
    {

        //Sitemap для статических страниц
        $this->sitemapStaticPages();
        $this->sitemapStati();
        $this->sitemapCategories();

    }


    public function sitemapStaticPages()
    {

        //Sitemap для статических страниц
        $data = FrontendController::sitemapPages();

        $domDocument = new \DOMDocument('1.0', "UTF-8");
        $domDocument->formatOutput = true;
        $domElement = $domDocument->createElement('urlset');
        $domAttribute = $domDocument->createAttribute('xmlns');
        $domAttribute->value = 'http://www.sitemaps.org/schemas/sitemap/0.9';
        $domElement->appendChild($domAttribute);
        $domDocument->appendChild($domElement);

        //Для главной страницы
        $domElementUrl = $domElement->appendChild($domDocument->createElement('url'));
        $url = $domElementUrl->appendChild($domDocument->createElement('loc'));
        $url->appendChild($domDocument->createTextNode(url().'/'));

        foreach($data as $product){
            $domElementUrl = $domElement->appendChild($domDocument->createElement('url'));

            $url = $domElementUrl->appendChild($domDocument->createElement('loc'));
            $url->appendChild($domDocument->createTextNode(url().'/'.($product->slug)));

            $url = $domElementUrl->appendChild($domDocument->createElement('lastmod'));
            $date = new \DateTime($product->apdated_at);
            $url->appendChild($domDocument->createTextNode($date->format("Y-m-d")));

            $url = $domElementUrl->appendChild($domDocument->createElement('changefreq'));
            $url->appendChild($domDocument->createTextNode($product->changefreq));

            $url = $domElementUrl->appendChild($domDocument->createElement('priority'));
            $url->appendChild($domDocument->createTextNode($product->priority));

        }

        $domDocument->save('resources/views/frontend/sitemap/sitemap_page.blade.php');

    }


    public function sitemapStati()
    {

        //Sitemap для статей
        $data = InformationController::sitemapStati();

        $domDocument = new \DOMDocument('1.0', "UTF-8");
        $domDocument->formatOutput = true;
        $domElement = $domDocument->createElement('urlset');
        $domAttribute = $domDocument->createAttribute('xmlns');
        $domAttribute->value = 'http://www.sitemaps.org/schemas/sitemap/0.9';
        $domElement->appendChild($domAttribute);
        $domDocument->appendChild($domElement);

        //для списка статей
        $domElementUrl = $domElement->appendChild($domDocument->createElement('url'));
        $url = $domElementUrl->appendChild($domDocument->createElement('loc'));
        $url->appendChild($domDocument->createTextNode(url().'/stati'));

        foreach($data as $product){
            $domElementUrl = $domElement->appendChild($domDocument->createElement('url'));

            $url = $domElementUrl->appendChild($domDocument->createElement('loc'));
            $url->appendChild($domDocument->createTextNode(url().'/stati/'.$product->id.'/'.($product->slug)));

            $url = $domElementUrl->appendChild($domDocument->createElement('lastmod'));
            $date = new \DateTime($product->apdated_at);
            $url->appendChild($domDocument->createTextNode($date->format("Y-m-d")));

            $url = $domElementUrl->appendChild($domDocument->createElement('changefreq'));
            $url->appendChild($domDocument->createTextNode($product->changefreq));

            $url = $domElementUrl->appendChild($domDocument->createElement('priority'));
            $url->appendChild($domDocument->createTextNode($product->priority));

        }

        $domDocument->save('resources/views/frontend/sitemap/sitemap_stati.blade.php');

    }


    public function sitemapCategories()
    {

        //Sitemap для статей
        $data = FrontendController::sitemapCategories();

        $domDocument = new \DOMDocument('1.0', "UTF-8");
        $domDocument->formatOutput = true;
        $domElement = $domDocument->createElement('urlset');
        $domAttribute = $domDocument->createAttribute('xmlns');
        $domAttribute->value = 'http://www.sitemaps.org/schemas/sitemap/0.9';
        $domElement->appendChild($domAttribute);
        $domDocument->appendChild($domElement);

        foreach($data as $product){
            $domElementUrl = $domElement->appendChild($domDocument->createElement('url'));

            $url = $domElementUrl->appendChild($domDocument->createElement('loc'));
            $url->appendChild($domDocument->createTextNode(url().'/'.$product->slug));

            $url = $domElementUrl->appendChild($domDocument->createElement('lastmod'));
            $date = new \DateTime($product->apdated_at);
            $url->appendChild($domDocument->createTextNode($date->format("Y-m-d")));

//            $url = $domElementUrl->appendChild($domDocument->createElement('changefreq'));
//            $url->appendChild($domDocument->createTextNode($product->changefreq));
//
//            $url = $domElementUrl->appendChild($domDocument->createElement('priority'));
//            $url->appendChild($domDocument->createTextNode($product->priority));

        }

        $domDocument->save('resources/views/frontend/sitemap/sitemap_categories.blade.php');

    }
}
