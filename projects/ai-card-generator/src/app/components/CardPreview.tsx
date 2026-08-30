interface CardPreviewProps {
  title: string;
  description: string;
}

export function CardPreview({ title, description }: CardPreviewProps) {
  return (
    <div className="w-full aspect-square max-w-lg mx-auto">
      <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/90 p-12 flex flex-col justify-between shadow-2xl shadow-primary/20">
        {/* Subtle AI glow effect */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-foreground/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-foreground/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        {/* Grid pattern overlay for AI aesthetic */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(var(--primary-foreground) 1px, transparent 1px),
                              linear-gradient(90deg, var(--primary-foreground) 1px, transparent 1px)`,
            backgroundSize: '20px 20px',
          }}
        />

        {/* Content */}
        <div className="relative z-10 space-y-6">
          <h3 className="text-primary-foreground leading-tight break-words" style={{ fontSize: '2rem', fontWeight: 600 }}>
            {title}
          </h3>
          <p className="text-primary-foreground/80 leading-relaxed" style={{ fontSize: '1rem' }}>
            {description}
          </p>
        </div>

        {/* Bottom accent line */}
        <div className="relative z-10 flex items-end justify-between">
          <div className="h-1 w-24 bg-primary-foreground/30 rounded-full" />
          <div className="w-2 h-2 rounded-full bg-primary-foreground/40" />
        </div>
      </div>
    </div>
  );
}
