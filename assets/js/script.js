// Configuration
const CONFIG = {
    // Bot information from Discord
    botId: null, // Bot application ID
    ownerId: '1201457314805330040',
    inviteUrl: null, // Will be generated dynamically
    supportServer: null, // Can be added later
    // Static bot information
    botInfo: {
        username: 'SOWARD',
        discriminator: '0166',
        version: '4.0.0',
        serverCount: '889',
        userCount: '467,219',
        cachedUsers: '200,390'
    }
};

// DOM Elements
const elements = {
    navbar: document.getElementById('navbar'),
    mobileToggle: document.getElementById('mobileToggle'),
    navMenu: document.getElementById('navMenu'),
    botAvatar: document.getElementById('botAvatar'),
    botName: document.getElementById('botName'),
    botTag: document.getElementById('botTag'),
    botNameAbout: document.getElementById('botNameAbout'),
    botAvatarAbout: document.getElementById('botAvatarAbout'),
    ownerAvatar: document.getElementById('ownerAvatar'),
    ownerName: document.getElementById('ownerName'),
    serverCount: document.getElementById('serverCount'),
    userCount: document.getElementById('userCount'),
    statServers: document.getElementById('statServers'),
    statUsers: document.getElementById('statUsers'),
    statUptime: document.getElementById('statUptime'),
    footerPing: document.getElementById('footerPing'),
    commandsList: document.getElementById('commandsList'),
    inviteBtn: document.getElementById('inviteBtn'),
    inviteBtnHero: document.getElementById('inviteBtnHero'),
    inviteLink: document.getElementById('inviteLink'),
    supportLink: document.getElementById('supportLink')
};

// Initialize the website
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initCommands();
    fetchBotInfo();
    fetchOwnerInfo();
    initInviteLinks();
    initScrollEffects();
    initSmoothScroll();
});

// Navigation functionality
function initNavigation() {
    // Mobile menu toggle
    elements.mobileToggle.addEventListener('click', () => {
        elements.navMenu.classList.toggle('active');
    });

    // Close mobile menu on link click
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            elements.navMenu.classList.remove('active');
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            elements.navbar.classList.add('scrolled');
        } else {
            elements.navbar.classList.remove('scrolled');
        }
    });
}

// Initialize commands display
function initCommands() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    
    // Display all commands by default
    displayCommands('all');
    
    // Category button click handlers
    categoryButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.dataset.category;
            
            // Update active button
            categoryButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Display commands for selected category
            displayCommands(category);
        });
    });
}

// Display commands for a specific category
function displayCommands(category) {
    elements.commandsList.innerHTML = '';
    
    if (category === 'all') {
        // Display all commands from all categories
        Object.keys(commandsData).forEach(cat => {
            commandsData[cat].forEach(cmd => {
                elements.commandsList.appendChild(createCommandCard(cmd, cat));
            });
        });
    } else if (commandsData[category]) {
        // Display commands for specific category
        commandsData[category].forEach(cmd => {
            elements.commandsList.appendChild(createCommandCard(cmd, category));
        });
    }
    
    // Add fade-in animation
    document.querySelectorAll('.command-card').forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('fade-in');
        }, index * 30);
    });
}

// Create a command card element
function createCommandCard(command, category) {
    const card = document.createElement('div');
    card.className = 'command-card';
    
    const categoryColor = categoryInfo[category]?.color || '#5865F2';
    
    card.innerHTML = `
        <div class="command-header">
            <div class="command-icon">
                <i class="fas ${command.icon}"></i>
            </div>
            <div class="command-name">${command.name}</div>
        </div>
        <div class="command-category" style="background-color: ${categoryColor}22; color: ${categoryColor};">
            ${categoryInfo[category]?.displayName || category}
        </div>
        <div class="command-description">${command.description}</div>
    `;
    
    return card;
}

// Fetch bot information from Discord API
async function fetchBotInfo() {
    try {
        // Use the provided static bot information
        updateBotInfo({
            username: CONFIG.botInfo.username,
            discriminator: CONFIG.botInfo.discriminator,
            avatar: './assets/soward.png',
            version: CONFIG.botInfo.version,
            serverCount: CONFIG.botInfo.serverCount,
            userCount: CONFIG.botInfo.userCount
        });
    } catch (error) {
        console.error('Error fetching bot info:', error);
        // Use fallback data
        updateBotInfo({
            username: CONFIG.botInfo.username,
            discriminator: CONFIG.botInfo.discriminator,
            avatar: './assets/soward.png',
            serverCount: CONFIG.botInfo.serverCount,
            userCount: CONFIG.botInfo.userCount
        });
    }
}

// Update bot information in the UI
function updateBotInfo(botData) {
    const avatarUrl = botData.avatar;
    
    // Update avatar images
    const avatarImgs = document.querySelectorAll('#botAvatar .avatar-img, #botAvatarAbout img');
    avatarImgs.forEach(img => {
        img.src = avatarUrl;
        img.alt = botData.username;
    });
    
    // Update bot name
    if (elements.botName) {
        elements.botName.textContent = botData.username;
    }
    if (elements.botNameAbout) {
        elements.botNameAbout.textContent = botData.username;
    }
    
    // Update discriminator
    if (elements.botTag) {
        elements.botTag.textContent = `#${botData.discriminator}`;
    }
    
    // Update stats
    if (botData.serverCount && elements.serverCount) {
        elements.serverCount.textContent = botData.serverCount;
        elements.statServers.textContent = botData.serverCount;
    }
    
    if (botData.userCount && elements.userCount) {
        elements.userCount.textContent = botData.userCount;
        elements.statUsers.textContent = botData.userCount;
    }
}

// Fetch owner information from Discord API
async function fetchOwnerInfo() {
    try {
        // Try to fetch owner info from Discord API
        // Note: This requires a proxy or backend due to CORS restrictions
        // For now, we'll show loading state and try to fetch
        
        const response = await fetch(`https://discord.com/api/v10/users/${CONFIG.ownerId}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).catch(() => null);
        
        if (response && response.ok) {
            const userData = await response.json();
            updateOwnerInfo({
                username: userData.username,
                discriminator: userData.discriminator,
                avatar: userData.avatar 
                    ? `https://cdn.discordapp.com/avatars/${CONFIG.ownerId}/${userData.avatar}.png?size=256`
                    : `https://cdn.discordapp.com/embed/avatars/${parseInt(userData.discriminator) % 5}.png`
            });
        } else {
            throw new Error('Could not fetch owner info');
        }
    } catch (error) {
        console.log('Note: Owner info could not be fetched from Discord API (CORS restriction)', error);
        // Fallback to generic data
        updateOwnerInfo({
            username: 'Bot Owner',
            discriminator: '0000',
            avatar: `https://cdn.discordapp.com/embed/avatars/0.png`
        });
    }
}

// Update owner information in the UI
function updateOwnerInfo(ownerData) {
    if (elements.ownerAvatar) {
        const img = elements.ownerAvatar.querySelector('img');
        if (img) {
            img.src = ownerData.avatar;
            img.alt = ownerData.username;
        }
    }
    
    if (elements.ownerName) {
        elements.ownerName.textContent = ownerData.username;
    }
}

// Initialize invite links
function initInviteLinks() {
    // Default Discord bot invite URL
    // Note: Replace CLIENT_ID with actual bot client ID
    const defaultInviteUrl = 'https://discord.com/api/oauth2/authorize?client_id=YOUR_BOT_CLIENT_ID&permissions=8&scope=bot%20applications.commands';
    
    // You can also use a custom invite link if available
    const inviteUrl = CONFIG.inviteUrl || defaultInviteUrl;
    
    // Set invite button URLs
    if (elements.inviteBtn) {
        elements.inviteBtn.href = inviteUrl;
    }
    if (elements.inviteBtnHero) {
        elements.inviteBtnHero.href = inviteUrl;
    }
    if (elements.inviteLink) {
        elements.inviteLink.href = inviteUrl;
    }
    
    // Set support server link if available
    if (elements.supportLink && CONFIG.supportServer) {
        elements.supportLink.href = CONFIG.supportServer;
    } else if (elements.supportLink) {
        elements.supportLink.href = '#';
        elements.supportLink.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Support server link not available yet!');
        });
    }
}

// Initialize scroll effects
function initScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    // Observe feature cards, stat cards, etc.
    document.querySelectorAll('.feature-card, .stat-card, .about-card').forEach(el => {
        observer.observe(el);
    });
}

// Smooth scroll for navigation links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#' || !href) return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for navbar height
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Simulate ping (for demo purposes)
function updatePing() {
    const ping = Math.floor(Math.random() * 50) + 10; // Random ping between 10-60ms
    if (elements.footerPing) {
        elements.footerPing.textContent = `${ping}ms`;
    }
}

// Update ping every 5 seconds
setInterval(updatePing, 5000);
updatePing();

// Log initialization
console.log('%cSoward Bot Website', 'font-size: 24px; font-weight: bold; color: #5865F2;');
console.log('%cWebsite loaded successfully!', 'font-size: 14px; color: #43B581;');
console.log('For bot support and inquiries, check the website footer.');

// Export functions for potential external use
window.SowardSite = {
    displayCommands,
    updateBotInfo,
    updateOwnerInfo,
    CONFIG
};
