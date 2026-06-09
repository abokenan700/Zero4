import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { categories, heroTiles, products, quickActions, type Category, type Product } from './src/catalog';

const YELLOW = '#f7cb46';
const GREEN = '#0c831f';
const TEXT = '#1f1f1f';
const MUTED = '#6b6b6b';

function BrandLogo() {
  return (
    <View style={styles.logoLockup}>
      <Text style={styles.logoText}>blink</Text>
      <Text style={[styles.logoText, styles.logoGreen]}>it</Text>
    </View>
  );
}

function LocationHeader() {
  return (
    <View style={styles.header}>
      <View style={styles.topRow}>
        <View style={styles.deliveryBadge}>
          <Text style={styles.deliveryBig}>8</Text>
          <View>
            <Text style={styles.deliverySmall}>minutes</Text>
            <Text style={styles.deliverySub}>delivery</Text>
          </View>
        </View>
        <Pressable style={styles.profileButton}>
          <Text style={styles.iconGlyph}>👤</Text>
        </Pressable>
      </View>

      <Text style={styles.locationTitle}>Home - HSR Layout</Text>
      <View style={styles.locationLine}>
        <Text numberOfLines={1} style={styles.locationCopy}>
          2nd Main Road, Sector 7, Bengaluru
        </Text>
        <Text style={styles.chevron}>⌄</Text>
      </View>

      <View style={styles.searchBar}>
        <Text style={styles.searchIcon}>⌕</Text>
        <TextInput
          editable={false}
          pointerEvents="none"
          value="Search for milk, atta, chips"
          style={styles.searchText}
        />
        <Text style={styles.searchIcon}>🎙</Text>
      </View>
    </View>
  );
}

function ActionChip({ item }: { item: Category }) {
  return (
    <View style={styles.actionChip}>
      <View style={[styles.actionIcon, { backgroundColor: item.tint }]}>
        <Text style={styles.actionEmoji}>{item.icon}</Text>
      </View>
      <Text style={styles.actionText}>{item.label}</Text>
    </View>
  );
}

function PromoHero() {
  return (
    <View style={styles.promoCard}>
      <View style={styles.promoCopy}>
        <Text style={styles.promoEyebrow}>Weekend Super Saver</Text>
        <Text style={styles.promoTitle}>Fresh groceries at your doorstep</Text>
        <Text style={styles.promoSubtitle}>Get ₹125 OFF on orders above ₹499</Text>
        <Pressable style={styles.shopNowButton}>
          <Text style={styles.shopNowText}>Shop now</Text>
          <Text style={styles.arrowIcon}>›</Text>
        </Pressable>
      </View>
      <View style={styles.promoBasket}>
        <Text style={styles.basketEmoji}>🥬</Text>
        <Text style={[styles.basketEmoji, styles.basketEmojiFloat]}>🍎</Text>
        <Text style={[styles.basketEmoji, styles.basketEmojiFloatTwo]}>🥖</Text>
      </View>
    </View>
  );
}

function HeroTile({ tile }: { tile: (typeof heroTiles)[number] }) {
  return (
    <View style={[styles.heroTile, { backgroundColor: tile.bg }]}>
      <Text style={styles.heroEmoji}>{tile.emoji}</Text>
      <Text style={styles.heroTitle}>{tile.title}</Text>
      <Text style={styles.heroSubtitle}>{tile.subtitle}</Text>
    </View>
  );
}

function CategoryCard({ item }: { item: Category }) {
  return (
    <View style={styles.categoryCard}>
      <View style={[styles.categoryIconWrap, { backgroundColor: item.tint }]}>
        <Text style={styles.categoryEmoji}>{item.icon}</Text>
      </View>
      <Text style={styles.categoryLabel} numberOfLines={2}>
        {item.label}
      </Text>
    </View>
  );
}

function ProductCard({ item }: { item: Product }) {
  return (
    <View style={styles.productCard}>
      {item.badge ? <Text style={styles.productBadge}>{item.badge}</Text> : null}
      <View style={[styles.productImage, { backgroundColor: item.color }]}>
        <Text style={styles.productEmoji}>{item.emoji}</Text>
      </View>
      <View style={styles.timePill}>
        <Text style={styles.clockIcon}>◷</Text>
        <Text style={styles.timeText}>{item.tag}</Text>
      </View>
      <Text style={styles.productName} numberOfLines={2}>
        {item.name}
      </Text>
      <Text style={styles.productQuantity}>{item.quantity}</Text>
      <View style={styles.productFooter}>
        <View>
          <Text style={styles.productPrice}>{item.price}</Text>
          {item.mrp ? <Text style={styles.productMrp}>{item.mrp}</Text> : null}
        </View>
        <Pressable style={styles.addButton}>
          <Text style={styles.addButtonText}>ADD</Text>
        </Pressable>
      </View>
    </View>
  );
}

function SectionHeader({ title, action }: { title: string; action?: string }) {
  return (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {action ? <Text style={styles.sectionAction}>{action}</Text> : null}
    </View>
  );
}

function BottomNav() {
  const tabs = [
    { label: 'Home', icon: '⌂', active: true },
    { label: 'Categories', icon: '▦' },
    { label: 'Cart', icon: '🛒' },
  ];

  return (
    <View style={styles.bottomNav}>
      {tabs.map((tab) => (
        <View key={tab.label} style={styles.tabItem}>
          <Text style={[styles.tabIcon, tab.active && styles.tabActive]}>{tab.icon}</Text>
          <Text style={[styles.tabText, tab.active && styles.tabActive]}>{tab.label}</Text>
        </View>
      ))}
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" backgroundColor={YELLOW} />
      <View style={styles.screen}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
          <LocationHeader />
          <View style={styles.body}>
            <View style={styles.brandStrip}>
              <BrandLogo />
              <Text style={styles.brandCaption}>India's last minute app</Text>
            </View>

            <View style={styles.actionsRow}>
              {quickActions.map((item) => (
                <ActionChip key={item.id} item={item} />
              ))}
            </View>

            <PromoHero />

            <View style={styles.heroRow}>
              {heroTiles.map((tile) => (
                <HeroTile key={tile.id} tile={tile} />
              ))}
            </View>

            <SectionHeader title="Shop by category" action="see all" />
            <View style={styles.categoryGrid}>
              {categories.map((item) => (
                <CategoryCard key={item.id} item={item} />
              ))}
            </View>

            <SectionHeader title="Bestsellers" action="view all" />
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.productsRow}>
              {products.map((item) => (
                <ProductCard key={item.id} item={item} />
              ))}
            </ScrollView>
          </View>
        </ScrollView>
        <BottomNav />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: YELLOW,
  },
  screen: {
    flex: 1,
    backgroundColor: '#f5f6f8',
  },
  scrollContent: {
    paddingBottom: 92,
  },
  header: {
    backgroundColor: YELLOW,
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 18,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  deliveryBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  deliveryBig: {
    color: '#111',
    fontSize: 42,
    fontWeight: '900',
    letterSpacing: -2,
    lineHeight: 44,
  },
  deliverySmall: {
    color: '#111',
    fontSize: 18,
    fontWeight: '900',
    lineHeight: 20,
  },
  deliverySub: {
    color: '#111',
    fontSize: 13,
    fontWeight: '700',
    lineHeight: 15,
  },
  profileButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.78)',
  },

  iconGlyph: {
    fontSize: 16,
  },
  chevron: {
    color: '#111',
    fontSize: 18,
    fontWeight: '900',
    marginLeft: 3,
    marginTop: -3,
  },
  searchIcon: {
    color: '#555',
    fontSize: 19,
    fontWeight: '800',
  },
  arrowIcon: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '900',
    lineHeight: 18,
  },
  clockIcon: {
    color: '#555',
    fontSize: 9,
    fontWeight: '900',
  },
  locationTitle: {
    color: TEXT,
    fontSize: 16,
    fontWeight: '900',
  },
  locationLine: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 3,
    marginBottom: 14,
  },
  locationCopy: {
    color: '#222',
    fontSize: 13,
    maxWidth: '87%',
  },
  searchBar: {
    height: 48,
    borderRadius: 13,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 13,
    gap: 8,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  searchText: {
    flex: 1,
    color: '#555',
    fontSize: 15,
    fontWeight: '600',
    padding: 0,
  },
  body: {
    paddingHorizontal: 12,
  },
  brandStrip: {
    alignItems: 'center',
    paddingTop: 14,
    paddingBottom: 9,
  },
  logoLockup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 40,
    lineHeight: 45,
    fontWeight: '900',
    color: '#111',
    letterSpacing: -2.2,
  },
  logoGreen: {
    color: GREEN,
  },
  brandCaption: {
    marginTop: -3,
    fontSize: 12,
    fontWeight: '800',
    color: '#505050',
    letterSpacing: 1.1,
    textTransform: 'uppercase',
  },
  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  actionChip: {
    width: '23.4%',
    minHeight: 82,
    borderRadius: 18,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 9,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
  },
  actionIcon: {
    width: 40,
    height: 40,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 6,
  },
  actionEmoji: {
    fontSize: 22,
  },
  actionText: {
    color: TEXT,
    fontSize: 12,
    fontWeight: '800',
  },
  promoCard: {
    minHeight: 158,
    overflow: 'hidden',
    borderRadius: 24,
    backgroundColor: '#111',
    marginTop: 4,
    marginBottom: 14,
    padding: 18,
    flexDirection: 'row',
  },
  promoCopy: {
    flex: 1,
    zIndex: 1,
  },
  promoEyebrow: {
    color: YELLOW,
    fontSize: 12,
    fontWeight: '900',
    textTransform: 'uppercase',
    letterSpacing: 0.7,
  },
  promoTitle: {
    marginTop: 7,
    color: '#fff',
    fontSize: 23,
    lineHeight: 27,
    fontWeight: '900',
    maxWidth: 215,
  },
  promoSubtitle: {
    marginTop: 5,
    color: '#d8d8d8',
    fontSize: 13,
    fontWeight: '600',
  },
  shopNowButton: {
    marginTop: 13,
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    backgroundColor: GREEN,
    borderRadius: 18,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  shopNowText: {
    color: '#fff',
    fontWeight: '900',
    fontSize: 12,
  },
  promoBasket: {
    position: 'absolute',
    right: -6,
    bottom: -14,
    width: 148,
    height: 148,
    borderRadius: 74,
    backgroundColor: '#242424',
    alignItems: 'center',
    justifyContent: 'center',
  },
  basketEmoji: {
    fontSize: 58,
  },
  basketEmojiFloat: {
    position: 'absolute',
    left: 23,
    top: 24,
    fontSize: 36,
  },
  basketEmojiFloatTwo: {
    position: 'absolute',
    right: 22,
    bottom: 22,
    fontSize: 36,
  },
  heroRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  heroTile: {
    width: '31.8%',
    borderRadius: 18,
    padding: 12,
    minHeight: 113,
    borderWidth: 1,
    borderColor: '#fff',
  },
  heroEmoji: {
    fontSize: 29,
    marginBottom: 8,
  },
  heroTitle: {
    color: TEXT,
    fontSize: 14,
    fontWeight: '900',
  },
  heroSubtitle: {
    marginTop: 3,
    color: MUTED,
    fontSize: 11,
    fontWeight: '700',
  },
  sectionHeader: {
    marginTop: 2,
    marginBottom: 11,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sectionTitle: {
    color: TEXT,
    fontSize: 19,
    fontWeight: '900',
    letterSpacing: -0.4,
  },
  sectionAction: {
    color: GREEN,
    fontSize: 13,
    fontWeight: '900',
    textTransform: 'capitalize',
  },
  categoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  categoryCard: {
    width: '23.4%',
    minHeight: 122,
    marginBottom: 12,
    alignItems: 'center',
  },
  categoryIconWrap: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#fff',
  },
  categoryEmoji: {
    fontSize: 36,
  },
  categoryLabel: {
    marginTop: 7,
    color: TEXT,
    fontSize: 11,
    lineHeight: 13,
    textAlign: 'center',
    fontWeight: '800',
  },
  productsRow: {
    paddingRight: 12,
    gap: 10,
  },
  productCard: {
    width: 142,
    minHeight: 226,
    borderRadius: 16,
    backgroundColor: '#fff',
    padding: 9,
    borderWidth: 1,
    borderColor: '#eeeeee',
  },
  productBadge: {
    position: 'absolute',
    left: 9,
    top: 8,
    zIndex: 2,
    backgroundColor: '#ffeb99',
    color: '#7b5600',
    overflow: 'hidden',
    borderRadius: 6,
    paddingHorizontal: 5,
    paddingVertical: 2,
    fontSize: 8,
    fontWeight: '900',
  },
  productImage: {
    height: 94,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 7,
  },
  productEmoji: {
    fontSize: 45,
  },
  timePill: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
    paddingHorizontal: 4,
    paddingVertical: 2,
    backgroundColor: '#f4f4f4',
    borderRadius: 5,
    marginBottom: 5,
  },
  timeText: {
    color: '#555',
    fontSize: 8,
    fontWeight: '900',
  },
  productName: {
    color: TEXT,
    fontSize: 12,
    fontWeight: '900',
    lineHeight: 15,
    minHeight: 31,
  },
  productQuantity: {
    color: MUTED,
    fontSize: 11,
    marginTop: 5,
    fontWeight: '700',
  },
  productFooter: {
    marginTop: 'auto',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  productPrice: {
    color: TEXT,
    fontSize: 13,
    fontWeight: '900',
  },
  productMrp: {
    color: '#9b9b9b',
    fontSize: 10,
    fontWeight: '700',
    textDecorationLine: 'line-through',
  },
  addButton: {
    borderColor: GREEN,
    borderWidth: 1.2,
    backgroundColor: '#f7fff8',
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 6,
  },
  addButtonText: {
    color: GREEN,
    fontSize: 12,
    fontWeight: '900',
  },
  bottomNav: {
    position: 'absolute',
    left: 12,
    right: 12,
    bottom: 12,
    height: 64,
    borderRadius: 22,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 7 },
    elevation: 8,
  },
  tabItem: {
    alignItems: 'center',
    gap: 2,
    minWidth: 72,
  },
  tabIcon: {
    color: '#666',
    fontSize: 21,
    fontWeight: '900',
    lineHeight: 24,
  },
  tabText: {
    color: '#666',
    fontSize: 11,
    fontWeight: '800',
  },
  tabActive: {
    color: GREEN,
  },
});
