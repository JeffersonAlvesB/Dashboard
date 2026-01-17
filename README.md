<h1 align="center">GitHub Insights Dashboard 📊</h1>

<p align="center">
  <img src="https://img.shields.io/badge/Status-Concluído%20e%20Hospedado-green?style=for-the-badge" alt="Status">
  <img src="https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React">
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind">
  <img src="https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge" alt="License">
</p>

<p align="center">
  <b>Analise perfis do GitHub com elegância.</b><br>
  Um dashboard interativo que transforma dados da API do GitHub em métricas visuais, gráficos de performance e gerenciamento de metas.
</p>

---

<h2>✨ Demonstração</h2>
<p>Acesse a aplicação em tempo real:</p>
<p align="center">
  <a href="https://jeffboard.netlify.app/" target="_blank">
    <img src="https://img.shields.io/badge/Visualizar_Dashboard-0078D4?style=for-the-badge&logo=microsoft-edge&logoColor=white" alt="Acessar Dashboard">
  </a>
</p>

---

<h2>📚 Sobre o Projeto</h2>
<p>
  Este Dashboard foi desenvolvido para oferecer uma experiência analítica sobre perfis do GitHub. Utilizando a <b>API RESTful oficial</b>, a aplicação processa dados brutos e os exibe em uma interface moderna e responsiva, focada em <b>Data Visualization</b> (Visualização de Dados).
</p>

<h3>🔑 Funcionalidades Principais</h3>
<ul>
  <li><b>Análise de Dados:</b> Exibição de seguidores, repositórios e metas em formatos de cards, círculos e barras de progresso.</li>
  <li><b>Visualização Gráfica:</b> Integração com <i>ApexCharts</i> para monitoramento de métricas.</li>
  <li><b>Gestão de Usuários:</b> Tabela dinâmica para adicionar, remover e listar perfis pesquisados recentemente.</li>
  <li><b>Persistência de Dados:</b> Uso estratégico de <i>LocalStorage</i> para manter sessões e preferências ativas.</li>
  <li><b>UX/UI Avançada:</b> Autenticação simulada com "Lembrar-me", sistema de notificações e Sidebar intuitiva.</li>
  <li><b>Navegação Inteligente:</b> Gerenciamento de rotas protegidas e navegação fluida com React Router.</li>
</ul>

---

<h2>🚀 Tecnologias e Ferramentas</h2>
<table>
  <tr>
    <td><b>Frontend</b></td>
    <td>React.js, Tailwind CSS</td>
  </tr>
  <tr>
    <td><b>Gerenciamento de Estado</b></td>
    <td>Context API</td>
  </tr>
  <tr>
    <td><b>Gráficos & UI</b></td>
    <td>ApexCharts.js, Lucide Icons</td>
  </tr>
  <tr>
    <td><b>Roteamento</b></td>
    <td>React Router DOM</td>
  </tr>
  <tr>
    <td><b>Consumo de Dados</b></td>
    <td>Fetch API / GitHub REST API</td>
  </tr>
</table>

---

<h2>🔧 Como Rodar o Projeto</h2>
<ol>
  <li><b>Clone o repositório:</b>
    <pre><code>git clone https://github.com/JeffersonAlvesB/Dashboard.git</code></pre>
  </li>
  <li><b>Instale as dependências:</b>
    <pre><code>npm install</code></pre>
  </li>
  <li><b>Inicie o ambiente de desenvolvimento:</b>
    <pre><code>npm run dev</code></pre>
  </li>
</ol>
<p>Acesse o projeto localmente em: <code>http://localhost:5173</code></p>

---

<h2>📂 Estrutura de Arquivos</h2>
<pre>
src/
├── assets/          # Recursos estáticos (imagens/ícones)
├── components/      # UI Components (Boxs, Tabelas, Sidebar)
├── contexts/        # Gerenciamento de estado global (Context API)
├── pages/           # Views principais (Login, Dashboard)
├── routes/          # Definições de rotas da aplicação
├── App.jsx          # Componente principal do React
├── index.css        # Arquivos de estilo global
└── main.jsx         # Ponto de entrada da aplicação
</pre>
---

<h2>📄 Licença</h2>
<p>Este projeto está sob a licença MIT. Veja o arquivo <a href="https://github.com/JeffersonAlvesB/Dashboard/blob/main/LICENSE" target="_blank">LICENSE</a>.</p>

<p align="center">
  Desenvolvido com ☕ e React por <b>Jefferson Alves</b>
</p>
