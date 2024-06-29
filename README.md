### lms-plataform

<p align='center'>
<b height="50%" width="50%"></b>
</p>

<p align="center">
    <img alt="Platform" src="https://img.shields.io/static/v1?label=Platform&message=PC/Mobile&color=030712&labelColor=262626">
    <img alt="project name" src="https://img.shields.io/badge/lms-plataform-030712?&labelColor=262626"></img>    
    <img alt="Repository size" src="https://img.shields.io/github/repo-size/GabrielMedradoS/lms-plataform?color=030712&labelColor=262626">
    <img alt="GitHub Last Commit" src="https://img.shields.io/github/last-commit/gabrielmedrados/lms-plataform?&color=030712&labelColor=262626">    
    <a href="">
        <img alt="License" src="https://img.shields.io/static/v1?label=License&message=MIT&color=030712&labelColor=262626">
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

O objetivo é criar uma plataforma interativa de criação de cursos disponibilizado por professores
onde os alunos poderão comprar e acessar o curso de seu interesse

## ✨ Features

- [] Layout de uma LMS Plataform

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

<div>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" height="30" width="40"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
  alt="typescript" height="30" width="40"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" alt="tailwind" height="30" width="40" />
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/>
</div>

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
    "@hookform/resolvers": "^3.6.0",
    "@radix-ui/react-dialog": "^1.1.1",
    "@radix-ui/react-label": "^2.1.0",
    "@radix-ui/react-slot": "^1.0.2",
    "axios": "^1.7.2",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.0",
    "lucide-react": "^0.307.0",
    "next": "14.0.4",
    "react": "^18",
    "react-dom": "^18",
    "react-hook-form": "^7.52.0",
    "react-hot-toast": "^2.4.1",
    "tailwind-merge": "^2.2.0",
    "tailwindcss-animate": "^1.0.7",
    "zod": "^3.23.8"
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
- [Tailwind | documentation](https://tailwindcss.com/docs/installation/using-postcss)
- [React Hot Toast](https://react-hot-toast.com/)
- [React Hook Form](https://www.npmjs.com/package/react-hook-form)
- [Axios | documentation](https://axios-http.com/ptbr/docs/intro)

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
