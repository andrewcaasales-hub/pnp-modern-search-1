import * as React from 'react';
import { Badge, Button, Link, Text } from '@fluentui/react-components';
import { ISalesOrder, ORDER_STAGES, OrderStatus } from '../../models/ISalesOrder';
import { BrandTokens, Typography, Spacing, Radius, Motion, Easing, StatusBadgeConfig } from '../../constants/BrandTokens';
import { MotionKeyframes, cardEntranceStyle, smoothHoverTransition, buttonInteraction, staggeredRevealStyle } from '../../constants/MotionUtils';

function stageIndexOf(status: OrderStatus): number {
  return ORDER_STAGES.findIndex(s => s.key === status);
}

interface IStageCircleProps {
  label: string;
  state: 'complete' | 'active' | 'pending';
  isLast: boolean;
}

const StageCircle: React.FC<IStageCircleProps> = ({ label, state, isLast }) => {
  const bg = state === 'complete' ? BrandTokens.success : state === 'active' ? BrandTokens.brandPrimary : BrandTokens.pending;
  const borderColour = state === 'pending' ? BrandTokens.success : 'transparent';
  const connectorBg = state === 'complete' ? BrandTokens.success : '#D2D0CE';

  return (
    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', minWidth: 64 }}>
      <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
        <div style={{
          width: 32, height: 32, borderRadius: '50%', background: bg, border: `2px solid ${borderColour}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
          boxShadow: state === 'active' ? `0 0 0 4px rgba(0,120,212,0.2)` : 'none',
          transition: `all ${Motion.base}ms ${Easing.easeInOutCubic}`,
        }}>
          {state === 'complete' && <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7l4 4 6-7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
          {state === 'active' && <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#fff' }} />}
        </div>
        {!isLast && <div style={{ flex: 1, height: 3, background: connectorBg, transition: `background ${Motion.moderate}ms ${Easing.easeInOutCubic}` }} />}
      </div>
      <span style={{ fontSize: 11, fontWeight: state === 'active' ? 600 : 400, color: state === 'pending' ? BrandTokens.textMuted : BrandTokens.text, marginTop: 6, textAlign: 'center', lineHeight: '1.2', whiteSpace: 'nowrap' }}>
        {label}
      </span>
    </div>
  );
};

const StatusBadge: React.FC<{ status: OrderStatus }> = ({ status }) => {
  const cfg = StatusBadgeConfig[status as keyof typeof StatusBadgeConfig] || { bg: '#F3F2F1', text: BrandTokens.text, label: status };
  return <Badge style={{ padding: '2px 10px', background: cfg.bg, color: cfg.text, fontSize: 11, fontWeight: 600, letterSpacing: '0.02em' }}>{cfg.label}</Badge>;
};

function formatCurrency(value: number, currency = 'GBP'): string {
  try { return new Intl.NumberFormat('en-GB', { style: 'currency', currency }).format(value); }
  catch { return `${currency} ${value.toLocaleString()}`; }
}

function formatDate(iso: string): string {
  try { return new Date(iso).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }); }
  catch { return iso; }
}

export interface ISalesOrderHoverCardProps { order: ISalesOrder; compact?: boolean; }

export const SalesOrderHoverCard: React.FC<ISalesOrderHoverCardProps> = ({ order, compact }) => {
  const isCancelled = order.Status === 'Cancelled';
  const isOnHold = order.Status === 'OnHold';
  const activeIndex = isCancelled || isOnHold ? -1 : stageIndexOf(order.Status);

  return (
    <>
    <style>{MotionKeyframes}</style>
    <div style={{ ...cardEntranceStyle(100), fontFamily: Typography.fontFamily, background: BrandTokens.surface, border: `1px solid ${BrandTokens.border}`, borderRadius: Radius.xl, boxShadow: BrandTokens.shadowXL, overflow: 'hidden', minWidth: compact ? 340 : 420, maxWidth: 540, position: 'relative', ...smoothHoverTransition() }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: BrandTokens.gradientAccent }} />
      <div style={{ background: BrandTokens.gradientHeader, padding: `${Spacing.lg}px 18px 14px`, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <Text style={{ ...Typography.captionSmall, color: BrandTokens.textLight }}>Sales Order</Text>
          <div style={{ fontSize: 16, fontWeight: 700, color: '#fff', marginTop: 4 }}>
            {order.OrderUrl ? <Link href={order.OrderUrl} style={{ color: '#fff', textDecoration: 'none' }} onMouseEnter={e => (e.currentTarget.style.textDecoration = 'underline')} onMouseLeave={e => (e.currentTarget.style.textDecoration = 'none')}>{order.OrderNumber}</Link> : order.OrderNumber}
          </div>
          {order.CustomerReference && <div style={{ fontSize: 11, color: BrandTokens.textLighter, marginTop: 3 }}>Ref: {order.CustomerReference}</div>}
        </div>
        <StatusBadge status={order.Status} />
      </div>
      <div style={{ padding: `${Spacing.lg}px 18px 13px`, background: isCancelled ? '#FDE7E9' : isOnHold ? '#FFF4CE' : BrandTokens.gradientProgress, borderBottom: `1px solid ${BrandTokens.border}` }}>
        {(isCancelled || isOnHold) ? (
          <div style={{ textAlign: 'center', padding: '6px 0', color: isCancelled ? BrandTokens.error : BrandTokens.warning, fontWeight: 600, fontSize: 13 }}>{order.Status}</div>
        ) : (
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            {ORDER_STAGES.map((stage, idx) => {
              const state = idx < activeIndex ? 'complete' : idx === activeIndex ? 'active' : 'pending';
              return <StageCircle key={stage.key} label={stage.label} state={state} isLast={idx === ORDER_STAGES.length - 1} />;
            })}
          </div>
        )}
      </div>
      {!compact && (
        <>
          <div style={{ padding: `${Spacing.lg}px 18px` }}><DetailGrid order={order} /></div>
          {order.Description && (
            <div style={{ margin: '0 18px 12px', padding: `${Spacing.md}px ${Spacing.md}px`, background: BrandTokens.surfaceAlt, border: `1px dashed ${BrandTokens.borderStrong}`, borderRadius: Radius.md, fontSize: 12, color: BrandTokens.textMuted, lineHeight: '1.5' }}>
              {order.Description}
            </div>
          )}
          <div style={{ padding: `${Spacing.md}px 18px`, borderTop: `1px solid ${BrandTokens.border}`, display: 'flex', gap: 10, justifyContent: 'flex-end', background: '#FCFDFF' }}>
            {order.OrderUrl && <ActionLink href={order.OrderUrl} label="Open Order" primary />}
          </div>
        </>
      )}
    </div>
    </>
  );
};

const DetailGrid: React.FC<{ order: ISalesOrder }> = ({ order }) => {
  const items: Array<{ label: string; value: React.ReactNode }> = [
    { label: 'Customer', value: order.CustomerName },
    order.SalesRep ? { label: 'Sales Rep', value: order.SalesRep } : null,
    order.OrderDate ? { label: 'Order Date', value: formatDate(order.OrderDate) } : null,
    order.RequiredDate ? { label: 'Required', value: formatDate(order.RequiredDate) } : null,
    order.TotalValue !== undefined ? { label: 'Value', value: <strong>{formatCurrency(order.TotalValue, order.Currency)}</strong> } : null,
  ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>;

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px 16px' }}>
      {items.map((item, i) => (
        <div key={i} style={{ ...staggeredRevealStyle(i, 50), background: '#FAFCFF', border: `1px solid ${BrandTokens.borderSubtle}`, borderRadius: Radius.md, padding: '8px 9px' }}>
          <div style={{ ...Typography.captionSmall, color: BrandTokens.textMuted, marginBottom: 2 }}>{item.label}</div>
          <div style={{ fontSize: 13, color: BrandTokens.text, fontWeight: 500 }}>{item.value}</div>
        </div>
      ))}
    </div>
  );
};

const ActionLink: React.FC<{ href: string; label: string; primary?: boolean }> = ({ href, label, primary }) => (
  <Button as="a" href={href} target="_blank" rel="noopener noreferrer" appearance={primary ? 'primary' : 'secondary'} style={{
    display: 'inline-flex', alignItems: 'center', gap: 5, padding: '5px 12px', borderRadius: Radius.round, fontSize: 12, fontWeight: 600,
    textDecoration: 'none', background: primary ? BrandTokens.gradientButton : '#F3F2F1', color: primary ? '#fff' : BrandTokens.text,
    border: primary ? 'none' : `1px solid ${BrandTokens.border}`, cursor: 'pointer', ...smoothHoverTransition(),
  }} {...buttonInteraction}>
    {label}
  </Button>
);
