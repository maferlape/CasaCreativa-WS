{% extends "layout.html"%}

{% block title %}

<title>Ideas-Casa Creativa</title>

{%endblock%}

<!-- id del body -->
{% set bodyId = "page-idea" %}

{% block content %}
        
    <header>
        <a href="/">
            <img src="CASACRIATIVA.png" alt="logo de la empresa">
        </a>

        <nav>
            <li><a href="/">Inicio</a></li>
            <li><a href="#" onclick="onOff()">Nova Idea</a></li>
        </nav>
    </header>

    <section class="title">
        <p>En exhibición</p>

        <h1>Ideas</h1>
    </section>

    <main>

        <section id="last-ideas">
    
            {%include 'all_ideas.html'%}

        </section>

    </main>

    <footer>
        Con <span class="corazon">❤</span>  <a href="http://rocketseat.com.br" target="_blank">Rocketseat</a>
    </footer>


{% endblock %}

