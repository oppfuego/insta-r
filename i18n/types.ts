export interface Messages {
  common: {
    signIn: string;
    signUp: string;
    topUp: string;
    dashboard: string;
    home: string;
    about: string;
    howItWorks: string;
    balance: string;
    wallet: string;
  };
  hero: {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  services: {
    title: string;
    subtitle: string;
    buyWithBalance: string;
    insufficientBalance: string;
  };
  topUp: {
    title: string;
    subtitle: string;
    currentBalance: string;
    selectAmount: string;
    customAmount: string;
    addBalance: string;
    minimum: string;
    testModeBanner: string;
    paymentNotConfigured: string;
  };
}
