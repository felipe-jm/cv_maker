$(document).ready(function () {
    Dropzone.options.dropzoneImg = {
        autoProcessQueue: false,
        acceptedFiles: ".png, .jpg, .gif, .bmp, .jpeg",
    }
})

tippy('#objetivo', {
    content: "O objetivo deve ser customizado para cada empresa e vaga. Ele deve transmitir ao avaliador que seu objetivo é o mesmo que o dele (aqui cabe você se colocar no outro lado da mesa e pensar o que seu empregador deseja de você). Caso esta informação não esteja adequada à descrição do perfil divulgado pela empresa de recrutamento, provavelmente seu currículo corre o risco de ser descartado.",
    placement: 'top',
})

tippy('#ultimos_trabalhos', {
    content: "Obs. - Sempre começar da última, com no máximo 3 empresas.",
    placement: 'top',
})

tippy('#cargo', {
    content: "Empresa – Data Início – Data Final – Contato na empresa (Nome e telefone)",
    placement: 'top',
})

tippy('#idiomas', {
    content: "Curso – Instituição – Data – Nível ou Idioma e Nível",
    placement: 'top',
})

tippy('#capacitacoes', {
    content: "Curso – Instituição – Data de conclusão - Carga horaria",
    placement: 'top',
})

var addCargo = $('#adicionar_cargo')

addCargo.click(function () {

    var cargos_row = document.getElementById('cargos_row')
    var num_inputs_in_cargos = cargos_row.querySelectorAll('input').length

    if (num_inputs_in_cargos < 3) {
        var novo_cargo = document.createElement('input')
        var cargo_div = document.createElement('div')
        cargo_div.className = 'col-md-8 my-2'
        novo_cargo.className = 'form-control'
        novo_cargo.placeholder = 'Empresa – Data Início – Data Final – Contato na empresa (Nome e telefone)'
        novo_cargo.type = 'text'
        cargos_row.appendChild(cargo_div)
        cargo_div.appendChild(novo_cargo)
    } else {
        var limit_div = document.createElement('div')
        limit_div.className = 'alert alert-danger'
        limit_div.role = 'alert'
        limit_div.innerHTML = 'Limite de cargos atingido!'
        cargos_row.appendChild(limit_div)
        addCargo.attr('disabled', 'disabled')
    }

})

var addIdioma = $('#adicionar_idioma')

addIdioma.click(function () {

    var idiomas_row = document.getElementById('idiomas_row')
    var num_inputs_idiomas = idiomas_row.querySelectorAll('input').length

    if (num_inputs_idiomas < 6) {
        var novo_idioma = document.createElement('input')
        var idioma_div = document.createElement('div')
        idioma_div.className = 'col-md-8 my-2'
        novo_idioma.className = 'form-control'
        novo_idioma.placeholder = 'Curso – Instituição – Data – Nível ou Idioma e Nível'
        novo_idioma.type = 'text'
        idiomas_row.appendChild(idioma_div)
        idioma_div.appendChild(novo_idioma)
    } else {
        var limit_div = document.createElement('div')
        limit_div.className = 'alert alert-danger'
        limit_div.role = 'alert'
        limit_div.innerHTML = 'Limite de idiomas atingido!'
        idiomas_row.appendChild(limit_div)
        addIdioma.attr('disabled', 'disabled')
    }

})



