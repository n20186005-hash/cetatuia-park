import {notFound} from 'next/navigation';
import {setRequestLocale} from 'next-intl/server';
import Footer from '@/components/Footer';
import GuideVisitDetails from '@/components/GuideVisitDetails';
import SourceNotes from '@/components/SourceNotes';
import {guides} from '@/data/guides';
import {visitDetails} from '@/data/nearby-attractions';
import {pageMetadata, origin} from '@/lib/metadata';

type GuideProps = {params: Promise<{locale: string; slug: string}>};

export function generateStaticParams() {
  return ['zh', 'en'].flatMap(locale => guides.map(({slug}) => ({locale, slug})));
}

export async function generateMetadata({params}: GuideProps) {
  const {locale, slug} = await params;
  const guide = guides.find(entry => entry.slug === slug);
  if (!guide || (locale !== 'zh' && locale !== 'en')) notFound();
  const {title, description} = guide[locale];
  return pageMetadata(locale, `/guides/${slug}`, title, description);
}

export default async function GuidePage({params}: GuideProps) {
  const {locale, slug} = await params;
  const guide = guides.find(entry => entry.slug === slug);
  if (!guide || (locale !== 'zh' && locale !== 'en')) notFound();
  setRequestLocale(locale);
  const zh = locale === 'zh';
  const otherLocale = zh ? 'en' : 'zh';
  const content = guide[locale];
  const details = visitDetails[slug];
  const related = guides.filter(entry => entry.slug !== slug);
  const sameArea = related.filter(entry => visitDetails[entry.slug]?.kind === details?.kind);
  const relatedGuides = [...new Set([...sameArea, ...related])].slice(0, 6);
  const sourceUrl = `https://clujtourism.ro/en/portfolio/${guide.source}/`;
  const photoCredit = details?.photoCredit ?? sourceUrl;
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {'@type': 'ListItem', position: 1, name: 'Cetățuia Park', item: `${origin}/${locale}`},
      {'@type': 'ListItem', position: 2, name: content.title, item: `${origin}/${locale}/guides/${slug}`},
    ],
  };

  return (
    <>
      <main>
        <nav className="max-w-4xl mx-auto px-6 pt-8 flex flex-wrap justify-between gap-4" aria-label={zh ? '页面导航' : 'Page navigation'}>
          <a className="underline" href={`/${locale}`}>{zh ? '采图亚公园指南' : 'Cetățuia Park guide'}</a>
          <a className="underline" href={`/${otherLocale}/guides/${slug}`} lang={otherLocale}>{zh ? 'English' : '中文'}</a>
        </nav>
        <article className="max-w-4xl mx-auto px-6 py-12">
          <h1 className="font-display text-4xl sm:text-5xl leading-tight mb-8">{content.title}</h1>
          <p className="text-xl leading-relaxed mb-12">{content.intro}</p>
          {details?.photo && (
            <figure className="mb-10">
              <a href={photoCredit}>
                {/* Source-hosted photos retain their original source link. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={details.photo} alt={content.title} className="w-full max-h-[34rem] object-contain rounded-xl" loading="lazy" />
              </a>
              <figcaption className="text-sm mt-2">
                {zh ? '照片来源 ' : 'Photo source '}
                <a className="underline" href={photoCredit}>{details.photoCredit ? new URL(photoCredit).hostname.replace(/^www\./, '') : 'Cluj Tourism'}</a>
              </figcaption>
            </figure>
          )}
          {details && <GuideVisitDetails locale={locale} details={details} />}
          {content.sections.map(([title, body]) => (
            <section key={title} className="my-10">
              <h2 className="font-display text-2xl mb-4">{title}</h2>
              <p className="leading-relaxed text-lg" style={{color: 'var(--text-secondary)'}}>{body}</p>
            </section>
          ))}
          {content.faq.length > 0 && (
            <section className="my-12">
              <h2 className="font-display text-2xl mb-6">{zh ? '常见问题' : 'Questions before you go'}</h2>
              {content.faq.map(([question, answer]) => (
                <div key={question} className="mb-6">
                  <h3 className="font-semibold mb-2">{question}</h3>
                  <p>{answer}</p>
                </div>
              ))}
            </section>
          )}
          <nav aria-label={zh ? '相关指南' : 'Related guides'}>
            <h2 className="font-display text-2xl mb-4">{zh ? '继续探索' : 'Continue exploring'}</h2>
            <ul className="space-y-4">
              <li><a className="underline" href={`/${locale}`}>{zh ? '采图亚：山顶景观与堡垒历史' : 'Cetățuia: hilltop panorama and fortress history'}</a></li>
              {[...guides.slice(0, 3).filter(entry => entry.slug !== slug), ...relatedGuides.filter(entry => !guides.slice(0, 3).includes(entry))].map(entry => (
                <li key={entry.slug}><a className="underline" href={`/${locale}/guides/${entry.slug}`}>{entry[locale].title}</a></li>
              ))}
            </ul>
          </nav>
        </article>
        <SourceNotes locale={locale} source={guide.source} checkedDate={guides.slice(0, 3).includes(guide) ? undefined : '2026-11-23'} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schema).replace(/</g, '\\u003c')}} />
      </main>
      <Footer />
    </>
  );
}
