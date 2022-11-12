# m2-entrega-rede-social-eriknegreiros

Desenvolvendo a Rede Social
Nossa aplicação será uma rede social, ao observar o Figma você notará que temos o layout disposto de forma bem parecida com a maioria das redes sociais, além das características visuais também teremos alguns comportamentos similares.

Comportamento visual do Header
Desenvolva o header de forma que o comportamento dele seja ao de acompanhar a tela do usuário quando o mesmo interagir com a página com scroll para baixo, ou seja, quando o usuário descer a página o header vai ter que acompanhá-lo, ou seja, deve se manter fixo no topo do documento.

Comportamento funcional do Header
Desenvolva no header três botões seguindo o figma, na qual terá como funcionalidade acionar modais de login, cadastro ou sair da conta.

Seguindo a seguinte lógica: caso o usuário esteja logado (existem token e/ou id validos no localStorage) irá aparecer o botão de sair. Caso o mesmo ainda não esteja logado, adicione os botões de cadastro e login.

Comportamento funcional do Dashboard
Além da criação de posts e fluides demostradas no gif da aplicação, será necessário algumas funcionalidades voltadas ao acesso.

Logado e deslogado
Desenvolva uma forma de apenas demostrar o dashboard como o gif, caso o usuário esteja logado na aplicação. Caso contrario, remova todos dos dados da página, apenas demostrando a imagem e a mensagem conforme o figma.

Seguidores
Utilizando os endpoints da API, desenvolva uma forma de contabilizar todos os seguidores que seguem o usuário logado.

likes
É possível dar likes nos posts, seguindo os endpoints da API, ao clicar no coração preto um like é adicionado aquele post e contabilizado na API. Desenvolva uma forma de ao clicar no ícone o mesmo mude para sua versão vermelha e contabilize na API, ao clicar novamente, agora o coração estando vermelho, deverá remover o like e o coração voltará a ficar preto. Atualize os números de likes em tempo real.

Comportamento visual do Aside
Desktop
No canto direito da tela teremos um bloco "Sugestões para você seguir", traduzindo para o HTML, um aside, onde terá uma lista de usuários, esse bloco terá que ter o mesmo comportamento do header, se mantendo fixo, porém, ao contrário do header ele não irá se manter fixo em relação ao body, mas em relação ao seu elemento pai, respeitando o posicionamento que o display do seu elemento pai determina.

Além disso, este elemento só ficará fixo somente se o seu elemento pai estiver visível no documento, caso o usuário vá para uma próxima seção que leve o seu elemento pai para cima, o aside ("Sugestões para você seguir"), deve subir junto.

Mobile
Deverá se conter abaixo dor formulário de criação de post, ao contrário da versão desktop, o aside não irá se manter fixo ao body. Mas deverá ser possível "esconder" o mesmo como demostrado no figma.

Comportamento funcional do Aside
No aside os botões terão as funcionalidades respectivas com a API, ao clicar em seguir adicione aquela conta a sua lista de seguindo pelo identificador único, da mesma forma ao clicarmos em seguindo o mesmo será removido da nossa lista de seguindo.

As contas que geralmente aparecem para você em uma rede social real, são baseadas em um algorítimo que define os melhores perfis para ti. Porém, no momento, faremos de uma forma mais simples, desenvolva uma lógica de a cada vez que a página recarregar, será demostrado para o usuário apenas 3 contas, totalmente randômica.

Caso o usuário já esteja seguindo aquela conta, demostre o mesmo com o botão de seguindo ativo.

Comportamento visual do Modal - Posts
Por fim, nossa aplicação terá um modal que deve mostrar todo o texto do post, observe que o Figma traz na página inicial da nossa aplicação somente uma parte limitada do conteúdo textual de um post e o texto completo no modal.

Desenvolva um modal que mostre o texto do post inteiro e que abra somente quando o usuário clicar no botão "Abrir Post".

Link: https://kenzie-academy-brasil-developers.github.io/m2-entrega-rede-social-eriknegreiros/index.html
