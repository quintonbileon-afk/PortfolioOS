import { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const DEFAULT_AVATAR = PORTFOLIO_DATA.owner.avatar;
const STORAGE_KEY = 'portfolio_custom_avatar_v1';
const PHOTO_EVENT = 'portfolio_photo_changed';

export function getStoredAvatar(): string {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && saved.startsWith('data:image')) {
      return saved;
    }
  } catch {
    // ignore
  }
  return DEFAULT_AVATAR;
}

export function saveCustomAvatar(dataUrl: string) {
  try {
    localStorage.setItem(STORAGE_KEY, dataUrl);
    window.dispatchEvent(new CustomEvent(PHOTO_EVENT, { detail: dataUrl }));
  } catch (err) {
    console.error('Failed to store custom avatar', err);
  }
}

export function resetAvatar() {
  try {
    localStorage.removeItem(STORAGE_KEY);
    window.dispatchEvent(new CustomEvent(PHOTO_EVENT, { detail: DEFAULT_AVATAR }));
  } catch {
    // ignore
  }
}

export function useProfilePhoto() {
  const [photoUrl, setPhotoUrl] = useState<string>(getStoredAvatar);

  useEffect(() => {
    const handler = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail) {
        setPhotoUrl(customEvent.detail);
      } else {
        setPhotoUrl(getStoredAvatar());
      }
    };

    window.addEventListener(PHOTO_EVENT, handler);
    window.addEventListener('storage', handler);
    return () => {
      window.removeEventListener(PHOTO_EVENT, handler);
      window.removeEventListener('storage', handler);
    };
  }, []);

  return {
    photoUrl,
    setCustomPhoto: saveCustomAvatar,
    resetPhoto: resetAvatar,
    isCustom: photoUrl !== DEFAULT_AVATAR
  };
}
