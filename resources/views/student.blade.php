<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Laravel</title>
        <link href="https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css" rel="stylesheet">
    </head>
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <body class="antialiased">
        <div id="app"></div>
        <script src="{{asset('js/student.js')}}"></script>
    </body>
</html>
