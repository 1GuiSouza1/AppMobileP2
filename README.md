# MyAppMobile (Expo)

Aplicativo mobile desenvolvido em React Native (Expo) com foco em praticidade, organização e demonstração de recursos fundamentais para apps modernos.
O projeto reúne autenticação local, navegação entre telas, uso de SQLite, além de ferramentas úteis como cálculo de IMC, conversor de temperatura, frases motivacionais e uma lista de tarefas.

Ele foi estruturado com boas práticas, modularização e documentação clara — ideal tanto para estudo quanto para evolução futura.

## Como rodar (rápido)
1) git clone https://github.com/1GuiSouza1/AppMobileP2.git
2) cd AppMobileP2
3) npm install
4) npx expo install expo-sqlite
5) npx expo start
6) Abra no Expo Go (Android/iOS) escaneando o QR Code

Guia completo (setup detalhado, banco, comandos, troubleshooting):
- docs/instrucoes.md

## Tecnologias
- React Native (Expo) – desenvolvimento rápido para Android/iOS
- React Navigation (Stack) – navegação entre telas com fluidez
- SQLite – armazenamento local persistente para login e usuários
- Componentização e Hooks – estado, modais e lógica organizada
- Telas e Funcionalidades
- Login e Cadastro (Register) com persistência local em SQLite
- Home com atalhos para quatro utilitários principais
- Calculadora de IMC – insira peso/altura e receba o resultado
- Lista de Tarefas (ToDoList) – adicione, gerencie e marque tarefas
- Frases Aleatórias – frases motivacionais geradas dinamicamente
- Conversor de Temperatura – Celsius ↔ Fahrenheit
- About – modal com informações do app
- Navegação 100% por modais (nos utilitários), como no template original
- Tudo foi montado com foco em simplicidade, didática e reutilização de código.

## Telas
- Login, Home, About
- Conversor, IMC
- ToDoList, Frases

## Estrutura (resumo)
- App.js
- src/ (telas e componentes)
- database/ (SQLite e initDatabase)
- docs/ (documentação)

## Licença
Defina uma licença (ex.: MIT) no arquivo LICENSE.
