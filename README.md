# 🏎️ Code & Furious

*"A família não se escolhe, ela se conquista."*

Landing page temática inspirada na franquia **Velozes & Furiosos**, misturando o universo dos filmes com o vocabulário de programação (versões, deploy, refatoração, push para main...). Desenvolvida como avaliação da disciplina de **Programação para Internet** no curso de Tecnologia em Análise e Desenvolvimento de Sistemas (IFSC), usando **HTML, CSS e JavaScript puro**, sem frameworks.

## ✨ Funcionalidades

- **Header fixo** com navegação por âncoras e menu responsivo (hambúrguer no mobile)
- **Modo claro/escuro** com troca de ícone e preferência salva no `localStorage`
- **Carrossel no hero** com 5 slides, setas de navegação e troca automática a cada 6 segundos
- **Cronologia dos filmes** (v1.0 a v7.0) com carro em destaque, local, missão e curiosidades. A imagem estática vira GIF ao passar o mouse
- **Estatísticas da franquia** em cards
- **Seção "Entrar para a Família"** com os valores da equipe
- **Formulário de contato** (nome, e-mail e mensagem)
- **Layout responsivo** com breakpoints para telas menores

## 🗂️ Estrutura

```
Code-Furious/
├── index.html
├── css/
│   └── style.css        # Estilos, variáveis de tema (claro/escuro) e media queries
├── js/
│   └── script.js        # Menu mobile, carrossel e troca de tema
└── img/
    ├── inicio/          # Imagens do carrossel
    └── cronologia/      # Imagens (.jpg) e GIFs da linha do tempo
```

## 🛠️ Tecnologias

- HTML5
- CSS3 (variáveis CSS, Flexbox, Grid, media queries)
- JavaScript (DOM, eventos, `setInterval`, `localStorage`)
- [Phosphor Icons](https://phosphoricons.com/) (ícones)
- [Google Fonts](https://fonts.google.com/specimen/Inter) (fonte Inter)

## ▶️ Como executar

Não precisa instalar nada. Clone o repositório e abra o `index.html` no navegador:

```bash
git clone https://github.com/Tioski/Code-Furious.git
cd Code-Furious
```

Depois é só abrir o `index.html` com duplo clique, ou usar a extensão **Live Server** no VS Code.

> Os ícones e a fonte são carregados via CDN, então é preciso estar conectado à internet para aparecerem corretamente.

## ⚠️ Limitações

- O formulário de contato é apenas visual: o envio está desativado e nada é enviado a lugar nenhum
- As estatísticas e os textos são informativos e não vêm de nenhuma fonte de dados


---

Feito por [Tioski](https://github.com/Tioski) 💻
