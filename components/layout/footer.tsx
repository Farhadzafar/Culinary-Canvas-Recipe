export function Footer() {
  return (
    <footer className="bg-muted mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 text-center md:text-left md:grid-cols-4 md:items-start gap-8">
          <div>
            <h3 className="font-bold mb-4">Culinary Canvas</h3>
            <p className="text-sm text-muted-foreground">
              Discover and share delicious recipes from around the world.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>Home</li>
              <li>Recipes</li>
              <li>Categories</li>
              <li>About</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li>Breakfast</li>
              <li>Lunch</li>
              <li>Dinner</li>
              <li>Desserts</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li>Instagram</li>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Pinterest</li>
            </ul>
          </div>
        </div>
        <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Culinary Canvas. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
