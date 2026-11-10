import type {Metadata} from 'next';
export const origin='https://www.cetatuiapark.com';
export function pageMetadata(locale:string,path:string,title:string,description:string):Metadata {
 const url=`${origin}/${locale}${path}`;
 return {title,description,alternates:{canonical:url,languages:{zh:`${origin}/zh${path}`,en:`${origin}/en${path}`,'x-default':`${origin}/zh${path}`}},openGraph:{title,description,url,siteName:'Cetățuia Park',type:'website',locale:locale==='zh'?'zh_CN':'en_US'}};
}
