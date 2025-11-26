# MyAppMobile (Expo)

Aplicativo React Native (Expo) com navegação Stack, autenticação básica e utilitários (IMC, Conversor), ToDo e Frases. Persistência local via SQLite.

## Como rodar (rápido)
1) git clone https://github.com/1GuiSouza1/AppMobileP2.git
2) cd SEU_REPO
3) npm install
4) npx expo install expo-sqlite
5) npx expo start
6) Abra no Expo Go (Android/iOS) escaneando o QR Code

Guia completo (setup detalhado, banco, comandos, troubleshooting):
- docs/instrucoes.md

## Tecnologias
- React Native (Expo)
- React Navigation (Stack)
- SQLite

## Telas
- Login, Home, About
- Conversor, IMC
- ToDoList, Frases

## Estrutura (resumo)
- App.js
- src/ (telas e componentes)
- database/ (SQLite e initDatabase)
- docs/ (documentação)

## Contribuição
- git checkout -b feature/nome
- commits pequenos e descritivos
- Pull Request para revisão

## Licença
Defina uma licença (ex.: MIT) no arquivo LICENSE.
