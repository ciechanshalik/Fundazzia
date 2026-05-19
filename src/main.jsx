import React from "react";
import { createRoot } from "react-dom/client";
import { Analytics } from "@vercel/analytics/react";
import {
  ArrowUpRight,
  BadgeCheck,
  BookOpen,
  CalendarDays,
  Globe2,
  GraduationCap,
  HeartHandshake,
  Lock,
  LogOut,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Plus,
  RotateCcw,
  Send,
  Sparkles,
  Trash2,
  UsersRound,
  X
} from "lucide-react";
import "./styles.css";
import logo from "./assets/zulawscy-noblisci-logo.jpg";
import logoMotto from "./assets/zulawscy-noblisci-logo-motto.jpg";

const motion = ["div", "article", "form", "figure", "a"].reduce(
  (elements, tag) => {
    elements[tag] = React.forwardRef(function MotionElement(
      { initial, animate, whileInView, viewport, transition, ...props },
      ref
    ) {
      return React.createElement(tag, { ...props, ref });
    });
    return elements;
  },
  {}
);

function InstagramIcon({ size = 19 }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

const languages = [
  ["pl", "PL"],
  ["en", "EN"],
  ["de", "DE"]
];

const navItems = [
  { id: "misja", label: { pl: "Misja", en: "Mission", de: "Mission" } },
  { id: "aktualnosci", label: { pl: "Aktualności", en: "News", de: "News" } },
  { id: "inicjatywy", label: { pl: "Inicjatywy", en: "Initiatives", de: "Initiativen" } },
  { id: "zapisy", label: { pl: "Zapisy", en: "Sign up", de: "Anmeldung" } },
  { id: "edukacja", label: { pl: "Edukacja", en: "Education", de: "Bildung" } },
  { id: "pakiety-partnerskie", label: { pl: "Partnerstwa", en: "Partnerships", de: "Partner" } },
  { id: "kontakt", label: { pl: "Kontakt", en: "Contact", de: "Kontakt" } }
];

const sectionVisibilityVersion = "sections-v2";

const defaultHiddenSections = {
  __version: sectionVisibilityVersion
};

const sectionControls = [
  ["enrollment", "Zapisy / najbliższy start"],
  ["parents", "Dla rodziców"],
  ["courses", "Inicjatywy"],
  ["partners", "Partnerzy"],
  ["packages", "Pakiety partnerskie"],
  ["volunteers", "Wolontariusze"]
];

const navVisibilityKey = {
  inicjatywy: "courses",
  zapisy: "enrollment",
  "pakiety-partnerskie": "packages"
};

const defaultNews = [
  {
    id: "news-1",
    date: "2026-05-10",
    tag: "Erasmus+",
    title: "Rekrutacja do letniej wymiany młodzieżowej",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=82",
    excerpt:
      "Szukamy osób, które chcą pierwszy raz spróbować pracy w międzynarodowym zespole i wrócić z pomysłem dla swojej szkoły."
  },
  {
    id: "news-2",
    date: "2026-04-28",
    tag: "Warsztaty",
    title: "Ruszają warsztaty i kursy językowe",
    image:
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=900&q=82",
    excerpt:
      "Spotkania, rozmowy i praktyczna nauka języków, które otwierają młodym drzwi do szerszej Europy."
  },
  {
    id: "news-3",
    date: "2026-04-15",
    tag: "Wolontariat",
    title: "Nowa grupa wolontariuszy przygotowuje działania na lato",
    image:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=900&q=82",
    excerpt:
      "Młodzi liderzy pracują nad wydarzeniami, które połączą edukację, kulturę i praktyczne wsparcie dla społeczności Żuław."
  }
];

const localizedNews = {
  pl: defaultNews,
  en: [
    {
      ...defaultNews[0],
      title: "Recruitment for a summer youth exchange",
      excerpt:
        "We are looking for young people ready to try international teamwork for the first time and return with an idea for their school."
    },
    {
      ...defaultNews[1],
      tag: "Workshops",
      title: "Workshops and language courses are starting",
      excerpt:
        "Meetings, conversations and practical language learning that open wider Europe to young people."
    },
    {
      ...defaultNews[2],
      tag: "Volunteering",
      title: "A new volunteer group prepares summer actions",
      excerpt:
        "Young leaders are shaping activities that connect education, culture and practical support for local communities."
    }
  ],
  de: [
    {
      ...defaultNews[0],
      title: "Bewerbung für einen Jugendaustausch im Sommer",
      excerpt:
        "Wir suchen junge Menschen, die internationale Teamarbeit zum ersten Mal erleben und mit einer Idee für ihre Schule zurückkommen wollen."
    },
    {
      ...defaultNews[1],
      tag: "Workshops",
      title: "Workshops und Sprachkurse starten",
      excerpt:
        "Begegnungen, Gespräche und praktische Sprachpraxis, die jungen Menschen Europa näherbringen."
    },
    {
      ...defaultNews[2],
      tag: "Freiwillige",
      title: "Eine neue Freiwilligengruppe plant den Sommer",
      excerpt:
        "Junge Menschen entwickeln Aktionen, die Bildung, Kultur und konkrete Unterstützung vor Ort verbinden."
    }
  ]
};

const testimonials = [
  {
    quote:
      "Pierwszy raz poczułam, że moje małe miasto nie jest ograniczeniem, tylko punktem startu.",
    name: "Maja, wolontariuszka"
  },
  {
    quote:
      "Tu nikt nie mówi młodym, żeby czekali na swoją kolej. Dostają narzędzia, zaufanie i realną odpowiedzialność.",
    name: "Paweł, mentor"
  },
  {
    quote:
      "Erasmus z fundacją zmienił mi mapę w głowie. Nagle Europa była rozmową, a nie hasłem z podręcznika.",
    name: "Oliwier, uczestnik"
  }
];

const partners = [
  "Szkoły Żuław",
  "Gminy i miasta",
  "Domy kultury",
  "Organizacje ESC",
  "Uniwersytety",
  "Lokalny biznes"
];

const adminPassword = "noblisci2026";
const whatsappUrl =
  "https://wa.me/48502617479?text=Cze%C5%9B%C4%87%2C%20pisz%C4%99%20ze%20strony%20Fundacji%20%C5%BBu%C5%82awscy%20Nobli%C5%9Bci.";

const defaultTexts = {
  contentVersion: "brandbook-v7-parent-english",
  brand: "Fundacja Żuławscy Nobliści",
  navJoin: "Dołącz",
  heroEyebrow: "Talent nie zależy od kodu pocztowego",
  heroTitle: "Z małych miejsc w wielki świat.",
  heroLead:
    "Jesteśmy nowoczesną fundacją edukacyjną z Żuław. Pokazujemy młodym ludziom, że ich start może być lokalny, ale horyzont nie musi mieć granic.",
  heroPrimary: "Zobacz inicjatywy",
  heroSecondary: "Zapisz na angielski",
  quickPath1Title: "Angielski dla dzieci i młodzieży",
  quickPath1Copy: "małe grupy, swobodne mówienie i mniej stresu przy języku",
  quickPath2Title: "Kurs ósmoklasisty",
  quickPath2Copy: "regularne przygotowanie bez chaosu i presji",
  quickPath3Title: "Warsztaty",
  quickPath3Copy: "pewność siebie, komunikacja i myślenie szerzej",
  quickPath4Title: "Partnerstwa",
  quickPath4Copy: "firmy i instytucje mogą ufundować realne doświadczenia",
  missionEyebrow: "Misja",
  missionTitle: "Ambicja nie ma kodu pocztowego.",
  missionLead:
    "Chcemy pokazywać młodym ludziom więcej świata: przez edukację, relacje, wyjazdy, rozmowy i doświadczenia, które zostają w człowieku na długo.",
  missionCard1Title: "Autentyczność",
  missionCard1Copy: "Prawdziwi ludzie, prawdziwe emocje, żadnej sztucznej pozy.",
  missionCard2Title: "Europa",
  missionCard2Copy: "Wyjazdy i spotkania, które sprawiają, że świat robi się bliższy.",
  missionCard3Title: "Sprawczość",
  missionCard3Copy: "Młodzi nie tylko słuchają. Tworzą, pytają i prowadzą.",
  newsEyebrow: "Aktualności",
  newsTitle: "Co właśnie dzieje się u Noblistów.",
  newsLead:
    "Krótki puls działań, ludzi i momentów, które pokazują, że tu też mogą zaczynać się wielkie rzeczy.",
  projectsEyebrow: "Działamy",
  projectsTitle: "Uczymy konkretnie. Otwieramy możliwości.",
  project1Title: "Warsztaty",
  project1Label: "rozwój + odwaga",
  project1Copy:
    "Spotkania dla młodych ludzi, które wzmacniają pewność siebie, ciekawość świata i umiejętność działania z innymi.",
  project2Title: "Kursy językowe",
  project2Label: "języki + świat",
  project2Copy:
    "Praktyczna nauka języków, która daje młodym większą swobodę w szkole, podróży i przyszłych wyborach.",
  project3Title: "Kursy ósmoklasisty",
  project3Label: "egzamin + spokój",
  project3Copy:
    "Mądre przygotowanie do egzaminu: mniej stresu, więcej porządku, regularności i wiary we własne możliwości.",
  educationEyebrow: "Edukacja",
  educationImageText: "Dzieciaki z małych miejscowości zasługują na dostęp do nowoczesnej edukacji.",
  educationTitle:
    "Nie opowiadamy tylko o przyszłości. Dajemy jej dotknąć.",
  educationItem1: "kursy językowe, które otwierają drzwi na szeroką Europę",
  educationItem2: "mentoring dla uczniów i młodych liderów",
  educationItem3: "warsztaty, poprawianie umiejętności i poszerzanie horyzontów",
  educationItem4:
    "wsparcie w rekrutacji na studia, staże i programy europejskie",
  volunteersEyebrow: "Wolontariusze",
  volunteersTitle: "Najważniejsza technologia to zaufanie do młodych.",
  volunteer1: "prowadzenie wydarzeń i warsztatów",
  volunteer2: "tworzenie treści, zdjęć i wideo",
  volunteer3: "towarzyszenie uczestnikom w nowych doświadczeniach",
  volunteer4: "kontakt z partnerami i społecznością",
  joinEyebrow: "Dołącz",
  joinTitle: "Wejdź tak, jak jesteś. Resztę zbudujemy razem.",
  joinStudentTitle: "Uczeń",
  joinStudentCopy:
    "Warsztaty, wyjazdy, mentoring i pierwsze doświadczenia, które można dopisać do własnej historii.",
  joinVolunteerTitle: "Wolontariusz",
  joinVolunteerCopy:
    "Realna odpowiedzialność, zespół i działania, które mają sens poza zdjęciem z wydarzenia.",
  joinPartnerTitle: "Partner",
  joinPartnerCopy:
    "Szkoła, firma lub instytucja, która chce dać młodym ludziom dostęp do świata.",
  partnersEyebrow: "Partnerzy",
  partnersTitle: "Lokalna sieć, europejski rytm.",
  partner1: "Szkoły Żuław",
  partner2: "Gminy i miasta",
  partner3: "Domy kultury",
  partner4: "Organizacje ESC",
  partner5: "Uniwersytety",
  partner6: "Lokalny biznes",
  packagesEyebrow: "Pakiety partnerskie",
  packagesTitle: "Jedno konkretne wsparcie. Jedna realna zmiana.",
  packagesLead:
    "Szukamy partnerów, którzy chcą zamienić deklarację w doświadczenie: sfinansować dziecku wyjazd na obóz językowy i otworzyć mu kawałek świata.",
  coursesEyebrow: "Inicjatywy",
  coursesTitle: "Działania, do których można dołączyć.",
  coursesLead:
    "Tu będą pojawiały się aktualne kursy, warsztaty, nabory i projekty, w które mogą wejść młodzi ludzie, rodzice, szkoły i partnerzy.",
  course1Title: "Angielski dla dzieci i młodzieży",
  course1For: "dla uczniów, którzy chcą mówić swobodniej i nadrobić braki bez wstydu",
  course1Gives: "małe grupy, nacisk na mówienie i spokojny kontakt z językiem",
  course1Start: "start grup po zebraniu zapisów na angielski",
  course2Title: "Kursy ósmoklasisty",
  course2For: "dla uczniów przygotowujących się do egzaminu",
  course2Gives: "plan, regularność i mniej stresu przed sprawdzianem",
  course2Start: "małe grupy i regularne spotkania",
  course3Title: "Warsztaty rozwojowe",
  course3For: "dla młodych ludzi, którzy chcą działać odważniej",
  course3Gives: "pewność siebie, komunikację i pracę z własną historią",
  course3Start: "cykle tematyczne w szkołach i lokalnie",
  enrollmentEyebrow: "Zapisy",
  enrollmentTitle: "Najbliższy start bez chaosu i presji.",
  enrollmentLead:
    "Zbieramy zgłoszenia do małych grup. Po kontakcie oddzwaniamy, dobieramy poziom i proponujemy najbliższy możliwy termin.",
  start1Label: "Kursy językowe",
  start1Value: "nabór otwarty",
  start1Copy: "grupy po poziomach, nacisk na mówienie i swobodę",
  start2Label: "Kurs ósmoklasisty",
  start2Value: "lista zainteresowanych",
  start2Copy: "matematyka, język polski i angielski w małych grupach",
  start3Label: "Warsztaty",
  start3Value: "terminy ze szkołami",
  start3Copy: "krótkie cykle o odwadze, komunikacji i możliwościach",
  signupTitle: "Zapisz dziecko albo zapytaj o grupę.",
  signupNameLabel: "Imię i nazwisko opiekuna",
  signupNamePlaceholder: "Np. Anna Kowalska",
  signupPhoneLabel: "Telefon lub email",
  signupPhonePlaceholder: "Jak najłatwiej się skontaktować?",
  signupCourseLabel: "Interesuje mnie",
  signupCourseOption1: "angielski / kurs językowy",
  signupCourseOption2: "kurs ósmoklasisty",
  signupCourseOption3: "warsztaty",
  signupChildLabel: "Klasa / wiek dziecka",
  signupChildPlaceholder: "Np. 7 klasa, 13 lat",
  signupMessageLabel: "Krótka wiadomość",
  signupMessagePlaceholder: "Napisz, czego potrzebujecie.",
  signupButton: "Wyślij zgłoszenie",
  parentsEyebrow: "Dla rodziców",
  parentsTitle: "Spokojnie, konkretnie, blisko dziecka.",
  parentsLead:
    "Chcemy, żeby rodzic wiedział, co się dzieje, a młody człowiek czuł, że nauka nie jest karą, tylko odzyskiwaniem wpływu.",
  parent1Title: "Małe grupy",
  parent1Copy: "łatwiej zapytać, popełnić błąd i zobaczyć realny postęp",
  parent2Title: "Jasna komunikacja",
  parent2Copy: "kontakt po zgłoszeniu, dopasowanie poziomu i proste informacje",
  parent3Title: "Mniej stresu",
  parent3Copy: "porządek, rytm i atmosfera, która pomaga wrócić do wiary w siebie",
  package1Name: "Partner strategiczny",
  package1Price: "ufundowanie wyjazdu na obóz językowy dla jednego dziecka",
  package1For: "dla firm i osób, które chcą pomóc konkretnie, bez nadęcia i pustych gestów",
  package1Item1: "realne wsparcie jednego dziecka",
  package1Item2: "logo partnera w sekcji Partnerzy na stronie",
  package1Item3: "wzmianki w publikacjach jako partner inicjatyw",
  package1Item4: "podziękowanie i krótka relacja po zakończeniu działania",
  package2Name: "Partner Rozwoju",
  package2Price: "ufundowanie dwóch wyjazdów na obóz językowy",
  package2For: "dla firm, które chcą wesprzeć konkretną ścieżkę edukacyjną",
  package2Item1: "logo w sekcji partnerów",
  package2Item2: "post z podziękowaniem i opisem współpracy",
  package2Item3: "udział w jednym działaniu lub warsztacie",
  package2Item4: "pakiet zdjęć i krótkie podsumowanie",
  package3Name: "Partner Lokalny",
  package3Price: "ufundowanie jednego wyjazdu na obóz językowy",
  package3For: "dla osób i firm, które chcą realnie pomóc na start",
  package3Item1: "podziękowanie w social mediach",
  package3Item2: "logo lub nazwa wśród partnerów",
  package3Item3: "krótka informacja o wsparciu",
  package3Item4: "zaproszenie na wybrane działanie",
  contactEyebrow: "Kontakt",
  contactTitle: "Masz energię, pomysł albo partnerstwo? Zacznijmy rozmowę.",
  contactEmail: "tmontanabc@gmail.com",
  contactPlace: "Żuławy Wiślane / działania w Polsce i Europie",
  contactNameLabel: "Imię",
  contactNamePlaceholder: "Jak mamy się do Ciebie zwracać?",
  contactEmailLabel: "Email",
  contactEmailPlaceholder: "twoj@email.pl",
  contactPurposeLabel: "W czym możemy pomóc?",
  contactPurposeOption1: "Chcę zapisać dziecko na kurs",
  contactPurposeOption2: "Chcę zostać partnerem",
  contactPurposeOption3: "Interesuje mnie wolontariat",
  contactPurposeOption4: "Mam inne pytanie",
  contactMessageLabel: "Wiadomość",
  contactMessagePlaceholder: "Napisz krótko, z czym przychodzisz.",
  contactButton: "Wyślij wiadomość",
  faqEyebrow: "FAQ",
  faqTitle: "Najprostsze odpowiedzi, zanim napiszesz.",
  faq1Question: "Czy mogę zapisać dziecko na angielski?",
  faq1Answer:
    "Tak. Zbieramy zgłoszenia do grup językowych dla dzieci i młodzieży. Po kontakcie oddzwaniamy i dopasowujemy najbliższą możliwą grupę.",
  faq2Question: "Jak wyglądają zajęcia z angielskiego?",
  faq2Answer:
    "Stawiamy na małe grupy, spokojną atmosferę i praktyczne mówienie. Chodzi o to, żeby dziecko czuło postęp, a nie kolejną presję.",
  faq3Question: "Jak zapisać dziecko?",
  faq3Answer:
    "Najprościej wypełnić formularz w sekcji Zapisy albo napisać do nas przez formularz kontaktowy.",
  faq4Question: "Jak firma może pomóc?",
  faq4Answer:
    "Może wybrać pakiet partnerski i ufundować jedno, dwa albo trzy miejsca na wyjazd językowy."
};

const localizedTextOverrides = {
  pl: {},
  en: {
  contentVersion: "brandbook-v7-parent-english-en",
    brand: "Żuławscy Nobliści Foundation",
    navJoin: "Join",
    heroEyebrow: "Talent does not depend on a postcode",
    heroTitle: "From small places to a wider world.",
    heroLead:
      "We are a modern educational foundation from Żuławy. We show young people that their start can be local, but their horizon does not have to be limited.",
    heroPrimary: "See initiatives",
    heroSecondary: "Sign up for English",
    quickPath1Title: "English for children and teens",
    quickPath1Copy: "small groups, freer speaking and less language stress",
    quickPath2Title: "8th-grade exam course",
    quickPath2Copy: "regular preparation without chaos or pressure",
    quickPath3Title: "Workshops",
    quickPath3Copy: "confidence, communication and broader thinking",
    quickPath4Title: "Partnerships",
    quickPath4Copy: "companies and institutions can fund real experiences",
    missionEyebrow: "Mission",
    missionTitle: "Ambition has no postcode.",
    missionLead:
      "We want to show young people more of the world: through education, relationships, travel, conversations and experiences that stay with them.",
    missionCard1Title: "Authenticity",
    missionCard1Copy: "Real people, real emotions, no artificial posing.",
    missionCard2Title: "Europe",
    missionCard2Copy: "Trips and meetings that make the world feel closer.",
    missionCard3Title: "Agency",
    missionCard3Copy: "Young people do not only listen. They create, ask and lead.",
    newsEyebrow: "News",
    newsTitle: "What is happening with Nobliści now.",
    newsLead:
      "A short pulse of actions, people and moments that show big things can start here too.",
    projectsEyebrow: "We act",
    projectsTitle: "Concrete learning. Wider possibilities.",
    project1Title: "Workshops",
    project1Label: "growth + courage",
    project1Copy:
      "Meetings for young people that build confidence, curiosity and the ability to act with others.",
    project2Title: "Language courses",
    project2Label: "languages + world",
    project2Copy:
      "Practical language learning that gives young people more freedom at school, while travelling and in future choices.",
    project3Title: "8th-grade exam courses",
    project3Label: "exam + calm",
    project3Copy:
      "Smart exam preparation: less stress, more structure, consistency and belief in one’s own abilities.",
    educationEyebrow: "Education",
    educationImageText: "Kids from small towns deserve access to modern education.",
    educationTitle: "We do not only talk about the future. We let young people touch it.",
    educationItem1: "language courses that open doors to a wider Europe",
    educationItem2: "mentoring for students and young leaders",
    educationItem3: "workshops, skill-building and broadening horizons",
    educationItem4: "support with studies, internships and European opportunities",
    volunteersEyebrow: "Volunteers",
    volunteersTitle: "The most important technology is trust in young people.",
    volunteer1: "leading events and workshops",
    volunteer2: "creating content, photos and video",
    volunteer3: "supporting participants in new experiences",
    volunteer4: "contact with partners and the community",
    joinEyebrow: "Join",
    joinTitle: "Come as you are. We will build the rest together.",
    joinStudentTitle: "Student",
    joinStudentCopy:
      "Workshops, trips, mentoring and first experiences that can become part of your own story.",
    joinVolunteerTitle: "Volunteer",
    joinVolunteerCopy:
      "Real responsibility, a team and actions that matter beyond a photo from an event.",
    joinPartnerTitle: "Partner",
    joinPartnerCopy:
      "A school, company or institution that wants to give young people access to the world.",
    partnersEyebrow: "Partners",
    partnersTitle: "A local network, a European rhythm.",
    partner1: "Żuławy schools",
    partner2: "Cities and municipalities",
    partner3: "Culture centres",
    partner4: "ESC organisations",
    partner5: "Universities",
    partner6: "Local business",
    packagesEyebrow: "Partnership packages",
    packagesTitle: "One concrete support. One real change.",
    packagesLead:
      "We are looking for partners who want to turn support into experience: fund a child’s language camp trip and open a piece of the world.",
    coursesEyebrow: "Initiatives",
    coursesTitle: "Actions you can join.",
    coursesLead:
      "This is where current courses, workshops, calls and projects will appear for young people, parents, schools and partners.",
    course1Title: "English for children and teens",
    course1For: "for students who want to speak more freely and catch up without shame",
    course1Gives: "small groups, focus on speaking and a calmer relationship with English",
    course1Start: "groups start after English sign-ups",
    course2Title: "8th-grade exam courses",
    course2For: "for students preparing for the exam",
    course2Gives: "a plan, regularity and less stress before the test",
    course2Start: "small groups and regular meetings",
    course3Title: "Development workshops",
    course3For: "for young people who want to act with more courage",
    course3Gives: "confidence, communication and working with one’s own story",
    course3Start: "thematic cycles in schools and locally",
    enrollmentEyebrow: "Sign up",
    enrollmentTitle: "The next start, without chaos or pressure.",
    enrollmentLead:
      "We collect applications for small groups. After you contact us, we call back, check the level and suggest the closest possible start.",
    start1Label: "Language courses",
    start1Value: "registration open",
    start1Copy: "groups by level, focused on speaking and confidence",
    start2Label: "8th-grade exam course",
    start2Value: "interest list",
    start2Copy: "math, Polish and English in small groups",
    start3Label: "Workshops",
    start3Value: "dates with schools",
    start3Copy: "short cycles about courage, communication and possibilities",
    signupTitle: "Sign a child up or ask about a group.",
    signupNameLabel: "Parent or guardian name",
    signupNamePlaceholder: "E.g. Anna Kowalska",
    signupPhoneLabel: "Phone or email",
    signupPhonePlaceholder: "How can we reach you most easily?",
    signupCourseLabel: "I am interested in",
    signupCourseOption1: "English / language course",
    signupCourseOption2: "8th-grade exam course",
    signupCourseOption3: "workshops",
    signupChildLabel: "Child's grade / age",
    signupChildPlaceholder: "E.g. grade 7, age 13",
    signupMessageLabel: "Short message",
    signupMessagePlaceholder: "Tell us what you need.",
    signupButton: "Send application",
    parentsEyebrow: "For parents",
    parentsTitle: "Calm, concrete and close to the child.",
    parentsLead:
      "We want parents to know what is happening, and young people to feel that learning is not a punishment but a way to regain agency.",
    parent1Title: "Small groups",
    parent1Copy: "it is easier to ask, make mistakes and see real progress",
    parent2Title: "Clear contact",
    parent2Copy: "follow-up after applying, level matching and simple information",
    parent3Title: "Less stress",
    parent3Copy: "structure, rhythm and an atmosphere that helps rebuild confidence",
    package1Name: "Strategic Partner",
    package1Price: "funding a language camp trip for one child",
    package1For: "for companies and people who want to help concretely, without empty gestures",
    package1Item1: "real support for one child",
    package1Item2: "partner logo in the Partners section on the website",
    package1Item3: "mentions in publications as an initiative partner",
    package1Item4: "a thank-you note and short story after the activity",
    package2Name: "Growth Partner",
    package2Price: "funding two language camp trips",
    package2For: "for companies supporting a concrete educational path",
    package2Item1: "logo in the partners section",
    package2Item2: "thank-you post with cooperation context",
    package2Item3: "participation in one activity or workshop",
    package2Item4: "photo pack and short summary",
    package3Name: "Local Partner",
    package3Price: "funding one language camp trip",
    package3For: "for people and companies that want to help young people start",
    package3Item1: "thank-you mention in social media",
    package3Item2: "logo or name among partners",
    package3Item3: "short note about the support",
    package3Item4: "invitation to a selected activity",
    contactEyebrow: "Contact",
    contactTitle: "Have energy, an idea or a partnership? Let us talk.",
    contactPlace: "Żuławy / actions in Poland and Europe",
    contactNameLabel: "Name",
    contactNamePlaceholder: "How should we address you?",
    contactEmailPlaceholder: "your@email.com",
    contactPurposeLabel: "How can we help?",
    contactPurposeOption1: "I want to sign a child up for a course",
    contactPurposeOption2: "I want to become a partner",
    contactPurposeOption3: "I am interested in volunteering",
    contactPurposeOption4: "I have another question",
    contactMessageLabel: "Message",
    contactMessagePlaceholder: "Tell us briefly what brings you here.",
    contactButton: "Send message",
    faqEyebrow: "FAQ",
    faqTitle: "Simple answers before you write.",
    faq1Question: "Can I sign my child up for English?",
    faq1Answer:
      "Yes. We collect sign-ups for language groups for children and teenagers. After you contact us, we call back and match the closest possible group.",
    faq2Question: "What are English classes like?",
    faq2Answer:
      "We focus on small groups, a calm atmosphere and practical speaking, so the child feels progress instead of more pressure.",
    faq3Question: "How do I sign a child up?",
    faq3Answer:
      "The easiest way is to fill in the form in the sign-up section or write to us through the contact form.",
    faq4Question: "How can a company help?",
    faq4Answer:
      "It can choose a partnership package and fund one, two or three places for a language trip."
  },
  de: {
    contentVersion: "brandbook-v7-parent-english-de",
    brand: "Stiftung Żuławscy Nobliści",
    navJoin: "Mitmachen",
    heroEyebrow: "Talent hängt nicht von der Postleitzahl ab",
    heroTitle: "Von kleinen Orten in eine große Welt.",
    heroLead:
      "Wir sind eine moderne Bildungsstiftung aus Żuławy. Wir zeigen jungen Menschen, dass ihr Start lokal sein kann, ihr Horizont aber nicht begrenzt sein muss.",
    heroPrimary: "Kurse ansehen",
    heroSecondary: "Für Englisch anmelden",
    quickPath1Title: "Englisch für Kinder und Jugendliche",
    quickPath1Copy: "kleine Gruppen, freieres Sprechen und weniger Sprachstress",
    quickPath2Title: "Kurs für die 8.-Klasse-Prüfung",
    quickPath2Copy: "regelmäßige Vorbereitung ohne Chaos und Druck",
    quickPath3Title: "Workshops",
    quickPath3Copy: "Selbstvertrauen, Kommunikation und breiteres Denken",
    quickPath4Title: "Partnerschaften",
    quickPath4Copy: "Firmen und Institutionen können echte Erfahrungen finanzieren",
    missionEyebrow: "Mission",
    missionTitle: "Ambition hat keine Postleitzahl.",
    missionLead:
      "Wir möchten jungen Menschen mehr Welt zeigen: durch Bildung, Begegnungen, Reisen, Gespräche und Erfahrungen, die bleiben.",
    missionCard1Title: "Echtheit",
    missionCard1Copy: "Echte Menschen, echte Emotionen, keine künstlichen Posen.",
    missionCard2Title: "Europa",
    missionCard2Copy: "Reisen und Begegnungen, die die Welt näher machen.",
    missionCard3Title: "Handlungskraft",
    missionCard3Copy: "Junge Menschen hören nicht nur zu. Sie gestalten, fragen und führen.",
    newsEyebrow: "News",
    newsTitle: "Was gerade bei Nobliści passiert.",
    newsLead:
      "Ein kurzer Puls aus Aktionen, Menschen und Momenten, die zeigen: Auch hier können große Dinge beginnen.",
    projectsEyebrow: "Wir handeln",
    projectsTitle: "Konkret lernen. Möglichkeiten öffnen.",
    project1Title: "Workshops",
    project1Label: "Entwicklung + Mut",
    project1Copy:
      "Treffen für junge Menschen, die Selbstvertrauen, Neugier und gemeinsames Handeln stärken.",
    project2Title: "Sprachkurse",
    project2Label: "Sprachen + Welt",
    project2Copy:
      "Praktisches Sprachenlernen, das jungen Menschen mehr Freiheit in Schule, Reisen und Zukunftsentscheidungen gibt.",
    project3Title: "Kurse für die 8.-Klasse-Prüfung",
    project3Label: "Prüfung + Ruhe",
    project3Copy:
      "Klare Prüfungsvorbereitung: weniger Stress, mehr Struktur, Regelmäßigkeit und Vertrauen in die eigenen Fähigkeiten.",
    educationEyebrow: "Bildung",
    educationImageText: "Kinder aus kleinen Orten verdienen Zugang zu moderner Bildung.",
    educationTitle: "Wir reden nicht nur über Zukunft. Wir machen sie spürbar.",
    educationItem1: "Sprachkurse, die Türen zu einem weiten Europa öffnen",
    educationItem2: "Mentoring für Schüler und junge Leader",
    educationItem3: "Workshops, Kompetenzaufbau und neue Horizonte",
    educationItem4: "Unterstützung bei Studium, Praktika und europäischen Chancen",
    volunteersEyebrow: "Freiwillige",
    volunteersTitle: "Die wichtigste Technologie ist Vertrauen in junge Menschen.",
    volunteer1: "Events und Workshops leiten",
    volunteer2: "Content, Fotos und Videos erstellen",
    volunteer3: "Teilnehmende in neuen Erfahrungen begleiten",
    volunteer4: "Kontakt mit Partnern und Community",
    joinEyebrow: "Mitmachen",
    joinTitle: "Komm so, wie du bist. Den Rest bauen wir gemeinsam.",
    joinStudentTitle: "Schüler",
    joinStudentCopy:
      "Workshops, Reisen, Mentoring und erste Erfahrungen, die Teil deiner eigenen Geschichte werden können.",
    joinVolunteerTitle: "Freiwillige",
    joinVolunteerCopy:
      "Echte Verantwortung, ein Team und Aktionen, die mehr bedeuten als ein Foto vom Event.",
    joinPartnerTitle: "Partner",
    joinPartnerCopy:
      "Eine Schule, Firma oder Institution, die jungen Menschen Zugang zur Welt geben möchte.",
    partnersEyebrow: "Partner",
    partnersTitle: "Lokales Netzwerk, europäischer Rhythmus.",
    partner1: "Schulen in Żuławy",
    partner2: "Städte und Gemeinden",
    partner3: "Kulturzentren",
    partner4: "ESC-Organisationen",
    partner5: "Universitäten",
    partner6: "Lokale Unternehmen",
    packagesEyebrow: "Partnerpakete",
    packagesTitle: "Eine konkrete Hilfe. Eine echte Veränderung.",
    packagesLead:
      "Wir suchen Partner, die Unterstützung in Erfahrung verwandeln möchten: eine Sprachcamp-Reise für ein Kind finanzieren und ein Stück Welt öffnen.",
    coursesEyebrow: "Initiativen",
    coursesTitle: "Angebote, bei denen man mitmachen kann.",
    coursesLead:
      "Hier erscheinen aktuelle Kurse, Workshops, Ausschreibungen und Projekte für junge Menschen, Eltern, Schulen und Partner.",
    course1Title: "Englisch für Kinder und Jugendliche",
    course1For: "für Schüler, die freier sprechen und ohne Scham Lücken schließen wollen",
    course1Gives: "kleine Gruppen, Fokus auf Sprechen und ein ruhigerer Zugang zu Englisch",
    course1Start: "Gruppen starten nach Englisch-Anmeldungen",
    course2Title: "Kurse für die 8.-Klasse-Prüfung",
    course2For: "für Schüler in der Prüfungsvorbereitung",
    course2Gives: "Plan, Regelmäßigkeit und weniger Stress vor der Prüfung",
    course2Start: "kleine Gruppen und regelmäßige Treffen",
    course3Title: "Entwicklungsworkshops",
    course3For: "für junge Menschen, die mutiger handeln wollen",
    course3Gives: "Selbstvertrauen, Kommunikation und Arbeit mit der eigenen Geschichte",
    course3Start: "thematische Reihen in Schulen und lokal",
    enrollmentEyebrow: "Anmeldung",
    enrollmentTitle: "Der nächste Start, ohne Chaos und Druck.",
    enrollmentLead:
      "Wir sammeln Anmeldungen für kleine Gruppen. Danach melden wir uns, prüfen das Niveau und schlagen den nächsten möglichen Termin vor.",
    start1Label: "Sprachkurse",
    start1Value: "Anmeldung offen",
    start1Copy: "Gruppen nach Niveau, mit Fokus auf Sprechen und Sicherheit",
    start2Label: "Kurs für die 8.-Klasse-Prüfung",
    start2Value: "Interessentenliste",
    start2Copy: "Mathematik, Polnisch und Englisch in kleinen Gruppen",
    start3Label: "Workshops",
    start3Value: "Termine mit Schulen",
    start3Copy: "kurze Reihen über Mut, Kommunikation und Möglichkeiten",
    signupTitle: "Kind anmelden oder nach einer Gruppe fragen.",
    signupNameLabel: "Name des Elternteils",
    signupNamePlaceholder: "Z.B. Anna Kowalska",
    signupPhoneLabel: "Telefon oder E-Mail",
    signupPhonePlaceholder: "Wie erreichen wir dich am besten?",
    signupCourseLabel: "Ich interessiere mich für",
    signupCourseOption1: "Englisch / Sprachkurs",
    signupCourseOption2: "Kurs für die 8.-Klasse-Prüfung",
    signupCourseOption3: "Workshops",
    signupChildLabel: "Klasse / Alter des Kindes",
    signupChildPlaceholder: "Z.B. 7. Klasse, 13 Jahre",
    signupMessageLabel: "Kurze Nachricht",
    signupMessagePlaceholder: "Schreib kurz, was ihr braucht.",
    signupButton: "Anmeldung senden",
    parentsEyebrow: "Für Eltern",
    parentsTitle: "Ruhig, konkret und nah am Kind.",
    parentsLead:
      "Eltern sollen wissen, was passiert, und junge Menschen sollen spüren, dass Lernen keine Strafe ist, sondern ein Weg zu mehr Einfluss.",
    parent1Title: "Kleine Gruppen",
    parent1Copy: "leichter fragen, Fehler machen und echten Fortschritt sehen",
    parent2Title: "Klare Kommunikation",
    parent2Copy: "Rückmeldung nach Anmeldung, Niveauabgleich und einfache Infos",
    parent3Title: "Weniger Stress",
    parent3Copy: "Struktur, Rhythmus und eine Atmosphäre, die Selbstvertrauen stärkt",
    package1Name: "Strategischer Partner",
    package1Price: "Finanzierung einer Sprachcamp-Reise für ein Kind",
    package1For: "für Firmen und Menschen, die konkret helfen möchten, ohne leere Gesten",
    package1Item1: "reale Unterstützung für ein Kind",
    package1Item2: "Partnerlogo im Partnerbereich der Website",
    package1Item3: "Erwähnungen in Publikationen als Partner der Initiative",
    package1Item4: "Dank und kurze Geschichte nach Abschluss der Aktivität",
    package2Name: "Entwicklungspartner",
    package2Price: "Finanzierung von zwei Sprachcamp-Reisen",
    package2For: "für Firmen, die einen konkreten Bildungsweg unterstützen",
    package2Item1: "Logo im Partnerbereich",
    package2Item2: "Dankespost mit Kontext der Zusammenarbeit",
    package2Item3: "Teilnahme an einer Aktion oder einem Workshop",
    package2Item4: "Fotopaket und kurze Zusammenfassung",
    package3Name: "Lokaler Partner",
    package3Price: "Finanzierung einer Sprachcamp-Reise",
    package3For: "für Menschen und Firmen, die beim Start helfen wollen",
    package3Item1: "Dank in Social Media",
    package3Item2: "Logo oder Name unter den Partnern",
    package3Item3: "kurze Information zur Unterstützung",
    package3Item4: "Einladung zu einer ausgewählten Aktion",
    contactEyebrow: "Kontakt",
    contactTitle: "Hast du Energie, eine Idee oder Interesse an Partnerschaft? Lass uns reden.",
    contactPlace: "Żuławy / Aktionen in Polen und Europa",
    contactNameLabel: "Name",
    contactNamePlaceholder: "Wie sollen wir dich ansprechen?",
    contactEmailPlaceholder: "deine@email.de",
    contactPurposeLabel: "Wie können wir helfen?",
    contactPurposeOption1: "Ich möchte ein Kind für einen Kurs anmelden",
    contactPurposeOption2: "Ich möchte Partner werden",
    contactPurposeOption3: "Ich interessiere mich für Freiwilligenarbeit",
    contactPurposeOption4: "Ich habe eine andere Frage",
    contactMessageLabel: "Nachricht",
    contactMessagePlaceholder: "Schreib kurz, womit du kommst.",
    contactButton: "Nachricht senden",
    faqEyebrow: "FAQ",
    faqTitle: "Einfache Antworten, bevor du schreibst.",
    faq1Question: "Kann ich mein Kind für Englisch anmelden?",
    faq1Answer:
      "Ja. Wir sammeln Anmeldungen für Sprachgruppen für Kinder und Jugendliche. Nach der Kontaktaufnahme melden wir uns und schlagen die passende Gruppe vor.",
    faq2Question: "Wie läuft der Englischunterricht ab?",
    faq2Answer:
      "Wir setzen auf kleine Gruppen, eine ruhige Atmosphäre und praktisches Sprechen, damit das Kind Fortschritt statt zusätzlichen Druck erlebt.",
    faq3Question: "Wie melde ich ein Kind an?",
    faq3Answer:
      "Am einfachsten über das Formular im Anmeldebereich oder über das Kontaktformular.",
    faq4Question: "Wie kann eine Firma helfen?",
    faq4Answer:
      "Sie kann ein Partnerpaket wählen und ein, zwei oder drei Plätze für eine Sprachreise finanzieren."
  }
};

function defaultTextsFor(lang) {
  return { ...defaultTexts, ...(localizedTextOverrides[lang] || {}) };
}

function normalizeCmsTexts(lang, remoteTexts) {
  if (!remoteTexts) return null;

  const defaults = defaultTextsFor(lang);
  const oldPackagePrices = new Set([
    "7 000 zł",
    "4 500 zł",
    "2 000 zł",
    "PLN 7,000",
    "PLN 4,500",
    "PLN 2,000",
    "7.000 PLN",
    "4.500 PLN",
    "2.000 PLN"
  ]);
  const normalized = { ...remoteTexts };

  ["package1Price", "package2Price", "package3Price"].forEach((key) => {
    if (oldPackagePrices.has(normalized[key])) {
      normalized[key] = defaults[key];
    }
  });

  if (
    [
      "Partner Główny",
      "Main Partner",
      "Hauptpartner",
      "Partner strategiczny",
      "Strategic Partner",
      "Strategischer Partner"
    ].includes(normalized.package1Name)
  ) {
    [
      "packagesTitle",
      "packagesLead",
      "package1Name",
      "package1Price",
      "package1For",
      "package1Item1",
      "package1Item2",
      "package1Item3",
      "package1Item4"
    ].forEach((key) => {
      normalized[key] = defaults[key];
    });
  }

  if (normalized.contactEmail === "kontakt@zulawscynoblisci.pl") {
    normalized.contactEmail = defaults.contactEmail;
  }

  if (
    [
      "debaty, wystawy, podcasty i lokalne historie",
      "debates, exhibitions, podcasts and local stories",
      "Debatten, Ausstellungen, Podcasts und lokale Geschichten"
    ].includes(normalized.educationItem3)
  ) {
    normalized.educationItem3 = defaults.educationItem3;
  }

  if (["Zostań wolontariuszem", "Become a volunteer", "Freiwillig mitmachen"].includes(normalized.heroSecondary)) {
    normalized.heroPrimary = defaults.heroPrimary;
    normalized.heroSecondary = defaults.heroSecondary;
  }

  if (
    [
      "Zapisz dziecko",
      "Sign a child up",
      "Kind anmelden"
    ].includes(normalized.heroSecondary)
  ) {
    normalized.heroSecondary = defaults.heroSecondary;
  }

  if (
    [
      "Zobacz kursy",
      "See courses"
    ].includes(normalized.heroPrimary)
  ) {
    normalized.heroPrimary = defaults.heroPrimary;
  }

  if (
    [
      "Kursy",
      "Courses",
      "Kurse"
    ].includes(normalized.coursesEyebrow)
  ) {
    [
      "coursesEyebrow",
      "coursesTitle",
      "coursesLead"
    ].forEach((key) => {
      normalized[key] = defaults[key];
    });
  }

  if (
    [
      "Kursy językowe",
      "Language courses",
      "Sprachkurse"
    ].includes(normalized.quickPath1Title)
  ) {
    [
      "quickPath1Title",
      "quickPath1Copy",
      "course1Title",
      "course1For",
      "course1Gives",
      "course1Start",
      "signupCourseOption1",
      "faq1Question",
      "faq1Answer",
      "faq2Question",
      "faq2Answer"
    ].forEach((key) => {
      normalized[key] = defaults[key];
    });
  }

  normalized.contentVersion = defaults.contentVersion;
  return normalized;
}

const uiText = {
  pl: {
    partnership: "partnerstwo",
    strongest: "najmocniej",
    support: "Wsparcie",
    letsTalk: "Działaj z nami",
    partnerships: "Partnerstwa",
    writeToUs: "Napisz do nas",
    defaultTexts: "Przywróć domyślne",
    autoSave: "Zapisuje się automatycznie",
    readMore: "Czytaj więcej",
    newsArchive: "Historia aktualności",
    newsArchiveLead: "Pełny zapis działań, warsztatów i momentów, które pokazują, jak fundacja pracuje na co dzień.",
    newsArchiveCta: "Zobacz całą historię",
    backToHome: "Wróć na stronę",
    newsCount: "wpisów",
    noNewsArchive: "Pierwsze aktualności pojawią się tutaj wkrótce.",
    courseFormEyebrow: "Zapisy z Instagrama",
    courseFormTitle: "Zapisz dziecko na kurs.",
    courseFormLead: "Zostaw kontakt, wybierz kurs i napisz wiek dziecka. Odezwę się z informacją o grupach, terminach i najbliższych miejscach.",
    courseFormParentName: "Imię i nazwisko rodzica",
    courseFormEmail: "Email",
    courseFormPhone: "Nr telefonu",
    courseFormChildAge: "Wiek dziecka",
    courseFormCourse: "Wybierz kurs",
    courseFormOption1: "kurs ósmoklasisty z angielskiego",
    courseFormOption2: "kurs angielskiego dla dzieci",
    courseFormOption3: "kurs szwedzkiego od podstaw",
    courseFormMessage: "Uwagi / preferowane godziny",
    courseFormMessagePlaceholder: "Np. dziecko jest w 7 klasie, najlepiej popołudnia.",
    courseFormConsent: "Zgadzam się na kontakt w sprawie zapisu na kurs.",
    courseFormButton: "Wyślij zgłoszenie",
    courseFormSuccess: "Dziękuję, zgłoszenie wysłane. Odezwę się najszybciej jak mogę.",
    courseFormMissing: "Uzupełnij wymagane pola i zaznacz zgodę na kontakt.",
    close: "Zamknij",
    visible: "widoczna",
    hidden: "ukryta",
    sectionVisibility: "Widoczność sekcji",
    contactShort: "Kontakt",
    whatsappShort: "WhatsApp",
    enrollShort: "Zapisz",
    partnerShort: "Partnerstwa",
    privacyPolicy: "Polityka prywatności",
    termsAndPrivacy: "Regulamin i prywatność"
  },
  en: {
    partnership: "partnership",
    strongest: "strongest",
    support: "Support",
    letsTalk: "Act with us",
    partnerships: "Partnerships",
    writeToUs: "Write to us",
    defaultTexts: "Restore defaults",
    autoSave: "Autosaves",
    readMore: "Read more",
    newsArchive: "News history",
    newsArchiveLead: "A full record of activities, workshops and moments showing how the foundation works day by day.",
    newsArchiveCta: "See full history",
    backToHome: "Back to website",
    newsCount: "posts",
    noNewsArchive: "The first updates will appear here soon.",
    courseFormEyebrow: "Instagram sign-up",
    courseFormTitle: "Sign a child up for a course.",
    courseFormLead: "Leave your contact details, choose a course and add the child's age. We will get back to you with groups, dates and available places.",
    courseFormParentName: "Parent or guardian name",
    courseFormEmail: "Email",
    courseFormPhone: "Phone number",
    courseFormChildAge: "Child's age",
    courseFormCourse: "Choose a course",
    courseFormOption1: "English 8th-grade exam course",
    courseFormOption2: "English course for children",
    courseFormOption3: "Swedish for beginners",
    courseFormMessage: "Notes / preferred times",
    courseFormMessagePlaceholder: "E.g. grade 7, afternoons work best.",
    courseFormConsent: "I agree to be contacted about the course sign-up.",
    courseFormButton: "Send application",
    courseFormSuccess: "Thank you, the application has been sent. We will get back to you as soon as possible.",
    courseFormMissing: "Fill in the required fields and accept contact consent.",
    close: "Close",
    visible: "visible",
    hidden: "hidden",
    sectionVisibility: "Section visibility",
    contactShort: "Contact",
    whatsappShort: "WhatsApp",
    enrollShort: "Enroll",
    partnerShort: "Partners",
    privacyPolicy: "Privacy policy",
    termsAndPrivacy: "Terms and privacy"
  },
  de: {
    partnership: "Partnerschaft",
    strongest: "stärkstes Paket",
    support: "Unterstützung",
    letsTalk: "Handle mit uns",
    partnerships: "Partnerschaften",
    writeToUs: "Schreib uns",
    defaultTexts: "Standard wiederherstellen",
    autoSave: "Speichert automatisch",
    readMore: "Mehr lesen",
    newsArchive: "News-Archiv",
    newsArchiveLead: "Ein vollständiger Überblick über Aktivitäten, Workshops und Momente, die unsere tägliche Arbeit zeigen.",
    newsArchiveCta: "Alle News ansehen",
    backToHome: "Zurück zur Website",
    newsCount: "Beiträge",
    noNewsArchive: "Die ersten Neuigkeiten erscheinen hier bald.",
    courseFormEyebrow: "Anmeldung über Instagram",
    courseFormTitle: "Melde ein Kind für einen Kurs an.",
    courseFormLead: "Hinterlasse Kontakt, wähle einen Kurs und gib das Alter des Kindes an. Wir melden uns mit Gruppen, Terminen und freien Plätzen.",
    courseFormParentName: "Name des Elternteils",
    courseFormEmail: "E-Mail",
    courseFormPhone: "Telefonnummer",
    courseFormChildAge: "Alter des Kindes",
    courseFormCourse: "Kurs wählen",
    courseFormOption1: "Englischkurs für die Prüfung der 8. Klasse",
    courseFormOption2: "Englischkurs für Kinder",
    courseFormOption3: "Schwedisch für Anfänger",
    courseFormMessage: "Hinweise / bevorzugte Zeiten",
    courseFormMessagePlaceholder: "Z.B. 7. Klasse, am besten nachmittags.",
    courseFormConsent: "Ich stimme der Kontaktaufnahme zur Kursanmeldung zu.",
    courseFormButton: "Anmeldung senden",
    courseFormSuccess: "Danke, die Anmeldung wurde gesendet. Wir melden uns so schnell wie möglich.",
    courseFormMissing: "Fülle die Pflichtfelder aus und bestätige die Kontaktzustimmung.",
    close: "Schließen",
    visible: "sichtbar",
    hidden: "ausgeblendet",
    sectionVisibility: "Sichtbarkeit",
    contactShort: "Kontakt",
    whatsappShort: "WhatsApp",
    enrollShort: "Anmelden",
    partnerShort: "Partner",
    privacyPolicy: "Datenschutz",
    termsAndPrivacy: "Regeln und Datenschutz"
  }
};

const textEditorGroups = [
  ["Hero", ["brand", "navJoin", "heroEyebrow", "heroTitle", "heroLead", "heroPrimary", "heroSecondary", "quickPath1Title", "quickPath1Copy", "quickPath2Title", "quickPath2Copy", "quickPath3Title", "quickPath3Copy", "quickPath4Title", "quickPath4Copy"]],
  ["Misja", ["missionEyebrow", "missionTitle", "missionLead", "missionCard1Title", "missionCard1Copy", "missionCard2Title", "missionCard2Copy", "missionCard3Title", "missionCard3Copy"]],
  ["Aktualności", ["newsEyebrow", "newsTitle", "newsLead"]],
  ["Inicjatywy", ["coursesEyebrow", "coursesTitle", "coursesLead", "course1Title", "course1For", "course1Gives", "course1Start", "course2Title", "course2For", "course2Gives", "course2Start", "course3Title", "course3For", "course3Gives", "course3Start"]],
  ["Zapisy", ["enrollmentEyebrow", "enrollmentTitle", "enrollmentLead", "start1Label", "start1Value", "start1Copy", "start2Label", "start2Value", "start2Copy", "start3Label", "start3Value", "start3Copy", "signupTitle", "signupNameLabel", "signupNamePlaceholder", "signupPhoneLabel", "signupPhonePlaceholder", "signupCourseLabel", "signupCourseOption1", "signupCourseOption2", "signupCourseOption3", "signupChildLabel", "signupChildPlaceholder", "signupMessageLabel", "signupMessagePlaceholder", "signupButton"]],
  ["Rodzice", ["parentsEyebrow", "parentsTitle", "parentsLead", "parent1Title", "parent1Copy", "parent2Title", "parent2Copy", "parent3Title", "parent3Copy"]],
  ["Edukacja", ["educationEyebrow", "educationImageText", "educationTitle", "educationItem1", "educationItem2", "educationItem3", "educationItem4"]],
  ["Wolontariusze", ["volunteersEyebrow", "volunteersTitle", "volunteer1", "volunteer2", "volunteer3", "volunteer4"]],
  ["Dołącz", ["joinEyebrow", "joinTitle", "joinStudentTitle", "joinStudentCopy", "joinVolunteerTitle", "joinVolunteerCopy", "joinPartnerTitle", "joinPartnerCopy"]],
  ["Partnerzy", ["partnersEyebrow", "partnersTitle", "partner1", "partner2", "partner3", "partner4", "partner5", "partner6"]],
  ["Pakiety partnerskie", ["packagesEyebrow", "packagesTitle", "packagesLead", "package1Name", "package1Price", "package1For", "package1Item1", "package1Item2", "package1Item3", "package1Item4"]],
  ["FAQ", ["faqEyebrow", "faqTitle", "faq1Question", "faq1Answer", "faq2Question", "faq2Answer", "faq3Question", "faq3Answer", "faq4Question", "faq4Answer"]],
  ["Kontakt", ["contactEyebrow", "contactTitle", "contactEmail", "contactPlace", "contactNameLabel", "contactNamePlaceholder", "contactEmailLabel", "contactEmailPlaceholder", "contactPurposeLabel", "contactPurposeOption1", "contactPurposeOption2", "contactPurposeOption3", "contactPurposeOption4", "contactMessageLabel", "contactMessagePlaceholder", "contactButton"]]
];

function loadTexts(lang) {
  const defaults = defaultTextsFor(lang);

  try {
    const saved = window.localStorage.getItem(`zulawscy-texts-${lang}`);
    if (!saved) return defaults;

    const parsed = JSON.parse(saved);
    if (parsed.contentVersion !== defaults.contentVersion) {
      return defaults;
    }

    return { ...defaults, ...parsed };
  } catch {
    return defaults;
  }
}

function loadNews(lang) {
  const defaults = localizedNews[lang] || defaultNews;

  try {
    const saved = window.localStorage.getItem(`zulawscy-news-${lang}`);
    if (!saved) return defaults;

    return JSON.parse(saved).map((post, index) => ({
      image: defaults[index % defaults.length]?.image || "",
      ...post
    }));
  } catch {
    return defaults;
  }
}

function loadSectionHidden() {
  try {
    const saved = window.localStorage.getItem("zulawscy-hidden-sections");
    if (!saved) return defaultHiddenSections;

    const parsed = JSON.parse(saved);

    return {
      ...defaultHiddenSections,
      ...parsed,
      __version: sectionVisibilityVersion
    };
  } catch {
    return defaultHiddenSections;
  }
}

function sortNews(posts) {
  return [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));
}

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const cmsAvailable = Boolean(supabaseUrl && supabaseAnonKey);

async function cmsRequest(path, options = {}) {
  if (!cmsAvailable) return null;

  const response = await fetch(`${supabaseUrl}${path}`, {
    ...options,
    headers: {
      apikey: supabaseAnonKey,
      Authorization: `Bearer ${supabaseAnonKey}`,
      "Content-Type": "application/json",
      ...(options.headers || {})
    }
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(`CMS error ${response.status}: ${message || response.statusText}`);
  }

  if (response.status === 204) return null;

  const text = await response.text();
  return text ? JSON.parse(text) : null;
}

async function loadTextsFromCms(lang) {
  const rows = await cmsRequest(
    `/rest/v1/site_texts?lang=eq.${lang}&select=content&limit=1`
  );

  return rows?.[0]?.content || null;
}

async function saveTextsToCms(lang, content) {
  return cmsRequest("/rest/v1/site_texts?on_conflict=lang", {
    method: "POST",
    headers: { Prefer: "resolution=merge-duplicates" },
    body: JSON.stringify({
      lang,
      content,
      updated_at: new Date().toISOString()
    })
  });
}

async function loadNewsFromCms(lang) {
  const rows = await cmsRequest(
    `/rest/v1/news_posts?lang=eq.${lang}&select=*&order=date.desc`
  );

  return rows?.map(({ lang: _lang, created_at: _createdAt, ...post }) => post) || null;
}

async function saveNewsPostToCms(lang, post) {
  return cmsRequest("/rest/v1/news_posts?on_conflict=id", {
    method: "POST",
    headers: { Prefer: "resolution=merge-duplicates" },
    body: JSON.stringify({
      ...post,
      lang,
      created_at: new Date().toISOString()
    })
  });
}

async function deleteNewsPostFromCms(postId) {
  return cmsRequest(`/rest/v1/news_posts?id=eq.${postId}`, {
    method: "DELETE"
  });
}

async function loadSectionHiddenFromCms() {
  const rows = await cmsRequest(
    "/rest/v1/section_visibility?id=eq.global&select=content&limit=1"
  );

  return rows?.[0]?.content || null;
}

async function loadCmsSnapshot(lang) {
  const [remoteTexts, remoteNews, remoteHidden] = await Promise.all([
    loadTextsFromCms(lang),
    loadNewsFromCms(lang),
    loadSectionHiddenFromCms()
  ]);

  return {
    textKeys: remoteTexts ? Object.keys(remoteTexts).length : 0,
    hasHeroTitle: Boolean(remoteTexts?.heroTitle),
    newsCount: remoteNews?.length || 0,
    hiddenSections: remoteHidden
      ? Object.entries(remoteHidden)
          .filter(([key, value]) => key !== "__version" && Boolean(value))
          .map(([key]) => key)
      : []
  };
}

async function saveSectionHiddenToCms(content) {
  return cmsRequest("/rest/v1/section_visibility?on_conflict=id", {
    method: "POST",
    headers: { Prefer: "resolution=merge-duplicates" },
    body: JSON.stringify({
      id: "global",
      content,
      updated_at: new Date().toISOString()
    })
  });
}

async function uploadNewsImageToCms(file) {
  if (!cmsAvailable) return null;

  const extension = file.name.split(".").pop() || "jpg";
  const safeName = `${Date.now()}-${Math.random()
    .toString(36)
    .slice(2)}.${extension}`;
  const path = `news/${safeName}`;
  const response = await fetch(`${supabaseUrl}/storage/v1/object/news-images/${path}`, {
    method: "POST",
    headers: {
      apikey: supabaseAnonKey,
      Authorization: `Bearer ${supabaseAnonKey}`,
      "Content-Type": file.type || "application/octet-stream",
      "x-upsert": "true"
    },
    body: file
  });

  if (!response.ok) {
    throw new Error(`Upload error ${response.status}`);
  }

  return `${supabaseUrl}/storage/v1/object/public/news-images/${path}`;
}

async function saveContactMessageToCms(message) {
  return cmsRequest("/rest/v1/contact_messages", {
    method: "POST",
    body: JSON.stringify({
      ...message,
      created_at: new Date().toISOString()
    })
  });
}

async function sendFormEmail(message) {
  const response = await fetch("/api/send-form-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(message)
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Email error ${response.status}: ${text || response.statusText}`);
  }

  const text = await response.text();
  return text ? JSON.parse(text) : null;
}

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-40px", amount: 0.14 },
    transition: { duration: 0.48, delay: Math.min(delay, 0.12), ease: [0.22, 1, 0.36, 1] }
  };
}

function App() {
  const [open, setOpen] = React.useState(false);
  const [lang, setLang] = React.useState(
    window.localStorage.getItem("zulawscy-lang") || "pl"
  );
  const [news, setNews] = React.useState(() => loadNews(lang));
  const [texts, setTexts] = React.useState(() => loadTexts(lang));
  const [sectionHidden, setSectionHidden] = React.useState(loadSectionHidden);
  const [selectedNews, setSelectedNews] = React.useState(null);
  const [activeEditorGroup, setActiveEditorGroup] = React.useState(
    textEditorGroups[0][0]
  );
  const [panelTab, setPanelTab] = React.useState("news");
  const [activeNews, setActiveNews] = React.useState(0);
  const [cmsReady, setCmsReady] = React.useState(!cmsAvailable);
  const [sectionsReady, setSectionsReady] = React.useState(!cmsAvailable);
  const [isUploadingImage, setIsUploadingImage] = React.useState(false);
  const [signupStatus, setSignupStatus] = React.useState("");
  const [courseFormStatus, setCourseFormStatus] = React.useState("");
  const [contactStatus, setContactStatus] = React.useState("");
  const [isTestingCms, setIsTestingCms] = React.useState(false);
  const [isPublishingCms, setIsPublishingCms] = React.useState(false);
  const [isRefreshingCms, setIsRefreshingCms] = React.useState(false);
  const [cmsStatus, setCmsStatus] = React.useState(
    cmsAvailable ? "CMS Supabase aktywny" : "Tryb lokalny"
  );
  const [isPanelOpen, setIsPanelOpen] = React.useState(
    window.location.hash === "#panel"
  );
  const [isLegalPage, setIsLegalPage] = React.useState(
    new URLSearchParams(window.location.search).get("legal") === "privacy"
  );
  const [isNewsArchivePage, setIsNewsArchivePage] = React.useState(
    new URLSearchParams(window.location.search).get("news") === "archive"
  );
  const [isCourseFormPage, setIsCourseFormPage] = React.useState(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get("form") === "course" || params.get("zapisy") === "kursy";
  });
  const [isLoggedIn, setIsLoggedIn] = React.useState(
    window.localStorage.getItem("zulawscy-admin") === "true"
  );
  const [loginPassword, setLoginPassword] = React.useState("");
  const [loginError, setLoginError] = React.useState("");
  const [postDraft, setPostDraft] = React.useState({
    title: "",
    tag: "",
    date: new Date().toISOString().slice(0, 10),
    image: "",
    link: "",
    excerpt: ""
  });
  const [scrollProgress, setScrollProgress] = React.useState(0);
  const heroOffset = Math.min(scrollProgress * 140, 80);
  const archiveNews = sortNews(news);
  const latestNews = archiveNews.slice(0, 3);
  const currentNews = latestNews[activeNews % Math.max(latestNews.length, 1)];
  const defaultTextSet = defaultTextsFor(lang);
  const t = (key) => texts[key] ?? defaultTextSet[key] ?? "";
  const u = (key) => uiText[lang]?.[key] ?? uiText.pl[key] ?? key;
  const visibleEditorGroups = textEditorGroups.filter(
    ([group]) => group === activeEditorGroup
  );
  const visibleNavItems = navItems.filter((item) => {
    const visibilityKey = navVisibilityKey[item.id];
    return !visibilityKey || !sectionHidden[visibilityKey];
  });
  const partners = [
    t("partner1"),
    t("partner2"),
    t("partner3"),
    t("partner4"),
    t("partner5"),
    t("partner6")
  ];
  const educationItems = [
    t("educationItem1"),
    t("educationItem2"),
    t("educationItem3"),
    t("educationItem4")
  ];
  const volunteerItems = [
    t("volunteer1"),
    t("volunteer2"),
    t("volunteer3"),
    t("volunteer4")
  ];
  const joinPaths = [
    [GraduationCap, t("joinStudentTitle"), t("joinStudentCopy")],
    [HeartHandshake, t("joinVolunteerTitle"), t("joinVolunteerCopy")],
    [Globe2, t("joinPartnerTitle"), t("joinPartnerCopy")]
  ];
  const strategicPackage = {
    name: t("package1Name"),
    price: t("package1Price"),
    forWhom: t("package1For"),
    items: [
      t("package1Item1"),
      t("package1Item2"),
      t("package1Item3"),
      t("package1Item4")
    ]
  };
  const courseCards = [
    [Globe2, t("course1Title"), t("course1For"), t("course1Gives"), t("course1Start")],
    [BookOpen, t("course2Title"), t("course2For"), t("course2Gives"), t("course2Start")],
    [Sparkles, t("course3Title"), t("course3For"), t("course3Gives"), t("course3Start")]
  ];
  const startItems = [
    [t("start1Label"), t("start1Value"), t("start1Copy")],
    [t("start2Label"), t("start2Value"), t("start2Copy")],
    [t("start3Label"), t("start3Value"), t("start3Copy")]
  ];
  const parentCards = [
    [UsersRound, t("parent1Title"), t("parent1Copy")],
    [Mail, t("parent2Title"), t("parent2Copy")],
    [HeartHandshake, t("parent3Title"), t("parent3Copy")]
  ];
  const mobileDockItems = [
    [Mail, u("contactShort"), "#kontakt", "bg-cream text-forest"],
    [MessageCircle, u("whatsappShort"), whatsappUrl, "bg-[#25D366] text-ink", true],
    [GraduationCap, u("enrollShort"), "#zapisy", "bg-gold text-ink"],
    ...(!sectionHidden.packages
      ? [[HeartHandshake, u("partnerShort"), "#pakiety-partnerskie", "bg-forest text-cream"]]
      : [])
  ];
  const quickPaths = [
    [BookOpen, t("quickPath1Title"), t("quickPath1Copy"), "#inicjatywy"],
    [GraduationCap, t("quickPath2Title"), t("quickPath2Copy"), "#zapisy"],
    [Sparkles, t("quickPath3Title"), t("quickPath3Copy"), "#inicjatywy"],
    [HeartHandshake, t("quickPath4Title"), t("quickPath4Copy"), "#pakiety-partnerskie"]
  ];
  const faqItems = [
    [t("faq1Question"), t("faq1Answer")],
    [t("faq2Question"), t("faq2Answer")],
    [t("faq3Question"), t("faq3Answer")],
    [t("faq4Question"), t("faq4Answer")]
  ];

  React.useEffect(() => {
    let isActive = true;

    window.localStorage.setItem("zulawscy-lang", lang);
    document.documentElement.lang = lang;
    setCmsReady(false);
    const localTexts = loadTexts(lang);
    const localNews = loadNews(lang);

    setTexts(localTexts);
    setNews(localNews);
    setActiveNews(0);

    async function loadCmsContent() {
      if (!cmsAvailable) {
        if (isActive) setCmsReady(true);
        return;
      }

      try {
        const [remoteTexts, remoteNews] = await Promise.all([
          loadTextsFromCms(lang),
          loadNewsFromCms(lang)
        ]);

        if (!isActive) return;
        if (remoteTexts) {
          const normalizedTexts = normalizeCmsTexts(lang, remoteTexts);
          setTexts({ ...defaultTextsFor(lang), ...normalizedTexts });
          if (normalizedTexts.contentVersion !== remoteTexts.contentVersion) {
            saveTextsToCms(lang, normalizedTexts).catch(() => {});
          }
        }
        if (Array.isArray(remoteNews)) setNews(remoteNews);
        setCmsStatus("CMS Supabase aktywny");
      } catch (error) {
        if (isActive) {
          setCmsStatus(`CMS niedostępny: ${error.message}`);
        }
      } finally {
        if (isActive) setCmsReady(true);
      }
    }

    loadCmsContent();

    return () => {
      isActive = false;
    };
  }, [lang]);

  React.useEffect(() => {
    window.localStorage.setItem(`zulawscy-news-${lang}`, JSON.stringify(news));
  }, [news, lang]);

  React.useEffect(() => {
    window.localStorage.setItem(`zulawscy-texts-${lang}`, JSON.stringify(texts));
    if (!cmsAvailable || !cmsReady) return;

    const timer = window.setTimeout(() => {
      saveTextsToCms(lang, texts).catch((error) =>
        setCmsStatus(`Nie udało się zapisać tekstów w CMS: ${error.message}`)
      );
    }, 600);

    return () => window.clearTimeout(timer);
  }, [texts, lang, cmsReady]);

  React.useEffect(() => {
    window.localStorage.setItem("zulawscy-hidden-sections", JSON.stringify(sectionHidden));
    if (!cmsAvailable || !sectionsReady) return;
    saveSectionHiddenToCms(sectionHidden).catch((error) =>
      setCmsStatus(`Nie udało się zapisać widoczności sekcji: ${error.message}`)
    );
  }, [sectionHidden, sectionsReady]);

  React.useEffect(() => {
    let isActive = true;

    async function loadCmsSections() {
      if (!cmsAvailable) {
        setSectionsReady(true);
        return;
      }

      try {
        const remoteHidden = await loadSectionHiddenFromCms();
        if (isActive && remoteHidden) {
          setSectionHidden({
            ...defaultHiddenSections,
            ...remoteHidden,
            __version: sectionVisibilityVersion
          });
        }
      } catch (error) {
        if (isActive) setCmsStatus(`CMS sekcji niedostępny: ${error.message}`);
      } finally {
        if (isActive) setSectionsReady(true);
      }
    }

    loadCmsSections();

    return () => {
      isActive = false;
    };
  }, []);

  React.useEffect(() => {
    let frame = 0;
    const updateProgress = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(max > 0 ? window.scrollY / max : 0);
    };
    const onScroll = () => {
      if (!frame) {
        frame = window.requestAnimationFrame(updateProgress);
      }
    };

    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  React.useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveNews((current) => (current + 1) % Math.max(latestNews.length, 1));
    }, 4500);

    return () => window.clearInterval(timer);
  }, [latestNews.length]);

  React.useEffect(() => {
    const syncRouteState = () => {
      const params = new URLSearchParams(window.location.search);
      setIsPanelOpen(window.location.hash === "#panel");
      setIsLegalPage(params.get("legal") === "privacy");
      setIsNewsArchivePage(params.get("news") === "archive");
      setIsCourseFormPage(
        params.get("form") === "course" || params.get("zapisy") === "kursy"
      );
    };

    const handleClick = () => window.setTimeout(syncRouteState, 0);

    window.addEventListener("hashchange", syncRouteState);
    window.addEventListener("popstate", syncRouteState);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("hashchange", syncRouteState);
      window.removeEventListener("popstate", syncRouteState);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  function handleLogin(event) {
    event.preventDefault();
    if (loginPassword === adminPassword) {
      setIsLoggedIn(true);
      setLoginError("");
      window.localStorage.setItem("zulawscy-admin", "true");
      return;
    }

    setLoginError("Nieprawidłowe hasło.");
  }

  async function handlePostSubmit(event) {
    event.preventDefault();
    if (!postDraft.title.trim() || !postDraft.excerpt.trim()) return;

    const nextPost = {
      id: `news-${Date.now()}`,
      title: postDraft.title.trim(),
      tag:
        postDraft.tag.trim() ||
        (lang === "pl" ? "Aktualność" : lang === "en" ? "News" : "News"),
      date: postDraft.date || new Date().toISOString().slice(0, 10),
      image: postDraft.image.trim(),
      link: postDraft.link.trim(),
      excerpt: postDraft.excerpt.trim()
    };

    setNews((posts) => sortNews([nextPost, ...posts]));
    if (cmsAvailable) {
      try {
        await saveNewsPostToCms(lang, nextPost);
        setCmsStatus("Aktualność zapisana w CMS");
      } catch {
        setCmsStatus("Nie udało się zapisać aktualności w CMS");
      }
    }
    setPostDraft({
      title: "",
      tag: "",
      date: new Date().toISOString().slice(0, 10),
      image: "",
      link: "",
      excerpt: ""
    });
    setActiveNews(0);
  }

  async function handleImageUpload(event) {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsUploadingImage(true);
    try {
      const image = cmsAvailable
        ? await uploadNewsImageToCms(file)
        : await fileToDataUrl(file);

      setPostDraft((draft) => ({
        ...draft,
        image: typeof image === "string" ? image : draft.image
      }));
      setCmsStatus(cmsAvailable ? "Zdjęcie zapisane w CMS" : "Zdjęcie zapisane lokalnie");
    } catch {
      setCmsStatus("Nie udało się przesłać zdjęcia");
    } finally {
      setIsUploadingImage(false);
      event.target.value = "";
    }
  }

  async function handleNewsDelete(postId) {
    setNews((posts) => posts.filter((item) => item.id !== postId));
    if (!cmsAvailable) return;

    try {
      await deleteNewsPostFromCms(postId);
      setCmsStatus("Aktualność usunięta z CMS");
    } catch {
      setCmsStatus("Nie udało się usunąć aktualności z CMS");
    }
  }

  async function handleCmsDiagnostic() {
    if (!cmsAvailable) {
      setCmsStatus("Diagnostyka: brak zmiennych Supabase w tym deployu");
      return;
    }

    setIsTestingCms(true);
    setCmsStatus("Diagnostyka CMS: testuję zapis...");

    try {
      const diagnosticLang = "__diagnostic";
      await saveTextsToCms(diagnosticLang, {
        contentVersion: "diagnostic",
        checkedAt: new Date().toISOString()
      });
      const diagnosticContent = await loadTextsFromCms(diagnosticLang);

      if (!diagnosticContent?.checkedAt) {
        throw new Error("zapis testowy nie wrócił z bazy");
      }

      setCmsStatus("Diagnostyka CMS OK: zapis i odczyt site_texts działają");
    } catch (error) {
      setCmsStatus(`Diagnostyka CMS błąd: ${error.message}`);
    } finally {
      setIsTestingCms(false);
    }
  }

  async function handlePublishCurrentToCms() {
    if (!cmsAvailable) {
      setCmsStatus("Publikacja: brak zmiennych Supabase w tym deployu");
      return;
    }

    setIsPublishingCms(true);
    setCmsStatus("Publikuję aktualną wersję do CMS...");

    try {
      await saveTextsToCms(lang, texts);
      await saveSectionHiddenToCms(sectionHidden);
      await Promise.all(news.map((post) => saveNewsPostToCms(lang, post)));
      setCmsStatus(
        `Opublikowano do CMS: teksty, widoczność sekcji i aktualności dla ${lang.toUpperCase()}`
      );
    } catch (error) {
      setCmsStatus(`Nie udało się opublikować do CMS: ${error.message}`);
    } finally {
      setIsPublishingCms(false);
    }
  }

  async function handleRefreshFromCms() {
    if (!cmsAvailable) {
      setCmsStatus("Odświeżanie: brak zmiennych Supabase w tym deployu");
      return;
    }

    setIsRefreshingCms(true);
    setCmsStatus("Pobieram aktualną wersję z CMS...");

    try {
      const [remoteTexts, remoteNews, remoteHidden] = await Promise.all([
        loadTextsFromCms(lang),
        loadNewsFromCms(lang),
        loadSectionHiddenFromCms()
      ]);
      const snapshot = await loadCmsSnapshot(lang);

      if (remoteTexts) {
        const normalizedTexts = normalizeCmsTexts(lang, remoteTexts);
        setTexts({ ...defaultTextsFor(lang), ...normalizedTexts });
        if (normalizedTexts.contentVersion !== remoteTexts.contentVersion) {
          saveTextsToCms(lang, normalizedTexts).catch(() => {});
        }
      }
      if (remoteNews) setNews(remoteNews);
      if (remoteHidden) {
        setSectionHidden({
          ...defaultHiddenSections,
          ...remoteHidden,
          __version: sectionVisibilityVersion
        });
      }

      setCmsStatus(
        `CMS snapshot ${lang.toUpperCase()}: teksty ${snapshot.textKeys}, aktualności ${snapshot.newsCount}, ukryte: ${
          snapshot.hiddenSections.join(", ") || "brak"
        }`
      );
    } catch (error) {
      setCmsStatus(`Nie udało się pobrać snapshotu CMS: ${error.message}`);
    } finally {
      setIsRefreshingCms(false);
    }
  }

  async function handleSignupSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      type: "signup",
      lang,
      name: formData.get("name")?.toString() || "",
      email: formData.get("contact")?.toString() || "",
      purpose: formData.get("course")?.toString() || "",
      child: formData.get("child")?.toString() || "",
      message: formData.get("message")?.toString() || ""
    };

    if (!payload.name || !payload.email) {
      setSignupStatus("Uzupełnij imię i kontakt.");
      return;
    }

    if (!cmsAvailable) {
      setSignupStatus("Formularz wymaga aktywnego CMS Supabase.");
      return;
    }

    try {
      await saveContactMessageToCms(payload);
      try {
        await sendFormEmail(payload);
        setSignupStatus("Dziękujemy, zgłoszenie wysłane.");
      } catch (error) {
        setSignupStatus(
          `Zgłoszenie zapisane w CMS, ale email nie wyszedł: ${error.message}`
        );
      }
      form.reset();
    } catch (error) {
      setSignupStatus(`Nie udało się zapisać zgłoszenia: ${error.message}`);
    }
  }

  async function handleCourseFormSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const parentName = formData.get("name")?.toString().trim() || "";
    const parentEmail = formData.get("email")?.toString().trim() || "";
    const parentPhone = formData.get("phone")?.toString().trim() || "";
    const childAge = formData.get("childAge")?.toString().trim() || "";
    const course = formData.get("course")?.toString().trim() || "";
    const note = formData.get("message")?.toString().trim() || "";
    const consent = formData.get("consent") === "yes";

    if (!parentName || !parentEmail || !parentPhone || !childAge || !course || !consent) {
      setCourseFormStatus(u("courseFormMissing"));
      return;
    }

    if (!cmsAvailable) {
      setCourseFormStatus("Formularz wymaga aktywnego CMS Supabase.");
      return;
    }

    const message = [
      `Telefon: ${parentPhone}`,
      `Źródło: formularz z linku Instagram`,
      consent ? "Zgoda na kontakt: tak" : "Zgoda na kontakt: nie",
      note ? `Uwagi: ${note}` : ""
    ]
      .filter(Boolean)
      .join("\n");

    const cmsPayload = {
      type: "signup",
      lang,
      name: parentName,
      email: parentEmail,
      purpose: course,
      child: childAge,
      message
    };
    const emailPayload = {
      ...cmsPayload,
      phone: parentPhone,
      consent: consent ? "tak" : "nie"
    };

    try {
      await saveContactMessageToCms(cmsPayload);
      try {
        await sendFormEmail(emailPayload);
        setCourseFormStatus(u("courseFormSuccess"));
      } catch (error) {
        setCourseFormStatus(
          `Zgłoszenie zapisane w CMS, ale email nie wyszedł: ${error.message}`
        );
      }
      form.reset();
    } catch (error) {
      setCourseFormStatus(`Nie udało się zapisać zgłoszenia: ${error.message}`);
    }
  }

  async function handleContactSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      type: "contact",
      lang,
      name: formData.get("name")?.toString() || "",
      email: formData.get("email")?.toString() || "",
      purpose: formData.get("purpose")?.toString() || "",
      message: formData.get("message")?.toString() || ""
    };

    if (!payload.name || !payload.email || !payload.message) {
      setContactStatus("Uzupełnij imię, email i wiadomość.");
      return;
    }

    if (!cmsAvailable) {
      setContactStatus("Formularz wymaga aktywnego CMS Supabase.");
      return;
    }

    try {
      await saveContactMessageToCms(payload);
      try {
        await sendFormEmail(payload);
        setContactStatus("Dziękujemy, wiadomość wysłana.");
      } catch (error) {
        setContactStatus(
          `Wiadomość zapisana w CMS, ale email nie wyszedł: ${error.message}`
        );
      }
      form.reset();
    } catch (error) {
      setContactStatus(`Nie udało się zapisać wiadomości: ${error.message}`);
    }
  }

  function closePanel() {
    setIsPanelOpen(false);
    if (window.location.hash === "#panel") {
      window.history.replaceState(null, "", window.location.pathname);
    }
  }

  if (isLegalPage) {
    return (
      <main className="min-h-screen bg-porcelain text-ink">
        <header className="border-b border-ink/10 bg-porcelain">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-5 sm:px-6">
            <a href="/" className="flex items-center gap-3 text-sm font-black text-forest">
              <span className="grid h-10 w-10 place-items-center overflow-hidden rounded-full bg-white shadow-sm">
                <img
                  src={logo}
                  alt="Logo Fundacji Żuławscy Nobliści"
                  className="h-9 w-9 object-contain"
                />
              </span>
              {t("brand")}
            </a>
            <a
              href="/"
              className="rounded-full bg-ink px-4 py-2 text-xs font-black text-cream transition hover:bg-forest"
            >
              Wróć na stronę
            </a>
          </div>
        </header>
        <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
          <p className="eyebrow">RODO / regulamin</p>
          <h1 className="mt-4 max-w-4xl font-serif text-[clamp(3rem,8vw,6.5rem)] font-extrabold leading-[0.9] text-forest">
            {u("termsAndPrivacy")}
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-semibold leading-8 text-ink/62">
            Prosty dokument opisujący zasady korzystania ze strony, formularzy,
            panelu treści oraz sposób przetwarzania danych.
          </p>

          <div className="mt-12 grid gap-4">
            {[
              [
                "1. Administrator danych",
                `Administratorem danych jest ${t("brand")}. Kontakt w sprawach prywatności i danych: ${t("contactEmail")}. Dane formalne fundacji, KRS/NIP/REGON zostaną uzupełnione po rejestracji.`
              ],
              [
                "2. Jakie dane zbieramy",
                "Przez formularze możemy zbierać imię, adres email lub telefon, cel kontaktu, informacje o zgłoszeniu dziecka oraz treść wiadomości. W panelu administracyjnym przechowujemy także treści strony, aktualności i zdjęcia dodane do aktualności."
              ],
              [
                "3. Po co przetwarzamy dane",
                "Dane z formularzy wykorzystujemy wyłącznie po to, żeby odpowiedzieć na wiadomość, obsłużyć zgłoszenie na kurs, kontakt wolontariacki albo rozmowę partnerską. Dane treściowe z panelu służą do publikowania i utrzymania strony."
              ],
              [
                "4. Podstawa i czas przechowywania",
                "Dane przetwarzamy na podstawie dobrowolnej wiadomości oraz uzasadnionego interesu polegającego na obsłudze kontaktu. Przechowujemy je tak długo, jak jest to potrzebne do rozmowy i organizacji działań, chyba że przepisy wymagają dłuższego okresu."
              ],
              [
                "5. Narzędzia techniczne",
                "Strona działa na Vercel. Dane formularzy i treści strony są zapisywane w Supabase. Powiadomienia email wysyła Resend. Te podmioty mogą przetwarzać dane techniczne potrzebne do działania strony i formularzy."
              ],
              [
                "6. Twoje prawa",
                "Masz prawo dostępu do danych, sprostowania, usunięcia, ograniczenia przetwarzania, sprzeciwu oraz wniesienia skargi do Prezesa UODO. W sprawach danych napisz do nas mailowo."
              ],
              [
                "7. Cookies i pamięć przeglądarki",
                "Strona może korzystać z lokalnej pamięci przeglądarki, żeby zapamiętać wybrany język, stan panelu i kopię roboczą treści. Nie używamy tego do profilowania użytkowników."
              ],
              [
                "8. Regulamin korzystania ze strony",
                "Strona ma charakter informacyjny. Treści publikowane na stronie nie stanowią oferty handlowej w rozumieniu Kodeksu cywilnego. Korzystając z formularza, użytkownik podaje dane dobrowolnie i zobowiązuje się nie przesyłać treści bezprawnych."
              ],
              [
                "9. Formularze i kontakt",
                "Wysłanie formularza nie oznacza automatycznego przyjęcia na kurs, wolontariat lub współpracę partnerską. Odpowiadamy indywidualnie, korzystając z podanego kontaktu."
              ],
              [
                "10. Aktualizacje dokumentu",
                "Dokument może być aktualizowany wraz z rozwojem strony i działań fundacji. Ostatnia aktualizacja: maj 2026."
              ]
            ].map(([title, copy]) => (
              <article
                key={title}
                className="rounded-[8px] border border-forest/10 bg-white/75 p-5 shadow-panel"
              >
                <h2 className="font-serif text-2xl font-bold text-forest">
                  {title}
                </h2>
                <p className="mt-3 text-sm font-semibold leading-7 text-ink/62">
                  {copy}
                </p>
              </article>
            ))}
          </div>
        </section>
      </main>
    );
  }

  if (isNewsArchivePage) {
    return (
      <main className="min-h-screen bg-porcelain text-ink">
        <header className="border-b border-ink/10 bg-porcelain">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 sm:px-6">
            <a href="/" className="flex items-center gap-3 text-sm font-black text-forest">
              <span className="grid h-10 w-10 place-items-center overflow-hidden rounded-full bg-white shadow-sm">
                <img
                  src={logo}
                  alt="Logo Fundacji Żuławscy Nobliści"
                  className="h-9 w-9 object-contain"
                />
              </span>
              {t("brand")}
            </a>
            <a
              href="/"
              className="rounded-full bg-ink px-4 py-2 text-xs font-black text-cream transition hover:bg-forest"
            >
              {u("backToHome")}
            </a>
          </div>
        </header>

        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
            <div>
              <p className="eyebrow">{t("newsEyebrow")}</p>
              <h1 className="mt-4 max-w-4xl font-serif text-[clamp(3rem,8vw,6.5rem)] font-extrabold leading-[0.9] text-forest">
                {u("newsArchive")}
              </h1>
            </div>
            <div className="lg:pb-2">
              <p className="lead">
                {u("newsArchiveLead")}
              </p>
              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-forest/12 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-forest shadow-sm">
                <CalendarDays size={16} className="text-gold" />
                {archiveNews.length} {u("newsCount")}
              </div>
            </div>
          </div>

          {archiveNews.length > 0 ? (
            <div className="mt-12 grid gap-4 md:grid-cols-2">
              {archiveNews.map((post, index) => (
                <article
                  key={post.id}
                  className="grid overflow-hidden rounded-[8px] border border-forest/10 bg-white/78 shadow-panel sm:grid-cols-[180px_1fr]"
                >
                  <div className="min-h-[180px] bg-forest/10">
                    {post.image ? (
                      <img
                        src={post.image}
                        alt=""
                        loading={index < 2 ? "eager" : "lazy"}
                        decoding="async"
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="grid h-full min-h-[180px] place-items-center bg-forest text-cream">
                        <BookOpen size={32} className="text-gold" />
                      </div>
                    )}
                  </div>
                  <div className="flex min-h-[220px] flex-col p-5">
                    <div className="flex flex-wrap items-center gap-3">
                      {post.tag && (
                        <span className="rounded-full bg-gold px-3 py-1 text-[0.66rem] font-black uppercase tracking-[0.16em] text-ink">
                          {post.tag}
                        </span>
                      )}
                      {post.date && (
                        <span className="inline-flex items-center gap-2 text-xs font-black text-ink/48">
                          <CalendarDays size={14} className="text-forest" />
                          {post.date}
                        </span>
                      )}
                    </div>
                    <h2 className="mt-5 font-serif text-3xl font-bold leading-none text-forest">
                      {post.title}
                    </h2>
                    <p className="mt-4 text-sm font-semibold leading-7 text-ink/62">
                      {post.excerpt}
                    </p>
                    {post.link && (
                      <a
                        href={post.link}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-auto inline-flex w-fit items-center gap-2 pt-5 text-sm font-black text-forest transition hover:text-gold"
                      >
                        {u("readMore")}
                        <ArrowUpRight size={16} />
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="mt-12 rounded-[8px] border border-forest/10 bg-white/78 p-8 shadow-panel">
              <p className="text-lg font-bold text-forest">{u("noNewsArchive")}</p>
            </div>
          )}
        </section>
      </main>
    );
  }

  if (isCourseFormPage) {
    return (
      <main className="min-h-screen bg-porcelain text-ink">
        <header className="border-b border-ink/10 bg-porcelain/95">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 sm:px-6">
            <a href="/" className="flex items-center gap-3 text-sm font-black text-forest">
              <span className="grid h-10 w-10 place-items-center overflow-hidden rounded-full bg-white shadow-sm">
                <img
                  src={logo}
                  alt="Logo Fundacji Żuławscy Nobliści"
                  className="h-9 w-9 object-contain"
                />
              </span>
              <span className="hidden sm:inline">{t("brand")}</span>
            </a>
            <div className="flex items-center gap-1 rounded-full border border-forest/10 bg-white p-1 shadow-sm">
              {languages.map(([code, label]) => (
                <button
                  key={code}
                  type="button"
                  onClick={() => setLang(code)}
                  className={`rounded-full px-3 py-1.5 text-[0.68rem] font-black transition ${
                    lang === code
                      ? "bg-forest text-cream"
                      : "text-forest/55 hover:text-forest"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </header>

        <section className="relative overflow-hidden px-4 py-10 sm:px-6 sm:py-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(196,164,91,0.16),transparent_28%),radial-gradient(circle_at_80%_0%,rgba(40,87,70,0.12),transparent_32%)]" />
          <div className="relative mx-auto grid max-w-6xl gap-8 lg:grid-cols-[.92fr_1.08fr] lg:items-center">
            <div className="py-6 lg:py-12">
              <p className="eyebrow">{u("courseFormEyebrow")}</p>
              <h1 className="mt-5 max-w-3xl font-serif text-[clamp(3.2rem,8vw,7rem)] font-extrabold leading-[0.9] text-forest">
                {u("courseFormTitle")}
              </h1>
              <p className="mt-6 max-w-xl text-lg font-semibold leading-8 text-ink/62">
                {u("courseFormLead")}
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {[
                  u("courseFormOption1"),
                  u("courseFormOption2"),
                  u("courseFormOption3")
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-forest/10 bg-white/75 px-4 py-2 text-xs font-black text-forest shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <form
              onSubmit={handleCourseFormSubmit}
              className="rounded-[8px] border border-forest/10 bg-white/82 p-5 shadow-panel backdrop-blur sm:p-7"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm font-bold text-ink/70 sm:col-span-2">
                  {u("courseFormParentName")}
                  <input
                    name="name"
                    required
                    autoComplete="name"
                    className="mt-2 w-full rounded-[8px] border border-ink/10 bg-porcelain px-4 py-4 text-base text-ink outline-none transition focus:border-gold"
                  />
                </label>
                <label className="block text-sm font-bold text-ink/70">
                  {u("courseFormEmail")}
                  <input
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="mt-2 w-full rounded-[8px] border border-ink/10 bg-porcelain px-4 py-4 text-base text-ink outline-none transition focus:border-gold"
                  />
                </label>
                <label className="block text-sm font-bold text-ink/70">
                  {u("courseFormPhone")}
                  <input
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    className="mt-2 w-full rounded-[8px] border border-ink/10 bg-porcelain px-4 py-4 text-base text-ink outline-none transition focus:border-gold"
                  />
                </label>
                <label className="block text-sm font-bold text-ink/70">
                  {u("courseFormChildAge")}
                  <input
                    name="childAge"
                    required
                    inputMode="numeric"
                    className="mt-2 w-full rounded-[8px] border border-ink/10 bg-porcelain px-4 py-4 text-base text-ink outline-none transition focus:border-gold"
                  />
                </label>
                <label className="block text-sm font-bold text-ink/70">
                  {u("courseFormCourse")}
                  <select
                    name="course"
                    required
                    defaultValue=""
                    className="mt-2 w-full rounded-[8px] border border-ink/10 bg-porcelain px-4 py-4 text-base text-ink outline-none transition focus:border-gold"
                  >
                    <option value="" disabled>
                      {u("courseFormCourse")}
                    </option>
                    <option>{u("courseFormOption1")}</option>
                    <option>{u("courseFormOption2")}</option>
                    <option>{u("courseFormOption3")}</option>
                  </select>
                </label>
                <label className="block text-sm font-bold text-ink/70 sm:col-span-2">
                  {u("courseFormMessage")}
                  <textarea
                    name="message"
                    rows="4"
                    placeholder={u("courseFormMessagePlaceholder")}
                    className="mt-2 w-full rounded-[8px] border border-ink/10 bg-porcelain px-4 py-4 text-base text-ink outline-none transition focus:border-gold"
                  />
                </label>
              </div>

              <label className="mt-5 flex gap-3 text-sm font-bold leading-6 text-ink/62">
                <input
                  name="consent"
                  value="yes"
                  type="checkbox"
                  required
                  className="mt-1 h-5 w-5 rounded border-ink/20 accent-forest"
                />
                <span>
                  {u("courseFormConsent")}{" "}
                  <a
                    href="/?legal=privacy"
                    className="font-black text-forest underline decoration-gold underline-offset-4"
                  >
                    {u("termsAndPrivacy")}
                  </a>
                </span>
              </label>

              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-forest px-6 py-4 text-sm font-black text-cream transition hover:-translate-y-1 hover:bg-ink"
              >
                {u("courseFormButton")}
                <Send size={18} />
              </button>
              {courseFormStatus && (
                <p className="mt-4 text-sm font-bold text-forest">{courseFormStatus}</p>
              )}
            </form>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen overflow-hidden bg-porcelain text-ink">
      <div className="fixed inset-x-0 top-0 z-50 h-1 bg-cream/40">
        <motion.div
          className="h-full bg-gradient-to-r from-gold via-ember to-moss"
          style={{
            transform: `scaleX(${scrollProgress})`,
            transformOrigin: "0%"
          }}
        />
      </div>

      <header className="fixed inset-x-0 top-0 z-40">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a
            href="#top"
            className="group flex items-center gap-3 rounded-full border border-white/20 bg-porcelain/92 py-2 pl-2 pr-4 text-forest shadow-panel backdrop-blur-2xl"
          >
            <span className="grid h-10 w-10 place-items-center overflow-hidden rounded-full bg-white shadow-sm">
              <img
                src={logo}
                alt="Logo Fundacji Żuławscy Nobliści"
                decoding="async"
                fetchPriority="high"
                className="h-9 w-9 object-contain"
              />
            </span>
            <span className="hidden text-sm font-black tracking-wide sm:block">
              {t("brand")}
            </span>
          </a>

          <nav className="hidden items-center gap-1 rounded-full border border-ink/10 bg-porcelain/80 p-1 shadow-panel backdrop-blur-2xl lg:flex">
            {visibleNavItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="rounded-full px-4 py-2 text-sm font-semibold text-ink/70 transition hover:bg-ink hover:text-cream"
              >
                {item.label[lang]}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-1 rounded-full border border-ink/10 bg-porcelain/80 p-1 shadow-panel backdrop-blur-2xl md:flex">
            {languages.map(([id, label]) => (
              <button
                key={id}
                type="button"
                onClick={() => setLang(id)}
                className={`rounded-full px-3 py-2 text-xs font-black transition ${
                  lang === id
                    ? "bg-ink text-cream"
                    : "text-ink/55 hover:text-ink"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <a
            href="#kontakt"
            className="hidden items-center gap-2 rounded-full bg-forest px-5 py-3 text-sm font-bold text-cream shadow-glow transition hover:-translate-y-0.5 hover:bg-ink md:flex"
          >
            {t("navJoin")}
            <ArrowUpRight size={16} />
          </a>

          <button
            aria-label="Otwórz menu"
            onClick={() => setOpen(true)}
            className="grid h-12 w-12 place-items-center rounded-full bg-ink text-cream lg:hidden"
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 bg-ink/85 p-4 backdrop-blur-xl lg:hidden"
        >
          <div className="flex h-full flex-col rounded-[28px] bg-porcelain p-5">
            <div className="flex items-center justify-between">
              <span className="font-bold">{t("brand")}</span>
              <button
                aria-label="Zamknij menu"
                onClick={() => setOpen(false)}
                className="grid h-11 w-11 place-items-center rounded-full bg-ink text-cream"
              >
                <X size={20} />
              </button>
            </div>
            <div className="mt-10 grid gap-3">
              {visibleNavItems.map((item) => (
                <a
                  key={item.id}
                  onClick={() => setOpen(false)}
                  href={`#${item.id}`}
                  className="border-b border-ink/10 py-4 font-serif text-4xl"
                >
                  {item.label[lang]}
                </a>
              ))}
            </div>
            <div className="mt-auto flex gap-2 rounded-full bg-white p-1">
              {languages.map(([id, label]) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => setLang(id)}
                  className={`flex-1 rounded-full px-4 py-3 text-sm font-black transition ${
                    lang === id ? "bg-ink text-cream" : "text-ink/60"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {isPanelOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[60] overflow-y-auto bg-ink/88 p-4 backdrop-blur-2xl"
        >
          <div className="mx-auto my-6 max-w-5xl rounded-[8px] border border-cream/12 bg-porcelain shadow-panel">
            <div className="flex items-center justify-between border-b border-ink/10 p-5">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-forest/60">
                  Ukryty panel
                </p>
                <h2 className="mt-1 text-2xl font-black text-ink">
                  Aktualności
                </h2>
              </div>
              <button
                aria-label="Zamknij panel"
                onClick={closePanel}
                className="grid h-11 w-11 place-items-center rounded-full bg-ink text-cream"
              >
                <X size={20} />
              </button>
            </div>

            {!isLoggedIn ? (
              <form onSubmit={handleLogin} className="mx-auto max-w-md p-5 sm:p-8">
                <Lock className="mb-8 text-forest" />
                <h3 className="font-serif text-5xl leading-none">
                  Zaloguj się, żeby dodać wpis.
                </h3>
                <label className="mt-8 block text-sm font-bold text-ink/70">
                  Hasło
                  <input
                    value={loginPassword}
                    onChange={(event) => setLoginPassword(event.target.value)}
                    type="password"
                    className="mt-2 w-full rounded-[8px] border border-ink/10 bg-white px-4 py-4 text-base text-ink outline-none transition focus:border-gold"
                    placeholder="Wpisz hasło panelu"
                  />
                </label>
                {loginError && (
                  <p className="mt-3 text-sm font-bold text-ember">{loginError}</p>
                )}
                <button className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-forest px-6 py-4 text-sm font-black text-cream transition hover:-translate-y-1 hover:bg-ink">
                  Zaloguj
                  <ArrowUpRight size={18} />
                </button>
              </form>
            ) : (
              <div>
                <div className="flex flex-col gap-4 border-b border-ink/10 bg-white p-5 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
                    <div className="flex gap-2 rounded-full bg-porcelain p-1">
                    {[
                      ["news", "Aktualności"],
                      ["texts", "Teksty strony"],
                      ["sections", u("sectionVisibility")]
                    ].map(([id, label]) => (
                      <button
                        key={id}
                        type="button"
                        onClick={() => setPanelTab(id)}
                        className={`rounded-full px-4 py-2 text-sm font-black transition ${
                          panelTab === id
                            ? "bg-forest text-cream"
                            : "text-ink/60 hover:text-ink"
                        }`}
                      >
                        {label}
                      </button>
                    ))}
                    </div>
                    <div className="flex items-center gap-2 rounded-full border border-ink/10 bg-porcelain p-1">
                      <span className="pl-3 text-xs font-black uppercase tracking-[0.14em] text-ink/45">
                        Język
                      </span>
                      {languages.map(([id, label]) => (
                        <button
                          key={id}
                          type="button"
                          onClick={() => setLang(id)}
                          className={`rounded-full px-3 py-2 text-xs font-black transition ${
                            lang === id
                              ? "bg-ink text-cream"
                              : "text-ink/55 hover:text-ink"
                          }`}
                        >
                          {label}
                        </button>
                      ))}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setIsLoggedIn(false);
                      window.localStorage.removeItem("zulawscy-admin");
                    }}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/10 px-4 py-2 text-sm font-bold text-ink/70"
                  >
                    <LogOut size={16} />
                    Wyloguj
                  </button>
                </div>
                <div className="flex flex-col gap-3 border-b border-ink/10 bg-porcelain px-5 py-3 md:flex-row md:items-center md:justify-between">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-forest/65 md:max-w-3xl">
                    {cmsStatus}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={handlePublishCurrentToCms}
                      disabled={isPublishingCms}
                      className="inline-flex w-fit items-center justify-center rounded-full bg-forest px-4 py-2 text-xs font-black text-cream transition hover:bg-ink disabled:cursor-wait disabled:opacity-60"
                    >
                      {isPublishingCms ? "Publikuję..." : "Opublikuj do CMS"}
                    </button>
                    <button
                      type="button"
                      onClick={handleRefreshFromCms}
                      disabled={isRefreshingCms}
                      className="inline-flex w-fit items-center justify-center rounded-full border border-ink/10 px-4 py-2 text-xs font-black text-ink/65 transition hover:bg-white hover:text-ink disabled:cursor-wait disabled:opacity-60"
                    >
                      {isRefreshingCms ? "Pobieram..." : "Pokaż CMS"}
                    </button>
                    <button
                      type="button"
                      onClick={handleCmsDiagnostic}
                      disabled={isTestingCms}
                      className="inline-flex w-fit items-center justify-center rounded-full bg-ink px-4 py-2 text-xs font-black text-cream transition hover:bg-forest disabled:cursor-wait disabled:opacity-60"
                    >
                      {isTestingCms ? "Testuję..." : "Test CMS"}
                    </button>
                  </div>
                </div>

                {panelTab === "news" ? (
                  <div className="grid gap-px bg-ink/10 lg:grid-cols-[.9fr_1.1fr]">
                    <form
                      onSubmit={handlePostSubmit}
                      className="bg-porcelain p-5 sm:p-8"
                    >
                      <h3 className="text-2xl font-black">Nowy post</h3>
                      <label className="mt-6 block text-sm font-bold text-ink/70">
                        Tytuł
                        <input
                          value={postDraft.title}
                          onChange={(event) =>
                            setPostDraft((draft) => ({
                              ...draft,
                              title: event.target.value
                            }))
                          }
                          className="mt-2 w-full rounded-[8px] border border-ink/10 bg-white px-4 py-4 text-base text-ink outline-none transition focus:border-gold"
                          placeholder={
                            lang === "pl"
                              ? "Np. Rusza rekrutacja na wyjazd"
                              : lang === "en"
                                ? "E.g. Recruitment for a trip starts"
                                : "Z.B. Bewerbung für eine Reise startet"
                          }
                        />
                      </label>
                      <div className="mt-4 grid gap-4 sm:grid-cols-2">
                        <label className="block text-sm font-bold text-ink/70">
                          Kategoria
                          <input
                            value={postDraft.tag}
                            onChange={(event) =>
                              setPostDraft((draft) => ({
                                ...draft,
                                tag: event.target.value
                              }))
                            }
                            className="mt-2 w-full rounded-[8px] border border-ink/10 bg-white px-4 py-4 text-base text-ink outline-none transition focus:border-gold"
                            placeholder="Erasmus+, Warsztaty..."
                          />
                        </label>
                        <label className="block text-sm font-bold text-ink/70">
                          Data
                          <input
                            value={postDraft.date}
                            onChange={(event) =>
                              setPostDraft((draft) => ({
                                ...draft,
                                date: event.target.value
                              }))
                            }
                            type="date"
                            className="mt-2 w-full rounded-[8px] border border-ink/10 bg-white px-4 py-4 text-base text-ink outline-none transition focus:border-gold"
                          />
                        </label>
                      </div>
                      <label className="mt-4 block text-sm font-bold text-ink/70">
                        Zdjęcie / URL obrazu
                        <input
                          value={postDraft.image}
                          onChange={(event) =>
                            setPostDraft((draft) => ({
                              ...draft,
                              image: event.target.value
                            }))
                          }
                          className="mt-2 w-full rounded-[8px] border border-ink/10 bg-white px-4 py-4 text-base text-ink outline-none transition focus:border-gold"
                          placeholder="https://..."
                        />
                      </label>
                      <div className="mt-4 rounded-[8px] border border-ink/10 bg-white p-4">
                        <label className="block text-sm font-bold text-ink/70">
                          Zdjęcie z komputera
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            disabled={isUploadingImage}
                            className="mt-2 block w-full cursor-pointer rounded-[8px] border border-dashed border-forest/25 bg-porcelain px-4 py-4 text-sm font-bold text-ink/60 file:mr-4 file:rounded-full file:border-0 file:bg-forest file:px-4 file:py-2 file:text-sm file:font-black file:text-cream"
                          />
                        </label>
                        <p className="mt-2 text-xs font-bold leading-5 text-ink/45">
                          {isUploadingImage
                            ? "Przesyłam zdjęcie..."
                            : "Możesz wkleić link albo wybrać plik z pulpitu. Po wyborze zdjęcie zapisze się w tym wpisie."}
                        </p>
                        {postDraft.image && (
                          <div className="mt-4 overflow-hidden rounded-[8px] border border-ink/10">
                            <img
                              src={postDraft.image}
                              alt=""
                              className="h-40 w-full object-cover"
                            />
                            <button
                              type="button"
                              onClick={() =>
                                setPostDraft((draft) => ({ ...draft, image: "" }))
                              }
                              className="flex w-full items-center justify-center gap-2 bg-ink px-4 py-3 text-sm font-black text-cream transition hover:bg-ember"
                            >
                              <Trash2 size={16} />
                              Usuń zdjęcie
                            </button>
                          </div>
                        )}
                      </div>
                      <label className="mt-4 block text-sm font-bold text-ink/70">
                        Link zewnętrzny
                        <input
                          value={postDraft.link}
                          onChange={(event) =>
                            setPostDraft((draft) => ({
                              ...draft,
                              link: event.target.value
                            }))
                          }
                          className="mt-2 w-full rounded-[8px] border border-ink/10 bg-white px-4 py-4 text-base text-ink outline-none transition focus:border-gold"
                          placeholder="https://..."
                        />
                      </label>
                      <label className="mt-4 block text-sm font-bold text-ink/70">
                        Treść
                        <textarea
                          value={postDraft.excerpt}
                          onChange={(event) =>
                            setPostDraft((draft) => ({
                              ...draft,
                              excerpt: event.target.value
                            }))
                          }
                          rows="6"
                          className="mt-2 w-full rounded-[8px] border border-ink/10 bg-white px-4 py-4 text-base text-ink outline-none transition focus:border-gold"
                          placeholder="Krótki opis aktualności widoczny na stronie."
                        />
                      </label>
                      <button className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-4 text-sm font-black text-ink transition hover:-translate-y-1 hover:bg-forest hover:text-cream">
                        <Plus size={18} />
                        Dodaj post
                      </button>
                    </form>

                    <div className="bg-white p-5 sm:p-8">
                      <h3 className="text-2xl font-black">Opublikowane wpisy</h3>
                      <div className="mt-6 grid gap-3">
                        {sortNews(news).map((post) => (
                          <article
                            key={post.id}
                            className="rounded-[8px] border border-ink/10 bg-porcelain p-4"
                          >
                            <div className="flex items-start justify-between gap-4">
                              <div>
                                <p className="text-xs font-black uppercase tracking-[0.16em] text-gold">
                                  {post.tag} · {post.date}
                                </p>
                                <h4 className="mt-2 text-lg font-black">
                                  {post.title}
                                </h4>
                              </div>
                              <button
                                type="button"
                                aria-label={`Usuń ${post.title}`}
                                onClick={() => handleNewsDelete(post.id)}
                                className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-ink text-cream transition hover:bg-ember"
                              >
                                <Trash2 size={17} />
                              </button>
                            </div>
                            <p className="mt-3 text-sm leading-6 text-ink/60">
                              {post.excerpt}
                            </p>
                            {post.link && (
                              <a
                                href={post.link}
                                target="_blank"
                                rel="noreferrer"
                                className="mt-3 inline-flex text-sm font-black text-forest underline decoration-gold underline-offset-4"
                              >
                                Link do wpisu
                              </a>
                            )}
                            {post.image && (
                              <img
                                src={post.image}
                                alt=""
                                loading="lazy"
                                decoding="async"
                                className="mt-4 h-28 w-full rounded-[8px] object-cover"
                              />
                            )}
                          </article>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : panelTab === "sections" ? (
                  <div className="bg-white p-5 sm:p-8">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                      <div>
                        <p className="text-xs font-black uppercase tracking-[0.16em] text-gold">
                          CMS-lite
                        </p>
                        <h3 className="mt-1 text-3xl font-black">
                          {u("sectionVisibility")}
                        </h3>
                      </div>
                      <p className="text-sm font-bold text-ink/50">
                        {u("autoSave")}
                      </p>
                    </div>
                    <div className="mt-6 grid gap-3 md:grid-cols-2">
                      {sectionControls.map(([key, label]) => {
                        const isHidden = Boolean(sectionHidden[key]);

                        return (
                          <button
                            key={key}
                            type="button"
                            onClick={() =>
                              setSectionHidden((current) => ({
                                ...current,
                                [key]: !isHidden
                              }))
                            }
                            className={`flex items-center justify-between rounded-[8px] border p-4 text-left transition ${
                              isHidden
                                ? "border-ink/10 bg-porcelain text-ink/58"
                                : "border-forest bg-forest text-cream"
                            }`}
                          >
                            <span className="font-black">{label}</span>
                            <span
                              className={`rounded-full px-3 py-1 text-xs font-black uppercase tracking-[0.14em] ${
                                isHidden
                                  ? "bg-white text-ink/55"
                                  : "bg-gold text-ink"
                              }`}
                            >
                              {isHidden ? u("hidden") : u("visible")}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  <div className="grid gap-px bg-ink/10 lg:grid-cols-[260px_1fr]">
                    <aside className="bg-porcelain p-4">
                      <div className="grid gap-2">
                        {textEditorGroups.map(([group]) => (
                          <button
                            key={group}
                            type="button"
                            onClick={() => setActiveEditorGroup(group)}
                            className={`rounded-[8px] px-4 py-3 text-left text-sm font-black transition ${
                              activeEditorGroup === group
                                ? "bg-forest text-cream"
                                : "bg-white text-ink/70 hover:text-ink"
                            }`}
                          >
                            {group}
                          </button>
                        ))}
                      </div>
                      <button
                        type="button"
                        onClick={() => setTexts(defaultTextsFor(lang))}
                        className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full border border-ink/10 px-4 py-3 text-sm font-black text-ink/70 transition hover:bg-ink hover:text-cream"
                      >
                        <RotateCcw size={16} />
                        {u("defaultTexts")}
                      </button>
                    </aside>
                    <div className="bg-white p-5 sm:p-8">
                      {visibleEditorGroups.map(([group, keys]) => (
                        <div key={group}>
                          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                            <div>
                              <p className="text-xs font-black uppercase tracking-[0.16em] text-gold">
                                Edycja tekstów
                              </p>
                              <h3 className="mt-1 text-3xl font-black">{group}</h3>
                            </div>
                            <p className="text-sm font-bold text-ink/50">
                              {u("autoSave")}
                            </p>
                          </div>
                          <div className="mt-6 grid gap-4">
                            {keys.map((key) => {
                              const isLong = (texts[key] || "").length > 80;

                              return (
                                <label
                                  key={key}
                                  className="block rounded-[8px] border border-ink/10 bg-porcelain p-4 text-sm font-bold text-ink/70"
                                >
                                  {key}
                                  {isLong ? (
                                    <textarea
                                      value={texts[key] || ""}
                                      onChange={(event) =>
                                        setTexts((current) => ({
                                          ...current,
                                          [key]: event.target.value
                                        }))
                                      }
                                      rows="4"
                                      className="mt-2 w-full rounded-[8px] border border-ink/10 bg-white px-4 py-3 text-base font-medium text-ink outline-none transition focus:border-gold"
                                    />
                                  ) : (
                                    <input
                                      value={texts[key] || ""}
                                      onChange={(event) =>
                                        setTexts((current) => ({
                                          ...current,
                                          [key]: event.target.value
                                        }))
                                      }
                                      className="mt-2 w-full rounded-[8px] border border-ink/10 bg-white px-4 py-3 text-base font-medium text-ink outline-none transition focus:border-gold"
                                    />
                                  )}
                                </label>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </motion.div>
      )}

      {selectedNews && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[70] overflow-y-auto bg-ink/88 p-4 backdrop-blur-2xl"
        >
          <article className="mx-auto my-6 max-w-4xl overflow-hidden rounded-[8px] bg-porcelain shadow-panel">
            {selectedNews.image && (
              <img
                src={selectedNews.image}
                alt=""
                decoding="async"
                className="h-[42vh] min-h-72 w-full object-cover"
              />
            )}
            <div className="p-5 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-gold">
                    {selectedNews.tag} · {selectedNews.date}
                  </p>
                  <h2 className="mt-4 font-serif text-[clamp(2.4rem,7vw,5.5rem)] font-bold leading-[0.95]">
                    {selectedNews.title}
                  </h2>
                </div>
                <button
                  type="button"
                  aria-label={u("close")}
                  onClick={() => setSelectedNews(null)}
                  className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-ink text-cream"
                >
                  <X size={20} />
                </button>
              </div>
              <p className="mt-8 max-w-3xl text-xl leading-9 text-ink/70">
                {selectedNews.excerpt}
              </p>
              {selectedNews.link && (
                <a
                  href={selectedNews.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-forest px-6 py-4 text-sm font-black text-cream transition hover:-translate-y-1 hover:bg-ink"
                >
                  Otwórz link
                  <ArrowUpRight size={18} />
                </a>
              )}
            </div>
          </article>
        </motion.div>
      )}

      <section
        id="top"
        className="relative flex min-h-[92svh] items-end bg-ink text-cream"
      >
        <motion.div
          style={{ transform: `translateY(${heroOffset}px)` }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&w=1600&q=82')] bg-cover bg-center opacity-55"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,18,15,.18),rgba(7,18,15,.55)_40%,rgba(7,18,15,.98))]" />
        <div className="absolute inset-0 bg-grain mix-blend-screen opacity-70" />
        <div className="relative mx-auto w-full max-w-7xl px-4 pb-12 pt-32 sm:px-6 md:pb-16 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-5xl"
          >
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cream/20 bg-cream/10 px-4 py-2 text-sm font-semibold backdrop-blur-xl">
              <Sparkles size={16} className="text-gold" />
              {t("heroEyebrow")}
            </div>
            <h1 className="max-w-5xl font-serif text-[clamp(2.65rem,9vw,7.7rem)] font-extrabold leading-[.86] tracking-normal">
              {t("heroTitle")}
            </h1>
            <div className="mt-8 grid max-w-4xl gap-6 md:grid-cols-[1.2fr_.8fr] md:items-end">
              <p className="text-balance text-xl leading-8 text-cream/82 sm:text-2xl">
                {t("heroLead")}
              </p>
              <div className="flex flex-wrap gap-3 md:justify-end">
                <a
                  href="#inicjatywy"
                  className="inline-flex items-center gap-2 rounded-full bg-cream px-6 py-4 text-sm font-black text-forest transition hover:-translate-y-1"
                >
                  {t("heroPrimary")}
                  <ArrowUpRight size={18} />
                </a>
                <a
                  href="#zapisy"
                  className="inline-flex items-center gap-2 rounded-full border border-cream/25 px-6 py-4 text-sm font-bold text-cream backdrop-blur-xl transition hover:bg-cream hover:text-ink"
                >
                  {t("heroSecondary")}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-forest py-5">
        <div className="mx-auto grid max-w-7xl gap-px overflow-hidden rounded-[8px] border border-cream/10 bg-cream/10 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
          {quickPaths.map(([Icon, title, copy, href]) => (
            <a
              key={title}
              href={href}
              className="group bg-cream/[0.06] p-5 text-cream transition hover:bg-cream hover:text-ink"
            >
              <div className="flex items-start justify-between gap-4">
                <Icon className="text-gold transition group-hover:text-forest" size={22} />
                <ArrowUpRight className="text-cream/35 transition group-hover:text-forest" size={18} />
              </div>
              <h2 className="mt-6 text-lg font-black leading-tight">{title}</h2>
              <p className="mt-2 text-sm font-semibold leading-6 text-cream/64 transition group-hover:text-ink/62">
                {copy}
              </p>
            </a>
          ))}
        </div>
      </section>

      <section id="misja" className="relative bg-porcelain py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[.85fr_1.15fr] lg:px-8">
          <motion.div {...fadeUp()}>
            <p className="eyebrow">{t("missionEyebrow")}</p>
            <h2 className="section-title">
              {t("missionTitle")}
            </h2>
          </motion.div>
          <motion.div {...fadeUp(0.08)} className="grid gap-6">
            <p className="lead">
              {t("missionLead")}
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                [HeartHandshake, t("missionCard1Title"), t("missionCard1Copy")],
                [Globe2, t("missionCard2Title"), t("missionCard2Copy")],
                [BadgeCheck, t("missionCard3Title"), t("missionCard3Copy")]
              ].map(([Icon, title, copy]) => (
                <div
                  key={title}
                  className="rounded-[8px] border border-forest/10 bg-white/70 p-5 shadow-panel"
                >
                  <Icon className="mb-7 text-forest" size={24} />
                  <h3 className="font-bold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-ink/62">{copy}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="aktualnosci" className="bg-cream py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[.82fr_1.18fr] lg:px-8">
          <motion.div {...fadeUp()} className="self-center">
            <p className="eyebrow">{t("newsEyebrow")}</p>
            <h2 className="section-title">
              {t("newsTitle")}
            </h2>
            <p className="lead mt-6">
              {t("newsLead")}
            </p>
            <a
              href="/?news=archive"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-forest/14 bg-white px-5 py-3 text-sm font-black text-forest shadow-sm transition hover:-translate-y-1 hover:border-gold hover:bg-gold hover:text-ink"
            >
              {u("newsArchiveCta")}
              <ArrowUpRight size={18} />
            </a>
          </motion.div>

          <motion.div {...fadeUp(0.08)} className="grid gap-4">
            {currentNews ? (
              <motion.article
                key={currentNews.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="relative min-h-[520px] overflow-hidden rounded-[8px] bg-forest p-6 text-cream shadow-panel sm:p-8"
              >
                {currentNews.image && (
                  <img
                    src={currentNews.image}
                    alt=""
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover opacity-42"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/72 to-ink/20" />
                <div className="absolute inset-0 bg-grain opacity-70" />
                <div className="relative flex min-h-[460px] flex-col justify-end">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-gold px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-ink">
                      {currentNews.tag}
                    </span>
                    <span className="inline-flex items-center gap-2 text-sm font-bold text-cream/65">
                      <CalendarDays size={16} className="text-gold" />
                      {currentNews.date}
                    </span>
                  </div>
                  <h3 className="mt-6 max-w-3xl font-serif text-[clamp(2.25rem,6.4vw,4.8rem)] font-bold leading-[0.92]">
                    {currentNews.title}
                  </h3>
                  <p className="mt-6 max-w-2xl text-xl leading-8 text-cream/72">
                    {currentNews.excerpt}
                  </p>
                  <button
                    type="button"
                    onClick={() => setSelectedNews(currentNews)}
                    className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-black text-ink transition hover:-translate-y-1 hover:bg-cream"
                  >
                    {u("readMore")}
                    <ArrowUpRight size={18} />
                  </button>
                </div>
              </motion.article>
            ) : (
              <div className="rounded-[8px] border border-ink/10 bg-white/70 p-8">
                <p className="text-xl font-bold">Brak aktualności do wyświetlenia.</p>
              </div>
            )}

            <div className="grid gap-3 md:grid-cols-3">
              {latestNews.map((post, index) => (
                <button
                  key={post.id}
                  type="button"
                  onClick={() => setActiveNews(index)}
                  className={`grid grid-cols-[72px_1fr] items-center gap-4 rounded-[8px] border p-3 text-left transition ${
                    index === activeNews % Math.max(latestNews.length, 1)
                      ? "border-forest bg-porcelain shadow-panel"
                      : "border-ink/10 bg-white/70 hover:-translate-y-1"
                  }`}
                >
                  <span className="block h-16 overflow-hidden rounded-[8px] bg-forest/10">
                    {post.image && (
                      <img
                        src={post.image}
                        alt=""
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover"
                      />
                    )}
                  </span>
                  <span>
                    <span className="text-xs font-black uppercase tracking-[0.16em] text-gold">
                      {post.tag}
                    </span>
                    <span className="mt-2 block text-base font-black leading-tight">
                      {post.title}
                    </span>
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {!sectionHidden.courses && (
      <section id="inicjatywy" className="bg-forest py-20 text-cream sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeUp()}
            className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end"
          >
            <div>
              <p className="eyebrow text-gold">{t("coursesEyebrow")}</p>
              <h2 className="section-title">{t("coursesTitle")}</h2>
            </div>
            <p className="text-xl leading-8 text-cream/72 sm:text-2xl sm:leading-9">
              {t("coursesLead")}
            </p>
          </motion.div>
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {courseCards.map(([Icon, title, forWhom, gives, start], index) => (
              <motion.article
                key={title}
                {...fadeUp(index * 0.07)}
                className="group flex min-h-[440px] flex-col rounded-[8px] border border-cream/10 bg-cream/[0.08] p-6 shadow-panel transition hover:-translate-y-1 hover:bg-cream hover:text-ink"
              >
                <Icon className="text-gold" />
                <h3 className="mt-12 font-serif text-4xl font-bold leading-tight">
                  {title}
                </h3>
                <div className="mt-8 grid flex-1 gap-4">
                  {[forWhom, gives, start].map((item) => (
                    <div key={item} className="border-t border-cream/12 pt-4 transition group-hover:border-ink/10">
                      <p className="text-base font-bold leading-7 text-cream/68 transition group-hover:text-ink/68">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
                <a
                  href="#kontakt"
                  className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-4 text-sm font-black text-ink transition hover:-translate-y-1 hover:bg-cream"
                >
                  {t("contactButton")}
                  <ArrowUpRight size={18} />
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
      )}

      {!sectionHidden.enrollment && (
        <section id="zapisy" className="bg-cream py-20 sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[.95fr_1.05fr] lg:px-8">
            <motion.div {...fadeUp()} className="self-center">
              <p className="eyebrow">{t("enrollmentEyebrow")}</p>
              <h2 className="section-title">{t("enrollmentTitle")}</h2>
              <p className="lead mt-6">{t("enrollmentLead")}</p>
              <div className="mt-10 grid gap-px overflow-hidden rounded-[8px] bg-forest/10">
                {startItems.map(([label, value, copy], index) => (
                  <motion.div
                    key={label}
                    {...fadeUp(index * 0.05)}
                    className="grid gap-3 bg-porcelain p-5 sm:grid-cols-[.7fr_.8fr_1.1fr] sm:items-center"
                  >
                    <p className="text-sm font-black uppercase tracking-[0.16em] text-forest/55">
                      {label}
                    </p>
                    <p className="font-serif text-3xl font-bold text-forest">
                      {value}
                    </p>
                    <p className="text-sm font-bold leading-6 text-ink/60">
                      {copy}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.form
              {...fadeUp(0.08)}
              onSubmit={handleSignupSubmit}
              className="rounded-[8px] border border-forest/10 bg-white/78 p-5 shadow-panel sm:p-7"
            >
              <h3 className="font-serif text-4xl font-bold leading-tight">
                {t("signupTitle")}
              </h3>
              <div className="mt-8 grid gap-4">
                <label className="block text-sm font-bold text-ink/70">
                  {t("signupNameLabel")}
                  <input
                    name="name"
                    placeholder={t("signupNamePlaceholder")}
                    className="mt-2 w-full rounded-[8px] border border-ink/10 bg-porcelain px-4 py-4 text-base text-ink outline-none transition focus:border-gold"
                  />
                </label>
                <label className="block text-sm font-bold text-ink/70">
                  {t("signupPhoneLabel")}
                  <input
                    name="contact"
                    placeholder={t("signupPhonePlaceholder")}
                    className="mt-2 w-full rounded-[8px] border border-ink/10 bg-porcelain px-4 py-4 text-base text-ink outline-none transition focus:border-gold"
                  />
                </label>
                <label className="block text-sm font-bold text-ink/70">
                  {t("signupCourseLabel")}
                  <select
                    name="course"
                    defaultValue=""
                    className="mt-2 w-full rounded-[8px] border border-ink/10 bg-porcelain px-4 py-4 text-base text-ink outline-none transition focus:border-gold"
                  >
                    <option value="" disabled>
                      {t("signupCourseLabel")}
                    </option>
                    <option>{t("signupCourseOption1")}</option>
                    <option>{t("signupCourseOption2")}</option>
                    <option>{t("signupCourseOption3")}</option>
                  </select>
                </label>
                <label className="block text-sm font-bold text-ink/70">
                  {t("signupChildLabel")}
                  <input
                    name="child"
                    placeholder={t("signupChildPlaceholder")}
                    className="mt-2 w-full rounded-[8px] border border-ink/10 bg-porcelain px-4 py-4 text-base text-ink outline-none transition focus:border-gold"
                  />
                </label>
                <label className="block text-sm font-bold text-ink/70">
                  {t("signupMessageLabel")}
                  <textarea
                    name="message"
                    placeholder={t("signupMessagePlaceholder")}
                    rows="4"
                    className="mt-2 w-full rounded-[8px] border border-ink/10 bg-porcelain px-4 py-4 text-base text-ink outline-none transition focus:border-gold"
                  />
                </label>
              </div>
              <button
                type="submit"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-forest px-6 py-4 text-sm font-black text-cream transition hover:-translate-y-1 hover:bg-ink"
              >
                {t("signupButton")}
                <ArrowUpRight size={18} />
              </button>
              <p className="mt-4 text-xs font-semibold leading-5 text-ink/45">
                Wysyłając formularz, zgadzasz się na kontakt w sprawie zgłoszenia.
                Informacje o przetwarzaniu danych znajdziesz w sekcji{" "}
                <a
                  href="/?legal=privacy"
                  className="font-black text-forest underline decoration-gold underline-offset-4"
                >
                  {u("termsAndPrivacy")}
                </a>
                .
              </p>
              {signupStatus && (
                <p className="mt-4 text-sm font-bold text-forest">{signupStatus}</p>
              )}
            </motion.form>
          </div>
        </section>
      )}

      {!sectionHidden.parents && (
        <section className="bg-porcelain py-20 sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
            <motion.div {...fadeUp()} className="self-center">
              <p className="eyebrow">{t("parentsEyebrow")}</p>
              <h2 className="section-title">{t("parentsTitle")}</h2>
              <p className="lead mt-6">{t("parentsLead")}</p>
            </motion.div>
            <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1">
              {parentCards.map(([Icon, title, copy], index) => (
                <motion.article
                  key={title}
                  {...fadeUp(index * 0.07)}
                  className="rounded-[8px] border border-forest/10 bg-white/78 p-6 shadow-panel"
                >
                  <div className="flex items-start gap-5">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-forest text-cream">
                      <Icon size={22} />
                    </span>
                    <div>
                      <h3 className="font-serif text-3xl font-bold leading-tight">
                        {title}
                      </h3>
                      <p className="mt-3 font-semibold leading-7 text-ink/62">
                        {copy}
                      </p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      <section id="edukacja" className="bg-cream py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <motion.div {...fadeUp()} className="relative min-h-[440px] overflow-hidden rounded-[8px]">
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=82"
              alt="Młodzi ludzie podczas zajęć edukacyjnych"
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/80 to-transparent" />
            <div className="absolute bottom-0 p-6 text-cream">
              <BookOpen className="mb-4 text-gold" />
              <p className="max-w-md text-2xl font-semibold leading-tight">
                {t("educationImageText")}
              </p>
            </div>
          </motion.div>
          <motion.div {...fadeUp(0.1)} className="self-center">
            <p className="eyebrow">{t("educationEyebrow")}</p>
            <h2 className="max-w-2xl text-balance font-serif text-[clamp(2.15rem,4.8vw,4.3rem)] font-bold leading-[1.02] tracking-normal">
              {t("educationTitle")}
            </h2>
            <div className="mt-8 grid gap-3">
              {educationItems.map((item) => (
                <div key={item} className="flex items-center gap-3 border-b border-ink/10 py-4">
                  <span className="h-2 w-2 rounded-full bg-gold" />
                  <span className="text-lg font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="overflow-hidden bg-ink py-5 text-cream">
        <div className="marquee-track flex whitespace-nowrap text-4xl font-black uppercase tracking-normal text-gold/90 sm:text-6xl">
          {[...Array(2)].map((_, group) => (
            <span key={group} className="flex shrink-0 items-center">
              {[
                "małe miasta",
                "wielkie ambicje",
                "edukacja",
                "Europa",
                "odwaga",
                "wspólnota",
                "młodzi liderzy"
              ].map((item) => (
                <span key={`${group}-${item}`} className="mx-6">
                  {item}
                </span>
              ))}
            </span>
          ))}
        </div>
      </section>

      {!sectionHidden.volunteers && (
      <section className="bg-cream py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.2fr] lg:px-8">
          <motion.div {...fadeUp()}>
            <p className="eyebrow">{t("volunteersEyebrow")}</p>
            <h2 className="section-title">{t("volunteersTitle")}</h2>
          </motion.div>
          <motion.div {...fadeUp(0.08)} className="grid gap-4 md:grid-cols-2">
            {volunteerItems.map((item) => (
              <div key={item} className="rounded-[8px] border border-ink/10 bg-porcelain p-6">
                <UsersRound className="text-forest" />
                <p className="mt-12 text-xl font-bold">{item}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
      )}

      <section className="bg-forest py-20 text-cream sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp()} className="max-w-4xl">
            <p className="eyebrow text-gold">{t("joinEyebrow")}</p>
            <h2 className="section-title">{t("joinTitle")}</h2>
          </motion.div>
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {joinPaths.map(([Icon, title, copy], index) => (
              <motion.a
                key={title}
                {...fadeUp(index * 0.07)}
                href="#kontakt"
                className="group rounded-[8px] border border-cream/10 bg-cream/[0.06] p-6 transition hover:-translate-y-2 hover:bg-cream hover:text-ink"
              >
                <div className="flex items-center justify-between">
                  <Icon className="text-gold transition group-hover:text-forest" />
                  <ArrowUpRight className="text-cream/40 transition group-hover:text-forest" />
                </div>
                <h3 className="mt-20 font-serif text-5xl">{title}</h3>
                <p className="mt-5 leading-7 text-cream/68 transition group-hover:text-ink/65">
                  {copy}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {!sectionHidden.partners && (
      <section className="bg-porcelain py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeUp()}
            className="mx-auto max-w-3xl text-center"
          >
            <div>
              <p className="eyebrow">{t("partnersEyebrow")}</p>
              <h2 className="font-serif text-[clamp(2.1rem,6.5vw,6rem)] font-extrabold leading-[0.88] tracking-normal text-forest">
                {t("partnersEyebrow")}
              </h2>
            </div>
          </motion.div>
          <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-[8px] bg-forest/10 md:grid-cols-3">
            {partners.map((partner) => (
              <div
                key={partner}
                className="bg-white/70 p-6 text-center font-bold text-forest"
              >
                {partner}
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <a
              href="#pakiety-partnerskie"
              className="inline-flex items-center gap-2 rounded-full bg-forest px-6 py-4 text-sm font-black text-cream shadow-glow transition hover:-translate-y-1 hover:bg-ink"
            >
              {u("partnerships")}
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </section>
      )}

      {!sectionHidden.packages && (
      <section
        id="pakiety-partnerskie"
        className="relative bg-cream py-20 sm:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeUp()}
            className="grid gap-8 lg:grid-cols-[.85fr_1.15fr] lg:items-end"
          >
            <div>
              <p className="eyebrow">{t("packagesEyebrow")}</p>
              <h2 className="section-title">{t("packagesTitle")}</h2>
            </div>
            <p className="lead">{t("packagesLead")}</p>
          </motion.div>

          <motion.article
            {...fadeUp(0.08)}
            className="mt-12 overflow-hidden rounded-[8px] border border-forest/10 bg-white/78 shadow-panel"
          >
            <div className="grid gap-px bg-forest/10 lg:grid-cols-[1fr_.9fr]">
              <div className="bg-forest p-6 text-cream sm:p-8">
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-full bg-gold px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-ink">
                    {u("partnership")}
                  </span>
                  <Sparkles className="text-gold" />
                </div>
                <h3 className="mt-12 max-w-2xl font-serif text-[clamp(2.4rem,6vw,5.5rem)] font-bold leading-[0.92]">
                  {strategicPackage.name}
                </h3>
                <p className="mt-6 max-w-xl text-lg font-semibold leading-8 text-cream/70">
                  {strategicPackage.forWhom}
                </p>
              </div>
              <div className="bg-porcelain p-6 sm:p-8">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-gold">
                  {u("support")}
                </p>
                <p className="mt-4 text-pretty font-serif text-[clamp(2rem,4.4vw,4.2rem)] font-bold leading-[0.96] text-forest">
                  {strategicPackage.price}
                </p>
                <div className="mt-8 grid gap-3 border-t border-ink/10 pt-6">
                  {strategicPackage.items.map((item) => (
                    <div key={item} className="flex gap-3">
                      <BadgeCheck
                        size={19}
                        className="mt-0.5 shrink-0 text-gold"
                      />
                      <p className="text-sm font-semibold leading-6 text-ink/68">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
                <a
                  href="#kontakt"
                  className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-5 py-4 text-sm font-black text-cream transition hover:-translate-y-1 hover:bg-forest sm:w-auto"
                >
                  {u("letsTalk")}
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </div>
          </motion.article>
        </div>
      </section>
      )}

      <section className="bg-porcelain py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
          <motion.div {...fadeUp()}>
            <p className="eyebrow">{t("faqEyebrow")}</p>
            <h2 className="section-title">{t("faqTitle")}</h2>
          </motion.div>
          <div className="grid gap-3">
            {faqItems.map(([question, answer], index) => (
              <motion.article
                key={question}
                {...fadeUp(index * 0.05)}
                className="rounded-[8px] border border-forest/10 bg-white/75 p-5 shadow-panel"
              >
                <h3 className="text-lg font-black leading-tight text-forest">
                  {question}
                </h3>
                <p className="mt-3 text-sm font-semibold leading-7 text-ink/62">
                  {answer}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="kontakt" className="relative bg-ink py-20 text-cream sm:py-28">
        <div className="absolute inset-0 bg-grain opacity-60" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_.9fr] lg:px-8">
          <motion.div {...fadeUp()}>
            <p className="eyebrow text-gold">{t("contactEyebrow")}</p>
            <h2 className="section-title">{t("contactTitle")}</h2>
            <div className="mt-8 grid gap-4 text-cream/75">
              <a className="flex items-center gap-3 text-lg" href={`mailto:${t("contactEmail")}`}>
                <Mail className="text-gold" />
                {t("contactEmail")}
              </a>
              <a
                className="flex items-center gap-3 text-lg transition hover:text-gold"
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle className="text-gold" />
                WhatsApp: +48 502 617 479
              </a>
              <p className="flex items-center gap-3 text-lg">
                <MapPin className="text-gold" />
                {t("contactPlace")}
              </p>
            </div>
          </motion.div>
          <motion.form
            {...fadeUp(0.08)}
            onSubmit={handleContactSubmit}
            className="rounded-[8px] border border-cream/10 bg-cream/[0.06] p-5 backdrop-blur-xl"
          >
            <label className="field">
              {t("contactNameLabel")}
              <input name="name" placeholder={t("contactNamePlaceholder")} />
            </label>
            <label className="field">
              {t("contactEmailLabel")}
              <input
                name="email"
                placeholder={t("contactEmailPlaceholder")}
                type="email"
              />
            </label>
            <label className="field">
              {t("contactPurposeLabel")}
              <select name="purpose" defaultValue="">
                <option value="" disabled>
                  {t("contactPurposeLabel")}
                </option>
                <option>{t("contactPurposeOption1")}</option>
                <option>{t("contactPurposeOption2")}</option>
                <option>{t("contactPurposeOption3")}</option>
                <option>{t("contactPurposeOption4")}</option>
              </select>
            </label>
            <label className="field">
              {t("contactMessageLabel")}
              <textarea
                name="message"
                placeholder={t("contactMessagePlaceholder")}
                rows="5"
              />
            </label>
            <button
              type="submit"
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-4 text-sm font-black text-ink transition hover:-translate-y-1 hover:bg-cream"
            >
              {t("contactButton")}
              <ArrowUpRight size={18} />
            </button>
            <p className="mt-4 text-xs font-semibold leading-5 text-cream/45">
              Wysyłając formularz, zgadzasz się na kontakt w sprawie wiadomości.
              Informacje o przetwarzaniu danych znajdziesz w sekcji{" "}
              <a
                href="/?legal=privacy"
                className="font-black text-gold underline underline-offset-4"
              >
                {u("termsAndPrivacy")}
              </a>
              .
            </p>
            {contactStatus && (
              <p className="mt-4 text-sm font-bold text-gold">{contactStatus}</p>
            )}
          </motion.form>
        </div>
      </section>

      <footer className="bg-ink text-cream">
        <div className="mx-auto grid max-w-7xl gap-10 border-t border-cream/10 px-4 pb-32 pt-10 sm:px-6 md:pb-10 lg:grid-cols-[1fr_1.2fr_.8fr] lg:px-8">
          <div>
            <img
              src={logoMotto}
              alt="Logo Fundacji Żuławscy Nobliści"
              loading="lazy"
              decoding="async"
              className="max-w-56 rounded-[8px] bg-cream p-3"
            />
            <p className="mt-5 max-w-xs text-sm leading-6 text-cream/60">
              {t("heroTitle")} {t("missionLead")}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {visibleNavItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-sm font-black text-cream/60 transition hover:text-gold"
              >
                {item.label[lang]}
              </a>
            ))}
            <a
              href="/?legal=privacy"
              className="text-sm font-black text-cream/60 transition hover:text-gold"
            >
              {u("termsAndPrivacy")}
            </a>
          </div>
          <div className="lg:text-right">
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-black text-ink transition hover:bg-cream"
              >
                <MessageCircle size={16} />
                {u("writeToUs")}
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61589819647247"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook Fundacji Żuławscy Nobliści"
                className="grid h-12 w-12 place-items-center rounded-full border border-cream/15 bg-cream/[0.06] text-lg font-black text-cream transition hover:-translate-y-1 hover:border-gold hover:bg-gold hover:text-ink"
              >
                f
              </a>
              <a
                href="https://www.instagram.com/zulawscy_noblisci/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram Fundacji Żuławscy Nobliści"
                className="grid h-12 w-12 place-items-center rounded-full border border-cream/15 bg-cream/[0.06] text-cream transition hover:-translate-y-1 hover:border-gold hover:bg-gold hover:text-ink"
              >
                <InstagramIcon size={19} />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Napisz na WhatsApp"
                className="grid h-12 w-12 place-items-center rounded-full border border-cream/15 bg-cream/[0.06] text-cream transition hover:-translate-y-1 hover:border-[#25D366] hover:bg-[#25D366] hover:text-ink"
              >
                <MessageCircle size={19} />
              </a>
            </div>
            <p className="mt-5 text-sm leading-6 text-cream/50">
              {t("contactEmail")}
              <br />
              WhatsApp: +48 502 617 479
              <br />
              {t("contactPlace")}
            </p>
          </div>
        </div>
        <div className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-cream/10 px-4 py-5 text-xs font-semibold text-cream/42 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© 2026 {t("brand")}</p>
          <p>
            {lang === "pl"
              ? "Dane formalne fundacji, KRS/NIP/REGON do uzupełnienia po rejestracji."
              : lang === "en"
                ? "Foundation registration details to be completed after registration."
                : "Registrierungsdaten der Stiftung nach der Registrierung ergänzen."}
          </p>
        </div>
      </footer>

      {!isPanelOpen && !open && (
        <div className="fixed inset-x-3 bottom-3 z-40 md:hidden">
          <div className="grid grid-cols-4 gap-2 rounded-[8px] border border-cream/20 bg-ink/88 p-2 shadow-panel backdrop-blur-2xl">
            {mobileDockItems.map(([Icon, label, href, className, external]) => (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                className={`flex min-h-12 items-center justify-center gap-2 rounded-[8px] px-2 text-xs font-black transition active:scale-[0.98] ${className}`}
              >
                <Icon size={16} />
                <span>{label}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}

createRoot(document.getElementById("root")).render(
  <>
    <App />
    <Analytics />
  </>
);
