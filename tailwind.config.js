module.exports = {
  purge: ['./src/**/*.js', './src/**/*.jsx', './src/**/*.ts', './src/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1140px',
    },
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.25em',
      nav: '.15em',
    },
    extend: {
      colors: {
        parityPink: '#FF1864',
        parityRed: '#CC1350',
        parityGray: '#eff1f0',
        parityBlack: '#111',
        parityWhite: '#F1F3F2',
        parityBorder: '#3c3c3c',
        buttonRed: '#ff0048',
        textDark: '#282828',
        textLight: '#757575',
        navItemColor: '#b4b5b1',
        footerDark: '#1b1b1b',
        footerLight: '#282828',
        twitter: '#00aced',
        signerHeroBg: '#0E0E0E',
      },
      height: {
        hero: '70vh',
        googleForm: '1500px',
      },
      minHeight: {
        hero: '70vh',
        heroMin: '500px',
        heroMinLg: '700px',
      },
      spacing: {
        84: '22rem',
      },
      fontFamily: {
        title: ['ManifoldCF', 'Helvetica', 'Arial', 'sans'],
        body: ['Roboto', 'Helvetica', 'Arial', 'sans'],
        quote: ['serif'],
      },
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-out-down': {
          from: {
            opacity: '1',
            transform: 'translateY(0px)',
          },
          to: {
            opacity: '0',
            transform: 'translateY(10px)',
          },
        },
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-out-up': {
          from: {
            opacity: '1',
            transform: 'translateY(0px)',
          },
          to: {
            opacity: '0',
            transform: 'translateY(10px)',
          },
        },
        'fade-in': {
          from: {
            opacity: '0',
          },
          to: {
            opacity: '1',
          },
        },
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.5s ease-out',
        'fade-out-down': 'fade-out-down 0.5s ease-out',
        'fade-in-up': 'fade-in-up 0.5s ease-out',
        'fade-out-up': 'fade-out-up 0.5s ease-out',
        'fade-in': 'fade-in 0.5s ease-out',
        'fade-in-slow': 'fade-in 2s ease-in',
      },
      backgroundImage: theme => ({
        'hero-pattern': "url('./background-images/bg-light-1.png')",
        'hero-pattern-2': "url('./background-images//bg-light-2.png')",
        'hero-pattern-dark': "url('./background-images//bg-dark-1.png')",
        'hero-pattern-dark-2': "url('./background-images/bg-dark-2.png')",
        'hero-about': "url('./background-images/bg-red-1.jpg')",
        'hero-substrate': "url('./background-images/cover-substrate-wave-3.jpg')",
        'hero-signer': "url('./background-images/cover-parity-signer.jpg')",
        'hero-blogPage': "url('./background-images/parity-office-pink.jpg')",
        'hero-rustJobs': "url('./background-images/duotone-1.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
