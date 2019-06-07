//FORM

$(document).ready(function () {
    Dropzone.options.dropzoneImg = {
        autoProcessQueue: false,
        acceptedFiles: ".png, .jpg, .gif, .bmp, .jpeg",
        init: function () {
            var submitBtn = document.getElementById('submit')
            myDropzone = this;
            submitBtn.addEventListener('click', function () {
                myDropzone.processQueue()
            })
            this.on('complete', function () {
                if (this.getQueuedFiles().length == 0 && this.getUploadingFiles().length == 0) {
                    var _this = this;
                    _this.removeAllFiles()
                }
            })
        }
    }

    function show_image() {

        $.ajax({
            url: 'upload.php',
            success: function (data) {
                alert('imagem enviada com sucesso')
            }
        })

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

tippy('#capacitacao', {
    content: "Curso – Instituição – Data de conclusão - Carga horaria",
    placement: 'top',
})

tippy('#observacoes', {
    content: "Colocar informações relevantes à sua contratação e situação atual. Exemplo: disponibilidade para viagem, para mudar para outras regiões, carteira de motorista, experiências diversas importantes para a vaga em questão que a pessoa responsável gostaria de saber.",
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

var addCapacitacao = $('#adicionar_capacitacao')

addCapacitacao.click(function () {

    var capacitacao_row = document.getElementById('capacitacao_row')
    var num_inputs_capacitacao = capacitacao_row.querySelectorAll('input').length

    if (num_inputs_capacitacao < 5) {
        var nova_capacitacao = document.createElement('input')
        var capacitacao_div = document.createElement('div')
        capacitacao_div.className = 'col-md-8 my-2'
        nova_capacitacao.className = 'form-control'
        nova_capacitacao.placeholder = 'Curso – Instituição – Data de conclusão - Carga horária'
        nova_capacitacao.type = 'text'
        capacitacao_row.appendChild(capacitacao_div)
        capacitacao_div.appendChild(nova_capacitacao)
    } else {
        var limit_div = document.createElement('div')
        limit_div.className = 'alert alert-danger'
        limit_div.role = 'alert'
        limit_div.innerHTML = 'Limite de capacitações atingida!'
        capacitacao_row.appendChild(limit_div)
        addCapacitacao.attr('disabled', 'disabled')
    }

})

//PDF-PREVIEW

// var primeiro_nome = document.querySelector('#primeiro-nome')
// console.log(primeiro_nome)

// var email = document.querySelector('#email')
// console.log(email)

// var linkedin = document.querySelector('#linkedin')
// console.log(linkedin)

// var cidade = document.querySelector('#cidade')
// console.log(cidade)

// var segundo_nome = document.querySelector('#segundo-nome')
// console.log(segundo_nome)

// var celular = document.querySelector('#celular')
// console.log(celular)

// var telefone = document.querySelector('#telefone')
// console.log(telefone)

// var data_nascimento = document.querySelector('#data-nascimento')
// console.log(data_nascimento)

// var data_nascimento = document.querySelector('#data-nascimento')
// console.log(data_nascimento)

// var objetivo = document.querySelector('#objetivo')
// console.log(objetivo)

$('#submit').click(function () {
    $('#form :input').each(function () {
        console.log(this)
        let a = this.value
    })
    print(4)
})

function print(quality = 4) {
    const filename = 'cv.pdf';

    html2canvas(document.querySelector('#pdf-preview'),
        { scale: quality }
    ).then(canvas => {
        let pdf = new jsPDF('p', 'mm', 'a4');
        var width = pdf.internal.pageSize.getWidth();
        var height = pdf.internal.pageSize.getHeight();
        pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, width, height);
        pdf.save(filename);
    });
}



