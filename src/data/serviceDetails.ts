export type ServiceDetail = {
  headline: string; // H1 (plain part) – last word(s) in `accent` are highlighted
  accent: string;
  metaDescription: string;
  intro: string[]; // paragraphs
  benefitsTitle: string;
  benefits: { title: string; text: string }[];
  stepsTitle: string;
  steps: { title: string; text: string }[];
  imageAlts: [string, string, string];
  faqs: { q: string; a: string }[];
};

// Clear, general information. Treatment details are always confirmed by your dentist at your visit.
export const serviceDetails: Record<string, ServiceDetail> = {
  "dental-implants": {
    headline: "Dental implants that feel",
    accent: "natural.",
    metaDescription: "Permanent, natural-looking tooth replacement with dental implants at Yes Dental in Manhattan. Request an appointment today.",
    intro: [
      "A dental implant replaces the root of a missing tooth with a small titanium post. A custom crown is then placed on top, so the new tooth looks, feels and works like your own.",
      "Implants are a long-term way to restore your bite and your smile. They help you eat, speak and laugh with confidence, and they do not need to be removed at night.",
    ],
    benefitsTitle: "Why patients choose implants",
    benefits: [
      { title: "Looks natural", text: "Your crown is matched to the colour and shape of your own teeth." },
      { title: "Strong and stable", text: "The post fuses with your jawbone, so the tooth stays firmly in place." },
      { title: "Protects your bone", text: "An implant helps keep the jawbone healthy where a tooth is missing." },
      { title: "Built to last", text: "With good daily care and regular check-ups, implants can last for many years." },
    ],
    stepsTitle: "What to expect",
    steps: [
      { title: "Consultation and X-rays", text: "We check your teeth, gums and bone, and explain your options and costs in plain words." },
      { title: "Placing the implant", text: "The post is placed under local anaesthetic so you stay comfortable." },
      { title: "Healing time", text: "Your jawbone and the implant join together. Your dentist will tell you how long this takes for you." },
      { title: "Your new crown", text: "A custom crown is fitted, checked for comfort and bite, and polished." },
    ],
    imageAlts: ["Dental implant model showing teeth and an implant post", "Dentist reviewing dental X-rays", "Bright, modern dental treatment room"],
    faqs: [
      { q: "Does getting an implant hurt?", a: "The area is numbed, so most patients feel pressure but not pain. Some soreness afterwards is normal and is usually managed with simple pain relief." },
      { q: "How long does the whole process take?", a: "It depends on how your mouth heals and whether you need extra steps such as a bone graft. Your dentist will give you a clear plan at your consultation." },
      { q: "Am I a good candidate for an implant?", a: "Most adults with healthy gums and enough jawbone can have implants. We will examine you and let you know if any treatment is needed first." },
      { q: "How do I care for an implant?", a: "Brush twice a day, clean between your teeth, and visit us for regular check-ups, just as you would with natural teeth." },
      { q: "Do you accept insurance?", a: "We work with many insurance plans. Call us on (212) 781-0700 and our team will check what your plan covers." },
    ],
  },

  dentures: {
    headline: "Dentures made for comfort and a",
    accent: "natural smile.",
    metaDescription: "Custom full and partial dentures designed for comfort and a natural look at Yes Dental in Manhattan.",
    intro: [
      "Dentures replace missing teeth so you can eat well, speak clearly and smile freely. Each set is made to fit your mouth and to look natural next to your own teeth.",
      "We offer full dentures when all teeth are missing and partial dentures when you still have some healthy teeth. We take the time to get the fit right.",
    ],
    benefitsTitle: "What good dentures give you",
    benefits: [
      { title: "A comfortable fit", text: "Made from impressions of your mouth, then adjusted until they feel right." },
      { title: "Easier eating", text: "Chew a wider range of foods with more confidence." },
      { title: "A natural look", text: "Shade, shape and size are chosen to suit your face." },
      { title: "Support for your face", text: "Replacing missing teeth helps keep your cheeks and lips from looking sunken." },
    ],
    stepsTitle: "How it works",
    steps: [
      { title: "Check-up and options", text: "We look at your mouth and talk about full, partial or other options." },
      { title: "Impressions", text: "We take careful impressions so your dentures are made just for you." },
      { title: "Try-in", text: "You try the shape and shade before the final set is made." },
      { title: "Final fitting", text: "We fit your dentures and adjust them. Follow-up visits make sure they stay comfortable." },
    ],
    imageAlts: ["Smiling older couple", "Model of a lower denture", "Technician finishing a denture by hand"],
    faqs: [
      { q: "How long will it take to get used to dentures?", a: "Most people need a few weeks. Speaking and eating can feel different at first, and it gets easier with practice." },
      { q: "Can I sleep with my dentures in?", a: "Your dentist will advise you. Many people are asked to take them out at night to rest the gums and keep the mouth healthy." },
      { q: "How do I clean dentures?", a: "Rinse after eating, brush them daily with a soft brush and a non-abrasive cleaner, and keep them in water or a cleaning solution overnight." },
      { q: "How often do dentures need to be replaced or adjusted?", a: "Gums change over time, so we recommend regular check-ups. Many dentures need a refit or replacement after several years." },
      { q: "Are partial dentures an option for me?", a: "If you still have healthy teeth, a partial denture can fill the gaps. We will explain what suits you best." },
    ],
  },

  crowns: {
    headline: "Crowns that protect and",
    accent: "restore.",
    metaDescription: "Durable, tooth-coloured crowns that repair damaged or weak teeth at Yes Dental in Manhattan.",
    intro: [
      "A crown is a cap that covers a tooth that is cracked, worn down, heavily filled or weakened. It restores the tooth's shape, strength and appearance.",
      "Our crowns are tooth-coloured, so they blend in with your natural smile. They are made to fit your bite and feel comfortable from day one.",
    ],
    benefitsTitle: "Why a crown may be right for you",
    benefits: [
      { title: "Adds strength", text: "A crown holds a weak tooth together and protects it from further damage." },
      { title: "Blends in", text: "Colour and shape are matched to your neighbouring teeth." },
      { title: "Long-lasting", text: "With good care, a crown can serve you for many years." },
      { title: "Saves your tooth", text: "A crown can often protect a tooth that would otherwise be lost." },
    ],
    stepsTitle: "Your crown, step by step",
    steps: [
      { title: "Examination", text: "We check the tooth and take X-rays to plan the best treatment." },
      { title: "Preparing the tooth", text: "The tooth is numbed and gently shaped. We take an impression for your custom crown." },
      { title: "Temporary crown", text: "A temporary crown protects your tooth while the final one is made." },
      { title: "Fitting the final crown", text: "We check the fit, colour and bite, then secure your crown." },
    ],
    imageAlts: ["Dentist's hands holding a model of teeth", "Dental model showing a row of natural-looking teeth", "Dental implant with a crown"],
    faqs: [
      { q: "How do I know if I need a crown?", a: "A crown is often suggested for a cracked or broken tooth, a large filling, or after a root canal. Your dentist will explain why." },
      { q: "Is getting a crown painful?", a: "No. The tooth is numbed, so you should feel comfortable during treatment. Mild sensitivity afterwards is common and usually passes." },
      { q: "How many visits does a crown take?", a: "Usually two visits: one to prepare the tooth and one to fit the final crown. Your dentist will confirm the plan for you." },
      { q: "How long does a crown last?", a: "Many crowns last for years. Good brushing, flossing and regular check-ups help them last longer." },
      { q: "Can I eat normally with a crown?", a: "Yes. After the numbness wears off, you can eat as usual. Avoid very hard or sticky foods on a temporary crown." },
    ],
  },

  "gingivitis-treatment": {
    headline: "Healthy gums start with",
    accent: "early care.",
    metaDescription: "Gentle gum disease and gingivitis treatment at Yes Dental in Manhattan. Stop inflammation early and protect your smile.",
    intro: [
      "Gingivitis is the early stage of gum disease. Your gums may look red or swollen, and they may bleed when you brush or floss. The good news is that it can usually be reversed when it is treated early.",
      "Our team will clean away the plaque and tartar that cause the problem and show you simple ways to keep your gums healthy at home.",
    ],
    benefitsTitle: "Why treat gingivitis now",
    benefits: [
      { title: "Stops it getting worse", text: "Early treatment helps prevent more serious gum disease." },
      { title: "Fresher breath", text: "Removing plaque and tartar can help with bad breath." },
      { title: "Comfortable gums", text: "Less redness, swelling and bleeding." },
      { title: "Protects your teeth", text: "Healthy gums help hold your teeth firmly in place." },
    ],
    stepsTitle: "What we do",
    steps: [
      { title: "Gum check", text: "We look at your gums and measure the spaces around your teeth." },
      { title: "Professional cleaning", text: "We gently remove plaque and tartar, including below the gum line where needed." },
      { title: "Home care plan", text: "We show you the best way to brush and clean between your teeth." },
      { title: "Follow-up", text: "We check your gums again to make sure they are healing well." },
    ],
    imageAlts: ["Toothbrush with toothpaste", "Dentist examining a patient's teeth and gums", "Close-up of a dental check-up"],
    faqs: [
      { q: "What are the signs of gingivitis?", a: "Red, puffy or tender gums, bleeding when you brush or floss, and bad breath that does not go away." },
      { q: "Can gingivitis go away?", a: "Yes. With a professional cleaning and good daily care, gingivitis can often be reversed." },
      { q: "What happens if I do not treat it?", a: "It can develop into more serious gum disease, which can damage the bone that holds your teeth." },
      { q: "Is the treatment painful?", a: "Most patients feel only mild discomfort. Tell us if you feel sensitive and we will adjust our approach." },
      { q: "How can I prevent it from coming back?", a: "Brush twice a day, clean between your teeth daily, and keep up with regular check-ups and cleanings." },
    ],
  },

  orthodontics: {
    headline: "Straighter teeth, a more",
    accent: "confident you.",
    metaDescription: "Traditional braces and clear aligners for children, teens and adults at Yes Dental in Manhattan.",
    intro: [
      "Orthodontic treatment gently moves your teeth into a healthier, better-looking position. Straight teeth are easier to clean and can improve the way your teeth fit together.",
      "We offer traditional braces and clear aligners for patients of all ages, so you can choose what fits your life.",
    ],
    benefitsTitle: "Your options",
    benefits: [
      { title: "Traditional braces", text: "Reliable, effective and suitable for many kinds of tooth alignment." },
      { title: "Clear aligners", text: "Nearly invisible trays that you can take out to eat and brush." },
      { title: "For all ages", text: "Treatment for children, teens and adults." },
      { title: "A healthier bite", text: "Better alignment can make teeth easier to clean and help them work together." },
    ],
    stepsTitle: "Your journey to a new smile",
    steps: [
      { title: "Consultation", text: "We examine your teeth and bite and talk about your goals." },
      { title: "Your plan", text: "We explain the best option, how long it may take and what it will cost." },
      { title: "Treatment", text: "Your braces or aligners are fitted, with regular visits to check progress." },
      { title: "Keeping your results", text: "A retainer helps your teeth stay in their new position." },
    ],
    imageAlts: ["Person placing a clear aligner", "Models of teeth with braces", "Orthodontic model of teeth"],
    faqs: [
      { q: "What is the best age to start orthodontic treatment?", a: "Treatment is possible at almost any age. For children, an early check-up helps us plan the right time." },
      { q: "How long will I need braces or aligners?", a: "It depends on your teeth. Many treatments take from several months to a couple of years, and we will give you an estimate." },
      { q: "Are clear aligners right for everyone?", a: "They work well for many patients, but some cases need braces. We will recommend what is best for you." },
      { q: "Does orthodontic treatment hurt?", a: "You may feel some pressure or soreness for a few days after a new fitting or adjustment. It usually settles quickly." },
      { q: "Do I still need to wear a retainer?", a: "Yes. A retainer helps keep your teeth in their new position after treatment." },
    ],
  },

  "pediatric-dentistry": {
    headline: "Gentle dental care for",
    accent: "growing smiles.",
    metaDescription: "Friendly pediatric dental care for children, from their very first visit, with Yes Dental in Manhattan.",
    intro: [
      "Healthy habits start early. Our friendly, patient-focused care helps children feel calm and safe at the dentist, from their very first visit.",
      "We take our time, explain things in simple words and make every visit as positive as possible, so your child learns that looking after their teeth can be easy.",
    ],
    benefitsTitle: "Care your child will feel good about",
    benefits: [
      { title: "Child-friendly approach", text: "Gentle words, a calm room and plenty of reassurance." },
      { title: "Prevention first", text: "Cleanings, check-ups and advice that help stop cavities before they start." },
      { title: "Healthy habits", text: "Simple brushing and eating tips for kids and parents." },
      { title: "Family convenience", text: "Care for the whole family in one trusted place." },
    ],
    stepsTitle: "Your child's first visit",
    steps: [
      { title: "A warm welcome", text: "We say hello, show your child around and answer your questions." },
      { title: "A gentle check-up", text: "We look at teeth, gums and jaw growth in a relaxed, step-by-step way." },
      { title: "A clean and polish", text: "A gentle cleaning leaves teeth fresh and shiny." },
      { title: "Tips for home", text: "We share easy advice for brushing, flossing and healthy snacks." },
    ],
    imageAlts: ["Dentist examining a young boy's teeth", "Two dental professionals caring for a young patient", "Child receiving dental care"],
    faqs: [
      { q: "When should my child first see a dentist?", a: "Experts suggest a first visit around the first birthday, or when the first tooth appears." },
      { q: "How can I help my child feel calm?", a: "Speak about the visit in a positive way and tell us about any worries. We will go at your child's pace." },
      { q: "How often should children have check-ups?", a: "Usually every six months, though your dentist may suggest a different schedule for your child." },
      { q: "Are dental X-rays safe for children?", a: "X-rays are used only when needed, with careful protection, to help us see what cannot be seen by eye." },
      { q: "Where can I learn more about children's dental care?", a: "Our pediatric specialists are affiliated with our group at MyFirstDENTISTNY.com, with 3 locations in NYC." },
    ],
  },

  "root-canals": {
    headline: "Root canal care that saves your",
    accent: "natural tooth.",
    metaDescription: "Comfortable, expert root canal therapy that relieves pain and saves your natural tooth at Yes Dental in Manhattan.",
    intro: [
      "A root canal treats the inside of a tooth when the nerve is infected or damaged. The goal is to relieve your pain and save the tooth so you do not have to have it removed.",
      "Modern root canal treatment is much more comfortable than its reputation. The area is fully numbed, and most patients feel better soon after treatment.",
    ],
    benefitsTitle: "Why save the tooth?",
    benefits: [
      { title: "Relieves pain", text: "Removing the infection takes away the cause of the pain." },
      { title: "Keeps your natural tooth", text: "Your own tooth is often the best choice for biting and chewing." },
      { title: "Stops infection spreading", text: "Treatment protects the surrounding teeth and gums." },
      { title: "A normal smile", text: "A crown on top restores the tooth's strength and look." },
    ],
    stepsTitle: "What happens during a root canal",
    steps: [
      { title: "Exam and X-ray", text: "We find the cause of your pain and plan treatment." },
      { title: "Numbing", text: "We numb the area so you stay comfortable." },
      { title: "Cleaning the tooth", text: "The infected tissue is removed and the inside of the tooth is cleaned and sealed." },
      { title: "Protecting the tooth", text: "A crown is usually placed to protect and strengthen the tooth." },
    ],
    imageAlts: ["Dentist treating a patient with a magnifying headlamp", "Dentist talking with a patient in a bright treatment room", "Dentist checking X-rays"],
    faqs: [
      { q: "Is a root canal painful?", a: "The treatment itself should not hurt because the area is numbed. Mild soreness for a few days afterwards is common." },
      { q: "How do I know if I need a root canal?", a: "Signs include strong toothache, lasting sensitivity to hot or cold, swelling, or a darkened tooth. Only an exam can confirm it." },
      { q: "How long does it take?", a: "Many root canals are completed in one or two visits. Your dentist will explain what to expect for your tooth." },
      { q: "Will I need a crown afterwards?", a: "Often, yes. A crown protects a treated tooth from breaking and helps it last." },
      { q: "What if I wait?", a: "An infected tooth rarely heals on its own and can get worse. Call us early if you have tooth pain." },
    ],
  },

  "sleep-apnea": {
    headline: "Better sleep without the",
    accent: "snoring.",
    metaDescription: "Custom oral appliances for sleep apnea and snoring at Yes Dental in Manhattan. Sleep better with your dentist's help.",
    intro: [
      "Sleep apnea causes your breathing to pause or become shallow while you sleep. It can leave you tired during the day and can disturb your partner with loud snoring.",
      "For many patients, a custom oral appliance is a comfortable alternative to other treatments. It is worn during sleep and gently holds your jaw in a position that helps keep your airway open.",
    ],
    benefitsTitle: "Why try an oral appliance",
    benefits: [
      { title: "Custom made", text: "Made from impressions of your teeth for a comfortable fit." },
      { title: "Quiet and small", text: "Easy to wear and easy to travel with." },
      { title: "Better rest", text: "Less snoring can mean better sleep for you and your partner." },
      { title: "Works with your doctor", text: "We can work alongside your sleep physician." },
    ],
    stepsTitle: "How treatment works",
    steps: [
      { title: "Talk and check", text: "We review your sleep concerns and your health history. A sleep study from your doctor may be needed." },
      { title: "Impressions", text: "We take impressions of your teeth to design your appliance." },
      { title: "Fitting", text: "We fit your appliance and show you how to wear and clean it." },
      { title: "Follow-up", text: "We check your comfort and your progress, and make adjustments if needed." },
    ],
    imageAlts: ["Couple sleeping peacefully", "Person resting comfortably in bed", "Person lying in a soft, comfortable bed"],
    faqs: [
      { q: "What are the signs of sleep apnea?", a: "Loud snoring, gasping during sleep, morning headaches, and feeling very tired during the day. See your doctor for a diagnosis." },
      { q: "Do I need a sleep study first?", a: "Often yes. A diagnosis from your doctor helps us make sure an oral appliance is the right choice for you." },
      { q: "Is the appliance comfortable?", a: "Most patients get used to it within a few weeks. We adjust it to improve comfort." },
      { q: "Can it help with snoring only?", a: "Yes. Oral appliances are also used to reduce snoring. We will check what is right for you." },
      { q: "How do I clean it?", a: "Brush it gently each morning and keep it in its case. We will show you the best way." },
    ],
  },

  "wisdom-teeth": {
    headline: "Wisdom teeth removal done with",
    accent: "care.",
    metaDescription: "Safe, professional wisdom teeth removal that minimizes discomfort and speeds up recovery at Yes Dental in Manhattan.",
    intro: [
      "Wisdom teeth are the last teeth to come in, usually in the late teens or twenties. If there is not enough room, they can become stuck, painful or infected.",
      "We examine your teeth and X-rays, explain whether removal is the right choice, and carry out extractions with care to keep you comfortable and help you recover quickly.",
    ],
    benefitsTitle: "Why remove wisdom teeth?",
    benefits: [
      { title: "Relieves pain", text: "Removes the source of pain, swelling or pressure." },
      { title: "Protects nearby teeth", text: "Stops crowding or damage to the teeth next to them." },
      { title: "Prevents infection", text: "Partly erupted wisdom teeth are hard to clean and can get infected." },
      { title: "Easier recovery", text: "Clear aftercare advice helps you heal comfortably." },
    ],
    stepsTitle: "From check-up to recovery",
    steps: [
      { title: "X-ray and exam", text: "We see the position of your wisdom teeth and plan treatment." },
      { title: "Comfortable treatment", text: "You are numbed, and we talk through any comfort options before your visit." },
      { title: "Careful removal", text: "We remove the teeth gently and protect the surrounding area." },
      { title: "Aftercare", text: "You get simple, written instructions for rest, food and cleaning." },
    ],
    imageAlts: ["Panoramic dental X-ray showing wisdom teeth", "Dental assistant preparing a patient in the treatment chair", "Smiling patient during a dental check-up"],
    faqs: [
      { q: "Do all wisdom teeth need to be removed?", a: "No. If they are healthy, in a good position and easy to clean, they may be left in place and checked regularly." },
      { q: "Is the procedure painful?", a: "The area is numbed, so you should not feel pain. Some soreness and swelling are normal for a few days." },
      { q: "How long is recovery?", a: "Many people feel better within a few days, but healing takes longer. We will give you clear aftercare steps." },
      { q: "What can I eat afterwards?", a: "Soft, cool foods for the first days, such as yogurt, soup and mashed potatoes. Avoid straws and hard or crunchy foods." },
      { q: "When should I call you after treatment?", a: "Call us if you have severe pain, heavy bleeding, fever or swelling that gets worse after a few days." },
    ],
  },

  veneers: {
    headline: "Veneers for a",
    accent: "flawless smile.",
    metaDescription: "Custom-crafted veneers that transform chipped, stained or uneven teeth at Yes Dental in Manhattan.",
    intro: [
      "Veneers are thin, custom-made shells that cover the front of your teeth. They can improve the colour, shape, size and look of teeth that are chipped, stained, worn or uneven.",
      "Each veneer is designed to suit your face and your smile, so the result looks natural and feels comfortable.",
    ],
    benefitsTitle: "What veneers can do",
    benefits: [
      { title: "Brighter colour", text: "Cover stains that whitening cannot remove." },
      { title: "Even shape", text: "Hide chips, small gaps or uneven edges." },
      { title: "Natural look", text: "Thin, light-reflecting materials look like real enamel." },
      { title: "Lasting results", text: "With good care, veneers keep their look for years." },
    ],
    stepsTitle: "Your smile makeover",
    steps: [
      { title: "Smile consultation", text: "We talk about what you would like to change and check your teeth are healthy." },
      { title: "Planning", text: "We plan the shape and shade so your new smile suits you." },
      { title: "Preparing your teeth", text: "A very thin layer of enamel is usually removed, and impressions are taken." },
      { title: "Fitting", text: "Your veneers are checked, adjusted and bonded in place." },
    ],
    imageAlts: ["Close-up of a bright, natural smile", "Close-up of a smile with white teeth", "Woman showing a healthy smile"],
    faqs: [
      { q: "Are veneers permanent?", a: "Veneers need a small amount of enamel to be removed, so the treatment is considered permanent. They may need to be replaced after many years." },
      { q: "Will veneers look fake?", a: "Not when they are well designed. We choose a shade and shape that suit you and look natural." },
      { q: "Do veneers hurt?", a: "Treatment is done with numbing if needed, so you should feel comfortable. Some sensitivity can happen for a short time." },
      { q: "How do I look after veneers?", a: "Brush and floss as usual, avoid biting hard objects, and keep up with regular check-ups." },
      { q: "Who is not a good candidate?", a: "Veneers may not be right if you have gum disease or weak teeth. We will treat those first or suggest other options." },
    ],
  },
};
