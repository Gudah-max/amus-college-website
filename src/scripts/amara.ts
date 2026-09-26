const root = document.querySelector<HTMLElement>('.amara');

if (root) {
  const launcher = root.querySelector<HTMLButtonElement>('[data-amara-launcher]')!;
  const teaser = root.querySelector<HTMLButtonElement>('[data-amara-teaser]')!;
  const dialog = root.querySelector<HTMLDialogElement>('[data-amara-dialog]')!;
  const close = root.querySelector<HTMLButtonElement>('[data-amara-close]')!;
  const form = root.querySelector<HTMLFormElement>('[data-amara-form]')!;
  const input = root.querySelector<HTMLTextAreaElement>('[data-amara-input]')!;
  const send = root.querySelector<HTMLButtonElement>('[data-amara-send]')!;
  const messages = root.querySelector<HTMLElement>('[data-amara-messages]')!;
  const quickReplies = root.querySelector<HTMLElement>('[data-amara-quick-replies]')!;
  const typing = root.querySelector<HTMLElement>('[data-amara-typing]')!;
  const status = root.querySelector<HTMLElement>('[data-amara-status]')!;
  const history: Array<{ role: 'user' | 'assistant'; content: string }> = [];
  let started = false;

  const addMessage = (content: string, role: 'user' | 'assistant') => {
    const message = document.createElement('p');
    message.className = `amara__message amara__message--${role}`;
    message.textContent = content;
    messages.append(message);
    messages.scrollTop = messages.scrollHeight;
  };
  const open = () => {
    teaser.hidden = true;
    if (!dialog.open) dialog.showModal();
    if (!started) {
      started = true;
      addMessage('Hello, I’m Amara. I can help with general school information.', 'assistant');
    }
    window.setTimeout(() => input.focus(), 0);
  };
  const closeDialog = () => { if (dialog.open) dialog.close(); };
  const setBusy = (busy: boolean) => {
    input.disabled = busy;
    send.disabled = busy;
    typing.hidden = !busy;
    status.textContent = busy ? 'Amara is preparing a response.' : '';
  };
  const submit = async (question: string) => {
    const message = question.trim();
    if (!message || message.length > 700 || input.disabled) return;
    quickReplies.hidden = true;
    addMessage(message, 'user');
    input.value = '';
    history.push({ role: 'user', content: message });
    setBusy(true);
    try {
      const response = await fetch('/api/amara', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ message, history: history.slice(-7, -1) }) });
      const data = await response.json() as { reply?: string };
      if (!response.ok || !data.reply) throw new Error('No reply');
      addMessage(data.reply, 'assistant');
      history.push({ role: 'assistant', content: data.reply });
    } catch {
      const reply = 'I’m unable to connect right now. Please try again or contact the school at +256 782 442 940 or amuscollegeschool@gmail.com.';
      addMessage(reply, 'assistant');
      status.textContent = 'Amara is unavailable. School contact information has been provided.';
    } finally { setBusy(false); input.focus(); }
  };

  launcher.addEventListener('click', open);
  teaser.addEventListener('click', open);
  close.addEventListener('click', closeDialog);
  dialog.addEventListener('close', () => launcher.focus());
  dialog.addEventListener('cancel', event => { event.preventDefault(); closeDialog(); });
  form.addEventListener('submit', event => { event.preventDefault(); void submit(input.value); });
  input.addEventListener('keydown', event => { if (event.key === 'Enter' && !event.shiftKey) { event.preventDefault(); void submit(input.value); } });
  quickReplies.addEventListener('click', event => {
    const target = (event.target as HTMLElement).closest<HTMLButtonElement>('[data-amara-question]');
    if (target?.dataset.amaraQuestion) void submit(target.dataset.amaraQuestion);
  });
}
