import React from 'react';
import {renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Routes from '../Routes';

// 分装render函数
export const render = (req) => {

    const content = renderToString(
        <StaticRouter location={req.path} context={{}}>
            {Routes}
        </StaticRouter>
    );

    return `
    <html>
        <head>
            <title>react-ssr-dom</title>
            <body>
                <div id="root">${content}</div>
                <script src="/index.js"></script>
            </body>
        </head>
    </html>`


}