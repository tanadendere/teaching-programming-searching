"use client"
import AppContainerComponent from "@/components/AppContainerComponent";
import {AppContextProvider} from "@/app/AppContext";

export default function Home() {

  return (
      <div className="app">
          <AppContextProvider>
              <AppContainerComponent />
          </AppContextProvider>
      </div>
  )
}
