<?php

namespace App\Middleware;

use QApi\Http\MiddlewareInterface;

class IndexMiddleware implements MiddlewareInterface
{
    public function handle(\QApi\Request $request, \QApi\Response $response, \Closure $next): \QApi\Response|\Closure
    {
        $request->get['world'] = 'world';
        return $next;
    }
}