import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <main className="">
     <div className="flex flex-col lg:flex-row items-center bg-[#1E1919] dark:bg-slate-800 h-full">
      <div className="p-10 flex flex-col  bg-[#2B2929] dark:bg-slate-800 text-white">
        <h1 className="text-5xl font-bold">Welcome to Dropbox<br/>
        <br/>
        Storing everything for you and your business needs. All in one place.
        </h1>
        <p className="pb-10">
          Enhance your productivity with Dropbox.It offers personal cloud storage, and a simple and efficient way to upload to the cloud.Organize and Access your files from any device and anywhere.
        </p>
        <Link href="/dashboard" className="flex cursor-pointer bg-blue-500 p-5 w-fit rounded-md text-white hover:bg-blue-600">
          Try it for free!
         <ArrowRight className="ml-5"/>
          </Link>
      </div>
      <div className="bg-[#1E1919] dark:bg-slate-800 h-full p-10">
        <video autoPlay loop muted className="rounded-lg" >
          <source src="https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/dropbox/dbx1-hero-1920x1080.mp4" type="video/mp4"/>
          Your browser does not support the video tag.
        </video>
      </div>
     </div>
    </main>
  ) 
}
