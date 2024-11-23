tailwind.config = {
    theme: {
        extend: {
            animation: {
                'slide-down': 'slideDown 0.8s ease-out',
            },
            keyframes: {
                slideDown: {
                    '0%': { opacity: '0', transform: 'translateY(-50px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
        },
    },
};
