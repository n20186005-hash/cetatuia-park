import {notFound} from 'next/navigation';
import {setRequestLocale} from 'next-intl/server';
import Footer from '@/components/Footer';
import GuideManagement from '@/components/GuideManagement';
import {guideMapLinks} from '@/lib/guide-map';
import {guidePlanning} from '@/data/guide-planning';
import GuideVisitDetails, {guideAccessCopy, GuideItinerary, GuideReviewAndMap} from '@/components/GuideVisitDetails';
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
  const plan = guidePlanning[slug];
  const access = guideAccessCopy(locale, details.kind, plan);
  const related = guides.filter(entry => entry.slug !== slug);
  const sameArea = related.filter(entry => visitDetails[entry.slug]?.kind === details?.kind);
  const relatedGuides = [...new Set([...sameArea, ...related])].slice(0, 6);
  const sourceUrl = `https://clujtourism.ro/en/portfolio/${guide.source}/`;
  const planningHeading = zh ? '游览安排' : 'Planning your visit';
  const visitAdvice = content.sections.find(([title]) => title === planningHeading);
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
          <header className="mb-8">
            <h1 className="font-display text-4xl sm:text-5xl leading-tight mb-4">{content.title}</h1>
            <p className="text-xl leading-relaxed mb-4">{content.description === content.intro ? plan[locale].stops[2] : content.description}</p>
            <div className="flex flex-wrap items-center gap-3">
              <a className="rounded-xl border border-[var(--border-color)] px-4 py-2 underline" href={guideMapLinks(details).map}>{zh ? '景点位置' : 'View location'}</a>
              <a className="rounded-xl border border-[var(--border-color)] px-4 py-2 underline" href="#visitor-reviews">{zh ? 'Google Maps 评分与评价' : 'Google Maps ratings and reviews'}</a>
            </div>
            <p className="mt-4 text-sm"><strong>{zh ? '开放时间' : 'Opening hours'}</strong> {access.hours}</p>
          </header>
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
          <section className="my-10">
            <h2 className="font-display text-2xl mb-4">{zh ? '探索景点' : 'Discover the attraction'}</h2>
            <p className="text-lg leading-relaxed">{content.intro}</p>
          </section>
          <section className="my-10">
            <h2 className="font-display text-2xl mb-4">{zh ? '游览建议' : 'Visit tips'}</h2>
            <p><strong className="sr-only">{visitAdvice?.[0]} </strong>{visitAdvice?.[1] ?? (zh ? '建议先确认到访入口，再按开放安排决定参观范围。' : 'Start by checking the visitor approach, then plan the scope of your visit around venue access.')} <a className="underline" href="#itinerary">{zh ? '查看分步路线' : 'See the suggested itinerary'}</a></p>
          </section>
          <section className="my-10">
            <h2 className="font-display text-2xl mb-4">{zh ? '景区特色' : 'Highlights'}</h2>
            <p>{plan[locale].stops[2]}</p>
          </section>
          {details && (
            <GuideManagement
              locale={locale}
              details={details}
              name={content.title}
              context={'history' in content ? content.history : content.intro}
              sourceUrl={sourceUrl}
            />
          )}
          <GuideVisitDetails locale={locale} details={details} plan={plan} sourceUrl={sourceUrl} />
          <section className="my-10">
            <h2 className="font-display text-2xl mb-6">{zh ? '发现景点魅力' : 'What makes this place worth visiting'}</h2>
            {content.sections.filter(([title]) => title !== planningHeading).map(([title, body]) => (
              <section key={title} className="my-8">
                <h3 className="font-display text-xl mb-4">{title}</h3>
                <p className="leading-relaxed text-lg" style={{color: 'var(--text-secondary)'}}>{body}</p>
              </section>
            ))}
          </section>
          <GuideItinerary locale={locale} details={details} plan={plan} />
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
          <GuideReviewAndMap locale={locale} details={details} />
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
