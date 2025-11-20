import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LogOut, Settings, Radio, Music, ShoppingBag, Calendar, FileText, DollarSign } from 'lucide-react';
import AdminFeatured from '@/components/admin/AdminFeatured';
import AdminAds from '@/components/admin/AdminAds';
import AdminLinks from '@/components/admin/AdminLinks';

const Admin = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      navigate('/login');
    } else {
      setLoading(false);
    }
  }, [user, navigate]);

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="animate-pulse text-primary text-2xl">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">
              <span className="text-primary">THOB</span> Admin Dashboard
            </h1>
            <p className="text-sm text-muted-foreground">Welcome, {user?.displayName || user?.email}</p>
          </div>
          <Button onClick={handleSignOut} variant="outline" size="sm">
            <LogOut className="w-4 h-4 mr-2" />
            Sign Out
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="featured" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6">
            <TabsTrigger value="featured">
              <Radio className="w-4 h-4 mr-2" />
              Featured
            </TabsTrigger>
            <TabsTrigger value="ads">
              <DollarSign className="w-4 h-4 mr-2" />
              Ads
            </TabsTrigger>
            <TabsTrigger value="links">
              <Settings className="w-4 h-4 mr-2" />
              Links
            </TabsTrigger>
            <TabsTrigger value="streams">
              <Radio className="w-4 h-4 mr-2" />
              Streams
            </TabsTrigger>
            <TabsTrigger value="mixes">
              <Music className="w-4 h-4 mr-2" />
              Mixes
            </TabsTrigger>
            <TabsTrigger value="shop">
              <ShoppingBag className="w-4 h-4 mr-2" />
              Shop
            </TabsTrigger>
          </TabsList>

          <TabsContent value="featured" className="space-y-6">
            <AdminFeatured />
          </TabsContent>

          <TabsContent value="ads" className="space-y-6">
            <AdminAds />
          </TabsContent>

          <TabsContent value="links" className="space-y-6">
            <AdminLinks />
          </TabsContent>

          <TabsContent value="streams" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Manage Streams</CardTitle>
                <CardDescription>Add, edit, or remove live streams</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Stream management interface coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="mixes" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Manage Booth Mixes</CardTitle>
                <CardDescription>Add, edit, or remove DJ mixes</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Mix management interface coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="shop" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Manage Shop Items</CardTitle>
                <CardDescription>Add, edit, or remove shop products</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Shop management interface coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
