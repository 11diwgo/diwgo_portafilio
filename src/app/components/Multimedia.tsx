import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-900/80 border border-green-500/30 text-green-400 hover:text-white hover:border-green-400 transition-all"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Prev */}
      {items.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-4 p-2 rounded-full bg-gray-900/80 border border-green-500/30 text-green-400 hover:text-white hover:border-green-400 transition-all"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Image */}
      <motion.div
        key={index}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="relative max-w-[90vw] max-h-[85vh] flex flex-col items-center gap-3"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={src}
          alt={item.caption ?? item.file}
          className="max-w-full max-h-[80vh] object-contain rounded-xl border border-green-500/20 shadow-2xl shadow-green-500/10"
        />
        {item.caption && (
          <p className="text-sm text-green-400/80 font-mono text-center">
            // {item.caption}
          </p>
        )}
        <p className="text-xs text-gray-600 font-mono">
          {index + 1} / {items.length}
        </p>
      </motion.div>

      {/* Next */}
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

// ─── Gallery Grid ─────────────────────────────────────────────────────────────
interface GalleryGridProps {
  category: MediaCategory;
  onOpenLightbox: (index: number) => void;
}

function GalleryGrid({ category, onOpenLightbox }: GalleryGridProps) {
  if (category.items.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center py-24 gap-4 text-center"
      >
        <div className="w-16 h-16 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center">
          <ImageOff className="w-7 h-7 text-green-500/40" />
        </div>
        <div>
          <p className="text-green-700 dark:text-green-400 font-mono text-sm">
            // carpeta vacía
          </p>
          <p className="text-gray-500 dark:text-gray-600 font-mono text-xs mt-1">
            Añade imágenes en{" "}
            <span className="text-green-600 dark:text-green-500">
              public/multimedia/{category.folder}/
            </span>
          </p>
          <p className="text-gray-500 dark:text-gray-600 font-mono text-xs">
            y regístralas en{" "}
            <span className="text-green-600 dark:text-green-500">
              multimedia-config.ts
            </span>
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-3 space-y-3"
    >
      {category.items.map((item, i) => (
        <GalleryCard
          key={item.file}
          item={item}
          folder={category.folder}
          index={i}
          onOpen={onOpenLightbox}
        />
      ))}
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
  const [hovered, setHovered] = useState(false);
  const [error, setError] = useState(false);
  const src = `/multimedia/${folder}/${item.file}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      className="break-inside-avoid mb-3"
    >
      <div
        className="relative group cursor-zoom-in rounded-xl overflow-hidden border border-green-100 dark:border-gray-800 bg-green-50 dark:bg-gray-900 shadow-sm hover:shadow-green-500/10 hover:shadow-lg transition-all duration-300 hover:border-green-400/40"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => onOpen(index)}
      >
        {error ? (
          <div className="flex flex-col items-center justify-center h-40 gap-2 text-gray-400">
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

        {/* Overlay */}
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
                  {item.caption}
                </p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

// ─── Main Multimedia Page ────────────────────────────────────────────────────
export function Multimedia() {
  const [activeTab, setActiveTab] = useState(MULTIMEDIA_CATEGORIES[0].id);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const currentCategory = MULTIMEDIA_CATEGORIES.find((c) => c.id === activeTab)!;

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () =>
    setLightboxIndex((i) =>
      i !== null ? (i - 1 + currentCategory.items.length) % currentCategory.items.length : null
    );
  const nextImage = () =>
    setLightboxIndex((i) =>
      i !== null ? (i + 1) % currentCategory.items.length : null
    );

  return (
    <section className="min-h-screen px-4 py-12 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <div className="flex items-center gap-3 mb-2">
          <div
            className="w-8 h-8 rounded-lg bg-green-500 flex items-center justify-center text-white text-sm"
            style={{ boxShadow: "0 0 15px rgba(34,197,94,0.5)" }}
          >
            ◈
          </div>
          <span className="text-xs font-mono text-green-500 tracking-widest uppercase">
            ~/multimedia
          </span>
        </div>
        <h1
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          Galería de{" "}
          <span className="text-green-500" style={{ textShadow: "0 0 20px rgba(34,197,94,0.4)" }}>
            trabajos
          </span>
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 font-mono mt-2">
          // diseño gráfico para servidores de Minecraft
        </p>
      </motion.div>

      {/* Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="flex flex-wrap gap-2 mb-8"
      >
        {MULTIMEDIA_CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveTab(cat.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-mono transition-all duration-200 border ${
              activeTab === cat.id
                ? "bg-green-500 text-white border-green-500 shadow-lg shadow-green-500/30"
                : "bg-white dark:bg-gray-900 text-green-700 dark:text-green-400 border-green-100 dark:border-gray-800 hover:border-green-400/50"
            }`}
          >
            <span>{cat.label}</span>
            {cat.items.length > 0 && (
              <span
                className={`text-xs px-1.5 py-0.5 rounded-md ${
                  activeTab === cat.id
                    ? "bg-white/20 text-white"
                    : "bg-green-100 dark:bg-gray-800 text-green-600 dark:text-green-400"
                }`}
              >
                {cat.items.length}
              </span>
            )}
          </button>
        ))}
      </motion.div>

      {/* Gallery */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
        >
          <GalleryGrid category={currentCategory} onOpenLightbox={openLightbox} />
        </motion.div>
      </AnimatePresence>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            items={currentCategory.items}
            folder={currentCategory.folder}
            index={lightboxIndex}
            onClose={closeLightbox}
            onPrev={prevImage}
            onNext={nextImage}
          />
        )}
      </AnimatePresence>
    </section>
  );
}