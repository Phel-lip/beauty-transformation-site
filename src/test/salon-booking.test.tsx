import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { BookingModal } from '@/components/BookingModal';
import { CATEGORIES, SERVICES } from '@/lib/salon';

afterEach(cleanup);

describe('Service selection', () => {
  it('includes nails as a distinct category and service', () => {
    expect(CATEGORIES).toContain('Unhas');
    expect(SERVICES.find((s) => s.id === 'unhas')?.category).toBe('Unhas');
  });
  it('uses a different photo for each service', () => {
    expect(new Set(SERVICES.map((s) => s.img)).size).toBe(SERVICES.length);
  });
  for (const service of SERVICES) {
    it(`keeps ${service.id} selected in the WhatsApp request`, () => {
      render(<BookingModal open initialService={service.id} onClose={() => {}} />);
      fireEvent.click(screen.getByRole('button', { name: 'Ver resumo' }));
      const link = screen.getByTestId('wa-link');
      const message = new URL(link.getAttribute('href') ?? '').searchParams.get('text');
      expect(message).toContain(`• Serviço: ${service.title}`);
      expect(CATEGORIES).toContain(service.category);
    });
  }
});