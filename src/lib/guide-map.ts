import type {VisitDetails} from '@/data/nearby-attractions';

export function guideMapLinks(details: VisitDetails) {
  const place = `${details.query}, ${details.address}, Cluj-Napoca, Romania`;
  const search = new URLSearchParams({api: '1', query: place});
  const directions = new URLSearchParams({
    api: '1',
    origin: 'Parcul Cetățuia, Cluj-Napoca, Romania',
    destination: place,
  });

  return {
    map: `https://www.google.com/maps/search/?${search}`,
    directions: `https://www.google.com/maps/dir/?${directions}`,
  };
}
