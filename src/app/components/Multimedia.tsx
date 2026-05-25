import React, { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { MULTIMEDIA_CATEGORIES, type MediaItem } from "./multimedia-config";

interface GalleryCardProps {
  item: MediaItem;
  index: number;
  onClick: () => void;
}

const GalleryCard: React.FC<GalleryCardProps> = ({ item, index, onClick }) => {
  const [hovered, setHovered] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const fileExtension = item.file.split(".").pop()?.toUpperCase() || "FILE";

  const getBadgeStyle = (ext: string) => {
    if (ext === "GIF") return "bg-purple-500/80";
    if (ext === "PNG") return "bg-green-600/80";
    if (ext === "JPG" || ext === "JPEG") return "bg-blue-500/80";
    return "bg-gray-600/80";
  };

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onClick={onClick}
      className="relative rounded-lg overflow-hidden cursor-zoom-in group transition-shadow duration-300"
      style={{
        boxShadow: hovered
          ? "0 0 0 2px #22c55e, 0 0 20px 0 rgba(34, 197, 94, 0.25)"
          : "0 0 0 1px rgba(34, 197, 94, 0.1)",
      }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      {/* Skeleton de carga */}
      {!loaded && (
        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse h-40" />
      )}

      {/* Imagen con transición opacity */}
      <div className="relative h-40 overflow-hidden bg-black/5">
        <img
          src={`/portfolio/${item.file}`}
          alt={item.caption || "Imagen multimedia"}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setLoaded(true)}
          onError={() => setLoaded(true)}
        />
      </div>

      {/* Número de ítem #01, #02... */}
      <div className="absolute top-2 left-2 text-[10px] font-mono text-green-400/70 bg-black/40 px-1.5 py-0.5 rounded">
        #{String(index + 1).padStart(2, "0")}
      </div>

      {/* Badge de formato */}
      <div
        className={`absolute top-2 right-2 text-[9px] font-mono tracking-widest text-white px-1.5 py-0.5 rounded ${getBadgeStyle(
          fileExtension
        )}`}
      >
        {fileExtension}
      </div>

      {/* Plugin badge en hover */}
      {item.plugin && hovered && (
        <motion.div
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 4 }}
          className="absolute bottom-2 left-2 right-2 text-[9px] font-mono bg-blue-600/90 text-white px-2 py-1 rounded truncate"
        >
          {item.plugin}
        </motion.div>
      )}

      {/* Caption */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 pt-6">
        <p className="text-xs font-medium text-white line-clamp-2">
          {item.caption || "Sin caption"}
        </p>
      </div>
    </motion.div>
  );
};

interface LightboxProps {
  isOpen: boolean;
  currentIndex: number;
  items: MediaItem[];
  onClose: () => void;
  onNavigate: (index: number) => void;
}

const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  currentIndex,
  items,
  onClose,
  onNavigate,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "ArrowLeft")
        onNavigate(Math.max(0, currentIndex - 1));
      if (e.key === "ArrowRight")
        onNavigate(Math.min(items.length - 1, currentIndex + 1));
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentIndex, items.length, onNavigate, onClose]);

  if (!isOpen || items.length === 0) return null;

  const currentItem = items[currentIndex];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
        onClick={onClose}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
        }}
      >
        {/* Botón cerrar */}
        <motion.button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/75 text-white transition-colors z-10"
          whileHover={{ scale: 1.1 }}
        >
          <X size={24} />
        </motion.button>

        {/* Contenedor imagen */}
        <motion.div
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-3xl max-h-[80vh] w-full mx-4"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
        >
          <img
            src={`/portfolio/${currentItem.file}`}
            alt={currentItem.caption}
            className="w-full h-full object-contain rounded-lg"
          />

          {/* Navegación lateral */}
          {currentIndex > 0 && (
            <motion.button
              onClick={(e) => {
                e.stopPropagation();
                onNavigate(currentIndex - 1);
              }}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              <ChevronLeft size={28} />
            </motion.button>
          )}

          {currentIndex < items.length - 1 && (
            <motion.button
              onClick={(e) => {
                e.stopPropagation();
                onNavigate(currentIndex + 1);
              }}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              <ChevronRight size={28} />
            </motion.button>
          )}

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4 rounded-b-lg"
          >
            <p className="text-white text-sm font-medium mb-1">
              {currentItem.caption}
            </p>
            {currentItem.plugin && (
              <p className="text-green-400/70 text-xs font-mono">
                Plugin: {currentItem.plugin}
              </p>
            )}
            {currentItem.tags && currentItem.tags.length > 0 && (
              <p className="text-green-400/70 text-xs font-mono">
                Tags: {currentItem.tags.join(", ")}
              </p>
            )}
            <p className="text-white/50 text-xs mt-2">
              {currentIndex + 1} / {items.length} • Usa las flechas para navegar
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export const Multimedia: React.FC = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [activeTag, setActiveTag] = useState<string>("Todos");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [direction, setDirection] = useState<1 | -1>(1);

  const currentCategory = MULTIMEDIA_CATEGORIES[activeCategoryIndex];

  // IntersectionObserver para header
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setHeaderVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Extrae tags únicos de la categoría actual
  const allTags = Array.from(
    new Set(
      currentCategory.items
        .filter((item) => item.tags && item.tags.length > 0)
        .flatMap((item) => item.tags || [])
    )
  ).sort();

  const hasTagsInCategory = allTags.length > 0;

  // Filtra items según tag activo
  const displayedItems =
    activeTag === "Todos"
      ? currentCategory.items
      : currentCategory.items.filter((item) =>
          item.tags?.includes(activeTag)
        );

  // Maneja cambio de categoría
  const handleCategoryChange = (index: number) => {
    setDirection(index > activeCategoryIndex ? 1 : -1);
    setActiveCategoryIndex(index);
    setActiveTag("Todos"); // Reset tag al cambiar categoría
    setLightboxOpen(false);
  };

  // Maneja click en imagen (lightbox)
  const handleImageClick = (displayedIndex: number) => {
    // Encuentra el índice en el array completo (sin filtro de tags)
    const actualIndex = currentCategory.items.findIndex(
      (item) => item === displayedItems[displayedIndex]
    );
    setLightboxIndex(actualIndex);
    setLightboxOpen(true);
  };

  // Navega en lightbox
  const handleLightboxNavigate = (newIndex: number) => {
    setLightboxIndex(newIndex);
  };

  // Calcula totales
  const totalItems = MULTIMEDIA_CATEGORIES.reduce(
    (acc, cat) => acc + cat.items.length,
    0
  );
  const totalCategories = MULTIMEDIA_CATEGORIES.length;

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-white dark:bg-gray-950 py-20 px-4"
      style={{ cursor: "crosshair" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header con animación de entrada */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={headerVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
            Multimedia
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">
            Diseño gráfico para servidores de Minecraft.
          </p>
          <p className="font-mono text-xs text-green-500/70">
            {totalItems} trabajos · {totalCategories} categorías
          </p>
        </motion.div>

        {/* Tabs de categorías */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={headerVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex gap-2 mb-8 overflow-x-auto pb-2"
        >
          {MULTIMEDIA_CATEGORIES.map((category, index) => (
            <button
              key={index}
              onClick={() => handleCategoryChange(index)}
              className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
                activeCategoryIndex === index
                  ? "bg-green-500 text-white shadow-lg shadow-green-500/30"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Chips de tags */}
        <AnimatePresence mode="wait">
          {hasTagsInCategory && (
            <motion.div
              key={`tags-${activeCategoryIndex}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex gap-2 mb-8 overflow-x-auto pb-2 flex-wrap"
            >
              <motion.button
                key="todos"
                layoutId="active-tag"
                onClick={() => setActiveTag("Todos")}
                className={`font-mono text-xs px-3 py-1 rounded-full transition-all whitespace-nowrap ${
                  activeTag === "Todos"
                    ? "bg-green-500 text-white"
                    : "border border-green-500 text-green-500 bg-transparent hover:bg-green-500/10"
                }`}
              >
                Todos
              </motion.button>

              <AnimatePresence mode="popLayout">
                {allTags.map((tag) => (
                  <motion.button
                    key={tag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    onClick={() => setActiveTag(tag)}
                    className={`font-mono text-xs px-3 py-1 rounded-full transition-all whitespace-nowrap ${
                      activeTag === tag
                        ? "bg-green-500 text-white"
                        : "border border-green-500 text-green-500 bg-transparent hover:bg-green-500/10"
                    }`}
                  >
                    {tag}
                  </motion.button>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Galería con transición wipe */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`gallery-${activeCategoryIndex}-${activeTag}`}
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(100% 0 0 0)" }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {displayedItems.map((item, index) => (
              <GalleryCard
                key={`${activeCategoryIndex}-${index}`}
                item={item}
                index={index}
                onClick={() => handleImageClick(index)}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Mensaje si no hay items con tags seleccionados */}
        {displayedItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-500 dark:text-gray-400">
              No hay elementos con el tag "{activeTag}"
            </p>
          </motion.div>
        )}
      </div>

      {/* Lightbox */}
      <Lightbox
        isOpen={lightboxOpen}
        currentIndex={lightboxIndex}
        items={currentCategory.items}
        onClose={() => setLightboxOpen(false)}
        onNavigate={handleLightboxNavigate}
      />
    </section>
  );
};

export default Multimedia;