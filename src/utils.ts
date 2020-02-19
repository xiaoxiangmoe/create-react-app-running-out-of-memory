import { PDFSource } from 'pdfjs-dist';
import { getDocument } from 'pdfjs-dist/webpack';

export async function getDataUrlFrom(source: PDFSource) {

  const doc = await getDocument(source).promise;

  const page = await doc.getPage(1);

  const viewport = page.getViewport({
    scale: 1,
  });

  const canvas = document.createElement('canvas');
  canvas.width = viewport.width;
  canvas.height = viewport.height;

  await page.render({
    // @ts-ignore
    canvasContext: canvas.getContext('2d'),
    viewport,
    enableWebGL: false,
    background: 'transparent',
  }).promise;
  // @ts-ignore
  page.cleanup();
  // @ts-ignore
  doc.cleanup();
  await doc.destroy();
  const dataUrl = canvas.toDataURL();

  return dataUrl;
}