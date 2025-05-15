import { Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitter } from 'lucide-react'
import React, { useState } from 'react'
import { cn } from '../lib/utils'
import { useToast } from '@/hooks/use-toast'

function ContactSection() {

    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            toast({
                title: "Message Sent",
                description: "Thank you for your message! I will get back to you soon."
            });
            setIsSubmitting(false);
        }, 2000);
    }
    
    return (
        <section id="contact" className='py-24 px-4 relative bg-secondary/30'>
            <div className='container mx-auto max-w-5xl'>
                <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
                    Get In <span className='text-primary'> Touch</span>
                </h2>
                <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
                    I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                </p>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                    <div className='space-y-8'>
                        <h3 className='text-2xl font-semibold mb-6'> Contact Information</h3>
                        <div className='space-y-6 justify-center'>
                            <div className='flex items-start space-x-4'>
                                <div className='p-3 rounded-full bg-primary/10'>
                                    <Mail className='h-6 w-6 text-primary'/> {" "}
                                </div>
                                <div className=''>
                                    <h4 className='font-medium'>Email</h4>
                                    <a href="mailto:yogeshm.jadhav10@gmail.com" className='text-muted-foreground hover:text-primary transition-colors'>
                                        yogeshm.jadhav10@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className='flex items-start space-x-4'>
                                <div className='p-3 rounded-full bg-primary/10'>
                                    <Phone className='h-6 w-6 text-primary'/> {" "}
                                </div>
                                <div className=''>
                                    <h4 className='font-medium'>Phone</h4>
                                    <a href="tel:+919552001608" className='text-muted-foreground hover:text-primary transition-colors'>
                                        +91 9552001608
                                    </a>
                                </div>
                            </div>

                            <div className='flex items-start space-x-4'>
                                <div className='p-3 rounded-full bg-primary/10'>
                                    <MapPin className='h-6 w-6 text-primary'/> {" "}
                                </div>
                                <div className=''>
                                    <h4 className='font-medium'>Location</h4>
                                    <a className='text-muted-foreground hover:text-primary transition-colors'>
                                        Ambernath, Thane, Maharashtra, India
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className='pt-8'>
                            <h4 className='font-medium mb-4'>Connect With me</h4>
                            <div className='flex space-x-4 justify-center'>
                                <a href="https://www.linkedin.com/inyogesh-jadhav-937472272" target='_blank'>
                                    <Linkedin />
                                </a>
                                <a href="#" target='_blank'>
                                    <Twitter />
                                </a>
                                <a href="https://www.instagram.com/yogesh_jadhav__05/" target='_blank'>
                                    <Instagram />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='bg-card rounded-lg p-8 shadow-xs' onSubmit={handleSubmit}>
                        <h3 className='text-2xl font-semibold mb-6'>Send a Message</h3>
                        <form className='space-y-6'>
                            <div>
                                <label htmlFor='name' className='block text-sm font-medium mb-2' >You Name</label>
                                <input 
                                    type="text"
                                    id='name'
                                    name='name'
                                    required
                                    className='w-full px-4 py-3 border border-input rounded-md bg-background focus:outline-hidden focus:ring-2 focus:ring-primary'
                                    placeholder='Yogesh Jadhav...'
                                />
                            </div>
                            <div>
                                <label htmlFor='email' className='block text-sm font-medium mb-2' >You Email</label>
                                <input 
                                    type="email"
                                    id='email'
                                    name='email'
                                    required
                                    className='w-full px-4 py-3 border border-input rounded-md bg-background focus:outline-hidden focus:ring-2 focus:ring-primary'
                                    placeholder='example@gmail.com...'
                                />
                            </div>
                            <div>
                                <label htmlFor='message' className='block text-sm font-medium mb-2' >You Message</label>
                                <textarea 
                                    id='message'
                                    name='message'
                                    required
                                    className='w-full px-4 py-3 border border-input rounded-md bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none'
                                    placeholder='I like talk about...'
                                />
                            </div>
                            <button 
                                type='submit' 
                                disabled={isSubmitting}
                                className={cn("cosmic-button w-full flex items-center justify-center gap-2"
                                )}>
                                    { isSubmitting ? "Sending..." : "Send Message" }
                                    <Send size-16 />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection