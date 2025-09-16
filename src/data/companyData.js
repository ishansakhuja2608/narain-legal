export const companyData = {
  companyInfo: {
    name: "Narain Legal",
    slogan: "Where Justice Meets Excellence",
    description: "Based in London, Narain Legal is one of the finest international dispute resolution centres globally. We offer modern and fully-equipped rooms for arbitrations, mediations, conferences, training and Public Inquiries.",
    vision: "Better conflicts result in better outcomes leading to a better world.",
    address: "123 Legal District, London EC4A 1DE",
    phone: "+44 20 7946 0958",
    email: "info@narainlegal.com"
  },

  navigation: [
    { name: "About", href: "#about", id: "about" },
    { name: "Facilities", href: "#facilities", id: "facilities" },
    { name: "Services", href: "#services", id: "services" },
    { name: "Rooms", href: "#rooms", id: "rooms" },
    { name: "Book Online", href: "#contact", id: "contact", primary: true }
  ],

  facilities: [
    {
      id: 1,
      name: "Client Services",
      icon: "fas fa-users",
      description: "Comprehensive client support and consultation services",
      details: "Our dedicated client services team provides personalized support throughout the entire dispute resolution process."
    },
    {
      id: 2,
      name: "Hybrid Hearings",
      icon: "fas fa-video",
      description: "Combining in-person and virtual participants seamlessly",
      details: "State-of-the-art technology allows for seamless integration of remote and in-person participants."
    },
    {
      id: 3,
      name: "Virtual Hearings",
      icon: "fas fa-laptop",
      description: "Fully remote arbitration and mediation services",
      details: "Secure, professional virtual hearing capabilities with advanced video conferencing technology."
    },
    {
      id: 4,
      name: "Video Conferencing",
      icon: "fas fa-camera",
      description: "State-of-the-art video conferencing technology",
      details: "High-definition video systems with recording capabilities and secure transmission protocols."
    },
    {
      id: 5,
      name: "IDRC Opus 2 Suite",
      icon: "fas fa-cogs",
      description: "Advanced case management and document handling",
      details: "Comprehensive case management system for efficient document handling and workflow management."
    },
    {
      id: 6,
      name: "Rooms",
      icon: "fas fa-building",
      description: "Modern, fully-equipped hearing and meeting rooms",
      details: "Professional hearing rooms equipped with the latest technology and comfortable furnishings."
    },
    {
      id: 7,
      name: "Accommodation",
      icon: "fas fa-bed",
      description: "Comfortable accommodation for out-of-town participants",
      details: "Convenient accommodation options for participants traveling from outside London."
    },
    {
      id: 8,
      name: "Court Reporting",
      icon: "fas fa-file-alt",
      description: "Professional court reporting and interpretation services",
      details: "Certified court reporters and professional interpreters available for all proceedings."
    }
  ],

  rooms: [
    {
      id: 1,
      name: "Arbitration/Hearing Rooms",
      description: "State-of-the-art arbitration facilities with modern technology and comfortable seating arrangements",
      image: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      features: ["Advanced AV equipment", "Comfortable seating", "Natural lighting", "Secure environment"],
      capacity: "Up to 50 participants",
      technology: ["HD displays", "Audio recording", "Document cameras"]
    },
    {
      id: 2,
      name: "Retiring Rooms",
      description: "Private spaces for deliberation and confidential discussions during proceedings",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      features: ["Complete privacy", "Comfortable furnishing", "Refreshment facilities", "Wi-Fi access"],
      capacity: "Up to 12 participants",
      technology: ["Secure communications", "Private entrance", "Climate control"]
    },
    {
      id: 3,
      name: "Virtual & Hybrid Hearings",
      description: "Cutting-edge technology for remote and hybrid arbitration proceedings",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      features: ["HD video systems", "Secure connections", "Recording capabilities", "Multi-point connectivity"],
      capacity: "Unlimited virtual participants",
      technology: ["Cloud-based platform", "End-to-end encryption", "Real-time collaboration"]
    },
    {
      id: 4,
      name: "Mediation Rooms",
      description: "Intimate settings designed to facilitate productive mediation discussions",
      image: "https://images.unsplash.com/photo-1545987796-200677ee1011?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      features: ["Flexible layouts", "Calming environment", "Breakout spaces", "Natural lighting"],
      capacity: "Up to 20 participants",
      technology: ["Presentation systems", "Wireless connectivity", "Audio enhancement"]
    }
  ],

  stats: [
    {
      number: 500,
      suffix: "+",
      label: "Cases Resolved",
      icon: "fas fa-gavel",
      description: "Successfully resolved disputes across various industries"
    },
    {
      number: 98,
      suffix: "%",
      label: "Client Satisfaction",
      icon: "fas fa-star",
      description: "Consistently high satisfaction ratings from our clients"
    },
    {
      number: 25,
      suffix: "+",
      label: "Years Experience",
      icon: "fas fa-calendar-alt",
      description: "Decades of expertise in dispute resolution"
    },
    {
      number: 50,
      suffix: "+",
      label: "Expert Arbitrators",
      icon: "fas fa-user-tie",
      description: "Highly qualified and experienced arbitrators on our panel"
    }
  ],

  testimonials: [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Corporate Counsel",
      company: "Global Tech Solutions",
      content: "Narain Legal provided exceptional arbitration services. Their modern facilities and professional staff made our complex dispute resolution smooth and efficient.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "Managing Partner",
      company: "Chen & Associates",
      content: "The hybrid hearing capabilities were game-changing for our international case. The technology worked flawlessly and the support staff was outstanding.",
      rating: 5
    }
  ]
};