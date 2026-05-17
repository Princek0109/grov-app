import CompanionCard from "@/components/CompanionCard"
import CompanionsList from "@/components/CompanionsList"
import CTA from "@/components/CTA"
import { recentSessions } from "@/constants"

const Page = () => {
  return (
    <main>
      <h1 >Popular Companions</h1>
    <section className="home-section">
        <CompanionCard 
        id="123"
        name="Neura the Binary Explorer"
        topic="Neural Networks of the brain"
        subject="Science"
        duration={45}
        color="#E7CCFF"
        />
         <CompanionCard 
        id="456"
        name="Country the number Wizard"
        topic="Derivatives and Integrals"
        subject="Maths"
        duration={45}
        color="#F4CB6B"
        />
         <CompanionCard 
        id="789"
        name="Verba the vocaboulary Builder"
        topic="language learning tips and tricks"
        subject="English"
        duration={45}
        color="#BCE2FA"
        />
        
    </section>
        <section className="home-section">
            <CompanionsList 
            title="Recently Completed Sessions"
            companions={recentSessions}
            classNames="w-2/3 max-lg:w-full"
            />
            <CTA />
        
        </section>
    </main>
  )
}

export default Page