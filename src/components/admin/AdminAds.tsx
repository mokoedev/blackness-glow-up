import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { Code, DollarSign, Eye } from 'lucide-react';

const AdminAds = () => {
  const { toast } = useToast();
  const [placement, setPlacement] = useState<string>('banner');
  const [adCode, setAdCode] = useState<string>('');

  const handleSaveAdCode = () => {
    toast({
      title: "Ad code saved",
      description: "Your ad placement code has been saved successfully.",
    });
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="w-5 h-5 text-primary" />
            Ad Placement Management
          </CardTitle>
          <CardDescription>
            Configure ad network codes and manage ad placements
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="placements" className="space-y-6">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="placements">Ad Placements</TabsTrigger>
              <TabsTrigger value="scripts">Ad Scripts</TabsTrigger>
            </TabsList>

            <TabsContent value="placements" className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="placement">Ad Placement Location</Label>
                  <Select value={placement} onValueChange={setPlacement}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select placement" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="banner">Banner (Top of page)</SelectItem>
                      <SelectItem value="sidebar">Sidebar</SelectItem>
                      <SelectItem value="inline">Inline (Between content)</SelectItem>
                      <SelectItem value="footer">Footer</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="adcode">Ad Network Code</Label>
                  <Textarea
                    id="adcode"
                    placeholder="Paste your ad network code here (Google AdSense, Carbon Ads, etc.)"
                    rows={10}
                    value={adCode}
                    onChange={(e) => setAdCode(e.target.value)}
                    className="font-mono text-sm"
                  />
                  <p className="text-xs text-muted-foreground">
                    Paste the HTML/JavaScript code from your ad network (AdSense, Carbon Ads, etc.)
                  </p>
                </div>

                <Button onClick={handleSaveAdCode} className="w-full">
                  Save Ad Code
                </Button>
              </div>

              <div className="border-t border-border pt-6">
                <h3 className="text-lg font-semibold mb-4">Active Ad Placements</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
                    <div>
                      <p className="font-medium">Banner Ad</p>
                      <p className="text-sm text-muted-foreground">Top of homepage</p>
                    </div>
                    <Button variant="outline" size="sm">Edit</Button>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
                    <div>
                      <p className="font-medium">Sidebar Ad</p>
                      <p className="text-sm text-muted-foreground">Right sidebar (desktop)</p>
                    </div>
                    <Button variant="outline" size="sm">Edit</Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="scripts" className="space-y-6">
              <Card className="bg-muted/20">
                <CardHeader>
                  <CardTitle className="text-lg">Supported Ad Networks</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold">Google AdSense</h4>
                    <p className="text-sm text-muted-foreground">
                      Copy your AdSense code from your Google AdSense account and paste it into the ad code field above.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Carbon Ads</h4>
                    <p className="text-sm text-muted-foreground">
                      Get your Carbon Ads script code and paste it into the ad code field.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Custom Ad Networks</h4>
                    <p className="text-sm text-muted-foreground">
                      Any HTML/JavaScript ad code from other networks can be added using the placement field.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-primary" />
            Featured Ad Slots
          </CardTitle>
          <CardDescription>
            Manage purchased featured slots for streams, mixes, and shop items
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Featured Streams</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-primary">$99/week</p>
                  <p className="text-sm text-muted-foreground mt-2">2 active slots</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Featured Mixes</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-primary">$79/week</p>
                  <p className="text-sm text-muted-foreground mt-2">1 active slot</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Featured Shop</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-primary">$149/2 weeks</p>
                  <p className="text-sm text-muted-foreground mt-2">0 active slots</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminAds;
