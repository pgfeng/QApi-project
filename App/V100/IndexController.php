<?php


namespace App\V100;


use App\Middleware\IndexMiddleware;
use QApi\Attribute\Parameter\GetParam;
use QApi\Attribute\Route;
use QApi\Http\Request\MethodsEnum;
use QApi\Request;
use QApi\Response;

#[Route(middleware: IndexMiddleware::class, tag: 'hello')]
class IndexController
{
    #[
        Route('/', methods: MethodsEnum::METHOD_GET, summary: 'Hello world'),
        GetParam('hello', '文字', '测试的描述信息', 'string', false, 'hello')
    ]
    public function indexAction(Request $request, Response $response): Response
    {
        return $response->setData($request->get->get('hello') . ' ' . $request->get['world'] . '!');
    }
}