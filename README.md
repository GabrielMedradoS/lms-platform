### lms-plataform

<p align='center'>
<b height="50%" width="50%"></b>
</p>

<p align="center">
    <img alt="Platform" src="https://img.shields.io/static/v1?label=Platform&message=PC/Mobile&color=0369a1&labelColor=f0f9ff">
    <img alt="project name" src="https://img.shields.io/badge/lms-plataform-0369a1?&labelColor=f0f9ff"></img>    
    <img alt="Repository size" src="https://img.shields.io/github/repo-size/GabrielMedradoS/lms-platform?color=0369a1&labelColor=f0f9ff">
    <img alt="GitHub Last Commit" src="https://img.shields.io/github/last-commit/gabrielmedrados/lms-platform?&color=0369a1&labelColor=f0f9ff">    
    <a href="">
        <img alt="License" src="https://img.shields.io/static/v1?label=License&message=MIT&color=0369a1&labelColor=f0f9ff">
    </a>
</p>

<p align="center">
    <a href="#-objetivo">Objetivo</a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-features">Features</a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-demonstração">Demonstração</a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-tecnologias">Tecnologias</a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-documentação">Documentação</a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="LICENSE">License</a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-autor">Autor</a> 
</p>

## 📷 Layout

#### Screenshot:

<div align='center'>
🚧 Under construction 🚧
</div>

## 🎯 Objetivo

<div align="justify">
    (Learning Management System) <br>
    O objetivo é criar uma plataforma interativa de criação de cursos disponibilizado por professores
    onde os alunos poderão acessar o curso de seu interesse e aprender diretamente do site com video aulas disponibilizados pelo professor criador do curso e seus administradores.
    A ideia é facilitar o aprendizado à distância criando um software robusto e de fácil acesso/aprendizado, com uma metodologia didática e diversos cursos de treinamento tanto para o professor quanto para o aluno
</div>

## ✨ Features

- [x] criação de cursos imediata
- [x] criação de diversos cursos com capítulos
- [x] Interação do aluno através de um caminho para completar o curso
- [x] autenticação de usuários
- [x] plataforma interativa
- [x] responsividade
- [x] formulários direto na plataforma
- [x] uso do UploadThing permite uma customização maior em uploads de videos, imagens e arquivos
- [x] Controle de viewers e Integração de vídeos usando MUX
- [x] Integração com API de pagamentos Stripe

## 💻 Demonstração:

<div align='center'>
🚧 Under construction 🚧
</div>

## 🚴🏻‍♂️ Rodar o projeto

Para baixar o código-fonte do projeto em sua máquina, primeiramente terá que ter instalado o [**Git**](https://git-scm.com/).
Com o Git instalado, em seu terminal execute o seguinte comando:

```bash
git clone https://github.com/GabrielMedradoS/lms-platform.git
```

Para instalar as dependências e executar o projeto terá que ter instalado em sua máquina o [**node.js**](https://nodejs.org/en/), que vem acompanhado do npm.

> Nesse projeto foi utilizado o [**pnpm**](https://pnpm.io/), que busca economizar espaço em disco e acelerar a instalação de pacotes devido à sua abordagem de armazenamento de dependências compartilhado.

Instale as dependências usando **pnpm** ou **npm**:

```bash
# pnpm
pnpm install
```

```bash
# npm
npm install
```

Crie o arquivo .env com as variáveis de ambiente necessárias:

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="Sua Next/Clerk chave"
CLERK_SECRET_KEY="Sua chave Clerk"
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
DATABASE_URL="Seu banco de dados"
UPLOADTHING_SECRET= "UploadThing SECRET"
UPLOADTHING_APP_ID= "UploadThing ID"
NEXT_PUBLIC_APP_URL=http://localhost:3000
MUX_TOKEN_ID="MUX ID"
MUX_TOKEN_SECRET="MUX SECRET"
STRIPE_KEY="STRIPE KEY"
STRIPE_WEBHOOK_SECRET="STRIPE WEBHOOK SECRET"
```

Execute o projeto:

```bash
# pnpm
pnpm run dev
```

```bash
# npm
npm run dev
```

O servidor estará disponível em http://localhost:3000.

## 🛠 Tecnologias

![My Skills](https://skillicons.dev/icons?i=ts,react,nodejs,tailwind)

## 📜 Documentação

#### 👇 Clique para ver as Dependências do projeto

<details>
    <summary>Dependencies</summary>

```json
{
  "name": "lms-plataform",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@clerk/nextjs": "^4.29.7",
    "@hello-pangea/dnd": "^16.6.0",
    "@hookform/resolvers": "^3.6.0",
    "@mux/mux-node": "^8.8.0",
    "@mux/mux-player-react": "^3.1.0",
    "@prisma/client": "^5.16.1",
    "@radix-ui/react-alert-dialog": "^1.1.2",
    "@radix-ui/react-checkbox": "^1.1.1",
    "@radix-ui/react-dialog": "^1.1.1",
    "@radix-ui/react-dropdown-menu": "^2.1.3",
    "@radix-ui/react-label": "^2.1.0",
    "@radix-ui/react-popover": "^1.1.1",
    "@radix-ui/react-progress": "^1.1.2",
    "@radix-ui/react-separator": "^1.1.2",
    "@radix-ui/react-slot": "^1.0.2",
    "@tanstack/react-table": "^8.20.6",
    "@uploadthing/react": "^6.7.2",
    "axios": "^1.7.2",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.0",
    "cmdk": "^1.0.0",
    "lucide-react": "^0.307.0",
    "next": "14.0.4",
    "query-string": "^9.1.1",
    "react": "^18",
    "react-confetti": "^6.1.0",
    "react-dom": "^18",
    "react-hook-form": "^7.52.0",
    "react-hot-toast": "^2.4.1",
    "react-icons": "^5.4.0",
    "react-quill": "^2.0.0",
    "recharts": "^2.15.1",
    "stripe": "^17.7.0",
    "tailwind-merge": "^2.2.0",
    "tailwindcss-animate": "^1.0.7",
    "uploadthing": "^6.13.2",
    "zod": "^3.23.8",
    "zustand": "^5.0.1"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "autoprefixer": "^10.0.1",
    "eslint": "^8",
    "eslint-config-next": "14.0.4",
    "postcss": "^8",
    "prisma": "^5.16.1",
    "tailwindcss": "^3.3.0",
    "typescript": "^5"
  }
}
```

</details>

- [Next.js 13 | documentation](https://nextjs.org/docs)
- [shadcn/ui | documentation](https://ui.shadcn.com/)
- [Tailwind | documentation](https://tailwindcss.com/docs/installation/using-postcss)
- [React Hot Toast](https://react-hot-toast.com/)
- [React Hook Form](https://www.npmjs.com/package/react-hook-form)
- [Axios | documentation](https://axios-http.com/ptbr/docs/intro)
- [UploadThing](https://uploadthing.com/)
- [Zustand](https://zustand.docs.pmnd.rs/)
- [React-confetti](https://www.npmjs.com/package/react-confetti)
- [Hello-pangea | drag-and-drop](https://github.com/hello-pangea/dnd/blob/main/docs/about/installation.md)
- [React Quill | Github](https://github.com/zenoamaro/react-quill)
- [React Icons](https://react-icons.github.io/react-icons/)
- [query-string](https://www.npmjs.com/package/query-string)
- [MUX](https://dashboard.mux.com/login)
- [Stripe](https://stripe.com/br)
- [Recharts](https://www.npmjs.com/package/recharts)

## 💡 Como contribuir

- Faça um **_fork_** desse repositório;
- Crie um **branch** para a sua feature: `git checkout -b minha-feature`;
- Faça um **commit** com suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça um **push** para o seu branch: `git push origin minha-feature`;
- Faça um **pull request** com sua feature;

Pull requests são sempre bem-vindos. Em caso de dúvidas ou sugestões, crie uma _**issue**_ ou entre em contato comigo.

## ⚖️ License

This project is under the MIT license. See the archive [LICENSE]() for more details.

## ✍🏾 Autor

| <a href="https://github.com/gabrielmedrados/"><img src="https://user-images.githubusercontent.com/73303001/126536001-655e3cbd-facd-4de1-992f-b8d9d3656ace.jpg" width="100" alt="perfil"/><br>
| :-------------------------: |
| <a href="https://github.com/gabrielmedrados/"> Gabriel Medrado |</a> |

[![Linkedin Badge](https://img.shields.io/badge/-GabrielMedrado-blue?style=flat-square&logo=Linkedin&logoColor=white)](https://www.linkedin.com/in/gabriel-medrado-de-souza-9a30b3206/)
[![Gmail Badge](https://img.shields.io/badge/-gabriel.medradoo@hotmail.com-1769ff?style=flat-square&logo=Gmail&logoColor=white)](mailto:gabriel.medradoo@hotmail.com)
