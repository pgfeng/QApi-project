<?php


namespace App\V100;


use QApi\Request;
use QApi\Response;

class IndexController
{
    public function indexAction(Request $request, Response $response)
    {
        return $response->setData('hello world!');
    }
}