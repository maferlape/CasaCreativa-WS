<!DOCTYPE html>
<html lang="en">

    <head>
        {% include 'head.html'%}
        {% block title %} {%endblock%}
    </head>

    <!-- id del body idea.html -->
    <body id="{{bodyId}}"> 

        <div id="container">

            {% block content %}
            {% endblock %}

        </div>

        {%include 'modal.html'%}

        <script src="/script.js"></script>
        
    </body>
</html>