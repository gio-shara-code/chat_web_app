module.exports = {
    purge: ['./src/**/*.tsx'],
    darkMode: false,
    theme: {
        extend: {
            textColor: {
                'black-hell': '#52585D',
                white: '#FDFDFE',
                gray: '#96A9BA',
            },
            padding: {
                20: '20px',
            },
            width: {
                55: '55px',
                100: '100px',
            },
            height: {
                55: '55px',
            },
            maxWidth: {
                350: '350px',
                40: '40px',
            },
            maxHeight: {
                40: '40px',
            },
            borderWidth: {
                1.5: '1.5px',
            },
        },
        minWidth: {
            0: '0',
            15: '15px',
            250: '250px',
            450: '450px',
            '1/6': '16%',
            '1/5': '20%',
            '1/2': '50%',
            '3/4': '75%',
            full: '100%',
        },

        backgroundColor: (theme) => ({
            ...theme('colors'),
            'hell-blue': '#E3F6FC',
            'dark-blue': '#6588DE',
        }),
        borderColor: (theme) => ({
            ...theme('colors'),
            yellow: '#F3BA4A',
        }),
        fontFamily: {
            poppins: ['Poppins'],
        },
    },
    plugins: [],
}
