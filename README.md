# Soward Discord Bot - Official Website

![Soward Logo](./assets/soward.png)

## 🤖 About Soward

**Soward** is an advanced Discord bot designed for comprehensive server management, security, and moderation. With over 150 commands across multiple categories, Soward provides everything you need to manage your Discord server effectively.

### Bot Information
- **Name:** SOWARD#0166
- **Version:** 4.0.0
- **Total Servers:** 889
- **Total Users:** 467,219 (200,390 Cached)
- **Owner ID:** 1201457314805330040

## 🌟 Features

- **🛡️ Advanced Antinuke Protection** - Comprehensive security against raids and malicious attacks
- **🔨 Powerful Moderation Tools** - Complete moderation suite with ban, kick, mute, and more
- **📊 Server Logs** - Track all server activities and member actions
- **🤖 Auto Moderation** - Automated spam, link, and invite filtering
- **👥 Whitelist System** - Protect trusted members with enhanced security
- **🎫 Ticket System** - Professional support ticket system
- **🎤 Voice Management** - Complete voice channel moderation tools
- **👋 Welcome System** - Customizable welcome messages and auto-roles

## 📋 Command Categories

1. **Antinuke** - Server protection and security commands
2. **Moderation** - Ban, kick, mute, and other moderation tools
3. **Auto Moderation** - Automated filtering and protection
4. **Information** - Server and user information commands
5. **Logs** - Comprehensive logging system
6. **Voice** - Voice channel management
7. **Welcomer** - Welcome messages and auto-role
8. **Ticket** - Support ticket system
9. **Premium** - Premium features management
10. **Developer** - Bot developer commands

## 🚀 Deployment

This website is built as a static site and can be deployed on:

### GitHub Pages
1. Push the code to your GitHub repository
2. Go to Settings → Pages
3. Select the branch to deploy (usually `main`)
4. The site will be available at `https://yourusername.github.io/soward-bot/`

### Vercel
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect and deploy the static site
3. Your site will be live with a custom Vercel URL

### Custom Domain
Both GitHub Pages and Vercel support custom domains. Configure your DNS settings to point to your deployment platform.

## 🛠️ Local Development

To run the website locally:

1. Clone the repository:
```bash
git clone https://github.com/yourusername/soward-bot.git
cd soward-bot
```

2. Open `index.html` in your browser or use a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve
```

3. Navigate to `http://localhost:8000` in your browser

## 📁 Project Structure

```
soward-bot/
├── index.html              # Main HTML file
├── assets/
│   ├── css/
│   │   └── styles.css      # Stylesheets
│   ├── js/
│   │   ├── script.js       # Main JavaScript
│   │   └── commands.js     # Commands data
│   └── soward.png          # Bot logo
├── vercel.json             # Vercel configuration
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions workflow
└── README.md               # This file
```

## 🎨 Customization

### Updating Bot Statistics
Edit the `CONFIG` object in `assets/js/script.js`:

```javascript
const CONFIG = {
    botInfo: {
        username: 'SOWARD',
        discriminator: '0166',
        version: '4.0.0',
        serverCount: '889',
        userCount: '467,219',
        cachedUsers: '200,390'
    }
};
```

### Modifying Commands
Update the `commandsData` object in `assets/js/commands.js` to add, remove, or modify commands.

### Styling
All styles are in `assets/css/styles.css`. Modify CSS variables in the `:root` selector to change the color scheme.

## 📱 Responsive Design

The website is fully responsive and works on:
- 📱 Mobile devices
- 📱 Tablets
- 💻 Desktops
- 🖥️ Large screens

## 🔒 Security

- No backend required - completely client-side
- No API keys or secrets exposed
- CORS-safe Discord API calls
- Safe for public deployment

## 📄 License

This project is open source and available for use.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👨‍💻 Developer

Created and maintained by the Soward Bot development team.

---

**Note:** This is a static website. Bot statistics shown are from the latest available data. For real-time statistics, consider implementing a backend API or Discord bot status service.
