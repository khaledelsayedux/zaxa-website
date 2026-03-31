import { useCallback, useRef } from 'react';

/**
 * Shared hero / CTA tap sound — AudioContext created on first interaction (lower TBT).
 */
export function usePlayTabSound(): () => void {
  const audioContextRef = useRef<AudioContext | null>(null);

  return useCallback(() => {
    if (typeof window === 'undefined') return;
    if (!audioContextRef.current) {
      const AC =
        window.AudioContext ||
        (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (!AC) return;
      audioContextRef.current = new AC();
    }
    if (!audioContextRef.current) return;
    const ctx = audioContextRef.current;
    if (ctx.state === 'suspended') {
      void ctx.resume();
    }
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.frequency.value = 1800;
    osc.type = 'sine';
    gain.gain.setValueAtTime(0.06, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
    osc.start(now);
    osc.stop(now + 0.04);
  }, []);
}
