import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Link as LinkIcon, Plus, Trash2 } from 'lucide-react';

interface SocialLink {
  id: string;
  platform: string;
  url: string;
}

const AdminLinks = () => {
  const { toast } = useToast();
  const [links, setLinks] = useState<SocialLink[]>([
    { id: '1', platform: 'Instagram', url: 'https://instagram.com/thob' },
    { id: '2', platform: 'Twitter/X', url: 'https://twitter.com/thob' },
  ]);

  const handleAddLink = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newLink: SocialLink = {
      id: Date.now().toString(),
      platform: formData.get('platform') as string,
      url: formData.get('url') as string,
    };
    setLinks([...links, newLink]);
    toast({
      title: "Link added",
      description: "Social media link has been added successfully.",
    });
    e.currentTarget.reset();
  };

  const handleDeleteLink = (id: string) => {
    setLinks(links.filter(link => link.id !== id));
    toast({
      title: "Link removed",
      description: "Social media link has been removed.",
    });
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <LinkIcon className="w-5 h-5 text-primary" />
            Social Media Links
          </CardTitle>
          <CardDescription>
            Manage social media and external links displayed on the site
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleAddLink} className="space-y-4 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="platform">Platform Name</Label>
                <Input
                  id="platform"
                  name="platform"
                  placeholder="e.g., Instagram, Twitter, YouTube"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="url">URL</Label>
                <Input
                  id="url"
                  name="url"
                  type="url"
                  placeholder="https://..."
                  required
                />
              </div>
            </div>
            <Button type="submit" className="w-full">
              <Plus className="w-4 h-4 mr-2" />
              Add Social Link
            </Button>
          </form>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold mb-4">Current Links</h3>
            {links.map((link) => (
              <div
                key={link.id}
                className="flex items-center justify-between p-3 bg-muted/20 rounded-lg"
              >
                <div>
                  <p className="font-medium">{link.platform}</p>
                  <p className="text-sm text-muted-foreground">{link.url}</p>
                </div>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => handleDeleteLink(link.id)}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Navigation Links</CardTitle>
          <CardDescription>
            Manage main navigation menu items
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-muted-foreground">
            <p>Navigation links are managed in the Navigation component.</p>
            <p className="text-sm">Current menu items: Home, Streams, Booth Mixes, Shop, Events, Blog</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminLinks;
