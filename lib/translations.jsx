export const translations = {
  fr: {
    nav: {
      home: 'Accueil',
      dev: 'Développeur',
      copy: 'Copywriter',
      blog: 'Blog',
      contact: 'Contact'
    },
    home: {
      title: 'Développeur Web & Copywriter',
      subtitle: 'Créateur d\'expériences digitales et de contenus qui convertissent',
      devChoice: 'Je recherche un développeur web',
      copyChoice: 'Je recherche un copywriter',
      devDescription: 'Sites web modernes, applications React et solutions sur mesure',
      copyDescription: 'Contenus persuasifs, stratégies éditoriales et copywriting'
    },
    dev: {
      title: 'Développeur Web Full-Stack',
      cta: 'Contactez-moi pour un projet dev',
      about: 'À propos',
      portfolio: 'Portfolio Développement',
      blog: 'Blog Tech',
      faq: 'FAQ Développeur',
      finalCta: 'Obtenir un devis développement'
    },
    copy: {
      title: 'Copywriter & Stratège de Contenu',
      cta: 'Contactez-moi pour un projet rédactionnel',
      about: 'À propos',
      portfolio: 'Portfolio Copywriting',
      blog: 'Blog Copywriting',
      faq: 'FAQ Copywriter',
      finalCta: 'Obtenir un devis rédaction'
    },
    contact: {
      title: 'Demandez votre devis personnalisé',
      serviceType: 'Type de service',
      generateQuote: 'Générer mon pré-devis',
      additionalInfo: 'Informations complémentaires'
    },
    blog: {
      title: 'Blog',
      searchPlaceholder: 'Rechercher un article...',
      categories: 'Catégories',
      recent: 'Articles récents'
    },
    common: {
      readMore: 'Lire la suite',
      loadMore: 'Charger plus',
      backToTop: 'Retour en haut',
      darkMode: 'Mode sombre',
      lightMode: 'Mode clair'
    }
  },
  en: {
    nav: {
      home: 'Home',
      dev: 'Developer',
      copy: 'Copywriter',
      blog: 'Blog',
      contact: 'Contact'
    },
    home: {
      title: 'Web Developer & Copywriter',
      subtitle: 'Creator of digital experiences and converting content',
      devChoice: 'I need a web developer',
      copyChoice: 'I need a copywriter',
      devDescription: 'Modern websites, React applications and custom solutions',
      copyDescription: 'Persuasive content, editorial strategies and copywriting'
    },
    dev: {
      title: 'Full-Stack Web Developer',
      cta: 'Contact me for a dev project',
      about: 'About',
      portfolio: 'Development Portfolio',
      blog: 'Tech Blog',
      faq: 'Developer FAQ',
      finalCta: 'Get a development quote'
    },
    copy: {
      title: 'Copywriter & Content Strategist',
      cta: 'Contact me for a copywriting project',
      about: 'About',
      portfolio: 'Copywriting Portfolio',
      blog: 'Copywriting Blog',
      faq: 'Copywriter FAQ',
      finalCta: 'Get a copywriting quote'
    },
    contact: {
      title: 'Request your personalized quote',
      serviceType: 'Service type',
      generateQuote: 'Generate my pre-quote',
      additionalInfo: 'Additional information'
    },
    blog: {
      title: 'Blog',
      searchPlaceholder: 'Search articles...',
      categories: 'Categories',
      recent: 'Recent articles'
    },
    common: {
      readMore: 'Read more',
      loadMore: 'Load more',
      backToTop: 'Back to top',
      darkMode: 'Dark mode',
      lightMode: 'Light mode'
    }
  },
  jp: {
    nav: {
      home: 'ホーム',
      dev: '開発者',
      copy: 'コピーライター',
      blog: 'ブログ',
      contact: 'お問い合わせ'
    },
    home: {
      title: 'ウェブ開発者＆コピーライター',
      subtitle: 'コンバージョンするデジタル体験とコンテンツの創造者',
      devChoice: 'ウェブ開発者を探しています',
      copyChoice: 'コピーライターを探しています',
      devDescription: 'モダンなウェブサイト、Reactアプリケーション、カスタムソリューション',
      copyDescription: '説得力のあるコンテンツ、編集戦略、コピーライティング'
    },
    dev: {
      title: 'フルスタックウェブ開発者',
      cta: '開発プロジェクトのお問い合わせ',
      about: '私について',
      portfolio: '開発ポートフォリオ',
      blog: 'テックブログ',
      faq: '開発者FAQ',
      finalCta: '開発見積もりを取得'
    },
    copy: {
      title: 'コピーライター＆コンテンツ戦略家',
      cta: 'コピーライティングプロジェクトのお問い合わせ',
      about: '私について',
      portfolio: 'コピーライティングポートフォリオ',
      blog: 'コピーライティングブログ',
      faq: 'コピーライターFAQ',
      finalCta: 'コピーライティング見積もりを取得'
    },
    contact: {
      title: 'パーソナライズされた見積もりをリクエスト',
      serviceType: 'サービスタイプ',
      generateQuote: '事前見積もりを生成',
      additionalInfo: '追加情報'
    },
    blog: {
      title: 'ブログ',
      searchPlaceholder: '記事を検索...',
      categories: 'カテゴリー',
      recent: '最近の記事'
    },
    common: {
      readMore: '続きを読む',
      loadMore: 'もっと読み込む',
      backToTop: 'トップに戻る',
      darkMode: 'ダークモード',
      lightMode: 'ライトモード'
    }
  }
}

export function useTranslation(locale = 'fr') {
  return translations[locale] || translations.fr
}