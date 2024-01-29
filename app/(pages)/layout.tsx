import Footerk from "../_components/Footer"
import Nav from "./Nav"


export default function signupLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
            

            <div className="h-full">
                <Nav />
            {children}
            <div className="">
             <Footerk />
             </div>
            </div>
          
    )
  }
     