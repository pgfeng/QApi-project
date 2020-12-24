<?php


namespace App\V100;


use App\Middleware\IndexMiddleware;
use QApi\Attribute\Route;
use QApi\Http\Request\MethodsEnum;
use QApi\Request;
use QApi\Response;

#[Route(middleware: IndexMiddleware::class)]
class IndexController
{
    #[Route('/', methods: MethodsEnum::METHOD_GET)]
    public function indexAction(Request $request, Response $response): Response
    {
        return $response->setData('hello ' . $request->get['world'] . '!');
    }
}