const CHARSET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

export function generateCaptchaCode(length = 6): string {
  let code = "";
  for (let i = 0; i < length; i++) {
    code += CHARSET[Math.floor(Math.random() * CHARSET.length)];
  }
  return code;
}

export function drawCaptcha(canvas: HTMLCanvasElement, code: string): void {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const { width, height } = canvas;

  ctx.clearRect(0, 0, width, height);

  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, "#0d1526");
  gradient.addColorStop(1, "#1a1040");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  for (let i = 0; i < 6; i++) {
    ctx.strokeStyle = `rgba(0, 194, 255, ${0.1 + Math.random() * 0.2})`;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(Math.random() * width, Math.random() * height);
    ctx.bezierCurveTo(
      Math.random() * width,
      Math.random() * height,
      Math.random() * width,
      Math.random() * height,
      Math.random() * width,
      Math.random() * height
    );
    ctx.stroke();
  }

  for (let i = 0; i < 40; i++) {
    ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.15})`;
    ctx.beginPath();
    ctx.arc(Math.random() * width, Math.random() * height, Math.random() * 2, 0, Math.PI * 2);
    ctx.fill();
  }

  const charWidth = width / (code.length + 1);

  for (let i = 0; i < code.length; i++) {
    const x = charWidth * (i + 0.8);
    const y = height / 2 + (Math.random() - 0.5) * 12;
    const angle = (Math.random() - 0.5) * 0.5;
    const fontSize = 28 + Math.random() * 8;

    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle);

    const colors = ["#00c2ff", "#7b61ff", "#f5a623", "#4ade80", "#f472b6"];
    ctx.fillStyle = colors[i % colors.length];
    ctx.font = `bold ${fontSize}px monospace`;
    ctx.shadowColor = "rgba(0, 194, 255, 0.4)";
    ctx.shadowBlur = 4;
    ctx.fillText(code[i], 0, 0);

    ctx.restore();
  }

  for (let i = 0; i < 3; i++) {
    ctx.strokeStyle = `rgba(123, 97, 255, ${0.2 + Math.random() * 0.3})`;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, Math.random() * height);
    ctx.lineTo(width, Math.random() * height);
    ctx.stroke();
  }
}

export const CAPTCHA_STORAGE_KEY = "xsplash_captcha_verified";
