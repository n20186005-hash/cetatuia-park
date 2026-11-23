import type {VisitDetails} from '@/data/nearby-attractions';

export default function GuideVisitDetails({locale, details}: {locale: 'zh' | 'en'; details: VisitDetails}) {
  const zh = locale === 'zh';
  const map = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(details.query + ', Cluj-Napoca, Romania')}`;
  const directions = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent('Parcul Cetățuia, Cluj-Napoca')}&destination=${encodeURIComponent(details.query + ', Cluj-Napoca')}`;
  const operatorsZh: Record<string, string> = {
    'Babeș-Bolyai University': '巴贝什-博雅伊大学',
    'Ethnographic Museum of Transylvania': '特兰西瓦尼亚民族志博物馆',
    'National History Museum of Transylvania': '特兰西瓦尼亚国家历史博物馆',
    'Cluj-Napoca Art Museum': '克鲁日-纳波卡艺术博物馆',
    'Cluj Orthodox Metropolis': '克鲁日东正教都主教区',
    'Plan B Foundation': 'Plan B 基金会',
  };
  const operator = details.operator && (zh ? operatorsZh[details.operator] ?? details.operator : details.operator);
  const transport = {
    garden: zh ? '从采图亚公园出发，先查看步行路线和目的地入口。若距离较远，可查 CTP 的实时公交路线。' : 'From Cetățuia Park, check walking directions to the park entrance. For longer journeys, check current CTP public transport routes.',
    museum: zh ? '按地图前往博物馆入口。大学馆藏可能设在教学楼内，出发前请核对楼号、入口及预约要求。' : 'Navigate to the museum entrance. Some university collections are inside academic buildings, so check the building, entrance and booking arrangements before leaving.',
    church: zh ? '按地图步行至教堂正门；若计划入内，请避开礼拜时段，并留意现场指引。' : 'Follow directions to the main entrance. For an interior visit, check service times and follow signs on arrival.',
    landmark: zh ? '查看从采图亚公园出发的步行路线，沿公共人行道抵达。' : 'Check walking directions from Cetățuia Park and approach on public pavements.',
  };
  return (
    <section className="my-10" aria-labelledby="visit-details">
      <h2 id="visit-details" className="font-display text-2xl mb-4">{zh ? '基本信息与交通' : 'Visitor information and directions'}</h2>
      <dl className="grid sm:grid-cols-2 gap-5 rounded-xl border border-[var(--border-color)] p-6">
        <div><dt className="font-semibold">{zh ? '地址' : 'Address'}</dt><dd>{details.address || 'Cluj-Napoca, Romania'}</dd></div>
        <div><dt className="font-semibold">{zh ? '管理主体' : 'Management'}</dt><dd>{operator || (zh ? '请通过地点资料或现场公告核实' : 'Check the venue listing or on-site notices')}</dd></div>
        <div><dt className="font-semibold">{zh ? '开放与门票' : 'Opening hours and admission'}</dt><dd>{details.hours || (zh ? '请在出发前查看地点资料及当日公告。' : 'Check the venue information and notices before visiting.')}</dd></div>
        <div><dt className="font-semibold">{zh ? '游客评分与评价' : 'Visitor ratings and reviews'}</dt><dd><a className="underline" href={map}>{zh ? '在 Google 地图查看当前评分及评价' : 'See current ratings and reviews on Google Maps'}</a></dd></div>
        <div className="sm:col-span-2"><dt className="font-semibold">{zh ? '从采图亚公园出发' : 'From Cetățuia Park'}</dt><dd>{transport[details.kind]} <a className="underline" href={directions}>{zh ? '查看路线' : 'Get directions'}</a></dd></div>
      </dl>
    </section>
  );
}
