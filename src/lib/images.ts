const px = (id: number, w = 900) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

export const IMAGES = {
  hero: px(30243808, 1800), // graduates in cap and gown, Lagos
  access: px(32904446, 800), // graduation portrait with diploma
  undergraduate: px(27769510, 800), // students in lecture hall
  postgraduate: px(5940710, 800), // campus study
  professional: px(32632176, 800), // graduates celebrating
  campus: px(32711384, 1000), // group of students in classroom
  ctaBand: px(8197503, 1600), // students studying
  classroom: px(32773026, 800), // student in classroom
  lecture: px(8199656, 800), // lecture scene
  study: px(8197554, 800), // students studying together
};

export const PROGRAM_IMAGES: Record<string, string> = {
  "international-access": IMAGES.access,
  "undergraduate-accounting": IMAGES.lecture,
  "undergraduate-business": IMAGES.undergraduate,
  "undergraduate-law": IMAGES.classroom,
  "undergraduate-it": IMAGES.study,
  postgraduate: IMAGES.postgraduate,
  "professional-ican": IMAGES.professional,
  "professional-cibn": IMAGES.hero,
  "professional-acca": IMAGES.campus,
};
