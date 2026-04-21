import * as React from 'react';
import { Badge, Button, Link, Text } from '@fluentui/react-components';
import { IUnit, UnitStatus, UnitCondition } from '../../models/IUnit';
import { BrandTokens, Typography, Spacing, Radius, Motion, Easing, UnitStatusConfig, UnitConditionConfig } from '../../constants/BrandTokens';
import { MotionKeyframes, cardEntranceStyle, smoothHoverTransition, staggeredRevealStyle, shimmerStyle } from '../../constants/MotionUtils';

// ─── status badge ─────────────────────────────────────────────────────────────
const UnitStatusBadge: React.FC<{ status: UnitStatus }> = ({ status }) => {
  const cfg = UnitStatusConfig[status] || { bg: '#F3F2F1', text: BrandTokens.text, dot: BrandTokens.textMuted };
  return (
    <Badge style={{ display: 'inline-flex', alignItems: 'center', gap: 5,
      padding: '3px 10px', borderRadius: 12, background: cfg.bg, color: cfg.text,
      fontSize: 11, fontWeight: 600 }}>
      <span style={{ width: 7, height: 7, borderRadius: '50%', background: cfg.dot, display: 'inline-block' }} />
      {status === 'OnOrder' ? 'On Order' : status === 'InService' ? 'In Service' : status}
    </Badge>
  );
};

// ─── stat pill ────────────────────────────────────────────────────────────────
const StatPill: React.FC<{ label: string; value: React.ReactNode; accent?: boolean }> = ({ label, value, accent }) => (
  <div style={{
    ...staggeredRevealStyle(0, 0),
    background: accent ? '#EFF6FC' : BrandTokens.surfaceAlt,
    border: `1px solid ${accent ? '#C7E0F4' : BrandTokens.border}`,
    borderRadius: Radius.sm,
    padding: `${Spacing.xs}px ${Spacing.sm}px`,
    minWidth: 90,
  }}>
    <div style={{ ...Typography.captionSmall, color: BrandTokens.textMuted, marginBottom: 2 }}>
      {label}
    </div>
    <div style={{ fontSize: 13, fontWeight: 600, color: accent ? BrandTokens.info : BrandTokens.text, lineHeight: '1.2' }}>
      {value}
    </div>
  </div>
);

// ─── quick link ───────────────────────────────────────────────────────────────
const QuickLink: React.FC<{ href: string; icon: string; label: string; colour?: string }> = ({ href, icon, label, colour }) => (
  <Button
    as="a"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    title={label}
    appearance="subtle"
    style={{
      display: 'inline-flex', flexDirection: 'column', alignItems: 'center',
      gap: 3, padding: `${Spacing.sm}px ${Spacing.sm}px`, borderRadius: Radius.sm,
      background: BrandTokens.surface, border: `1px solid ${BrandTokens.border}`,
      color: colour || BrandTokens.text, textDecoration: 'none',
      fontSize: 10, fontWeight: 600, minWidth: 62,
      cursor: 'pointer', ...smoothHoverTransition(),
    }}
    onMouseEnter={e => {
      e.currentTarget.style.background = colour || BrandTokens.info;
      e.currentTarget.style.color = '#fff';
      e.currentTarget.style.borderColor = 'transparent';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.background = BrandTokens.surface;
      e.currentTarget.style.color = colour || BrandTokens.text;
      e.currentTarget.style.borderColor = BrandTokens.border;
    }}
  >
    <span style={{ fontSize: 18 }}>{icon}</span>
    <Text style={{ textAlign: 'center', lineHeight: '1.2' }}>{label}</Text>
  </Button>
);

// ─── currency formatter ───────────────────────────────────────────────────────
function formatCurrency(value: number, currency = 'GBP'): string {
  try {
    return new Intl.NumberFormat('en-GB', { style: 'currency', currency, maximumFractionDigits: 0 }).format(value);
  } catch {
    return `${currency} ${value.toLocaleString()}`;
  }
}

function formatMileage(m: number): string {
  return `${m.toLocaleString()} mi`;
}

function formatDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
  } catch {
    return iso;
  }
}

// ─── placeholder image ────────────────────────────────────────────────────────
const VehiclePlaceholder: React.FC<{ make: string }> = ({ make }) => (
  <div style={{
    width: '100%', height: 140,
    background: BrandTokens.gradientHeader,
    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
    color: 'rgba(255,255,255,0.4)',
  }}>
    <span style={{ fontSize: 40 }}>🚗</span>
    <span style={{ fontSize: 12, marginTop: 4 }}>{make}</span>
  </div>
);

// ─── compliance dot ───────────────────────────────────────────────────────────
function complianceDot(dateStr: string | undefined, label: string): React.ReactNode {
  if (!dateStr) return null;
  const exp = new Date(dateStr);
  const now = new Date();
  const daysLeft = Math.floor((exp.getTime() - now.getTime()) / 86400000);
  const colour = daysLeft < 0 ? BrandTokens.error : daysLeft < 30 ? BrandTokens.warning : BrandTokens.success;
  const text = daysLeft < 0
    ? `${label}: EXPIRED`
    : daysLeft < 30
    ? `${label}: ${daysLeft}d left`
    : `${label}: ${formatDate(dateStr)}`;
  return (
    <span key={label} style={{ display: 'inline-flex', alignItems: 'center', gap: 4,
      fontSize: 11, color: colour, fontWeight: daysLeft < 30 ? 600 : 400 }}>
      <span style={{ width: 6, height: 6, borderRadius: '50%', background: colour, display: 'inline-block' }} />
      {text}
    </span>
  );
}

// ─── main card ────────────────────────────────────────────────────────────────
export interface IUnitSearchCardProps {
  unit: IUnit;
}

export const UnitSearchCard: React.FC<IUnitSearchCardProps> = ({ unit }) => {
  const condCfg = UnitConditionConfig[unit.Condition] || { label: unit.Condition, colour: BrandTokens.textMuted };

  const primaryStats: Array<{ label: string; value: React.ReactNode; accent?: boolean }> = [
    unit.Year         ? { label: 'Year',         value: unit.Year } : null,
    unit.Mileage      ? { label: 'Mileage',      value: formatMileage(unit.Mileage) } : null,
    unit.FuelType     ? { label: 'Fuel',         value: unit.FuelType } : null,
    unit.Transmission ? { label: 'Transmission', value: unit.Transmission } : null,
    unit.Colour       ? { label: 'Colour',       value: unit.Colour } : null,
    unit.EngineSize   ? { label: 'Engine',       value: unit.EngineSize } : null,
  ].filter(Boolean) as Array<{ label: string; value: React.ReactNode; accent?: boolean }>;

  const quickLinks: Array<{ href: string; icon: string; label: string; colour: string }> = [
    unit.PartsCatalogueUrl ? { href: unit.PartsCatalogueUrl, icon: '🔧', label: 'Parts\nCatalogue', colour: BrandTokens.warning } : null,
    unit.ServiceHistoryUrl ? { href: unit.ServiceHistoryUrl, icon: '📋', label: 'Service\nHistory',  colour: BrandTokens.success  } : null,
    unit.SpecificationUrl  ? { href: unit.SpecificationUrl,  icon: '📄', label: 'Full\nSpec',        colour: BrandTokens.info  } : null,
    unit.FinanceUrl        ? { href: unit.FinanceUrl,        icon: '💰', label: 'Finance',           colour: BrandTokens.success } : null,
    unit.UnitUrl           ? { href: unit.UnitUrl,           icon: '🔗', label: 'Unit\nRecord',      colour: BrandTokens.brandPrimary  } : null,
  ].filter(Boolean) as Array<{ href: string; icon: string; label: string; colour: string }>;

  return (
    <>
    <style>{MotionKeyframes}</style>
    <div
      style={{
        ...cardEntranceStyle(120),
        fontFamily: Typography.fontFamily,
        background: BrandTokens.surface,
        border: `1px solid ${BrandTokens.border}`,
        borderRadius: Radius.xl,
        boxShadow: BrandTokens.shadowXL,
        overflow: 'hidden',
        width: '100%',
        maxWidth: 360,
        ...smoothHoverTransition(),
      }}
    >
      {/* ── image ── */}
      <div style={{ position: 'relative' }}>
        {unit.ImageUrl ? (
          <img
            src={unit.ImageUrl}
            alt={`${unit.Make} ${unit.Model}`}
            style={{ width: '100%', height: 140, objectFit: 'cover', display: 'block' }}
          />
        ) : (
          <VehiclePlaceholder make={unit.Make} />
        )}
        {/* condition ribbon */}
        <div style={{
          position: 'absolute', top: 10, left: 0,
          background: condCfg.colour, color: '#fff',
          fontSize: 10, fontWeight: 700, padding: '3px 10px 3px 8px',
          borderRadius: `0 ${Radius.lg}px ${Radius.lg}px 0`, letterSpacing: '0.06em',
          textTransform: 'uppercase',
        }}>
          {condCfg.label}
        </div>
        {/* status badge */}
        <div style={{ position: 'absolute', top: 10, right: 10 }}>
          <UnitStatusBadge status={unit.Status} />
        </div>
      </div>

      {/* ── title bar ── */}
      <div style={{
        background: BrandTokens.gradientHeader,
        padding: `${Spacing.md}px ${Spacing.md}px`,
        display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between',
      }}>
        <div>
          <div style={{ fontSize: 16, fontWeight: 700, color: '#fff' }}>
            {unit.UnitUrl ? (
              <Link href={unit.UnitUrl} style={{ color: '#fff', textDecoration: 'none' }}
                 onMouseEnter={e => (e.currentTarget.style.textDecoration = 'underline')}
                 onMouseLeave={e => (e.currentTarget.style.textDecoration = 'none')}>
                {unit.Make} {unit.Model}
                {unit.Variant ? <span style={{ fontWeight: 400, fontSize: 13 }}> {unit.Variant}</span> : null}
              </Link>
            ) : `${unit.Make} ${unit.Model}${unit.Variant ? ' ' + unit.Variant : ''}`}
          </div>
          <div style={{ display: 'flex', gap: 10, marginTop: 4 }}>
            {unit.Registration && (
              <span style={{
                display: 'inline-block', background: BrandTokens.accentGold, color: '#1A1A1A',
                fontWeight: 700, fontSize: 12, padding: '1px 8px', borderRadius: Radius.sm,
                letterSpacing: '0.08em', fontFamily: 'monospace',
              }}>
                {unit.Registration}
              </span>
            )}
            {unit.VIN && (
              <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)', alignSelf: 'center' }}>
                VIN: {unit.VIN}
              </span>
            )}
          </div>
        </div>
        {(unit.Price || unit.Valuation) && (
          <div style={{ textAlign: 'right' }}>
            {unit.Price ? (
              <div style={{ fontSize: 16, fontWeight: 700, color: BrandTokens.accentGold }}>
                {formatCurrency(unit.Price, unit.Currency)}
              </div>
            ) : null}
            {unit.Valuation && unit.Valuation !== unit.Price ? (
              <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)', marginTop: 1 }}>
                Val: {formatCurrency(unit.Valuation, unit.Currency)}
              </div>
            ) : null}
          </div>
        )}
      </div>

      {/* ── stats grid ── */}
      {primaryStats.length > 0 && (
        <div style={{ padding: `${Spacing.md}px ${Spacing.md}px`, background: BrandTokens.surfaceAlt, borderBottom: `1px solid ${BrandTokens.border}` }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {primaryStats.map((s, i) => (
              <StatPill key={i} label={s.label} value={s.value} accent={s.accent} />
            ))}
          </div>
        </div>
      )}

      {/* ── compliance indicators ── */}
      {(unit.MOTExpiry || unit.TaxExpiry || unit.NextServiceDue) && (
        <div style={{
          padding: `${Spacing.sm}px ${Spacing.md}px`, background: BrandTokens.surface, borderBottom: `1px solid ${BrandTokens.border}`,
          display: 'flex', flexWrap: 'wrap', gap: '6px 14px',
        }}>
          {complianceDot(unit.MOTExpiry, 'MOT')}
          {complianceDot(unit.TaxExpiry, 'Tax')}
          {complianceDot(unit.NextServiceDue, 'Next Service')}
        </div>
      )}

      {/* ── owner / location ── */}
      {(unit.Owner || unit.Location) && (
        <div style={{ padding: '6px 14px', background: BrandTokens.surface, borderBottom: `1px solid ${BrandTokens.border}`,
          display: 'flex', gap: 14, fontSize: 11, color: BrandTokens.textMuted }}>
          {unit.Owner    && <span>👤 {unit.Owner}</span>}
          {unit.Location && <span>📍 {unit.Location}</span>}
        </div>
      )}

      {/* ── quick links ── */}
      {quickLinks.length > 0 && (
        <div style={{ padding: `${Spacing.md}px ${Spacing.md}px`, background: BrandTokens.surface, borderTop: `1px solid ${BrandTokens.border}` }}>
          <div style={{ ...Typography.captionSmall, color: BrandTokens.textMuted, marginBottom: 6 }}>
            Quick Links
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {quickLinks.map((ql, i) => (
              <QuickLink key={i} href={ql.href} icon={ql.icon} label={ql.label} colour={ql.colour} />
            ))}
          </div>
        </div>
      )}
    </div>
    </>
  );
};
