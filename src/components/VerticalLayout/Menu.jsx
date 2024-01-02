const menuItems = [
    {
        id: 'menu',
        label: 'Menu',
        isHeader: true
    },
    {
        id: 'dashboard',
        label: 'Dashboard',
        icon: 'mdi-home-variant-outline',
        link: '/dashboard',
        badge: 3,
        badgecolor: 'bg-primary'
    },
    {
        id: 'calendar',
        label: 'Calendar',
        icon: 'mdi-calendar-outline',
        link: '/calendar'
    },
    {
        id: 'email',
        novidade: false,
        label: 'Email',
        icon: 'mdi mdi-email-outline',
        link: '/#',
        subItems: [
            {
                id: 'inbox',
                label: 'Inbox',
                link: '/inbox',
                parentId: 'email'
            },
            {
                id: 'reademail',
                label: 'Read Email',
                link: '/read-email',
                parentId: 'email'
            },
            {
                id: 'composeemail',
                label: 'Email Compose',
                link: '/compose-email',
                parentId: 'email'
            }
        ]
    },
    {
        id: 'pages',
        label: 'Pages',
        isHeader: true
    },
    {
        id: 'auth',
        novidade: false,
        label: 'Authentication',
        icon: 'mdi mdi-account-circle-outline',
        link: '/#',
        subItems: [
            {
                id: 'login',
                label: 'Login',
                link: '/auth-login',
                parentId: 'auth'
            },
            {
                id: 'register',
                label: 'Register',
                link: '/auth-register',
                parentId: 'auth'
            },
            {
                id: 'recoverpw',
                label: 'Recover Password',
                link: '/auth-recoverpw',
                parentId: 'auth'
            },
            {
                id: 'lockscreen',
                label: 'Lock Screen',
                link: '/auth-lock-screen',
                parentId: 'auth'
            }
        ]
    },
    {
        id: 'utility',
        novidade: false,
        label: 'Utility',
        icon: 'mdi mdi-format-page-break',
        link: '/#',
        subItems: [
            {
                id: 'staterpage',
                label: 'Starter Page',
                link: '/pages-starter',
                parentId: 'utility'
            },
            {
                id: 'maintenance',
                label: 'Maintenance',
                link: '/pages-maintenance',
                parentId: 'utility'
            },
            {
                id: 'comingsoon',
                label: 'Coming Soon',
                link: '/pages-comingsoon',
                parentId: 'utility'
            },
            {
                id: 'timeline',
                label: 'Timeline',
                link: '/pages-timeline',
                parentId: 'utility'
            },
            {
                id: 'faq',
                label: 'FAQs',
                link: '/pages-faqs',
                parentId: 'utility'
            },
            {
                id: 'pricing',
                label: 'Pricing',
                link: '/pages-pricing',
                parentId: 'utility'
            },
            {
                id: 'error404',
                label: 'Error 404',
                link: '/pages-404',
                parentId: 'utility'
            },
            {
                id: 'error500',
                label: 'Error 500',
                link: '/pages-500',
                parentId: 'utility'
            }
        ]
    },
    {
        id: 'components',
        label: 'Components',
        isHeader: true
    },
    {
        id: 'uielements',
        novidade: false,
        label: 'UI Elements',
        icon: 'mdi mdi-briefcase-variant-outline',
        link: '/#',
        subItems: [
            {
                id: 'alerts',
                label: 'Alerts',
                link: '/ui-alerts',
                parentId: 'uielements'
            },
            {
                id: 'badge',
                label: 'Badge',
                link: '/ui-badge',
                parentId: 'uielements'
            },
            {
                id: 'Breadcrumb',
                label: 'Breadcrumb',
                link: '/ui-breadcrumb',
                parentId: 'uielements'
            },
            {
                id: 'buttons',
                label: 'Buttons',
                link: '/ui-buttons',
                parentId: 'uielements'
            },
            {
                id: 'cards',
                label: 'Cards',
                link: '/ui-cards',
                parentId: 'uielements'
            },
            {
                id: 'carousel',
                label: 'Carousel',
                link: '/ui-carousel',
                parentId: 'uielements'
            },
            {
                id: 'dropdowns',
                label: 'Dropdowns',
                link: '/ui-dropdowns',
                parentId: 'uielements'
            },
            {
                id: 'grid',
                label: 'Grid',
                link: '/ui-grid',
                parentId: 'uielements'
            },
            {
                id: 'images',
                label: 'Images',
                link: '/ui-images',
                parentId: 'uielements'
            },
            {
                id: 'lightbox',
                label: 'Lightbox',
                link: '/ui-lightbox',
                parentId: 'uielements'
            },
            {
                id: 'modals',
                label: 'Modals',
                link: '/ui-modals',
                parentId: 'uielements'
            },
            {
                id: 'offcanvas',
                label: 'Offcanvas',
                link: '/ui-offcanvas',
                parentId: 'uielements'
            },
            {
                id: 'rangeslider',
                label: 'Range Slider',
                link: '/ui-rangeslider',
                parentId: 'uielements'
            },
            {
                id: 'sessiontimeout',
                label: 'Session Timeout',
                link: '/ui-sessiontimeout',
                parentId: 'uielements'
            },
            {
                id: 'pagination',
                label: 'Pagination',
                link: '/ui-pagination',
                parentId: 'uielements'
            },
            {
                id: 'progressbars',
                label: 'Progress Bars',
                link: '/ui-progressbars',
                parentId: 'uielements'
            },
            {
                id: 'placeholders',
                label: 'Placeholders',
                link: '/ui-placeholders',
                parentId: 'uielements'
            },
            {
                id: 'sweet-alert',
                label: 'Sweet Alert-2',
                link: '/ui-sweet-alert',
                parentId: 'uielements'
            },
            {
                id: 84,
                label: 'Tabs & Accordions',
                link: '/ui-tabs-accordions',
                parentId: 'uielements'
            },
            {
                id: 85,
                label: 'Typography',
                link: '/ui-typography',
                parentId: 'uielements'
            },
            {
                id: 'toasts',
                label: 'Toasts',
                link: '/ui-toasts',
                parentId: 'uielements'
            },
            {
                id: 'video',
                label: 'Video',
                link: '/ui-video',
                parentId: 'uielements'
            },
            {
                id: 'popovers',
                label: 'Popovers',
                link: '/ui-popovers',
                parentId: 'uielements'
            },
            {
                id: 'rating',
                label: 'rating',
                link: '/ui-rating',
                parentId: 'uielements'
            }
        ]
    },
    {
        id: 'forms',
        novidade: false,
        label: 'Forms',
        icon: 'mdi mdi-eraser-variant',
        badge: 8,
        badgecolor: 'bg-danger',
        link: '/#',
        subItems: [
            {
                id: 'form-elements',
                label: 'Form Elements',
                link: '/form-elements',
                parentId: 'forms'
            },
            {
                id: 'form-validation',
                label: 'Form Validation',
                link: '/form-validation',
                parentId: 'forms'
            },
            {
                id: 'form-advanced',
                label: 'Form Advanced',
                link: '/form-advanced',
                parentId: 'forms'
            },
            {
                id: 'form-editor',
                label: 'Form Editor',
                link: '/form-editor',
                parentId: 'forms'
            },
            {
                id: 'form-uploads',
                label: 'form-uploads',
                link: '/form-uploads',
                parentId: 'forms'
            },
            {
                id: 'form-editors',
                label: 'Form X-editable',
                link: '/form-editors',
                parentId: 'forms'
            },
            {
                id: 'form-wizard',
                label: 'Form Wizard',
                link: '/form-wizard',
                parentId: 'forms'
            },
            {
                id: 'form-mask',
                label: 'Form Mask',
                link: '/form-mask',
                parentId: 'forms'
            }
        ]
    },

    {
        id: 'tables',
        novidade: false,
        label: 'Tables',
        icon: 'mdi-table ',
        link: '/#',
        subItems: [
            {
                id: 'tables-basic',
                label: 'Basic Tables',
                link: '/tables-basic',
                parentId: 'tables'
            },
            {
                id: 'table-datatable',
                label: 'Data Tables',
                link: '/table-datatable',
                parentId: 'tables'
            },
            {
                id: 'tables-advanced',
                label: 'Responsive Table',
                link: '/tables-advanced',
                parentId: 'tables'
            },
            {
                id: 'table-editable',
                label: 'Editable Table',
                link: '/table-editable',
                parentId: 'tables'
            }
        ]
    },
    {
        id: 'charts',
        novidade: false,
        label: 'Charts',
        icon: 'mdi mdi-poll ',
        link: '/#',
        subItems: [
            {
                id: 'apexcharts',
                label: 'Apex Charts',
                link: '/chart-apexcharts',
                parentId: 'charts'
            },
            {
                id: 'chartjs',
                label: 'Chart Js',
                link: '/chart-chartjscharts',
                parentId: 'charts'
            },
            {
                id: 'recharts',
                label: 'RE Charts',
                link: '/chart-floatcharts',
                parentId: 'charts'
            },
            {
                id: 'jknobcharts',
                label: 'Jquery Knob Charts',
                link: '/chart-jknobcharts',
                parentId: 'charts'
            },
            {
                id: 'jknobcharts',
                label: 'Sparkline Charts',
                link: '/chart-sparklinecharts',
                parentId: 'charts'
            }
        ]
    },
    {
        id: 'icons',
        novidade: false,
        label: 'Icons',
        icon: 'mdi-brush ',
        link: '/#',
        subItems: [
            {
                id: 'remixicon',
                label: 'Remix Icons',
                link: '/icon-remixicon',
                parentId: 'icons'
            },
            {
                id: 'materialdesign',
                label: 'Material Design',
                link: '/icons-materialdesign',
                parentId: 'icons'
            },
            {
                id: 'fontawesome',
                label: 'font Awesome',
                link: '/icons-fontawesome',
                parentId: 'icons'
            },
            {
                id: 'dripicons',
                label: 'Drip Icons',
                link: '/icon-dripicons',
                parentId: 'icons'
            }
        ]
    },
    {
        id: 'maps',
        novidade: false,
        label: 'Maps',
        icon: 'mdi-map-marker-outline',
        link: '/#',
        subItems: [
            {
                id: 131,
                label: 'Google Maps',
                link: '/maps-google',
                parentId: 'maps'
            },
            {
                id: 132,
                label: 'Vector Maps',
                link: '/maps-vector',
                parentId: 'maps'
            }
        ]
    },
    {
        id: 'multilevel',
        novidade: false,
        label: 'Multi Level',
        icon: 'mdi-share-variant-outline',
        link: '/#',
        subItems: [
            {
                id: 'level1.1',
                label: 'Level 1.1',
                link: '/#',
                parentId: 'multilevel'
            },
            {
                id: 'level1.2',
                label: 'Level 1.2',
                link: '/#',
                parentId: 'multilevel',
                subItems: [
                    {
                        id: 'level2.1',
                        label: 'Level 2.1',
                        link: '/#',
                        parentId: 'level1.2'
                    },
                    {
                        id: 'level2.2',
                        label: 'Level 2.2',
                        link: '/#',
                        parentId: 'level1.2'
                    }
                ]
            }
        ]
    }
];

export { menuItems };
