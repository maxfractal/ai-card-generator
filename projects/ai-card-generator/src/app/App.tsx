import { useState } from 'react';
import { CardPreview } from './components/CardPreview';
import { Sparkles } from 'lucide-react';

export default function App() {
  const [prompt, setPrompt] = useState('');
  const [cardData, setCardData] = useState({
    title: 'Your Card Title',
    description: 'This is where your generated card description will appear. Enter a prompt above to get started.',
  });
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    if (!prompt.trim()) return;

    setIsGenerating(true);

    // Simulate AI generation with mock data
    setTimeout(() => {
      setCardData({
        title: `Generated: ${prompt.slice(0, 30)}${prompt.length > 30 ? '...' : ''}`,
        description: `This is a dynamically generated card based on your prompt: "${prompt}". In a real implementation, this would be powered by AI to create compelling, contextual content.`,
      });
      setIsGenerating(false);
    }, 1200);
  };

  const handleExport = () => {
    // Mock export functionality
    console.log('Exporting card as PNG...', cardData);
    alert('Export functionality would generate a PNG of your card here.');
  };

  return (
    <div className="size-full bg-background text-foreground flex flex-col">
      {/* Top Section - Prompt Input */}
      <div className="w-full border-b border-border/50 bg-gradient-to-b from-background to-background/95">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-5 h-5 text-primary/60" />
              <h1 className="text-foreground/90">AI Card Generator</h1>
            </div>

            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Describe the card you want to generate..."
              className="w-full h-32 px-4 py-3 bg-input-background border border-border/50 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all placeholder:text-muted-foreground/50"
            />

            <button
              onClick={handleGenerate}
              disabled={!prompt.trim() || isGenerating}
              className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 active:scale-[0.99] transition-all disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {isGenerating ? (
                  <>
                    <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    Generate Card
                  </>
                )}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary-foreground/10 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content - Two Column Layout */}
      <div className="flex-1 overflow-auto">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Card Preview */}
            <div className="space-y-4">
              <div className="text-sm text-muted-foreground">Preview</div>
              <CardPreview title={cardData.title} description={cardData.description} />
            </div>

            {/* Right Column - Edit Panel */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-foreground/90">Edit Card</h2>

                <div className="space-y-2">
                  <label htmlFor="title" className="block text-foreground/80">
                    Title
                  </label>
                  <input
                    id="title"
                    type="text"
                    value={cardData.title}
                    onChange={(e) => setCardData({ ...cardData, title: e.target.value })}
                    className="w-full px-4 py-2.5 bg-input-background border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="description" className="block text-foreground/80">
                    Description
                  </label>
                  <textarea
                    id="description"
                    value={cardData.description}
                    onChange={(e) => setCardData({ ...cardData, description: e.target.value })}
                    rows={6}
                    className="w-full px-4 py-2.5 bg-input-background border border-border/50 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all"
                  />
                </div>
              </div>

              <button
                onClick={handleExport}
                className="w-full px-6 py-3 bg-secondary text-secondary-foreground border border-border/30 rounded-xl hover:bg-accent transition-all active:scale-[0.99]"
              >
                Export as PNG
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
