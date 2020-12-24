<?php

namespace App\Middleware;

class IndexMiddleware extends \QApi\Http\MiddlewareHandler
{

    public function handle(\QApi\Request $request, \QApi\Response $response, \Closure $next): \QApi\Response
    {
        $request->get['world'] = 'world';
        return $next($request, $response);
    }
}