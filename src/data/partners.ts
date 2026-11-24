export interface Partner {
  name: string;
  description: string;
  logo: string;
  website: string;
  color: string;
}

const assetBase = 'https://raw.githubusercontent.com/bitbybitcoding/web/main/.github/assets';

export const mainPartner: Partner = {
  name: 'BAGUS Together',
  description:
    'BAGUS Together is a vibrant network of ground-up initiatives empowering communities across Singapore. As our key partner, they provide essential support and resources to help us reach more young learners.',
  logo: `${assetBase}/bagus_together.png`,
  website: 'https://www.bagustogether.sg/about',
  color: 'from-bit-lavender to-bit-red',
};

export const keyPartners: Partner[] = [
  {
    name: 'SGPO',
    description:
      "The Singapore Government Partnerships Office (SGPO) helps every citizen and groundup group play a part in shaping our country's future, providing crucial support for our mission.",
    logo: `${assetBase}/sgpo.jpeg`,
    website: 'https://sgpo.gov.sg',
    color: 'from-bit-turquoise to-bit-green',
  },
  {
    name: '*SCAPE',
    description:
      '*SCAPE is a unique blend of retail and community space, and a vibrant hub where youth gather to create, connect, and grow. As venue partner, they play an important role in the success of our sessions.',
    logo: `${assetBase}/scape.png`,
    website: 'https://www.scape.sg',
    color: 'from-bit-red to-bit-lavender',
  },
  {
    name: 'Educado SDC',
    description:
      "As a fellow groundup aiming to bring high-quality tuition to all secondary and JC students for free, Educado's mission aligns closely with ours.",
    logo: `${assetBase}/educado.jpeg`,
    website: 'https://sites.google.com/view/project-educado/home?authuser=0',
    color: 'from-bit-turquoise to-bit-green',
  },
  {
    name: 'Victoria Junior College',
    description:
      "The alma mater of many of our tutors, VJC provides the subject rigour that keeps us competitive. Computing teachers from VJC also advise on the curriculum.",
    logo: `${assetBase}/vjc.png`,
    website: 'https://www.victoriajc.moe.edu.sg',
    color: 'from-bit-lavender to-bit-turquoise',
  },
  {
    name: "Stick 'Em",
    description:
      "Stick 'Em is a Singaporean start-up aiming to make STEM education accessible to all. They are our main partner for our robotics branch.",
    logo: `${assetBase}/stickem.jpeg`,
    website: 'https://stickem.sg',
    color: 'from-bit-red to-bit-lavender',
  },
  {
    name: 'CSM Academy International',
    description:
      "CSM Academy offers courses to working professionals and students. As venue partner, they play a key role in the success of our sessions.",
    logo: `${assetBase}/csm_academy.png`,
    website: 'https://csmacademy.edu.sg',
    color: 'from-bit-turquoise to-bit-green',
  },
  {
    name: 'Soristic',
    description:
      "Soristic is a social impact firm aiming to bring resources to the groundups and charities that need it the most. They provide key support in navigating the grant landscape.",
    logo: `${assetBase}/soristic.jpeg`,
    website: 'https://soristic.asia',
    color: 'from-bit-lavender to-bit-turquoise',
  },
  {
    name: "WeWork",
    description:
      "WeWork is a shared working space for many professionals in the heart of Singapore. As venue partner, they play a key role in the success of our sessions.",
    logo: `${assetBase}/wework.jpeg`,
    website: 'https://www.wework.com/en-GB',
    color: 'from-bit-red to-bit-lavender',
  },
  {
    name: 'Dibs',
    description:
      "Dibs is a booking service company with agent integrations that allows for quick and seamless bookings. As bookings partner, they provide our event management software.",
    logo: `${assetBase}/dibs.png`,
    website: 'https://www.usedibs.com',
    color: 'from-bit-turquoise to-bit-green',
  },
  {
    name: 'Club Rainbow',
    description:
      "Club Rainbow is an independent charity that works with children with chronic illnesses. They partner with BbB to deliver fun coding sessions to their beneficiaries.",
    logo: `${assetBase}/clubrainbow.webp`,
    website: 'https://www.clubrainbow.org',
    color: 'from-bit-lavender to-bit-turquoise',
  },
  {
    name: "SG Social Support",
    description:
      "SG Social Support is a portal for groundups, charities and organisations looking to do good. BbB is proud to be a listed groundup.",
    logo: `${assetBase}/sgsocialsupport.png`,
    website: 'https://sgsocialsupport.com/receive',
    color: 'from-bit-red to-bit-lavender',
  },
  {
    name: 'The Changemakers Guild',
    description:
      "The Changemakers Guild is an initiative by Soristic and SG Social Impact to foster a community of changemakers who do meaningful work for society together. BbB is a proud member of the guild.",
    logo: `${assetBase}/changemakersguild.jpeg`,
    website: 'https://sgsocialsupport.com/announcement/X276RRMnTbA',
    color: 'from-bit-turquoise to-bit-green',
  },
  {
    name: 'Ismaili CIVIC',
    description:
      "As venue and programme partner, Ismaili CIVIC ensures that youths from the Geylang and Aljunied areas will always have access to our coding programmes.",
    logo: `${assetBase}/Ismaili.jpeg`,
    website: 'https://the.ismaili/',
    color: 'from-bit-lavender to-bit-turquoise',
  },
  {
    name: "Hub with a Heart @ Serangoon",
    description:
      "Hub With A Heart @ Serangoon is a youth hangout, study, and community space in Serangoon Central Village for youths aged 13 to 35. As venue partner, they help bring our programmes to youths from the North.",
    logo: `${assetBase}/HWAH.png`,
    website: 'https://www.touch.org.sg/get-assistance/children-youth-and-families/youth/youth-community-outreach-and-mentoring.html',
    color: 'from-bit-red to-bit-lavender',
  },
  {
    name: 'Buona Vista Zone D RN',
    description:
      "As venue partner, BV Zone D RN ensures that youths from the Buona Vista and Jurong regions will always have access to our coding programmes.",
    logo: `${assetBase}/BV Zone D RN.jpeg`,
    website: 'https://pa.gov.sg',
    color: 'from-bit-turquoise to-bit-green',
  },
];

export const supportingPartners: Partner[] = [
  {
    name: 'NVPC',
    description:
      'National Volunteer & Philanthropy Centre champions strategic giving and volunteerism in Singapore, supporting our mission through the BAGUS network.',
    logo: `${assetBase}/nvpc.png`,
    website: 'https://nvpc.org.sg',
    color: 'from-bit-turquoise to-bit-green',
  },
  {
    name: 'Temasek Foundation',
    description:
      'Temasek Foundation supports sustainable and resilient communities. Their backing through BAGUS enables us to scale our impact.',
    logo: `${assetBase}/temasek_foundation.webp`,
    website: 'https://www.temasekfoundation.org.sg',
    color: 'from-bit-red to-bit-lavender',
  },
  {
    name: 'Tote Board',
    description:
      "As Singapore's primary funding agency for social causes, Tote Board provides crucial support for our educational programmes.",
    logo: `${assetBase}/tote_board.png`,
    website: 'https://www.toteboard.gov.sg',
    color: 'from-bit-lavender to-bit-turquoise',
  },
];

export const governmentPartners: Partner[] = [
  {
    name: 'MCCY',
    description:
      'The Ministry of Culture, Community and the Youth is responsible for the formulation and implementation of policies related to the arts, sports, youth and community in Singapore. They support us through SGPO and *SCAPE.',
    logo: `${assetBase}/MCCY_profile.png`,
    website: 'https://www.mccy.gov.sg',
    color: 'from-bit-turquoise to-bit-green',
  },
  {
    name: 'MSF',
    description:
      'The Ministry of Social and Family Development is responsible for the formulation and implementation of policies related to the community infrastructure, programmes and services in Singapore. They partner us to deliver our programmes to youths from less privileged backgrounds.',
    logo: `${assetBase}/msf.png`,
    website: 'https://www.msf.gov.sg',
    color: 'from-bit-red to-bit-lavender',
  },
  {
    name: "People's Association",
    description:
      "The People's Association (PA) is an agency that promotes racial harmony, social cohesion, and community participation while acting as a bridge between the government and residents under MCCY. They support our programmes via their network of community centres and resident spaces.",
    logo: `${assetBase}/PA Logo.avif`,
    website: 'https://pa.gov.sg',
    color: 'from-bit-lavender to-bit-turquoise',
  },
];

export const partnerLogoWall = [
  mainPartner,
  ...keyPartners,
  ...supportingPartners,
  ...governmentPartners,
];
