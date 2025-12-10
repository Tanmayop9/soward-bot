// Commands data organized by category
const commandsData = {
    antinuke: [
        { name: 'antinuke', description: 'Configure anti-nuke protection for your server', icon: 'fa-shield-alt' },
        { name: 'antiunverifiedbot', description: 'Prevent unverified bots from being added', icon: 'fa-robot' },
        { name: 'extraowner', description: 'Manage extra owners for the bot', icon: 'fa-user-shield' },
        { name: 'mainrole', description: 'Set the main role for server protection', icon: 'fa-id-badge' },
        { name: 'nightmode', description: 'Enable server lockdown during night hours', icon: 'fa-moon' },
        { name: 'panicmode', description: 'Emergency lockdown mode for your server', icon: 'fa-exclamation-triangle' },
        { name: 'whitelist', description: 'Add users to the whitelist', icon: 'fa-user-check' },
        { name: 'unwhitelist', description: 'Remove users from the whitelist', icon: 'fa-user-times' },
        { name: 'whitelisted', description: 'View all whitelisted users', icon: 'fa-list' },
        { name: 'whitelistreset', description: 'Reset the entire whitelist', icon: 'fa-redo' }
    ],
    moderation: [
        { name: 'ban', description: 'Ban a member from the server', icon: 'fa-ban' },
        { name: 'unban', description: 'Unban a member from the server', icon: 'fa-user-check' },
        { name: 'kick', description: 'Kick a member from the server', icon: 'fa-shoe-prints' },
        { name: 'mute', description: 'Mute a member in the server', icon: 'fa-volume-mute' },
        { name: 'unmute', description: 'Unmute a member in the server', icon: 'fa-volume-up' },
        { name: 'warn', description: 'Warn a member for rule violations', icon: 'fa-exclamation' },
        { name: 'softban', description: 'Softban a member (ban and unban)', icon: 'fa-user-slash' },
        { name: 'lock', description: 'Lock a channel', icon: 'fa-lock' },
        { name: 'unlock', description: 'Unlock a channel', icon: 'fa-unlock' },
        { name: 'lockall', description: 'Lock all channels in the server', icon: 'fa-lock' },
        { name: 'unlockall', description: 'Unlock all channels in the server', icon: 'fa-unlock' },
        { name: 'hide', description: 'Hide a channel from everyone', icon: 'fa-eye-slash' },
        { name: 'unhide', description: 'Unhide a channel', icon: 'fa-eye' },
        { name: 'hideall', description: 'Hide all channels', icon: 'fa-eye-slash' },
        { name: 'unhideall', description: 'Unhide all channels', icon: 'fa-eye' },
        { name: 'purge', description: 'Delete multiple messages at once', icon: 'fa-trash' },
        { name: 'nuke', description: 'Clone and delete a channel', icon: 'fa-bomb' },
        { name: 'nick', description: 'Change a member\'s nickname', icon: 'fa-signature' },
        { name: 'addrole', description: 'Add a role to a member', icon: 'fa-plus-circle' },
        { name: 'block', description: 'Block a member from a channel', icon: 'fa-minus-circle' },
        { name: 'unblock', description: 'Unblock a member from a channel', icon: 'fa-check-circle' },
        { name: 'unbanall', description: 'Unban all banned members', icon: 'fa-users' },
        { name: 'unmuteall', description: 'Unmute all muted members', icon: 'fa-volume-up' },
        { name: 'list', description: 'List various server information', icon: 'fa-list' },
        { name: 'snipe', description: 'View recently deleted messages', icon: 'fa-eye' },
        { name: 'prefix', description: 'Change the bot prefix', icon: 'fa-cog' },
        { name: 'modrole', description: 'Set the moderator role', icon: 'fa-user-shield' },
        { name: 'mediachannel', description: 'Setup media-only channels', icon: 'fa-photo-video' },
        { name: 'ignore', description: 'Ignore bot commands in a channel', icon: 'fa-ban' }
    ],
    automod: [
        { name: 'automod', description: 'Configure auto-moderation settings', icon: 'fa-robot' },
        { name: 'antiinvite', description: 'Automatically delete Discord invites', icon: 'fa-link' },
        { name: 'antilink', description: 'Automatically delete links', icon: 'fa-unlink' },
        { name: 'antispam', description: 'Prevent spam messages', icon: 'fa-comment-slash' },
        { name: 'antiswear', description: 'Filter bad words and profanity', icon: 'fa-language' }
    ],
    information: [
        { name: 'help', description: 'Display the help menu', icon: 'fa-question-circle' },
        { name: 'ping', description: 'Check the bot\'s latency', icon: 'fa-heartbeat' },
        { name: 'stats', description: 'View bot statistics', icon: 'fa-chart-bar' },
        { name: 'uptime', description: 'Check how long the bot has been online', icon: 'fa-clock' },
        { name: 'serverinfo', description: 'Get information about the server', icon: 'fa-info-circle' },
        { name: 'userinfo', description: 'Get information about a user', icon: 'fa-user' },
        { name: 'avatar', description: 'Get a user\'s avatar', icon: 'fa-portrait' },
        { name: 'banner', description: 'Get a user\'s banner', icon: 'fa-image' },
        { name: 'servericon', description: 'Get the server icon', icon: 'fa-server' },
        { name: 'guildbanner', description: 'Get the server banner', icon: 'fa-flag' },
        { name: 'roleinfo', description: 'Get information about a role', icon: 'fa-id-badge' },
        { name: 'roleicon', description: 'Get a role\'s icon', icon: 'fa-icons' },
        { name: 'membercount', description: 'Get the server member count', icon: 'fa-users' },
        { name: 'channelcount', description: 'Get the server channel count', icon: 'fa-hashtag' },
        { name: 'boostcount', description: 'Get the server boost count', icon: 'fa-rocket' },
        { name: 'invite', description: 'Get the bot invite link', icon: 'fa-link' },
        { name: 'premium', description: 'Check premium status', icon: 'fa-crown' },
        { name: 'emojilist', description: 'List all server emojis', icon: 'fa-smile' },
        { name: 'firstmessage', description: 'Get the first message in a channel', icon: 'fa-comment' },
        { name: 'afk', description: 'Set your AFK status', icon: 'fa-bed' },
        { name: 'embed', description: 'Create custom embeds', icon: 'fa-code' },
        { name: 'steal', description: 'Steal emojis from other servers', icon: 'fa-download' },
        { name: 'setboost', description: 'Set boost messages', icon: 'fa-star' },
        { name: 'ship', description: 'Ship two users together', icon: 'fa-heart' },
        { name: 'imagine', description: 'Generate AI images', icon: 'fa-paint-brush' },
        { name: 'reaction', description: 'React with anime reactions', icon: 'fa-laugh' },
        { name: 'cute', description: 'Get a cute rating', icon: 'fa-heart' },
        { name: 'intelligence', description: 'Get an intelligence rating', icon: 'fa-brain' },
        { name: 'truth', description: 'Play truth or dare (truth)', icon: 'fa-question' },
        { name: 'dare', description: 'Play truth or dare (dare)', icon: 'fa-bolt' },
        { name: 'wouldyourather', description: 'Would you rather questions', icon: 'fa-random' }
    ],
    logs: [
        { name: 'logall', description: 'Enable all logging features', icon: 'fa-clipboard-list' },
        { name: 'showlogs', description: 'Display current log settings', icon: 'fa-eye' },
        { name: 'resetlogs', description: 'Reset all log configurations', icon: 'fa-redo' },
        { name: 'autologs', description: 'Configure automatic logging', icon: 'fa-robot' },
        { name: 'memberlog', description: 'Log member join/leave events', icon: 'fa-user-plus' },
        { name: 'messagelog', description: 'Log message edits and deletes', icon: 'fa-comment' },
        { name: 'channellog', description: 'Log channel create/delete events', icon: 'fa-hashtag' },
        { name: 'rolelog', description: 'Log role updates', icon: 'fa-id-badge' },
        { name: 'modlog', description: 'Log moderation actions', icon: 'fa-gavel' },
        { name: 'vclogs', description: 'Log voice channel activity', icon: 'fa-microphone' }
    ],
    voice: [
        { name: 'vcmute', description: 'Mute a member in voice channel', icon: 'fa-microphone-slash' },
        { name: 'vcunmute', description: 'Unmute a member in voice channel', icon: 'fa-microphone' },
        { name: 'vcmuteall', description: 'Mute all members in voice channel', icon: 'fa-microphone-slash' },
        { name: 'vcunmuteall', description: 'Unmute all members in voice channel', icon: 'fa-microphone' },
        { name: 'vcdeafen', description: 'Deafen a member in voice channel', icon: 'fa-volume-mute' },
        { name: 'vcundeafen', description: 'Undeafen a member in voice channel', icon: 'fa-volume-up' },
        { name: 'vcdeafenall', description: 'Deafen all members in voice channel', icon: 'fa-volume-mute' },
        { name: 'vcundeafenall', description: 'Undeafen all members in voice channel', icon: 'fa-volume-up' },
        { name: 'vckick', description: 'Kick a member from voice channel', icon: 'fa-user-times' },
        { name: 'vckickall', description: 'Kick all members from voice channel', icon: 'fa-users-slash' },
        { name: 'vcmoveall', description: 'Move all members to another voice channel', icon: 'fa-exchange-alt' },
        { name: 'vcpull', description: 'Pull a member to your voice channel', icon: 'fa-hand-paper' },
        { name: 'vcpush', description: 'Push a member to another voice channel', icon: 'fa-hand-point-right' },
        { name: 'vclist', description: 'List all members in a voice channel', icon: 'fa-list' },
        { name: 'vcrole', description: 'Manage voice channel roles', icon: 'fa-id-badge' }
    ],
    welcomer: [
        { name: 'welcome', description: 'Configure welcome messages', icon: 'fa-door-open' },
        { name: 'welcomechannel', description: 'Set the welcome channel', icon: 'fa-hashtag' },
        { name: 'welcomemessage', description: 'Set the welcome message', icon: 'fa-comment' },
        { name: 'welcometest', description: 'Test the welcome message', icon: 'fa-vial' },
        { name: 'welcomereset', description: 'Reset welcome configuration', icon: 'fa-redo' },
        { name: 'autorole', description: 'Configure auto-role on member join', icon: 'fa-user-plus' }
    ],
    ticket: [
        { name: 'ticket', description: 'Manage support ticket system', icon: 'fa-ticket-alt' }
    ],
    jointocreate: [
        { name: 'jointocreate', description: 'Setup join-to-create voice channels', icon: 'fa-plus-square' }
    ],
    customrole: [
        { name: 'setup', description: 'Setup custom role system', icon: 'fa-cog' }
    ],
    premium: [
        { name: 'addpremium', description: 'Add premium to a server', icon: 'fa-crown' },
        { name: 'removepremium', description: 'Remove premium from a server', icon: 'fa-times-circle' },
        { name: 'updatepremium', description: 'Update premium settings', icon: 'fa-edit' },
        { name: 'listprem', description: 'List all premium servers', icon: 'fa-list' }
    ],
    dev: [
        { name: 'eval', description: 'Evaluate JavaScript code', icon: 'fa-code' },
        { name: 'execute', description: 'Execute shell commands', icon: 'fa-terminal' },
        { name: 'shards', description: 'View shard information', icon: 'fa-network-wired' },
        { name: 'blacklist', description: 'Blacklist a user', icon: 'fa-ban' },
        { name: 'blacklistserver', description: 'Blacklist a server', icon: 'fa-ban' },
        { name: 'globalban', description: 'Ban a user globally', icon: 'fa-globe' },
        { name: 'leaveserver', description: 'Make the bot leave a server', icon: 'fa-door-closed' },
        { name: 'serverlist', description: 'List all servers the bot is in', icon: 'fa-list' },
        { name: 'maintancemode', description: 'Toggle maintenance mode', icon: 'fa-wrench' },
        { name: 'noprefix', description: 'Configure no-prefix mode', icon: 'fa-text-slash' },
        { name: 'reloadcmd', description: 'Reload commands', icon: 'fa-sync' },
        { name: 'bitzxier', description: 'Special developer command', icon: 'fa-star' }
    ]
};

// Category metadata
const categoryInfo = {
    all: { icon: 'fa-th', displayName: 'All Commands' },
    antinuke: { icon: 'fa-shield-alt', displayName: 'Antinuke', color: '#F04747' },
    moderation: { icon: 'fa-hammer', displayName: 'Moderation', color: '#FAA61A' },
    automod: { icon: 'fa-robot', displayName: 'Auto Moderation', color: '#43B581' },
    information: { icon: 'fa-info-circle', displayName: 'Information', color: '#5865F2' },
    logs: { icon: 'fa-clipboard-list', displayName: 'Logs', color: '#7289DA' },
    voice: { icon: 'fa-microphone', displayName: 'Voice', color: '#9B59B6' },
    welcomer: { icon: 'fa-door-open', displayName: 'Welcomer', color: '#3498DB' },
    ticket: { icon: 'fa-ticket-alt', displayName: 'Ticket', color: '#E91E63' },
    jointocreate: { icon: 'fa-plus-square', displayName: 'Join to Create', color: '#00BCD4' },
    customrole: { icon: 'fa-cog', displayName: 'Custom Role', color: '#FF9800' },
    premium: { icon: 'fa-crown', displayName: 'Premium', color: '#FFD700' },
    dev: { icon: 'fa-code', displayName: 'Developer', color: '#607D8B' }
};
