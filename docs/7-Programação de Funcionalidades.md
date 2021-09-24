# Programação de Funcionalidades

Nesta seção é apresentada a tela Home-Page e apenas uma das funcionalidades do sistema. O respectivo endereço (URL) e outras orientações de acesso são apresentadas na sequência. 

## Visualização da tela de Home-Page

A tela principal apresenta diversas funcionalidades que estarão descritas separadamente nas próximas visualizações de telas, na Home-Page temos estruturas de dados baseada em HMTL e CSS. Exemplo da tela Home-Page:

![homepage](/img/tela_home_page.png)

### Artefatos da funcionalidade 

index.html

script_indexRealoca

style.css

realoca+_logo.png 

### Estrutura de Dados 
 
     <span>
     <button class="btnvagas" type="button"><a class="btn" href="vagas.html">Mais Vagas <i class="fas fa-search"></i></button></a>
     </span>
     <div class="container">
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
          aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
          aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
          aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="/img/img_car_01.jpg" class="d-block w-100" alt="foto1">
          <div class="carousel-caption d-none d-md-block">
            <h5>Melhor idade no mercado de Trabalho</h5>
            <p>Estamos aqui para realocar você ao mercado de trabalho.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="/img/img_car_02.jpg" class="d-block w-100" alt="foto2">
          <div class="carousel-caption d-none d-md-block">
            <h5>Fácil, intuitivo e a sua cara.</h5>
            <p>Nossa plataforma irá ajuda-lo com as melhores opções para você.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="/img/fotoat8.jpg" class="d-block w-100" alt="foto3">
          <div class="carousel-caption d-none d-md-block">
            <h5>Aréa de trabalho.</h5>
            <p>A pessoa pode continuar na mesma area de conhecimento ou procurar novos campos.</p>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    </div>
    <div id="lista-vagas">
    </main>
    </div>

### Instruções de acesso 

1.	Abra um navegador de Internet e informe a URL https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2021-1-e1-proj-web-t5-ta-punk/src/indexRealoca+.html
2.	Abrirá a página inicial do site.



## Visualização da tela de Login (RF-05)

O acesso a tela de Login poderá ser realizado nas demais telas do sistema através do menu “Entrar”, as estruturas dados foram baseadas em HMTL e CSS. Exemplo da tela Login:

![login](/img/tela_login1.png)

### Requisitos atendidos 

RF-05  


### Artefatos da funcionalidade 

index.html 

script_indexRealoca 

style.css 

realoca+_logo.png 

### Estrutura de Dados 

     <aside class="autenticacao"> 

     <a href="loginRealoca.html">Entrar</a> 

     <a href="#" class="botao destaque">Registrar</a> 

     </aside> 

### Instruções de acesso 

1.	Abra um navegador de Internet e informe a URL https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2021-1-e1-proj-web-t5-ta-punk/src/indexRealoca+.html
2.	No canto superior esquerdo da tela, clica em entrar, onde o usuário é redirecionado para a tela de login essa é a primeira funcionalidade exibida pelo site.



## Visualização de vagas em destaque na Home-Page (RF-01/04)

Na tela principal são apresentadas algumas vagas em destaque, com estruturas dados baseada em HMTL, CSS e JSON (Modal). Um exemplo do modal aberto:

![Vagas em destaque](/img/tela_vagas_destaque.png)

### Requisitos atendidos 

RF-01

RF-04

### Artefatos da funcionalidade 

index.html 

script_indexRealoca 

style.css 

realoca+_logo.png 

dbfake.js
 
### Estrutura de Dados 

    var prods = '';
      for (i = 0; i < db.dados.length; i++) {
        var dado = db.dados[i]
        prods += `<div type="button" class="btn meubotao btn-info" data-toggle="modal" data-target="#vaga_${i}">
    ${dado.titulo}
    </div>
    <div class="modal fade" id="vaga_${i}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">${dado.empresa}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
           <p> Descricao : ${dado.descricao_breve}</p>
           <p>Tipo: ${dado.tipo} </p>
            <p>Salario: ${dado.salario}</p>
            <p>Requisitos: ${dado.requisitos}</p>
            <p>Beneficios: ${dado.beneficios}</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
          <button type="button" class="btn btn-primary">Cadastrar</button>
        </div>
      </div>
    </div>
    </div>` ;
      }
      document.getElementById('lista-vagas').innerHTML = prods;
    }

### Instruções de acesso  

1.	Abra um navegador de Internet e informe a URL https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2021-1-e1-proj-web-t5-ta-punk/src/indexRealoca+.html
2.	Na Home-Page você visualizará algumas vagas em destaque, ao clicar nelas e aberto um modal com descrições da vaga mais detalhada.




## Visualização da tela de cadastro (RF-03)

Em todas as telas será possível o usuário realizar o cadastro, a estruturas de dados utilizada foi baseada em HMTL e CSS. Exemplo da tela Cadastro: 

![cadastro](/img/tela_cadastro1.png)
![cadastro](/img/tela_cadastro2.png)

### Requisitos atendidos 

RF-03


### Artefatos da funcionalidade 

index.html 

script_indexRealoca 

style.css 

realoca+_logo.png  

### Estrutura de Dados 

    <form >

        <label for="campoNome" id="campoNomelabel">Nome</label>
        <input type="text"  class="formulario" id="campoNome" ></input><br>
        
        <label for="campoNascimento">Data de Nascimento</label>
        <input type="text" class="formulario" id="campoNascimento" placeholder="DD/MM/AAAA" ></input><br>   
        
        <label for="campoCidade">Cidade</label>
        <input type="text" class="formulario" id="campoCidade" ></input><br>

        <label for="campoEstado">Estado</label>
        <input type="text" class="formulario" id="campoEstado" ></input><br>
    
        <label for="campoPais">País</label>
        <input type="text" class="formulario" id="campoPais" ></input><br>

        <label for="campoCpf">CPF</label>
        <input type="text" class="formulario" id="campoCpf" ></input><br>

        <label for="campoTelefone">Telefone</label>
        <input type="text" class="formulario" id="campoTelefone" placeholder="(XX)XXXXX-XXXX"></input><br>

        <label for="campoEmail" >Email</label>
        <input type="text" class="formulario" id="campoEmail" ></input>

        <label for="campoSenha">Senha</label>
        <input type="password" class="formulario" id="campoSenha" ></input><br>

        <input type="button" class="botaoCadastrar" value="Cadastrar" id="botaoOk"></input>
        
          </form>
            <script src="cadastro.js"></script>
      </body>

### Instruções de acesso 

1.	Abra um navegador de Internet e informe a URL https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2021-1-e1-proj-web-t5-ta-punk/src/indexRealoca+.html 
2.	No canto superior à direita da tela, clicar no menu “cadastro”, onde o usuário é redirecionado para a tela de cadastro.
3.	Na tela de cadastro ele irá preencher as lacunas conforme requisitado pelo site




## Visualização da tela informações sobre a empresa (RF-10) 

Em todas as telas será possível o usuário acessa a tela de “Sobre, a estruturas de dados utilizada foi baseada em HMTL e CSS. Exemplo da tela Sobre:  

![Sobre](/img/tela_sobre.png)

### Requisitos atendidos 

RF-10

### Artefatos da funcionalidade 

index.html 

script_indexRealoca 

style.css 

realoca+_logo.png 

### Estrutura de Dados 

    <aside class="autenticacao">  <div class="row">
            <section id="sobre">
                <article>
                    <h2 class="subtitulo">Nossa Empresa, o seu Jeito!</h2>
                    <p id="escrita">Fundada...</p>
                    <h2 class="subtitulo">Missão</h2>
                    <p id="escrita">Nossa...</p>
                </article>
            </section>
        </div>

### Instruções de acesso 
1.	Abra um navegador de Internet e informe a URL https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2021-1-e1-proj-web-t5-ta-punk/src/indexRealoca+.html 
2.	No canto superior da tela, clique no menu Sobre, onde o usuário é redirecionado para outra tela que encontrará informações sobre a empresa Realoca+.




## Visualização da tela entre em contato (RF-11) 

Em todas as telas será possível o usuário acessa a tela de “Contato”, a estruturas de dados utilizada foi baseada em HMTL e CSS. Exemplo da tela Contato:

![Contato](/img/tela_contato.png)

### Requisitos atendidos 

RF-11

### Artefatos da funcionalidade 

index.html 

script_indexRealoca 

style.css 

realoca+_logo.png 

### Estrutura de Dados 

    <div class="row">
        <form action="https://api.staticforms.xyz/submit" method="POST" class="card">
            <input type="hidden" name="accessKey" value="4d597805-e162-4da4-b97d-72f202a054b4">
            <input type="hidden" name="redirectTo" value="http://127.0.0.1:5500/src/indexRealoca+.html">
            <h2>Entre em contato conosco</h2>
            <label form="inputNome">Nome</label>
            <input type="text" id="inputNome" name="name" required>
            <label form="inputEmail">Endereço de Email</label>
            <input type="email" id="inputEmail" name="email" required>
            <label form="texteareaMensagem">Mensagem</label>
            <textarea name="message" id="texteareaMensagem" required></textarea>
            <button>Enviar Mensagem</button>
        </form>
    </div>
 
### Instruções de acesso 

1.	Abra um navegador de Internet e informe a URL https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2021-1-e1-proj-web-t5-ta-punk/src/indexRealoca+.html
2.	No canto superior da tela, clique no menu Contato, onde o usuário é redirecionado para outra tela onde ele digitará nome, endereço de e-mail e a mensagem a ser reportada a empresa Realoca+
3.	Clicando em enviar mensagem automaticamente retorna para Home-Page.




## Visualização da tela vagas disponíveis (RF- 01/04) 

Na tela principal do sistema apresenta um menu com “mais vagas” que redireciona para a tela de vagas disponíveis através da Home-Page, utilizado estruturas de dados baseada em HMTL e CSS. Um exemplo da tela Mais vagas: 


![Vagas disponíveis](/img/tela_mais_vagas.png)

### Requisitos atendidos 

RF-01

RF-04

### Artefatos da funcionalidade 

index.html 

script_indexRealoca 

style.css 

realoca+_logo.png 

### Estrutura de Dados 

           <div class="container">
        <ul class="caixas">
            <li> <div class="titulo">Porteiro</div><p class="dizeres">Período: Manhã, Tarde e Noite.<br>Necessita Experiência.<br> Vale Refeição. <br> Salario a Combinar</p></li>
            <li> <div class="titulo">Auxiliar de Serviços Gerais</div><p class="dizeres">PerÍodo: Integral.<br> Não Necessita de Experiência.<br> Salário: R$ 1.800,00<br></p></li>
            <li> <div class="titulo">Enfermeiro</div><p class="dizeres">Período: Integral.<br>Curso Superior.<br>Necessita Experiência.<br>Salário: R$ 2.200,00.</p></li>
            <li> <div class="titulo">Caminhoneiro</div><p class="dizeres">Período: Integral<br>Necessita Experiência.<br>Salario: Depende do Frete.</p></li>
            <li> <div class="titulo">Pedreiro</div><p class="dizeres">Período: Integral.<br>Necessita Experiência e Referência.<br>Salario: R$ 2.500,00.</p></li>
            <li> <div class="titulo">Professor</div><p class="dizeres">Período: Matutino.<br>Curso Superior.<br>Necessita Experiência.<br>Salário: R$ 2.500,00</p></li>
            <li> <div class="titulo">Jardineiro</div><p class="dizeres">Período: Manhã e Tarde.<br>Necessita Experiência.<br>Salário: R$ 1.800,00</p></li>
            <li> <div class="titulo">Cuidadora</div><p class="dizeres">Período: Integral.<br>Curso Técnico de Enfermagem.<br>Necessita Experiência.<br>Salário: R$2.400,00</p></li>
            <li> <div class="titulo">Manicure</div><p class="dizeres">Período: Manhã e Tarde.<br>Necessita Experiência.<br>Salário:R$ 1.950,00</p></li>
            <li> <div class="titulo">Cabeleleira</div><p class="dizeres">Período: Manhã e Tarde.<br>Necessita Experiência.<br>Salário R$ 2.200,00.</p></li>
            <li> <div class="titulo">Piscineiro</div><p class="dizeres">Período: Manhã.<br>Necessita Experiência Compovada.<br>Salário: R$ 1.800,00</p></li>
            <li> <div class="titulo">Eletricista</div><p class="dizeres">Período: Integral.<br>Curso Técnico.<br>Necessita Experiência.<br>Salário: R$ 2.300,00.</p></li>
        </ul>
    </div>
    
    </main>
    
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"
        integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
        crossorigin="anonymous"></script>

### Instruções de acesso 

1.	Abra um navegador de Internet e informe a URL https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2021-1-e1-proj-web-t5-ta-punk/src/indexRealoca+.html 
2.	No canto esquerdo da tela Home-Page, clique no menu “mais vagas”, onde o usuário é redirecionado para a tela de Mais vagas.

