import { Button } from "@/components/ui/button";
import { Menu, X, User } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold">
              <span className="text-primary">THOB</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
            <a href="#streams" className="text-foreground hover:text-primary transition-colors">Streams</a>
            <a href="#mixes" className="text-foreground hover:text-primary transition-colors">Booth Mixes</a>
            <a href="#shop" className="text-foreground hover:text-primary transition-colors">Shop</a>
            <a href="#events" className="text-foreground hover:text-primary transition-colors">Events</a>
            <a href="#blog" className="text-foreground hover:text-primary transition-colors">Blog</a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm">
                    <User className="w-4 h-4 mr-2" />
                    {user.displayName || user.email}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => navigate('/admin')}>
                    Admin Dashboard
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleSignOut}>
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Button variant="outline" size="sm" onClick={() => navigate('/login')}>
                  Sign In
                </Button>
                <Button size="sm" onClick={() => navigate('/login')}>
                  Join Now
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-3">
            <a href="#home" className="block text-foreground hover:text-primary transition-colors">Home</a>
            <a href="#streams" className="block text-foreground hover:text-primary transition-colors">Streams</a>
            <a href="#mixes" className="block text-foreground hover:text-primary transition-colors">Booth Mixes</a>
            <a href="#shop" className="block text-foreground hover:text-primary transition-colors">Shop</a>
            <a href="#events" className="block text-foreground hover:text-primary transition-colors">Events</a>
            <a href="#blog" className="block text-foreground hover:text-primary transition-colors">Blog</a>
            <div className="flex flex-col gap-2 pt-4">
              {user ? (
                <>
                  <Button variant="outline" size="sm" onClick={() => navigate('/admin')}>
                    Admin Dashboard
                  </Button>
                  <Button variant="outline" size="sm" onClick={handleSignOut}>
                    Sign Out
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="outline" size="sm" onClick={() => navigate('/login')}>
                    Sign In
                  </Button>
                  <Button size="sm" onClick={() => navigate('/login')}>
                    Join Now
                  </Button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;