
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
      </div>
    </Layout>
  );
};

export default SpinWheelPage;
