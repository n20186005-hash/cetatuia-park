import {origin} from '@/lib/metadata';
import {guides} from '@/data/guides';
export default function sitemap(){const paths=['','/privacy-policy','/terms-of-service','/cookie-settings',...guides.map(g=>`/guides/${g.slug}`)];return ['zh','en'].flatMap(locale=>paths.map(path=>({url:`${origin}/${locale}${path}`,alternates:{languages:{zh:`${origin}/zh${path}`,en:`${origin}/en${path}`}}})));}
