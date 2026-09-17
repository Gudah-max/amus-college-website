import { media } from './media';
export const galleryItems = [
  { id: 'campus', category: 'Campus', image: media.schoolLead, source: media.schoolLead.source, alt: media.schoolLead.alt, caption: null, focalPoint: media.schoolLead.focalPoint, status: media.schoolLead.status, captionStatus: media.schoolLead.captionStatus },
  { id: 'community', category: 'Student Life', image: media.studentsCommunity, source: media.studentsCommunity.source, alt: media.studentsCommunity.alt, caption: null, focalPoint: media.studentsCommunity.focalPoint, status: media.studentsCommunity.status, captionStatus: media.studentsCommunity.captionStatus },
  { id: 'study', category: 'Learning', image: media.learningStudy, source: media.learningStudy.source, alt: media.learningStudy.alt, caption: null, focalPoint: media.learningStudy.focalPoint, status: media.learningStudy.status, captionStatus: media.learningStudy.captionStatus },
  { id: 'boarding', category: 'Student Life', image: media.boarding, source: media.boarding.source, alt: media.boarding.alt, caption: null, focalPoint: 'center', status: media.boarding.status, captionStatus: 'awaiting-confirmation' },
  { id: 'performance', category: 'Student Life', image: media.beyond, source: media.beyond.source, alt: media.beyond.alt, caption: null, focalPoint: 'center', status: media.beyond.status, captionStatus: 'awaiting-confirmation' },
  { id: 'debate', category: 'Student Life', image: media.debate, source: media.debate.source, alt: media.debate.alt, caption: null, focalPoint: 'center', status: media.debate.status, captionStatus: 'awaiting-confirmation' },
  { id: 'scouting', category: 'Student Life', image: media.scouting, source: media.scouting.source, alt: media.scouting.alt, caption: null, focalPoint: 'center', status: media.scouting.status, captionStatus: 'awaiting-confirmation' },
  { id: 'sport', category: 'Sports', image: media.sportAerial, source: media.sportAerial.source, alt: media.sportAerial.alt, caption: null, focalPoint: 'center', status: media.sportAerial.status, captionStatus: 'awaiting-confirmation' },
  { id: 'volleyball', category: 'Sports', image: media.sportsVolleyball, source: media.sportsVolleyball.source, alt: media.sportsVolleyball.alt, caption: null, focalPoint: media.sportsVolleyball.focalPoint, status: media.sportsVolleyball.status, captionStatus: media.sportsVolleyball.captionStatus },
] as const;
export const galleryCategories = ['All','Campus','Learning','Sports','Student Life'] as const;
