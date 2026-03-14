"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardTwentyFive from '@/components/sections/feature/FeatureCardTwentyFive';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';
import { BarChart3, BookOpen, Brain, CreditCard, Lightbulb, Sparkles, Star, Target, TrendingUp, Users, Zap, Award } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
      contentWidth="smallMedium"
      sizing="large"
      background="noiseDiagonalGradient"
      cardStyle="glass-elevated"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="glass"
      headingFontWeight="semibold"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="MathsAI"
          navItems={[
            { name: "Features", id: "features" },
            { name: "How It Works", id: "how-it-works" },
            { name: "Pricing", id: "pricing" },
            { name: "Testimonials", id: "testimonials" }
          ]}
          button={{ text: "Get Started", href: "#contact" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroOverlay
          title="Master Mathematics with Intelligent AI"
          description="Experience personalized learning powered by advanced AI. Get instant solutions, step-by-step explanations, and adaptive learning paths tailored to your level."
          tag="AI-Powered Education"
          tagIcon={Sparkles}
          tagAnimation="blur-reveal"
          buttons={[
            { text: "Start Learning Free", href: "#contact" },
            { text: "Watch Demo", href: "#features" }
          ]}
          buttonAnimation="slide-up"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AwVGCgiOlF6OWpAYiYTDevw0en/a-futuristic-digital-visualization-showi-1773503607528-4c235d1a.png"
          imageAlt="AI Mathematics Platform"
          showBlur={true}
          showDimOverlay={false}
          className="relative min-h-screen"
          titleClassName="text-5xl md:text-7xl font-bold"
          descriptionClassName="text-lg md:text-xl opacity-90 max-w-2xl"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Revolutionary Mathematics Learning"
          description="MathsAI combines cutting-edge artificial intelligence with proven educational methodologies to create the most effective mathematics learning experience. Our platform adapts to each student's learning style and pace."
          tag="About MathsAI"
          tagIcon={Brain}
          tagAnimation="blur-reveal"
          bulletPoints={[
            { title: "AI-Powered Solutions", description: "Instant solutions to any math problem with detailed step-by-step explanations", icon: Zap },
            { title: "Adaptive Learning", description: "Personalized learning paths that adjust based on your progress and comprehension", icon: Target },
            { title: "Comprehensive Coverage", description: "From basic arithmetic to advanced calculus, covering all levels and topics", icon: BookOpen },
            { title: "Progress Tracking", description: "Real-time insights into your learning journey with detailed analytics", icon: BarChart3 }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AwVGCgiOlF6OWpAYiYTDevw0en/an-illustrative-scene-of-a-student-learn-1773503607722-7728581b.png"
          imageAlt="AI Learning Interface"
          mediaAnimation="blur-reveal"
          imagePosition="right"
          textboxLayout="split"
          useInvertedBackground={false}
          className="py-20"
          titleClassName="text-4xl md:text-5xl font-bold"
          descriptionClassName="text-lg opacity-85"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTwentyFive
          title="Powerful Features Built for Success"
          description="Everything you need to master mathematics, all in one intelligent platform"
          tag="Core Features"
          tagIcon={Lightbulb}
          tagAnimation="blur-reveal"
          buttons={[{ text: "Explore Features", href: "#pricing" }]}
          buttonAnimation="slide-up"
          features={[
            {
              title: "Instant Problem Solving",              description: "Get immediate answers to any math problem with comprehensive solutions and multiple solving approaches",              icon: Zap,
              mediaItems: [
                { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AwVGCgiOlF6OWpAYiYTDevw0en/a-clean-interface-showing-instant-mathem-1773503608244-e8c5302b.png?_wi=1", imageAlt: "Instant Solutions" },
                { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AwVGCgiOlF6OWpAYiYTDevw0en/a-clean-interface-showing-instant-mathem-1773503608244-e8c5302b.png?_wi=2", imageAlt: "Solution Display" }
              ]
            },
            {
              title: "Personalized Learning Paths",              description: "AI-adaptive curriculum that adjusts difficulty and content based on your performance and learning style",              icon: Target,
              mediaItems: [
                { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AwVGCgiOlF6OWpAYiYTDevw0en/a-dashboard-interface-showing-personaliz-1773503607964-043f0278.png?_wi=1", imageAlt: "Personalized Dashboard" },
                { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AwVGCgiOlF6OWpAYiYTDevw0en/a-dashboard-interface-showing-personaliz-1773503607964-043f0278.png?_wi=2", imageAlt: "Learning Analytics" }
              ]
            },
            {
              title: "Detailed Explanations",              description: "Comprehensive breakdowns of every problem with visual aids, formulas, and alternative solving methods",              icon: BookOpen,
              mediaItems: [
                { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AwVGCgiOlF6OWpAYiYTDevw0en/a-comprehensive-explanation-interface-br-1773503607428-a2da9025.png?_wi=1", imageAlt: "Step-by-Step Guides" },
                { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AwVGCgiOlF6OWpAYiYTDevw0en/a-comprehensive-explanation-interface-br-1773503607428-a2da9025.png?_wi=2", imageAlt: "Visual Explanations" }
              ]
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          carouselMode="buttons"
          className="py-20"
          titleClassName="text-4xl md:text-5xl font-bold"
          descriptionClassName="text-lg opacity-85 max-w-2xl"
          cardTitleClassName="text-2xl font-semibold"
          cardDescriptionClassName="text-base opacity-80"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardOne
          title="Trusted by Learners Worldwide"
          description="Join thousands of students and educators improving mathematics outcomes with MathsAI"
          tag="By The Numbers"
          tagIcon={TrendingUp}
          tagAnimation="blur-reveal"
          metrics={[
            { id: "users", value: "500K+", title: "Active Learners", description: "Students worldwide using MathsAI daily", icon: Users },
            { id: "improvement", value: "94%", title: "Success Rate", description: "Students showing measurable improvement", icon: TrendingUp },
            { id: "problems", value: "10M+", title: "Problems Solved", description: "Mathematics problems solved monthly", icon: BarChart3 },
            { id: "coverage", value: "100+", title: "Topics Covered", description: "Comprehensive mathematics curriculum", icon: BookOpen }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          className="py-20"
          titleClassName="text-xl font-semibold"
          descriptionClassName="text-lg opacity-85 max-w-2xl"
          valueClassName="text-4xl md:text-5xl font-bold"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="Loved by Students & Educators"
          description="Hear what real users have to say about their experience with MathsAI"
          tag="Success Stories"
          tagIcon={Star}
          tagAnimation="blur-reveal"
          testimonials={[
            { id: "t1", name: "Sarah Chen", role: "High School Student", company: "Lincoln High School", rating: 5, imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AwVGCgiOlF6OWpAYiYTDevw0en/a-professional-portrait-of-a-confident-y-1773503606668-cfaafef6.png?_wi=1", imageAlt: "Sarah Chen" },
            { id: "t2", name: "Marcus Johnson", role: "Mathematics Tutor", company: "Premier Education Center", rating: 5, imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AwVGCgiOlF6OWpAYiYTDevw0en/a-professional-portrait-of-an-experience-1773503607053-55d0efc2.png?_wi=1", imageAlt: "Marcus Johnson" },
            { id: "t3", name: "Priya Patel", role: "College Student", company: "State University", rating: 5, imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AwVGCgiOlF6OWpAYiYTDevw0en/a-professional-portrait-of-a-diverse-you-1773503607503-83337a77.png", imageAlt: "Priya Patel" },
            { id: "t4", name: "Dr. James Wilson", role: "Mathematics Department Head", company: "Central Academy", rating: 5, imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AwVGCgiOlF6OWpAYiYTDevw0en/a-professional-portrait-of-another-educa-1773503607073-4610eba2.png", imageAlt: "Dr. James Wilson" },
            { id: "t5", name: "Emma Rodriguez", role: "Homeschool Parent", company: "Independent Learner", rating: 5, imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AwVGCgiOlF6OWpAYiYTDevw0en/a-professional-portrait-of-a-confident-y-1773503606668-cfaafef6.png?_wi=2", imageAlt: "Emma Rodriguez" },
            { id: "t6", name: "Prof. David Lee", role: "University Instructor", company: "Tech Institute", rating: 5, imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AwVGCgiOlF6OWpAYiYTDevw0en/a-professional-portrait-of-an-experience-1773503607053-55d0efc2.png?_wi=2", imageAlt: "Prof. David Lee" }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          carouselMode="buttons"
          textboxLayout="default"
          useInvertedBackground={false}
          className="py-20"
          titleClassName="text-4xl md:text-5xl font-bold"
          descriptionClassName="text-lg opacity-85 max-w-2xl"
          nameClassName="font-semibold text-lg"
          roleClassName="text-sm opacity-75"
          companyClassName="text-sm opacity-60"
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardThree
          title="Simple, Transparent Pricing"
          description="Choose the perfect plan for your learning goals. All plans include core AI features."
          tag="Pricing Plans"
          tagIcon={CreditCard}
          tagAnimation="blur-reveal"
          buttons={[{ text: "View Features", href: "#features" }]}
          buttonAnimation="slide-up"
          plans={[
            {
              id: "starter",              name: "Starter",              price: "Free",              badge: "Perfect for Testing",              badgeIcon: Zap,
              buttons: [{ text: "Get Started", href: "#contact" }],
              features: ["Limited daily problems", "Basic problem solving", "Standard explanations", "Progress tracking", "Mobile access"]
            },
            {
              id: "pro",              name: "Pro",              price: "$9.99",              badge: "Most Popular",              badgeIcon: Star,
              buttons: [{ text: "Start Free Trial", href: "#contact" }],
              features: ["Unlimited problems daily", "Advanced AI solutions", "Detailed step-by-step guides", "Personalized learning paths", "Progress analytics", "Offline access", "Priority support"]
            },
            {
              id: "premium",              name: "Premium",              price: "$19.99",              badge: "For Educators",              badgeIcon: Award,
              buttons: [{ text: "Contact Sales", href: "#contact" }],
              features: ["Everything in Pro", "Class management tools", "Student progress reports", "Custom curriculum", "Team collaboration", "API access", "Dedicated support", "Advanced analytics"]
            }
          ]}
          animationType="slide-up"
          carouselMode="buttons"
          textboxLayout="default"
          useInvertedBackground={false}
          className="py-20"
          titleClassName="text-4xl md:text-5xl font-bold"
          descriptionClassName="text-lg opacity-85 max-w-2xl"
          nameClassName="text-2xl font-bold"
          priceClassName="text-3xl font-bold"
          featureItemClassName="flex items-center gap-2"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Find answers to common questions about MathsAI, our features, and how to get started."
          textPosition="left"
          useInvertedBackground={false}
          animationType="smooth"
          showCard={true}
          faqsAnimation="blur-reveal"
          faqs={[
            { id: "faq1", title: "How does MathsAI work?", content: "MathsAI uses advanced machine learning algorithms to understand mathematical problems and provide instant solutions. Our AI analyzes the problem, generates multiple solving approaches, and explains each step in detail. The platform learns from your interactions to improve accuracy and personalization over time." },
            { id: "faq2", title: "Is MathsAI suitable for all grade levels?", content: "Yes! MathsAI covers mathematics from elementary arithmetic through advanced calculus and university-level mathematics. The platform automatically adapts the complexity of explanations based on the selected level, making it suitable for students of all ages and abilities." },
            { id: "faq3", title: "Can I use MathsAI offline?", content: "Pro and Premium plans include offline access. You can download solutions and learning materials to access without an internet connection. Free plan users can access the platform online only." },
            { id: "faq4", title: "How is my learning data used?", content: "We take data privacy seriously. Your learning data is encrypted and used only to personalize your learning experience. We never share personal information with third parties. See our privacy policy for complete details." },
            { id: "faq5", title: "What if the AI solution is incorrect?", content: "Our AI has a 99.2% accuracy rate for mathematical solutions. If you find an error, you can report it directly through the app. Our team investigates and improves the algorithm. Users who report verified errors receive premium credits." },
            { id: "faq6", title: "Do you offer a student discount?", content: "Yes! Students with a valid .edu email address receive a 40% discount on Pro and Premium plans. Teachers can access educational licenses with additional classroom management features." }
          ]}
          className="py-20"
          sideTitleClassName="text-3xl md:text-4xl font-bold"
          sideDescriptionClassName="text-base opacity-80"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get Started"
          title="Start Your Learning Journey Today"
          description="Join thousands of students and educators. Sign up for free and experience the future of mathematics learning."
          tagIcon={Sparkles}
          tagAnimation="blur-reveal"
          background={{ variant: "noiseDiagonalGradient" }}
          useInvertedBackground={false}
          inputPlaceholder="Enter your email"
          buttonText="Start Free"
          termsText="By signing up, you agree to our Terms of Service and Privacy Policy."
          className="py-20"
          titleClassName="text-4xl md:text-5xl font-bold"
          descriptionClassName="text-lg opacity-85 max-w-2xl"
          inputClassName="px-6 py-3 rounded-full"
          buttonClassName="px-8 py-3 rounded-full font-semibold"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="MathsAI"
          copyrightText="© 2025 MathsAI. All rights reserved."
          columns={[
            {
              title: "Product",              items: [
                { label: "Features", href: "#features" },
                { label: "Pricing", href: "#pricing" },
                { label: "Security", href: "#" },
                { label: "Roadmap", href: "#" }
              ]
            },
            {
              title: "Company",              items: [
                { label: "About", href: "#about" },
                { label: "Blog", href: "#" },
                { label: "Careers", href: "#" },
                { label: "Contact", href: "#contact" }
              ]
            },
            {
              title: "Resources",              items: [
                { label: "Documentation", href: "#" },
                { label: "API Reference", href: "#" },
                { label: "Community", href: "#" },
                { label: "Support", href: "#" }
              ]
            },
            {
              title: "Legal",              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Cookie Policy", href: "#" },
                { label: "GDPR", href: "#" }
              ]
            }
          ]}
          className="bg-gradient-to-b from-transparent"
          logoTextClassName="font-bold text-xl"
          copyrightTextClassName="text-sm opacity-60"
        />
      </div>
    </ThemeProvider>
  );
}