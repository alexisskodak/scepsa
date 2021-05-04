import {
  mdiMenu,
  mdiCheckCircle,
  mdiBookCheck,
  mdiShieldCheck,
  mdiArrowExpandLeft,
  mdiArrowExpandRight,
  mdiSync,
  mdiChevronLeft,
  mdiCheck,
  mdiChevronRight,
} from '@mdi/js';
import colors from 'vuetify/es5/util/colors';

export default function() {
  return {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        light: {
          primary: colors.blue.darken2,
          accent: '#df0000',
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    },
    icons: {
      iconfont: 'mdiSvg',
      values: {
        mdiMenu,
        mdiCheckCircle,
        mdiBookCheck,
        mdiShieldCheck,
        mdiArrowExpandLeft,
        mdiArrowExpandRight,
        mdiSync,
        mdiChevronLeft,
        mdiChevronRight,
        mdiCheck
      },
    },
  };
}
