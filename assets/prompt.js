document.querySelectorAll('[data-game]').forEach((game) => {
  const button = game.querySelector('[data-copy]');
  const prompt = game.querySelector('[data-prompt]');
  const status = game.querySelector('[data-copy-status]');
  if (!button || !prompt || !status || button.disabled) return;
  button.addEventListener('click', async () => {
    const text = prompt.value;
    if (!text.trim()) {
      status.textContent = 'プロンプトがまだ用意されていません。';
      return;
    }
    button.disabled = true;
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(text);
      status.textContent = '全文をコピーしました。ChatGPTの新しいチャットに貼り付けて送信してください。';
    } catch {
      prompt.closest('details').open = true;
      prompt.focus();
      prompt.select();
      prompt.setSelectionRange(0, text.length);
      status.textContent = '自動コピーができませんでした。選択された全文を、端末のコピー操作でコピーしてください。';
    } finally {
      button.disabled = false;
    }
  });
});
