import NearbyGuides from '@/components/NearbyGuides';
import SourceNotes from '@/components/SourceNotes';
import {notFound} from 'next/navigation';
import {pageMetadata} from '@/lib/metadata';
import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Intro from '@/components/Intro';
import BasicInfo from '@/components/BasicInfo';
import HoursSection from '@/components/HoursSection';
import TicketsSection from '@/components/TicketsSection';
import TransportSection from '@/components/TransportSection';
import InfoSection from '@/components/InfoSection';
import RouteSection from '@/components/RouteSection';
import PhotoSpotsSection from '@/components/PhotoSpotsSection';
import HotelsSection from '@/components/HotelsSection';
import Gallery from '@/components/Gallery';
import Reviews from '@/components/Reviews';
import MapEmbed from '@/components/MapEmbed';
import Footer from '@/components/Footer';

export async function generateMetadata({params}:{params:Promise<{locale:string}>}) {
 const {locale}=await params;
 if(!['zh','en'].includes(locale))notFound();
 const messages=(await import(`@/messages/${locale}.json`)).default;
 return pageMetadata(locale,'',messages.meta.title,messages.meta.description);
}
export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <BasicInfo />
        <HoursSection />
        <TicketsSection />
        <TransportSection />
        <InfoSection />
        <RouteSection />
        <PhotoSpotsSection />
        <HotelsSection />
        <Reviews />
        <Gallery />
        <MapEmbed />
        <NearbyGuides locale={locale}/>
        <section className="section-padding"><div className="max-w-4xl mx-auto"><h2 className="font-display text-3xl mb-6">{locale==='zh'?'常见问题':'Questions before you go'}</h2><h3 className="font-semibold mb-2">{locale==='zh'?'采图亚适合看什么？':'What is Cetățuia best suited to?'}</h3><p className="mb-6">{locale==='zh'?'官方旅游介绍重点是城市全景与十八世纪堡垒历史。':'The official tourism description highlights the city panorama and the eighteenth-century fortification history.'}</p><h3 className="font-semibold mb-2">{locale==='zh'?'全天开放信息可靠吗？':'Is the 24-hour listing confirmed by the operator?'}</h3><p>{locale==='zh'?'这是 2026 年 11 月 10 日的 Google Maps 第三方快照，尚无管理方时间表核实。请出发前确认当前情况。':'It is a dated third-party Google Maps snapshot from 10 November 2026. An operator timetable has not been verified; check current conditions before setting out.'}</p></div></section>
        <SourceNotes locale={locale}/>
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({'@context':'https://schema.org','@type':'TouristAttraction',name:'Parcul Cetățuia',url:`https://www.cetatuiapark.com/${locale}`,geo:{'@type':'GeoCoordinates',latitude:46.7753341,longitude:23.5816514},address:{'@type':'PostalAddress',streetAddress:'Strada Emil Racoviță 60a',postalCode:'400124',addressLocality:'Cluj-Napoca',addressCountry:'RO'}})}}/>
      </main>
      <Footer />
    </>
  );
}
