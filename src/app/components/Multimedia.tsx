"use client";

import { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { MULTIMEDIA_CATEGORIES, type MediaItem } from "./multimedia-config";

interface GalleryCardProps {
  item: MediaItem;
  index: number;
  onClick: () => void;
}

const GalleryCard = ({ item, index, onClick }: GalleryCardProps) => {
  const [hovered, setHovered] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const fileExtension = item.file.split(".").pop()?.toUpperCase() || "FILE";

  const getBadgeColor = (ext: string) => {
    if (ext === "GIF") return "bg-purple-500/80";
    if (ext === "PNG") return "bg-green-600/80";
    if (ext === "JPG" || ext === "JPEG") return "bg-blue-500/80";
    return "bg-gray-600/80";
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      className="relative cursor-zoom-in group"
      style={{
        boxShadow: hovered
          ? "0 0 0 2px #22c55e, 0 0 20px 0 rgba(34, 197, 94, 0.25)"
          : "none",
        transition: "box-shadow 300ms ease-out",
      }}
    >
      {/* Item index badge - top left */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="absolute top-2 left-2 z-10 bg-black/40 text-green-400/70 text-[10px] font-mono px-1.5 py-0.5 rounded"
      >
        #{String(index + 1).padStart(2, "0")}
      </motion.div>

      {/* Format badge - top right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15 }}
        className={`absolute top-2 right-2 z-10 text-white text-[9px] font-mono tracking-widest px-1.5 py-0.5 rounded ${getBadgeColor(
          fileExtension
        )}`}
      >
        {fileExtension}
      </motion.div>

      {/* Skeleton loader */}
      <div className="relative w-full h-40 bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden">
        {!loaded && (
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 dark:via-white/10 to-transparent"
          />
        )}

        {/* Image with fade-in transition */}
        <motion.img
          src={`/multimedia/${item.file}`}
          alt={item.caption || "Gallery item"}
          className="w-full h-full object-cover rounded-lg"
          style={{
            opacity: loaded ? 1 : 0,
          }}
          transition={{ opacity: { duration: 0.5 } }}
          onLoad={() => setLoaded(true)}
        />
      </div>

      {/* Caption */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300 line-clamp-2"
      >
        {item.caption || "Sin descripción"}
      </motion.p>

      {/* Hover effect overlay */}
      {hovered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/20 rounded-lg pointer-events-none"
        />
      )}
    </motion.div>
  );
};

interface LightboxProps {
  items: MediaItem[];
  initialIndex: number;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

const Lightbox = ({
  items,
  initialIndex,
  onClose,
  onNavigate,
}: LightboxProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const handlePrevious = () => {
    const newIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    onNavigate(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex === items.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    onNavigate(newIndex);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrevious();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, items.length]);

  const currentItem = items[currentIndex];
  const fileExtension =
    currentItem.file.split(".").pop()?.toUpperCase() || "FILE";

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
          backgroundColor: "rgba(0, 0, 0, 0.9)",
        }}
      >
        {/* Close button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={onClose}
          className="absolute top-4 right-4 z-50 text-white hover:text-green-400 transition-colors"
          aria-label="Close lightbox"
        >
          <X size={24} />
        </motion.button>

        {/* Main content */}
        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="relative max-w-4xl max-h-[90vh] w-full mx-4"
        >
          {/* Image */}
          <div className="relative bg-black rounded-lg overflow-hidden">
            <motion.img
              key={currentIndex}
              src={`/multimedia/${currentItem.file}`}
              alt={currentItem.caption || "Gallery item"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="w-full h-auto max-h-[80vh] object-contain"
            />

            {/* Format badge in lightbox */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="absolute top-4 right-4 bg-black/60 text-white text-xs font-mono tracking-widest px-2 py-1 rounded"
            >
              {fileExtension}
            </motion.div>

            {/* Counter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
              className="absolute bottom-4 right-4 bg-black/60 text-green-400 text-xs font-mono px-3 py-1 rounded"
            >
              {currentIndex + 1} / {items.length}
            </motion.div>
          </div>

          {/* Caption */}
          {currentItem.caption && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-center text-gray-200 text-sm font-medium"
            >
              {currentItem.caption}
            </motion.p>
          )}

          {/* Navigation buttons */}
          <motion.button
            whileHover={{ scale: 1.1, x: -4 }}
            whileTap={{ scale: 0.95 }}
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-green-400 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft size={32} />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1, x: 4 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-green-400 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight size={32} />
          </motion.button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default function Multimedia() {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [selectedTag, setSelectedTag] = useState("Todos");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [direction, setDirection] = useState(1);
  const sectionRef = useRef<HTMLElement>(null);

  const currentCategory = MULTIMEDIA_CATEGORIES[selectedCategory];

  // Get unique tags from current category
  const availableTags = Array.from(
    new Set(
      currentCategory.items
        .flatMap((item) => item.tags || [])
        .filter(Boolean)
    )
  ).sort();

  const hasAnyTags = currentCategory.items.some((item) => item.tags?.length);

  // Filter items by selected tag
  const displayedItems =
    selectedTag === "Todos"
      ? currentCategory.items
      : currentCategory.items.filter((item) =>
          item.tags?.includes(selectedTag)
        );

  const handleCategoryChange = (index: number) => {
    setDirection(index > selectedCategory ? 1 : -1);
    setSelectedCategory(index);
    setSelectedTag("Todos");
    setLightboxOpen(false);
  };

  const handleTagSelect = (tag: string) => {
    setSelectedTag(tag);
  };

  const handleGalleryClick = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const handleLightboxNavigate = (newIndex: number) => {
    setLightboxIndex(newIndex);
  };

  // Intersection observer for header
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setHeaderVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Calculate totals
  const totalItems = MULTIMEDIA_CATEGORIES.reduce(
    (acc, c) => acc + c.items.length,
    0
  );
  const totalCats = MULTIMEDIA_CATEGORIES.length;

  return (
    <section
      ref={sectionRef}
      className="py-20 px-4 md:px-8 bg-gradient-to-b from-gray-900 via-gray-900 to-black"
      style={{ cursor: "crosshair" }}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={headerVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 font-mono">
          Multimedia
        </h2>
        <p className="text-gray-400 text-base md:text-lg">
          Diseño gráfico para servidores de Minecraft.
        </p>
        <p className="text-green-500/70 text-xs font-mono mt-2">
          {totalItems} trabajos · {totalCats} categorías
        </p>
      </motion.div>

      {/* Category tabs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={headerVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="max-w-6xl mx-auto mb-8"
      >
        <div className="flex flex-wrap gap-3">
          {MULTIMEDIA_CATEGORIES.map((category, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleCategoryChange(index)}
              className={`px-6 py-2.5 rounded-full font-mono text-sm font-medium transition-all duration-300 ${
                selectedCategory === index
                  ? "bg-green-500 text-black shadow-lg shadow-green-500/50"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700"
              }`}
            >
              {category.label}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Tag filter chips */}
      <AnimatePresence>
        {hasAnyTags && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="max-w-6xl mx-auto mb-6"
          >
            <div className="flex flex-wrap gap-2">
              {/* "Todos" chip */}
              <motion.button
                layout
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleTagSelect("Todos")}
                className={`font-mono text-xs px-3 py-1 rounded-full transition-all duration-200 ${
                  selectedTag === "Todos"
                    ? "bg-green-500 text-white"
                    : "border border-green-500/50 text-green-500/70 hover:border-green-500 hover:text-green-500"
                }`}
              >
                Todos
              </motion.button>

              {/* Individual tag chips */}
              <AnimatePresence mode="popLayout">
                {availableTags.map((tag) => (
                  <motion.button
                    key={tag}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleTagSelect(tag)}
                    className={`font-mono text-xs px-3 py-1 rounded-full transition-all duration-200 ${
                      selectedTag === tag
                        ? "bg-green-500 text-white shadow-lg shadow-green-500/30"
                        : "border border-green-500/50 text-green-500/70 hover:border-green-500 hover:text-green-500"
                    }`}
                  >
                    {tag}
                  </motion.button>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Gallery grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-6xl mx-auto"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedCategory}-${selectedTag}`}
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(100% 0 0 0)" }}
            transition={{
              duration: 0.35,
              ease: [0.4, 0, 0.2, 1],
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {displayedItems.length > 0 ? (
              displayedItems.map((item, index) => (
                <GalleryCard
                  key={`${item.file}-${index}`}
                  item={item}
                  index={index}
                  onClick={() => handleGalleryClick(index)}
                />
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full text-center py-12"
              >
                <p className="text-gray-400 text-sm font-mono">
                  No hay elementos con la etiqueta "{selectedTag}"
                </p>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          items={currentCategory.items}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
          onNavigate={handleLightboxNavigate}
        />
      )}
    </section>
  );
}