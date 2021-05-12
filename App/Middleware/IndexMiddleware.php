<?php

namespace App\Middleware;

use QApi\Attribute\Parameter\GetParam;
use QApi\Http\MiddlewareInterface;

class IndexMiddleware implements MiddlewareInterface
{
    #[
        GetParam('world','文字描述','测试的文字描述!')
    ]
    public function handle(\QApi\Request $request, \QApi\Response $response, \Closure $next): \QApi\Response|\Closure
    {
        $request->get['world'] = 'world';
        return $next;
    }
}