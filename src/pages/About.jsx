import AboutHero from "../Components/AboutHero";
import ImageGallery from "../Components/ImageGallery";
import OurPurpose from "../Components/OurPurpose";
import PurposeCard from "../Components/PurposeCard";
import MeetPeople from "../Components/MeetPeople";
import TeamMember from "../Components/TeamMembers";
import GrowthSection from "../Components/GrowthListSection";
import GrowthCard from "../Components/GrowthCard";
import CommunityInvites from "../Components/CommunityInvitesSection";
import InvestorsSection from "../Components/InvestorsSection";
import VoiceofCustomerSection from "../Components/VoiceofCustomerSection";

const pageDate = {
  aboutHeroSection: {
    aboutheading: "Connecting Rural Indian consumption",
    aboutsubheading:
      "ElasticRun is building the railroads for Indian rural consumption and is becoming a de facto channel for Indian businesses to access the underserved rural markets.",
  },
  imageGallery: <ImageGallery />,
  ourPurpose: {
    purposeHeading: "Living our purpose",
    purposeSubHeading: "Prepare to be inspired by life-transforming stories.",
  },
  purposeCard: [
    {
      cardHeading: "Delivering more than products",
      cardSubheading:
        "Sharda, a single mother, faced immense challenges stocking her shop. ElasticRun stepped in, ensuring timely deliveries and empowering her to focus on her family. We deliver more than products, we deliver hope.",
      imageUrl: "../../images/About/video-thumbnail-image1.png",
      imageAlt:
        "Thumbnail Images,Delivering more than products,Sharda,Single mother,Faced immense challenges stocking her shop",
      videoUrl: "H6wtxVb2HbM",
    },
    {
      cardHeading: "Trust delivered",
      cardSubheading:
        "Kantilal's Kirana shop, a community lifeline, faced stocking challenges during the lockdown. ElasticRun ensured next-day delivery, transparent pricing, and support. We build trust, one delivery at a time.",
      imageUrl: "../../images/About/video-thumbnail-image2.jpg",
      imageAlt:
        "Thumbnail Images,Trust Delivered,Kantilal's Kirana shop,Faced stocking challenges during the lockdown",
      videoUrl: "DPupZGNU6gc",
    },
    {
      cardHeading: "Bridging the gap: essential products, delivered",
      cardSubheading:
        "We are on a mission: making essential products accessible to everyone. We open doors for brands to reach rural consumers, transforming lives with convenient delivery. Every day, we pioneer access, one community at a time.",
      imageUrl: "../../images/About/video-thumbnail-image3.jpg",
      imageAlt:
        "Thumbnail Images,Bridging the Gap: Essential Products, Delivered",
      videoUrl: "RJo90O1dNrE",
    },
  ],
  founderSection: {
    heading: "Meet our founders",
    subheading:
      "ElasticRun was founded by Sandeep Deshmukh, Shitiz Bansal and Saurabh Nigam in 2016. It has been backed by multiple marquee investors throughout its journey since inception.",
  },
  founderLists: [
    {
      teamMemberName: "Sandeep Deshmukh",
      teamMemberRole: "CEO",
      teamMemberImage: "../../images/About/sandeep-deshmukh.jpg",
      teamMemberImageAlt: "Team Member Image,Sandeep Deshmukh,CEO",
      teamMemberUrl:
        "https://www.linkedin.com/in/deshmukhss/?originalSubdomain=in",
    },
    {
      teamMemberName: "Shitiz Bansal",
      teamMemberRole: "CTO",
      teamMemberImage: "../../images/About/shitiz-bansal.jpg",
      teamMemberImageAlt: "Team Member Image,Shitiz Bansal,COO",
      teamMemberUrl:
        "https://www.linkedin.com/in/shitiz-bansal-3216057/?originalSubdomain=in",
    },
    {
      teamMemberName: "Saurabh Nigam",
      teamMemberRole: "COO",
      teamMemberImage: "../../images/About/saurabh-nigam.jpg",
      teamMemberImageAlt: "Team Member Image,Saurabh Nigam,CTO",
      teamMemberUrl:
        "https://www.linkedin.com/in/saurabh-nigam-55243013/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=in",
    },
  ],
  teamLists: [
    {
      teamMemberName: "Ankit Gadia",
      teamMemberRole: "Chief Financial Officer",
      teamMemberImage: "../../images/About/ankit-gadia.jpg",
      teamMemberImageAlt: "Ankit Gadia,Chief Financial Officer",
      teamMemberUrl:
        "https://www.linkedin.com/in/ankit-gadia-958bb514/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      teamMemberName: "Arun Kumar S",
      teamMemberRole: "VP-Operations",
      teamMemberImage: "../../images/About/arun-kumar.jpg",
      teamMemberImageAlt: "Arun Kumar S,VP-Operations",
      teamMemberUrl:
        "https://www.linkedin.com/in/arun-kumar-s-98827982/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      teamMemberName: "Brijesh WARRIER ",
      teamMemberRole: "VP-Operations",
      teamMemberImage: "../../images/About/brijesh-warrier.jpg",
      teamMemberImageAlt: "Brijesh WARRIER,VP-Operations",
      teamMemberUrl:
        "https://www.linkedin.com/in/brijesh-warrier-6b710912/?originalSubdomain=in",
    },
    {
      teamMemberName: "Hitesh Luthra",
      teamMemberRole: "VP-Operations",
      teamMemberImage: "../../images/About/hitesh-luthra.jpg",
      teamMemberImageAlt: "Hitesh Luthra,VP-Operations",
      teamMemberUrl:
        "https://www.linkedin.com/in/deepak-khandelwal-2b9b3a1b/?originalSubdomain=in",
    },
    {
      teamMemberName: "Karthik M",
      teamMemberRole: "VP-Operations",
      teamMemberImage: "../../images/About/karthik.jpg",
      teamMemberImageAlt: "Karthik M,VP-Operations",
      teamMemberUrl: "https://www.linkedin.com/in/karthik-m-35781416/",
    },
    {
      teamMemberName: "Manish Dubey",
      teamMemberRole: "VP-Sales",
      teamMemberImage: "../../images/About/manish-dubey.jpg",
      teamMemberImageAlt: "Manish Dubey,VP-Sales",
      teamMemberUrl:
        "https://www.linkedin.com/in/manish-dubey-a5758219/?originalSubdomain=in",
    },
    {
      teamMemberName: "Mukesh Mittal",
      teamMemberRole: "Chief Business Officer - Logistics",
      teamMemberImage: "../../images/About/mukesh-mittal.jpg",
      teamMemberImageAlt: "Mukesh Mittal,Chief Business Officer - Logistics",
      teamMemberUrl:
        "https://www.linkedin.com/in/mukesh-mittal-25559b19/?originalSubdomain=in",
    },
    {
      teamMemberName: "Nikhil Sharma ",
      teamMemberRole: "VP-Engineering",
      teamMemberImage: "../../images/About/nikhil-sharma.jpg",
      teamMemberImageAlt: "Nikhil Sharma,VP-Engineering",
      teamMemberUrl:
        "https://www.linkedin.com/in/nikhildx/?originalSubdomain=in",
    },
    {
      teamMemberName: "Rahul Bhatia",
      teamMemberRole: "VP-Operations",
      teamMemberImage: "../../images/About/rahul-bhatia.jpg",
      teamMemberImageAlt: "Rahul Bhatia,VP-Operations",
      teamMemberUrl:
        "https://www.linkedin.com/in/rahul-bhatia-b0719a27/?originalSubdomain=in",
    },
    {
      teamMemberName: "Sachin Mane",
      teamMemberRole: "VP-Technology",
      teamMemberImage: "../../images/About/sachin-machindranath-mane.jpg",
      teamMemberImageAlt: "Sachin Mane,VP-Technology",
      teamMemberUrl:
        "https://www.linkedin.com/in/manesachin/?originalSubdomain=in",
    },
    {
      teamMemberName: "Salil Chinchore",
      teamMemberRole: "CEO",
      teamMemberImage: "../../images/About/salil-chinchore.jpg",
      teamMemberImageAlt: "Salil Chinchore,Chief HRO",
      teamMemberUrl:
        "https://www.linkedin.com/in/salil-chinchore-shrm-scp-8426058/?originalSubdomain=in",
    },
    {
      teamMemberName: "Samar Desai",
      teamMemberRole: "VP-Operations",
      teamMemberImage: "../../images/About/samar-desai.jpg",
      teamMemberImageAlt: "Samar Desai,VP-Operations",
      teamMemberUrl:
        "https://www.linkedin.com/in/samar-desai-7316a314/?originalSubdomain=in",
    },
    {
      teamMemberName: "Sayali Karanjkar",
      teamMemberRole: "Chief Business Officer",
      teamMemberImage: "../../images/About/sayali-karanjkar.jpg",
      teamMemberImageAlt: "Sayali Karanjkar,Chief Business Officer",
      teamMemberUrl: "https://www.linkedin.com/in/sayalikaranjkar/",
    },
    {
      teamMemberName: "Vairamany Vijayasarathi",
      teamMemberRole: "VP-Sales",
      teamMemberImage: "../../images/About/vairamany.jpg",
      teamMemberImageAlt: "Vairamany Vijayasarathi,VP-Sales",
      teamMemberUrl:
        "https://www.linkedin.com/in/vairamany/?originalSubdomain=in",
    },
  ],
  growthsection: {
    growthsectionheading: "Driving responsible and inclusive growth",
    growthsectionsubheading:
      "We are committed to creating a positive social impact alongside its business success. We reach millions across India, fostering inclusive growth by providing essential goods and services to rural communities.",
  },
  grouthCard: [
    {
      cardIcon: "../../images/About/svg/engineering-internship.svg",
      cardTitle: "Diversity equity and inclusion programs",
      cardDescription:
        "We, at ElasticRun, are dedicated to creating a welcoming environment where everyone feels valued and empowered to succeed. Our DEI policy goes beyond just words, offering unique benefits such as LGBTQ medical coverage and IVF support, ensuring comprehensive care for all employees. We also prioritize financial security with innovative programs like car lease options, bike loan subsidies, and a laptop buy-back program. By championing diversity, equity, and inclusion, we strive to build a workplace where every individual can thrive and contribute their best.",
      cardImage: "../../images/About/DEI-programs.jpg",
    },
    {
      cardIcon: "../../images/About/svg/employee-volunteering-programs.svg",
      cardTitle: "Employee volunteering programs",
      cardDescription:
        "We are committed to making a difference in our communities through initiatives like ShikshaRun and VrikshaRun. ShikshaRun focuses on digital literacy, connecting youth to opportunities, while VrikshaRun promotes sustainability through tree plantation drives. Together, we're empowering individuals and nurturing a better, greener future for all.",
      cardImage: "../../images/About/employee-volunteering-programs.jpg",
    },
    {
      cardIcon: "../../images/About/svg/summer-internship.svg",
      cardTitle: "Employee learning programs",
      cardDescription:
        "We prioritize continuous learning and growth for our employees. Through our Inner Learning Circles, internal EduRun portal, and IGNITE program, we provide diverse opportunities for professional development. Launched in 2021 in collaboration with Welingkar Institute of Management, IGNITE has already empowered 150 participants, offering courses in FMCG Sales & Distribution, Supply & Materials Management, and E-commerce & Logistics.",
      cardImage: "../../images/About/employee-leraning-programs.jpg",
    },
  ],
  commnnityInvites: {
    heading: "Community initiatives",
    subheading: "Our collective impact and efforts",
  },
  communityImages: [
    "../../images/About/community-initiatives-image1.jpg",
    "../../images/About/community-initiatives-image2.jpg",
    "../../images/About/community-initiatives-image3.jpg",
    "../../images/About/community-initiatives-image4.jpg",
    "../../images/About/community-initiatives-image5.jpg",
    "../../images/About/community-initiatives-image6.jpg",
  ],
  investorsSection: {
    heading: "Our world-class investors ",
    subheading:
      "We’re fortunate to be working with some of the incredible investors",
  },
  logoList: [
    "../../images/About/logo-kalaari.png",
    "../../images/About/logo-softbank.png",
    "../../images/About/logo-schroder.png",
    "../../images/About/logo-avataar.png",
    "../../images/About/logo-goldman.png",
    "../../images/About/logo-chimera.png",
    "../../images/About/logo-prosus.png",
  ],
  customerSection: {
    heading: "Voice of our customers",
    testimonials: [
      {
        id: 1,
        testimonialContent:
          `"ElasticRun, receives the prestigious "Best HIH_Budding Partner” award from Flipkart! This recognition is a true testament to the dedication, collaboration, and unwavering commitment to excellence that the ElasticRun team consistently demonstrates.`,
        testimonialImage: "../../images/About/logo-flipkart.png",
        isLogo: true,
        testimonialName: "Flipkart",
      },
      {
        testimonialContent:
          "In my darkest times with no support and a struggling shop, ElasticRun is my saviour. They delivered stocks weekly, sparing me from traveling to the city. Their discounts boosted our business, and life improved significantly. Grateful for their support and a true blessing in difficult times.",
        testimonialImage: "/ikea-logo.png",
        testimonialName: "Sharada Shinde",
      testimonialRole: "Kirana Store Owner",
      testimonialImage: "../../images/About/shinde.png",
      isLogo: false
      },
      {
        testimonialContent:
         `IKEA India stands at #1 in “Zero emissions Last mile delivery”. Your team’s hard work, perseverance, and dedication have paid off, and this success is a testament to your commitment to sustainable logistics. Keep up the great work!`,
        testimonialImage: "/ikea-logo.png",
        isLogo: true,
        testimonialImage: "../../images/About/logo-ikea.png",
        testimonialName: "IKEA",

      },
      {
        testimonialContent:
         `I have access to all commodities at a lower cost than other companies. I get products delivered at my door steps. Thanks to ElasticRun.`,
        testimonialImage: "/ikea-logo.png",
        testimonialName: "Jishu Roy",
        testimonialRole: "Kirana Store Owner",
        testimonialImage: "../../images/About/jishu-roy.jpg",
        isLogo: false
      },
      {
        testimonialContent:
         `A big congratulations to ElasticRun for being our proud partner in Amazon's Sustainability Journey and for their leadership in sustainable transportation! We are excited to see their continued support in helping Amazon achieve Net Zero Carbon by 2040.`,
        testimonialImage: "/ikea-logo.png",
        isLogo: true,
        testimonialImage: "../../images/About/logo-amazon.png",
        testimonialName: "Amazon",
      },
    ],
  },
};

const about = () => {
  return (
    <>
      <AboutHero
        aboutheading={pageDate.aboutHeroSection.aboutheading}
        aboutsubheading={pageDate.aboutHeroSection.aboutsubheading}
        imageGallery={pageDate.imageGallery}
      />
      <OurPurpose
        purposeHeading={pageDate.ourPurpose.purposeHeading}
        purposeSubHeading={pageDate.ourPurpose.purposeSubHeading}
        purposeCard={pageDate.purposeCard.map((card, index) => (
          <PurposeCard
            key={index}
            cardHeading={card.cardHeading}
            cardSubheading={card.cardSubheading}
            imageUrl={card.imageUrl}
            imageAlt={card.imageAlt}
            videoUrl={card.videoUrl}
          />
        ))}
      />
      <MeetPeople
        bgcolor={"bg-white"}
        heading={pageDate.founderSection.heading}
        subheading={pageDate.founderSection.subheading}
        founderList={pageDate.founderLists.map((member, index) => (
          <TeamMember
            key={index}
            teamMemberName={member.teamMemberName}
            teamMemberRole={member.teamMemberRole}
            teamMemberImage={member.teamMemberImage}
            teamMemberImageAlt={member.teamMemberImageAlt}
            teamMemberUrl={member.teamMemberUrl}
          />
        ))}
      />
      <MeetPeople
        columnCount={4}
        heading={"Meet our leadership team"}
        bgcolor={"bg-[#F7F8FC]"}
        founderList={pageDate.teamLists.map((member, index) => (
          <TeamMember
            columnCount={4}
            key={index}
            teamMemberName={member.teamMemberName}
            teamMemberRole={member.teamMemberRole}
            teamMemberImage={member.teamMemberImage}
            teamMemberImageAlt={member.teamMemberImageAlt}
            teamMemberUrl={member.teamMemberUrl}
          />
        ))}
      />
      <GrowthSection
        growthsectionheading={pageDate.growthsection.growthsectionheading}
        growthsectionsubheading={pageDate.growthsection.growthsectionsubheading}
        growthcard={pageDate.grouthCard.map((card, index) => (
          <GrowthCard
            key={index}
            growthCardIcon={card.cardIcon}
            growthCardTitle={card.cardTitle}
            growthCardDescription={card.cardDescription}
            growthImage={card.cardImage}
          />
        ))}
      />
      <CommunityInvites
        communityInvitesHeading={pageDate.commnnityInvites.heading}
        communityInvitesSubHeading={pageDate.commnnityInvites.subheading}
        imageArray={pageDate.communityImages}
      />
      <InvestorsSection
        investorsHeading={pageDate.investorsSection.heading}
        investorsSubHeading={pageDate.investorsSection.subheading}
        logoList={pageDate.logoList}
      />
      <VoiceofCustomerSection
        customerHeading={pageDate.customerSection.heading}
        testimonials={pageDate.customerSection.testimonials}
      />
    </>
  );
};

export default about;
