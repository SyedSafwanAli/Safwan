/* ============================================================
   Projects data — shared across work.html & project-detail.html
============================================================ */
var PROJECTS = [
  {
    slug:     'exclusiveprocleaning',
    title:    'exclusiveprocleaning.co.uk',
    category: 'WordPress',
    sub:      'Cleaning Services',
    location: 'United Kingdom',
    year:     '2024',
    url:      'https://exclusiveprocleaning.co.uk',
    stack:    ['WordPress', 'Divi', 'PHP', 'CSS3'],
    overview: 'A professional cleaning services website built for a UK-based company. The site features a clean, modern design with detailed service listings, instant quote forms, and a fully optimised structure for local SEO — helping the business rank higher in London search results.',
    services: ['Custom WordPress Theme', 'Responsive Design', 'Local SEO Setup', 'Lead Generation Forms'],
    img:      'assets/images/services-img.png',
    faqs: [
      { q: 'What was the main goal of this project?', a: 'To build a professional online presence for a UK cleaning company that generates leads through search engines and quote request forms.' },
      { q: 'Which page builder was used?', a: 'Divi Builder was used for the full layout, giving the client easy drag-and-drop control over their content after handoff.' },
      { q: 'How was local SEO handled?', a: 'We set up location-based pages, optimised meta tags, schema markup for local business, and integrated Google Maps to help rank in London-area searches.' },
      { q: 'Did the site include a booking or quote form?', a: 'Yes — a custom instant quote form was built and connected to the client\'s email, so they receive enquiries directly without any third-party tool.' },
      { q: 'Was the site mobile-optimised?', a: 'Fully mobile-first. Every section was tested across devices to ensure fast load times and a great experience on phones and tablets.' }
    ]
  },
  {
    slug:     'vapehp',
    title:    'vapehp.ca',
    category: 'WooCommerce',
    sub:      'E-Commerce',
    location: 'Canada',
    year:     '2024',
    url:      'https://vapehp.ca',
    stack:    ['WooCommerce', 'WordPress', 'PHP', 'Stripe'],
    overview: 'A full-featured WooCommerce store built for a Canadian vape retailer. The project included custom product pages, age-verification flows, payment gateway integration, and a streamlined checkout experience optimised for conversion.',
    services: ['WooCommerce Development', 'Payment Integration', 'Age Verification', 'Performance Optimisation'],
    img:      'assets/images/services-img.png',
    faqs: [
      { q: 'What payment gateways were integrated?', a: 'Stripe was the primary gateway, with additional support for local Canadian payment methods to maximise checkout completion rates.' },
      { q: 'How was age verification handled?', a: 'A compliant age-gate was implemented on the homepage and product pages, requiring users to confirm they are of legal age before entering the store.' },
      { q: 'Were product variations supported?', a: 'Yes — products with multiple flavours, strengths, and sizes were set up using WooCommerce variable products with stock tracking per variant.' },
      { q: 'How was the checkout optimised?', a: 'We reduced the checkout to a single page, removed unnecessary fields, and added trust signals (SSL badge, return policy) to reduce cart abandonment.' },
      { q: 'Was performance a concern?', a: 'Absolutely. Image compression, lazy loading, and caching plugins were configured to achieve fast page loads — critical for e-commerce conversion rates.' }
    ]
  },
  {
    slug:     'vortexwise',
    title:    'vortexwise.com',
    category: 'WordPress',
    sub:      'Amazon UGC / Marketing',
    location: 'Pakistan',
    year:     '2024',
    url:      'https://vortexwise.com',
    stack:    ['WordPress', 'Elementor', 'PHP', 'CSS3'],
    overview: 'A marketing and Amazon UGC agency website designed to attract brand clients. Built with a bold visual language, clear service breakdowns, and portfolio sections that showcase content creation work for Amazon sellers.',
    services: ['WordPress Development', 'Custom Design', 'Portfolio Integration', 'Contact & CRM Forms'],
    img:      'assets/images/services-img.png',
    faqs: [
      { q: 'What was the target audience for this site?', a: 'Amazon brand owners and sellers looking for UGC content creators and marketing agencies to grow their product listings.' },
      { q: 'Was a portfolio section included?', a: 'Yes — a dynamic portfolio section was built to showcase past UGC videos and brand campaigns, with category filtering.' },
      { q: 'Which page builder was used?', a: 'Elementor Pro was used for the layout, chosen for its flexibility in building the bold, agency-style visual design the client wanted.' },
      { q: 'How do client enquiries come in?', a: 'A custom contact form captures project briefs and is connected to the client\'s CRM and email for instant follow-up.' },
      { q: 'Was the site optimised for lead generation?', a: 'Yes — strong calls-to-action, a clear service hierarchy, and a streamlined enquiry flow were all designed to convert visitors into leads.' }
    ]
  },
  {
    slug:     'sherdilcloud',
    title:    'sherdilcloud.com',
    category: 'WordPress',
    sub:      'IT / Cloud Services',
    location: 'Pakistan',
    year:     '2023',
    url:      'https://sherdilcloud.com',
    stack:    ['WordPress', 'Beaver Builder', 'PHP'],
    overview: 'Corporate IT and cloud services website for a Pakistani tech company. Focused on a clean, professional aesthetic with service pages, team profiles, and a client portal entry point. Fully responsive across all devices.',
    services: ['Corporate Website', 'Beaver Builder', 'Service Page Design', 'Responsive Build'],
    img:      'assets/images/services-img.png',
    faqs: [
      { q: 'What kind of business is Sherdil Cloud?', a: 'Sherdil Cloud is a Pakistani IT company offering cloud hosting, managed services, and infrastructure solutions to businesses.' },
      { q: 'Which builder was used and why?', a: 'Beaver Builder was chosen for its stability and the client\'s need to independently update their service pages without developer help.' },
      { q: 'Does the site include a team section?', a: 'Yes — a team profiles section was built to showcase leadership and technical staff, adding credibility for enterprise clients.' },
      { q: 'Is there a client portal?', a: 'Yes — a client portal entry point was integrated, linking to their hosting control panel and support ticket system.' },
      { q: 'How was the corporate tone achieved in design?', a: 'Clean white space, a structured grid layout, and a professional navy/grey colour palette were used to convey reliability and expertise.' }
    ]
  },
  {
    slug:     'academy-sherdil',
    title:    'academy.sherdil.org',
    category: 'WordPress / LMS',
    sub:      'Online Academy',
    location: 'Pakistan',
    year:     '2023',
    url:      'https://academy.sherdil.org',
    stack:    ['WordPress', 'LearnDash', 'WooCommerce', 'PHP'],
    overview: 'A full Learning Management System built on WordPress with LearnDash. Students can enrol, purchase courses, track progress, and receive certificates. Integrated with WooCommerce for course sales and PayPal for payments.',
    services: ['LMS Development', 'LearnDash Setup', 'WooCommerce Integration', 'Student Dashboard'],
    img:      'assets/images/services-img.png',
    faqs: [
      { q: 'Which LMS plugin was used?', a: 'LearnDash — one of the most powerful WordPress LMS plugins — was used to handle course creation, quizzes, progress tracking, and certificate generation.' },
      { q: 'How do students purchase courses?', a: 'WooCommerce handles all course sales. Students add courses to cart, pay via PayPal or credit card, and get instant access on completion.' },
      { q: 'Can instructors manage their own content?', a: 'Yes — instructor accounts were set up with controlled access so each teacher can upload lessons, set quizzes, and track their own students.' },
      { q: 'Are certificates issued automatically?', a: 'Yes — LearnDash auto-generates a PDF certificate upon course completion which students can download and share.' },
      { q: 'Was the student dashboard customised?', a: 'A clean, branded student dashboard was built to show enrolled courses, progress bars, quiz results, and downloadable certificates in one place.' }
    ]
  },
  {
    slug:     'diamond-dpc',
    title:    'diamond-dpc.com',
    category: 'WordPress',
    sub:      'Events / Lead Generation',
    location: 'United Kingdom',
    year:     '2023',
    url:      'https://diamond-dpc.com',
    stack:    ['WordPress', 'Divi', 'PHP', 'Mailchimp'],
    overview: 'An events and lead generation site for a UK-based business. Features include event listings, registration forms connected to Mailchimp, a custom Divi layout, and strong calls-to-action designed to maximise lead capture.',
    services: ['WordPress + Divi', 'Event Listings', 'Mailchimp Integration', 'Lead Gen Forms'],
    img:      'assets/images/services-img.png',
    faqs: [
      { q: 'What type of events does this site promote?', a: 'Diamond DPC runs professional development and consulting events in the UK, targeting business professionals and corporate clients.' },
      { q: 'How are event registrations handled?', a: 'Custom registration forms collect attendee details and push them directly to a Mailchimp audience list for follow-up email campaigns.' },
      { q: 'Which page builder was used?', a: 'Divi Builder was used, allowing the client to update event details, dates, and images without any coding knowledge.' },
      { q: 'How were leads captured beyond event sign-ups?', a: 'Multiple lead magnets, a newsletter opt-in popup, and a contact form were strategically placed across the site to maximise conversions.' },
      { q: 'Was Mailchimp the only email integration?', a: 'Yes — Mailchimp was integrated for all email marketing flows including registration confirmation, reminders, and post-event follow-ups.' }
    ]
  },
  {
    slug:     'genzjewellery',
    title:    'genzjewellery.com',
    category: 'WooCommerce',
    sub:      'E-Commerce (Jewelry)',
    location: 'Pakistan',
    year:     '2023',
    url:      'https://genzjewellery.com',
    stack:    ['WooCommerce', 'WordPress', 'PHP', 'CSS3'],
    overview: 'A luxury jewellery e-commerce store with a sophisticated dark-and-gold aesthetic. Product filtering, wishlist functionality, and an intuitive checkout flow were central to the build. Mobile-first design throughout.',
    services: ['WooCommerce Store', 'Custom Theme', 'Product Filters', 'Wishlist & Cart UX'],
    img:      'assets/images/services-img.png',
    faqs: [
      { q: 'What made the design feel luxurious?', a: 'A dark background with gold typography, elegant whitespace, and high-quality product photography combined to create the premium aesthetic the brand required.' },
      { q: 'Were product filters implemented?', a: 'Yes — customers can filter by metal type, gemstone, price range, and collection to quickly find products that match their preferences.' },
      { q: 'Was a wishlist feature included?', a: 'Yes — a save-to-wishlist feature lets users bookmark items and return to them, which significantly improves repeat visit conversions.' },
      { q: 'How was the checkout experience designed?', a: 'A simplified one-page checkout with clear progress steps, trust badges, and saved address options was built to reduce drop-off rates.' },
      { q: 'Was the site built mobile-first?', a: 'Absolutely — mobile traffic dominates in fashion e-commerce in Pakistan, so the entire design was crafted for thumb-friendly mobile navigation first.' }
    ]
  },
  {
    slug:     'pixowallpapers',
    title:    'pixowallpapers.com',
    category: 'WordPress',
    sub:      'Wallpaper Gallery',
    location: 'Pakistan',
    year:     '2023',
    url:      'https://pixowallpapers.com',
    stack:    ['WordPress', 'PHP', 'CSS3', 'jQuery'],
    overview: 'A high-performance wallpaper gallery website with thousands of images. Built with lazy loading, category filters, and one-click downloads. Heavily optimised for speed and Google image search visibility.',
    services: ['WordPress Gallery', 'Lazy Loading', 'Category System', 'Download Functionality'],
    img:      'assets/images/services-img.png',
    faqs: [
      { q: 'How are thousands of images managed efficiently?', a: 'Images are organised by category and tag, with lazy loading so only visible images load — keeping the page fast even with massive content volumes.' },
      { q: 'How does the download feature work?', a: 'A one-click download button on each wallpaper lets users save the full-resolution image directly without signing up or paying.' },
      { q: 'How was Google image search visibility improved?', a: 'Every image has descriptive alt text, structured filenames, and is wrapped in proper schema markup, making them indexable by Google Images.' },
      { q: 'Are wallpapers categorised?', a: 'Yes — categories like Nature, Abstract, Cars, and Gaming are set up with filterable archive pages and a search bar for quick discovery.' },
      { q: 'Was site speed a priority?', a: 'Critical — with thousands of images, we implemented aggressive caching, CDN integration, and WebP format conversion to keep load times under 2 seconds.' }
    ]
  },
  {
    slug:     'importedvitamins',
    title:    'importedvitamins.com',
    category: 'WooCommerce',
    sub:      'E-Commerce (Health)',
    location: 'Pakistan',
    year:     '2023',
    url:      'https://importedvitamins.com',
    stack:    ['WooCommerce', 'WordPress', 'PHP', 'CSS3'],
    overview: 'A health supplements e-commerce store selling imported vitamins across Pakistan. Built with product variant support, bulk order discounts, and a clean UI that builds trust in the health-conscious buyer.',
    services: ['WooCommerce Development', 'Product Variants', 'Bulk Discount Rules', 'Checkout Optimisation'],
    img:      'assets/images/services-img.png',
    faqs: [
      { q: 'What products does the store sell?', a: 'Imported vitamins, supplements, and health products sourced internationally and sold to health-conscious consumers across Pakistan.' },
      { q: 'How were product variants handled?', a: 'WooCommerce variable products were used so each supplement could have multiple sizes, flavours, and quantities — all with individual stock levels.' },
      { q: 'Were bulk discounts supported?', a: 'Yes — tiered pricing rules were set up so customers buying in larger quantities automatically receive discounted per-unit rates at checkout.' },
      { q: 'How was trust established on the site?', a: 'Authenticity badges, product certifications, customer reviews, and clear ingredient listings were used to reassure health-conscious buyers.' },
      { q: 'What payment methods were offered?', a: 'Cash on delivery (COD) was the primary method for Pakistan, with JazzCash and Easypaisa also integrated for digital payments.' }
    ]
  },
  {
    slug:     'thedesignersboutique',
    title:    'thedesignersboutique.co.uk',
    category: 'Divi / WordPress',
    sub:      'Fashion & Retail',
    location: 'United Kingdom',
    year:     '2022',
    url:      'https://thedesignersboutique.co.uk',
    stack:    ['WordPress', 'Divi', 'WooCommerce', 'PHP'],
    overview: 'A fashion retail website for a UK boutique selling designer clothing. Combines a sleek WooCommerce store with editorial-style product showcases and a curated brand aesthetic that resonates with fashion-conscious shoppers.',
    services: ['Divi Theme', 'WooCommerce Store', 'Editorial Design', 'Fashion UX'],
    img:      'assets/images/services-img.png',
    faqs: [
      { q: 'What was the brand aesthetic goal?', a: 'A high-end, editorial feel using clean white space, large product imagery, and minimal typography to let the clothing speak for itself.' },
      { q: 'Was a lookbook or editorial section built?', a: 'Yes — an editorial lookbook section was designed to showcase curated outfits and collections in a magazine-style layout.' },
      { q: 'How was the WooCommerce store set up?', a: 'Products were organised by designer brand, collection, and size — with filtering, wishlists, and a refined checkout experience for UK shoppers.' },
      { q: 'Were there any UK-specific requirements?', a: 'UK VAT was configured in WooCommerce and the returns policy was prominently displayed to comply with UK consumer law.' },
      { q: 'Was Divi used for the full site?', a: 'Yes — Divi was used for all pages including the homepage, lookbook, about, and contact pages, giving the client full editing independence.' }
    ]
  },
  {
    slug:     'techspark',
    title:    'techspark.solutions',
    category: 'Beaver Builder',
    sub:      'IT Services / Startup',
    location: 'Pakistan',
    year:     '2022',
    url:      'https://techspark.solutions',
    stack:    ['WordPress', 'Beaver Builder', 'PHP', 'CSS3'],
    overview: 'A startup IT services website built to attract B2B clients. Clean layout, strong service hierarchy, team section, and client logos. Beaver Builder used for full flexibility and fast page edits by the client.',
    services: ['Beaver Builder Build', 'B2B Design', 'Service Architecture', 'Client-Editable Pages'],
    img:      'assets/images/services-img.png',
    faqs: [
      { q: 'Who is the target audience for this site?', a: 'B2B clients — specifically businesses in Pakistan looking to outsource IT services, software development, or tech consultancy to a startup agency.' },
      { q: 'Why was Beaver Builder chosen?', a: 'Beaver Builder was chosen for its clean output, reliable performance, and ease of use — allowing the startup team to update content themselves without a developer.' },
      { q: 'What sections were most important?', a: 'The services page with clear pricing tiers, a team section with bios, and a client logo strip to build credibility were the key conversion elements.' },
      { q: 'Was the site built with SEO in mind?', a: 'Yes — proper heading hierarchy, meta descriptions, schema markup, and fast load times were all factored into the build from the start.' },
      { q: 'Can the client update content themselves?', a: 'Yes — one of the requirements was full client autonomy. Beaver Builder was configured with reusable modules so the team can update any section easily.' }
    ]
  },
  {
    slug:     'organicbasket',
    title:    'organicbasket.pk',
    category: 'WooCommerce',
    sub:      'Grocery E-Commerce',
    location: 'Pakistan',
    year:     '2022',
    url:      'https://organicbasket.pk',
    stack:    ['WooCommerce', 'WordPress', 'PHP', 'CSS3'],
    overview: 'A grocery delivery e-commerce platform for organic produce in Pakistan. Features include category-based browsing, a quick add-to-cart system, delivery zone selection, and COD + online payment support.',
    services: ['WooCommerce Grocery Store', 'Delivery Zones', 'COD Integration', 'Mobile-First Design'],
    img:      'assets/images/services-img.png',
    faqs: [
      { q: 'What makes this different from a regular e-commerce store?', a: 'Grocery UX requires fast browsing and quick add-to-cart — the store was built with one-click add buttons, a persistent cart, and category mega-menus for speed.' },
      { q: 'How were delivery zones handled?', a: 'A delivery zone plugin was configured so customers enter their area at checkout, and only available delivery slots for that zone are shown.' },
      { q: 'What payment methods are supported?', a: 'Cash on delivery (COD) is the default for Pakistan, with JazzCash and Easypaisa integrated as digital options for tech-savvy shoppers.' },
      { q: 'Was freshness or expiry information shown on products?', a: 'Yes — custom product fields were added to show harvest date, storage instructions, and shelf life for perishable organic items.' },
      { q: 'Was the site mobile-first?', a: 'Yes — the majority of grocery shoppers in Pakistan browse on mobile, so the entire UX was designed thumb-first with large tap targets and a fast mobile checkout.' }
    ]
  }
];
