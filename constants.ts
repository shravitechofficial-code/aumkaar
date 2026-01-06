
import React from 'react';
import { NavItem, Service, TeamMember, Testimonial, BlogPost, Event } from './types';

export const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1530968464168-ab892026e567?q=80&w=2070&auto=format&fit=crop';

// The Google Apps Script Web App URL for data submission
export const SUBMISSION_WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbz3HRLmWm6G59X_IJyn4b0uSj6UWDa0QIba9MzJLnbVtiv7j01DqlWrc8q_YVCXepzK/exec'; 

export const NAV_ITEMS: NavItem[] = [
  { 
    label: 'SESSIONS', 
    path: '/services',
    submenu: [
      { label: 'Sound', isHeader: true },
      { label: 'Sound Healing', path: '/service/sound-healing' },
      { label: 'Sound Bath', path: '/service/sound-bath' },
      { label: 'Tibetan Sound Spa', path: '/service/tibetan-sound-spa' },
      { label: 'Chakra Sound Balancing', path: '/service/chakra-sound-balancing' },
      { label: 'Couples Sound Therapy', path: '/service/couples-sound-therapy' },
      { label: 'Sound Manifestation', path: '/service/sound-manifestation' },
      { label: 'One on One Sound Therapy', path: '/service/one-on-one-sound-therapy' },
      { label: 'Private Group Unique Offerings', path: '/service/private-group' },
      { label: 'Others', isHeader: true },
      { label: 'Mind Management Session', path: '/service/mind-management-session' },
      { label: 'Tai Chi Meditation', path: '/service/tai-chi' }
    ]
  },
  { label: 'EVENTS', path: '/events' },
  { 
    label: 'CORPORATE WELLNESS', 
    path: '/service/corporate-sound-healing',
    submenu: [
      { label: 'Sound Healing & Sound Bath', path: '/service/corporate-sound-healing' },
      { label: 'Team Harmony Sound Circle', path: '/service/team-harmony' },
      { label: 'SFL Stress Free Living Program', path: '/service/sfl-program' }
    ]
  },
  { label: 'ABOUT', path: '/about' },
  { label: 'BLOG', path: '/blog' },
];

export const EVENTS: Event[] = [
  {
    id: 'lunar-sound-healing',
    title: 'Full Moon Sound Healing Ritual',
    date: 'August 19, 2024',
    time: '7:00 PM - 8:30 PM',
    location: 'Aumkaar Rooftop Sanctuary',
    price: '$65',
    category: 'Vibrational Therapy',
    shortDescription: 'Align your frequency with the lunar cycle in this deep vibrational journey.',
    fullDescription: 'Under the illumination of the full moon, we gather for a specialized sound healing ritual. This session utilizes the high energy of the lunar cycle to amplify intentions and facilitate deep emotional release.',
    image: 'https://images.unsplash.com/photo-1532693322450-2cb5c511067d?q=80&w=2070&auto=format&fit=crop',
    capacity: '15 Seats Left',
    highlights: ['Special Moon-Tuned Bowls', 'Intention Setting Ritual', 'Cacao Grounding Circle'],
    itinerary: [
      { time: '7:00 PM', activity: 'Arrival & Herbal Tea' },
      { time: '7:15 PM', activity: 'Full Moon Intention Ceremony' },
      { time: '7:30 PM', activity: '90-Minute Multi-Instrument Sound Journey' },
      { time: '8:15 PM', activity: 'Integration & Sharing' }
    ]
  },
  {
    id: 'sacred-sound-bath-immersion',
    title: 'Sacred Sound Bath Immersion',
    date: 'September 5, 2024',
    time: '6:30 PM - 8:00 PM',
    location: 'The Great Hall, Wellness District',
    price: '$45',
    category: 'Group Immersion',
    shortDescription: 'A collective resonance experience for deep relaxation and mental clarity.',
    fullDescription: 'Join our largest collective sound experience. A landscape of gongs, crystal bowls, and Himalayan singing bowls creates a sonic cocoon designed to bypass the thinking mind and restore inner peace.',
    image: 'https://images.unsplash.com/photo-1515023115689-589c33041d3c?q=80&w=2070&auto=format&fit=crop',
    capacity: 'Limited to 50 Participants',
    highlights: ['360-Degree Sound Field', 'Group Resonance Exercise', 'Deep Theta Activation'],
    itinerary: [
      { time: '6:30 PM', activity: 'Welcome & Space Settle' },
      { time: '6:45 PM', activity: 'Guided Breathwork' },
      { time: '7:00 PM', activity: 'The Great Sound Immersion' },
      { time: '7:45 PM', activity: 'Gently Awakening' }
    ]
  }
];

export const SERVICES: Service[] = [
  {
    id: 'sound-healing',
    title: 'Sound Healing : Naad',
    category: 'Sound Therapy',
    shortDescription: 'A personalised, multi-instrument journey for emotional and energetic alignment.',
    fullDescription: 'Sound Healing is a deeper, intention-led experience that includes both off-body sound fields and on-body vibration placement.',
    duration: '75–90 Minutes',
    price: 'Enquire for Pricing',
    image: 'https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?q=80&w=2070&auto=format&fit=crop', 
    benefits: [
      'Emotional clarity and release',
      'Improved sleep and deeper rest',
      'Reduced mental fatigue and overthinking',
      'Relief from chronic tension patterns',
      'A calm, centred and grounded inner state',
      'Insights into thought loops or old emotional patterns',
      'A sense of lightness and emotional balance',
      'Gradual, meaningful transformation over a series of sessions'
    ],
    details: {
      whatItIs: {
        description: 'Sound Healing is a personalised session offered one-on-one, for couples, or in small groups using Tibetan bowls, crystal bowls, gongs, handpan, drums and chimes. Unlike a Sound Bath, this is a deeper, intention-led experience.',
        points: [
          'Off-body sound fields (frequencies surrounding the body)',
          'On-body vibration placement (gentle vibration through selected bowls, with no physical touch)'
        ],
        closing: 'Your intention acts as the anchor for the session, guiding the emotional and energetic direction of the work.'
      },
      whatYouExperience: [
        'Grounding + intention-setting ritual',
        'Multi-instrument sound field around the body',
        'Gentle on-body vibration placement (no physical touch)',
        'Frequencies woven to target emotional or energetic blocks',
        'Moments of silence for integration',
        'A session that builds upon your previous experiences'
      ],
      whoItIsFor: [
        'Stress and burnout cycles',
        'Emotional overwhelm or heaviness',
        'Chronic body tension',
        'Overthinking or mental clutter',
        'Life transitions',
        'Creative blocks',
        'Feeling "stuck" or disconnected',
        'A desire for deeper inner work and clarity'
      ],
      format: ['One-on-One', 'Couple/Partner', 'Small Group (Upto 15 members)'],
      frequency: 'A minimum of 4 sessions (recommended 4–8 sessions) for a complete energetic and emotional cycle.',
      preSession: [
        'Wear loose, comfortable clothing',
        'Stay hydrated',
        'Keep stomach light (avoid heavy meals 2 hours prior)',
        'Reduce caffeine intake on the day',
        'Arrive with openness and without rush'
      ],
      postSession: [
        'Drink water',
        'Move gently',
        'Avoid loud environments or screen overload',
        'Journal or sit in quiet if emotions arise',
        'Notice the shifts that unfold over the next 24 hours'
      ],
      safety: {
        note: 'Sound Healing is generally safe. However, please check with us if you:',
        conditions: [
          'Are pregnant', 
          'Have epilepsy or seizure disorders', 
          'Have a pacemaker or electronic implants', 
          'Have severe vascular issues',
          'Have metal allergies (for on-body bowls)'
        ],
        closing: 'We will guide you to the safest and most suitable option.'
      },
      faqs: [
        { 
          question: 'How is Sound Healing different from a Sound Bath?', 
          answer: [
            'Sound Bath: Group experience, no on-body vibrations, primarily listening.',
            'Sound Healing: Personalised, multi-instrument work with intentional frequency placement. Bowls placed on and around body.',
            'Tibetan Sound Massage: Bowls placed directly on the body for deeper vibration.'
          ]
        },
        { question: 'Do I need meditation experience?', answer: 'Not at all. This session is guided, accessible and effortless.' },
        { question: 'Will I feel the vibrations physically?', answer: 'Yes, through bowls placed gently on the body (over clothes). This helps release tension and calm the nervous system.' },
        { question: 'Can I fall asleep?', answer: 'Yes and it’s completely normal. The body still receives full benefit.' },
        { question: 'How many sessions do I need?', answer: 'One session provides relaxation. For deeper release and transformation, 3–4 sessions help create lasting shifts.' },
        { question: 'Are there side effects?', answer: 'Most people feel relaxed and lighter. Some may feel emotional or tired for 12–24 hours as the body integrates, perfectly normal.' },
        { question: 'What if I feel emotional during or after the session?', answer: 'This is a natural part of release. Breathe, hydrate and allow yourself to rest.' },
        { question: 'Is it safe during pregnancy?', answer: 'Sound Bath: usually yes with modifications. Sound Healing & Sound Massage: on-body vibrations are generally not recommended. Please check with us.' },
        { question: 'What should I wear?', answer: 'Loose, comfortable clothing. Cotton is ideal for on-body bowl placement.' },
        { question: 'Do you diagnose or treat medical conditions?', answer: 'No. Sound Healing is a complementary wellness practice, not a medical treatment. It may support emotional balance, relaxation and sleep.' }
      ]
    }
  },
  {
    id: 'sound-bath',
    title: 'Sound Bath : Anhad',
    category: 'Group Immersion',
    shortDescription: 'An Immersive Sound Bath experience that invites deep rest.',
    fullDescription: 'A meditative sound immersion where you relax comfortably while layers of sound gently wash over the body.',
    duration: '75–90 Minutes',
    price: 'Enquire for Pricing',
    image: 'https://images.unsplash.com/photo-1515023115689-589c33041d3c?q=80&w=2070&auto=format&fit=crop', 
    benefits: [
      'Deep mental and physical relaxation',
      'Reduced stress, tension and fatigue',
      'Quieting of overthinking and mental chatter',
      'Emotional release or lightness',
      'Improved sleep and restfulness',
      'Enhanced clarity, focus and creativity',
      'A sense of spaciousness and inner grounding'
    ],
    details: {
      whatItIs: {
        description: 'A Sound Bath is a meditative sound immersion where you relax comfortably while layers of sound from Tibetan bowls, crystal bowls, gongs, drums, chimes and handpan gently wash over the body. You don’t need to “do” anything simply listen, receive and allow the nervous system to slow down. The experience is immersive, gentle and highly accessible, making it ideal for both beginners and experienced meditators.',
        points: ['Immersive and gentle', 'No physical touch or on-body vibration', 'Ideal for beginners']
      },
      whatYouExperience: [
        'A short grounding or breath-led opening',
        '45–60 minutes of continuous therapeutic sound',
        'Subtle vibration through the floor or mat',
        'Soft transitions and moments of silence for integration',
        'A calm, cocoon-like sound field around the body',
        'Each session feels different depending on your inner state'
      ],
      whoItIsFor: [
        'Beginners to meditation',
        'Couples or friends wanting a shared calming experience',
        'Anyone seeking a nervous-system reset',
        'Corporate groups and wellness events',
        'Regular meditators exploring deeper states',
        'Individuals feeling mentally overloaded or emotionally tired'
      ],
      format: ['Small Groups - 20+', 'Large Groups - 100+'],
      frequency: 'Attend weekly or biweekly for consistent relaxation, improved sleep and emotional balance.',
      preSession: [
        'Wear loose, comfortable clothing',
        'Avoid heavy meals for at least 2 hours prior',
        'Stay hydrated through the day',
        'Bring a light jacket/shawl',
        'Arrive a few minutes early to settle in'
      ],
      postSession: [
        'Drink plenty of water',
        'Move slowly and gently',
        'Avoid loud environments or screen overload',
        'Allow 20–30 minutes of quiet time for integration',
        'Notice any shifts that unfold over the next 24 hours'
      ],
      safety: {
        note: 'Sound Baths are generally safe for most people. However, please inform us in advance if you:',
        conditions: [
          'Are pregnant', 
          'Have epilepsy or seizure conditions', 
          'Use a pacemaker',
          'Are highly sensitive to loud sounds'
        ],
        closing: 'We will guide you to the safest option.'
      },
      faqs: [
        { question: 'Do I need meditation experience?', answer: 'No. Sound Baths are perfect for beginners, you simply lie down and receive.' },
        { question: 'Will the sound be loud or overwhelming?', answer: 'No. We use gentle, therapeutic tones designed for relaxation, not intensity.' },
        { question: 'Can I fall asleep?', answer: 'Yes, many people do. The body still receives full benefit.' },
        { question: 'What should I bring?', answer: 'A shawl/light jacket, and an open mind.' },
        { question: 'Will I feel vibrations physically?', answer: 'Yes, subtle vibrations may be felt through the floor or your body, this is normal.' },
        { question: 'Is it safe during pregnancy?', answer: 'Generally yes, with adaptations. We avoid louder instruments and give additional space.' },
        { question: 'Is this the same as Sound Healing?', answer: 'No. Sound Bath is a group listening experience; Sound Healing is deeper and more personalised.' },
        { question: 'How often should I attend?', answer: 'Weekly or biweekly for best results with stress, sleep and emotional balance.' },
        { question: 'Can children attend?', answer: 'Older children (10+) may attend with parental supervision, depending on sensitivity.' },
        { question: 'What if I feel emotional?', answer: 'This is normal. Sound helps release stored tension. Allow it to move gently.' }
      ]
    }
  },
  {
    id: 'tibetan-sound-spa',
    title: 'Tibetan Sound Spa : Tarang',
    category: 'Vibrational Therapy',
    shortDescription: 'A sensory, vibration-based sound therapy for deep relaxation.',
    fullDescription: 'A personalised, one-on-one sound therapy where Himalayan singing bowls are placed on and around the body with no physical touch involved.',
    duration: '75 to 90 minutes',
    price: 'Enquire for Pricing',
    image: 'https://images.unsplash.com/photo-1593811167024-5d93e1744b89?q=80&w=2070&auto=format&fit=crop', 
    benefits: [
      'Deep physical relaxation',
      'Reduced tension in the back, neck and jaw',
      'Improved sleep quality',
      'Lower mental fatigue',
      'Reduced anxiety and irritability',
      'Emotional lightness and energetic release',
      'Clearer thinking and calm focus'
    ],
    details: {
      whatItIs: {
        description: 'A personalised, one-on-one sound therapy where Himalayan singing bowls are placed on and around the body with no physical touch involved. The vibrations travel through muscles, fascia and fluid, creating a gentle internal “massage” that calms the nervous system and helps the body shift from stress into ease.',
        points: [
          'Works through a blend of vibration + sound + intention',
          'Guides the system toward balance and deep rest',
          'Completely non-touch therapy'
        ],
        closing: 'Begin your journey into sound, stillness and deep nervous-system restoration.'
      },
      whatYouExperience: [
        'Remain fully clothed while lying comfortably',
        'Singing bowls placed at different points of the body (no touch)',
        'Deep, rhythmic vibrational sounds are played',
        'Cocoon-like environment where emotional tension can soften',
        'Gentle transition back to awareness at the end'
      ],
      whoItIsFor: [
        'Stress, burnout & emotional overload',
        'Muscle tightness or physical tension',
        'Sleep difficulties',
        'Overthinking',
        'Difficulty meditating',
        'Feeling “stuck” or mentally scattered'
      ],
      format: ['One-to-one', 'Couple Session'],
      frequency: '4 weekly sessions are recommended for deeper nervous-system reset and long-term transformation.',
      preSession: [
        'Wear loose, comfortable clothing',
        'Stay hydrated',
        'Avoid caffeine and heavy meals 2 hours prior',
        'Arrive with an open, unhurried mindset'
      ],
      postSession: [
        'Drink plenty of water',
        'Avoid screens, loud environments and overstimulation',
        'Rest or take a light walk',
        'If emotions arise, allow the body to process gently'
      ],
      safety: {
        note: 'Please check before booking if you:',
        conditions: [
          'Are pregnant', 
          'Have a pacemaker or electronic implant', 
          'Experience epilepsy or seizures', 
          'Have blood clotting disorders or vascular issues',
          'Have metal allergies (for bowl placement)'
        ]
      },
      faqs: [
        { question: 'Is there any physical touch involved?', answer: 'No. This is a completely non-touch therapy. Bowls are placed over your clothes, and healing comes from vibration.' },
        { question: 'What should I wear for the session?', answer: 'Loose, comfortable clothing (cotton preferred). Avoid tight or synthetic fabrics.' },
        { question: 'Can I fall asleep during the session?', answer: 'Yes, many people do. Even in sleep, your body benefits fully from the vibrations.' },
        { question: 'What will I feel during the session?', answer: 'Expect gentle vibrations, warmth, tingling or deep relaxation. Every experience is unique and completely natural.' },
        { question: 'Is emotional release normal?', answer: 'Yes. Sound can soften stored tension, so lightness, tears or relief may arise and are part of healthy integration.' },
        { question: 'How many sessions do I need?', answer: 'One session brings relaxation, but 4 weekly sessions are recommended for deeper nervous-system reset.' },
        { question: 'Is it safe for pregnancy?', answer: 'On-body bowl placement is not recommended during pregnancy. Modified off-body sound can be offered after consultation.' },
        { question: 'Do I need meditation experience?', answer: 'Not at all. Sound works naturally even if your mind is busy, no effort or focus required.' }
      ]
    }
  },
  {
    id: 'chakra-sound-balancing',
    title: 'Chakra Sound Balancing : Chakra',
    category: 'Vibrational Therapy',
    shortDescription: 'Balance your energy centres through frequency, breath & mantra.',
    fullDescription: 'A personalised one-to-one session that harmonises the seven chakras using sound frequencies, breathwork, intention and Kundalini beej mantras.',
    duration: '75–90 minutes',
    price: 'Enquire for Pricing',
    image: 'https://images.unsplash.com/photo-1528319725582-ddc0b60ea2d1?q=80&w=2070&auto=format&fit=crop',
    benefits: [
      'Feeling grounded and emotionally centred',
      'Improved clarity and inner alignment',
      'Release of heaviness or emotional blocks',
      'Reduced overthinking and mental clutter',
      'Increased confidence and inner strength',
      'Heightened intuition and awareness',
      'Smoother energetic flow through the body',
      'Renewed sense of purpose, presence and calm'
    ],
    details: {
      whatItIs: {
        description: 'A personalised one-to-one session that harmonises the seven chakras using sound frequencies, breathwork, intention and Kundalini beej mantras. It is gentle yet powerful, helping restore emotional clarity, grounding and energetic flow. Each chakra influences specific emotional patterns, bodily regions and energetic qualities. Stress, overthinking, fear, emotional heaviness and life transitions can cause these centres to become blocked or imbalanced.',
        points: ['Sound frequencies', 'Breathwork', 'Intention', 'Kundalini beej mantras'],
        closing: 'Begin your Chakra Alignment journey and return to your natural inner harmony.'
      },
      whatYouExperience: [
        'Chakra Energy Scan: A gentle assessment to sense which chakras feel open, blocked or out of harmony.',
        'Kundalini Beej Mantra Chanting: Chanting or listening to the seed sounds — LAM · VAM · RAM · YAM · HAM · OM · AUM — to awaken and activate each chakra.',
        'Chakra-Tuned Sound Frequencies: Use of bowls, chimes and handpan tuned to the vibrational fields of each energy centre.',
        'Guided Breathwork for Chakra Activation: Breath practices to open, soften or energise specific chakra points.',
        'Aromatherapy Alignment: Essential oils curated to support grounding, heart-opening or clarity.',
        'On-Body or Off-Body Vibrational Work: Gentle bowl placement (no touch involved) to release stagnation and restore flow.',
        'Energy Harmonisation & Grounding: A soothing closing technique to leave you centred, steady and clear.'
      ],
      whoItIsFor: [
        'Stress or emotional overwhelm',
        'Lack of clarity or direction',
        'Low confidence or creative block',
        'Energetic stagnation or heaviness',
        'Fatigue or feeling disconnected',
        'Curiosity about spiritual or inner work',
        'Life transitions needing grounding'
      ],
      format: ['One-to-one personalised session'],
      frequency: 'Weekly or biweekly for deep alignment. Monthly for maintenance and clarity.',
      preSession: [
        'Wear loose, comfortable clothing',
        'Stay hydrated',
        'Avoid heavy meals for 2 hours before',
        'Arrive relaxed, with no expectations'
      ],
      postSession: [
        'Drink water',
        'Move slowly and gently',
        'Avoid overstimulation or loud environments',
        'Allow emotions, dreams or insights to settle naturally over 24 hours'
      ],
      faqs: [
        { question: 'Do I need understand chakras to attend?', answer: 'No. The session is fully guided and suitable for complete beginners.' },
        { question: 'How do I know if my chakras are imbalanced?', answer: 'Common signs include emotional heaviness, confusion, lack of clarity, low confidence, fatigue, overthinking, or feeling “stuck.”' },
        { question: 'What happens in a Chakra Alignment session?', answer: 'You experience chakra-tuned bowls, guided breathwork, beej mantra chanting, visualisation and optional aromatherapy for each chakra.' },
        { question: 'Do I have to chant the mantras?', answer: 'No. Chanting is optional you may listen, hum, or chant based on comfort.' },
        { question: 'Is there any physical touch involved?', answer: 'No. Bowls may be placed on or off the body, but there is no physical touch.' },
        { question: 'How many sessions do I need?', answer: 'One session offers grounding and clarity. For deeper alignment, 3–7 sessions are recommended.' },
        { question: 'What if I feel emotional during or after the session?', answer: 'This is normal. Chakra work often releases stored tension. Emotions usually settle gently within hours.' },
        { question: 'Will I feel sensations in my body?', answer: 'Possibly. People often feel warmth, tingling, vibration or lightness around specific chakra points, all safe and natural.' }
      ]
    }
  },
  {
    id: 'couples-sound-therapy',
    title: 'Couples Sound Therapy : Dhwani',
    category: 'Shared Journey',
    shortDescription: 'Experience Harmony and Connection with Your Partner Through Sound.',
    fullDescription: 'This 90-minute private, immersive, multi-instrument experience guides you and your partner into deep relaxation, energetic harmony and a shared experience of connection.',
    duration: '75–90 Minutes',
    price: 'Enquire for Pricing',
    image: 'https://images.unsplash.com/photo-1544126592-807daa2b5682?q=80&w=2070&auto=format&fit=crop',
    benefits: [
      'Simultaneous nervous system calming',
      'Emotional synchrony (Breath, Heart, Brainwaves)',
      'Connection without needing to talk',
      'Novelty and routine-breaking "date for the soul"',
      'Improved empathetic communication',
      'Shared resonance and heart attunement',
      'Deeper intimacy at a physiological level',
      'Stress and conflict reduction through regulation'
    ],
    details: {
      whatItIs: {
        description: 'Instead of talking or analysing the relationship, this session uses sound, breath, guided rituals, and shared intention to help both partners slow down, regulate their nervous systems, and meet each other from a calmer, more receptive place.',
        points: [
          'Private, immersive, multi-instrument experience',
          'Shared sound fields synchronize breath and heart rhythms',
          'Healing vibrations create a space for exploration without words',
          'Can be customized for small groups of 6 to 8 couples'
        ],
        closing: 'It’s an experiential gift that strengthens the bond instead of adding clutter.'
      },
      whyItWorks: {
        title: 'Why Couples Should Do It',
        intro: 'A Couple Sound Healing Session is powerful because it works where most relationship challenges begin: the nervous system.',
        points: [
          { title: 'Simultaneous Calm', description: 'Reduced tension encourages a parasympathetic (rest-and-repair) response in both partners at once.' },
          { title: 'Emotional Synchrony', description: 'Sharing a sensory experience aligns breathing patterns, heart-rate rhythms, and brainwave states.' },
          { title: 'Non-Verbal Connection', description: 'Sound healing opens a space where the body softens, the mind quietens, and emotional walls melt.' },
          { title: 'Novelty & Routine Break', description: 'A unique shared experience that brings beauty and meaning beyond daily responsibilities.' },
          { title: 'Pressure-Free Communication', description: 'Creates the emotional conditions for speaking softer, listening better, and feeling more patient.' }
        ]
      },
      whatYouExperience: [
        'Connection Rituals: Intention Exchange, Guided Breathwork & Humming',
        'Chanting Together: Hand-holding exercise to create resonance and closeness',
        'Curated Activities: Couple journaling, gratitude offerings, or letter writing',
        'Sensory Elements: Candle of Connection gazing ritual and Aromatherapy',
        'Multi-Instrument Sound Journey: Side-by-side immersion with Tibetan bowls, gongs, handpan, and chimes',
        'Integration & Reflection: Quiet grounding to carry connection into daily life'
      ],
      whoItIsFor: [
        'Couples needing bonding time in a busy routine',
        'Partners seeking reconnection or emotional reset',
        'Close friends or siblings wanting a shared healing experience',
        'Newlyweds, engaged couples, or new parents',
        'Celebrating anniversaries, birthdays, or milestones',
        'Anyone wanting a meaningful gift beyond material objects'
      ],
      format: ['Private couple session', 'Small groups of 6 to 8 couples'],
      frequency: 'One-time experience or a 3-session relationship reset program.',
      preSession: [
        'Wear loose, comfortable clothing',
        'Avoid heavy meals 2 hours before',
        'Hydrate earlier in the day',
        'Arrive 5–10 minutes early',
        'Come open and unhurried'
      ],
      postSession: [
        'Drink plenty of water',
        'Move gently or walk together',
        'Avoid overstimulation',
        'Let emotions settle naturally',
        'Hold space for softness and clarity in the next 12–24 hours'
      ],
      safety: {
        note: 'Please share medical conditions such as:',
        conditions: [
          'Pregnancy',
          'Pacemaker',
          'Epilepsy',
          'Vascular issues',
          'Metal sensitivities'
        ]
      },
      faqs: [
        { question: 'Do we need prior meditation experience?', answer: 'No. The session is designed for complete beginners. You simply relax, receive and connect.' },
        { question: 'Is the session only for romantic couples?', answer: 'Not at all. It is also perfect for close friends, siblings, parents–children, or any two people wanting a shared bonding experience.' },
        { question: 'What happens during the session?', answer: 'You experience grounding, shared breathwork, connection rituals (like journaling or candle gazing), and a couple-focused sound journey.' },
        { question: 'Do we have to participate in all activities?', answer: 'No. Everything is optional. You can choose the rituals or exercises you’re comfortable with.' },
        { question: 'Will we be lying together or separately?', answer: 'Both are possible. Couples may lie side-by-side, sit together, or choose placements based on comfort.' },
        { question: 'What if one of us feels emotional during the session?', answer: 'Emotional release is normal. Sound often softens stored tension. You will be guided gently and supported throughout.' },
        { question: 'Is this a couple counselling session?', answer: 'No. It is not therapy or counselling. However, it may help improve communication and emotional openness.' },
        { question: 'Can this help with conflict or stress?', answer: 'It helps reduce emotional tension and deepens empathy, but it does not replace professional relationship therapy.' },
        { question: 'Can this be gifted for special occasions?', answer: 'Absolutely. It is a beautiful gift for anniversaries, birthdays, Valentine’s Day, or new parents.' }
      ]
    }
  },
  {
    id: 'sound-manifestation',
    title: 'Sound Manifestation : Sankalpa',
    category: 'Intention Work',
    shortDescription: 'Enter the frequency where manifestation begins.',
    fullDescription: 'A guided sound-healing experience that blends intention, frequency, breathwork, visualisation and subconscious alignment to help you clarify what you want and vibrationally attune yourself to it.',
    duration: '75–90 minutes',
    price: 'Enquire for Pricing',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2070&auto=format&fit=crop',
    benefits: [
      'Clearer understanding of your goals',
      'Increased confidence and emotional alignment',
      'Reduced fear, stress or mental resistance',
      'A felt sense of direction and inner certainty',
      'Deep relaxation and openness',
      'Stronger intuition & decision-making clarity',
      'Heightened focus for days after the session'
    ],
    details: {
      whatItIs: {
        description: 'A Sound Manifestation Session is a guided sound-healing experience that blends intention, frequency, breathwork, visualisation and subconscious alignment. Ancient wisdom says the universe emerged from the sound AUM. Modern neuroscience shows that sound can shift the brain into states where the subconscious becomes open and receptive.',
        points: [
          'Set powerful intentions',
          'Visualise with emotional clarity',
          'Release inner resistance',
          'Align your mind, energy and subconscious with your goals',
          'Plant your manifestation into the “inner field”'
        ],
        closing: 'Begin your Sound Manifestation journey, where clarity meets vibration and intention meets possibility.'
      },
      whyItWorks: {
        title: 'Three Ways Sound Helps Us Manifest',
        intro: 'Manifestation is not just thinking.. it’s alignment. Your mind, emotions and energy must move in the same direction.',
        points: [
          { title: 'Alpha & Theta states', description: 'Guides the brain into states linked to deep relaxation, imagination, intuitive clarity, and subconscious access.' },
          { title: 'Nervous system regulation', description: 'When the body relaxes, resistance drops. Fear, doubt and inner conflict soften.' },
          { title: 'Resonance', description: 'Intentions set while relaxed through sound become clearer and easier for the mind to accept.' }
        ]
      },
      whatYouExperience: [
        'Intention-setting ritual',
        'Sound frequency immersion (bowls, gongs, handpan, chimes)',
        'Goal-writing ritual',
        'Guided visualisation for subconscious activation',
        'Breathwork for emotional alignment',
        'Mantra or humming practices for vibrational clarity',
        'A gentle closing integration'
      ],
      whoItIsFor: [
        'New opportunities or life paths',
        'Personal transformation',
        'Emotional strength & inner grounding',
        'Better health & wellbeing',
        'Abundance and success',
        'Clarity during crossroads',
        'Spiritual growth',
        'Higher self-belief'
      ],
      format: ['One-to-one', 'Small Groups', 'Large Groups', 'Events, circles and retreats'],
      frequency: 'Once a month for clarity. Every 2–3 weeks for specific goals. Powerful for new beginnings.',
      preSession: [
        'Wear loose, comfortable clothing',
        'Stay hydrated throughout the day',
        'Avoid heavy meals 2 hours before the session',
        'Minimise caffeine or stimulants',
        'Bring a journal if you wish to write intentions',
        'Come with openness, no pressure, no expectations'
      ],
      postSession: [
        'Drink plenty of water',
        'Avoid loud environments or screens for at least an hour',
        'Journal any insights, dreams, emotions or clarity that emerges',
        'Spend some quiet time resting or walking',
        'Revisit your intention daily with calm breathing or humming',
        'Avoid alcohol or anything that overstimulates the nervous system'
      ],
      safety: {
        note: 'This session is gentle and generally safe for all. Please inform us beforehand if you:',
        conditions: [
          'Are pregnant',
          'Have a pacemaker or sound sensitivity',
          'Experience epilepsy or seizure conditions',
          'Are sensitive to loud vibrations or gongs'
        ]
      },
      faqs: [
        { question: 'What if I don’t know what I want to manifest?', answer: 'That’s okay. The session helps you gain clarity through sound, visualisation and inner exploration.' },
        { question: 'Will I need to speak my intention out loud?', answer: 'No. You can share it if you wish, but silent intentions work equally well.' },
        { question: 'Will I get specific results immediately?', answer: 'Manifestation rarely works like a switch. You may notice clarity, emotional alignment, reduced resistance, intuitive nudges, and increased motivation.' },
        { question: 'What if I fall asleep during the session?', answer: 'It’s perfectly fine. The subconscious absorbs the experience even when the conscious mind rests.' },
        { question: 'Is this the same as Sound Healing?', answer: 'It is similar, but more intention-driven. The focus is not just relaxation — it’s alignment and clarity.' },
        { question: 'Can Sound Manifestation replace action?', answer: 'No. Sound aligns your energy and clarity — you still take action, but with far less resistance.' }
      ]
    }
  },
  {
    id: 'one-on-one-sound-therapy',
    title: 'One on One Sound Therapy',
    category: 'Bespoke Care',
    shortDescription: 'Private sessions offer deep nervous-system work, emotional clarity and energetic alignment in a safe, structured environment.',
    fullDescription: 'A personalised session that uses intention + tailored frequencies to support emotional regulation and inner alignment, interacting with the body and brain in measurable ways.',
    duration: '75–90 minutes',
    price: 'Enquire for Pricing',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070&auto=format&fit=crop',
    benefits: [
      'Emotional regulation and inner alignment',
      'Deep nervous-system work',
      'Release of physical tension',
      'Creative and emotional processing',
      'Alpha & Theta brainwave access',
      'Measurable interaction with body and brain'
    ],
    details: {
      whatItIs: {
        description: 'Private sessions offer deep nervous-system work, emotional clarity and energetic alignment in a safe, structured environment. Sound interacts with the body and brain in measurable ways, using intention and tailored frequencies to support your unique journey.',
        points: [
          'Personalised, in-studio or home studio experience',
          'Safe and structured environment',
          'Targeted therapeutic sound work',
          'Bespoke care for physical or emotional goals'
        ],
        closing: 'Aumkaar awaits you. Enquire now to begin your personalised session.'
      },
      whyItWorks: {
        title: 'Why One-to-One Sound Work Goes Deeper',
        intro: 'Sound interacts with the body and brain in measurable ways:',
        points: [
          { title: 'Water Conductivity', description: 'The human body is ~70% water — an excellent conductor of vibration.' },
          { title: 'Brainwave Entrainment', description: 'Stable, harmonic tones help guide the mind into alpha & theta brainwave states, associated with deep relaxation, creativity, and emotional processing.' },
          { title: 'Physical Release', description: 'Vibrations travel through tissues, muscles and fluids, helping the body soften and release tension.' },
          { title: 'Personalised Resonance', description: 'A personalised session uses intention + tailored frequencies to support emotional regulation and inner alignment.' }
        ]
      },
      whatYouExperience: [
        'Tibetan Sound Massage: A vibration-based therapy where bowls placed on the body create deep physical relaxation and nervous-system calm.',
        'Sound Healing (Multi-Instrument Session): A personalised blend of Tibetan Sound Massage and gongs, Chimes, Drums and handpan designed to release emotional tension and restore inner balance.',
        'Chakra Alignment Sound Session: A frequency-focused session using chakra-tuned instruments and Kundalini Mantras Chanting to harmonise energy centres and support emotional clarity.',
        'Sound Manifestation: A guided experience that blends intention, frequency, and subconscious alignment to help you clarify what you want.'
      ],
      format: ['Private, personalised, in-studio/home studio sessions'],
      frequency: 'Weekly or bi-weekly recommended. 5–8 sessions suggested for deeper transformation. Single Sessions are available for reset/maintenance.',
      safety: {
        note: 'Please consult before booking if you have:',
        conditions: [
          'Pacemaker',
          'Epilepsy',
          'Serious vascular disorders',
          'Blood clotting issues',
          'Pregnancy (for on-body work)',
          'Metal allergy'
        ]
      }
    }
  },
  {
    id: 'private-group',
    title: 'Private Group Unique Offerings',
    category: 'Small Circles',
    shortDescription: 'A shared, immersive sound experience designed for small groups, families, friends, or intimate communities.',
    fullDescription: "Whether you're gathering for relaxation, bonding, celebration, or emotional reset, a group sound healing session creates a calm, restorative space where everyone can unwind together and experience collective harmony.",
    duration: '75–90 mins',
    price: 'Custom Pricing',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2070&auto=format&fit=crop',
    benefits: [
      'Shared sound fields create a sense of unity',
      'Collective relaxation encourages deeper calm',
      'Participants feel supported by the group’s energy',
      'Unique, memorable experience for all ages',
      'Emotional softening and group harmony',
      'Synchronised energy through shared vibration'
    ],
    details: {
      whatItIs: {
        description: "A shared, immersive sound experience designed for small groups, families, friends, or intimate communities. The sound journey is customized to your group's unique intention, fostering collective relaxation and bonding.",
        points: [
          'Personalised Group Intentions',
          'Connection & Grounding rituals',
          'Immersive Sound Journey'
        ],
        closing: 'It’s a thoughtful alternative to traditional celebrations, meaningful, grounding, and memorable.'
      },
      whyItWorks: {
        title: "Why Groups Love This",
        points: [
          { title: "Unity", description: "Shared sound fields create a sense of unity and emotional connection." },
          { title: "Calm", description: "Collective relaxation encourages deeper calm than individual practice." },
          { title: "Support", description: "Participants feel supported by the group’s shared energy." },
          { title: "Inclusivity", description: "A unique experience that everyone can enjoy regardless of age or experience." }
        ]
      },
      sessionFlow: [
        { title: "Welcome & Soft Arrival", description: "Guests arrive, settle into the space with optional herbal tea or infused water." },
        { title: "Setting the Atmosphere", description: "A brief introduction to sound healing and the specific intention of the session." },
        { title: "Group Grounding Ritual", description: "A gentle activity like guided breathwork or light humming to bring the group into the same energy." },
        { title: "Celebration Ritual", description: "Sharing blessings for a birthday person or setting a collective intention for the group." },
        { title: "Immersive Sound Journey", description: "45 to 60 minutes of spacious soundscapes using Tibetan bowls, gongs, handpan, and chimes." },
        { title: "Mini Reflection Circle", description: "A gentle return to awareness with an optional sharing of gratitude or feelings." },
        { title: "Celebration Moment", description: "Cake cutting, birthday wish rituals, and group photos with the instruments." }
      ],
      whoItIsFor: [
        'Friends’ gatherings & Wellness kitty parties',
        'Family bonding & Birthday celebrations',
        'Anniversaries & Pre-wedding rituals',
        'Wedding morning calm',
        'Community circles & Retreat activities',
        'Corporate teams'
      ],
      format: [
        'Designed for small groups of around 20 people',
        'Available indoors or outdoors',
        'Location flexibility: home, private venue, or dedicated studio'
      ]
    }
  },
  {
    id: 'mind-management-session',
    title: 'Mind Management Session : Manas',
    category: 'Coaching',
    shortDescription: 'Clear mental clutter. Regulate emotions. Access calm, focused states on demand.',
    fullDescription: 'The Mind Management Session is your reset. A practical, science-backed, spiritually grounded process that helps your mind finally work for you and not against you.',
    duration: '3 hours',
    price: 'Enquire for Pricing',
    image: 'https://images.unsplash.com/photo-1499209974431-9dac3adaf471?q=80&w=2070&auto=format&fit=crop',
    benefits: [
      'Deep mental calm and emotional lightness',
      'Reduced overthinking and looping thoughts',
      'Improved focus and reduced procrastination',
      'Better decision-making and inner confidence',
      'Greater emotional resilience',
      'Clarity about goals and inner direction',
      'A calmer baseline state through the week',
      'Better sleep and reduced stress response'
    ],
    details: {
      whatItIs: {
        description: 'A transformational inner system that helps you clear deep mental clutter, regulate emotions before they spiral, and shift brainwave states from stressed Beta into calm, creative Alpha. It rebalances your nervous system and helps you build a simple daily mind ritual.',
        points: [
          'Clear deep mental clutter that blocks clarity',
          'Regulate your emotions before they spiral into anxiety',
          'Shift brainwave states from stressed Beta to creative Alpha',
          'Build a simple daily mind ritual to stay centered'
        ],
        closing: 'This is a system for managing the mind, not just a practice.'
      },
       whatYouExperience: [
        'Guided mental clutter release',
        'Breathwork for emotional regulation',
        'Sound frequency alignment',
        'Subconscious re-patterning visualisation',
        'Micro-journaling for clarity',
        'Goal & focus tools inspired by Japanese principles',
        'Anti-procrastination micro-sprints',
        'Emotional grounding & nervous-system balancing',
        'Learning a 10-minute daily routine to maintain a clear mind'
      ],
      whoItIsFor: [
        'Overthinking or racing thoughts',
        'Stress, burnout or emotional heaviness',
        'Mental overwhelm or scattered thinking',
        'Anxiety, worry or nervous tension',
        'Chronic procrastination or lack of focus',
        'Difficulty making decisions',
        'Digital overload and overstimulation',
        'Pressure from work, family or performance',
        'Students and Professionals with busy lifestyles'
      ],
      format: ['Small Groups', 'Large Groups', 'Personalised individual sessions'],
      preSession: [
        'Wear comfortable clothing',
        'Bring a notebook (optional)',
        'Stay hydrated',
        'Come with an open mind'
      ],
      postSession: [
        'Integrate your 10-minute daily mental hygiene routine',
        'Notice shifts in your focus and decision-making',
        'Drink water and rest as the tools integrate'
      ],
      faqs: [
        { question: 'Do I need any prior meditation or psychological training?', answer: 'No. Mind Management is simple, guided and designed for beginners as well as regular practitioners.' },
        { question: 'How is Mind Management different from meditation?', answer: 'Meditation is one part of the process. Mind Management gives you structured, practical tools to handle overthinking, emotional overload, procrastination, and lack of clarity.' },
        { question: 'How many sessions do I need?', answer: 'A single session offers clarity and reset. You learn tools you can use daily.' },
        { question: 'Is this therapy or counselling?', answer: 'No. Mind Management is a wellness-based, non-clinical approach using breathwork, mindset techniques, sound and awareness tools.' },
        { question: 'Will this help with anxiety or stress?', answer: 'It may help reduce mental load, calm the nervous system, and give tools for daily emotional regulation, but it is not a medical or psychological treatment.' },
        { question: 'Is this suitable for professionals with busy lifestyles?', answer: 'Absolutely. It is designed for employees, leaders, entrepreneurs, and anyone dealing with digital fatigue.' },
        { question: 'Will I get a routine to follow after the session?', answer: 'Yes. You receive a personalised 10-minute daily mental hygiene routine to maintain clarity and emotional stability.' }
      ]
    }
  },
  {
    id: 'tai-chi',
    title: 'Tai Chi : Meditation',
    category: 'Movement',
    shortDescription: 'Slow Movement. Deep Calm. Powerful Balance.',
    fullDescription: 'Tai Chi is a gentle, flowing mind-body practice that helps release stress, improve balance, and restore inner harmony through slow, intentional movements.',
    duration: '30 to 45 minutes',
    price: 'Enquire for Pricing',
    image: 'https://images.unsplash.com/photo-1518331483807-f671ed196885?q=80&w=2070&auto=format&fit=crop',
    benefits: [
      'Releasing muscular and emotional tension',
      'Improving posture and spinal alignment',
      'Enhancing balance, coordination and mobility',
      'Activating the parasympathetic “rest and restore” system',
      'Slowing down the mind through rhythmic movement',
      'Increasing energy (Qi) circulation throughout the body'
    ],
    details: {
      whatItIs: {
        description: 'Often described as “meditation in motion,” Tai Chi trains the body and brain to move with ease, stability and awareness, making it one of the most effective practices for modern stress, anxiety and fatigue.',
        points: [
          'Blends traditional Tai Chi principles with a minimalist, accessible approach',
          'Suitable for all ages, fitness levels and body types'
        ],
        closing: 'It helps you feel lighter, calmer and more centered, even on busy days.'
      },
      whyItWorks: {
        title: 'Why Tai Chi Helps',
        intro: 'Modern stress keeps the body tense and the mind restless. Tai Chi reverses this by:',
        points: [
          { description: 'Releasing muscular and emotional tension' },
          { description: 'Improving posture and spinal alignment' },
          { description: 'Enhancing balance, coordination and mobility' },
          { description: 'Activating the parasympathetic “rest and restore” system' },
          { description: 'Slowing down the mind through rhythmic movement' },
          { description: 'Increasing energy (Qi) circulation throughout the body' }
        ]
      },
      whatYouExperience: [
        'Foundational Tai Chi Warm-Up: Gentle mobility exercises to loosen joints, relax shoulders and prepare the body for flow.',
        'Breath–Body Synchronisation: Learning to match each movement with breath to regulate the nervous system and calm the mind.',
        'Slow Flow Tai Chi Sequences: Simple, graceful movements that create balance, improve coordination and release stress.',
        'Balance & Grounding: Techniques that improve stability, posture and body awareness.',
        'Mindfulness Through Motion: Teaching the mind to stay present and alert while moving, reducing overthinking and mental fatigue.',
        'Energy (Qi) Activation Practices: Movements that stimulate natural energy flow, helping you feel refreshed, centered and energised.'
      ],
      whoItIsFor: [
        'Professionals dealing with work stress',
        'Individuals with stiffness, fatigue or low mobility',
        'Beginners seeking a gentle movement practice',
        'Anyone wanting better balance & body awareness',
        'People who prefer meditative exercise over intense workouts',
        'Seniors or those recovering from burnout',
        'Yoga / fitness practitioners wanting deeper grounding',
        'Corporate groups seeking a powerful shared experience of calm and clarity'
      ],
      format: ['Small groups', 'Large Groups', 'Corporate Wellness'],
      preSession: [
        'Wear comfortable clothing',
        'Stay hydrated'
      ],
      faqs: [
        { question: 'Do I need any prior experience to learn Tai Chi?', answer: 'No. Tai Chi at Aumkaar is beginner-friendly and taught slowly, with clear guidance for all levels.' },
        { question: 'What makes Tai Chi different from yoga or traditional fitness?', answer: 'Tai Chi is meditation in motion, gentle, flowing movements that regulate breath, balance the body, calm the mind and reconnect you with natural elements. It focuses more on inner flow than physical flexibility or strength.' },
        { question: 'Is Tai Chi physically demanding?', answer: 'No. The movements are soft, slow and accessible. Suitable for all ages, energy levels, and body types.' },
        { question: 'Is Tai Chi suitable for older adults or those with injuries?', answer: 'Yes, it is one of the safest movement practices. Movements can be modified to fit all physical conditions. Please share any concerns before the session.' },
        { question: 'How many sessions do I need to see changes?', answer: 'You may feel calmer after the first session. For deeper balance and flow, weekly practice is recommended.' },
        { question: 'Is Tai Chi a spiritual practice?', answer: 'It can be, if you choose. At Aumkaar, we teach Tai Chi as movement meditation, helping you reconnect with breath, energy, and the natural elements within the body.' }
      ]
    }
  },
  {
    id: 'corporate-sound-healing',
    title: 'Corporate Sound Healing & Sound Bath',
    category: 'Corporate Wellness',
    shortDescription: 'Scientifically supported nervous system reset for high-performance teams.',
    fullDescription: 'In-office or offsite sessions designed to reduce workplace stress, boost productivity and provide a collective moment of deep rest.',
    duration: '60–90 Minutes',
    price: 'Custom Quote',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop',
    benefits: [
      'Reduced team burnout and exhaustion',
      'Enhanced collective focus and clarity',
      'Improved office morale and collaboration',
      'Lowered stress-related absenteeism',
      'Nervous-system reset for high-stress groups',
      'Effortless alternative to traditional meditation'
    ],
    details: {
      whatItIs: {
        description: 'Modern workplaces are experiencing record levels of stress. Sound healing offers a scientifically supported and effortless way to reset the nervous system, reduce stress and restore clarity helping employees feel calmer, think sharper and collaborate better.',
        points: [
          'Collective moment of deep rest',
          'Scientifically supported reset',
          'Restores focus and emotional resilience',
          'Addresses root cause of mental fatigue'
        ],
        closing: 'Give your team the calm, clarity and reset they need.'
      },
      whyItWorks: {
        title: 'Why Corporates Need Sound Healing Right Now',
        intro: 'Stress has become a silent form of corporate suffering with measurable impacts:',
        points: [
          { title: 'Global Mental Health Rise', description: 'According to WHO, depression and anxiety increased by ~25% globally since the pandemic.' },
          { title: 'Burnout Crisis', description: 'Burnout affects up to 77% of employees worldwide, leading to chronic fatigue and weakened focus.' },
          { title: 'Productivity Impact', description: 'Corporate costs related to stress, absenteeism, and disengagement are rising dramatically.' },
          { title: 'Traditional Method Gaps', description: 'Gym memberships often don’t address the root: nervous-system overload and mental fatigue.' }
        ]
      },
      whatYouExperience: [
        'Monthly Stress-Reset Sessions (45–60 mins) for recurring nervous system balance.',
        'Weekly “Midweek Reset” or “Mindful Mondays” short micro-sessions.',
        'Department-Specific Sessions for teams under peak stress (HR, Sales, Finance).',
        'Wellness Day or HR Initiative highlights and retreats.',
        'Pre-Project or Post-Project resets to prepare or decompress teams.',
        'Immersive Sound Bath group journeys (100+ participants).',
        'Focused Sound Healing Therapy for smaller teams (5–30 members).'
      ],
      whoItIsFor: [
        'Busy employees seeking a low-effort reset',
        'High-performance teams dealing with record burnout',
        'Leaders wanting to improve office morale and connectivity',
        'Introverts and neurodiverse team members who thrive in quiet spaces',
        'Professionals suffering from decision fatigue or shrinking attention spans'
      ],
      format: [
        'Sound Bath (Group Session): Immersive journey for 10 to 100+ participants',
        'Sound Healing (Focused Therapy): Best for smaller or team-specific groups (5–30)',
        'Delivered at your office, chosen venue, or retreat location',
        'Can be done seated or lying down based on space availability'
      ],
      preSession: [
        'Wear comfortable clothing',
        'Arrive with openness and no expectations',
        'Avoid heavy meals or intense calls immediately before the session',
        'Stay hydrated throughout the day'
      ],
      faqs: [
        { question: 'Is this suitable for all employees?', answer: 'Yes. Sound sessions are gentle, inclusive and require no fitness level, prior experience or special skills. They are ideal for all ages, roles, and personality types.' },
        { question: 'How many employees can join a session?', answer: ['Sound Bath: 10 to 100+ participants', 'Sound Healing: Best for small to mid-sized teams (5–30)', 'We can customise based on your space and group size.'] },
        { question: 'What space do we need in the office?', answer: 'Any open area such as a conference room, auditorium, cafeteria, or wellness space. Employees can sit or lie down depending on what the company prefers.' },
        { question: 'Do employees need to bring anything?', answer: 'No. We bring all instruments. Optional: Employees may bring a mat, shawl or eye mask for comfort.' },
        { question: 'What’s the difference between Sound Bath and Sound Healing?', answer: 'Sound Bath is a relaxing group immersion experience. Sound Healing is a deeper session where bowls are placed near the body so vibrations can be felt, ideal for smaller teams.' },
        { question: 'How quickly will employees feel the benefits?', answer: 'Most people feel calmer, lighter and mentally clearer within the first 10–15 minutes. The effects can last from hours to several days.' },
        { question: 'Can this help with burnout or high-pressure cycles?', answer: 'Yes. Sound therapy helps regulate the nervous system, reduce mental exhaustion, and reset focus making it highly effective during intense work periods.' },
        { question: 'Is the session safe for everyone?', answer: 'Generally yes, but employees with pacemakers, implants, epilepsy, or late-stage pregnancy should check with us beforehand. Modified options can be provided.' },
        { question: 'Can we host this during office hours?', answer: 'Absolutely. Many companies integrate it into Wellness Wednesdays, Mindful Mondays, or end-of-quarter resets.' },
        { question: 'How is this different from meditation?', answer: 'Traditional meditation requires focus. Sound healing requires no effort—the sound does the work. This makes it ideal for busy employees or those who struggle to meditate.' }
      ]
    }
  },
  {
    id: 'team-harmony',
    title: 'Team Sound Circle : Sangha',
    category: 'Corporate Wellness',
    shortDescription: 'A Sonic Journey Bringing Every Team Member Into the Same Rhythm.',
    fullDescription: 'The Sound Circle is a guided group experience where teams sit together in a circle and receive therapeutic sound vibrations, removing roles and rank to create instant psychological safety.',
    duration: '60–90 minutes',
    price: 'Custom Quote',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
    benefits: [
      'Shared Brainwave Synchronisation (Alpha & Theta)',
      'Removal of Hierarchy and Spotlight',
      'Inclusive connection for all personality types',
      'Immediate and noticeable collective calm',
      'Stress and burnout reduction',
      'Enhanced team bonding without forced activity'
    ],
    details: {
      whatItIs: {
        description: 'The Sound Circle is a guided group experience where teams sit together in a circle and receive therapeutic sound vibrations through instruments like Tibetan singing bowls, crystal bowls, chimes and vocal tones. The circle itself represents equal energy, equal presence, and equal importance. This creates one of the most powerful tools for team building, emotional bonding and collective clarity.',
        points: [
          'Shared Brainwave Synchronisation guides the entire team into collective calm',
          'No Hierarchy, No Spotlight: removing roles and rank so everyone connects equally',
          'Inclusive for all personality types (introverts, extroverts, leaders)',
          'Instant psychological safety as everyone receives and rests together'
        ],
        closing: '“When a team vibrates together, it works together.”'
      },
      whyItWorks: {
        title: 'Why Teams Need This Now',
        intro: 'Where communication connects minds, sound connects nervous systems. Sound builds team harmony in a way words alone cannot, addressing:',
        points: [
          { description: 'Rising workplace stress & burnout' },
          { description: 'Low emotional bandwidth' },
          { description: 'Fatigue from constant decision-making' },
          { description: 'Reduced empathy & patience' },
          { description: 'Difficulty bonding in hybrid environments' }
        ]
      },
      whatYouExperience: [
        'Collective reset into a shared mental and emotional state.',
        'Zero-skill required bonding experience that employees talk about for months.',
        'Immediate, noticeable calm through group vibrational resonance.',
        'Alignment and refreshment without forced or awkward activities.',
        'A sonic journey designed to bring every team member into the same rhythm.'
      ],
      whoItIsFor: [
        'Corporate wellness days and leadership offsites',
        'HR initiatives and team-building events',
        'Leadership retreats seeking deep restoration',
        'Teams recovering from high-performance cycles',
        'Groups looking for recurring monthly wellbeing sessions'
      ],
      format: [
        'Small teams to large groups (customised as per need)',
        'On-site at your office',
        'Offsite venue / retreat',
        'Indoor or outdoor setup'
      ]
    }
  },
  {
    id: 'sfl-program',
    title: 'SFL : Stress Free Living Program',
    category: 'Corporate Wellness',
    shortDescription: 'A science-backed, experiential wellbeing program combining Mind Management, Sound Healing & Tai Chi to help organisations reduce stress, improve focus, and build resilient teams.',
    fullDescription: 'In today’s workplace, mental and emotional overload has become a silent productivity killer. Nearly 75% of employees report experiencing burnout, and anxiety and depression increased by almost 25% post-pandemic. The SFL Program offers a structured solution designed specifically for modern workplaces to reduce stress, regulate the nervous system, enhance clarity, and build long-term emotional resilience.',
    duration: '4 hours',
    price: 'Custom Quote',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop',
    benefits: [
      'Better clarity = fewer mistakes',
      'Better focus = higher productivity',
      'Better emotional balance = healthier teams',
      'Better stress recovery = lower burnout',
      'Better mental organisation = faster execution',
      'Better presence = improved client relationships'
    ],
    details: {
      whatItIs: {
        description: 'A 3-in-1 holistic, evidence-informed wellbeing experience. This is not a motivational workshop. It is a practical mind-body system that teaches employees how to manage stress in real time.',
        points: [
          '1. Mind Management: Tools to manage mental load, reduce overthinking, and create clarity.',
          '2. Sound Healing for Stress Reset: A deeply calming sound journey using bowls, chimes, gongs, and handpan.',
          '3. Tai Chi for Energy & Focus: Gentle, slow, mindful movements that help employees reconnect with their body, breath and balance.'
        ],
        closing: 'When all three align, stress reduces naturally and sustainably.'
      },
      whyItWorks: {
        title: 'Why SFL Works',
        intro: 'Stress is not just a mental problem, it’s a nervous-system, emotional and energetic issue. SFL address all three dimensions:',
        points: [
          { title: 'Mind Management', description: 'Address the thoughts to reduce mental load and create cognitive clarity.' },
          { title: 'Sound Healing', description: 'Address the emotions and bypass mental resistance to shift the team into a calmer state.' },
          { title: 'Tai Chi', description: 'Address the body, teaching the skill of "moving calm" which is essential for high-pressure environments.' }
        ]
      },
       whatYouExperience: [
        'Cognitive clarity techniques and subconscious de-cluttering visualisation.',
        'Anti-procrastination & focus protocols.',
        'Learning a 10-minute daily “mental hygiene routine”.',
        'Tools to invoke the Mind’s potential.',
        'Activation of Alpha/Theta brainwave states for clarity and nervous-system recovery.',
        'Reduction of physical tension in the neck, shoulders, and back.',
        'Increased present-moment awareness through slow, rhythmic movement.',
        'Better posture and energy flow throughout the system.'
      ],
      whoItIsFor: [
        'Corporates and Startups',
        'Educational institutions',
        'Creative teams',
        'Leadership groups',
        'Wellness retreats & offsites'
      ],
      format: [
        'One-time intensive experience (4 hours)',
        'Monthly/quarterly wellbeing module',
        'Retreat-style half-day or full-day format'
      ]
    }
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'science-of-meditation',
    title: 'The Silence Within: Understanding Meditation',
    date: 'Oct 15, 2023',
    author: 'Karan',
    category: 'Mind Management',
    readTime: '6 min read',
    excerpt: 'Explore how simple stillness can reshape your brain, reduce stress, and restore emotional clarity in a noisy world.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1000&auto=format&fit=crop',
    content: React.createElement('div', { className: "space-y-6" },
      React.createElement('p', null, "In a world that demands our attention every second, silence has become a luxury. We are constantly \"on\"—responding to notifications, managing expectations, and navigating a landscape of information overload. But what happens to the brain when we finally stop?"),
      React.createElement('h3', { className: "text-2xl font-serif text-[#A05035] mt-8" }, "The Neurobiology of Calm"),
      React.createElement('p', null, "Modern neuroscience shows that meditation isn't just \"relaxing.\" It actually changes the physical structure of your brain. Regular practice has been linked to increased gray matter in the prefrontal cortex—the area responsible for executive function, decision-making, and emotional regulation."),
      React.createElement('blockquote', { className: "border-l-4 border-[#A05035] pl-6 py-2 italic text-2xl font-serif text-[#3E2723]/70 my-10" }, 
        "\"The goal of meditation isn't to control your thoughts, it's to stop letting them control you.\""
      ),
      React.createElement('h3', { className: "text-2xl font-serif text-[#A05035]" }, "Beyond Stress Reduction"),
      React.createElement('p', null, "While stress reduction is the most commonly cited benefit, meditation offers deeper rewards:"),
      React.createElement('ul', { className: "list-disc pl-6 space-y-3" },
        React.createElement('li', null, React.createElement('strong', null, "Emotional Resilience:"), " Learning to observe emotions without being consumed by them."),
        React.createElement('li', null, React.createElement('strong', null, "Improved Focus:"), " Training the brain to stay present in a distracted age."),
        React.createElement('li', null, React.createElement('strong', null, "Better Sleep:"), " Calming the nervous system before rest to improve sleep architecture.")
      ),
      React.createElement('p', null, "At Aumkaar, we believe that mind management is a daily hygiene. Just as we wash our bodies, we must clear the mental clutter that builds up through the day.")
    )
  },
  {
    id: 'power-of-sound',
    title: 'Frequency for the Soul: Why Sound Healing Works',
    date: 'Oct 28, 2023',
    author: 'Gyandeep',
    category: 'Sound Therapy',
    readTime: '5 min read',
    excerpt: 'Discover the ancient wisdom and modern physics behind vibrational therapy and how it interacts with the human body.',
    image: 'https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?q=80&w=1000&auto=format&fit=crop',
    content: React.createElement('div', { className: "space-y-6" },
      React.createElement('p', null, "Everything in the universe is in a state of vibration. From the furthest stars to the atoms in your body, everything has a frequency. When these frequencies fall out of harmony, we experience what we call \"dis-ease\" or stress."),
      React.createElement('h3', { className: "text-2xl font-serif text-[#A05035] mt-8" }, "The Water Connection"),
      React.createElement('p', null, "The human body is approximately 70% water. Sound travels four times faster through water than through air. When we use Himalayan singing bowls or gongs, the vibrations aren't just hitting your ears—they are physically moving through every cell of your body."),
      React.createElement('p', null, "This creates a \"micro-massage\" for the internal organs and tissues, helping to release physical tension that the mind might not even be aware of."),
      React.createElement('h3', { className: "text-2xl font-serif text-[#A05035]" }, "Brainwave Entrainment"),
      React.createElement('p', null, "One of the most powerful aspects of sound healing is a process called entrainment. When the brain is exposed to a stable, harmonic frequency, it naturally attempts to match that frequency."),
      React.createElement('ul', { className: "list-disc pl-6 space-y-3" },
        React.createElement('li', null, React.createElement('strong', null, "Alpha States:"), " Relaxed, creative, and calm."),
        React.createElement('li', null, React.createElement('strong', null, "Theta States:"), " Deep meditation, where the body's natural healing mechanisms are most active.")
      ),
      React.createElement('p', null, "For those who find traditional \"silent\" meditation difficult, sound healing provides a shortcut—a sonic anchor that holds the attention and gently guides the mind into a restorative state.")
    )
  }
];

export const TEAM: TeamMember[] = [
  {
    id: 'gyandeep',
    name: 'Gyandeep',
    role: 'Meditation Practitioner • Sound Healer',
    bio: 'Gyandeep’s spiritual journey began at the age of 18, and since 2013 she has been training in meditation under the direct guidance of Sadguru Ramesh ji.',
    image: 'https://i.ibb.co/KzVG78yh/Copy-of-IMG-0563.jpg'
  },
  {
    id: 'karan',
    name: 'Karan',
    role: 'Mindset Coach • Mind Management Specialist',
    bio: 'Karan’s journey into inner mastery began in 2016, focusing on how the mind shapes our thoughts and reality.',
    image: 'https://i.ibb.co/210FJyPb/Copy-of-IMG-0536.jpg'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  { id: '1', name: 'Sarah Jenkins', location: 'London', text: 'The most profound relaxation I have ever experienced.' },
  { id: '2', name: 'Michael Chen', location: 'New York', text: 'Aumkaar\'s atmosphere is pure magic. The world slows down.' },
  { id: '3', name: 'Elena Rossi', location: 'Milan', text: 'Gyandeep is a true master of vibrational therapy.' }
];
