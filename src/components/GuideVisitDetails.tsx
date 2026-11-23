import type {GuidePlan} from '@/data/guide-planning';
import type {VisitDetails} from '@/data/nearby-attractions';
import {guideMapLinks} from '@/lib/guide-map';

type GuideLocale = 'zh' | 'en';

const types = {
  garden: {zh: '公园与园林', en: 'Park or garden'},
  museum: {zh: '博物馆与展馆', en: 'Museum or gallery'},
  church: {zh: '宗教与建筑地标', en: 'Place of worship and architectural landmark'},
  landmark: {zh: '城市地标', en: 'Urban landmark'},
};

export function guideAccessCopy(locale: GuideLocale, kind: VisitDetails['kind'], plan: GuidePlan) {
  const zh = locale === 'zh';
  return {
    hours: plan[locale].hours ?? (zh
      ? '外观可从公共区域观看。室内参观时间请向场所或堂区核对。'
      : 'View the exterior from public areas. Check interior visiting hours with the venue or congregation.'),
    admission: plan[locale].admission ?? (kind === 'church'
      ? (zh ? '从公共区域看外观无需购票。团体、导览及入内安排请向堂区核对。' : 'Exterior views from public areas require no ticket. Ask the congregation about interior access, groups and tours.')
      : (zh ? '请查场所当期入场条件及适用票价。' : 'Check the venue’s current access conditions and applicable prices.')),
  };
}

export default function GuideVisitDetails({locale, details, plan, sourceUrl}: {
  locale: GuideLocale;
  details: VisitDetails;
  plan: GuidePlan;
  sourceUrl: string;
}) {
  const zh = locale === 'zh';
  const {hours, admission} = guideAccessCopy(locale, details.kind, plan);
  const {directions} = guideMapLinks(details);
  const transport = {
    garden: zh ? '从采图亚公园出发，导航至步行入口。跨区时可查询当日公交。' : 'From Cetățuia Park, navigate to the pedestrian entrance. For cross-town trips, check same-day transit.',
    museum: zh ? '按路线前往入口。设在教学楼或其他场馆内的展馆，抵达后请按楼层指引寻找。' : 'Follow directions to the entrance. For collections inside academic or other buildings, follow the floor and room signs on arrival.',
    church: zh ? '按路线前往正门，入内参观请留意礼拜与访客时段。' : 'Follow directions to the main door and check worship and visitor times for interior access.',
    landmark: zh ? '沿公共人行道接近地点。步行时请走人行横道与开放通道。' : 'Approach on public pavements. Use crossings and open pedestrian routes.',
  };
  const row = 'grid gap-2 border-b border-[var(--border-color)] px-5 py-4 sm:grid-cols-[10rem_1fr]';

  return (
    <>
      <section className="my-10" aria-labelledby="visit-details">
        <h2 id="visit-details" className="font-display text-2xl mb-4">{zh ? '基本信息' : 'Basic information'}</h2>
        <dl className="overflow-hidden rounded-xl border border-[var(--border-color)]">
          <div className={row}><dt className="font-semibold">{zh ? '当地名称' : 'Local map name'}</dt><dd lang="ro">{details.query}</dd></div>
          <div className={row}><dt className="font-semibold">{zh ? '景点类型' : 'Attraction type'}</dt><dd>{types[details.kind][locale]}</dd></div>
          <div className={row}><dt className="font-semibold">{zh ? '城市与国家' : 'City and country'}</dt><dd>{zh ? '罗马尼亚克鲁日-纳波卡' : 'Cluj-Napoca, Romania'}</dd></div>
          <div className={row}><dt className="font-semibold">{zh ? '地址' : 'Address'}</dt><dd lang="ro">{details.address}</dd></div>
          <div className="grid gap-2 px-5 py-4 sm:grid-cols-[10rem_1fr]"><dt className="font-semibold">{zh ? '到访入口' : 'Visitor approach'}</dt><dd>{plan[locale].stops[0]}</dd></div>
        </dl>
      </section>
      <section className="my-10" aria-labelledby="opening-hours">
        <h2 id="opening-hours" className="font-display text-2xl mb-4">{zh ? '开放时间' : 'Opening hours'}</h2>
        <p>{hours} <a className="underline" href={plan.hoursSource ?? sourceUrl}>{zh ? '查开放公告' : 'Check opening information'}</a></p>
      </section>
      <section className="my-10" aria-labelledby="admission">
        <h2 id="admission" className="font-display text-2xl mb-4">{zh ? '门票价格' : 'Admission prices'}</h2>
        <p>{admission} <a className="underline" href={plan.admissionSource ?? plan.hoursSource ?? sourceUrl}>{zh ? '查入场条件' : 'Check admission information'}</a></p>
      </section>
      <section className="my-10" aria-labelledby="transport">
        <h2 id="transport" className="font-display text-2xl mb-4">{zh ? '交通方式' : 'Getting there'}</h2>
        <p>{transport[details.kind]} {zh ? '推荐从这里接近景点：' : 'Suggested approach: '}{plan[locale].stops[0]}{zh ? '。' : '.'}</p>
        <div className="mt-3 flex flex-wrap gap-4">
          <a className="underline" href={directions}>{zh ? '从采图亚公园出发' : 'Directions from Cetățuia Park'}</a>
          <a className="underline" href={zh ? 'https://ctpcj.ro/' : 'https://www.ctpcj.ro/en/'}>{zh ? '查询 CTP 公交与电车' : 'Check CTP bus and tram services'}</a>
        </div>
      </section>
    </>
  );
}

export function GuideItinerary({locale, details, plan}: {locale: GuideLocale; details: VisitDetails; plan: GuidePlan}) {
  const zh = locale === 'zh';
  const {stops, photoTip} = plan[locale];
  const notices = {
    garden: zh ? '沿开放步道游览。场地养护、天气或活动可能改变通行范围。' : 'Use open paths. Grounds work, weather and events can change access.',
    museum: zh ? '入场前核对最后入场时间。带包、拍照及导览按馆方规定。' : 'Check last admission before visiting and follow museum rules on bags, photos and guided tours.',
    church: zh ? '礼拜期间请降低音量，遵守服装、拍摄和入内指引。' : 'Keep voices low during worship and follow local dress, photography and entry guidance.',
    landmark: zh ? '从公共区域观看。避开车流与客流，不堵住出入口。' : 'View from public areas. Avoid traffic and passenger flows and keep entrances clear.',
  };
  const lodging = {
    garden: zh ? '若打算把这处绿地与采图亚公园排在同一天，可住在中央公园一带。若行程主要在市区东侧，优先看格奥尔盖尼片区的住宿。' : 'For a day combining this green space with Cetățuia, consider the Central Park area. Choose Gheorgheni if most of your plans are on the east side.',
    museum: zh ? '以参观多处展馆为主时，可优先看市中心住宿，再按各馆的开放时段排行程。清早出门时，选择靠近公交站的住处。' : 'Stay in the city centre if you plan to visit several museums, and schedule the day around each venue’s hours. For early starts, favour accommodation with a nearby transit stop.',
    church: zh ? '打算步行参观多处老城宗教建筑，可在联合广场一带住宿。介意夜间街声时，可找广场外围的街巷。' : 'Consider staying around Union Square for a walking itinerary of old-town churches. For quieter nights, look on the side streets beyond the square.',
    landmark: zh ? '以老城步行为主可住联合广场一带。若需要赶早班列车，可比较车站周边住宿与到站路线。' : 'For old-town walks, look around Union Square. If you have an early train, compare lodging near the station and the route to the forecourt.',
  };
  return (
    <>
      <section className="my-10" aria-labelledby="itinerary">
        <h2 id="itinerary" className="font-display text-2xl mb-4">{zh ? '游览路线' : 'Suggested itinerary'}</h2>
        <ol className="travel-guide-steps list-decimal space-y-3 pl-7">{stops.map(stop => <li key={stop} className="pl-2">{stop}</li>)}</ol>
      </section>
      <section className="my-10" aria-labelledby="visitor-notes">
        <h2 id="visitor-notes" className="font-display text-2xl mb-4">{zh ? '游览须知' : 'Visitor notes'}</h2>
        <p>{notices[details.kind]}</p>
      </section>
      <section className="my-10" aria-labelledby="photo-viewpoints">
        <h2 id="photo-viewpoints" className="font-display text-2xl mb-4">{zh ? '拍照机位' : 'Photo viewpoints'}</h2>
        <p>{photoTip}</p>
      </section>
      <section className="my-10" aria-labelledby="lodging">
        <h2 id="lodging" className="font-display text-2xl mb-4">{zh ? '住宿建议' : 'Where to stay'}</h2>
        <p>{lodging[details.kind]}</p>
      </section>
    </>
  );
}

export function GuideReviewAndMap({locale, details}: {locale: GuideLocale; details: VisitDetails}) {
  const zh = locale === 'zh';
  const {map, directions} = guideMapLinks(details);
  return (
    <>
      <section className="my-10" aria-labelledby="visitor-reviews">
        <h2 id="visitor-reviews" className="font-display text-2xl mb-4">{zh ? '游客评价' : 'Visitor reviews'}</h2>
        <p>{zh ? '查看景点的实时评分、评价数量和近期游客反馈。' : 'See the attraction’s current score, review count and recent visitor feedback.'}</p>
        <a className="mt-3 inline-block underline" href={map}>{zh ? '在 Google Maps 查看评分与评价' : 'See ratings and reviews on Google Maps'}</a>
      </section>
      <section className="my-10 rounded-xl border border-[var(--border-color)] p-6" aria-labelledby="directions-map">
        <h2 id="directions-map" className="font-display text-2xl mb-4">{zh ? '交通指南与地图' : 'Address and map'}</h2>
        <address className="not-italic"><span lang="ro">{details.address}</span>{zh ? "，罗马尼亚克鲁日-纳波卡" : ", Cluj-Napoca, Romania"}</address>
        <div className="mt-4 flex flex-wrap gap-4">
          <a className="underline" href={map}>{zh ? '打开景点地图' : 'Open attraction map'}</a>
          <a className="underline" href={directions}>{zh ? '规划路线' : 'Plan directions'}</a>
        </div>
      </section>
    </>
  );
}
