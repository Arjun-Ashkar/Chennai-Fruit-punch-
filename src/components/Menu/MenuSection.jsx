import React, { useState, useMemo } from 'react';
import './MenuSection.css';
import MenuCard from './MenuCard';
import ComboCard from './ComboCard';
import { menuCategories, getAllItems } from '../../data/menuData';

export default function MenuSection({ selectedCategory, onSelectCategory }) {
  const [activeCategory, setActiveCategory] = useState(selectedCategory || 'all');
  const [searchQuery, setSearchQuery] = useState('');

  // Sync with prop if changed from QuickHighlights
  React.useEffect(() => {
    if (selectedCategory) {
      setActiveCategory(selectedCategory);
    }
  }, [selectedCategory]);

  const handleCategoryClick = (slug) => {
    setActiveCategory(slug);
    if (onSelectCategory) {
      onSelectCategory(slug);
    }
  };

  // Extract combo items separately
  const comboCategory = menuCategories.find((c) => c.slug === 'combo-offers');
  const combos = comboCategory ? comboCategory.items : [];

  // Current category data for extras note
  const currentCategoryData = menuCategories.find((c) => c.slug === activeCategory);

  // Filter items based on activeCategory and searchQuery
  const filteredItems = useMemo(() => {
    let items = [];

    if (activeCategory === 'all') {
      // Exclude combo items from regular grid since they have special cards
      items = getAllItems().filter((item) => !item.isCombo);
    } else if (activeCategory === 'combo-offers') {
      items = []; // handled by combos grid
    } else {
      const cat = menuCategories.find((c) => c.slug === activeCategory);
      items = cat ? cat.items.map((it) => ({ ...it, categoryName: cat.name, categorySlug: cat.slug })) : [];
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      // In search mode, search across ALL items including combos
      const allSearchable = getAllItems();
      return allSearchable.filter(
        (it) =>
          it.name.toLowerCase().includes(q) ||
          (it.description && it.description.toLowerCase().includes(q)) ||
          it.categoryName.toLowerCase().includes(q)
      );
    }

    return items;
  }, [activeCategory, searchQuery]);

  const showCombos = (activeCategory === 'all' || activeCategory === 'combo-offers') && !searchQuery.trim();

  return (
    <section id="menu" className="section menu-section" aria-label="Chennai Fruit Punch Menu">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Delicious Choices</span>
          <h2 className="section-title">Explore Our Menu</h2>
          <p className="section-subtitle">
            Something refreshing. Something delicious. Something for everyone.
          </p>
          <div className="title-underline"></div>
          <p className="menu-image-disclaimer">
            Food images are for illustrative purposes only. Actual dishes, portions, ingredients, and presentation may vary.
          </p>
        </div>

        {/* Dynamic Search Box */}
        <div className="menu-search-wrapper">
          <div className="menu-search-input-box">
            <span className="menu-search-icon" aria-hidden="true">🔍</span>
            <input
              type="text"
              className="menu-search-input"
              placeholder="Search your craving... (e.g. mango, burger, falooda)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search menu items"
            />
            {searchQuery && (
              <button
                type="button"
                className="menu-search-clear"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Category Pills Navigation */}
        <div className="menu-categories-nav">
          <div className="categories-scroll-container" role="tablist" aria-label="Menu categories">
            <button
              type="button"
              className={`category-pill-btn ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={() => handleCategoryClick('all')}
              role="tab"
              aria-selected={activeCategory === 'all'}
            >
              <span>✨</span>
              <span>ALL</span>
            </button>

            {menuCategories.map((cat) => (
              <button
                key={cat.slug}
                type="button"
                className={`category-pill-btn ${activeCategory === cat.slug ? 'active' : ''}`}
                onClick={() => handleCategoryClick(cat.slug)}
                role="tab"
                aria-selected={activeCategory === cat.slug}
              >
                <span>{cat.icon}</span>
                <span>{cat.name.toUpperCase()}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Category Extras Note if any */}
        {currentCategoryData && currentCategoryData.extras && !searchQuery && (
          <div className="category-extras-banner">
            <span style={{ fontSize: '18px' }}>💡</span>
            <span>Customise: {currentCategoryData.extras.join(' | ')}</span>
          </div>
        )}

        {/* Prominent Combo Offers Section */}
        {showCombos && (
          <div className="combos-container">
            <div className="combos-title-bar">
              <h3 className="combos-heading">
                <span>🔥</span>
                <span>Featured Combo Offers</span>
              </h3>
              <span style={{ fontSize: '13px', color: 'var(--text-muted)', fontWeight: 600 }}>
                High value meal sets
              </span>
            </div>

            <div className="combos-grid">
              {combos.map((combo) => (
                <ComboCard key={combo.id} combo={combo} />
              ))}
            </div>
          </div>
        )}

        {/* Regular Menu Items Grid */}
        {activeCategory !== 'combo-offers' && (
          <>
            {filteredItems.length > 0 ? (
              <div className="menu-items-grid">
                {filteredItems.map((item) => (
                  <MenuCard key={item.id} item={item} />
                ))}
              </div>
            ) : (
              <div className="empty-menu-state">
                <div className="empty-icon">🍽️</div>
                <h3 className="empty-title">No items found</h3>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
                  We couldn't find any items matching “{searchQuery}”. Try searching for “juice”, “burger”, or “fries”.
                </p>
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  style={{ marginTop: '16px' }}
                  onClick={() => setSearchQuery('')}
                >
                  Clear Search
                </button>
              </div>
            )}
          </>
        )}

      </div>
    </section>
  );
}
