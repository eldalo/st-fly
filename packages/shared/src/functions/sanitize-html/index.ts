import DOMPurify from 'dompurify';

export function sanitizeHTML(htmlString: string): string {
  return DOMPurify.sanitize(htmlString);
}
