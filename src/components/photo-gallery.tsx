'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, Expand, X } from 'lucide-react';
import { profile } from '@/data/profile';
import Reveal from '@/components/reveal';

export default function PhotoGallery() {
  const [selected, setSelected] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const photo = selected === null ? null : profile.gallery[selected];

  const isOpen = selected !== null;
  useEffect(() => {
    if (!isOpen) return;
    const element = dialog.current;
    element?.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { element?.close(); document.body.style.overflow = previousOverflow; };
  }, [isOpen]);

  function move(direction: number) { setSelected(index => index === null ? null : (index + direction + profile.gallery.length) % profile.gallery.length); }

  return <>
    <div className="photo-gallery">{profile.gallery.map((item, index) => <Reveal key={item.src} delay={(index % 4) * .06}><figure>
      <button className="gallery-image" onClick={() => setSelected(index)} aria-label={`Ampliar: ${item.alt}`}><Image src={item.src} alt={item.alt} fill quality={90} style={{ objectPosition: item.position }} sizes="(max-width: 760px) 43vw, (min-width: 1920px) 430px, 22vw" /><span className="gallery-expand"><Expand size={18} /></span></button>
      <figcaption><span>0{index + 1}</span>{item.caption}</figcaption>
    </figure></Reveal>)}</div>
    <dialog ref={dialog} className="photo-dialog" aria-labelledby="photo-caption" onClose={() => setSelected(null)} onCancel={() => setSelected(null)} onClick={event => { if (event.target === event.currentTarget) dialog.current?.close(); }} onKeyDown={event => {
      if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') { event.preventDefault(); move(event.key === 'ArrowRight' ? 1 : -1); }
    }}>
      {photo && <div className="photo-viewer"><button className="viewer-close" onClick={() => dialog.current?.close()} aria-label="Fechar fotografia"><X /></button><div className="viewer-image"><Image src={photo.src} alt={photo.alt} fill quality={95} sizes="(max-width: 760px) 90vw, 960px" style={{ objectPosition: 'center', objectFit: 'contain' }} /></div><div className="viewer-controls"><button onClick={() => move(-1)} aria-label="Fotografia anterior"><ArrowLeft /></button><p id="photo-caption" aria-live="polite">{photo.caption}<span>{(selected ?? 0) + 1} / {profile.gallery.length}</span></p><button onClick={() => move(1)} aria-label="Próxima fotografia"><ArrowRight /></button></div></div>}
    </dialog>
  </>;
}
