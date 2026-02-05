
import React from 'react';
import Layout from '@/components/Layout';
import SpinWheel from '@/components/SpinWheel';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RotateCw } from 'lucide-react';
import { APP_NAME, SITE_URL } from '@/constants/constants';
import Seo from '@/components/Seo';

const SpinWheelPage = () => {
  return (
    <Layout>
      <Seo
        title={`Spin a Wheel - ${APP_NAME}`}
        description="Spin the wheel to make random selections or decisions. Perfect for giveaways, choosing from options, or adding an element of chance to your decisions."
        type="website"
        canonical={`${SITE_URL}spin-wheel.html`}
        breadcrumbs={[
          { name: 'Home', item: SITE_URL },
          { name: 'Spin Wheel', item: `${SITE_URL}spin-wheel.html` }
        ]}
      />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center mb-8">
          <RotateCw className="h-8 w-8 text-primary mr-3" />
          <h1 className="text-4xl font-bold">Spin a Wheel</h1>
        </div>
        
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-center mb-10">
          Add items to the wheel, give it a spin, and let chance decide!
        </p>
        
        <Card className="mb-8 border border-border/50 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">Random Selector Wheel</CardTitle>
          </CardHeader>
          <CardContent>
            <SpinWheel />
          </CardContent>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center">1</span>
                  <span>Add items to the list. Each item represents a possible outcome.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center">2</span>
                  <span>Click spin to start. The wheel lands on one item at random.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center">3</span>
                  <span>Use equal weights or adjust probabilities if needed.</span>
                </li>
              </ul>
            </div>
            <div className="bg-muted/30 rounded-lg p-6">
              <h3 className="text-lg font-medium mb-3">Popular Use Cases</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Giveaways and random prize selection</li>
                <li>Choosing tasks, meals, or activities</li>
                <li>Classroom games and team icebreakers</li>
                <li>Quick decisions when options feel equal</li>
              </ul>
            </div>
          </div>
          <div className="space-y-6">
            <div className="rounded-lg p-6 border">
              <h3 className="text-lg font-medium mb-3">Fairness And Transparency</h3>
              <p className="text-muted-foreground mb-3">
                Outcomes are selected using pseudo-random methods provided by the browser. For high-stakes drawings,
                consider recording the session and publishing rules in advance.
              </p>
              <p className="text-muted-foreground">
                Avoid adding duplicate items unless you intend to weight selections. Review the list before spinning.
              </p>
            </div>
            <div className="rounded-lg p-6 border">
              <h3 className="text-lg font-medium mb-3">FAQ</h3>
              <dl className="space-y-3">
                <div>
                  <dt className="font-medium">Can I save wheels?</dt>
                  <dd className="text-muted-foreground">Yes, use your browser’s storage to keep presets for future use.</dd>
                </div>
                <div>
                  <dt className="font-medium">Is this truly random?</dt>
                  <dd className="text-muted-foreground">Results use browser randomness. For verifiable randomness, use audited methods.</dd>
                </div>
                <div>
                  <dt className="font-medium">Can I set weights?</dt>
                  <dd className="text-muted-foreground">Adjust item counts or probabilities to influence selection when supported.</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SpinWheelPage;
