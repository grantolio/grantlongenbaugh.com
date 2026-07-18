export interface Book {
  title: string;
  author: string;
  note?: string;
}

export const currentlyReading: Book[] = [
  { title: 'Several Short Sentences About Writing', author: 'Verlyn Klinkenborg' },
  { title: 'Gödel, Escher, Bach: An Eternal Golden Braid', author: 'Douglas Hofstadter' },
  { title: 'Norwegian Wood', author: 'Haruki Murakami' },
  { title: 'The Hungering Dark', author: 'Frederick Buechner' },
  { title: 'More Than a Rock', author: 'Guy Tal' },
];

export const completed2016: Book[] = [
  {
    title: 'The Power of Myth',
    author: 'Joseph Campbell & Bill Moyers',
    note: 'Joseph Campbell talks through some of his most interesting work on the Hero\'s Journey, the Monomyth, and other ideas that have both ancient roots and modern weight.',
  },
  {
    title: 'Grief is the Thing With Feathers',
    author: 'Max Porter',
    note: 'A providential find on my trip to New Zealand. Porter imagines a family in the wake of a mother\'s death, visited by a giant crow who perfectly personifies and demystifies the giant blot of grief.',
  },
  {
    title: 'Gilead',
    author: 'Marilynne Robinson',
    note: 'For someone who overthinks, over-worries, and is prone to unhealthy nostalgia, I deeply enjoyed living in the Rev. John Ames\' head for a few hundred pages.',
  },
  {
    title: 'The Abundance',
    author: 'Annie Dillard',
    note: '"Best of" selections from a life\'s work by Ms. Dillard. She\'s my favorite author. Pilgrim at Tinker Creek is at least in my top 3 of all time favorite reads.',
  },
  {
    title: 'Between the World and Me',
    author: 'Ta-Nehisi Coates',
    note: 'Coates cuts through politics and ideas and writes a deeply personal series of letters to his son about growing up African American.',
  },
  {
    title: 'Refusing Heaven',
    author: 'Jack Gilbert',
    note: 'A collection of odes to delight and elegies for lost or dead love. I much preferred this old man\'s recounting of a life than I did Salter\'s.',
  },
  {
    title: 'The Wisdom of Insecurity',
    author: 'Alan Watts',
    note: 'Watts explains that most of our life is wasted because we\'re living in the future or past, unable to see and appreciate the miracle and beauty and satisfaction of existence.',
  },
  {
    title: 'Holy The Firm',
    author: 'Annie Dillard',
    note: 'A short read that I know will warrant frequent re-reads. Covers some of the most existentially-troubling and soul-stirring questions that humans build their life around avoiding.',
  },
  {
    title: 'This House of Sky',
    author: 'Ivan Doig',
    note: 'Labelled "required reading" for a Midwest transplant. Ivan\'s writing about losing a parent and coming of age were deeply touching.',
  },
  { title: 'The Iliad', author: 'Homer (trans. Lattimore)' },
  { title: 'Thinking, Fast and Slow', author: 'Daniel Kahneman' },
  { title: 'Survival of the Bark Canoe', author: 'John McPhee' },
  { title: 'Revenant', author: 'Michael Punke' },
  { title: 'For the Time Being', author: 'Annie Dillard' },
  { title: 'Telling Secrets', author: 'Frederick Buechner' },
  { title: 'Coming Through Slaughter', author: 'Michael Ondaatje' },
  { title: 'Let Your Life Speak', author: 'Parker Palmer' },
  { title: 'All That Is', author: 'James Salter' },
  { title: 'Eiger Dreams', author: 'Jon Krakauer' },
  { title: 'Winter Brothers', author: 'Ivan Doig' },
  { title: 'Sonnets to Orpheus', author: 'Rainer Maria Rilke' },
  { title: 'The Missing of the Somme', author: 'Geoff Dyer' },
  { title: 'Upstream', author: 'Mary Oliver' },
  { title: 'The Writing Life', author: 'Annie Dillard' },
  { title: 'Our Only World', author: 'Wendell Berry' },
];
