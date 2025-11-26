# MyAppMobile (Expo)
Este é o guia completo: setup detalhado, banco de dados, comandos e troubleshooting.
Para um resumo rápido, consulte o README.md na raiz do repositório.

## 1. Requisitos
- Node.js LTS (>=18)
- Git instalado
- Expo CLI (opcional) npx já basta
- Dispositivo:
  - Android: Expo Go na Play Store
  - iOS: Expo Go na App Store
- (Opcional) Emulator / Simulator

## 2. Clonar o repositório
Substitua SEU_REPO pela URL real.
git clone https://github.com/1GuiSouza1/AppMobileP2.git
cd AppMobileP2

## 3. Instalar dependências
- npm install
- npx expo install expo-sqlite

## 4. Rodar o projeto
- npx expo start
escaneie o QR code com um smartphone.

## 5. Banco de Dados (SQLite)
- Inicialização automática: chamada initDatabase() em App.js.
- Se erro: veja o log "Database initialization failed".
- Limpar DB (opcional): apagar arquivo interno (em dispositivos físicos usar expo-file-system ou reinstalar app).

## 6. Variáveis / Configurações
Se futuramente precisar de chaves (API etc.), criar .env e usar libs como react-native-dotenv.

## 7. Estrutura de Pastas
📁 root
├── App.js                (entrada)
├── src/                  (telas e componentes)
├── database/             (lógica SQLite / initDatabase)
├── docs/                 (documentação)
└── package.json

Sugestão futura:
src/
 ├── screens/
 ├── components/
 ├── services/
 ├── hooks/
 ├── utils/

## 8. Principais Telas
- Login / Register (autenticação básica)
- Home (hub)
- About, Converter, imc, ToDoList, frases (funcionalidades diversas)

## 9. Comandos Úteis
Atualizar dependências: npx npm-check-updates -u && npm install
Limpar cache Expo: npx expo start -c
Gerar APK/EAS (futuro): npx eas build --platform android

## 10. Problemas Comuns
QR Code não abre:
- Verificar mesma rede Wi-Fi
- Tentar modo Tunnel no Expo
Erro de módulo:
- Remover node_modules + package-lock.json
- npm install
SQLite não inicializa:
- Adicionar console.log no initDatabase
- Ver permissões (emulador)

## 11. Próximos Passos (Roadmap)
[ ] Tela de perfil
[ ] Persistência segura de login (SecureStore)
[ ] Testes (Jest + React Native Testing Library)
[ ] Internacionalização (i18n)

