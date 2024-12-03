$(document).ready(function () {
    
    //Captura o evento de envio do formulário
    //executa seguinte função ao submeter
    $('form').on('submit', function (event){
        event.preventDefault()

        const name = $('#name').val()
        const email = $('#email').val()
        const gender = $('input[name="form-genero"]:checked').val()
        const disponibility = []
        
        // Corrige captura de valores dos checkboxes
        $('input[type="checkbox"]:checked').each(function () {
            disponibility.push($(this).parent().text().trim());
        });

        //Se não existir cria tabela
        if($('#userTable').length ===0){
            $('body').append(`
                <section id="table-section">
                    <h2>Dados do formulário</h2>
                    <table id="userTable" border="1">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Email</th>
                                <th>Gênero</th>
                                <th>Disponibilidade</th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </section>
                `)
        }

        //Inserir dados
        $('#userTable tbody').append(`
            <tr>
                <td>${name}</td>
                <td>${email}</td>
                <td>${gender}</td>
                <td>${disponibility.join(', ') || 'Não informado'}</td>
            </tr>
        `)  
        
        //Mostrar tabela
        $('#table-section').show()

    }) 
});