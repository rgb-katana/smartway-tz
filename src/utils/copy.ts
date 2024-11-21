import copy from 'clipboard-copy';

export const copyToClipboard = async (text: string): Promise<void> => {
  try {
    await copy(text);
  } catch (error) {
    console.error('Failed to copy text to clipboard:', error);
  }
};
