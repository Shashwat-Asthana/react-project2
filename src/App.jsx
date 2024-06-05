import { useState } from 'react'
import './App.css'
import Navigation from './components/navigation';
import ContactHeader from './components/ContactHeader';
import ContactForm from './components/ContactForm';


function App() {
  

  return (
    <div>
      <Navigation />
      <main className='main_container'>
      <ContactHeader />
      <ContactForm />
      </main>
      
      
    </div>
  )
}

export default App
