import React, { useState, useCallback, useRef, useEffect } from 'react';
import './css/style.css';

const SOUNDS = {
  bomb:       'assets/sounds/boom.mp3',
  cricket:    'assets/sounds/crickets.mp3',
  clap:       'assets/sounds/clapping.mp3',
  explosion:  'assets/sounds/suspense.mp3',
  grin:       'assets/sounds/happy.mp3',
  boy:        'assets/sounds/bruh.mp3',
  owl:        'assets/sounds/inspirational.mp3',
  brain:      'assets/sounds/math.mp3',
  astonished: 'assets/sounds/woah.mp3',
  violin:     'assets/sounds/sad-violin.mp3',
  volcano:    'assets/sounds/explosion.mp3',
  eye:        'assets/sounds/bombastic-side-eye.mp3',
};

export function SoundKeypad() {
  const [dialRotation, setDialRotation] = useState(-90);
  const audioRefs = useRef({});

  useEffect(() => {
    Object.entries(SOUNDS).forEach(([id, src]) => {
      const audio = new Audio(src);
      audio.preload = 'auto';
      audioRefs.current[id] = audio;
    });
    return () => {
      Object.values(audioRefs.current).forEach((a) => {
        a.pause();
        a.src = '';
      });
    };
  }, []);

  const play = useCallback((id) => {
    const audio = audioRefs.current[id];
    if (!audio) return;
    audio.currentTime = 0;
    audio.play().catch(() => {});
  }, []);

  const stopAll = useCallback(() => {
    Object.values(audioRefs.current).forEach((a) => {
      a.pause();
      a.currentTime = 0;
    });
  }, []);

  const handleDialClick = useCallback(() => {
    setDialRotation((r) => r + 45);
  }, []);

  const handleDialWheel = useCallback((e) => {
    e.preventDefault();
    setDialRotation((r) => r + (e.deltaY > 0 ? 15 : -15));
  }, []);

  return (
    <main className="page">
      <div className="keypad-device">
        <div className="shell">
          <div className="shell-notch" aria-hidden="true" />
          <div className="shell-cutout">
            <div className="plate">
              <div className="plate-base" />
              <div className="plate-texture" />

              <div className="screw screw-tl">
                <img src="assets/screw.png" alt="" />
                <img className="screw-slot" src="assets/screw-slot.png" alt="" />
              </div>
              <div className="screw screw-tr">
                <img src="assets/screw-alt.png" alt="" />
                <img className="screw-slot" src="assets/screw-slot.png" alt="" />
              </div>
              <div className="screw screw-bl">
                <img src="assets/screw.png" alt="" />
                <img className="screw-slot" src="assets/screw-slot.png" alt="" />
              </div>
              <div className="screw screw-br">
                <img src="assets/screw-alt.png" alt="" />
                <img className="screw-slot" src="assets/screw-slot.png" alt="" />
              </div>

              <div className="label label-left">made by mirandaiscoolz © 2026</div>
              <div className="label label-right">sound key pad</div>
              <div className="label label-bottom">all play, no work</div>

              <div className="button-grid">
                {/* Row 1 */}
                <div className="grid-cell">
                  <div className="scroll-wheel" aria-label="Scroll wheel">
                    <img src="assets/rotary-encoder.png" alt="" />
                  </div>
                </div>
                <div className="grid-cell">
                  <button className="keycap keycap-red" type="button" aria-label="Bomb" onClick={() => play('bomb')}>
                    💣
                  </button>
                </div>
                <div className="grid-cell">
                  <button className="keycap keycap-pink" type="button" aria-label="Cricket" onClick={() => play('cricket')}>
                    🦗
                  </button>
                </div>
                <div className="grid-cell">
                  <div className="dial" aria-label="Dial">
                    <div
                      className="dial-body"
                      style={{ transform: `rotate(${dialRotation}deg)` }}
                      onClick={handleDialClick}
                      onWheel={handleDialWheel}
                    >
                      <img className="dial-indicator" src="assets/dial-indicator.png" alt="" />
                    </div>
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid-cell">
                  <button className="keycap keycap-red" type="button" aria-label="Clap" onClick={() => play('clap')}>
                    👏
                  </button>
                </div>
                <div className="grid-cell">
                  <button className="keycap keycap-pink" type="button" aria-label="Explosion" onClick={() => play('explosion')}>
                    💥
                  </button>
                </div>
                <div className="grid-cell">
                  <button className="keycap keycap-purple" type="button" aria-label="Grin" onClick={() => play('grin')}>
                    😁
                  </button>
                </div>
                <div className="grid-cell">
                  <button className="keycap keycap-blue" type="button" aria-label="Boy" onClick={() => play('boy')}>
                    👦
                  </button>
                </div>

                {/* Row 3 */}
                <div className="grid-cell">
                  <button className="keycap keycap-pink" type="button" aria-label="Owl" onClick={() => play('owl')}>
                    🦉
                  </button>
                </div>
                <div className="grid-cell">
                  <button className="keycap keycap-purple" type="button" aria-label="Brain" onClick={() => play('brain')}>
                    🧠
                  </button>
                </div>
                <div className="grid-cell">
                  <button className="keycap keycap-blue" type="button" aria-label="Astonished" onClick={() => play('astonished')}>
                    😲
                  </button>
                </div>
                <div className="grid-cell grid-cell-pattern">
                  <button className="keycap keycap-green" type="button" aria-label="Violin" onClick={() => play('violin')}>
                    🎻
                  </button>
                  <div className="decorative-pattern" aria-hidden="true">
                    {Array.from({ length: 15 }).map((_, i) => (
                      <span key={i} />
                    ))}
                  </div>
                </div>

                {/* Row 4 */}
                <div className="grid-cell">
                  <div className="brand-logo">
                    <img src="assets/logo.png" alt="Brand logo" />
                  </div>
                </div>
                <div className="grid-cell">
                  <button className="keycap keycap-green" type="button" aria-label="Volcano" onClick={() => play('volcano')}>
                    🌋
                  </button>
                </div>
                <div className="grid-cell">
                  <button className="keycap keycap-red" type="button" aria-label="Eye" onClick={() => play('eye')}>
                    👁️
                  </button>
                </div>
                <div className="grid-cell">
                  <button className="keycap keycap-neutral" type="button" aria-label="Stop all sounds" onClick={stopAll}>
                    <img src="assets/smiley-face.png" alt="" />
                  </button>
                </div>
              </div>

              <div className="led-row" aria-hidden="true">
                <span className="led led-off" />
                <span className="led led-on" />
                <span className="led led-off" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="footer-text">new updates coming!!!</p>
    </main>
  );
}

export default SoundKeypad;
