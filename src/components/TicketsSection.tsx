import {useTranslations} from 'next-intl';
export default function TicketsSection() {
 const t=useTranslations('tickets');
 return <section className="section-padding"><div className="max-w-4xl mx-auto"><h2 className="font-display text-3xl font-semibold mb-6">{t('title')}</h2><p className="text-lg leading-relaxed" style={{color:'var(--text-secondary)'}}>{t('body')}</p></div></section>;
}
