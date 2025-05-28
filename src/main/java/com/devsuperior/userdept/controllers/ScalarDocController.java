package com.devsuperior.userdept.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class ScalarDocController {

    @GetMapping("/docs")
    @ResponseBody
    public String scalarDocs() {
        return """
            <!DOCTYPE html>
            <html>
            <head>
                <title>User Department API Documentation</title>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </head>
            <body>
                <script
                    id="api-reference"
                    data-url="/v3/api-docs"
                    data-configuration='{"theme":"purple","layout":"modern","showSidebar":true}'
                ></script>
                <script src="https://cdn.jsdelivr.net/npm/@scalar/api-reference@latest"></script>
            </body>
            </html>
            """;
    }
}
