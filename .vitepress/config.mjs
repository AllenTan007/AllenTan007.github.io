import { defineConfig } from 'vitepress'

export default defineConfig({
    title: "Global Tactical Tech & Hardware Research Lab",
    description: "Hardcore research notes on tactical hardware, laser sensors, and IoT security.",
    lang: 'zh-CN',
    appearance: 'dark', // Force dark mode for that "hacker" feel
    sitemap: {
        hostname: 'https://allentan007.github.io'
    },
    head: [
        ['meta', { name: 'google-site-verification', content: 'D-Ikg_4iISpTOmQrXEClhvOR4OI5WmZg3HxM8Fj1RQs' }]
    ],

    themeConfig: {
        logo: '/logo.svg', // We'll need a logo, maybe use a simple terminal icon for now
        nav: [
            { text: 'Tactical Hardware', link: '/docs/tactical/' },
            { text: 'IoT Security', link: '/docs/iot/' },
            { text: 'Arch Linux Hardening', link: '/docs/linux/' },
            { text: 'About Lab', link: '/about' }
        ],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/AllenTan007' }
        ],
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2026 AllenTan007 Lab'
        },
        sidebar: [
            {
                text: 'Tactical Hardware',
                items: [
                    { text: 'Laser Sensors Review', link: '/docs/tactical/laser-sensors' }
                ]
            },
            {
                text: 'IoT Security',
                items: [
                    { text: 'Zigbee Sniffing & Replay', link: '/docs/iot/zigbee-sniffing' }
                ]
            },
            {
                text: 'Linux Hardening',
                items: [
                    { text: 'Arch Kernel RT Patch', link: '/docs/linux/kernel-hardening' }
                ]
            }
        ]
    }
})
