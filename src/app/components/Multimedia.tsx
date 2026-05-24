import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ZoomIn, ChevronLeft, ChevronRight, ImageOff } from "lucide-react";
import { MULTIMEDIA_CATEGORIES, type MediaCategory, type MediaItem } from "./multimedia-config";

// ─── Lightbox ────────────────────────────────────────────────────────────────
interface LightboxProps {
  items: MediaItem[];
  folder: string;
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

function Lightbox({ items, folder, index, onClose, onPrev, onNext }: LightboxProps) {
  const item = items[index];
  const src = `/multimedia/${folder}/${item.file}`;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onPrev, onNext]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-900/80 border border-green-500/30 text-green-400 hover:text-white hover:border-green-400 transition-all"
      >
        <X className="w-5 h-5" />
      </button>

      {items.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-4 p-2 rounded-full bg-gray-900/80 border border-green-500/30 text-green-400 hover:text-white hover:border-green-400 transition-all"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      <motion.div
        key={index}
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.92, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="relative max-w-[90vw] max-h-[85vh] flex flex-col items-center gap-3"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={src}
          alt={item.caption ?? item.file}
          className="max-w-full max-h-[80vh] object-contain rounded-2xl border border-green-500/20 shadow-2xl"
        />
        {item.caption && (
          <p className="text-sm text-green-400 font-mono text-center">
            // {item.caption}
          </p>
        )}
        <p className="text-xs text-gray-600 font-mono">{index + 1} / {items.length}</p>
      </motion.div>

      {items.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-4 p-2 rounded-full bg-gray-900/80 border border-green-500/30 text-green-400 hover:text-white hover:border-green-400 transition-all"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}
    </motion.div>
  );
}

// ─── Gallery Card ─────────────────────────────────────────────────────────────
interface GalleryCardProps {
  item: MediaItem;
  folder: string;
  index: number;
  onOpen: (index: number) => void;
}

function GalleryCard({ item, folder, index, onOpen }: GalleryCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [error, setError] = useState(false);
  const src = `/multimedia/${folder}/${item.file}`;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="break-inside-avoid mb-3 transition-all duration-700"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(20px)",
        transitionDelay: `${(index % 8) * 60}ms`,
      }}
    >
      <div
        className="relative group cursor-zoom-in rounded-2xl overflow-hidden border border-green-200 dark:border-border bg-green-50/80 dark:bg-card card-hover"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => onOpen(index)}
      >
        {error ? (
          <div className="flex flex-col items-center justify-center h-40 gap-2 text-gray-400 dark:text-muted-foreground">
            <ImageOff className="w-8 h-8" />
            <span className="text-xs font-mono">{item.file}</span>
          </div>
        ) : (
          <img
            src={src}
            alt={item.caption ?? item.file}
            onError={() => setError(true)}
            className="w-full h-auto block transition-transform duration-500 group-hover:scale-105"
          />
        )}

        <AnimatePresence>
          {hovered && !error && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center gap-2"
            >
              <ZoomIn className="w-6 h-6 text-green-400" />
              {item.caption && (
                <p className="text-white text-xs font-mono px-3 text-center">
                  // {item.caption}
                </p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

// ─── Empty State ─────────────────────────────────────────────────────────────
function EmptyState({ category }: { category: MediaCategory }) {
  return (
    <div className="flex flex-col items-center justify-center py-24 gap-4 text-center">
      <div className="w-14 h-14 rounded-2xl bg-green-50 dark:bg-muted border border-green-200 dark:border-border flex items-center justify-center">
        <ImageOff className="w-6 h-6 text-green-400 dark:text-green-600" />
      </div>
      <div>
        <p className="text-sm font-mono text-green-600 dark:text-green-400 mb-1">
          // carpeta_vacía
        </p>
        <p className="text-xs font-mono text-gray-400 dark:text-muted-foreground">
          Añade imágenes en{" "}
          <span className="text-green-600 dark:text-green-400">
            public/multimedia/{category.folder}/
          </span>
        </p>
      </div>
    </div>
  );
}

// ─── Main ────────────────────────────────────────────────────────────────────
export function Multimedia() {
  const [activeTab, setActiveTab] = useState(MULTIMEDIA_CATEGORIES[0].id);
  const [direction, setDirection] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);

  const currentCategory = MULTIMEDIA_CATEGORIES.find((c) => c.id === activeTab)!;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setHeaderVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  const prevImage = () =>
    setLightboxIndex((i) =>
      i !== null ? (i - 1 + currentCategory.items.length) % currentCategory.items.length : null
    );
  const nextImage = () =>
    setLightboxIndex((i) =>
      i !== null ? (i + 1) % currentCategory.items.length : null
    );

  return (
    <section className="py-20 bg-green-50/40 dark:bg-background transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div
            ref={headerRef}
            className="text-center mb-12 transition-all duration-700"
            style={{ opacity: headerVisible ? 1 : 0, transform: headerVisible ? "none" : "translateY(24px)" }}
          >
            <div
              className="inline-flex items-center gap-2 bg-gray-900 text-green-400 px-4 py-2 rounded-full mb-6 border border-gray-700"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              <span className="text-xs">ls ./multimedia --all</span>
            </div>
            <h2
              className="text-5xl md:text-6xl font-black text-gray-900 dark:text-foreground mb-4"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Mis{" "}
              <span
                className="text-transparent"
                style={{
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  backgroundImage: "linear-gradient(135deg, #16a34a, #22c55e, #4ade80)",
                  backgroundSize: "200% auto",
                  animation: "shimmer 3s linear infinite",
                }}
              >
                Trabajos
              </span>
            </h2>
            <p className="text-gray-500 dark:text-muted-foreground">
              Diseño gráfico para servidores de Minecraft.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {MULTIMEDIA_CATEGORIES.map((cat) => {
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    const oldIdx = MULTIMEDIA_CATEGORIES.findIndex((c) => c.id === activeTab);
                    const newIdx = MULTIMEDIA_CATEGORIES.findIndex((c) => c.id === cat.id);
                    setDirection(newIdx > oldIdx ? 1 : -1);
                    setActiveTab(cat.id);
                  }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all duration-200 border ${
                    isActive
                      ? "bg-green-500 text-white border-green-500 shadow-lg shadow-green-500/30 font-bold"
                      : "bg-white dark:bg-card text-green-700 dark:text-green-400 border-green-200 dark:border-border hover:border-green-400 dark:hover:border-green-600"
                  }`}
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  <span>{cat.label}</span>
                  {cat.items.length > 0 && (
                    <span
                      className={`text-xs px-1.5 py-0.5 rounded-md ${
                        isActive
                          ? "bg-white/20 text-white"
                          : "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 border border-green-200 dark:border-green-800"
                      }`}
                    >
                      {cat.items.length}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Gallery */}
          <div className="overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeTab}
              custom={direction}
              variants={{
                enter: (d: number) => ({ opacity: 0, x: d * 40, filter: "blur(4px)" }),
                center: { opacity: 1, x: 0, filter: "blur(0px)" },
                exit: (d: number) => ({ opacity: 0, x: d * -40, filter: "blur(4px)" }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            >
              {currentCategory.items.length === 0 ? (
                <EmptyState category={currentCategory} />
              ) : (
                <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-3">
                  {currentCategory.items.map((item, i) => (
                    <GalleryCard
                      key={item.file}
                      item={item}
                      folder={currentCategory.folder}
                      index={i}
                      onOpen={setLightboxIndex}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
          </div>

        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            items={currentCategory.items}
            folder={currentCategory.folder}
            index={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
            onPrev={prevImage}
            onNext={nextImage}
          />
        )}
      </AnimatePresence>
    </section>
  );
}