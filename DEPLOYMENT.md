# Render Deployment Guide

This guide will help you deploy the Soward Bot website on Render.

## Quick Start

### Prerequisites
- A GitHub account with this repository
- A Render account (free at https://render.com)

### Deployment Steps

1. **Sign up or log in to Render**
   - Go to https://render.com
   - Sign up or log in using your GitHub account

2. **Create a New Web Service**
   - Click "New +" button in the top right
   - Select "Web Service"
   - Connect your GitHub account if not already connected
   - Select the `soward-bot` repository

3. **Configure the Service**
   - Render will automatically detect the `render.yaml` configuration
   - Click "Create Web Service"
   - Alternatively, if manual configuration is needed:
     - **Name**: soward-bot-website (or your preferred name)
     - **Environment**: Node
     - **Build Command**: `npm install`
     - **Start Command**: `npm start`
     - **Plan**: Free (or choose your plan)

4. **Deploy**
   - Render will automatically build and deploy your site
   - Wait for the deployment to complete (usually 2-3 minutes)
   - Your site will be available at: `https://your-service-name.onrender.com`

5. **Custom Domain (Optional)**
   - In your Render dashboard, go to Settings
   - Add your custom domain
   - Follow Render's instructions to configure DNS

## Run Command

The application uses this command to start:
```bash
npm start
```

This runs `node server.js` which starts an Express server on the port provided by Render (or port 3000 locally).

## Local Development

To test the deployment setup locally:

```bash
# Install dependencies
npm install

# Start the server
npm start

# Visit in browser
http://localhost:3000
```

## Features

### Security
- Rate limiting: 100 requests per 15 minutes per IP
- Access control: Blocks sensitive files (package.json, server.js, .git, etc.)
- Dotfiles protection: All dotfiles are denied by default

### Supported Files
- ✅ HTML pages (index.html)
- ✅ Static assets (CSS, JS, images in /assets)
- ✅ Public images (soward.png)
- ❌ Configuration files (package.json, server.js, render.yaml)
- ❌ Repository files (.git, .github, .gitignore)

## Environment Variables

The server automatically uses:
- `PORT`: Provided by Render (default: 3000 locally)
- `NODE_ENV`: Set to "production" in render.yaml

## Troubleshooting

### Build fails
- Check that all dependencies are in package.json
- Review build logs in Render dashboard

### Site not loading
- Verify the start command is `npm start`
- Check the logs in Render dashboard
- Ensure PORT environment variable is not overridden

### Assets not loading
- Check that files are in the correct directories
- CSS/JS should be in /assets/css and /assets/js
- Images should be in /assets or root directory

## Support

For issues with:
- **Render deployment**: Check Render documentation at https://render.com/docs
- **Website code**: Open an issue on GitHub
- **Bot functionality**: Contact the bot developer

## Cost

Render's free tier includes:
- 750 hours/month (enough for one always-on service)
- Automatic deploys from GitHub
- Free SSL/TLS certificates
- Custom domains

For more information, see: https://render.com/pricing
