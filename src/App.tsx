/**
 * ASSAM TOURISM WEBSITE
 * Premium Cinematic Tourism Experience
 * Built with React + TypeScript + Tailwind/Custom CSS
 * 
 * Images sourced from Pexels (royalty-free)
 * Icons: Font Awesome 6
 * Fonts: Playfair Display, Inter, Cinzel (Google Fonts)
 */

import { useEffect, useRef, useState } from 'react';
import './assam.css';

/* ============================================================
   DATA CONSTANTS
   ============================================================ */

const HERO_SLIDES = [
  {
    img: 'https://www.shutterstock.com/image-photo/aerial-perspective-showcases-bhomoraguri-bridge-600nw-2678077931.jpg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600',
    alt: 'Aerial view of Assam landscape',
  },
  {
    img: 'https://images.pexels.com/photos/37623572/pexels-photo-37623572.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600',
    alt: 'Indian Rhinoceros at Kaziranga National Park',
  },
  {
    img: 'https://images.pexels.com/photos/19000373/pexels-photo-19000373.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600',
    alt: 'Lush Assam tea plantation',
  },
  {
    img: 'https://images.pexels.com/photos/32313269/pexels-photo-32313269.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600',
    alt: 'Misty mountain tea gardens',
  },
];

const TEMPLES = [
  {
    id: 1,
    name: 'Kamakhya Temple',
    location: 'Nilachal Hill, Guwahati',
    importance: 'Shakti Peetha',
    img: '/images/kamakhya-temple-dispur-assam-2-attr-hero.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=900',
    desc: 'One of the 51 Shakti Peethas, Kamakhya Temple is dedicated to Goddess Kamakhya. Perched atop Nilachal Hill, it is a major pilgrimage site and is famous for the annual Ambubachi Mela which draws thousands of devotees and tantric practitioners.',
    fullDesc: 'Kamakhya Temple is one of the oldest of the 51 Shakti Peethas and is dedicated to the Mother Goddess Kamakhya. Located on the Nilachal Hill in western Guwahati, this temple is a major pilgrimage destination for Hindus especially Shaivas, Shaktas and Tantrics. The temple is famous for the annual Ambubachi Mela, a fertility festival that attracts lakhs of devotees from across India and abroad. The sanctum sanctorum houses a natural cleft in the rock symbolizing the yoni of the goddess, which is worshipped. The present temple was rebuilt in the 17th century after it was demolished.',
    built: '8th–17th Century',
    deity: 'Goddess Kamakhya',
  },
  {
    id: 2,
    name: 'Umananda Temple',
    location: 'Peacock Island, Brahmaputra River, Guwahati',
    importance: 'River Island Shiva Temple',
    img: '/images/Umananda-temple-assam.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=900',
    desc: 'Located on Peacock Island (Umananda Island) in the middle of the mighty Brahmaputra River, this Lord Shiva temple is one of the smallest river islands in the world. A unique boat journey leads to this divine abode of Lord Shiva.',
    fullDesc: 'Umananda Temple is situated on Umananda Island, also known as Peacock Island, in the middle of the Brahmaputra River in Guwahati. It is dedicated to Lord Shiva. According to Hindu legend, Lord Shiva gave this island to Goddess Parvati (Uma) as a gift of love. The temple was built in 1594 by Ahom King Gadadhar Singha. It was destroyed by an earthquake in 1897 and later rebuilt. Devotees reach the island via a short ferry ride from Guwahati, making it a scenic spiritual journey.',
    built: '1594 AD (rebuilt)',
    deity: 'Lord Shiva',
  },
  {
    id: 3,
    name: 'Navagraha Temple',
    location: 'Chitrachal Hill, Guwahati',
    importance: 'Nine Planetary Gods',
    img: 'https://temple.yatradham.org/public/Product/temple/temple_oUQTLFLy_202408221229010.jpg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=900',
    desc: 'The Navagraha Temple, dedicated to the nine celestial bodies (planets), sits atop Chitrachal Hill. It is considered one of the important astrological centers of India and attracts devotees seeking blessings from the nine planetary deities.',
    fullDesc: 'The Navagraha Temple, meaning "Nine Planets Temple", is situated on top of Chitrachal Hill in Guwahati. The temple is dedicated to the nine celestial deities of Hindu astronomy — Surya, Chandra, Mangala, Budha, Brihaspati, Shukra, Shani, Rahu, and Ketu. The nine Shivalingas in the sanctum represent these planetary gods. The temple was originally built by the Ahom King Rajeswar Singha in the 18th century. It serves as a significant astrological and spiritual center, attracting devotees who believe prayers here neutralize malefic planetary influences in their horoscopes.',
    built: '18th Century',
    deity: 'Nine Celestial Bodies',
  },
  {
    id: 4,
    name: 'Basistha Temple',
    location: 'South Guwahati, Assam',
    importance: 'Ancient Sage Ashram',
    img: 'https://res.cloudinary.com/kmadmin/image/upload/v1720523141/kiomoi/basistha_temple_7808.jpg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=900',
    desc: 'The Basistha Temple, dedicated to the sage Basistha, lies in a serene forest setting near three small streams. The tranquil atmosphere, surrounded by lush greenery, makes it a popular pilgrimage and nature retreat for visitors.',
    fullDesc: 'The Basistha Ashram Temple is an ancient temple complex dedicated to the sage Vasishtha, one of the Saptarishis (seven great sages) of Hindu tradition. Located in South Guwahati amid dense green forest near the confluence of three sacred streams called Sandhya, Lalita and Kanta, the temple complex provides a remarkably peaceful retreat. The streams and the forest setting create a mystical ambiance. The complex includes shrines of Shiva, Parvati and Ganesh. The area is renowned for its natural beauty and spiritual energy.',
    built: 'Ancient — Exact date unknown',
    deity: 'Sage Vasishtha / Lord Shiva',
  },
  {
    id: 5,
    name: 'Hayagriva Madhava Temple',
    location: 'Hajo, Kamrup District',
    importance: 'Vishnu & Buddhist Confluence',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/The_steps_leading_to_Hayagriva_Madhav_temple.jpg/3840px-The_steps_leading_to_Hayagriva_Madhav_temple.jpg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=900',
    desc: 'The Hayagriva Madhava Temple in Hajo is an important pilgrimage site for Hindus and Buddhists alike. Dedicated to Lord Vishnu in his Hayagriva form, some Buddhists believe the temple enshrines relics of the Buddha.',
    fullDesc: 'The Hayagriva Madhava Temple at Hajo is one of the most remarkable examples of religious confluence in Assam. Dedicated to Lord Vishnu in his horse-headed form (Hayagriva), this temple is revered by both Vaishnavas and Buddhists. Buddhists believe that the site also commemorates the spot where Buddha attained Nirvana or where a relic of the Buddha was kept. The hilltop temple offers panoramic views of the surrounding landscape. The temple was reconstructed by Koch King Raghudev in the 16th century. Its serene hilltop setting and rare religious significance make it uniquely fascinating.',
    built: '16th Century (reconstructed)',
    deity: 'Lord Vishnu (Hayagriva)',
  },
  {
    id: 6,
    name: 'Sukreswar Temple',
    location: 'Itachali Hill, Guwahati',
    importance: 'Riverside Shiva Shrine',
    img: 'https://www.trawell.in/admin/images/upload/470029215Guwahati_Sukreswar_Temple_Main.jpg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=900',
    desc: 'Perched on Itachali Hill along the southern bank of the Brahmaputra River, Sukreswar Temple is known for its stunning river views. The temple houses a large Shivalinga and a tortoise idol, and it attracts both pilgrims and tourists.',
    fullDesc: 'Sukreswar Temple, perched on the Itachali Hill on the south bank of the Brahmaputra River, is dedicated to Lord Shiva. It was built by Ahom King Pramatta Singha in 1744 AD. The temple enshrines a large Shivalinga and is known for housing a tortoise (Kurma) idol, representing one of the avatars of Lord Vishnu. The views of the Brahmaputra River from the temple premises are spectacular, especially during sunrise and sunset. The temple is also noted for its annual Shivaratri celebrations which draw large numbers of devotees.',
    built: '1744 AD',
    deity: 'Lord Shiva',
  },
  {
    id: 7,
    name: 'Mahabhairab Temple',
    location: 'Tezpur, Assam',
    importance: 'Tantric Power Shrine',
    img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/89/90/b9/photo3jpg.jpg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=900',
    desc: 'The Mahabhairab Temple in Tezpur is dedicated to a fierce form of Lord Shiva — Bhairava. It is one of the most powerful Tantric shrines in Assam, attracting devotees who seek blessings for protection and spiritual strength.',
    fullDesc: 'The Mahabhairab Temple in Tezpur is a significant Shaivite shrine dedicated to Mahabhairav, the fierce and powerful form of Lord Shiva. Tezpur, whose ancient name was Haruppesvara and later Sonitpur, has deep mythological connections to the story of Aniruddha and Usha. The temple is considered one of the important Tantric centers in Assam. The deity here is believed to be extremely powerful and protective. Animal sacrifice was traditionally performed here during festivals, reflecting the Tantric traditions of the region. The temple draws numerous devotees from across the Brahmaputra Valley.',
    built: 'Ancient — Exact date unknown',
    deity: 'Mahabhairava (Lord Shiva)',
  },
  {
    id: 8,
    name: 'Dhekiakhowa Bornamghar',
    location: 'Dhekiakhowa, Jorhat District',
    importance: 'Neo-Vaishnavite Sattra',
    img: 'https://hblimg.mmtcdn.com/content/hubble/img/jorhatdest/images/mmt/activities/m_Dhekiakhowa_Bornamghar_Jorhat_1_l_480_640.jpg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=900',
    desc: 'The Dhekiakhowa Bornamghar is one of the oldest and most sacred Vaishnavite Sattras in Assam, established by the great saint-reformer Srimanta Sankardeva in the 15th century. Its eternal flame — said to burn uninterrupted for over 500 years — is a marvel.',
    fullDesc: "Dhekiakhowa Bornamghar is one of the oldest and most sacred Vaishnavite prayer halls (Namghars) in Assam. Established by the great saint-reformer Srimanta Sankardeva in the 15th century, it is believed that an eternal flame in this Namghar has been burning continuously for over 500 years without any interruption. This is considered a miracle and a testimony to the devotion of its caretakers. The site is a center of the Ekasarana Dharma (Neo-Vaishnavism) movement that Sankardeva propagated. The Sattra continues to be an active religious and cultural center preserving Assamese Vaishnavite traditions.",
    built: '15th Century',
    deity: 'Lord Vishnu / Krishna',
  },
  {
    id: 9,
    name: 'Tamreswari Temple',
    location: 'Sadiya, Tinsukia District',
    importance: 'Ancient Shakti Shrine',
    img: 'https://images.pexels.com/photos/31739736/pexels-photo-31739736.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=900',
    desc: 'The Tamreswari Temple in Sadiya is an ancient and significant Shakti shrine in upper Assam. Historically the seat of the Chutiya Kingdom, this powerful goddess temple has been a revered place of worship for centuries.',
    fullDesc: "Tamreswari Temple, also known as Dikkaravasini Temple, is located in Sadiya at the confluence of the Lohit, Dibang and Brahmaputra rivers — a sacred trijunction. It is one of the most ancient Shakti shrines in Assam and was historically the presiding deity of the Chutiya Kingdom. The goddess Tamreswari (meaning 'copper-hued goddess') is a form of Durga or Kali. The temple's location at the confluence of three great rivers adds to its sacred significance. Sadiya was an important historical town in upper Assam, and the temple remains a major pilgrimage site for people from the tea-growing districts.",
    built: 'Ancient',
    deity: 'Goddess Tamreswari (Durga)',
  },
  {
    id: 10,
    name: 'Sivasagar Shiva Dol',
    location: 'Sivasagar, Assam',
    importance: 'Tallest Shiva Temple in Asia (historic claim)',
    img: 'https://upload.wikimedia.org/wikipedia/commons/7/79/Siva_Dol.JPG?auto=compress&cs=tinysrgb&fit=crop&h=600&w=900',
    desc: 'The Shiva Dol in Sivasagar is one of the tallest temple towers in India, standing at about 54 meters. Built by Ahom Queen Ambika in the 18th century, this magnificent temple complex on the banks of the Sivasagar tank is an architectural masterpiece.',
    fullDesc: "Sivasagar Shiva Dol, also known as Sivadol, is a magnificent temple complex built in 1734 AD by Ahom Queen Ambika, wife of King Siva Singha. The main temple tower stands approximately 54 meters (about 180 feet) tall, making it one of the tallest Shiva temple towers in India. The temple complex consists of three temples — the Sivadol (dedicated to Shiva), Vishnudol (dedicated to Vishnu) and Devidol (dedicated to Devi). Located on the banks of the Joysagar Tank (the largest man-made tank in Asia at the time), the entire complex is a stunning example of Ahom architecture and royal patronage. It is one of Assam's most visited archaeological and religious monuments.",
    built: '1734 AD',
    deity: 'Lord Shiva',
  },
];

const PLACES = [
  {
    id: 1,
    name: 'Kaziranga National Park',
    tag: 'UNESCO World Heritage',
    desc: 'Home to two-thirds of the world\'s one-horned rhinoceroses, Kaziranga is a UNESCO World Heritage Site spanning over 430 sq km of forests, grasslands and wetlands.',
    img: 'https://images.pexels.com/photos/37623729/pexels-photo-37623729.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
    large: true,
  },
  {
    id: 2,
    name: 'Majuli Island',
    tag: 'World\'s Largest River Island',
    desc: 'The world\'s largest freshwater river island on the Brahmaputra, home to ancient Vaishnavite Sattras and the Mishing tribe.',
    img: 'https://images.pexels.com/photos/6872284/pexels-photo-6872284.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=900',
    large: false,
  },
  {
    id: 3,
    name: 'Haflong — Assam\'s Hill Station',
    tag: 'Switzerland of the East',
    desc: 'The only hill station of Assam, Haflong is nestled in the North Cachar Hills, offering breathtaking views, serene lakes and lush greenery.',
    img: 'https://images.pexels.com/photos/35151732/pexels-photo-35151732.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=900',
    large: false,
  },
  {
    id: 4,
    name: 'Manas National Park',
    tag: 'UNESCO Biosphere Reserve',
    desc: 'A UNESCO Natural World Heritage Site, Tiger Reserve and Biosphere Reserve, Manas hosts Bengal tigers, Asian elephants, pygmy hogs and golden langurs.',
    img: 'https://images.pexels.com/photos/34050535/pexels-photo-34050535.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=900',
    large: false,
  },
  {
    id: 5,
    name: 'Sivasagar — Ahom Kingdom',
    tag: 'Historical Heritage City',
    desc: 'The ancient capital of the Ahom Kingdom, Sivasagar is dotted with magnificent temples, royal tanks, and ruins of the great Ahom civilization.',
    img: '/images/Rang-Ghar-in-Sibsagar-Assam.jpg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=900',
    large: false,
  },
  {
    id: 6,
    name: 'Jorhat Tea Gardens',
    tag: 'Tea Capital of the World',
    desc: 'Jorhat, known as the tea capital of the world, offers immersive tea garden experiences, heritage bungalows and the flavor of colonial Assam.',
    img: 'https://images.pexels.com/photos/32262495/pexels-photo-32262495.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=900',
    large: false,
  },
  {
    id: 7,
    name: 'Pobitora Wildlife Sanctuary',
    tag: 'Highest Rhino Density',
    desc: 'Pobitora has the highest concentration of one-horned rhinoceroses in the world. Just 48 km from Guwahati, it is ideal for a day wildlife safari.',
    img: 'https://images.pexels.com/photos/8057396/pexels-photo-8057396.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=900',
    large: false,
  },
];

const CULTURE_TABS = [
  {
    id: 'bihu',
    label: 'Bihu Festival',
    icon: 'fa-solid fa-music',
    img: 'https://jungleideas.wordpress.com/wp-content/uploads/2015/11/bihu.jpg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=900',
    title: 'Bihu — The Soul of Assam',
    desc: 'Bihu is the most celebrated and cherished festival of Assam, celebrated three times a year — Rongali Bihu (spring), Kongali Bihu (autumn) and Bhogali Bihu (harvest). The Rongali Bihu in April is the most vibrant, marked by energetic folk dances, music, and community feasts.',
    desc2: 'The Bihu dance, performed by young men and women in colorful traditional attire, is a UNESCO-recognized intangible cultural heritage of humanity. The dance is accompanied by traditional instruments like the dhol (drum), pepa (horn flute), gogona, and toka.',
    highlights: [
      { icon: 'fa-solid fa-drum', text: 'Traditional Dhol, Pepa & Gogona music' },
      { icon: 'fa-solid fa-person-dress', text: 'Colorful Mekhela Chador (traditional dress)' },
      { icon: 'fa-solid fa-calendar', text: 'Three Bihus — April, October & January' },
      { icon: 'fa-solid fa-star', text: 'UNESCO Intangible Cultural Heritage' },
    ],
  },
  {
    id: 'food',
    label: 'Assamese Cuisine',
    icon: 'fa-solid fa-utensils',
    img: '/images/assamese-doi-sira.jpg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=900',
    title: 'Flavors of the Brahmaputra Valley',
    desc: 'Assamese cuisine is simple, wholesome and uniquely flavorful, with rice as the staple food. The cuisine makes extensive use of fresh ingredients, mustard oil, bamboo shoots, herbs and a wide variety of fish from the Brahmaputra.',
    desc2: 'Iconic Assamese dishes include Masor Tenga (tangy fish curry), Khar (an alkaline dish made with raw papaya), Duck Meat Curry, Pitha (rice cakes), and the beloved Assam Tea. The cuisine reflects the biodiversity of the region and its deep connection to nature.',
    highlights: [
      { icon: 'fa-solid fa-fish', text: 'Masor Tenga — Iconic tangy fish curry' },
      { icon: 'fa-solid fa-leaf', text: 'Khar — Unique alkaline dish' },
      { icon: 'fa-solid fa-mug-hot', text: 'World-famous Assam Tea' },
      { icon: 'fa-solid fa-seedling', text: 'Bamboo shoot delicacies' },
    ],
  },
  {
    id: 'dress',
    label: 'Traditional Dress',
    icon: 'fa-solid fa-shirt',
    img: '/images/assamese-traditional-dress.jpg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=900',
    title: 'The Elegance of Assamese Weaving',
    desc: 'The traditional dress of Assamese women is the Mekhela Chador — a two-piece draped garment woven with exquisite patterns in silk. Assam is famous for its Muga silk (the only natural golden silk in the world), Pat silk, and Eri silk.',
    desc2: 'Assamese men traditionally wear the Dhoti and Gamosa — the Gamosa being a white cotton towel with red border that is the most recognizable symbol of Assamese identity and pride. The handloom industry of Assam is one of the largest in India, with unique weaving traditions in every district.',
    highlights: [
      { icon: 'fa-solid fa-star', text: 'Muga — World\'s only natural golden silk' },
      { icon: 'fa-solid fa-gem', text: 'Mekhela Chador — Traditional women\'s dress' },
      { icon: 'fa-solid fa-hands', text: 'Handloom weaving heritage' },
      { icon: 'fa-solid fa-heart', text: 'Gamosa — Symbol of Assamese identity' },
    ],
  },
  {
    id: 'wildlife',
    label: 'Wildlife & Nature',
    icon: 'fa-solid fa-paw',
    img: '/images/assam-rhino-image.jpg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=900',
    title: 'A Paradise for Wildlife Lovers',
    desc: 'Assam is endowed with extraordinary biodiversity. The state has 5 national parks and 20 wildlife sanctuaries. The mighty Brahmaputra river and its wetlands create unique ecosystems supporting rare species found nowhere else on Earth.',
    desc2: 'From the one-horned rhinoceros to the Bengal tiger, Asian elephant, golden langur, pygmy hog, Gangetic river dolphin and the hoolock gibbon — Assam\'s wildlife is spectacular. Kaziranga, Manas, Orang and Nameri national parks are internationally acclaimed destinations.',
    highlights: [
      { icon: 'fa-solid fa-paw', text: 'One-Horned Rhinoceros — Pride of Assam' },
      { icon: 'fa-solid fa-crown', text: 'Bengal Tigers in Manas & Orang' },
      { icon: 'fa-solid fa-water', text: 'Gangetic Dolphin in Brahmaputra' },
      { icon: 'fa-solid fa-tree', text: '5 National Parks & 20 Sanctuaries' },
    ],
  },
];

const GALLERY_IMAGES = [
  { img: 'https://images.pexels.com/photos/30288629/pexels-photo-30288629.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=560', alt: 'Assam landscape' },
  { img: 'https://images.pexels.com/photos/37623572/pexels-photo-37623572.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=560', alt: 'Rhinoceros Kaziranga' },
  { img: 'https://images.pexels.com/photos/19000373/pexels-photo-19000373.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=560', alt: 'Tea plantation' },
  { img: 'https://images.pexels.com/photos/29345540/pexels-photo-29345540.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=560', alt: 'Traditional dance' },
  { img: 'https://images.pexels.com/photos/32262495/pexels-photo-32262495.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=560', alt: 'Tea gardens rolling hills' },
  { img: 'https://www.pugdundeesafaris.com/blog/wp-content/uploads/2025/07/zones-in-kaziranga-national-park-scaled.webp?auto=compress&cs=tinysrgb&fit=crop&h=400&w=560', alt: 'Elephant in Kaziranga' },
  { img: 'https://images.pexels.com/photos/6872284/pexels-photo-6872284.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=560', alt: 'River island aerial' },
  { img: '/images/assamese-doi-sira.jpg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=560', alt: 'Assamese Cuisine' },
];

/* ============================================================
   LOADER COMPONENT
   ============================================================ */
function Loader({ visible }: { visible: boolean }) {
  return (
    <div className={`loader-screen ${!visible ? 'hidden' : ''}`}>
      <div className="loader-logo">ASSAM <span>TOURISM</span></div>
      <div className="loader-bar-track">
        <div className="loader-bar" />
      </div>
      <div className="loader-text">Discovering the Land of the Red River...</div>
    </div>
  );
}

/* ============================================================
   CUSTOM CURSOR
   ============================================================ */
function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const outline = outlineRef.current;
    if (!dot || !outline) return;

    let mouseX = 0, mouseY = 0;
    let outlineX = 0, outlineY = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = mouseX + 'px';
      dot.style.top = mouseY + 'px';
    };

    const lerp = () => {
      outlineX += (mouseX - outlineX) * 0.15;
      outlineY += (mouseY - outlineY) * 0.15;
      outline.style.left = outlineX + 'px';
      outline.style.top = outlineY + 'px';
      requestAnimationFrame(lerp);
    };

    const onEnter = () => {
      dot.classList.add('cursor-hover');
      outline.classList.add('cursor-hover');
    };

    const onLeave = () => {
      dot.classList.remove('cursor-hover');
      outline.classList.remove('cursor-hover');
    };

    document.addEventListener('mousemove', onMove);
    document.querySelectorAll('a, button, .temple-card, .place-card, .culture-tab, .social-link').forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    const animId = requestAnimationFrame(lerp);

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={outlineRef} className="cursor-outline" />
    </>
  );
}

/* ============================================================
   NAVBAR COMPONENT
   ============================================================ */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = ['About', 'Temples', 'Places', 'Culture', 'Gallery', 'Contact'];

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-logo">
          <div className="nav-logo-icon">🏛️</div>
          <div className="nav-logo-text">
            <span className="brand">Assam Tourism</span>
            <span className="tagline">Land of the Red River</span>
          </div>
        </div>

        <ul className="nav-menu">
          {links.map(link => (
            <li key={link}>
              <button
                className="nav-link"
                onClick={() => scrollTo(link)}
              >
                {link}
              </button>
            </li>
          ))}
          <li>
            <button className="nav-link nav-cta" onClick={() => scrollTo('Contact')}>
              Plan Your Trip
            </button>
          </li>
        </ul>

        <button
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {links.map(link => (
          <button key={link} className="nav-link" onClick={() => scrollTo(link)}>
            {link}
          </button>
        ))}
        <button className="nav-link nav-cta" onClick={() => scrollTo('Contact')}>
          Plan Your Trip
        </button>
      </div>
    </>
  );
}

/* ============================================================
   HERO SECTION
   ============================================================ */
function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [typedText, setTypedText] = useState('');
  const fullText = 'Discover the Beauty of Assam';

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Typing animation
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i <= fullText.length) {
        setTypedText(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 80);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero" id="hero">
      {/* Slider */}
      <div className="hero-slider">
        {HERO_SLIDES.map((slide, idx) => (
          <div key={idx} className={`hero-slide ${idx === currentSlide ? 'active' : ''}`}>
            <img src={slide.img} alt={slide.alt} loading={idx === 0 ? 'eager' : 'lazy'} />
          </div>
        ))}
      </div>

      <div className="hero-overlay" />

      {/* Content */}
      <div className="hero-content">
        <div className="hero-badge">
          <i className="fa-solid fa-location-dot" />
          Northeast India's Crown Jewel
        </div>

        <h1 className="hero-title">
          <span className="typed-text">{typedText.includes('Beauty') ? (
            <>
              {typedText.slice(0, typedText.indexOf('Beauty'))}
              <span className="highlight">{typedText.slice(typedText.indexOf('Beauty'))}</span>
            </>
          ) : typedText}</span>
        </h1>

        <p className="hero-subtitle">
          Journey through lush tea gardens, ancient temples, mighty rivers and vibrant culture —
          experience Assam, the land where nature and heritage converge in perfect harmony.
        </p>

        <div className="hero-actions">
          <button
            className="btn-primary"
            onClick={() => document.getElementById('places')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <i className="fa-solid fa-compass" />
            Explore Assam
          </button>
          <button
            className="btn-outline"
            onClick={() => document.getElementById('temples')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <i className="fa-solid fa-gopuram" />
            Sacred Temples
          </button>
        </div>
      </div>

      {/* Slide Dots */}
      <div className="hero-dots">
        {HERO_SLIDES.map((_, idx) => (
          <button
            key={idx}
            className={`hero-dot ${idx === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(idx)}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="hero-scroll-indicator">
        <div className="scroll-mouse" />
        <span className="scroll-text">Scroll to explore</span>
      </div>
    </section>
  );
}

/* ============================================================
   STATS BAR
   ============================================================ */
function StatsBar() {
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const ref = useRef<HTMLDivElement>(null);
  const animated = useRef(false);
  const targets = [5, 10000, 640, 500];
  const labels = ['National Parks', 'Sq Km Tea Gardens', 'Species of Birds', 'Years of History'];
  const suffixes = ['+', '+', '+', '+'];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          targets.forEach((target, i) => {
            let current = 0;
            const step = Math.ceil(target / 60);
            const timer = setInterval(() => {
              current = Math.min(current + step, target);
              setCounts(prev => {
                const next = [...prev];
                next[i] = current;
                return next;
              });
              if (current >= target) clearInterval(timer);
            }, 30);
          });
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="stats-bar" ref={ref}>
      <div className="container">
        <div className="stats-grid">
          {counts.map((count, i) => (
            <div key={i} className="stat-item">
              <span className="stat-number">{count.toLocaleString()}{suffixes[i]}</span>
              <span className="stat-label">{labels[i]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   ABOUT SECTION
   ============================================================ */
function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container">
        <div className="about-grid">
          {/* Image */}
          <div className="reveal-left">
            <div className="about-image-stack">
              <div className="about-badge-stack">
                <span className="badge-number">600+</span>
                Years of Ahom Rule
              </div>
              <img
                src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201603/flickr%2C-deepgoswami_647_032216084144.jpg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=900"
                alt="Assam aerial landscape"
                className="about-img-main"
              />
              <img
                src="https://images.pexels.com/photos/19000373/pexels-photo-19000373.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=560"
                alt="Assam tea gardens"
                className="about-img-accent"
              />
            </div>
          </div>

          {/* Text */}
          <div className="reveal-right">
            <div className="section-label">
              <i className="fa-solid fa-map-location-dot" />
              About Assam
            </div>
            <h2 className="section-title">
              The Land of the<br /><span className="gold">Red River & Blue Hills</span>
            </h2>
            <div className="gold-line" />
            <p className="section-subtitle" style={{ maxWidth: '100%', marginBottom: '16px' }}>
              Assam, nestled in the northeastern corner of India, is a land of extraordinary natural beauty,
              vibrant culture and ancient heritage. Known as the "Land of the Red River and Blue Hills",
              Assam is bordered by Bhutan, Arunachal Pradesh, Nagaland, Manipur, Mizoram, Tripura,
              Meghalaya, and Bangladesh.
            </p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.85', marginBottom: '32px' }}>
              The mighty Brahmaputra River flows through the heart of Assam, nurturing one of the world's
              most biodiverse ecosystems. From the UNESCO-listed Kaziranga and Manas national parks to
              the ancient temples of Guwahati and the golden silk produced from the sacred muga silkworm —
              Assam is a destination of timeless wonder.
            </p>

            <div className="about-features stagger-children">
              {[
                { icon: 'fa-solid fa-mug-hot', title: 'Tea Capital', desc: 'Produces 55% of India\'s total tea, world-renowned Assam tea' },
                { icon: 'fa-solid fa-paw', title: 'Wildlife Haven', desc: 'Home to 1-horned rhino, Bengal tiger, Asian elephant' },
                { icon: 'fa-solid fa-gopuram', title: 'Ancient Temples', desc: '51 Shakti Peetha, Ahom Kingdom monuments' },
                { icon: 'fa-solid fa-water', title: 'Mighty Brahmaputra', desc: 'One of the world\'s largest rivers and wetland systems' },
              ].map((feat, i) => (
                <div key={i} className="about-feature">
                  <div className="about-feature-icon">
                    <i className={feat.icon} />
                  </div>
                  <div className="about-feature-text">
                    <h4>{feat.title}</h4>
                    <p>{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   TEMPLES SECTION
   ============================================================ */
function Temples() {
  const [lightbox, setLightbox] = useState<typeof TEMPLES[0] | null>(null);

  return (
    <section className="section temples-section" id="temples">
      <div className="container">
        <div className="section-header centered reveal">
          <div className="section-label">
            <i className="fa-solid fa-gopuram" />
            Spiritual Heritage
          </div>
          <h2 className="section-title">
            Famous <span className="gold">Historical Temples</span> of Assam
          </h2>
          <div className="gold-line centered" />
          <p className="section-subtitle">
            From the mighty Kamakhya atop Nilachal Hill to the riverside Shiva shrines along the Brahmaputra —
            Assam's temples are living monuments of faith, history and architectural splendor.
          </p>
        </div>

        <div className="temples-grid stagger-children">
          {TEMPLES.map((temple, idx) => (
            <article key={temple.id} className="temple-card">
              <div className="temple-image-wrap">
                <img src={temple.img} alt={temple.name} loading="lazy" />
                <div className="temple-image-overlay" />
                <div className="temple-location-badge">
                  <i className="fa-solid fa-location-dot" />
                  {temple.location.split(',')[1]?.trim() || temple.location}
                </div>
                <div className="temple-number">{String(idx + 1).padStart(2, '0')}</div>
              </div>
              <div className="temple-content">
                <h3 className="temple-name">{temple.name}</h3>
                <div className="temple-importance">
                  <i className="fa-solid fa-star" />
                  {temple.importance}
                </div>
                <p className="temple-desc">{temple.desc}</p>
                <div className="temple-meta">
                  <div className="temple-meta-item">
                    <i className="fa-solid fa-calendar" />
                    {temple.built}
                  </div>
                  <div className="temple-meta-item">
                    <i className="fa-solid fa-om" />
                    {temple.deity}
                  </div>
                  <button
                    className="temple-read-more"
                    onClick={() => setLightbox(temple)}
                  >
                    Read More <i className="fa-solid fa-arrow-right" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <div
        className={`lightbox-overlay ${lightbox ? 'active' : ''}`}
        onClick={(e) => {
          if (e.target === e.currentTarget) setLightbox(null);
        }}
      >
        {lightbox && (
          <div className="lightbox-inner">
            <img src={lightbox.img} alt={lightbox.name} className="lightbox-img" />
            <div className="lightbox-body">
              <h2>{lightbox.name}</h2>
              <div className="lb-location">
                <i className="fa-solid fa-location-dot" />
                {lightbox.location}
              </div>
              <div style={{ display: 'flex', gap: '16px', marginBottom: '16px', flexWrap: 'wrap' }}>
                <span className="temple-importance">
                  <i className="fa-solid fa-star" /> {lightbox.importance}
                </span>
                <span className="temple-importance">
                  <i className="fa-solid fa-calendar" /> {lightbox.built}
                </span>
                <span className="temple-importance">
                  <i className="fa-solid fa-om" /> {lightbox.deity}
                </span>
              </div>
              <p>{lightbox.fullDesc}</p>
            </div>
            <button className="lightbox-close" onClick={() => setLightbox(null)}>
              <i className="fa-solid fa-xmark" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

/* ============================================================
   TOURIST PLACES SECTION
   ============================================================ */
function Places() {
  return (
    <section className="section places-section" id="places">
      <div className="container">
        <div className="section-header centered reveal">
          <div className="section-label">
            <i className="fa-solid fa-compass" />
            Must-Visit Destinations
          </div>
          <h2 className="section-title">
            Famous <span className="gold">Tourist Places</span> of Assam
          </h2>
          <div className="gold-line centered" />
          <p className="section-subtitle">
            From UNESCO World Heritage Sites to serene hill stations — explore the most breathtaking
            destinations that make Assam a traveler's paradise.
          </p>
        </div>

        <div className="places-grid stagger-children">
          {PLACES.map((place) => (
            <div key={place.id} className={`place-card ${place.large ? 'large' : ''}`}>
              <img src={place.img} alt={place.name} loading="lazy" />
              <div className="place-card-overlay">
                <div className="place-tag">
                  <i className="fa-solid fa-award" />
                  {place.tag}
                </div>
                <h3 className="place-name">{place.name}</h3>
                <p className="place-desc">{place.desc}</p>
                <div className="place-explore">
                  Explore <i className="fa-solid fa-arrow-right" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   CTA BANNER
   ============================================================ */
function CTABanner() {
  return (
    <div className="cta-banner reveal">
      <div className="container">
        <h2>Ready to Experience <span style={{ color: 'var(--color-primary)' }}>Assam's Magic?</span></h2>
        <p>
          Let our expert guides take you through the wonders of the Brahmaputra Valley.
          Customized tours for every traveler.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            className="btn-primary"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <i className="fa-solid fa-paper-plane" />
            Plan My Trip
          </button>
          <button
            className="btn-outline"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <i className="fa-solid fa-circle-info" />
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   CULTURE SECTION
   ============================================================ */
function Culture() {
  const [activeTab, setActiveTab] = useState('bihu');
  const panel = CULTURE_TABS.find(t => t.id === activeTab)!;

  return (
    <section className="section culture-section" id="culture">
      <div className="container">
        <div className="section-header centered reveal">
          <div className="section-label">
            <i className="fa-solid fa-masks-theater" />
            Living Heritage
          </div>
          <h2 className="section-title">
            Assam's <span className="gold">Rich Culture</span> & Traditions
          </h2>
          <div className="gold-line centered" />
          <p className="section-subtitle">
            Assam's cultural tapestry is woven with vibrant festivals, exquisite silk,
            soulful music and the warmth of its people.
          </p>
        </div>

        {/* Tabs */}
        <div className="culture-tabs">
          {CULTURE_TABS.map(tab => (
            <button
              key={tab.id}
              className={`culture-tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <i className={tab.icon} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Panel */}
        <div className="culture-panel active">
          <div className="culture-image reveal-left">
            <img src={panel.img} alt={panel.title} loading="lazy" />
          </div>
          <div className="culture-text reveal-right">
            <div className="section-label" style={{ marginBottom: '16px' }}>
              <i className={panel.icon} />
              {panel.label}
            </div>
            <h3>{panel.title}</h3>
            <p>{panel.desc}</p>
            <p>{panel.desc2}</p>
            <div className="culture-highlights">
              {panel.highlights.map((h, i) => (
                <div key={i} className="culture-highlight-item">
                  <div className="about-feature-icon">
                    <i className={h.icon} />
                  </div>
                  {h.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   GALLERY SECTION
   ============================================================ */
function Gallery() {
  const doubled = [...GALLERY_IMAGES, ...GALLERY_IMAGES];

  return (
    <section className="gallery-section" id="gallery">
      <div className="container">
        <div className="section-header centered reveal">
          <div className="section-label">
            <i className="fa-solid fa-images" />
            Photo Gallery
          </div>
          <h2 className="section-title">
            <span className="gold">Visual Journey</span> Through Assam
          </h2>
          <div className="gold-line centered" />
        </div>
      </div>

      {/* Auto-scrolling gallery row 1 */}
      <div className="gallery-track-wrapper" style={{ marginBottom: '20px' }}>
        <div className="gallery-track">
          {doubled.map((item, i) => (
            <div key={i} className="gallery-item">
              <img src={item.img} alt={item.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>

      {/* Auto-scrolling gallery row 2 (reversed) */}
      <div className="gallery-track-wrapper">
        <div className="gallery-track gallery-track-2">
          {[...doubled].reverse().map((item, i) => (
            <div key={i} className="gallery-item">
              <img src={item.img} alt={item.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   CONTACT SECTION
   ============================================================ */
function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', destination: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', email: '', phone: '', destination: '', message: '' });
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="section-header centered reveal">
          <div className="section-label">
            <i className="fa-solid fa-envelope" />
            Get In Touch
          </div>
          <h2 className="section-title">
            Plan Your <span className="gold">Assam Adventure</span>
          </h2>
          <div className="gold-line centered" />
          <p className="section-subtitle">
            Connect with the Assam Tourism team to plan your perfect trip.
            Our experts are ready to help you discover the best of Assam.
          </p>
        </div>

        <div className="contact-grid">
          {/* Info */}
          <div className="reveal-left">
            <div className="contact-info">
              <h3>About Developer</h3>

		<h2>Bikash Pathak</h2>
    <img
        src="/images/bikash-pathak.jpg"
        alt="Admin"
	  style={{
    borderRadius: "50%",
    width: "160px",
    height: "160px",
    objectFit: "cover",
    marginTop: "20px",
    marginBottom: "20px"
  }}
      />

              <p>
                We are committed to showcasing the beautiful culture, heritage, and natural wonders
                of Assam to visitors from around the world.
              </p>

              {[
                { icon: 'fa-solid fa-phone', title: 'Phone Number', text: '+91 7099366900' },
                { icon: 'fa-solid fa-envelope', title: 'Email Address', text: 'bikashpathak399@gmail.com' },
              ].map((item, i) => (
                <div key={i} className="contact-detail">
                  <div className="contact-icon"><i className={item.icon} /></div>
                  <div className="contact-detail-text">
                    <h4>{item.title}</h4>
                    <p style={{ whiteSpace: 'pre-line' }}>{item.text}</p>
                  </div>
                </div>
              ))}



<div className="social-links">
  {[
    {
      icon: "fa-brands fa-facebook",
      label: "Facebook",
      link: "https://www.facebook.com/share/18xySMLJg1/",
    },
    {
      icon: "fa-brands fa-instagram",
      label: "Instagram",
      link: "https://instagram.com/bikaaxh",
    },
    {
      icon: "fa-brands fa-x-twitter",
      label: "Twitter",
      link: "https://twitter.com/x",
    },
    {
      icon: "fa-brands fa-whatsapp",
      label: "WhatsApp",
      link: "https://wa.me/+917099366900",
    },
  ].map((s, i) => (
    <a
      key={i}
      href={s.link}
      target="_blank"
      rel="noopener noreferrer"
      className="social-link"
      aria-label={s.label}
    >
      <i className={s.icon} />
    </a>
  ))}
</div>




              {/* Map */}
              <div className="map-wrap">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57427.29428252744!2d91.71614435820313!3d26.14404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5a0f0b2e54e3%3A0x3c4e5cf20b2e2c63!2sGuwahati%2C%20Assam!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  title="Guwahati, Assam"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="reveal-right">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: '#fff', marginBottom: '24px' }}>
                Send Us a Message
              </h3>

              <div className="form-row">
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+91 00000 00000"
                    value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Preferred Destination</label>
                  <select
                    value={form.destination}
                    onChange={e => setForm({ ...form, destination: e.target.value })}
                  >
                    <option value="">Select a destination</option>
                    <option>Kaziranga National Park</option>
                    <option>Kamakhya Temple & Guwahati</option>
                    <option>Majuli Island</option>
                    <option>Haflong Hill Station</option>
                    <option>Manas National Park</option>
                    <option>Sivasagar Heritage Tour</option>
                    <option>Jorhat Tea Garden Tour</option>
                    <option>Complete Assam Tour</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>Your Message</label>
                <textarea
                  placeholder="Tell us about your travel plans, group size, preferred dates..."
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  required
                />
              </div>

              <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                {submitted ? (
                  <><i className="fa-solid fa-check" /> Message Sent Successfully!</>
                ) : (
                  <><i className="fa-solid fa-paper-plane" /> Send Message</>
                )}
              </button>

              {submitted && (
                <div style={{
                  marginTop: '16px',
                  padding: '14px',
                  background: 'rgba(64,145,108,0.15)',
                  border: '1px solid rgba(64,145,108,0.3)',
                  borderRadius: '10px',
                  fontSize: '0.85rem',
                  color: '#74c69d',
                  textAlign: 'center',
                }}>
                  <i className="fa-solid fa-circle-check" style={{ marginRight: '8px' }} />
                  Thank you! Our team will contact you within 24 hours.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FOOTER COMPONENT
   ============================================================ */
function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <div className="nav-logo" style={{ marginBottom: '0' }}>
              <div className="nav-logo-icon">🏛️</div>
              <div className="nav-logo-text">
                <span className="brand">Assam Tourism</span>
                <span className="tagline">Land of the Red River</span>
              </div>
            </div>
            <p className="footer-brand-desc">
              Assam Tourism Development Corporation Ltd. promotes the rich cultural heritage,
              natural beauty and vibrant traditions of Assam to travelers from around the world.
            </p>




          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              {['About Assam', 'Famous Temples', 'Tourist Places', 'Assam Culture', 'Photo Gallery', 'Contact Us'].map(link => (
                <li key={link}><a href="#">{link}</a></li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div className="footer-col">
            <h4>Top Destinations</h4>
            <ul className="footer-links">
              {['Kaziranga National Park', 'Majuli Island', 'Kamakhya Temple', 'Haflong Hill Station', 'Manas National Park', 'Sivasagar Heritage'].map(d => (
                <li key={d}><a href="#">{d}</a></li>
              ))}
            </ul>
          </div>




        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {year} <span>Assam Tourism Development Corporation</span>. All rights reserved.
          </p>



        </div>
      </div>
    </footer>
  );
}

/* ============================================================
   BACK TO TOP & TOAST
   ============================================================ */
function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      className={`back-to-top ${visible ? 'visible' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
    >
      <i className="fa-solid fa-arrow-up" />
    </button>
  );
}

/* ============================================================
   SCROLL REVEAL HOOK
   ============================================================ */
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );

    const selectors = '.reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger-children';
    document.querySelectorAll(selectors).forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

/* ============================================================
   MAIN APP
   ============================================================ */
export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2800);
    return () => clearTimeout(timer);
  }, []);

  useScrollReveal();

  return (
    <>
      {/* Loader */}
      <Loader visible={loading} />

      {/* Custom Cursor (desktop only) */}
      <CustomCursor />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero />
        <StatsBar />
        <About />
        <Temples />
        <Places />
        <CTABanner />
        <Culture />
        <Gallery />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Back to top */}
      <BackToTop />
    </>
  );
}
