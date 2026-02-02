# Fyzz WhatsApp Bot (Dapzy-V13)

Ce dépôt contient le script du bot WhatsApp **Fyzz / Dapzy-V13**. Ce bot est basé sur la bibliothèque `baileys` et Node.js.

## 🚀 Déploiement Rapide

### Sur Termux (Android)
1. Installez les prérequis :
   ```bash
   pkg update && pkg upgrade
   pkg install nodejs git ffmpeg libwebp -y
   ```
2. Clonez ce dépôt :
   ```bash
   git clone https://github.com/[VOTRE_NOM_UTILISATEUR]/[NOM_DU_REPO].git
   cd [NOM_DU_REPO]
   ```
3. Installez les dépendances :
   ```bash
   npm install
   ```
4. Configurez votre numéro dans `settings/config.js`.
5. Lancez le bot :
   ```bash
   node index.js
   ```

### Sur Panel (Pterodactyl / Heroku / VPS)
1. Utilisez le **Buildpack Node.js**.
2. Assurez-vous que **FFmpeg** est installé sur l'instance.
3. Commande de démarrage : `node index.js`

## ⚙️ Configuration
Modifiez le fichier `settings/config.js` :
- `owner` : Votre numéro (ex: `33612345678`)
- `botNumber` : Le numéro du bot.
- `public` : `true` pour que tout le monde puisse l'utiliser, `false` pour mode privé.

## ⚠️ Avertissement
Ce script est un "Bug Bot". Son utilisation peut entraîner le **bannissement de votre compte WhatsApp**. Utilisez-le uniquement avec des numéros de test. L'auteur n'est pas responsable des dommages causés.
