'use client';
import {useTranslations,useLocale} from 'next-intl';
export default function CookieSettingsClient(){const t=useTranslations('cookieSettings');const h=useTranslations('header');const locale=useLocale();return <main className="max-w-3xl mx-auto px-6 py-24"><a href={`/${locale}`}>{h('backToHome')}</a><h1 className="font-display text-4xl my-8">{t('title')}</h1><p className="leading-relaxed">{t('description')}</p><a className="inline-block mt-8 underline" href={`/${locale}/privacy-policy`}>{locale==='zh'?'隐私政策':'Privacy policy'}</a></main>}
