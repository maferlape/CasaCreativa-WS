<div id="modal" class="hide">
    <div class="content">

        <h1>Nueva Idea</h1>

        <form action="" method="POST">
            <div class="input-wraper">
                <label for="title">Titulo de la idea</label>
                <input type="text" name="title" required>
            </div>

            <div class="input-wraper">
                <label for="categoria">Categoria</label>
                <input type="text" name="category" required>
            </div>

            <div class="input-wraper">
                <label for="imagen">Link de las Imagenes</label>
                <input type="text" name="image" required>
            </div>

            <div class="input-wraper">
                <label for="descripcion">Digite una descripción para esa idea</label>
                <textarea name="description" id="" cols="30" rows="10" required></textarea>
            </div>

            <div class="input-wraper">
                <label for="link">Link de la idea</label>
                <input type="text" name="link" required>
            </div>

            <a href="" onclick="onOff()">Regresar</a>

            <button>Enviar idea</button>

        </form>

    </div>