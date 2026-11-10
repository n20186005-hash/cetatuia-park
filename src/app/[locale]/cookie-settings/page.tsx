import {pageMetadata} from '@/lib/metadata';
import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import CookieSettingsClient from './CookieSettingsClient';

export async function generateMetadata({params}:{params:Promise<{locale:string}>}):Promise<Metadata> {
 const {locale}=await params;const m=(await import(`@/messages/${locale}.json`)).default;
 return pageMetadata(locale,'/cookie-settings',m.cookieSettings.title,locale==='zh'?'采图亚公园独立指南：'+m.cookieSettings.title:'Cetățuia Park independent guide: '+m.cookieSettings.title);
}

export default async function CookiePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <CookieSettingsClient />;
}
