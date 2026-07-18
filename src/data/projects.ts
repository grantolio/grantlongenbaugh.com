export interface Project {
  slug: string;
  title: string;
  shortDesc: string;
  types: string;
  heroImage: string;
  images: string[];
  content: string[];
  subsections?: { title: string; description: string }[];
  placeholder?: string;
}

export const projects: Project[] = [
  {
    slug: 'janus-motorcycles',
    title: 'Janus Motorcycles',
    shortDesc:
      'Brand identity, web design, product photography, advertising, and vendor network management for a handbuilt motorcycle company.',
    types: 'Brand Identity / Web / Photography / Advertising',
    heroImage:
      'https://images.squarespace-cdn.com/content/v1/54fc6804e4b0c724169f8085/1534699001249-6FXS4GDUB0NL52NJRCDA/Screen+Shot+2018-08-19+at+1.16.09+PM.png',
    images: [
      'https://images.squarespace-cdn.com/content/v1/54fc6804e4b0c724169f8085/1534699001249-6FXS4GDUB0NL52NJRCDA/Screen+Shot+2018-08-19+at+1.16.09+PM.png',
      'https://images.squarespace-cdn.com/content/v1/54fc6804e4b0c724169f8085/1534699002272-L12GHJ7345D82O1BHAMR/Screen+Shot+2018-08-19+at+1.15.36+PM.png',
      'https://images.squarespace-cdn.com/content/v1/54fc6804e4b0c724169f8085/1534698752478-DW9917HLWTZ8PXWX4OAV/sourcing-gif.gif',
      'https://images.squarespace-cdn.com/content/v1/54fc6804e4b0c724169f8085/1534737875825-JOT2BYP96OK8UEHACK8R/Screen+Shot+2018-08-20+at+12.04.13+AM.png',
      'https://images.squarespace-cdn.com/content/v1/54fc6804e4b0c724169f8085/1534730138900-E4Y4TZ3R5LK66ZH57CE0/janus-halcyon-card-2018-1.jpg',
      'https://images.squarespace-cdn.com/content/v1/54fc6804e4b0c724169f8085/1534730661508-MCW624VI6OFYX5M03PFI/Screen+Shot+2018-08-19+at+9.57.57+PM.png',
    ],
    content: [
      'Design, marketing, and advertising work for Janus Motorcycles of Goshen, IN. Work includes product photography, web design, copywriting, ad creation (digital and outdoor), and publication design.',
      'The business goal was to create a new domestic market for smaller motorcycles, reaching both first-time motorcyclists and older riders who appreciate the style and lightweight nature of the machines. Messaging needed to create a sense of accessibility and trust due to the factory-direct, no-dealership business model, while remaining visually evocative.',
      'Additional work included brochure and owner\'s manual design, merchandise and logo development, and a rebranding proposal channeling early American art deco architecture and industrial design.',
    ],
  },
  {
    slug: 'abi-attachments',
    title: 'ABI Attachments',
    shortDesc:
      'Storytelling, documentary campaigns, brand language systems, and market-specific creative direction for a land management equipment company.',
    types: 'Storytelling / Documentary / Brand Language',
    heroImage:
      'https://images.squarespace-cdn.com/content/v1/54fc6804e4b0c724169f8085/1534730916292-IL9BR2LH6EP9MX09MNEJ/Screen+Shot+2018-08-19+at+10.08.12+PM.png',
    images: [
      'https://images.squarespace-cdn.com/content/v1/54fc6804e4b0c724169f8085/1534730916292-IL9BR2LH6EP9MX09MNEJ/Screen+Shot+2018-08-19+at+10.08.12+PM.png',
      'https://images.squarespace-cdn.com/content/v1/54fc6804e4b0c724169f8085/1534731467306-IJG7H7CJJV5HLN8XMOBF/abi-equine.jpg',
      'https://images.squarespace-cdn.com/content/v1/54fc6804e4b0c724169f8085/1534731409605-ZS95LW0P3RRD7FFH6WK4/abi-logo2.jpg',
      'https://images.squarespace-cdn.com/content/v1/54fc6804e4b0c724169f8085/1534731535124-80RN4M5MXY6KZW9M4DDA/abi-mark-new.jpg',
    ],
    content: [
      'As Head of Storytelling at ABI Attachments, Grant leads the company\'s creative direction across documentary campaigns, brand language, and market-specific advertising for a rural, land-management-focused audience.',
    ],
    subsections: [
      {
        title: 'Trailblazers Series',
        description:
          'A documentary campaign highlighting the people and stories behind land management work. This series captures the real practitioners—their craft, their connection to the land, and the tools they rely on.',
      },
      {
        title: 'Brand Manifesto & Campaign Language',
        description:
          'Development of a comprehensive brand language system establishing ABI’s voice, values, and messaging architecture across all market segments.',
      },
      {
        title: 'Market-Specific Campaigns',
        description:
          'Tailored creative direction for Western, English equestrian, and sports turf markets—each requiring distinct visual and verbal approaches while maintaining brand coherence.',
      },
      {
        title: 'Partnership Highlights',
        description:
          'Campaign work with Kentucky Horse Park, the National Finals Rodeo (NFR), and professional athlete Shad Mayfield.',
      },
    ],
    placeholder: 'Updated ABI materials and campaign assets pending',
  },
  {
    slug: 'annes-kits-for-kids',
    title: "Anne's Kits for Kids",
    shortDesc:
      "Annual landscape photography calendar fundraiser honoring Grant's late mother and sister, both teachers.",
    types: 'Calendar Design / Photography / Fundraiser',
    heroImage:
      'https://images.squarespace-cdn.com/content/v1/54fc6804e4b0c724169f8085/1534731741251-I8PO7LKX0UWAV98N1HRJ/Screen+Shot+2018-08-19+at+10.21.57+PM.png',
    images: [
      'https://images.squarespace-cdn.com/content/v1/54fc6804e4b0c724169f8085/1534731741251-I8PO7LKX0UWAV98N1HRJ/Screen+Shot+2018-08-19+at+10.21.57+PM.png',
    ],
    content: [
      "Each year, Grant and his father compile their landscape photography into a calendar to raise money for a local charity created in honor of Grant's late mother and sister, both of whom were teachers.",
      'The calendar design showcases the photography with minimal chrome—letting the landscapes speak for themselves while maintaining a cohesive, clean layout year after year.',
    ],
  },
  {
    slug: 'jazz-cafe',
    title: 'Jazz Cafè',
    shortDesc:
      'Promotional tee shirt and poster designs for an annual high school jazz concert, inspired by Blue Note and Saul Bass.',
    types: 'Poster & Tee Design / Blue Note–Inspired',
    heroImage:
      'https://images.squarespace-cdn.com/content/v1/54fc6804e4b0c724169f8085/1534734069529-G2GA8NMGGWVP8WAM9QGG/higher-ground2.jpg',
    images: [
      'https://images.squarespace-cdn.com/content/v1/54fc6804e4b0c724169f8085/1534733908494-RY16H8349Y4YN0GH5FUI/Screen+Shot+2018-08-19+at+10.54.01+PM.png',
      'https://images.squarespace-cdn.com/content/v1/54fc6804e4b0c724169f8085/1534733909254-5794Y0EOEQPLQV8NPC6T/Screen+Shot+2018-08-19+at+10.53.36+PM.png',
      'https://images.squarespace-cdn.com/content/v1/54fc6804e4b0c724169f8085/1534733566856-9VNDSOW6VTXHWSVXKDHS/Screen+Shot+2018-08-19+at+10.52.29+PM.png',
      'https://images.squarespace-cdn.com/content/v1/54fc6804e4b0c724169f8085/1534733566899-TGSJ89O2KNJ8PRSLAQ8L/Screen+Shot+2018-08-19+at+10.52.17+PM.png',
      'https://images.squarespace-cdn.com/content/v1/54fc6804e4b0c724169f8085/1534734069529-G2GA8NMGGWVP8WAM9QGG/higher-ground2.jpg',
    ],
    content: [
      "Promotional tee shirt and poster designs for an annual high school jazz concert, created for Grant's former jazz band director, dear friend, and mentor. Each year's theme is woven into the curriculum, and the tee shirt and posters become a memento for band members and visiting bands.",
      'Design inspirations draw from the great album covers of Blue Note, Prestige, and Verve records, as well as the graphic work of Saul Bass. Themes have included Body & Soul (2015), Inner Voices (2014), Higher Ground (2016), Now\'s the Time (2017), and No Doubt! (2018).',
    ],
  },
];
