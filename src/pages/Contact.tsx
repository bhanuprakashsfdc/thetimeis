import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Send, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate form
    if (!name || !email || !message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }
    // Show success message
    toast({
      title: "Message sent",
      description: "We'll get back to you soon!",
    });
    setSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setName('');
      setEmail('');
      setMessage('');
      setSubmitted(false);
    }, 3000);
  };

  return (
    <Layout>
      <Helmet>
        <title>Contact Us</title>
        <meta name="description" content="Get in touch with our team for any questions or feedback about our time services." />
      </Helmet>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto mb-10">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-muted-foreground">
            We'd love to hear from you! Reach out with any questions or feedback.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="elevation-shadow">
            <CardHeader>
              <CardTitle>Send Us a Message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input 
                    id="name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    placeholder="Your name"
                    disabled={submitted}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="Your email address"
                    disabled={submitted}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)} 
                    placeholder="Your message"
                    className="min-h-[120px]"
                    disabled={submitted}
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={submitted}
                >
                  {submitted ? (
                    <span className="flex items-center">
                      <Check className="mr-2 h-4 w-4" /> Message Sent
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="mr-2 h-4 w-4" /> Send Message
                    </span>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
          <Card className="elevation-shadow">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>
                Other ways to reach our team
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-primary mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-muted-foreground">support@timeservice.com</p>
                  <p className="text-sm text-muted-foreground mt-1">We respond within 24 hours</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-primary mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  <p className="text-sm text-muted-foreground mt-1">Mon-Fri, 9AM to 6PM EST</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold">Office</h3>
                  <p className="text-muted-foreground">
                    123 Time Square<br />
                    New York, NY 10001<br />
                    United States
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <div className="w-full flex justify-start space-x-4">
                <Button variant="outline" size="icon">
                  <Mail className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Phone className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <MapPin className="h-4 w-4" />
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
        {/* Appended static content block for AdSense policy compliance */}
        <section aria-labelledby="contact-title-appended" className="prose prose-lg max-w-4xl mx-auto mt-12">
          <h1 id="contact-title-appended">Contact thetimeis.net</h1>
          <p>
            We welcome questions, feedback, and partnership inquiries. Please use the options below to get in touch.
          </p>
          <h2>Email</h2>
          <p>
            For general support or business inquiries: <a href="mailto:contact@thetimeis.net">contact@thetimeis.net</a>
          </p>
          <h2>Feedback</h2>
          <p>
            If you notice an issue with a displayed time or have a suggestion to improve the site, let us know.
            We review messages regularly and aim to respond promptly.
          </p>
          <h2>Availability</h2>
          <p>
            Responses typically occur during standard business hours. Please allow up to 2–3 business days for a reply.
          </p>
          <h2>Accessibility</h2>
          <p>
            We strive to provide an accessible experience. If you require assistance or encounter barriers using the
            site, contact us and we will do our best to help.
          </p>
        </section>
      </div>
    </Layout>
  );
};

export default Contact;
