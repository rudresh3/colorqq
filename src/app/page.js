import HeroPage from "@/components/HeroPage/HeroPage";
import OrderNow from "@/components/OrderNow/OrderNow";
import Testimonials from "@/components/Testimonials/Testimonials";
import Inspirations from "@/components/Inspirations/Inspirations";


export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    // </main>
    <div className="">
      <HeroPage />
      <OrderNow />
      <Testimonials />
      <Inspirations />
    </div>
  )
}
