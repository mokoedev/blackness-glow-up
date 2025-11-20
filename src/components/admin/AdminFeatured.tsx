import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Plus, Star } from 'lucide-react';

const AdminFeatured = () => {
  const { toast } = useToast();
  const [type, setType] = useState<string>('stream');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Featured item added",
      description: "The featured item has been added successfully.",
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Star className="w-5 h-5 text-primary" />
          Manage Featured Content
        </CardTitle>
        <CardDescription>
          Add items to featured sections (Streams, Booth Mixes, Shop)
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="type">Content Type</Label>
            <Select value={type} onValueChange={setType}>
              <SelectTrigger>
                <SelectValue placeholder="Select content type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="stream">Featured Stream</SelectItem>
                <SelectItem value="mix">Featured Mix</SelectItem>
                <SelectItem value="shop">Featured Shop Item</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input id="title" placeholder="Enter title" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" placeholder="Enter description" rows={3} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="link">Link/URL</Label>
            <Input id="link" type="url" placeholder="https://..." required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="image">Image URL</Label>
            <Input id="image" type="url" placeholder="https://..." />
          </div>

          {type === 'shop' && (
            <div className="space-y-2">
              <Label htmlFor="price">Price</Label>
              <Input id="price" type="number" placeholder="29.99" step="0.01" />
            </div>
          )}

          <Button type="submit" className="w-full">
            <Plus className="w-4 h-4 mr-2" />
            Add Featured Item
          </Button>
        </form>

        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4">Current Featured Items</h3>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>No featured items yet. Add your first one above.</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdminFeatured;
