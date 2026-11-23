import type {VisitDetails} from '@/data/nearby-attractions';

const operatorNamesZh: Record<string, string> = {
  'Babeș-Bolyai University': '巴贝什-博雅伊大学',
  'Ethnographic Museum of Transylvania': '特兰西瓦尼亚民族志博物馆',
  'National History Museum of Transylvania': '特兰西瓦尼亚国家历史博物馆',
  'Cluj-Napoca Art Museum': '克鲁日-纳波卡艺术博物馆',
  'Cluj Orthodox Metropolis': '克鲁日东正教都主教区',
  'Plan B Foundation': 'Plan B 基金会',
};

export default function GuideManagement({locale, details, name, context, sourceUrl}: {
  locale: 'zh' | 'en';
  details: VisitDetails;
  name: string;
  context: string;
  sourceUrl: string;
}) {
  const zh = locale === 'zh';
  const {operator, contact} = details;
  const operatorName = operator && (zh ? operatorNamesZh[operator] ?? operator : operator);

  return (
    <section className="my-10 rounded-xl border border-[var(--border-color)] p-6 sm:p-8" aria-labelledby="guide-management">
      <h2 id="guide-management" className="font-display text-2xl mb-4">{zh ? `关于${name}` : `About ${name}`}</h2>
      <p className="leading-relaxed">
        {operatorName
          ? (zh ? `这里由${operatorName}负责。到访前可向该机构核对开放和参观安排。` : `${operatorName} operates this site. Check current opening and visitor arrangements with the institution.`)
          : contact
            ? (zh ? `到访安排可向${contact.zh}查询。日常维护单位请以地点公告为准。` : `For visitor arrangements, contact ${contact.en}. Refer to notices at the site for maintenance responsibilities.`)
            : (zh ? '管理与现场开放安排请以地点公告为准。' : 'Check venue notices for management and visitor arrangements.')}
      </p>
      <p className="mt-4 leading-relaxed">{context}</p>
      <a className="mt-4 inline-block underline" href={sourceUrl}>{zh ? '查阅地点资料' : 'View site information'}</a>
    </section>
  );
}
